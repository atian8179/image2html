# image2html

`image2html` is a Codex skill for rebuilding high-quality images, AI-generated UI mockups, screenshots, and visual references as faithful, responsive HTML/CSS/JS implementations.

It is designed for one job:

> Treat the image as the acceptance target, rebuild it as real web UI, verify it in a browser, and iterate until the implementation visually matches the reference.

## Why This Exists

AI image generation can produce beautiful UI concepts, but turning those images into working front-end code is often imprecise. A model may capture the mood while missing the grid, spacing, typography, component hierarchy, or responsive behavior.

`image2html` gives Codex a disciplined workflow for image-to-HTML reconstruction:

- inspect the visual reference before coding
- extract layout, typography, color, and component structure
- implement semantic HTML/CSS/JS or adapt to an existing front-end stack
- infer simple interactions from the design
- verify with desktop and mobile browser screenshots
- report known fidelity gaps instead of hand-waving them away

## Use Cases

Use this skill when you want to convert any of these into front-end code:

- AI-generated UI design images
- product landing page mockups
- mobile app screen concepts
- dashboard screenshots
- editor or tool interface screenshots
- poster-like hero sections
- design references from image generation tools
- static product UI concepts that need interactive HTML

Example requests:

```text
Use image2html to convert this generated landing page image into a responsive HTML page.
```

```text
Use image2html on this dashboard screenshot and rebuild it in the current React project.
```

```text
Use image2html to recreate this mobile app mockup as a static HTML prototype, then verify it at iPhone viewport size.
```

## What It Produces

Depending on the project context, Codex will produce either:

- a static HTML/CSS/JS implementation, or
- code inside an existing front-end app such as React, Vue, Svelte, Next.js, or Vite.

The skill favors the smallest implementation that can faithfully demonstrate the design.

For standalone work, the included starter template lives at:

```text
assets/starter/
├─ index.html
├─ styles.css
└─ script.js
```

## Installation

### Option 1: Clone Into Your Codex Skills Directory

On Windows PowerShell:

```powershell
git clone https://github.com/atian8179/image2html.git $env:USERPROFILE\.codex\skills\image2html
```

On macOS or Linux:

```bash
git clone https://github.com/atian8179/image2html.git ~/.codex/skills/image2html
```

Then restart Codex or open a new Codex session so the skill can be discovered.

### Option 2: Use From A Local Path

If you do not want to install it globally, clone the repo anywhere and reference it directly in your prompt:

```text
Use the skill at /path/to/image2html to rebuild this image as HTML.
```

## Repository Structure

```text
image2html/
├─ SKILL.md
├─ agents/
│  └─ openai.yaml
├─ assets/
│  └─ starter/
│     ├─ index.html
│     ├─ styles.css
│     └─ script.js
└─ references/
   ├─ html-css-rebuild-patterns.md
   └─ visual-audit-checklist.md
```

### `SKILL.md`

The core Codex skill. It defines when the skill should trigger and the workflow Codex should follow.

### `agents/openai.yaml`

UI metadata for Codex skill lists and chips.

### `references/visual-audit-checklist.md`

A checklist for analyzing the reference image before coding and reviewing browser screenshots after implementation.

### `references/html-css-rebuild-patterns.md`

Practical HTML/CSS/JS patterns for rebuilding layouts, tokens, interactions, and screenshot verification.

### `assets/starter/`

A minimal static HTML starter that Codex can copy when no existing front-end project is present.

## Workflow Summary

When used correctly, Codex should follow this loop:

1. Inspect the image and write a compact visual brief.
2. Choose the target implementation: static HTML or existing app stack.
3. Translate the image into components and layout regions.
4. Build a design-token layer for colors, spacing, typography, radius, and shadows.
5. Recreate meaningful assets or use provided assets.
6. Implement simple inferred interactions.
7. Make the result responsive.
8. Capture browser screenshots at desktop and mobile sizes.
9. Compare screenshots with the source image.
10. Iterate until the implementation reads as the same design.

## Fidelity Standard

Acceptable differences:

- slight font rendering differences
- small icon substitutions
- non-critical image content variation
- minor browser rendering differences

Not acceptable:

- missing major sections
- different layout
- different color mood
- broken spacing rhythm
- overlapping text
- generic placeholder content in meaningful areas
- unverified responsive behavior

## Verification Expectations

Before claiming completion, Codex should run browser verification.

A typical Playwright verification flow:

```js
const { chromium } = require('playwright');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });

await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'desktop-check.png', fullPage: true });

await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: 'mobile-check.png', fullPage: true });

await browser.close();
```

If managed Playwright browsers are unavailable, Codex should use an installed Chromium or Edge executable when possible.

## Example Prompt

```text
Use image2html to rebuild the attached image as a responsive HTML/CSS/JS prototype.

Requirements:
- match the layout, spacing, colors, and typography as closely as possible
- implement obvious interactions such as tabs, toggles, sliders, or active states
- verify with desktop and mobile browser screenshots
- report any remaining fidelity gaps
```

## Design Philosophy

The image is not a mood board. It is the acceptance target.

`image2html` pushes Codex to behave less like a generator and more like a careful front-end craftsperson: inspect, rebuild, verify, compare, and refine.

## License

No license file is included yet. Add a license before relying on this repository for broader open-source distribution.
