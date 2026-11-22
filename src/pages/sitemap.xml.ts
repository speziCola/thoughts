import type { APIRoute } from "astro";
import { getPosts } from "../lib/posts";
import { canonicalUrl } from "../lib/site";

/** XML sitemap with canonical URLs; lastmod from post dates. */
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const latest = posts[0] ? (posts[0].updated ?? posts[0].date) : undefined;
  const day = (d?: Date) => (d ? `\n    <lastmod>${d.toISOString().slice(0, 10)}</lastmod>` : "");

  const pages: { path: string; lastmod?: Date }[] = [
    { path: "/" },
    { path: "/what-i-do/" },
    { path: "/about/" },
    { path: "/timeline/" },
    { path: "/imprint/" },
    { path: "/thoughts/", lastmod: latest },
    ...posts.map((p) => ({ path: `/thoughts/${p.slug}/`, lastmod: p.updated ?? p.date })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>\n    <loc>${canonicalUrl(p.path)}</loc>${day(p.lastmod)}\n  </url>`).join("\n")}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
