/**
 * Unit tests for sitemap validation layer.
 * 
 * Tests all validation rules:
 * - No duplicate URLs
 * - All URLs are absolute HTTPS
 * - All lastmod values are valid ISO 8601
 * - No sitemap exceeds 50,000 URLs
 * - Sitemap index references all children
 * - Lastmod distribution warning
 * 
 * Run with: npx tsx lib/__tests__/sitemap-validation.test.ts
 */

import {
  isValidAbsoluteHttpsUrl,
  isValidIso8601Date,
  validateEntry,
  validateNoDuplicates,
  validateUrlCounts,
  validateLastmodDistribution,
  validateSitemapIndex,
  validateSitemaps,
  MAX_URLS_PER_SITEMAP,
  type SitemapEntry,
} from '../sitemap-validation'

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}

function assertEqual<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`)
  }
}

// ============================================================================
// URL Validation Tests
// ============================================================================

// Test: Valid HTTPS URLs pass
{
  const validUrls = [
    'https://www.example.com',
    'https://example.com',
    'https://www.webvello.com/services/seo',
    'https://sub.domain.example.com/path/to/page',
    'https://example.com/path?query=value',
    'https://example.com/path#anchor',
  ]
  
  for (const url of validUrls) {
    assert(isValidAbsoluteHttpsUrl(url), `Should accept valid URL: ${url}`)
  }
  console.log('✓ Valid HTTPS URLs pass validation')
}

// Test: Invalid URLs fail
{
  const invalidUrls = [
    'http://example.com',           // HTTP not HTTPS
    'example.com',                  // Missing protocol
    '/relative/path',               // Relative path
    '//example.com',                // Protocol-relative
    'ftp://example.com',            // Wrong protocol
    '',                             // Empty
    'https://',                     // Missing domain
    'https://localhost',            // Localhost (single label)
  ]
  
  for (const url of invalidUrls) {
    assert(!isValidAbsoluteHttpsUrl(url), `Should reject invalid URL: ${url}`)
  }
  console.log('✓ Invalid URLs fail validation')
}

// ============================================================================
// ISO 8601 Date Validation Tests
// ============================================================================

// Test: Valid ISO 8601 dates pass
{
  const validDates = [
    '2025-01-15',
    '2025-01-15T10:30:00Z',
    '2025-01-15T10:30:00.000Z',
    '2025-01-15T10:30:00+00:00',
    '2025-01-15T10:30:00-05:00',
    new Date('2025-01-15'),
    new Date(),
  ]
  
  for (const date of validDates) {
    assert(isValidIso8601Date(date), `Should accept valid date: ${date}`)
  }
  console.log('✓ Valid ISO 8601 dates pass validation')
}

// Test: Invalid dates fail
{
  const invalidDates = [
    'not-a-date',
    '2025/01/15',                   // Wrong separator
    '15-01-2025',                   // Wrong order
    'January 15, 2025',             // Human readable
    new Date('invalid'),            // Invalid Date object
  ]
  
  for (const date of invalidDates) {
    assert(!isValidIso8601Date(date), `Should reject invalid date: ${date}`)
  }
  console.log('✓ Invalid dates fail validation')
}

// Test: Undefined lastmod is valid (optional field)
{
  assert(isValidIso8601Date(undefined), 'undefined should be valid (optional)')
  console.log('✓ Undefined lastmod is valid (optional)')
}

// ============================================================================
// Entry Validation Tests
// ============================================================================

// Test: Valid entry passes
{
  const entry: SitemapEntry = {
    url: 'https://www.webvello.com/services/seo',
    lastModified: '2025-01-15',
    changeFrequency: 'monthly',
    priority: 0.8,
  }
  
  const errors = validateEntry(entry, 0)
  assertEqual(errors.length, 0, 'Valid entry should have no errors')
  console.log('✓ Valid entry passes validation')
}

// Test: Entry with invalid URL fails
{
  const entry: SitemapEntry = {
    url: 'http://example.com', // HTTP not HTTPS
    lastModified: '2025-01-15',
  }
  
  const errors = validateEntry(entry, 0)
  assert(errors.length > 0, 'Invalid URL should produce error')
  assert(errors[0].code === 'INVALID_URL', 'Error code should be INVALID_URL')
  console.log('✓ Entry with invalid URL fails validation')
}

// Test: Entry with invalid lastmod fails
{
  const entry: SitemapEntry = {
    url: 'https://www.example.com',
    lastModified: 'not-a-date',
  }
  
  const errors = validateEntry(entry, 0)
  assert(errors.length > 0, 'Invalid lastmod should produce error')
  assert(errors[0].code === 'INVALID_LASTMOD', 'Error code should be INVALID_LASTMOD')
  console.log('✓ Entry with invalid lastmod fails validation')
}

// Test: Entry with invalid priority fails
{
  const entry: SitemapEntry = {
    url: 'https://www.example.com',
    priority: 1.5, // Invalid - must be 0.0-1.0
  }
  
  const errors = validateEntry(entry, 0)
  assert(errors.length > 0, 'Invalid priority should produce error')
  assert(errors[0].code === 'INVALID_PRIORITY', 'Error code should be INVALID_PRIORITY')
  console.log('✓ Entry with invalid priority fails validation')
}

// ============================================================================
// Duplicate Detection Tests
// ============================================================================

// Test: No duplicates passes
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, [
    { url: 'https://example.com/a' },
    { url: 'https://example.com/b' },
  ])
  sitemapEntries.set(1, [
    { url: 'https://example.com/c' },
    { url: 'https://example.com/d' },
  ])
  
  const errors = validateNoDuplicates(sitemapEntries)
  assertEqual(errors.length, 0, 'No duplicates should pass')
  console.log('✓ No duplicates passes validation')
}

// Test: Duplicates within same sitemap detected
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, [
    { url: 'https://example.com/a' },
    { url: 'https://example.com/a' }, // Duplicate
  ])
  
  const errors = validateNoDuplicates(sitemapEntries)
  assert(errors.length > 0, 'Duplicate in same sitemap should fail')
  assert(errors[0].code === 'DUPLICATE_URL', 'Error code should be DUPLICATE_URL')
  console.log('✓ Duplicates within same sitemap detected')
}

// Test: Duplicates across sitemaps detected
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, [{ url: 'https://example.com/shared' }])
  sitemapEntries.set(1, [{ url: 'https://example.com/shared' }]) // Duplicate
  
  const errors = validateNoDuplicates(sitemapEntries)
  assert(errors.length > 0, 'Duplicate across sitemaps should fail')
  console.log('✓ Duplicates across sitemaps detected')
}

// ============================================================================
// URL Count Validation Tests
// ============================================================================

// Test: Under limit passes
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, Array(1000).fill({ url: 'https://example.com' }))
  
  const errors = validateUrlCounts(sitemapEntries)
  assertEqual(errors.length, 0, 'Under limit should pass')
  console.log('✓ URL count under limit passes')
}

// Test: Over limit fails
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  // Create array with more than MAX_URLS_PER_SITEMAP entries
  const overLimit = Array(MAX_URLS_PER_SITEMAP + 1).fill({ url: 'https://example.com' })
  sitemapEntries.set(0, overLimit)
  
  const errors = validateUrlCounts(sitemapEntries)
  assert(errors.length > 0, 'Over limit should fail')
  assert(errors[0].code === 'EXCEEDED_URL_LIMIT', 'Error code should be EXCEEDED_URL_LIMIT')
  console.log('✓ URL count over limit fails')
}

// ============================================================================
// Lastmod Distribution Tests
// ============================================================================

// Test: Varied dates pass
{
  const entries: SitemapEntry[] = [
    { url: 'https://example.com/a', lastModified: '2025-01-01' },
    { url: 'https://example.com/b', lastModified: '2025-01-02' },
    { url: 'https://example.com/c', lastModified: '2025-01-03' },
    { url: 'https://example.com/d', lastModified: '2025-01-04' },
    { url: 'https://example.com/e', lastModified: '2025-01-05' },
  ]
  
  const warnings = validateLastmodDistribution(entries)
  assertEqual(warnings.length, 0, 'Varied dates should not warn')
  console.log('✓ Varied lastmod distribution passes')
}

// Test: Concentrated dates warn
{
  const sameDate = '2025-01-15'
  const entries: SitemapEntry[] = [
    { url: 'https://example.com/a', lastModified: sameDate },
    { url: 'https://example.com/b', lastModified: sameDate },
    { url: 'https://example.com/c', lastModified: sameDate },
    { url: 'https://example.com/d', lastModified: sameDate },
    { url: 'https://example.com/e', lastModified: '2025-01-01' }, // 1 different
  ]
  
  const warnings = validateLastmodDistribution(entries)
  assert(warnings.length > 0, '80% same date should warn')
  assert(warnings[0].code === 'LASTMOD_CONCENTRATION', 'Warning code should be LASTMOD_CONCENTRATION')
  console.log('✓ Concentrated lastmod distribution warns')
}

// ============================================================================
// Sitemap Index Validation Tests
// ============================================================================

// Test: Matching IDs pass
{
  const errors = validateSitemapIndex([0, 1, 2, 3], [0, 1, 2, 3])
  assertEqual(errors.length, 0, 'Matching IDs should pass')
  console.log('✓ Matching sitemap IDs pass')
}

// Test: Missing child sitemap fails
{
  const errors = validateSitemapIndex([0, 1, 2, 3], [0, 1, 2]) // Missing 3
  assert(errors.length > 0, 'Missing child should fail')
  assert(errors[0].code === 'MISSING_CHILD_SITEMAP', 'Error code should be MISSING_CHILD_SITEMAP')
  console.log('✓ Missing child sitemap detected')
}

// Test: Unreferenced sitemap fails
{
  const errors = validateSitemapIndex([0, 1, 2], [0, 1, 2, 3]) // Extra 3
  assert(errors.length > 0, 'Unreferenced sitemap should fail')
  assert(errors[0].code === 'UNREFERENCED_SITEMAP', 'Error code should be UNREFERENCED_SITEMAP')
  console.log('✓ Unreferenced sitemap detected')
}

// ============================================================================
// Full Validation Tests
// ============================================================================

// Test: Complete valid sitemap passes
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, [
    { url: 'https://www.webvello.com', lastModified: '2025-01-15', priority: 1.0 },
    { url: 'https://www.webvello.com/about', lastModified: '2025-01-10', priority: 0.7 },
  ])
  sitemapEntries.set(1, [
    { url: 'https://www.webvello.com/services/seo', lastModified: '2025-01-12', priority: 0.8 },
  ])
  
  const result = validateSitemaps(sitemapEntries, [0, 1])
  
  assert(result.valid, 'Valid sitemap should pass')
  assertEqual(result.errors.length, 0, 'Valid sitemap should have no errors')
  assertEqual(result.stats.totalUrls, 3, 'Should count all URLs')
  console.log('✓ Complete valid sitemap passes')
}

// Test: Invalid sitemap fails with detailed stats
{
  const sitemapEntries = new Map<number, SitemapEntry[]>()
  sitemapEntries.set(0, [
    { url: 'http://example.com', lastModified: 'bad-date' }, // Both invalid
    { url: 'https://example.com/a' },
    { url: 'https://example.com/a' }, // Duplicate
  ])
  
  const result = validateSitemaps(sitemapEntries, [0])
  
  assert(!result.valid, 'Invalid sitemap should fail')
  assert(result.errors.length > 0, 'Should have errors')
  assertEqual(result.stats.invalidUrls, 1, 'Should count invalid URLs')
  assertEqual(result.stats.invalidLastmods, 1, 'Should count invalid lastmods')
  assertEqual(result.stats.duplicatesFound, 1, 'Should count duplicates')
  console.log('✓ Invalid sitemap fails with detailed stats')
}

// ============================================================================
// Summary
// ============================================================================

console.log('\n✅ All sitemap validation tests passed!')
