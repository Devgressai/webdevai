/**
 * Sitemap Index API Route - handles /sitemap.xml
 * 
 * Returns the sitemap index pointing to all child sitemaps.
 */

import { NextRequest, NextResponse } from 'next/server'
import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  getNewestLastMod,
  chunkEntries,
  MAX_URLS_PER_SITEMAP,
} from '../../../lib/sitemap-entries'

export async function GET(request: NextRequest) {
  try {
    const locationEntries = generateLocationsEntries()
    const locationChunks = chunkEntries(locationEntries, MAX_URLS_PER_SITEMAP)

    const sitemapIndex = []
    // Use www.webvello.com to match actual domain and ensure all pages are discoverable
    const baseUrl = 'https://www.webvello.com'

    // Core sitemap
    sitemapIndex.push({
      loc: `${baseUrl}/sitemap/0.xml`,
      lastmod: getNewestLastMod(generateCoreEntries()),
    })

    // Services sitemap
    sitemapIndex.push({
      loc: `${baseUrl}/sitemap/1.xml`,
      lastmod: getNewestLastMod(generateServicesEntries()),
    })

    // Blog sitemap
    const blogEntries = await generateBlogEntries()
    sitemapIndex.push({
      loc: `${baseUrl}/sitemap/2.xml`,
      lastmod: getNewestLastMod(blogEntries),
    })

    // Location chunk sitemaps
    for (let i = 0; i < locationChunks.length; i++) {
      sitemapIndex.push({
        loc: `${baseUrl}/sitemap/${3 + i}.xml`,
        lastmod: getNewestLastMod(locationChunks[i]),
      })
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapIndex.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${new Date(sitemap.lastmod).toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        'CDN-Cache-Control': 'max-age=300',
      },
    })
  } catch (error) {
    console.error('[sitemap.xml] Error generating sitemap index:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
