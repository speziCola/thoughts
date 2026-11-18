import type { APIRoute } from "astro";
import { canonicalUrl } from "../lib/site";

/** Only meaningful at a domain root (chriskuhrt.de); ignored on the github.io project path. */
export const GET: APIRoute = () => {
  const noindex = import.meta.env.SITE_NOINDEX === "true";
  const body = noindex
    ? "User-agent: *\nDisallow:\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${canonicalUrl("/sitemap.xml")}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
