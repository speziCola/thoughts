# Start page assets – PLACEHOLDERS

Every file here is a placeholder. Replace it with the real asset under the **same file name**;
Astro picks up the new file and regenerates responsive sizes on the next build. If you change a
format (e.g. `.png` → `.jpg` or `.svg`), update the matching import in `src/pages/home.astro`.

| File | Figma layer (desktop < 1920, 8156:4854) | Shown at |
|---|---|---|
| `hero-art.png` | left art panel (hero-image + blurred Hero-Image + overlay, flattened into one image) | sticky panel, `object-fit: cover`, portrait ≈ 3:4 |
| `social-linkedin.svg`, `social-twitter.svg` | img-footer icons (white) | 20×20 |
| `icon-team.svg`, `icon-designsystem.svg`, `icon-finance.svg`, `icon-ecom.svg` | area card icons (dark; inverted to white on hover) | 28×28 |
| `section-team.svg`, `section-designsystem.svg`, `section-finance.svg`, `section-ecom.svg` | Header--Section icons (white on black) | 32×32 |
| `ref-chrono24.png`, `ref-dfb.png`, `ref-swisscom.png`, `ref-scfreiburg.png`, `ref-reservix.png` | reference logo row (flatten each `ck-r-*` frame) | 157.5×60 (96×37 mobile), 60% opacity, luminosity blend |
| `abundantia.png` | Abundantia image | 2:1 frame |
| `logo-etops.png`, `logo-patronas.png`, `logo-chrono24.png`, `logo-reservix.png` | company logos in Finance / E-Commerce | 111×56, `object-fit: contain`, 60% opacity |

The UX Freiburg photos, channel icons and the two article teaser images are real and come from `src/assets/what-i-do/` (shared with the What I Do page).
