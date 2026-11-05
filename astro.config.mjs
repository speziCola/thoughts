import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeBlogRegistry from "./src/lib/rehype-blog-registry.mjs";

export default defineConfig({
  site: "https://chriskuhrt.de",
  base: "/thoughts",
  trailingSlash: "always",
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeBlogRegistry],
    }),
  },
});
