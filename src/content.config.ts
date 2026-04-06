import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.md",
    retainBody: true
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    scheduledDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    unlisted: z.boolean().default(false),
    featured: z.boolean().default(false)
  })
});

export const collections = { blog };
