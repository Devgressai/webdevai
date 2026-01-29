/**
 * Sitemap Index Route - WebFX Style
 * 
 * Returns a sitemap index XML that points to all child sitemaps.
 * Similar to WebFX's structure: https://webfx.com/sitemap.xml
 * 
 * Structure:
 * - /sitemap.xml (this route) → sitemap index
 * - /core-sitemap.xml → core pages (homepage, about, contact, etc.)
 * - /services-sitemap.xml → service pages
 * - /blog-sitemap.xml → blog posts
 * - /locations-sitemap.xml → location pages (chunked if needed)
 */

import { NextResponse } from 'next/server'
import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  getNewestLastMod,
  chunkEntries,
  MAX_URLS_PER_SITEMAP,
  BASE_URL,
} from '../../../lib/sitemap-entries'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

async function generateSitemapIndex(): Promise<string> {
  // Get all entries to determine chunking
  const coreEntries = generateCoreEntries()
  const servicesEntries = generateServicesEntries()
  const blogEntries = await generateBlogEntries()
  const locationEntries = generateLocationsEntries()
  
  // Check if locations need chunking
  const locationChunks = chunkEntries(locationEntries, MAX_URLS_PER_SITEMAP)
  
  const sitemaps: Array<{ loc: string; lastmod: Date }> = []
  
  // Core sitemap
  if (coreEntries.length > 0) {
    sitemaps.push({
      loc: `${BASE_URL}/core-sitemap.xml`,
      lastmod: getNewestLastMod(coreEntries),
    })
  }
  
  // Services sitemap
  if (servicesEntries.length > 0) {
    sitemaps.push({
      loc: `${BASE_URL}/services-sitemap.xml`,
      lastmod: getNewestLastMod(servicesEntries),
    })
  }
  
  // Blog sitemap
  if (blogEntries.length > 0) {
    sitemaps.push({
      loc: `${BASE_URL}/blog-sitemap.xml`,
      lastmod: getNewestLastMod(blogEntries),
    })
  }
  
  // Locations sitemap(s) - chunked if needed
  if (locationChunks.length === 1) {
    // Single locations sitemap
    sitemaps.push({
      loc: `${BASE_URL}/locations-sitemap.xml`,
      lastmod: getNewestLastMod(locationEntries),
    })
  } else {
    // Multiple location sitemaps (chunked)
    // locations-sitemap.xml (chunk 0), locations-sitemap2.xml (chunk 1), etc.
    for (let i = 0; i < locationChunks.length; i++) {
      const chunkNumber = i === 0 ? '' : (i + 1).toString()
      sitemaps.push({
        loc: `${BASE_URL}/locations-sitemap${chunkNumber}.xml`,
        lastmod: getNewestLastMod(locationChunks[i]),
      })
    }
  }
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `	<sitemap>
		<loc>${sitemap.loc}</loc>
		<lastmod>${sitemap.lastmod.toISOString()}</lastmod>
	</sitemap>`
  )
  .join('\n')}
</sitemapindex>`

  return xml
}

export async function GET() {
  try {
    const xml = await generateSitemapIndex()
    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap index:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
