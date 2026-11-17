/**
 * Internal link with the site's base path in front.
 *
 * Locally and on the final domain the base is "/", so url("/home/") is "/home/".
 * On the GitHub Pages project address the build runs with SITE_BASE=/thoughts,
 * so the same call gives "/thoughts/home/". Always pass a root-relative path
 * ending in "/".
 */
export const url = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;
