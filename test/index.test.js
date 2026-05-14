import test from "node:test";
import assert from "node:assert/strict";
import {
  B,
  applyPatch,
  createScene,
  describeScene,
  expandElements,
  formatScene,
  listElements,
  makeElement,
  summarizeScene
} from "../skill/excalidraw/scripts/excalidraw-skill.js";

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
