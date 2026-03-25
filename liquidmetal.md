# LiquidGlass Background (LiquidMetal Shader) - Code Included Report

This document explains how the **LiquidMetal / “liquid glass”** background is built in this project, including the exact code that wires the shader into the page and the CSS that ensures it covers the full viewport.

---

## 1. Dependency: `@paper-design/shaders-react`

The background uses the LiquidMetal shader component from the package below:

```json
// package.json (relevant part)
{
  "dependencies": {
    "@paper-design/shaders-react": "^0.0.72",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^7.13.1"
  }
}
```

Install locally:

```bash
npm i @paper-design/shaders-react
```

---

## 2. Wiring the shader into the app (React)

The shader is rendered in `src/App.jsx`, inside the same fixed-position background container (`.gradient-bg`) that previously held the stripe/gradient background.

### 2.1 Import

```startLine:1:2:src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { LiquidMetal } from '@paper-design/shaders-react';
```

### 2.2 Render the shader background

The background is added where the app renders:
`<div className="gradient-bg" aria-hidden="true"> ... </div>`

```startLine:636:657:src/App.jsx
      <div className="gradient-bg" aria-hidden="true">
        <LiquidMetal
          width="100%"
          height="100%"
          colorBack="#ffffff"
          colorTint="#2d2c72"
          shape="metaballs"
          repetition={6}
          softness={1}
          shiftRed={-0.64}
          shiftBlue={-1}
          distortion={0.4}
          contour={0.4}
          angle={86}
          speed={1.8}
          scale={1.68}
          rotation={108}
          offsetX={-0.78}
          offsetY={0}
          fit="cover"
        />
      </div>
```

### Key props used

- `width="100%"` and `height="100%"`  
  Ensures the shader mount wrapper stretches to the parent container instead of becoming a fixed `1280x720` block.
- `fit="cover"`  
  Ensures the shader content fills the area (no letterboxing / “contain” effect).
- `colorBack="#ffffff"`  
  Keeps the page background pure white.
- `colorTint="#2d2c72"`  
  Makes the **liquid meatball/tint** dark blue `#2d2c72`.
- `scale={1.68}`  
  Slightly enlarges the liquid/meatball effect.

---

## 3. CSS: make the background cover the whole viewport

The shader lives inside `.gradient-bg`, which is fixed and full-viewport. CSS also forces the shader mount’s internal element (canvas/svg) to absolutely fill the container.

```startLine:1987:2010:src/App.css
.gradient-bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  /* Shader canvas sits on top of this fallback. */
  background: #ffffff;
  pointer-events: none;
  backdrop-filter: none;
}

.gradient-bg canvas,
.gradient-bg svg {
  position: absolute;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
}
```

### What each part does

- `position: fixed; top: 0; left: 0; width/height: 100vw/100vh`
  keeps the background locked to the viewport behind the UI.
- `z-index: 1`
  places it behind titlebar/cards (which use higher z-index values).
- `pointer-events: none`
  ensures the shader doesn’t intercept clicks/scroll.
- The `canvas/svg` rule forces the actual rendered shader output to fill the container.

---

## 4. Ensuring the titlebar + page feel consistent (white UI chrome)

Because the background is now pure white, the titlebars were also updated to pure white to avoid an off-white look.

### Desktop titlebar

```startLine:1:15:src/components/Titlebar.css
.titlebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: #ffffff;
  backdrop-filter: none;
  z-index: 999;
  pointer-events: auto;
  -webkit-app-region: drag;
  box-shadow: none;
  border-bottom: none;
  display: flex;
}
```

### Mobile titlebar

```startLine:1:15:src/components/MobileTitlebar.css
.mobile-titlebar {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  backdrop-filter: none;
  border-bottom: none;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
```

---

## 5. How to tune the “liquid glass” look (safe edits)

All tuning should be done through the `LiquidMetal` props inside `src/App.jsx`:

- Make meatballs bigger: increase `scale` (example: `1.68` → `1.75`)
- Change tint color: update `colorTint="#2d2c72"` (to any hex you want)
- More/less liquid clustering: adjust `repetition` and/or `softness`
- Motion speed: change `speed`
- Composition: tweak `offsetX/offsetY`, `angle`, `rotation`

If you ever see the background shrink into a small block again:
- Keep `width="100%"` and `height="100%"`
- Keep `.gradient-bg canvas/svg` absolute `inset: 0; width/height: 100%`
- Prefer `fit="cover"`

---

## 6. Summary

The liquid glass background is created by:

1. Installing `@paper-design/shaders-react`
2. Rendering `<LiquidMetal />` inside a fixed full-screen container (`.gradient-bg`)
3. Forcing the shader output to cover the viewport via CSS
4. Using props to keep:
   - page/background pure white (`colorBack="#ffffff"`)
   - liquid meatball tint dark blue (`colorTint="#2d2c72"`)

