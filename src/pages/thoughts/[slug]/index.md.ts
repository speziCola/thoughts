/**
 * Plain-Markdown version of each article at /thoughts/<slug>/index.md, for AI agents
 * and LLMs. Linked from the article page via <link rel="alternate" type="text/markdown">,
 * from /llms.txt, and returned by the WebMCP get_post tool.
 */
import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts, type Post } from "../../../lib/posts";
import { markdownResponse, postAsMarkdownDocument } from "../../../lib/markdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
};

export const GET: APIRoute = ({ props }) =>
  markdownResponse(postAsMarkdownDocument((props as { post: Post }).post));
