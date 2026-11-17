/**
 * Published posts with derived fields (title from the H1, slug, cover image).
 * Shared by the blog index, article pages, RSS and sitemap.
 */
import { getCollection, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

const coverImages = import.meta.glob<ImageMetadata>(
  "../content/thoughts/**/assets/*.{avif,gif,jpeg,jpg,png,webp}",
  { eager: true, import: "default" },
);

export interface Post {
  entry: CollectionEntry<"thoughts">;
  slug: string;
  /** The H1 exactly as written. */
  title: string;
  /** H1 without a trailing series number like "(#6)" – for <title>, OG, RSS. */
  seoTitle: string;
  description: string;
  date: Date;
  updated?: Date;
  tags: string[];
  coverImage?: ImageMetadata;
  coverAlt: string;
}

export function toPost(post: CollectionEntry<"thoughts">): Post {
  const body = post.body;
  if (typeof body !== "string") {
    throw new Error(`Missing article body in ${post.filePath ?? post.id}.`);
  }

  const title = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (!title) {
    throw new Error(`Missing H1 title in ${post.filePath ?? post.id}.`);
  }

  const slug = post.id.replace(/\/index$/, "");
  const coverPath = post.data.cover?.replace(/^\.\//, "");
  const coverKey = coverPath ? `../content/thoughts/${slug}/${coverPath}` : undefined;
  const coverImage = coverKey ? coverImages[coverKey] : undefined;

  if (coverKey && !coverImage) {
    throw new Error(`Cover image "${coverKey}" for article "${slug}" was not found.`);
  }

  const coverMarkdown = coverPath
    ? [...body.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)].find(
        (match) => match[2].replace(/^\.\//, "") === coverPath,
      )
    : undefined;

  return {
    entry: post,
    slug,
    title,
    seoTitle: title.replace(/\s*\(#\d+\)\s*$/, ""),
    description: post.data.description,
    date: post.data.date,
    updated: post.data.updated,
    tags: post.data.tags ?? [],
    coverImage,
    coverAlt: coverMarkdown?.[1] || title,
  };
}

/** Published posts (drafts only in dev), newest first. */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection(
    "thoughts",
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return entries.map(toPost).sort((a, b) => b.date.getTime() - a.date.getTime());
}
