import test from "node:test";
import assert from "node:assert/strict";
import {
  B,
  COLOR_PALETTE,
  applyPatch,
  createScene,
  describeScene,
  expandElements,
  findArrowCrossings,
  formatScene,
  listElements,
  makeElement,
  summarizeScene
} from "../skill/excalidraw/scripts/excalidraw-skill.js";

test("exports official Excalidraw color palette", () => {
  assert.equal(COLOR_PALETTE.orange[1], "#ffd8a8");
  assert.equal(COLOR_PALETTE.blue[1], "#a5d8ff");
});

test("makeElement uses official constructors for defaults", () => {
  const rectangle = makeElement("rectangle", {
    id: "box",
    x: 10,
    y: 20,
    width: 100,
    height: 50
  });

  assert.equal(rectangle.type, "rectangle");
  assert.equal(rectangle.id, "box");
  assert.equal(rectangle.isDeleted, false);
  assert.equal(typeof rectangle.seed, "number");
  assert.equal(typeof rectangle.versionNonce, "number");
});

test("summarizeScene returns compact scene facts", () => {
  const rectangle = makeElement("rectangle", { id: "box", x: 10, y: 20, width: 100, height: 50 });
  const text = makeElement("text", { id: "label", text: "Hello Excalidraw", x: 15, y: 25 });

  const summary = summarizeScene(createScene({ elements: [rectangle, text] }));

  assert.equal(summary.visibleElementCount, 2);
  assert.deepEqual(summary.typeCounts, { rectangle: 1, text: 1 });
  assert.equal(summary.sample[1].text, "Hello Excalidraw");
  assert.equal(typeof summary.versionHash, "number");
});

test("listElements filters by type and text", () => {
  const elements = [
    makeElement("rectangle", { id: "box" }),
    makeElement("text", { id: "note", text: "Important note" })
  ];

  const listed = listElements(createScene({ elements }), {
    types: ["text"],
    textIncludes: "important"
  });

  assert.equal(listed.total, 1);
  assert.equal(listed.elements[0].id, "note");
});

test("expandElements can include bound text", () => {
  const rectangle = makeElement("rectangle", {
    id: "box",
    boundElements: [{ id: "label", type: "text" }]
  });
  const text = makeElement("text", {
    id: "label",
    containerId: "box",
    text: "Label"
  });

  const expanded = expandElements(createScene({ elements: [rectangle, text] }), ["box"], {
    includeBoundText: true
  });

  assert.deepEqual(expanded.map((element) => element.id), ["box", "label"]);
});

test("applyPatch uses official update semantics", () => {
  const box = makeElement("rectangle", { id: "box", width: 100 });
  const scene = createScene({ elements: [box] });
  const patched = applyPatch(scene, {
    operations: [
      { op: "update", id: "box", fields: { width: 200 } },
      { op: "add", type: "text", fields: { id: "label", text: "Updated" } },
      { op: "delete", id: "label" }
    ]
  });

  assert.equal(patched.elements[0].width, 200);
  assert.equal(patched.elements[0].version, box.version + 1);
  assert.equal(patched.elements[1].isDeleted, true);
});

test("B provides semantic builder methods", () => {
  const drawing = B();
  const box = drawing.rect("box", 10, 20, 100, 50);
  drawing.text("label", 15, 25, "Hello");
  box.update({ backgroundColor: "#ffec99" });
  const built = drawing.json();

  assert.equal(built.elements.length, 2);
  assert.equal(built.elements[0].type, "rectangle");
  assert.equal(built.elements[0].backgroundColor, "#ffec99");
  assert.equal(built.elements[1].text, "Hello");
});

test("element refs can add bound text to containers", () => {
  const drawing = B();
  const box = drawing.rect("box", 10, 20, 100, 50);

  const label = box.text("label", "Inside");
  const built = drawing.json();
  const container = built.elements.find((element) => element.id === "box");
  const text = built.elements.find((element) => element.id === label.id);

  assert.deepEqual(container.boundElements, [{ id: "label", type: "text" }]);
  assert.equal(text.containerId, "box");
  assert.equal(text.text, "Inside");
});

test("element refs auto-fit containers for unwrapped bound text", () => {
  const drawing = B();
  const box = drawing.rect("box", 0, 0, 40, 20);

  box.text("label", "Wider label", {
    padding: 12
  });
  const built = drawing.json();
  const container = built.elements.find((element) => element.id === "box");
  const text = built.elements.find((element) => element.id === "label");

  assert.equal(text.autoResize, true);
  assert.ok(container.width >= text.width + 24);
  assert.ok(container.height >= text.height + 24);
});

test("element refs can wrap bound text inside containers", () => {
  const drawing = B();
  const box = drawing.rect("box", 0, 0, 180, 90);

  box.text("label", "This text should wrap inside the rectangle instead of overflowing", {
    wrap: true,
    padding: 20,
    textAlign: "left"
  });
  const built = drawing.json();
  const text = built.elements.find((element) => element.id === "label");

  assert.equal(text.autoResize, false);
  assert.equal(text.width, 140);
  assert.match(text.text, /\n/);
  assert.equal(text.originalText, "This text should wrap inside the rectangle instead of overflowing");
});

test("element refs can connect elements with bound arrows", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 200, 0, 100, 50);

  const arrow = source.connectTo(target, "source-to-target");
  const built = drawing.json();
  const arrowElement = built.elements.find((element) => element.id === arrow.id);
  const sourceElement = built.elements.find((element) => element.id === "source");
  const targetElement = built.elements.find((element) => element.id === "target");

  assert.equal(arrowElement.type, "arrow");
  assert.deepEqual(arrowElement.points, [[0, 0], [100, 0]]);
  assert.equal(arrowElement.x, 100);
  assert.equal(arrowElement.y, 25);
  assert.equal(arrowElement.startBinding.elementId, "source");
  assert.equal(arrowElement.endBinding.elementId, "target");
  assert.deepEqual(sourceElement.boundElements, [{ id: "source-to-target", type: "arrow" }]);
  assert.deepEqual(targetElement.boundElements, [{ id: "source-to-target", type: "arrow" }]);
});

test("element refs can connect explicit 3x3 anchors", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 80);
  const target = drawing.rect("target", 200, 200, 100, 80);

  const arrow = source.connectTo(target, "corner-arrow", {
    from: "right-bottom",
    to: "left-top"
  });
  const built = drawing.json();
  const arrowElement = built.elements.find((element) => element.id === arrow.id);

  assert.equal(arrowElement.x, 100);
  assert.equal(arrowElement.y, 80);
  assert.deepEqual(arrowElement.points, [[0, 0], [100, 120]]);
  assert.equal(arrowElement.startBinding.focus, 1);
  assert.equal(arrowElement.endBinding.focus, -1);
});

test("connectTo bends into a smooth arc via a midpoint waypoint", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 300, 0, 100, 50);

  const arrow = source.connectTo(target, "arc", { from: "right-middle", to: "left-middle", bend: 60 });
  const built = drawing.json();
  const el = built.elements.find((element) => element.id === arrow.id);

  // start (0,0), bowed midpoint, end — bend offsets the midpoint perpendicular.
  assert.equal(el.points.length, 3);
  assert.deepEqual(el.points[0], [0, 0]);
  assert.deepEqual(el.points[2], [200, 0]);
  assert.equal(el.points[1][0], 100); // midpoint x stays centered
  assert.equal(el.points[1][1], 60); // bowed down by 60
  assert.deepEqual(el.roundness, { type: 2 }); // curved by default with waypoints
});

test("connectTo routes through explicit world-space waypoints", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 300, 0, 100, 50);

  const arrow = source.connectTo(target, "routed", {
    from: "right-middle",
    to: "left-middle",
    via: [[150, -80], [250, -80]],
    curve: false
  });
  const built = drawing.json();
  const el = built.elements.find((element) => element.id === arrow.id);

  // points are stored relative to the arrow origin (the source anchor 100,25).
  assert.deepEqual(el.points, [[0, 0], [50, -105], [150, -105], [200, 0]]);
  assert.equal(el.roundness, null); // curve:false => sharp polyline
});

test("connectTo binds a label to the arrow itself", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 300, 0, 100, 50);

  source.connectTo(target, "edge", {
    from: "right-middle",
    to: "left-middle",
    label: "starts",
    labelOptions: { strokeColor: "#868e96" }
  });
  const built = drawing.json();
  const arrow = built.elements.find((element) => element.id === "edge");
  const labelText = built.elements.find((element) => element.id === "edge_label");

  assert.equal(labelText.type, "text");
  assert.equal(labelText.text, "starts");
  assert.equal(labelText.containerId, "edge");
  assert.equal(labelText.strokeColor, "#868e96");
  assert.deepEqual(arrow.boundElements, [{ id: "edge_label", type: "text" }]);
  // label is centred on the arrow's midpoint (arrow spans x 100..300)
  assert.ok(Math.abs(labelText.x + labelText.width / 2 - 200) < 1);
});

test("connectTo can produce an orthogonal elbow arrow", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 200, 200, 100, 50);

  const arrow = source.connectTo(target, "elbow", { elbow: true });
  const built = drawing.json();
  const el = built.elements.find((element) => element.id === arrow.id);

  assert.equal(el.elbowed, true);
  assert.equal(el.roundness, null);
});

test("findArrowCrossings flags arrows that cut through unrelated shapes", () => {
  const drawing = B();
  const a = drawing.rect("a", 0, 0, 100, 50);
  const mid = drawing.rect("mid", 200, 0, 100, 50);
  const b = drawing.rect("b", 400, 0, 100, 50);

  a.connectTo(b, "straight", { from: "right-middle", to: "left-middle" });
  a.connectTo(b, "arced", { from: "right-middle", to: "left-middle", via: [[250, -120]] });

  const crossings = findArrowCrossings(drawing.json());

  assert.equal(crossings.length, 1);
  assert.equal(crossings[0].id, "straight");
  assert.deepEqual(crossings[0].crosses, ["mid"]);
});

test("findArrowCrossings ignores bound endpoints and honors isObstacle/margin", () => {
  const drawing = B();
  const band = drawing.rect("band", -10, -10, 320, 120); // background lane
  const a = drawing.rect("a", 0, 0, 100, 50);
  const b = drawing.rect("b", 200, 0, 100, 50);
  a.connectTo(b, "a_b", { from: "right-middle", to: "left-middle" });

  // The band contains the whole arrow; excluding it via isObstacle clears it.
  const withBand = findArrowCrossings(drawing.json());
  assert.ok(withBand.some((c) => c.id === "a_b" && c.crosses.includes("band")));

  const excluded = findArrowCrossings(drawing.json(), {
    isObstacle: (el) => el.type === "rectangle" && el.id !== "band"
  });
  assert.equal(excluded.length, 0); // a and b are the arrow's bound endpoints
});

test("describeScene returns agent-friendly nodes and edges", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 200, 0, 100, 50);
  source.text("source_label", "Source");
  target.text("target_label", "Target");
  source.connectTo(target, "source_to_target");

  const description = describeScene(drawing.json());

  assert.equal(description.nodes.length, 2);
  assert.equal(description.edges.length, 1);
  assert.equal(description.nodes.find((node) => node.id === "source").label, "Source");
  assert.deepEqual(description.nodes.find((node) => node.id === "source").outgoing, ["target"]);
  assert.equal(description.edges[0].from, "source");
  assert.equal(description.edges[0].to, "target");
});

test("formatScene returns yaml-like text for agent context", () => {
  const drawing = B();
  const source = drawing.rect("source", 0, 0, 100, 50);
  const target = drawing.rect("target", 200, 0, 100, 50);
  source.text("source_label", "Source\nNode");
  source.connectTo(target, "source_to_target");

  const text = formatScene(drawing.json());

  assert.match(text, /scene:/);
  assert.match(text, /nodes:/);
  assert.match(text, /label: \|/);
  assert.match(text, /edges:/);
  assert.match(text, /from: source/);
  assert.match(text, /to: target/);
});
