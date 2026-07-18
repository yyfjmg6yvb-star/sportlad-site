import { defineCollection, z } from 'astro:content';

// Every article — Takes (opinion), evergreen education, and data-story pieces —
// lives in one collection, tagged by sport + content type. This is what lets
// section pages, archives, and tag pages generate automatically as volume
// grows, instead of hand-wiring a new page per article (per the handoff doc).
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sport: z.enum(['football', 'boxing', 'f1', 'horse-racing', 'tennis', 'darts', 'general']),
    contentType: z.enum(['opinion', 'education', 'data-story']),
    date: z.coerce.date(),
    pinned: z.boolean().optional().default(false),
    editorsPick: z.boolean().optional().default(false),
  }),
});

// Daily picks. Odds are locked at the moment of posting and must never be
// edited after the fact — that frozen figure is what the public track record
// and personal P&L tracker are built on (see handoff: "Odds locking").
const tips = defineCollection({
  type: 'content',
  schema: z.object({
    sport: z.enum(['football', 'boxing', 'f1', 'horse-racing', 'tennis', 'darts']),
    fixture: z.string(),
    competition: z.string().optional(),
    market: z.string(),
    selection: z.string(),
    odds: z.string(),
    date: z.coerce.date(),
    result: z.enum(['pending', 'win', 'loss', 'void']).default('pending'),
  }),
});

export const collections = { articles, tips };
