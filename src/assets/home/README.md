# Start page assets – PLACEHOLDERS

- `icons/` – vector icons and logos as **SVG**
- `images/` – pixel images (photos, artwork, raster logos) as **PNG/JPG/WebP**

Every file here is a placeholder. Replace it with the real asset under the **same file name**;
Astro picks up the new file and regenerates responsive sizes on the next build. If you change a
format (e.g. `.png` → `.jpg` or `.svg`), update the matching import in `src/pages/home.astro`.

| File | Figma layer (desktop < 1920, 8156:4854) | Shown at |
|---|---|---|
| `images/hero-art.png` | left art panel (hero-image + blurred Hero-Image + overlay, flattened into one image) | sticky panel, `object-fit: cover`, portrait ≈ 3:4 |
| `icons/social-linkedin.svg`, `icons/social-twitter.svg` | img-footer icons (white) | 20×20 |
| `icons/icon-team.svg`, `icons/icon-designsystem.svg`, `icons/icon-finance.svg`, `icons/icon-ecom.svg` | area card icons (dark; inverted to white on hover) | 28×28 |
| `icons/section-team.svg`, `icons/section-designsystem.svg`, `icons/section-finance.svg`, `icons/section-ecom.svg` | Header--Section icons (white on black) | 32×32 |
| `images/ref-chrono24.png`, `images/ref-dfb.png`, `images/ref-swisscom.png`, `images/ref-scfreiburg.png`, `images/ref-reservix.png` | reference logo row (flatten each `ck-r-*` frame) | 157.5×60 (96×37 mobile), 60% opacity, luminosity blend |
| `images/abundantia.png` | Abundantia image | 2:1 frame |
| `images/logo-etops.png`, `images/logo-patronas.png`, `images/logo-chrono24.png`, `images/logo-reservix.png` | company logos in Finance / E-Commerce | 111×56, `object-fit: contain`, 60% opacity |

The UX Freiburg photos, channel icons and the two article teaser images are real and come from `src/assets/what-i-do/` (shared with the What I Do page).
