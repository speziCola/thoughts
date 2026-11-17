# Thoughts – agent instructions

Markdown-first static site for Christopher Kuhrt (start page, What I Do, Timeline, About and the blog). Blog index at **https://chriskuhrt.de/thoughts/**.
Write Markdown, get pages built from the blog design system. No CMS, no database, no client framework.

Read before working:
- `docs/decisions.md` – every agreed decision (source of truth; don't re-litigate)
- `docs/figma-audit.md` – Figma file, tokens, components, known gaps

## Status
1. Figma pass – done (2026-11-01).
2. **Next:** architecture write-up + one prototype article + GitHub Pages deploy → wait for approval.
3. Later: RSS, sitemap, Open Graph, alias redirects, link checking, docs.

## Hard rules
- **Astro with `.astro` templates only.** No React/Vue/Svelte/Solid integrations, no hydration, no `client:*` directives.
- Output is static HTML + CSS. JavaScript only where a feature genuinely needs it (progressive enhancement).
- Semantic HTML first; a component is often just a styled native element, not a custom element.
- One central rendering registry maps Markdown nodes → components. Don't scatter rendering logic.
- Visual styles are independent of semantics (an `<h2>` wears `--blog-title-md`, a card title may too).
- Don't invent Figma specs. If something isn't designed, style it minimally from existing tokens and mark it `/* provisional – design pending */`.
- Inspect before implementing; prefer simple over abstract; explain important trade-offs.
- Accessibility target WCAG 2.2 AA: landmarks, skip link, visible focus, reduced motion, no skipped heading levels.

## Key conventions (details in docs/decisions.md)
- No base path: pages at the root (`/home/`, `/what-i-do/`, `/timeline/`, `/about/`), blog index `/thoughts/`, articles `/thoughts/<slug>/`, `/` redirects to `/home/`. Canonicals on `https://chriskuhrt.de/…`; internal links always end with `/`.
- Posts: `src/content/thoughts/<slug>/index.md` with images next to it → `/thoughts/<slug>/`.
- Exactly one `#` per post = H1 = page title (no `title` frontmatter). 0 or >1 → build error.
- `---` = divider, only where the author writes it.
- Image `![alt](src "Label: caption")` → text before first `: ` is the label badge.
- Two images on consecutive lines → two-column row.
- Tokens: `--blog-*` for blog typography; colours/radius shared and unprefixed (`--foreground-strong`, `--radius-4`).
- Fluid type via `clamp()` between the 360px and 1920px designs; mobile gutter 16px.
- Fonts (Fira Sans, Supreme) are self-hosted woff2 in the repo – never load from Google Fonts/Fontshare CDNs.
