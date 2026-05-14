# Excalidraw Skills

An installable Codex skill for creating, editing, and reading Excalidraw scenes with a bundled single-file JavaScript SDK.

## Installable Skill

Use this directory as the skill package:

```txt
skill/excalidraw
```

It contains:

```txt
SKILL.md
scripts/excalidraw-skill.js
```

## Development

Install dependencies and rebuild the bundled SDK:

```bash
npm install
npm run build
```

Run tests:

```bash
npm test
```

## SDK Example

```js
import { writeFile } from "node:fs/promises";
import { B } from "./skill/excalidraw/scripts/excalidraw-skill.js";

const drawing = B();
const a = drawing.rect("A", 0, 0, 120, 80);
const b = drawing.rect("B", 240, 0, 120, 80);

a.text("A_label", "Start");
a.connectTo(b, "A_to_B");

await writeFile("scene.excalidraw", `${JSON.stringify(drawing.json(), null, 2)}\n`);
```

## License

Apache-2.0
