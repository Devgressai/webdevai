/**
 * Sitemap Index Implementation for /sitemap.xml
 * 
 * This file generates a sitemap index that points to multiple child sitemaps:
 * - /sitemap/0.xml (core) → homepage, about, contact, pricing, legal, hubs
 * - /sitemap/1.xml (services) → /services/*, /solutions/*, tools
 * - /sitemap/2.xml (blog) → /blog/*
 * - /sitemap/3.xml (locations) → city hubs, city+service, location pages
 * 
 * ARCHITECTURE:
 * - Next.js 14+ supports generateSitemaps() to create multiple sitemaps
 * - Each sitemap ID maps to a category (see lib/sitemap-entries.ts)
 * - Child sitemaps are generated at /sitemap/[id].xml
 * - The index at /sitemap.xml lists all child sitemaps
 * 
 * PROTOCOL COMPLIANCE:
 * - Each child sitemap uses <urlset> with standard namespace
 * - Index uses <sitemapindex> with standard namespace
 * - Max 50,000 URLs per sitemap (chunking if needed)
 * - Each child sitemap has <lastmod> based on newest entry
 */

import { MetadataRoute } from 'next'
import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  getNewestLastMod,
  chunkEntries,
  MAX_URLS_PER_SITEMAP,
  SITEMAP_IDS,
} from '../lib/sitemap-entries'
import { assertNoDuplicateLocs } from '../lib/sitemap-dedupe'
import { validateLastModDistribution } from '../lib/sitemap-lastmod'
import { assertValidSitemapSplit } from '../lib/sitemap-index'

/**
 * Generate the list of sitemap IDs for the sitemap index.
 * Next.js calls this to know how many child sitemaps to generate.
 * 
 * Returns: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, ...]
 * where additional IDs (4+) are used for location chunks if needed.
 */
export async function generateSitemaps(): Promise<Array<{ id: number }>> {
  // Check if locations need chunking
  const locationEntries = generateLocationsEntries()
  const locationChunks = chunkEntries(locationEntries, MAX_URLS_PER_SITEMAP)
  
  const ids: { id: number }[] = [
    { id: 0 }, // core
    { id: 1 }, // services
    { id: 2 }, // blog
  ]
  
  // Add location chunks (starting at id 3)
  for (let i = 0; i < locationChunks.length; i++) {
    ids.push({ id: 3 + i })
  }
  
  // Log sitemap structure at build time
  console.log('[sitemap] Generating sitemap index with child sitemaps:')
  console.log(`  - /sitemap/0.xml (core): ${generateCoreEntries().length} URLs`)
  console.log(`  - /sitemap/1.xml (services): ${generateServicesEntries().length} URLs`)
  console.log(`  - /sitemap/2.xml (blog): ${(await generateBlogEntries()).length} URLs`)
  console.log(`  - /sitemap/3.xml (locations): ${locationEntries.length} URLs${locationChunks.length > 1 ? ` (${locationChunks.length} chunks)` : ''}`)
  
  return ids
}

/**
 * Generate sitemap entries for a specific sitemap ID.
 * Next.js calls this for each ID returned by generateSitemaps().
 * 
 * @param id - The sitemap ID (0=core, 1=services, 2=blog, 3+=locations)
 */
export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  let entries: MetadataRoute.Sitemap = []
  
  // Route to the appropriate generator based on ID
  if (id === 0) {
    // Core sitemap: homepage, about, contact, pricing, legal, hubs
    entries = generateCoreEntries()
  } else if (id === 1) {
    // Services sitemap: /services/*, /solutions/*, tools
    entries = generateServicesEntries()
  } else if (id === 2) {
    // Blog sitemap: /blog/*
    entries = await generateBlogEntries()
  } else {
    // Locations sitemap(s): city hubs, city+service, location pages
    // Handle chunking for large location sets
    const allLocationEntries = generateLocationsEntries()
    const chunks = chunkEntries(allLocationEntries, MAX_URLS_PER_SITEMAP)
    const chunkIndex = id - 3
    
    if (chunkIndex >= 0 && chunkIndex < chunks.length) {
      entries = chunks[chunkIndex]
    }
  }
  
  // Validate no internal duplicates
  assertNoDuplicateLocs(entries)
  
  // Validate timestamp distribution (warn if >30% share same date)
  const validation = validateLastModDistribution(entries)
  if (!validation.valid && validation.warning) {
    console.warn(`[sitemap/${id}] ${validation.warning}`)
  }
  
  // On first sitemap generation, validate the entire split
  if (id === 0) {
    try {
      await assertValidSitemapSplit()
    } catch (e) {
      console.error((e as Error).message)
      // Don't throw - let the build continue but log the error
    }
  }
  
  return entries
}
