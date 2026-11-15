# Start page assets – PLACEHOLDERS

Every file here is a placeholder. Replace it with the real asset under the **same file name**;
Astro picks up the new file and regenerates responsive sizes on the next build. If you change a
format (e.g. `.png` → `.jpg` or `.svg`), update the matching import in `src/pages/home.astro`.

| File | Figma layer (desktop < 1920, 8156:4854) | Shown at |
|---|---|---|
| `hero-art.png` | left art panel (hero-image + blurred Hero-Image + overlay, flattened into one image) | sticky panel, `object-fit: cover`, portrait ≈ 3:4 |
| `portrait.png` | `chriskuhrt` › image 32 | 256×256 (128 mobile), square |
| `social-linkedin.svg`, `social-twitter.svg` | img-footer icons (white) | 20×20 |
| `icon-team.svg`, `icon-designsystem.svg`, `icon-finance.svg`, `icon-ecom.svg` | area card icons (dark; inverted to white on hover) | 28×28 |
| `section-team.svg`, `section-designsystem.svg`, `section-finance.svg`, `section-ecom.svg` | Header--Section icons (white on black) | 32×32 |
| `ref-chrono24.png`, `ref-dfb.png`, `ref-swisscom.png`, `ref-scfreiburg.png`, `ref-reservix.png` | reference logo row (flatten each `ck-r-*` frame) | 157.5×60 (96×37 mobile), 60% opacity, luminosity blend |
| `channel-linkedin.svg`, `channel-meetup.svg`, `channel-discord.svg` | UX Freiburg channel list icons | 20×20 |
| `uxf-rooftop.png`, `uxf-speaker.png`, `uxf-challenges.png`, `uxf-agenda.png` | UX Freiburg image grid | cropped with `object-fit: cover` |
| `abundantia.png` | Abundantia image | 2:1 frame |
| `logo-etops.png`, `logo-patronas.png`, `logo-chrono24.png`, `logo-reservix.png` | company logos in Finance / E-Commerce | 111×56, `object-fit: contain`, 60% opacity |

The two article teasers already use the real covers from their posts in `src/content/thoughts/`.
