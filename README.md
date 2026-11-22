# Thoughts – chriskuhrt.de

Source of [chriskuhrt.de](https://chriskuhrt.de/), the personal website of Christopher (Chris) Kuhrt: start page, What I Do, Timeline, About and the blog **Thoughts** at [/thoughts/](https://chriskuhrt.de/thoughts/).

It's a Markdown-first static site built with [Astro](https://astro.build/). There is no CMS, no database and no client framework. You write Markdown, and the build turns it into static HTML and CSS based on the site's Figma design system.

## Quick start

Requires Node.js 22.

```bash
npm install
npm run dev          # local dev server at http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload (drafts are visible here) |
| `npm run dev:network` | Same, reachable from other devices on your network |
| `npm run build` | Production build into `dist/` (drafts excluded) |
| `npm run preview` | Serves the built `dist/` locally |
| `npm run check` | Validates content frontmatter and TypeScript |
| `npm test` | Runs the Markdown rendering tests |

## Writing an article

Each article is a folder with an `index.md` and its images next to it:

```
src/content/thoughts/<slug>/
├── index.md
└── assets/
    └── hero.png
```

The folder name becomes the URL: `/thoughts/<slug>/`.

```markdown
---
date: 2026-11-22
description: "One or two sentences, used for SEO, social cards, RSS and llms.txt."
tags:
  - "ux"
cover: ./assets/hero.png   # optional, defaults to the first image
---

# The article title

Intro paragraph…

![Alt text describing the image](./assets/hero.png "Label: Caption text")

## A section
```

**Frontmatter:** `date` and `description` are required. `updated`, `draft`, `aliases`, `tags` and `cover` are optional. Unknown fields fail the build. There is no `title` field: the title is the article's H1.

**Markdown rules:**
- Exactly one `#` heading per article (the title). Zero or more than one fails the build.
- Use `##` and `###` for real subsections only.
- `---` renders a divider and only appears where you write it.
- Image title `"Label: caption"`: the text before the first `: ` becomes the label badge, the rest the caption. The alt text stays the accessible description.
- Two images on consecutive lines become a two-column row.
- `draft: true` shows the post in dev only.
- `aliases` generate redirect pages from old URLs.

## Project structure

```
src/
├── assets/          fonts, icons and images (self-hosted)
├── components/      shared .astro components (header, footer, cards, WebMCP, …)
├── content/         blog articles (content collection "thoughts")
├── data/            timeline data and the hand-written llms profiles
├── layouts/         BlogLayout: page shell, SEO meta, JSON-LD, theme
├── lib/             posts, site identity, URL and Markdown helpers, rendering registry
├── pages/           routes: pages, blog, RSS, sitemap, robots, llms.txt, …
└── styles/          global tokens and page styles
docs/                architecture, decisions, Figma audit
test/                rendering registry tests
```

## For search engines and AI agents

The build generates all of these, so there's nothing to maintain by hand except the profile text:

| URL | Content |
|---|---|
| `/sitemap.xml`, `/robots.txt`, `/rss.xml` | Standard SEO and feed files |
| `/llms.txt`, `/llms-full.txt` | Profile for LLMs plus an auto-generated list of all articles. Edit the profile in `src/data/llms.md` and `src/data/llms-full.md` |
| `/thoughts/<slug>/index.md` | Every article as plain Markdown, linked from the article via `rel="alternate"` |
| `/thoughts/index.json` | Machine-readable article index |

Every page also carries JSON-LD (`Person`, `WebSite`, `BlogPosting`, breadcrumbs) and registers three read-only [WebMCP](https://developer.chrome.com/docs/ai/webmcp) tools for AI agents in the browser: `search_posts`, `get_post` and `get_profile`. WebMCP is experimental and currently only works in Chrome. In other browsers the script does nothing.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: install, `npm run check`, build, deploy to GitHub Pages. The site is served at the root of the custom domain `chriskuhrt.de`, with DNS in AWS Route 53.

For a staging copy that search engines should ignore, build with `SITE_NOINDEX=true`. For a build under a sub-path (for example `username.github.io/thoughts/`), set `SITE_BASE=/thoughts`.

## Principles

- Astro `.astro` templates only: no React, Vue or Svelte, no hydration.
- Semantic HTML first. JavaScript only where a feature really needs it, as progressive enhancement.
- Accessibility target: WCAG 2.2 AA.
- Design tokens come from Figma (`CK_Portfolio`). Fluid type via `clamp()` between the 360px and 1920px designs.
- Fonts (Fira Sans, Supreme) are self-hosted and never loaded from a CDN.

Agreed decisions live in [`docs/decisions.md`](docs/decisions.md), and the architecture is described in [`docs/architecture.md`](docs/architecture.md). Coding agents should start with [`AGENTS.md`](AGENTS.md).

## License

All content (articles, images, design) © Christopher Kuhrt. All rights reserved.
