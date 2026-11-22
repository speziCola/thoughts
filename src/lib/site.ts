/**
 * Site-wide identity used for SEO metadata (meta tags, JSON-LD, RSS, sitemap).
 * Canonical origin is always the final domain, also on the github.io copy.
 */
export const SITE_ORIGIN = "https://chriskuhrt.de";
export const SITE_NAME = "Chris Kuhrt";
export const SITE_LOCALE = "en_US";

/** Absolute canonical URL for a root-relative path ending in "/". */
export const canonicalUrl = (path: string): string => SITE_ORIGIN + path;

export const PERSON_ID = `${SITE_ORIGIN}/#person`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

/**
 * Profiles for schema.org `sameAs`. Vanity redirects for now – replace with the
 * final profile URLs (e.g. https://www.linkedin.com/in/…) for best results.
 */
export const SOCIAL_PROFILES = [
  "https://linkedin.chriskuhrt.de/",
  "https://xing.chriskuhrt.de/",
  "https://twitter.chriskuhrt.de/",
  "https://github.chriskuhrt.de/",
  "https://medium.chriskuhrt.de/",
  "https://500px.chriskuhrt.de/",
  "https://vimeo.chriskuhrt.de/",
];

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Chris Kuhrt",
  alternateName: "Christopher Kuhrt",
  url: canonicalUrl("/about/"),
  jobTitle: "Head of Research & Design",
  description:
    "Design leader, product strategist and design systems advocate based in Freiburg, Germany.",
  worksFor: { "@type": "Organization", name: "etops", url: "https://www.etops.com/" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Freiburg im Breisgau",
    addressCountry: "DE",
  },
  knowsAbout: [
    "Design Leadership",
    "Product Strategy",
    "Design Systems",
    "User Experience Design",
    "UX Research",
    "Financial Software",
    "E-Commerce",
  ],
  knowsLanguage: ["en", "de"],
  sameAs: SOCIAL_PROFILES,
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: canonicalUrl("/"),
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};
