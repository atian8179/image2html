# HTML/CSS Rebuild Patterns

## Static Project Shape

Use this shape when no frontend app exists:

```text
index.html
styles.css
script.js
assets/
```

Keep HTML semantic and CSS tokenized.

## CSS Token Baseline

```css
:root {
  --bg: #f7f7f5;
  --surface: #ffffff;
  --text: #161616;
  --muted: #687076;
  --accent: #0f6b5f;
  --border: rgba(20, 24, 24, 0.12);
  --radius: 16px;
  --shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
}
```

Rename and adjust tokens to match the image.

## Layout Rules

- Use `minmax(0, 1fr)` for grid columns that contain flexible content.
- Use `aspect-ratio` for visual frames.
- Use `clamp()` for container widths and spacing, not for viewport-scaled typography.
- Use stable button/control heights to prevent layout shift.
- Avoid nested cards unless the reference clearly uses nested framed components.

## Interaction Rules

Use plain JavaScript for static prototypes:

```js
document.querySelectorAll('[data-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });
  });
});
```

Keep state in DOM classes or small local variables.

## Browser Verification

Prefer Playwright when available:

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

If managed Playwright browsers are unavailable, use an installed Chromium/Edge executable path.
