# Architecture

The blog is a static Astro site at `https://chriskuhrt.de/thoughts/`. Astro builds the pages and styles at publish time; there is no CMS, runtime server, or client framework.

## Content

Articles live in `src/content/thoughts/<slug>/index.md`, with local images beside the Markdown file. The `thoughts` content collection validates the required `date` and `description` fields and accepts `updated`, `draft`, `aliases`, `tags`, and `cover`. Unknown frontmatter fields are rejected, so article titles remain in the body rather than duplicated in metadata.

The article body must contain exactly one level-one heading. The Markdown rendering registry checks this rule and turns titled images into semantic figures with captions and label badges. Two adjacent standalone images become a responsive image row. The original Markdown remains the source of truth for article text and placement.

The static About and What I Do pages follow the content of their main-site pages; What I Do follows the Figma frame "What I Do" (`134:3728`). All images are served locally (`src/assets/what-i-do/`, exported from Figma).

Shared components in `src/components/`:

| Component | Role |
|---|---|
| `SiteHeader`, `SiteFooter` | Page shell. |
| `SectionTitle` | Page/section heading with the underline bar; `as` sets the semantic level, the style is always `page/heading/level-1`. |
| `Card` | The one card surface (background, radius, inner highlight). `width` full/half, `padding` sm/md/lg, `layout` stack/split with an optional `media` slot, `accent` for a coloured bottom border. Content precedes media in the DOM; media position is visual only. |
| `CardGrid` | Responsive grid for cards: 1–4 columns, 4 → 2 below 1200px, 1 column on mobile (≤900px). |
| `ArticleTeaser` | Article card built on `Card`: split layout (overview list, with date and tags) or stack layout (half-width teasers). Uses Astro image optimisation. |

## Presentation

Astro `.astro` templates render the shared page shell, static pages, and article route. The global stylesheet contains the Figma-derived typography and color tokens, fluid type scales, general layout, and accessible focus styles; page-specific layout styles live with their templates. The reading column is 720px on desktop, with image pairs breaking out to the 1280px content wrapper and stacking in narrow containers. Fonts and article assets are served locally.

The selected Figma article is the first prototype article. The blog root forwards readers to its trailing-slash URL until a separately designed index is approved.

## Build and publishing

`npm run check` validates Astro and content. `npm run build` generates static HTML under `dist/`. The GitHub Actions workflow runs both checks and publishes that directory to GitHub Pages. Astro's `/thoughts` base path and always-trailing-slash URLs match the repository and public route.
