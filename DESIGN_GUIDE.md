# 🎨 Portfolio Design System — Claymorphism on a WebGL Stage

## Overview

The portfolio pairs a **real 3D WebGL scene** with a **claymorphic UI**. A
hand-written fragment shader raymarches soft clay blobs behind the page; every
surface above it is a puffy clay slab that tilts toward the pointer.

No 3D library is used — `three.js` and friends are not dependencies. The scene
is ~180 lines of GLSL in [src/webgl/ShaderBackground.tsx](src/webgl/ShaderBackground.tsx).

## 🧱 The two layers

### 1. The WebGL stage (`src/webgl/ShaderBackground.tsx`)

A full-screen quad running a signed-distance-field raymarcher:

- Four spheres blended with a polynomial `smin()` so they melt together
- Clay shading: wrapped diffuse, a soft fill light, a wide rim, minimal specular
- The camera drifts toward the pointer and always looks at the origin
- A bounding-sphere test lets background pixels skip the march entirely

**Performance guards** — the scene renders at 0.5× DPR on desktop and 0.35× on
mobile, pauses on `visibilitychange`, and draws a short burst instead of an
endless loop under `prefers-reduced-motion`. The canvas only fades in after a
frame has actually landed, so a failed context leaves the CSS gradient showing
rather than a black rectangle.

### 2. The clay UI (`src/index.css`)

Claymorphism is a shadow recipe, not a colour: a soft coloured drop shadow
below, a white bounce above, and inner shadows on the opposite diagonal so the
slab reads as thick.

```css
box-shadow:
  24px 30px 54px -18px rgba(var(--accent-rgb), 0.52),  /* coloured drop  */
  0 2px 10px -4px rgba(42, 35, 80, 0.14),              /* contact shadow */
  -14px -14px 34px -18px rgba(255, 255, 255, 0.95),    /* white bounce   */
  inset -7px -9px 18px -8px rgba(var(--accent-rgb), 0.28),
  inset 8px 10px 20px -6px rgba(255, 255, 255, 0.95);
```

## 🎨 Palette

Every accent ships as a pair. The light value tints surfaces; the `-ink` value
sets type, because the light values do not clear contrast on white.

| Token | Surface | Ink (for text) |
|---|---|---|
| violet | `#7C6CF5` | `#5B48D9` |
| pink | `#FF7B9C` | `#D93B68` |
| mint | `#35CBB8` | `#12897B` |
| amber | `#FFB547` | `#A9700A` |
| sky | `#4CC2F0` | `#0E82B5` |

Base: `--bg #EEF0FF`, `--surface #FFFFFF`, `--ink #2A2350`, `--ink-dim #6F68A0`.

Set an accent by adding `accent-violet` / `accent-pink` / `accent-mint` /
`accent-amber` / `accent-sky` to any element — it rebinds `--accent`,
`--accent-ink` and `--accent-rgb` for that subtree.

## 📦 Components

### `<ClayCard>` — [src/components/ui/ClayCard.tsx](src/components/ui/ClayCard.tsx)

```jsx
<ClayCard accent="violet" className="p-8" stageClassName="lg:col-span-2" tilt={5} delay={80}>
  …
</ClayCard>
```

- `stageClassName` takes **layout** classes (grid spans, flex) — it is the
  perspective wrapper
- `className` takes **visual** classes — it is the slab itself
- `tilt={0}` disables pointer tracking

### `<SectionHeading>` — pill label, extruded highlight word, subtitle.

### CSS utilities

| Class | Use |
|---|---|
| `.clay-card` | the slab (via `<ClayCard>`) |
| `.clay-well` | pressed-in dish for icons and logos |
| `.chip-clay` / `.chip-solid` | pill tags |
| `.btn-clay` / `.btn-solid` | buttons, with a real squash on `:active` |
| `.clay-orb` | floating 3D-shaded sphere |
| `.text-pop` | extruded gradient word (needs `data-text`); add `.is-flat` for small type |
| `.tint-violet` … | accent-ink text colours |

## 🌀 Motion

| Hook | Job |
|---|---|
| `useTilt` | writes `--rx/--ry` (rotation) and `--mx/--my` (sheen) on pointer move |
| `useReveal` | one IntersectionObserver flies `[data-reveal]` in from depth |

`useTilt` opts out on coarse pointers and under reduced motion; `useReveal`
reveals everything immediately under reduced motion.

## ⚠️ Gotchas

- **`backdrop-filter` flattens 3D.** It is a grouping property, so an element
  carrying it computes `transform-style: flat` and every `translateZ` inside is
  cancelled. Put the blur on a pseudo-element if a panel needs both.
- **`perspective` vs `perspective()`.** The property projects an element's
  *children*; the function projects the element *itself*. `[data-reveal]`
  transforms itself, so it uses the function.
- **Tailwind has no 3D utilities** in 3.3 — `perspective-*`, `preserve-3d` and
  `translate-z-*` come from the inline plugin in `tailwind.config.js`.

## ♿ Accessibility

- Accent text always uses the `-ink` value; light accents are for fills only
- `prefers-reduced-motion` disables tilt, reveal, and shader animation
- `:focus-visible` gets a 3px violet ring at 3px offset
