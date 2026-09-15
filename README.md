# BrAInix

One site, two faces. A switch in the navigation flips the whole experience between:

1. **Web Services** (default) — the BrAInix product studio: custom web development,
   deployment, brand identity and API work.
2. **Edu Tech** — BrAInix Edu: the adaptive AI learning platform and its seven course tracks.

Flipping the switch swaps every section's copy, the colour palette, the page title and
both WebGL scenes. The choice is remembered in `localStorage`.

## Look

White canvas, purple / violet accents, black ink. Glassmorphism throughout —
backdrop-blurred cards over a live WebGL layer, plus SVG grain, orbs, dot grids and
dashed circuitry.

## 3D

Two Three.js scenes, both mode-reactive:

- `src/three/Backdrop.jsx` — fixed ambient layer: particle cloud, tumbling wireframe
  solids and transmissive blobs. Throttled to 30 fps and paused when the tab is hidden.
- `src/three/HeroScene.jsx` — the hero centrepiece: a tinted glass core (icosahedron in
  services mode, torus knot in edu mode) inside a wireframe shell, with orbit rings and
  satellite nodes. Pauses when scrolled off screen.
- `src/three/env.js` — procedural equirectangular environment map so the glass has
  something to refract. Without it, transmissive materials read as grey on a white page.

Both scenes dispose their geometries, materials and renderer on unmount, degrade to the
CSS-only design if WebGL is unavailable, and respect `prefers-reduced-motion`.

## Structure

```
src/
  App.jsx              mode state, section order, modal + toast
  data/site.jsx        all copy for both modes, plus shared brand facts
  styles/theme.css     design tokens, glass primitives, layout, motion
  three/               Backdrop, HeroScene, env
  components/          Nav, ModeSwitch, Hero, Marquee, Sections, Footer,
                       ContactModal, CursorGlow, Graphics (SVG)
  hooks/useReveal.js   scroll-reveal observer with a timed safety net
```

Editing copy rarely means touching a component — nearly all text lives in
`src/data/site.jsx`.

## Development

```bash
npm install
npm run dev       # vite dev server
npm run build     # production build to dist/
npm run preview   # serve the build
npm run lint      # eslint
npm run deploy    # build + publish dist/ to gh-pages
```

## Contact form

The site is static, so the enquiry / enrollment modal composes a `mailto:` to
`hashedtechs@gmail.com` with the form contents filled in, and links the Google intake
form as a second route. Point it at a real endpoint if you add a backend.

## Before launch

The testimonials in `src/data/site.jsx` are placeholders (flagged with comments in the
file) — replace them with real, attributable quotes.
