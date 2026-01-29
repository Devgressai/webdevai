/**
 * Sitemap URL deduplication for /sitemap.xml generation.
 *
 * DEDUPE RULE: First occurrence wins. We deduplicate by the canonical <loc> string.
 * When the same URL would appear multiple times (e.g. from core + city or overlapping
 * lists), we keep only the first entry and preserve its lastmod, changefreq, and priority.
 * Order is stable: the sequence of sections (core → service → blog → city → city-service)
 * is preserved; within that, first occurrence of each loc is kept.
 */

import type { MetadataRoute } from 'next'

export type SitemapEntry = MetadataRoute.Sitemap[number]

/**
 * Deduplicates sitemap entries by canonical URL (loc). First occurrence wins;
 * later duplicates are dropped. Preserves existing lastmod, changefreq, priority
 * for the kept entry. Order is stable.
 */
export function deduplicateSitemapEntries(
  entries: MetadataRoute.Sitemap
): MetadataRoute.Sitemap {
  const seen = new Set<string>()
  const out: MetadataRoute.Sitemap = []
  for (const entry of entries) {
    const loc = entry.url
    if (seen.has(loc)) continue
    seen.add(loc)
    out.push(entry)
  }
  return out
}

/**
 * Asserts that no two entries share the same <loc>. Use after deduplication
 * to fail fast if the sitemap would emit duplicate URLs (e.g. dedupe bug).
 */
export function assertNoDuplicateLocs(entries: MetadataRoute.Sitemap): void {
  const seen = new Set<string>()
  for (const entry of entries) {
    const loc = entry.url
    if (seen.has(loc)) {
      throw new Error(
        `[sitemap] Duplicate <loc> in sitemap: ${loc}. Deduplication must ensure each URL is emitted once.`
      )
    }
    seen.add(loc)
  }
}
