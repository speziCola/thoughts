/**
 * /llms-full.txt: the detailed hand-written profile in src/data/llms-full.md,
 * followed by the generated "Articles" section (same list as /llms.txt).
 */
import type { APIRoute } from "astro";
import profile from "../data/llms-full.md?raw";
import { getPosts } from "../lib/posts";
import { articlesSection, textResponse } from "../lib/markdown";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  return textResponse(`${profile.trimEnd()}\n\n${articlesSection(posts)}\n`);
};
