import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeBlogRegistry from "./src/lib/rehype-blog-registry.mjs";

export default defineConfig({
  site: "https://chriskuhrt.de",
  // Site lives at the domain root: /home/, /timeline/, /thoughts/, /thoughts/<slug>/.
  // Links are always written with a trailing slash; "ignore" lets /home work too.
  trailingSlash: "ignore",
  redirects: {
    "/": "/home/",
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeBlogRegistry],
    }),
  },
});
