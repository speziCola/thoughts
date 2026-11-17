import type { APIRoute } from "astro";
import { getPosts } from "../lib/posts";
import { canonicalUrl } from "../lib/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of all published posts, hand-written to avoid a dependency. */
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const link = canonicalUrl(`/thoughts/${p.slug}/`);
      return `    <item>
      <title>${esc(p.seoTitle)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(p.description)}</description>
      <pubDate>${p.date.toUTCString()}</pubDate>
      <dc:creator>Chris Kuhrt</dc:creator>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Thoughts by Chris Kuhrt</title>
    <link>${canonicalUrl("/thoughts/")}</link>
    <atom:link href="${canonicalUrl("/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>Articles by Chris Kuhrt on design leadership, UX, design systems, research and AI prototyping.</description>
    <language>en</language>
    <lastBuildDate>${(posts[0]?.date ?? new Date()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
