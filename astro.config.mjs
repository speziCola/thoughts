import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeBlogRegistry from "./src/lib/rehype-blog-registry.mjs";

// Base path: "/" locally and on the final domain. The GitHub Pages project
// address (spezicola.github.io/thoughts/) builds with SITE_BASE=/thoughts,
// set in .github/workflows/deploy.yml. Remove it there once a custom domain points here.
const base = process.env.SITE_BASE ?? "/";
const withBase = (path) => base.replace(/\/$/, "") + path;

export default defineConfig({
  site: "https://chriskuhrt.de",
  base,
  // Site lives at the domain root: /home/, /timeline/, /thoughts/, /thoughts/<slug>/.
  // Links are always written with a trailing slash; "ignore" lets /home work too.
  trailingSlash: "ignore",
  // Inline the (small) CSS into each page: no render-blocking stylesheet request.
  build: {
    inlineStylesheets: "always",
  },
  redirects: {
    "/": withBase("/home/"),
  },
  vite: {
    // Staging builds (github.io) set SITE_NOINDEX=true → robots noindex on every page.
    define: {
      "import.meta.env.SITE_NOINDEX": JSON.stringify(process.env.SITE_NOINDEX ?? "false"),
    },
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeBlogRegistry],
    }),
  },
});
