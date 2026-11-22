/**
 * Plain-Markdown output for AI agents and LLMs: /thoughts/<slug>/index.md and the
 * article lists in /llms.txt and /llms-full.txt. Shared by those endpoints so they
 * always describe the same set of published posts.
 */
import type { Post } from "./posts";
import { canonicalUrl } from "./site";

const isoDate = (date: Date) => date.toISOString().slice(0, 10);

/** Canonical URL of an article and of its Markdown version. */
export const postUrl = (post: Post) => canonicalUrl(`/thoughts/${post.slug}/`);
export const postMarkdownUrl = (post: Post) => `${postUrl(post)}index.md`;

/**
 * Article body for agents. Local images are only served under hashed build paths,
 * so they become a short text note (alt text + caption) instead of broken links.
 */
export function postBodyAsMarkdown(post: Post): string {
  const body = post.entry.body ?? "";
  return body.replace(
    /!\[([^\]]*)\]\(\s*<?[^)\s>]+>?(?:\s+"([^"]*)")?\s*\)/g,
    (_match, alt: string, title?: string) => {
      const caption = title ? ` – ${title}` : "";
      return `*[Image: ${alt.trim()}${caption}]*`;
    },
  );
}

/** Full Markdown document for /thoughts/<slug>/index.md, with a small metadata header. */
export function postAsMarkdownDocument(post: Post): string {
  const meta = [
    `> ${post.description}`,
    "",
    `- Author: Christopher Kuhrt`,
    `- Published: ${isoDate(post.date)}`,
    ...(post.updated ? [`- Updated: ${isoDate(post.updated)}`] : []),
    ...(post.tags.length ? [`- Tags: ${post.tags.join(", ")}`] : []),
    `- Web version: ${postUrl(post)}`,
  ].join("\n");

  // The body starts with the article's H1; the metadata goes right below it.
  const body = postBodyAsMarkdown(post).trim();
  const h1 = body.match(/^#\s+.+$/m)?.[0] ?? `# ${post.title}`;
  const rest = body.replace(h1, "").trim();
  return `${h1}\n\n${meta}\n\n${rest}\n`;
}

/** "## Articles" section listing every published post (newest first), llms.txt style. */
export function articlesSection(posts: Post[]): string {
  const lines = posts.map(
    (post) =>
      `- [${post.seoTitle}](${postMarkdownUrl(post)}): ${post.description} (${isoDate(post.date)})`,
  );
  return [
    "## Articles",
    "",
    "Every published article as plain Markdown, newest first. Each article is also available as HTML at the same URL without `index.md`.",
    "",
    ...lines,
  ].join("\n");
}

export const markdownResponse = (text: string) =>
  new Response(text, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });

export const textResponse = (text: string) =>
  new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
