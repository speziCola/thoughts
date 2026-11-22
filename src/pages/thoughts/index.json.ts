/**
 * /thoughts/index.json: machine-readable article index (newest first).
 * Used by the WebMCP tools (src/components/WebMcp.astro); also handy for any agent.
 */
import type { APIRoute } from "astro";
import { getPosts } from "../../lib/posts";
import { postMarkdownUrl, postUrl } from "../../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const index = posts.map((post) => ({
    slug: post.slug,
    title: post.seoTitle,
    description: post.description,
    date: post.date.toISOString().slice(0, 10),
    tags: post.tags,
    url: postUrl(post),
    markdown: postMarkdownUrl(post),
  }));
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
