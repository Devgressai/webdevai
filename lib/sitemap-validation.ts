/**
 * Sitemap Validation Layer for Build/CI
 * 
 * This module provides comprehensive validation for sitemap generation,
 * designed to run as part of CI without significantly slowing the build.
 * 
 * VALIDATION CHECKS:
 * 1. No duplicate <loc> URLs within or across sitemaps
 * 2. All <loc> values are absolute HTTPS URLs
 * 3. All <lastmod> values are valid ISO 8601 UTC dates
 * 4. No sitemap exceeds 50,000 URLs (protocol limit)
 * 5. Sitemap index references all child sitemaps
 * 6. Warning if >30% of URLs share identical lastmod (optional)
 * 
 * PERFORMANCE:
 * - All checks run in O(n) time where n = total URLs
 * - No network requests or file I/O during validation
 * - Typically completes in <100ms for ~1000 URLs
 * 
 * USAGE:
 *   npx tsx lib/sitemap-validation.ts
 *   # or in CI: npm run validate:sitemap
 */

import type { MetadataRoute } from 'next'

// ============================================================================
// TYPES
// ============================================================================

export interface SitemapEntry {
  url: string
  lastModified?: Date | string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface ValidationError {
  code: string
  message: string
  url?: string
  sitemapId?: number
  severity: 'error' | 'warning'
}

export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
  warnings: ValidationError[]
  stats: {
    totalUrls: number
    urlsBySitemap: Record<number, number>
    duplicatesFound: number
    invalidUrls: number
    invalidLastmods: number
  }
}

// ============================================================================
// CONSTANTS
// ============================================================================

/** 
 * Maximum URLs allowed per sitemap (protocol limit is 50,000).
 * We use 50,000 for validation (hard limit), but sitemap-entries.ts 
 * uses 45,000 for chunking (with 5k buffer for safety).
 */
export const MAX_URLS_PER_SITEMAP = 50000

/**
 * Maximum uncompressed sitemap file size (protocol limit is 50MB).
 * We estimate ~500 bytes per URL entry on average (URL + tags + whitespace).
 */
export const MAX_SITEMAP_SIZE_BYTES = 50 * 1024 * 1024 // 50MB
export const ESTIMATED_BYTES_PER_URL = 500

/** HTTPS URL pattern for absolute URLs (standard web URLs) */
const HTTPS_URL_PATTERN = /^https:\/\/[a-zA-Z0-9][a-zA-Z0-9-]*(\.[a-zA-Z0-9][a-zA-Z0-9-]*)+/

/** ISO 8601 date patterns */
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|[+-]\d{2}:\d{2})?)?$/

/** Threshold for lastmod distribution warning (percentage) */
const LASTMOD_DISTRIBUTION_THRESHOLD = 30

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validates that a URL is an absolute HTTPS URL.
 */
export function isValidAbsoluteHttpsUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false
  return HTTPS_URL_PATTERN.test(url)
}

/**
 * Validates that a lastmod value is a valid ISO 8601 date.
 */
export function isValidIso8601Date(value: Date | string | undefined): boolean {
  if (value === undefined) return true // lastmod is optional
  
  if (value instanceof Date) {
    return !isNaN(value.getTime())
  }
  
  if (typeof value === 'string') {
    // Check format
    if (!ISO_DATE_PATTERN.test(value)) return false
    // Check parseable
    const parsed = new Date(value)
    return !isNaN(parsed.getTime())
  }
  
  return false
}

/**
 * Validates a single sitemap entry.
 */
export function validateEntry(
  entry: SitemapEntry,
  sitemapId: number
): ValidationError[] {
  const errors: ValidationError[] = []
  
  // Check URL is absolute HTTPS
  if (!isValidAbsoluteHttpsUrl(entry.url)) {
    errors.push({
      code: 'INVALID_URL',
      message: `URL is not a valid absolute HTTPS URL: ${entry.url}`,
      url: entry.url,
      sitemapId,
      severity: 'error',
    })
  }
  
  // Check lastmod is valid ISO 8601
  if (entry.lastModified !== undefined && !isValidIso8601Date(entry.lastModified)) {
    errors.push({
      code: 'INVALID_LASTMOD',
      message: `Invalid lastmod format: ${entry.lastModified}`,
      url: entry.url,
      sitemapId,
      severity: 'error',
    })
  }
  
  // Check priority is in valid range (0.0 to 1.0)
  if (entry.priority !== undefined) {
    if (typeof entry.priority !== 'number' || entry.priority < 0 || entry.priority > 1) {
      errors.push({
        code: 'INVALID_PRIORITY',
        message: `Priority must be between 0.0 and 1.0, got: ${entry.priority}`,
        url: entry.url,
        sitemapId,
        severity: 'error',
      })
    }
  }
  
  // Check for valid changeFrequency if present
  if (entry.changeFrequency !== undefined) {
    const validFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
    if (!validFrequencies.includes(entry.changeFrequency)) {
      errors.push({
        code: 'INVALID_CHANGEFREQ',
        message: `Invalid changeFrequency: ${entry.changeFrequency}`,
        url: entry.url,
        sitemapId,
        severity: 'error',
      })
    }
  }
  
  return errors
}

/**
 * Validates that no duplicate URLs exist across all sitemaps.
 */
export function validateNoDuplicates(
  sitemapEntries: Map<number, SitemapEntry[]>
): ValidationError[] {
  const errors: ValidationError[] = []
  const seenUrls = new Map<string, { sitemapId: number; index: number }>()
  
  for (const [sitemapId, entries] of sitemapEntries) {
    for (let i = 0; i < entries.length; i++) {
      const url = entries[i].url
      const existing = seenUrls.get(url)
      
      if (existing) {
        errors.push({
          code: 'DUPLICATE_URL',
          message: `Duplicate URL found: ${url} (first in sitemap ${existing.sitemapId}, also in sitemap ${sitemapId})`,
          url,
          sitemapId,
          severity: 'error',
        })
      } else {
        seenUrls.set(url, { sitemapId, index: i })
      }
    }
  }
  
  return errors
}

/**
 * Validates that no sitemap exceeds the URL limit or estimated size limit.
 */
export function validateUrlCounts(
  sitemapEntries: Map<number, SitemapEntry[]>
): ValidationError[] {
  const errors: ValidationError[] = []
  
  for (const [sitemapId, entries] of sitemapEntries) {
    // Check URL count limit
    if (entries.length > MAX_URLS_PER_SITEMAP) {
      errors.push({
        code: 'EXCEEDED_URL_LIMIT',
        message: `Sitemap ${sitemapId} has ${entries.length} URLs, exceeding limit of ${MAX_URLS_PER_SITEMAP}`,
        sitemapId,
        severity: 'error',
      })
    }
    
    // Check estimated file size (50MB limit)
    const estimatedSize = entries.length * ESTIMATED_BYTES_PER_URL
    if (estimatedSize > MAX_SITEMAP_SIZE_BYTES) {
      const sizeMB = (estimatedSize / (1024 * 1024)).toFixed(1)
      errors.push({
        code: 'EXCEEDED_SIZE_LIMIT',
        message: `Sitemap ${sitemapId} estimated size is ${sizeMB}MB, exceeding 50MB limit`,
        sitemapId,
        severity: 'error',
      })
    }
  }
  
  return errors
}

/**
 * Validates trailing slash consistency across all URLs.
 * Warns if the sitemap has mixed trailing slash patterns (SEO best practice).
 */
export function validateTrailingSlashConsistency(
  entries: SitemapEntry[]
): ValidationError[] {
  const warnings: ValidationError[] = []
  
  if (entries.length < 2) return warnings
  
  let withTrailingSlash = 0
  let withoutTrailingSlash = 0
  
  for (const entry of entries) {
    const url = entry.url
    // Ignore homepage (can legitimately have or not have trailing slash)
    if (url.match(/^https:\/\/[^/]+\/?$/)) continue
    
    // Check path portion
    const path = url.replace(/^https:\/\/[^/]+/, '')
    if (path.endsWith('/')) {
      withTrailingSlash++
    } else if (path.length > 0) {
      withoutTrailingSlash++
    }
  }
  
  const total = withTrailingSlash + withoutTrailingSlash
  if (total > 0 && withTrailingSlash > 0 && withoutTrailingSlash > 0) {
    const percentWith = ((withTrailingSlash / total) * 100).toFixed(1)
    const percentWithout = ((withoutTrailingSlash / total) * 100).toFixed(1)
    warnings.push({
      code: 'INCONSISTENT_TRAILING_SLASH',
      message: `Mixed trailing slash patterns: ${withTrailingSlash} URLs (${percentWith}%) with trailing slash, ` +
        `${withoutTrailingSlash} URLs (${percentWithout}%) without. Consider normalizing for SEO consistency.`,
      severity: 'warning',
    })
  }
  
  return warnings
}

/**
 * Validates lastmod distribution and warns if too many URLs share the same date.
 */
export function validateLastmodDistribution(
  entries: SitemapEntry[]
): ValidationError[] {
  const warnings: ValidationError[] = []
  
  if (entries.length === 0) return warnings
  
  // Count dates (only count valid dates)
  const dateCounts = new Map<string, number>()
  let entriesWithValidDates = 0
  
  for (const entry of entries) {
    if (!entry.lastModified) continue
    
    try {
      const date = entry.lastModified instanceof Date
        ? entry.lastModified
        : new Date(entry.lastModified)
      
      // Skip invalid dates
      if (isNaN(date.getTime())) continue
      
      const dateStr = date.toISOString().split('T')[0]
      dateCounts.set(dateStr, (dateCounts.get(dateStr) || 0) + 1)
      entriesWithValidDates++
    } catch {
      // Skip entries with unparseable dates
      continue
    }
  }
  
  if (entriesWithValidDates === 0) return warnings
  
  // Find most common date
  let maxCount = 0
  let maxDate = ''
  for (const [date, count] of dateCounts) {
    if (count > maxCount) {
      maxCount = count
      maxDate = date
    }
  }
  
  const percentage = (maxCount / entriesWithValidDates) * 100
  if (percentage > LASTMOD_DISTRIBUTION_THRESHOLD) {
    warnings.push({
      code: 'LASTMOD_CONCENTRATION',
      message: `${percentage.toFixed(1)}% of URLs (${maxCount}/${entriesWithValidDates}) share lastmod=${maxDate}. ` +
        `This exceeds the ${LASTMOD_DISTRIBUTION_THRESHOLD}% threshold and may indicate a timestamp issue.`,
      severity: 'warning',
    })
  }
  
  return warnings
}

/**
 * Validates sitemap index references match actual child sitemaps.
 */
export function validateSitemapIndex(
  expectedIds: number[],
  actualIds: number[]
): ValidationError[] {
  const errors: ValidationError[] = []
  
  const expectedSet = new Set(expectedIds)
  const actualSet = new Set(actualIds)
  
  // Check for missing sitemaps
  for (const id of expectedSet) {
    if (!actualSet.has(id)) {
      errors.push({
        code: 'MISSING_CHILD_SITEMAP',
        message: `Sitemap index references sitemap ${id} but it was not generated`,
        sitemapId: id,
        severity: 'error',
      })
    }
  }
  
  // Check for extra sitemaps not in index
  for (const id of actualSet) {
    if (!expectedSet.has(id)) {
      errors.push({
        code: 'UNREFERENCED_SITEMAP',
        message: `Sitemap ${id} was generated but not referenced in sitemap index`,
        sitemapId: id,
        severity: 'error',
      })
    }
  }
  
  return errors
}

// ============================================================================
// MAIN VALIDATION FUNCTION
// ============================================================================

/**
 * Comprehensive sitemap validation.
 * 
 * @param sitemapEntries - Map of sitemap ID to array of entries
 * @param expectedSitemapIds - Array of expected sitemap IDs (from generateSitemaps)
 * @returns Validation result with errors, warnings, and stats
 */
export function validateSitemaps(
  sitemapEntries: Map<number, SitemapEntry[]>,
  expectedSitemapIds: number[]
): ValidationResult {
  const errors: ValidationError[] = []
  const warnings: ValidationError[] = []
  let totalUrls = 0
  let duplicatesFound = 0
  let invalidUrls = 0
  let invalidLastmods = 0
  const urlsBySitemap: Record<number, number> = {}
  
  // Collect all entries for cross-sitemap validation
  const allEntries: SitemapEntry[] = []
  
  // Validate each sitemap
  for (const [sitemapId, entries] of sitemapEntries) {
    urlsBySitemap[sitemapId] = entries.length
    totalUrls += entries.length
    
    for (const entry of entries) {
      allEntries.push(entry)
      
      // Validate individual entry
      const entryErrors = validateEntry(entry, sitemapId)
      for (const error of entryErrors) {
        if (error.code === 'INVALID_URL') invalidUrls++
        if (error.code === 'INVALID_LASTMOD') invalidLastmods++
        
        if (error.severity === 'error') {
          errors.push(error)
        } else {
          warnings.push(error)
        }
      }
    }
  }
  
  // Validate no duplicates across all sitemaps
  const duplicateErrors = validateNoDuplicates(sitemapEntries)
  duplicatesFound = duplicateErrors.length
  errors.push(...duplicateErrors)
  
  // Validate URL counts
  const countErrors = validateUrlCounts(sitemapEntries)
  errors.push(...countErrors)
  
  // Validate sitemap index
  const actualIds = Array.from(sitemapEntries.keys())
  const indexErrors = validateSitemapIndex(expectedSitemapIds, actualIds)
  errors.push(...indexErrors)
  
  // Validate lastmod distribution (warning only)
  const lastmodWarnings = validateLastmodDistribution(allEntries)
  warnings.push(...lastmodWarnings)
  
  // Validate trailing slash consistency (warning only)
  const trailingSlashWarnings = validateTrailingSlashConsistency(allEntries)
  warnings.push(...trailingSlashWarnings)
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalUrls,
      urlsBySitemap,
      duplicatesFound,
      invalidUrls,
      invalidLastmods,
    },
  }
}

// ============================================================================
// CLI RUNNER (for CI integration)
// ============================================================================

/**
 * Run validation and output results.
 * Exit code 0 = pass, 1 = fail
 */
export async function runValidation(): Promise<void> {
  console.log('🔍 Sitemap Validation\n')
  console.log('Loading sitemap entries...')
  
  // Dynamic import to avoid circular dependencies
  const { 
    generateCoreEntries, 
    generateServicesEntries, 
    generateBlogEntries, 
    generateLocationsEntries,
    chunkEntries,
    MAX_URLS_PER_SITEMAP: CHUNK_SIZE,
  } = await import('./sitemap-entries')
  
  const startTime = Date.now()
  
  // Generate all entries
  const coreEntries = generateCoreEntries()
  const servicesEntries = generateServicesEntries()
  const blogEntries = await generateBlogEntries()
  const locationsEntries = generateLocationsEntries()
  
  // Build sitemap map (mirroring generateSitemaps logic)
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, coreEntries)
  sitemapEntries.set(1, servicesEntries)
  sitemapEntries.set(2, blogEntries)
  
  // Handle location chunking
  const locationChunks = chunkEntries(locationsEntries, CHUNK_SIZE)
  for (let i = 0; i < locationChunks.length; i++) {
    sitemapEntries.set(3 + i, locationChunks[i])
  }
  
  // Expected sitemap IDs
  const expectedIds = [0, 1, 2, ...locationChunks.map((_, i) => 3 + i)]
  
  // Run validation
  const result = validateSitemaps(sitemapEntries, expectedIds)
  
  const elapsed = Date.now() - startTime
  
  // Output results
  console.log('\n📊 Statistics:')
  console.log(`   Total URLs: ${result.stats.totalUrls}`)
  console.log(`   Sitemaps: ${Object.keys(result.stats.urlsBySitemap).length}`)
  for (const [id, count] of Object.entries(result.stats.urlsBySitemap)) {
    const name = id === '0' ? 'core' : id === '1' ? 'services' : id === '2' ? 'blog' : 'locations'
    console.log(`     - sitemap/${id} (${name}): ${count} URLs`)
  }
  console.log(`   Validation time: ${elapsed}ms`)
  
  // Output warnings
  if (result.warnings.length > 0) {
    console.log('\n⚠️  Warnings:')
    for (const warning of result.warnings) {
      console.log(`   [${warning.code}] ${warning.message}`)
    }
  }
  
  // Output errors
  if (result.errors.length > 0) {
    console.log('\n❌ Errors:')
    for (const error of result.errors.slice(0, 20)) { // Show first 20
      console.log(`   [${error.code}] ${error.message}`)
    }
    if (result.errors.length > 20) {
      console.log(`   ... and ${result.errors.length - 20} more errors`)
    }
  }
  
  // Final result
  console.log('')
  if (result.valid) {
    console.log('✅ Sitemap validation PASSED')
    process.exit(0)
  } else {
    console.log(`❌ Sitemap validation FAILED (${result.errors.length} errors)`)
    process.exit(1)
  }
}

// Run if executed directly
if (require.main === module || process.argv[1]?.includes('sitemap-validation')) {
  runValidation().catch((err) => {
    console.error('Validation error:', err)
    process.exit(1)
  })
}
