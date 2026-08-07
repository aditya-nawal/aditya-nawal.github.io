import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    number: z.string(),
    accent: z.enum(['lavender', 'coral', 'teal']),
    featured: z.boolean().default(false),
    status: z.string(),
    summary: z.string(),
    question: z.string(),
    paper: z.url().optional(),
    pdf: z.url().optional(),
    code: z.url().optional(),
    dataset: z.url().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.string(),
    kind: z.string(),
    paper: z.url().optional(),
    pdf: z.url().optional(),
    summary: z.string(),
  }),
});

export const collections = { research, publications };
