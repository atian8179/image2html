---
name: image2html
description: Convert high-quality images, AI-generated UI designs, screenshots, landing-page mockups, app screens, dashboards, posters, or visual references into faithful, responsive HTML/CSS/JS implementations. Use when Codex needs to recreate an image as functional web UI, preserve layout, typography, colors, spacing, components, visible text, and inferred interactions, then verify with browser screenshots and iterate for visual fidelity.
---

# Image2HTML

## Overview

Use this skill to rebuild a visual reference image as real HTML/CSS/JS. Treat the image as the acceptance target, not loose inspiration.

Default output is a small static web implementation unless the current repo already has a frontend stack. In an existing app, follow its framework and conventions instead of creating a separate static page.

## Core Workflow

### 1. Inspect The Image

Before coding, analyze the image and write a compact visual brief:

- page type and intended device
- canvas size and aspect ratio
- major regions and layout grid
- visual hierarchy and reading order
- typography scale and weights
- colors, surfaces, borders, shadows, blur, and materials
- icons, imagery, repeated components, and visible text
- likely interactions
- mobile and desktop behavior if implied

If the image is an AI-generated design with imperfect text, preserve the layout and ask for exact copy only when text accuracy is critical.

For a detailed checklist, read `references/visual-audit-checklist.md`.

### 2. Choose The Build Target

Use the smallest target that can faithfully demonstrate the image:

- No existing frontend: copy `assets/starter/` into the work area and build static HTML/CSS/JS.
- Existing Vite/React/Vue/etc. project: implement inside that app.
- Single app screen: build the screen directly, not a marketing wrapper.
- Mobile UI image: size and verify at realistic phone viewport widths.

Do not create decorative placeholder content when the image contains meaningful content.

### 3. Translate The Image Into Components

Map visual regions into semantic structure:

- shell, header, sidebar, toolbar, inspector, canvas, cards, lists, forms, modal, footer
- repeated components
- primary and secondary controls
- empty/loading/error states if visible

Prefer:

- CSS Grid for page-level layout
- Flexbox for control groups
- `aspect-ratio` for fixed-format previews
- CSS custom properties for design tokens
- real buttons, inputs, sliders, tabs, and toggles for interactive UI

See `references/html-css-rebuild-patterns.md` for implementation patterns.

### 4. Rebuild The Design System

Create tokens before polishing:

- background, surface, text, muted text, accent, border
- spacing scale
- type scale
- radius scale
- shadow/material tokens
- control heights

Match the reference image. Do not invent a new palette or change the product personality.

### 5. Recreate Assets Carefully

Use provided assets when available. If the image contains important photographic or illustrative content and no source asset exists:

- crop from the provided image when allowed and useful, or
- generate/recreate a bitmap asset if the user asks for generated assets, or
- approximate with CSS only when the asset is decorative.

Keep project-referenced assets inside the project. Do not leave them only in a temporary or generated-image directory.

### 6. Implement Inferred Interactions

Add lightweight behavior when the design clearly implies it:

- tabs switch panels
- segmented controls switch modes
- sliders update numeric values
- toggles change state
- active buttons visibly update
- menus/sheets open and close
- preview controls affect a canvas or mock state

Keep interactions minimal and inspectable. Do not build a backend or full app logic unless requested.

### 7. Make It Responsive

At minimum verify:

- desktop viewport
- mobile viewport

Ensure:

- no horizontal overflow
- no text overlap
- controls keep stable dimensions
- fixed-format media preserves aspect ratio
- key actions remain visible or reachable
- text remains legible and fits its container

### 8. Verify With Browser Screenshots

Run real browser verification before claiming completion:

1. Start a local server if needed.
2. Capture desktop and mobile screenshots.
3. Compare screenshots to the source image.
4. Fix layout, spacing, color, typography, cropping, and interaction mismatches.
5. Repeat until the implementation reads as the same design.

Do not claim visual completion without fresh screenshot evidence.

## Fidelity Standard

Acceptable differences:

- slight font rendering differences
- minor icon substitutions
- non-critical image content variation
- small browser rendering differences

Not acceptable:

- missing major sections
- different layout
- different color mood
- broken spacing rhythm
- overlapping text
- generic placeholder content replacing meaningful areas
- unverified responsive behavior

## Deliverable Report

When finished, report:

- files created or modified
- local preview URL or static file path
- browser/screenshot verification performed
- key interactions implemented
- known fidelity gaps, if any

Keep the final report concise.
