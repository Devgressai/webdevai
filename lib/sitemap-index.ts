/**
 * Sitemap index utilities for split sitemap architecture.
 * 
 * This module provides validation and utilities for the sitemap index
 * that points to child sitemaps (core, services, blog, locations).
 * 
 * VALIDATION RULES:
 * - No URL should appear in multiple child sitemaps
 * - All URLs from the original single sitemap must be present
 * - Each child sitemap must have valid <urlset> structure
 * - Index must have valid <sitemapindex> structure
 */

import type { MetadataRoute } from 'next'
import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  SitemapEntry,
  SitemapCategory,
} from './sitemap-entries'
import { assertNoDuplicateLocs } from './sitemap-dedupe'

export interface SitemapValidationResult {
  valid: boolean
  totalUrls: number
  urlsByCategory: Record<SitemapCategory, number>
  duplicates: string[]
  errors: string[]
}

/**
 * Validate that no URLs are duplicated across child sitemaps.
 * Returns detailed validation results.
 */
export async function validateSitemapSplit(): Promise<SitemapValidationResult> {
  const errors: string[] = []
  const duplicates: string[] = []
  const allUrls = new Set<string>()
  
  // Gather entries from each category
  const coreEntries = generateCoreEntries()
  const servicesEntries = generateServicesEntries()
  const blogEntries = await generateBlogEntries()
  const locationsEntries = generateLocationsEntries()
  
  const categorizedEntries: Record<SitemapCategory, SitemapEntry[]> = {
    core: coreEntries,
    services: servicesEntries,
    blog: blogEntries,
    locations: locationsEntries,
  }
  
  const urlsByCategory: Record<SitemapCategory, number> = {
    core: coreEntries.length,
    services: servicesEntries.length,
    blog: blogEntries.length,
    locations: locationsEntries.length,
  }
  
  // Check for duplicates across categories
  const urlToCategories = new Map<string, SitemapCategory[]>()
  
  for (const [category, entries] of Object.entries(categorizedEntries)) {
    for (const entry of entries) {
      const url = entry.url
      
      if (!urlToCategories.has(url)) {
        urlToCategories.set(url, [])
      }
      urlToCategories.get(url)!.push(category as SitemapCategory)
      
      allUrls.add(url)
    }
  }
  
  // Find URLs that appear in multiple categories
  for (const [url, categories] of urlToCategories) {
    if (categories.length > 1) {
      duplicates.push(`${url} appears in: ${categories.join(', ')}`)
    }
  }
  
  if (duplicates.length > 0) {
    errors.push(`Found ${duplicates.length} URLs duplicated across sitemaps`)
  }
  
  // Validate each category has no internal duplicates
  for (const [category, entries] of Object.entries(categorizedEntries)) {
    try {
      assertNoDuplicateLocs(entries)
    } catch (e) {
      errors.push(`Internal duplicate in ${category}: ${(e as Error).message}`)
    }
  }
  
  return {
    valid: errors.length === 0,
    totalUrls: allUrls.size,
    urlsByCategory,
    duplicates,
    errors,
  }
}

/**
 * Get a summary of all URLs across all sitemaps.
 * Useful for debugging and verification.
 */
export async function getSitemapSummary(): Promise<{
  total: number
  byCategory: Record<SitemapCategory, number>
  sampleUrls: Record<SitemapCategory, string[]>
}> {
  const coreEntries = generateCoreEntries()
  const servicesEntries = generateServicesEntries()
  const blogEntries = await generateBlogEntries()
  const locationsEntries = generateLocationsEntries()
  
  const getSample = (entries: SitemapEntry[], count: number = 3): string[] =>
    entries.slice(0, count).map(e => e.url)
  
  return {
    total: coreEntries.length + servicesEntries.length + blogEntries.length + locationsEntries.length,
    byCategory: {
      core: coreEntries.length,
      services: servicesEntries.length,
      blog: blogEntries.length,
      locations: locationsEntries.length,
    },
    sampleUrls: {
      core: getSample(coreEntries),
      services: getSample(servicesEntries),
      blog: getSample(blogEntries),
      locations: getSample(locationsEntries),
    },
  }
}

/**
 * Assert that the sitemap split is valid.
 * Throws an error if validation fails.
 */
export async function assertValidSitemapSplit(): Promise<void> {
  const result = await validateSitemapSplit()
  
  if (!result.valid) {
    const errorMessage = [
      '[sitemap] Sitemap split validation failed:',
      ...result.errors,
      '',
      'Duplicates found:',
      ...result.duplicates.slice(0, 10), // Show first 10 duplicates
      result.duplicates.length > 10 ? `... and ${result.duplicates.length - 10} more` : '',
    ].join('\n')
    
    throw new Error(errorMessage)
  }
}

/**
 * Log sitemap statistics to console (for build-time debugging).
 */
export async function logSitemapStats(): Promise<void> {
  const summary = await getSitemapSummary()
  
  console.log('[sitemap] Split sitemap statistics:')
  console.log(`  Total URLs: ${summary.total}`)
  console.log(`  Core: ${summary.byCategory.core} URLs`)
  console.log(`  Services: ${summary.byCategory.services} URLs`)
  console.log(`  Blog: ${summary.byCategory.blog} URLs`)
  console.log(`  Locations: ${summary.byCategory.locations} URLs`)
}
