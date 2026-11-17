# Decisions

Agreed 2026-11-01 in a design interview. Change only with Christopher's explicit OK.

## Platform & hosting
| Topic | Decision |
|---|---|
| Generator | Astro, `.astro` templates only, zero client JS by default. Chosen over Eleventy for typed content collections (frontmatter validation), the unified/remark pipeline (`remark-directive` if ever needed), built-in image optimisation, official sitemap/RSS. |
| Repo | `speziCola/thoughts`, public (Pages on free plan). Repo name = base path. |
| Deploy | GitHub Action: install → validate → build → deploy to GitHub Pages. No server runtime. |
| Public URL | `chriskuhrt.de/thoughts/`. Main site `chriskuhrt.de` runs on Framer; AWS sits in front and routes `/thoughts/*` to `spezicola.github.io/thoughts/`. |
| AWS details | **Deferred.** Known issue to solve then: GitHub redirects `/thoughts/post` → `spezicola.github.io/thoughts/post/` (leaves the domain). Fix with a viewer-request function adding the trailing slash; build emits trailing-slash links. |
| Canonicals | Always `https://chriskuhrt.de/thoughts/…` (also on the github.io copy). |

## Content model
| Topic | Decision |
|---|---|
| Scope | Blog plus static About and What I Do pages at `/thoughts/about/` and `/thoughts/what-i-do/`. English only. |
| Structure | `src/content/thoughts/<slug>/index.md` + local images. URL `/thoughts/<slug>/`. No dates/IDs in URLs. |
| Frontmatter | Required: `date`, `description`. Optional: `updated`, `draft`, `aliases`, `tags`, `cover`. **No `title`.** Validate with a content-collection schema; errors must name file + field. |
| Title | The single `#` heading in the body. Feeds `<title>`, OG, RSS, lists. Zero or multiple `#` → build error. |
| Drafts | `draft: true` → visible in `astro dev`, excluded from build. |
| Renames | `aliases: [old-slug]` → generated static redirect pages (meta refresh + canonical), since Pages has no server redirects. |
| Cover / OG | First image in the post, unless `cover:` overrides. |
| Index & tags | Not now – wait for a design. `tags` field allowed but unused. |

## Markdown → component mapping
| Markdown | Output | Figma component | Style |
|---|---|---|---|
| `# Title` | `<h1>` + date | `title-blog` | `blog/title/lg`, date `blog/utility/xs` |
| `## Section` | `<h2>` | `h2-title-blog` | `blog/title/md` |
| `### Sub` | `<h3>` (real subsections only) | `h3-title-blog` (provisional) | `blog/title/sm` |
| paragraph | `<p>` | `Paragraph` | `blog/body/md` |
| standalone italic paragraph (`*Note text*`) | `<p class="blog-note">` | `Note` (provisional) | `blog/utility/xs/italic`, matching image caption text |
| `---` | `<hr>` | `Devider` | — (author always types it; never auto-inserted) |
| `![alt](src "Label: caption")` | `<figure>` + `<img>` + `<figcaption>` + label span | `IMG` | caption `blog/utility/xs/italic`, label `blog/utility/xs` on dark badge |
| two images on consecutive lines | two-column row, breaks out to 1280, stacks via container query | `IMG-2-Columns` | — |
| `[text](url)` | `<a>` | `Link` (provisional) | underline, focus-visible outline |
| `- item` / `1. item` | `<ul>` / `<ol>` | `List` (provisional) | |
| `> quote` | `<blockquote>`; last line starting `—` → `<cite>` | `Blockquote` (provisional) | |
| `` `code` `` / fences | `<code>` / `<pre><code>` | `code-inline`, `code-block` (provisional) | Shiki at build time, monochrome theme from foreground tokens |
| GFM table | `<table>` (horizontal scroll when narrow) | `Table`, `table-cell` (provisional) | |

Image rules: alt = accessible description (never shown as caption). No colon in title → caption only. Use Astro image optimisation: `srcset`/`sizes`, intrinsic dimensions, `loading="lazy"` except the first image.

## Design system
- Source of truth: Figma page **"Claude – Blog"** only (see `docs/figma-audit.md`).
- Blog typography is blog-scoped (`--blog-*`); Figma page typography is separately represented by `--page-*`. Colours and radius are shared foundations.
- Fluid type & spacing via `clamp()` interpolating 360px → 1920px values. No breakpoints for type.
- Viewport ranges: mobile 0–900px, laptop 901–1400px, desktop 1401px and wider. Laptop and desktop share the base layout unless a design specifies otherwise.
- Layout: 720px reading column, 1280px breakout for image rows, 16px mobile gutter (Figma shows 8; deliberately raised).
- Header: minimal, provisional. Header = name linking to `https://chriskuhrt.de` + skip link. Footer = responsive Figma design with social profiles, project links, copyright, and legal links to the Framer site.
- Fonts self-hosted (`font-display: swap`, preload the title font). Fira Sans Regular, Semibold, and Bold plus Supreme Regular, Italic, and Bold are in `src/assets/fonts`. No dark mode for now.

## Prototype scope (next step, needs approval before step 3)
One real article ("Asking the right follow-up questions", text from Figma, placeholder images) at `/thoughts/<slug>/` covering: H1–H3, paragraphs, links, lists, single + two-column images with labels, `---`, header/footer, tokens, fluid type, self-hosted fonts, and the GitHub Pages deploy action.

## URL structure (2026-11-17)

Supersedes the `/thoughts` base path above. No Astro `base`: pages live at the root (`/home/`, `/what-i-do/`, `/timeline/`, `/about/`), the blog index is `/thoughts/`, articles are `/thoughts/<slug>/`, and `/` redirects to `/home/`. Canonicals are `https://chriskuhrt.de/<path>/`. `trailingSlash: "ignore"`, links always written with `/`. Open: hosting. The GitHub Pages project URL (`spezicola.github.io/thoughts/`) no longer works as a mirror, because assets are root-relative. The site needs a domain at its root (custom domain on Pages, or AWS routing all of these paths).
