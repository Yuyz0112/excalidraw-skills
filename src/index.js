import {
  computeBoundTextPosition,
  getCommonBoundingBox,
  getVisibleElements,
  hashElementsVersion,
  newArrowElement,
  newElement,
  newElementWith,
  newFrameElement,
  newFreeDrawElement,
  newImageElement,
  newLinearElement,
  newTextElement,
  setCustomTextMetricsProvider,
  wrapText
} from "@excalidraw/element";
import { COLOR_PALETTE, getFontString } from "@excalidraw/common";

export { COLOR_PALETTE };

const DEFAULT_ELEMENT_LIMIT = 80;
const DEFAULT_TEXT_LIMIT = 120;
const DEFAULT_SOURCE = "excalidraw-skill";

setCustomTextMetricsProvider({
  getLineWidth(text, fontString) {
    const fontSize = parseFontSize(fontString);
    let width = 0;
    for (const char of text) {
      width += char.codePointAt(0) > 255 ? fontSize : fontSize * 0.55;
    }
    return width;
  }
});

export function parseScene(input) {
  const scene = typeof input === "string" ? JSON.parse(input) : structuredClone(input);
  if (!scene || typeof scene !== "object" || !Array.isArray(scene.elements)) {
    throw new TypeError("Expected an Excalidraw scene object with an elements array.");
  }
  return scene;
}

export function createScene(options = {}) {
  return {
    type: "excalidraw",
    version: 2,
    source: options.source ?? DEFAULT_SOURCE,
    elements: options.elements ?? [],
    appState: options.appState ?? {},
    files: options.files ?? {}
  };
}

// Ensure a parsed scene fragment carries the required Excalidraw envelope so
// the builder always writes a file the app accepts (a missing `type`/`version`
// makes Excalidraw reject the file as invalid).
function normalizeScene(scene) {
  return {
    ...scene,
    type: scene.type ?? "excalidraw",
    version: scene.version ?? 2,
    source: scene.source ?? DEFAULT_SOURCE,
    appState: scene.appState ?? {},
    files: scene.files ?? {}
  };
}

export function summarizeScene(input, options = {}) {
  const scene = parseScene(input);
  const elements = getVisibleElements(scene.elements);
  const limit = options.limit ?? DEFAULT_ELEMENT_LIMIT;
  const typeCounts = countBy(elements, (element) => element.type || "unknown");

  return pruneUndefined({
    type: scene.type,
    version: scene.version,
    source: scene.source,
    elementCount: scene.elements.length,
    visibleElementCount: elements.length,
    deletedElementCount: scene.elements.length - elements.length,
    versionHash: hashElementsVersion(scene.elements),
    typeCounts,
    bounds: boundsForElements(elements),
    filesCount: scene.files ? Object.keys(scene.files).length : 0,
    sample: elements.slice(0, limit).map((element) => compactElement(element, options)),
    truncated: elements.length > limit
  });
}

export function listElements(input, query = {}) {
  const scene = parseScene(input);
  const offset = query.offset ?? 0;
  const limit = query.limit ?? DEFAULT_ELEMENT_LIMIT;
  const elements = getVisibleElements(scene.elements).filter((element) => matchesQuery(element, query));

  return {
    total: elements.length,
    offset,
    limit,
    elements: elements.slice(offset, offset + limit).map((element) => compactElement(element, query)),
    truncated: offset + limit < elements.length
  };
}

export function expandElements(input, ids, options = {}) {
  const scene = parseScene(input);
  const idSet = new Set(ids);

  if (options.includeBoundText) {
    for (const element of scene.elements) {
      if (idSet.has(element.containerId)) {
        idSet.add(element.id);
      }
    }
  }

  if (options.includeGroups) {
    const groupIds = new Set();
    for (const element of scene.elements) {
      if (idSet.has(element.id)) {
        for (const groupId of element.groupIds ?? []) {
          groupIds.add(groupId);
        }
      }
    }
    for (const element of scene.elements) {
      if ((element.groupIds ?? []).some((groupId) => groupIds.has(groupId))) {
        idSet.add(element.id);
      }
    }
  }

  return scene.elements.filter((element) => idSet.has(element.id));
}

export function describeScene(input, options = {}) {
  const scene = parseScene(input);
  const elements = getVisibleElements(scene.elements);
  const elementsById = new Map(elements.map((element) => [element.id, element]));
  const labelsByContainerId = collectBoundTextLabels(elements);
  const edges = elements
    .filter((element) => element.type === "arrow" && (element.startBinding || element.endBinding))
    .map((element) => describeEdge(element, elementsById))
    .filter(Boolean);
  const edgeElementIds = new Set(edges.map((edge) => edge.id));
  const labelElementIds = new Set([...labelsByContainerId.values()].flat().map((label) => label.id));
  const nodes = elements
    .filter((element) => !edgeElementIds.has(element.id) && !labelElementIds.has(element.id))
    .map((element) => describeNode(element, labelsByContainerId, edges));

  return {
    scene: {
      type: scene.type,
      version: scene.version,
      source: scene.source,
      elements: scene.elements.length,
      visibleElements: elements.length,
      deletedElements: scene.elements.length - elements.length,
      bounds: boundsArray(boundsForElements(elements)),
      files: scene.files ? Object.keys(scene.files).length : 0,
      versionHash: hashElementsVersion(scene.elements)
    },
    nodes: limitItems(nodes, options.nodeLimit ?? options.limit),
    edges: limitItems(edges, options.edgeLimit ?? options.limit)
  };
}

export function formatScene(input, options = {}) {
  const description = describeScene(input, options);
  const format = options.format ?? "yaml";
  if (format !== "yaml") {
    throw new Error(`Unsupported scene format: ${format}`);
  }
  return formatYamlLike(description);
}

// Detect arrows that visually cross a shape they are not bound to — the most
// common cause of an unreadable diagram. Run it after generating or editing a
// scene to validate arrow routing.
//
// Returns only the offenders: `[{ id, crosses: [obstacleId, ...] }, ...]`.
//
// Options:
//   margin       clearance in px to inflate every obstacle by (default 0).
//   isObstacle   predicate selecting which elements block arrows
//                (default: rectangle / ellipse / diamond / image). Exclude big
//                background containers such as swim-lanes/bands here.
//   curveSamples spline samples per segment for rounded arrows (default 16).
//   cellSize     spatial-grid cell size for the broad phase (default 256).
//
// Performance: obstacles are bucketed into a uniform grid once; each arrow only
// tests the obstacles in the cells its segments pass through, with a segment/AABB
// bounding-box reject before the exact Liang-Barsky test. Cost scales with local
// density, not total element count.
export function findArrowCrossings(input, options = {}) {
  const scene = parseScene(input);
  const margin = options.margin ?? 0;
  const samples = options.curveSamples ?? 16;
  const cell = options.cellSize ?? 256;
  const isObstacle = options.isObstacle ?? isDefaultObstacle;
  const elements = getVisibleElements(scene.elements);

  const obstacles = [];
  for (const element of elements) {
    if (element.type === "arrow" || !isObstacle(element)) {
      continue;
    }
    obstacles.push(obstacleBox(element));
  }
  const grid = buildObstacleGrid(obstacles, margin, cell);

  const results = [];
  for (const element of elements) {
    if (element.type !== "arrow") {
      continue;
    }
    const path = arrowWorldPath(element, samples);
    if (path.length < 2) {
      continue;
    }
    const bound = new Set(
      [element.startBinding?.elementId, element.endBinding?.elementId].filter(Boolean)
    );
    const hit = new Set();
    for (let i = 0; i < path.length - 1; i++) {
      const p = path[i];
      const q = path[i + 1];
      const sMinX = Math.min(p.x, q.x);
      const sMaxX = Math.max(p.x, q.x);
      const sMinY = Math.min(p.y, q.y);
      const sMaxY = Math.max(p.y, q.y);
      for (const index of queryObstacleGrid(grid, sMinX, sMinY, sMaxX, sMaxY, margin)) {
        const box = obstacles[index];
        if (hit.has(box.id) || bound.has(box.id)) {
          continue;
        }
        if (sMaxX < box.minX - margin || sMinX > box.maxX + margin || sMaxY < box.minY - margin || sMinY > box.maxY + margin) {
          continue;
        }
        if (segmentHitsBox(p, q, box, margin)) {
          hit.add(box.id);
        }
      }
    }
    if (hit.size) {
      results.push({ id: element.id, crosses: [...hit] });
    }
  }
  return results;
}

function isDefaultObstacle(element) {
  return element.type === "rectangle" || element.type === "ellipse" || element.type === "diamond" || element.type === "image";
}

function obstacleBox(element) {
  const x = Number(element.x) || 0;
  const y = Number(element.y) || 0;
  const width = Number(element.width) || 0;
  const height = Number(element.height) || 0;
  return { id: element.id, minX: x, minY: y, maxX: x + width, maxY: y + height };
}

// World-space polyline of an arrow, sampled as a spline when it is rounded so
// the test follows the rendered curve (which bulges past its control points).
function arrowWorldPath(element, samples) {
  const ox = Number(element.x) || 0;
  const oy = Number(element.y) || 0;
  const control = (element.points ?? []).map(([px, py]) => ({ x: ox + px, y: oy + py }));
  let path = element.roundness && !element.elbowed && control.length > 2 ? sampleCatmullRom(control, samples) : control;
  const angle = Number(element.angle) || 0;
  if (angle) {
    const cx = ox + (Number(element.width) || 0) / 2;
    const cy = oy + (Number(element.height) || 0) / 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    path = path.map((point) => {
      const dx = point.x - cx;
      const dy = point.y - cy;
      return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
    });
  }
  return path;
}

function sampleCatmullRom(points, samples) {
  const out = [points[0]];
  const at = (i) => points[Math.max(0, Math.min(points.length - 1, i))];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    for (let s = 1; s <= samples; s++) {
      const t = s / samples;
      const t2 = t * t;
      const t3 = t2 * t;
      out.push({
        x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3)
      });
    }
  }
  return out;
}

// Liang-Barsky: does segment (p,q) enter the axis-aligned box inflated by margin?
function segmentHitsBox(p, q, box, margin) {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  const lower = [-dx, dx, -dy, dy];
  const upper = [p.x - (box.minX - margin), (box.maxX + margin) - p.x, p.y - (box.minY - margin), (box.maxY + margin) - p.y];
  let t0 = 0;
  let t1 = 1;
  for (let i = 0; i < 4; i++) {
    if (lower[i] === 0) {
      if (upper[i] < 0) {
        return false;
      }
      continue;
    }
    const r = upper[i] / lower[i];
    if (lower[i] < 0) {
      if (r > t0) t0 = r;
    } else if (r < t1) {
      t1 = r;
    }
  }
  return t0 < t1;
}

function buildObstacleGrid(obstacles, margin, cell) {
  const cells = /* @__PURE__ */ new Map();
  for (let i = 0; i < obstacles.length; i++) {
    const box = obstacles[i];
    const x0 = Math.floor((box.minX - margin) / cell);
    const x1 = Math.floor((box.maxX + margin) / cell);
    const y0 = Math.floor((box.minY - margin) / cell);
    const y1 = Math.floor((box.maxY + margin) / cell);
    for (let cx = x0; cx <= x1; cx++) {
      for (let cy = y0; cy <= y1; cy++) {
        const key = `${cx},${cy}`;
        const bucket = cells.get(key);
        if (bucket) bucket.push(i);
        else cells.set(key, [i]);
      }
    }
  }
  return { cells, cell };
}

function queryObstacleGrid({ cells, cell }, minX, minY, maxX, maxY, margin) {
  const found = /* @__PURE__ */ new Set();
  const x0 = Math.floor((minX - margin) / cell);
  const x1 = Math.floor((maxX + margin) / cell);
  const y0 = Math.floor((minY - margin) / cell);
  const y1 = Math.floor((maxY + margin) / cell);
  for (let cx = x0; cx <= x1; cx++) {
    for (let cy = y0; cy <= y1; cy++) {
      const bucket = cells.get(`${cx},${cy}`);
      if (bucket) {
        for (const index of bucket) found.add(index);
      }
    }
  }
  return found;
}

export function applyPatch(input, patch) {
  const scene = parseScene(input);
  const operations = Array.isArray(patch) ? patch : patch.operations;
  if (!Array.isArray(operations)) {
    throw new TypeError("Expected patch operations array.");
  }

  const elements = [...scene.elements];
  const indexById = new Map(elements.map((element, index) => [element.id, index]));

  for (const operation of operations) {
    applyOperation(elements, indexById, operation);
  }

  return {
    ...scene,
    elements
  };
}

export function makeElement(type, fields = {}) {
  assertElementType(type);

  if (type === "text") {
    return newTextElement({
      text: "",
      ...fields,
      type
    });
  }
  if (type === "line") {
    return newLinearElement({
      points: [[0, 0], [fields.width ?? 100, fields.height ?? 0]],
      ...fields,
      type
    });
  }
  if (type === "arrow") {
    return newArrowElement({
      points: [[0, 0], [fields.width ?? 100, fields.height ?? 0]],
      ...fields,
      type
    });
  }
  if (type === "freedraw") {
    return newFreeDrawElement({
      points: [],
      simulatePressure: true,
      ...fields,
      type
    });
  }
  if (type === "image") {
    return newImageElement({
      status: "pending",
      fileId: null,
      ...fields,
      type
    });
  }
  if (type === "frame") {
    return newFrameElement({
      name: null,
      ...fields
    });
  }

  return newElement({
    ...fields,
    type
  });
}

export function updateElement(element, fields) {
  return newElementWith(element, fields);
}

export function B(input = {}) {
  const scene = isScene(input) ? normalizeScene(parseScene(input)) : createScene(input);
  const operations = [];

  const builder = {
    scene,
    operations,
    add(element) {
      operations.push({ op: "add", element });
      return elementRef(builder, element.id);
    },
    element(type, fields = {}) {
      return builder.add(makeElement(type, fields));
    },
    rect(id, x, y, width, height, fields = {}) {
      return builder.element("rectangle", { id, x, y, width, height, ...fields });
    },
    ellipse(id, x, y, width, height, fields = {}) {
      return builder.element("ellipse", { id, x, y, width, height, ...fields });
    },
    diamond(id, x, y, width, height, fields = {}) {
      return builder.element("diamond", { id, x, y, width, height, ...fields });
    },
    text(id, x, y, text, fields = {}) {
      return builder.element("text", { id, x, y, text, originalText: text, ...fields });
    },
    arrow(id, x, y, points, fields = {}) {
      return builder.element("arrow", { id, x, y, points, ...fields });
    },
    line(id, x, y, points, fields = {}) {
      return builder.element("line", { id, x, y, points, ...fields });
    },
    set(id, fields) {
      operations.push({ op: "update", id, fields });
      return builder;
    },
    del(id) {
      operations.push({ op: "delete", id });
      return builder;
    },
    patch() {
      return { operations: structuredClone(operations) };
    },
    apply() {
      return applyPatch(scene, operations);
    },
    json() {
      return builder.apply();
    },
    ref(id) {
      requireElement(builder, id);
      return elementRef(builder, id);
    },
    get(id) {
      return requireElement(builder, id);
    }
  };

  return builder;
}

export function elementRef(builder, id) {
  return {
    id,
    get element() {
      return requireElement(builder, id);
    },
    update(fields) {
      builder.set(id, fields);
      return this;
    },
    delete() {
      builder.del(id);
      return this;
    },
    text(textId, text, fields = {}) {
      const container = requireElement(builder, id);
      const { wrap, fit = !wrap, padding = 16, ...textFields } = fields;
      const textOptions = wrap
        ? wrapTextOptions(container, text, textFields, padding)
        : { text, originalText: text };
      const textElement = makeElement("text", {
        id: textId,
        containerId: id,
        textAlign: "center",
        verticalAlign: "middle",
        ...textOptions,
        ...textFields
      });
      const sizedTextElement = wrap
        ? updateElement(textElement, {
          width: textOptions.width,
          autoResize: false,
          text: textOptions.text,
          originalText: text
        })
        : textElement;
      const containerUpdates = fit
        ? containerFitUpdates(container, sizedTextElement, padding)
        : {};
      const nextContainer = Object.keys(containerUpdates).length
        ? updateElement(container, containerUpdates)
        : container;
      const elementsMap = elementsMapFor(builder, [nextContainer, sizedTextElement]);
      const position = computeBoundTextPosition(nextContainer, sizedTextElement, elementsMap);
      const positionedText = position ? updateElement(sizedTextElement, position) : sizedTextElement;

      builder.set(id, {
        ...containerUpdates,
        boundElements: appendBoundElement(container.boundElements, {
          id: textId,
          type: "text"
        })
      });
      builder.add(positionedText);
      return elementRef(builder, textId);
    },
    connectTo(target, arrowId, fields = {}) {
      const source = requireElement(builder, id);
      const targetElement = resolveElement(builder, target);
      const {
        from = autoAnchor(source, targetElement),
        to = autoAnchor(targetElement, source),
        via,
        bend,
        curve,
        elbow,
        gap = 1,
        label,
        labelOptions = {},
        ...arrowFields
      } = fields;
      const sourcePoint = anchorPoint(source, from);
      const targetPoint = anchorPoint(targetElement, to);
      const waypoints = routeWaypoints(sourcePoint, targetPoint, { via, bend });
      const worldPoints = [sourcePoint, ...waypoints, targetPoint];
      // A smooth curve is the default whenever the arrow has waypoints (so
      // routed arrows read as deliberate arcs, not jagged polylines). Elbow
      // arrows are orthogonal and never rounded.
      const rounded = elbow ? false : curve ?? worldPoints.length > 2;
      const routingFields = pruneUndefined({
        roundness: rounded ? { type: 2 } : null,
        elbowed: elbow ? true : void 0
      });
      const arrow = updateElement(makeElement("arrow", {
        id: arrowId,
        x: sourcePoint.x,
        y: sourcePoint.y,
        points: worldPoints.map((point) => [
          point.x - sourcePoint.x,
          point.y - sourcePoint.y
        ]),
        endArrowhead: "arrow",
        ...routingFields,
        ...arrowFields
      }), {
        startBinding: {
          elementId: source.id,
          focus: bindingFocus(from),
          gap
        },
        endBinding: {
          elementId: targetElement.id,
          focus: bindingFocus(to),
          gap
        }
      });

      builder.set(source.id, {
        boundElements: appendBoundElement(source.boundElements, {
          id: arrowId,
          type: "arrow"
        })
      });
      builder.set(targetElement.id, {
        boundElements: appendBoundElement(targetElement.boundElements, {
          id: arrowId,
          type: "arrow"
        })
      });

      // Bind a label to the arrow itself. Excalidraw centres it on the path and
      // gaps the line around it, so the caller never positions a separate text
      // element. This is the preferred way to label a connection.
      if (label != null) {
        const labelId = labelOptions.id ?? `${arrowId}_label`;
        const labelElement = makeElement("text", {
          id: labelId,
          text: String(label),
          originalText: String(label),
          textAlign: "center",
          verticalAlign: "middle",
          ...labelOptions,
          containerId: arrowId
        });
        const elementsMap = elementsMapFor(builder, [arrow, labelElement]);
        const position = computeBoundTextPosition(arrow, labelElement, elementsMap);
        const positionedLabel = position ? updateElement(labelElement, position) : labelElement;
        builder.add(updateElement(arrow, {
          boundElements: appendBoundElement(arrow.boundElements, { id: labelId, type: "text" })
        }));
        builder.add(positionedLabel);
        return elementRef(builder, arrowId);
      }

      builder.add(arrow);
      return elementRef(builder, arrowId);
    }
  };
}

function applyOperation(elements, indexById, operation) {
  if (!operation || typeof operation !== "object") {
    throw new TypeError("Patch operation must be an object.");
  }

  if (operation.op === "add") {
    const element = operation.element ?? makeElement(operation.type, operation.fields);
    if (!element.id) {
      throw new Error("Added element must have an id.");
    }
    if (indexById.has(element.id)) {
      throw new Error(`Cannot add duplicate element id: ${element.id}`);
    }
    indexById.set(element.id, elements.length);
    elements.push(element);
    return;
  }

  if (operation.op === "update") {
    const index = requireElementIndex(indexById, operation.id);
    elements[index] = updateElement(elements[index], operation.fields ?? {});
    return;
  }

  if (operation.op === "delete") {
    const index = requireElementIndex(indexById, operation.id);
    elements[index] = updateElement(elements[index], { isDeleted: true });
    return;
  }

  throw new Error(`Unsupported patch operation: ${operation.op}`);
}

function requireElementIndex(indexById, id) {
  if (!indexById.has(id)) {
    throw new Error(`Element not found: ${id}`);
  }
  return indexById.get(id);
}

function matchesQuery(element, query) {
  if (query.ids && !query.ids.includes(element.id)) {
    return false;
  }
  if (query.types && !query.types.includes(element.type)) {
    return false;
  }
  if (query.textIncludes) {
    const haystack = `${element.text ?? ""} ${element.originalText ?? ""}`.toLowerCase();
    if (!haystack.includes(String(query.textIncludes).toLowerCase())) {
      return false;
    }
  }
  if (query.bounds && !intersectsBounds(elementBounds(element), query.bounds)) {
    return false;
  }
  return true;
}

function requireElement(builder, id) {
  const element = builder.apply().elements.find((candidate) => candidate.id === id);
  if (!element) {
    throw new Error(`Element not found: ${id}`);
  }
  return element;
}

function resolveElement(builder, value) {
  if (typeof value === "string") {
    return requireElement(builder, value);
  }
  if (value?.id) {
    return requireElement(builder, value.id);
  }
  throw new TypeError("Expected an element id or element reference.");
}

function elementsMapFor(builder, extraElements = []) {
  return new Map([
    ...builder.apply().elements.map((element) => [element.id, element]),
    ...extraElements.map((element) => [element.id, element])
  ]);
}

function appendBoundElement(boundElements, next) {
  const elements = boundElements ? [...boundElements] : [];
  const existing = elements.find((element) => element.id === next.id);
  return existing ? elements : [...elements, next];
}

function elementCenter(element) {
  return {
    x: (Number(element.x) || 0) + (Number(element.width) || 0) / 2,
    y: (Number(element.y) || 0) + (Number(element.height) || 0) / 2
  };
}

function autoAnchor(source, target) {
  const sourceCenter = elementCenter(source);
  const targetCenter = elementCenter(target);
  const dx = targetCenter.x - sourceCenter.x;
  const dy = targetCenter.y - sourceCenter.y;

  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? "right-middle" : "left-middle";
  }
  return dy >= 0 ? "middle-bottom" : "middle-top";
}

// Build the intermediate waypoints for a routed arrow. `via` is an explicit
// list of world-space points the arrow must pass through; `bend` is a shorthand
// that offsets the midpoint perpendicular to the straight line by the given
// amount (positive bows one way, negative the other) to arc around obstacles.
function routeWaypoints(sourcePoint, targetPoint, { via, bend } = {}) {
  if (via && via.length) {
    return via.map(toPoint);
  }
  if (bend) {
    const dx = targetPoint.x - sourcePoint.x;
    const dy = targetPoint.y - sourcePoint.y;
    const length = Math.hypot(dx, dy) || 1;
    const normalX = -dy / length;
    const normalY = dx / length;
    return [
      {
        x: (sourcePoint.x + targetPoint.x) / 2 + normalX * bend,
        y: (sourcePoint.y + targetPoint.y) / 2 + normalY * bend
      }
    ];
  }
  return [];
}

function toPoint(value) {
  if (Array.isArray(value)) {
    return { x: Number(value[0]) || 0, y: Number(value[1]) || 0 };
  }
  if (value && typeof value === "object") {
    return { x: Number(value.x) || 0, y: Number(value.y) || 0 };
  }
  throw new TypeError("Expected a waypoint as [x, y] or { x, y }.");
}

function anchorPoint(element, anchor) {
  const normalized = normalizeAnchor(anchor);
  const x = Number(element.x) || 0;
  const y = Number(element.y) || 0;
  const width = Number(element.width) || 0;
  const height = Number(element.height) || 0;
  const [horizontal, vertical] = normalized.split("-");

  return {
    x: x + anchorRatio(horizontal) * width,
    y: y + anchorRatio(vertical) * height
  };
}

function normalizeAnchor(anchor) {
  const aliases = {
    top: "middle-top",
    right: "right-middle",
    bottom: "middle-bottom",
    left: "left-middle",
    center: "middle-middle",
    middle: "middle-middle"
  };
  const normalized = aliases[anchor] ?? anchor;
  if (!/^(left|middle|right)-(top|middle|bottom)$/.test(normalized)) {
    throw new Error(`Unsupported anchor: ${anchor}`);
  }
  return normalized;
}

function anchorRatio(part) {
  if (part === "left" || part === "top") {
    return 0;
  }
  if (part === "right" || part === "bottom") {
    return 1;
  }
  return 0.5;
}

function bindingFocus(anchor) {
  const normalized = normalizeAnchor(anchor);
  const [horizontal, vertical] = normalized.split("-");
  if (horizontal === "middle") {
    return vertical === "middle" ? 0 : 0;
  }
  return vertical === "middle" ? 0 : anchorRatio(vertical) * 2 - 1;
}

function wrapTextOptions(container, text, fields, padding) {
  const fontSize = fields.fontSize ?? 20;
  const fontFamily = fields.fontFamily ?? 5;
  const maxWidth = Math.max(1, (Number(container.width) || 0) - padding * 2);
  const font = getFontString({ fontSize, fontFamily });
  return {
    text: wrapText(text, font, maxWidth),
    originalText: text,
    width: fields.width ?? maxWidth,
    autoResize: false
  };
}

function containerFitUpdates(container, textElement, padding) {
  const minWidth = (Number(textElement.width) || 0) + padding * 2;
  const minHeight = (Number(textElement.height) || 0) + padding * 2;
  return pruneUndefined({
    width: minWidth > (Number(container.width) || 0) ? minWidth : undefined,
    height: minHeight > (Number(container.height) || 0) ? minHeight : undefined
  });
}

function collectBoundTextLabels(elements) {
  const labels = new Map();
  for (const element of elements) {
    if (element.type !== "text" || !element.containerId) {
      continue;
    }
    const current = labels.get(element.containerId) ?? [];
    current.push({
      id: element.id,
      text: element.text ?? "",
      bounds: boundsArray(elementBounds(element))
    });
    labels.set(element.containerId, current);
  }
  return labels;
}

function describeNode(element, labelsByContainerId, edges) {
  const outgoing = edges.filter((edge) => edge.from === element.id).map((edge) => edge.to ?? edge.id);
  const incoming = edges.filter((edge) => edge.to === element.id).map((edge) => edge.from ?? edge.id);
  return pruneEmpty({
    id: element.id,
    type: element.type,
    label: labelsByContainerId.get(element.id)?.map((label) => label.text).join("\n"),
    bounds: boundsArray(elementBounds(element)),
    outgoing,
    incoming
  });
}

function describeEdge(element, elementsById) {
  const from = element.startBinding?.elementId;
  const to = element.endBinding?.elementId;
  return pruneEmpty({
    id: element.id,
    type: element.type,
    from,
    to,
    fromType: from ? elementsById.get(from)?.type : undefined,
    toType: to ? elementsById.get(to)?.type : undefined,
    points: element.points?.map((point) => point.map(round)),
    bounds: boundsArray(elementBounds(element))
  });
}

function limitItems(items, limit) {
  if (!limit || items.length <= limit) {
    return items;
  }
  return items.slice(0, limit);
}

function formatYamlLike(description) {
  const lines = [];
  writeObject(lines, description, 0);
  return `${lines.join("\n")}\n`;
}

function writeObject(lines, value, indent) {
  for (const [key, entry] of Object.entries(value)) {
    writeEntry(lines, key, entry, indent);
  }
}

function writeEntry(lines, key, value, indent) {
  const pad = " ".repeat(indent);
  if (Array.isArray(value)) {
    if (!value.length) {
      lines.push(`${pad}${key}: []`);
      return;
    }
    lines.push(`${pad}${key}:`);
    for (const item of value) {
      writeListItem(lines, item, indent + 2);
    }
    return;
  }
  if (value && typeof value === "object") {
    lines.push(`${pad}${key}:`);
    writeObject(lines, value, indent + 2);
    return;
  }
  if (typeof value === "string" && value.includes("\n")) {
    lines.push(`${pad}${key}: |`);
    for (const line of value.split("\n")) {
      lines.push(`${pad}  ${line}`);
    }
    return;
  }
  lines.push(`${pad}${key}: ${formatScalar(value)}`);
}

function writeListItem(lines, item, indent) {
  const pad = " ".repeat(indent);
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    lines.push(`${pad}- ${formatScalar(item)}`);
    return;
  }
  const entries = Object.entries(item);
  const [firstKey, firstValue] = entries[0];
  if (isInlineValue(firstValue)) {
    lines.push(`${pad}- ${firstKey}: ${formatScalar(firstValue)}`);
  } else {
    lines.push(`${pad}- ${firstKey}:`);
    writeValue(lines, firstValue, indent + 4);
  }
  for (const [key, value] of entries.slice(1)) {
    writeEntry(lines, key, value, indent + 2);
  }
}

function writeValue(lines, value, indent) {
  if (Array.isArray(value)) {
    for (const item of value) {
      writeListItem(lines, item, indent);
    }
    return;
  }
  if (value && typeof value === "object") {
    writeObject(lines, value, indent);
    return;
  }
  lines.push(`${" ".repeat(indent)}${formatScalar(value)}`);
}

function isInlineValue(value) {
  return !value || typeof value !== "object" || Array.isArray(value);
}

function formatScalar(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return `[${value.map(formatScalar).join(", ")}]`;
  }
  if (typeof value === "string") {
    if (!value || /[:#\[\]{},&*?!|>'"%@`]/.test(value) || /^\s|\s$/.test(value)) {
      return JSON.stringify(value);
    }
    return value;
  }
  return String(value);
}

function boundsArray(bounds) {
  if (!bounds) {
    return null;
  }
  return [round(bounds.x), round(bounds.y), round(bounds.width), round(bounds.height)];
}

function pruneEmpty(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === undefined || entry === null) {
        return false;
      }
      return !(Array.isArray(entry) && entry.length === 0);
    })
  );
}

function compactElement(element, options = {}) {
  const textLimit = options.textLimit ?? DEFAULT_TEXT_LIMIT;
  return pruneUndefined({
    id: element.id,
    type: element.type,
    x: round(element.x),
    y: round(element.y),
    width: round(element.width),
    height: round(element.height),
    angle: element.angle ? round(element.angle) : undefined,
    text: element.text ? truncate(element.text, textLimit) : undefined,
    originalText: element.originalText && element.originalText !== element.text
      ? truncate(element.originalText, textLimit)
      : undefined,
    strokeColor: element.strokeColor,
    backgroundColor: element.backgroundColor,
    groupIds: element.groupIds?.length ? element.groupIds : undefined,
    frameId: element.frameId ?? undefined,
    containerId: element.containerId ?? undefined,
    boundElementIds: element.boundElements?.map((bound) => bound.id),
    startBinding: compactBinding(element.startBinding),
    endBinding: compactBinding(element.endBinding),
    points: element.points?.map((point) => point.map(round))
  });
}

function compactBinding(binding) {
  if (!binding) {
    return undefined;
  }
  return pruneUndefined({
    elementId: binding.elementId,
    focus: round(binding.focus),
    gap: round(binding.gap)
  });
}

function boundsForElements(elements) {
  if (!elements.length) {
    return null;
  }
  const box = getCommonBoundingBox(elements);
  return {
    x: round(box.minX),
    y: round(box.minY),
    width: round(box.width),
    height: round(box.height)
  };
}

function elementBounds(element) {
  return {
    x: Number(element.x) || 0,
    y: Number(element.y) || 0,
    width: Number(element.width) || 0,
    height: Number(element.height) || 0
  };
}

function intersectsBounds(a, b) {
  return a.x < b.x + b.width
    && a.x + a.width > b.x
    && a.y < b.y + b.height
    && a.y + a.height > b.y;
}

function countBy(items, keyFn) {
  const counts = {};
  for (const item of items) {
    const key = keyFn(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function assertElementType(type) {
  const supported = new Set([
    "rectangle",
    "diamond",
    "ellipse",
    "text",
    "line",
    "arrow",
    "freedraw",
    "image",
    "frame",
    "selection",
    "embeddable",
    "iframe"
  ]);
  if (!supported.has(type)) {
    throw new Error(`Unsupported element type: ${type}`);
  }
}

function isScene(value) {
  return value && typeof value === "object" && Array.isArray(value.elements);
}

function truncate(value, limit) {
  const text = String(value);
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

function round(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function pruneUndefined(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}

function parseFontSize(fontString) {
  const match = String(fontString).match(/(\d+(?:\.\d+)?)px/);
  return match ? Number(match[1]) : 20;
}
