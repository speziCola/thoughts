# Figma audit

File: **CK_Portfolio-v05** – https://www.figma.com/design/cJMSDnrBTz36GqUzRZ6AJS/CK_Portfolio-v05?node-id=47-202
Canonical page: **"Claude – Blog"** (`47:202`). Page "Blog" (`0:1`) is history – ignore.

## Frames
- `47:242` Desktop 1920 – `content-wrapper` 1280, reading column 720 (x offset 280).
- `48:421` Mobile 360 – content 344 (8px gutter in Figma; code uses 16px).
- `55:336` Section "Provisional – design pending" – placeholder components (see below).
- Page background `#F4F1EF` (hardcoded, no token yet).

## Tokens (Figma variable → CSS custom property)
Typography (collection "Semantic: Typography-Blog", modes Desktop / Mobile):

| Figma | CSS | Desktop size / lh | Mobile size / lh |
|---|---|---|---|
| `blog/title/lg` | `--blog-title-lg-*` | 24 / 32.4 | 18 / 24.3 |
| `blog/title/md` | `--blog-title-md-*` | 18 / 30.6 | 16 / 27.2 |
| `blog/title/sm` | `--blog-title-sm-*` | 14 / 23.8 | 14 / 23.8 |
| `blog/body/md` | `--blog-body-md-*` | 16 / 27.2 | 14 / 23.8 |
| `blog/utility/sm` | `--blog-utility-sm-*` | 12 / 20.4 | 12 / 20.4 |
| `blog/utility/xs` | `--blog-utility-xs-*` | 12 / 20.4 | 11 / 18.7 |

Each has `…-size` and `…-line-height`. Families: `--blog-font-title` = Fira Sans (SemiBold 600 for titles), `--blog-font-body` = Supreme (Regular 400, Italic for captions). Line-height primitives: compact 1.35, normal 1.5, wide 1.7.

The separate `Semantic: Typography` collection supplies the page styles used by the article card. CSS maps these to `--page-*` tokens and fluidly interpolates Mobile → Desktop values between 360px and 1920px:

| Figma style/token | Mobile size / line height | Desktop size / line height |
|---|---:|---:|
| `page/display/hero` | 26 / 35.1 | 40 / 60 |
| `page/display/hero-subtitle` | 18 / 27 | 32 / 48 |
| `page/heading/level-1` | 20 / 27 | 32 / 43.2 |
| `page/heading/level-2` | 18 / 24.3 | 24 / 32.4 |
| `page/heading/level-3` | 18 / 24.3 | 20 / 27 |
| `page/heading/level-4` | 16 / 24.3 | 18 / 27 |
| `page/card/article-title` | 18 / 24.3 | 18 / 24.3 |
| `page/body/default` | 15 / 26.25 | 16 / 28.8 |
| `page/body/compact` | 15 / 20.25 | 16 / 21.6 |
| `page/action/button` | 16 / 24 | 20 / 30 |
| `page/navigation/link` | 14 / 23.8 | 16 / 27.2 |
| `page/label/default` | 14 / 21 | 16 / 24 |
| `page/label/regular` | 12 / 20.4 | 12 / 20.4 |
| `page/caption/default` | 12 / 18 | 14 / 21 |

Page font families are Fira Sans (title) and Supreme (body), with regular 400 and semibold 600 weights. The page card title uses compact 1.35 line height; `page/body/compact`, navigation, and label styles use the matching 1.35, 1.7, and 1.5 line-height primitives.

Colours (shared, unprefixed):

| Figma | CSS | Value |
|---|---|---|
| `foreground/strong` | `--foreground-strong` | `#0a0a0a` |
| `foreground/regular` | `--foreground-regular` | `#414141` |
| `foreground/light` | `--foreground-light` | `#656565` |
| `foreground/inverse` | `--foreground-inverse` | `#fdfdfd` |

Radius: `--radius-4` = 4px.

## Components
Existing (on page "Blog", used on "Claude – Blog"): `title-blog` (date + H1), `h2-title-blog`, `Paragraph`, `IMG` (image slot, figcaption, label badge), `Devider` (2px rule, 64px padding above/below). `IMG-2-Columns` is still a frame (gap 32) – to be converted to a component manually.

Footer (`102:1066`): full-width black background and section padding, with content centered in a stack capped at 1280px. Desktop/laptop footer padding is 128px vertical and 48px horizontal; social and project groups share a two-column row, followed by copyright and Imprint. Mobile footer padding is 16px horizontal, 80px top, and 32px bottom; the groups stack with 72px spacing, and social links use two columns. Footer headings use Fira Sans SemiBold at 18px desktop / 16px mobile with 1.35 line height. Social and project links use Supreme Regular at 16px / 14px with 1.7 line height; all footer links are underlined and use the same `#bfbfbf` color at every breakpoint. Copyright uses Fira Sans Regular at 16px / 14px with 1.5 / 1.35 line height; Imprint uses Fira Sans Regular at desktop 16px / 24px, while mobile uses Supreme Regular at 14px / 23.8px. Social destinations are the `*.chriskuhrt.de` aliases; projects link to UX Freiburg and Pixelbricks. Fira Sans Regular is self-hosted in `src/assets/fonts` with its SIL Open Font License.

Provisional (section `55:336`, redesign freely): `h3-title-blog`, `Link` (Default/Hover/Focus), `List` (Unordered/Ordered), `Blockquote`, `code-inline`, `code-block`, `table-cell` (Header/Body), `Table`, `Header`, `Footer`. Their body text uses a Fira Sans stand-in named `@blog/…` – apply the Supreme styles in the desktop app.

## Known gaps (hardcoded in Figma, no token yet)
- Divider grey `#d9d9d9`, date colour `#303859`, label badge background `#000`, page background `#F4F1EF`.
- No border / surface tokens (provisional components use foreground colours at reduced opacity).
- `h2-title-blog` text has no text style applied.
- No spacing or breakpoint tokens.
