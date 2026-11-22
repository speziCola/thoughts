/**
 * /llms.txt (https://llmstxt.org/): the hand-written profile in src/data/llms.md,
 * followed by an "Articles" section generated from the blog collection at build time.
 */
import type { APIRoute } from "astro";
import profile from "../data/llms.md?raw";
import { getPosts } from "../lib/posts";
import { articlesSection, textResponse } from "../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  return textResponse(`${profile.trimEnd()}\n\n${articlesSection(posts)}\n`);
};
