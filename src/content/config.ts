import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  templateKey: z.string().optional(),
  // Add other fields as discovered
  image: z.string().optional(),
  featuredimage: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
  number: z.number().optional(),
  pagetype: z.array(z.string()).optional(),
}).partial();

const news = defineCollection({
  type: 'content',
  schema: commonSchema,
});

const work = defineCollection({
  type: 'content',
  schema: commonSchema,
});

const sold = defineCollection({
  type: 'content',
  schema: commonSchema,
});

const pages = defineCollection({
  type: 'content',
  schema: commonSchema,
});

export const collections = {
  news,
  work,
  sold,
  pages,
};
