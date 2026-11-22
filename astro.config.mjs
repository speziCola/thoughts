import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeBlogRegistry from "./src/lib/rehype-blog-registry.mjs";

// Base path: "/" (site at the root of chriskuhrt.de). A build for a project-path
// address (e.g. spezicola.github.io/thoughts/) can set SITE_BASE=/thoughts.
const base = process.env.SITE_BASE ?? "/";

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
  // "/" → "/home/" is src/pages/index.astro (instant script redirect, no visible page).
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
