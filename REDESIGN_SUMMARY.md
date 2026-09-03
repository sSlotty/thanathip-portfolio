# Redesign — Claymorphism on a WebGL Stage

Replaces the previous neobrutalism + glassmorphism system.

## What changed

| Area | Before | After |
|---|---|---|
| Background | Dark gradient + CSS grid/dot patterns | Raymarched SDF clay blobs in WebGL |
| Surfaces | Glass cards, 4px borders, hard `8px 8px` shadows | Clay slabs: 34px radii, coloured drop + white bounce + inner shadows |
| Palette | Neon on `#0A0E27` | Pastel clay on `#EEF0FF`, each accent paired with a darker ink for text |
| Type | Space Grotesk, `font-black` | Nunito, `font-extrabold`, extruded highlight words |
| Motion | CSS entrance animations | Pointer tilt, depth reveal, pointer-tracked camera |

## New files

- `src/webgl/ShaderBackground.tsx` — the WebGL scene (no npm dependency added)
- `src/components/ui/ClayCard.tsx` — the tilting clay slab
- `src/components/ui/SectionHeading.tsx` — section header
- `src/hooks/useTilt.ts`, `useReveal.ts`, `useScrollDepth.ts`

## Content presentation

Work-experience descriptions are authored as plain text with `•` bullets, `✓`
achievements and a trailing `Tech Stack:` line. `parseDescription()` in
`TimelineWork.tsx` turns that into real headings, lists and chips instead of one
pre-wrapped paragraph. Skills and projects moved from `if`-chains over category
titles to a single data array per section.

## Cost

Zero dependencies added. Bundle: **68.3 kB** JS gzipped (was 67.6 kB before the
3D work, ~65 kB in the old design) and **11.1 kB** CSS.

## Verified

Production build compiles clean; `tsc --noEmit` passes. Hero, About, Experience,
Skills and Projects rendered and inspected in headless Chrome.
