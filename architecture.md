# Architecture

The blog is a static Astro site at `https://chriskuhrt.de/thoughts/`. Astro builds the pages and styles at publish time; there is no CMS, runtime server, or client framework.

## Content

Articles live in `src/content/thoughts/<slug>/index.md`, with local images beside the Markdown file. The `thoughts` content collection validates the required `date` and `description` fields and accepts `updated`, `draft`, `aliases`, `tags`, and `cover`. Unknown frontmatter fields are rejected, so article titles remain in the body rather than duplicated in metadata.

The article body must contain exactly one level-one heading. The Markdown rendering registry checks this rule and turns titled images into semantic figures with captions and label badges. Two adjacent standalone images become a responsive image row. The original Markdown remains the source of truth for article text and placement.

## Presentation

Astro `.astro` templates render the shared page shell and article route. One global stylesheet contains the Figma-derived typography and color tokens, fluid type scales, layout, and accessible focus styles. The reading column is 720px on desktop, with image pairs breaking out to the 1280px content wrapper and stacking in narrow containers. Fonts and design assets are served locally.

The selected Figma article is the first prototype article. The blog root forwards readers to its trailing-slash URL until a separately designed index is approved.

## Build and publishing

`npm run check` validates Astro and content. `npm run build` generates static HTML under `dist/`. The GitHub Actions workflow runs both checks and publishes that directory to GitHub Pages. Astro's `/thoughts` base path and always-trailing-slash URLs match the repository and public route.
