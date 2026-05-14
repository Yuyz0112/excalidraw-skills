---
name: excalidraw
description: Use this skill when creating, editing, validating, or explaining Excalidraw scenes, .excalidraw files, Excalidraw libraries, or Excalidraw automation workflows.
---

# Excalidraw

Use this skill to create or edit Excalidraw artifacts with the bundled SDK.

## Core Rule

Prefer **script mode** over direct raw JSON output.

Script mode means writing a small JavaScript generation or editing script, running it locally, and letting that script write the `.excalidraw` file. Do not manually emit large `.excalidraw` JSON unless the user explicitly asks for raw JSON. Use `scripts/excalidraw-skill.js` to construct or edit scenes, then write the resulting JSON file. This keeps output tokens low and lets the SDK and official Excalidraw element APIs fill in default element fields, versions, text measurements, bindings, and shape details.

For non-trivial diagrams, keep a reusable generation script and regenerate the `.excalidraw` file after each iteration. Edit the script rather than patching large generated JSON by hand.

## Creative Workflow

Start by aligning with the human on the purpose, audience, scope, and expected level of polish. Only skip this and proceed directly when the human explicitly says the task is casual, random, exploratory, or intended to be worked out while chatting.

Use two phases:

1. **Draft**: black-and-white, minimal styling. Focus on objects, hierarchy, boundaries, and relationships.
2. **Refine**: discuss and apply color, arrow style, spacing, alignment, typography, and visual hierarchy.

When refining, proceed top-to-bottom or section-by-section. Once the human confirms a styling rule, apply it consistently to later similar elements.

Typical pattern:

```js
import { writeFile } from "node:fs/promises";
import { B } from "./scripts/excalidraw-skill.js";

const drawing = B({ source: "excalidraw-skill" });

const a = drawing.rect("A", 0, 0, 120, 80);
const b = drawing.rect("B", 240, 0, 120, 80);

a.text("A_label", "Start");
a.connectTo(b, "A_to_B");

await writeFile("output.excalidraw", `${JSON.stringify(drawing.json(), null, 2)}\n`);
```

## SDK Overview

Import from `scripts/excalidraw-skill.js`.

- `B(options)`: scene builder.
- `COLOR_PALETTE`: official Excalidraw color palette from `@excalidraw/common`.
- `drawing.rect(id, x, y, width, height, fields)`: create a rectangle and return an element reference.
- `drawing.ellipse(...)`, `drawing.diamond(...)`, `drawing.text(...)`, `drawing.arrow(...)`, `drawing.line(...)`: create elements.
- `element.update(fields)`: update an element.
- `element.delete()`: mark an element deleted.
- `element.text(textId, text, fields)`: add bound text inside the element.
- `element.connectTo(targetRefOrId, arrowId, fields)`: connect two elements with a bound arrow.
- `drawing.json()`: return the final Excalidraw scene.
- `summarizeScene(scene)`, `describeScene(scene)`, `formatScene(scene)`, `listElements(scene, query)`, `expandElements(scene, ids, options)`: read large scenes efficiently.

The SDK uses official `@excalidraw/element` constructors and update helpers internally. Prefer SDK methods over hand-writing element internals such as `seed`, `versionNonce`, `boundElements`, `containerId`, or arrow binding fields.

## Best Practices

### Diagram Semantics

- Put nouns inside elements: people, systems, resources, modules, files, directories, stores, and boundaries.
- Put actions on arrows: read, write, mount, sync, persist, invalidate, query, list, get, put, delete.
- Keep each section at one abstraction level. Do not mix deployable resources with internal implementation modules in the same resource-level diagram.
- If a diagram needs deeper detail, add another section or view that expands one component.
- Use stickers only for special notes or callouts. Do not use them for ordinary component descriptions.

### Text

For short labels, bound text can use default autosizing:

```js
box.text("box_label", "Short label");
```

For unwrapped bound text, the SDK auto-fits the container by default so labels are not clipped. Use this for node titles and short labels.

For paragraphs or code blocks inside containers, avoid overflow by enabling wrapping:

```js
box.text("notes", longText, {
  wrap: true,
  padding: 24,
  textAlign: "left",
  verticalAlign: "middle"
});
```

Use `wrap: true` when text may exceed the container width. This sets `autoResize: false`, wraps text against the container width minus padding, and repositions the bound text.

Use `fit: false` only when the container must keep its exact dimensions:

```js
box.text("fixed_label", "May overflow", { fit: false });
```

### Connections

Use `connectTo()` instead of manually computing arrow JSON.

```js
a.connectTo(b, "A_to_B");
```

By default the SDK chooses a sensible edge-to-edge connection based on relative position. Use explicit 3x3 anchors when layout intent matters:

```js
a.connectTo(b, "A_to_B", {
  from: "right-middle",
  to: "left-middle"
});
```

Supported anchors:

```text
left-top      middle-top      right-top
left-middle   middle-middle   right-middle
left-bottom   middle-bottom   right-bottom
```

Aliases: `top`, `right`, `bottom`, `left`, `center`, `middle`.

Prefer side anchors (`right-middle`, `left-middle`, `middle-top`, `middle-bottom`) for flow diagrams. Use corner anchors only when it communicates a specific layout relationship.

Give arrow labels enough room. Increase spacing between nodes, choose anchors deliberately, and add a slight bend to long arrows when it prevents label or line overlap. Keep arrows long enough that direction and label are both readable.

### Layout

- Give containers enough width for their text; do not rely on clipping.
- Keep repeated nodes aligned with consistent `x`, `y`, `width`, and `height`.
- Use `formatScene()` or `describeScene()` to understand a scene before reading raw JSON.
- Use `summarizeScene()` for a compact count/bounds/style sample.
- Preserve existing IDs and bindings when editing user-provided scenes.
- Maintain stable visual semantics: similar colors and shapes should mean similar kinds of things.

## Reading Existing Scenes

Do not read a large `.excalidraw` file directly into context unless necessary. Prefer the read helpers:

```js
import { readFile } from "node:fs/promises";
import { formatScene, describeScene, expandElements } from "./scripts/excalidraw-skill.js";

const scene = JSON.parse(await readFile("input.excalidraw", "utf8"));
console.log(formatScene(scene, { limit: 100 }));
```

Use:

- `formatScene(scene)`: YAML-like text for agent context. Best first read.
- `describeScene(scene)`: structured object with `scene`, `nodes`, and `edges`.
- `summarizeScene(scene)`: compact stats, bounds, type counts, and samples.
- `listElements(scene, query)`: search/filter by type, text, id, bounds.
- `expandElements(scene, ids, options)`: locally expand exact raw elements after identifying relevant IDs.

The YAML-like format intentionally avoids raw Excalidraw internals and focuses on node labels, bounds, outgoing/incoming relationships, and bound arrows.

## Fonts

Official Excalidraw font family enum:

```js
{
  Virgil: 1,
  Helvetica: 2,
  Cascadia: 3,
  Excalifont: 5,
  Nunito: 6,
  "Lilita One": 7,
  "Comic Shanns": 8,
  "Liberation Sans": 9,
  Assistant: 10
}
```

Use cases:

- Hand-drawn: `Virgil`, `Excalifont`, `Comic Shanns`.
- Rigorous diagrams: `Helvetica`, `Liberation Sans`, `Assistant`.
- Code or API snippets: `Cascadia`.
- Friendly product diagrams: `Nunito`.

Set fonts through element fields:

```js
box.text("label", "API boundary", { fontFamily: 2 });
codeBox.text("code", code, { fontFamily: 3, textAlign: "left", wrap: true });
```

## Style Presets

Use these presets as starting points. Adjust colors to match the diagram purpose.

Prefer the official `COLOR_PALETTE` export over hard-coded custom colors:

```js
import { B, COLOR_PALETTE } from "./scripts/excalidraw-skill.js";

const agentFill = COLOR_PALETTE.orange[1];
const fileFill = COLOR_PALETTE.blue[1];
const noteFill = COLOR_PALETTE.yellow[1];
```

For diagrams with multiple semantic roles, define a small semantic palette at the top of the generation script, then reuse it consistently.

### Hand-Drawn

For exploratory architecture sketches, brainstorming, or informal explanation.

```js
const handDrawn = {
  roughness: 2,
  strokeWidth: 2,
  strokeStyle: "solid",
  fillStyle: "hachure",
  roundness: { type: 2 }
};
```

Recommended font: `fontFamily: 5` or `fontFamily: 1`.

### Rigorous

For precise engineering diagrams, API diagrams, and review artifacts.

```js
const rigorous = {
  roughness: 0,
  strokeWidth: 1,
  strokeStyle: "solid",
  fillStyle: "solid",
  roundness: null
};
```

Recommended fonts: `fontFamily: 2` for labels, `fontFamily: 3` for code.

## Validation

After generating or editing an Excalidraw file:

1. Parse the output JSON.
2. Run `formatScene()` or `summarizeScene()` and check element counts, bounds, labels, bindings, and arrow points.
3. For SDK changes, run `npm test`.
4. For visual changes, inspect the resulting `.excalidraw` file when practical.
