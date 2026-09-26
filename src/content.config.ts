import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const page = z.object({
  title: z.string(),
  description: z.string(),
  pageType: z.string(),
  keyword: z.string().optional(),
  schemaType: z.string().default("Article"),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  brand: z.string(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
});

export const collections = {
  landing: defineCollection({ loader: glob({ pattern: "**/*.mdx", base: "./src/content/landing" }), schema: page }),
  pages: defineCollection({ loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }), schema: page }),
  posts: defineCollection({ loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }), schema: page }),
  // the knowledge base (#161, #314): help answers the support bot cites, served under /help/
  docs: defineCollection({ loader: glob({ pattern: "**/*.mdx", base: "./src/content/docs" }), schema: page }),
};
