import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const thoughts = defineCollection({
  loader: glob({
    base: "./src/content/thoughts",
    pattern: "**/index.md",
  }),
  schema: z
    .object({
      date: z.coerce.date(),
      description: z.string(),
      updated: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      aliases: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      cover: z.string().optional(),
    })
    .strict(),
});

export const collections = { thoughts };
