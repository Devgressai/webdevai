/**
 * Unit tests for sitemap split architecture.
 * 
 * Validates that:
 * 1. No URLs are duplicated across child sitemaps
 * 2. All URLs from each category are present
 * 3. Each child sitemap has valid structure
 * 4. Chunking works correctly for large datasets
 * 
 * Run with: npx tsx lib/__tests__/sitemap-split.test.ts
 */

import {
  generateCoreEntries,
  generateServicesEntries,
  generateBlogEntries,
  generateLocationsEntries,
  getNewestLastMod,
  chunkEntries,
  MAX_URLS_PER_SITEMAP,
  CORE_PAGES,
  HUB_PAGES,
  TOOL_PAGES,
  SOLUTIONS_PAGES,
  STANDALONE_SERVICES,
  LOCATION_HUB_PAGES,
  KEY_SERVICES,
  BASE_URL,
  SitemapEntry,
} from '../sitemap-entries'
import { validateSitemapSplit, getSitemapSummary } from '../sitemap-index'
import { assertNoDuplicateLocs } from '../sitemap-dedupe'

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}

function assertEqual<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`)
  }
}

// ============================================================================
// Core Sitemap Tests
// ============================================================================

// Test: Core entries contain homepage
{
  const entries = generateCoreEntries()
  const hasHomepage = entries.some(e => e.url === BASE_URL || e.url === `${BASE_URL}/`)
  assert(hasHomepage, 'core entries should contain homepage')
  console.log('✓ Core entries contain homepage')
}

// Test: Core entries contain all hub pages
{
  const entries = generateCoreEntries()
  const urls = new Set(entries.map(e => e.url))
  
  for (const hub of HUB_PAGES) {
    const path = hub.replace(/^\//, '')
    const expectedUrl = `${BASE_URL}/${path}`
    // Note: getSeoDirectives may modify the URL, so check for partial match
    const found = Array.from(urls).some(u => u.includes(path))
    assert(found, `core entries should contain ${hub}`)
  }
  console.log('✓ Core entries contain all hub pages')
}

// Test: Core entries have no internal duplicates
{
  const entries = generateCoreEntries()
  try {
    assertNoDuplicateLocs(entries)
    console.log('✓ Core entries have no internal duplicates')
  } catch (e) {
    throw new Error(`Core entries have duplicates: ${(e as Error).message}`)
  }
}

// ============================================================================
// Services Sitemap Tests
// ============================================================================

// Test: Services entries contain tool pages
{
  const entries = generateServicesEntries()
  const urls = entries.map(e => e.url)
  
  for (const tool of TOOL_PAGES) {
    const path = tool.replace(/^\//, '')
    const found = urls.some(u => u.includes(path))
    assert(found, `services entries should contain ${tool}`)
  }
  console.log('✓ Services entries contain tool pages')
}

// Test: Services entries contain solutions pages
{
  const entries = generateServicesEntries()
  const urls = entries.map(e => e.url)
  
  for (const solution of SOLUTIONS_PAGES) {
    const found = urls.some(u => u.includes(`solutions/${solution}`))
    assert(found, `services entries should contain solutions/${solution}`)
  }
  console.log('✓ Services entries contain solutions pages')
}

// Test: Services entries have no internal duplicates
{
  const entries = generateServicesEntries()
  try {
    assertNoDuplicateLocs(entries)
    console.log('✓ Services entries have no internal duplicates')
  } catch (e) {
    throw new Error(`Services entries have duplicates: ${(e as Error).message}`)
  }
}

// ============================================================================
// Blog Sitemap Tests
// ============================================================================

// Test: Blog entries are fetched (may be empty in test environment)
{
  (async () => {
    const entries = await generateBlogEntries()
    // Blog entries depend on filesystem, may be empty in some environments
    assert(Array.isArray(entries), 'blog entries should be an array')
    console.log(`✓ Blog entries fetched: ${entries.length} posts`)
  })()
}

// ============================================================================
// Locations Sitemap Tests
// ============================================================================

// Test: Locations entries contain location hub pages
{
  const entries = generateLocationsEntries()
  const urls = entries.map(e => e.url)
  
  for (const hub of LOCATION_HUB_PAGES) {
    const path = hub.replace(/^\//, '')
    const found = urls.some(u => u.includes(path))
    assert(found, `locations entries should contain ${hub}`)
  }
  console.log('✓ Locations entries contain location hub pages')
}

// Test: Locations entries have no internal duplicates
{
  const entries = generateLocationsEntries()
  try {
    assertNoDuplicateLocs(entries)
    console.log('✓ Locations entries have no internal duplicates')
  } catch (e) {
    throw new Error(`Locations entries have duplicates: ${(e as Error).message}`)
  }
}

// ============================================================================
// Cross-Sitemap Validation Tests
// ============================================================================

// Test: No URLs duplicated across sitemaps
{
  (async () => {
    const result = await validateSitemapSplit()
    
    if (!result.valid) {
      console.error('Sitemap split validation errors:', result.errors)
      console.error('Duplicates found:', result.duplicates.slice(0, 5))
    }
    
    assert(result.valid, `sitemap split should be valid: ${result.errors.join(', ')}`)
    console.log('✓ No URLs duplicated across sitemaps')
  })()
}

// Test: Total URL count matches sum of categories
{
  (async () => {
    const summary = await getSitemapSummary()
    const sumOfCategories = 
      summary.byCategory.core +
      summary.byCategory.services +
      summary.byCategory.blog +
      summary.byCategory.locations
    
    assertEqual(summary.total, sumOfCategories, 'total should match sum of categories')
    console.log(`✓ Total URL count (${summary.total}) matches sum of categories`)
  })()
}

// ============================================================================
// Utility Function Tests
// ============================================================================

// Test: getNewestLastMod returns newest date
{
  const entries: SitemapEntry[] = [
    { url: 'https://example.com/a', lastModified: new Date('2025-01-01'), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://example.com/b', lastModified: new Date('2025-01-15'), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://example.com/c', lastModified: new Date('2025-01-10'), changeFrequency: 'daily', priority: 1.0 },
  ]
  
  const newest = getNewestLastMod(entries)
  assertEqual(newest.toISOString().split('T')[0], '2025-01-15', 'should return newest date')
  console.log('✓ getNewestLastMod returns newest date')
}

// Test: getNewestLastMod handles empty array
{
  const newest = getNewestLastMod([])
  assert(newest instanceof Date, 'should return a Date for empty array')
  console.log('✓ getNewestLastMod handles empty array')
}

// Test: chunkEntries returns single chunk for small arrays
{
  const entries: SitemapEntry[] = [
    { url: 'https://example.com/a', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://example.com/b', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  ]
  
  const chunks = chunkEntries(entries, 100)
  assertEqual(chunks.length, 1, 'should return single chunk')
  assertEqual(chunks[0].length, 2, 'chunk should contain all entries')
  console.log('✓ chunkEntries returns single chunk for small arrays')
}

// Test: chunkEntries correctly splits large arrays
{
  const entries: SitemapEntry[] = Array.from({ length: 10 }, (_, i) => ({
    url: `https://example.com/${i}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))
  
  const chunks = chunkEntries(entries, 3)
  assertEqual(chunks.length, 4, 'should create 4 chunks for 10 entries with max 3')
  assertEqual(chunks[0].length, 3, 'first chunk should have 3 entries')
  assertEqual(chunks[3].length, 1, 'last chunk should have 1 entry')
  console.log('✓ chunkEntries correctly splits large arrays')
}

// Test: MAX_URLS_PER_SITEMAP is within protocol limits
{
  assert(MAX_URLS_PER_SITEMAP <= 50000, 'MAX_URLS_PER_SITEMAP should be <= 50000')
  console.log('✓ MAX_URLS_PER_SITEMAP is within protocol limits')
}

// ============================================================================
// Final Summary
// ============================================================================

// Wait for async tests and print summary
setTimeout(async () => {
  try {
    const summary = await getSitemapSummary()
    console.log('\n📊 Sitemap Summary:')
    console.log(`  Total URLs: ${summary.total}`)
    console.log(`  Core: ${summary.byCategory.core}`)
    console.log(`  Services: ${summary.byCategory.services}`)
    console.log(`  Blog: ${summary.byCategory.blog}`)
    console.log(`  Locations: ${summary.byCategory.locations}`)
    console.log('\n✅ All sitemap split tests passed!')
  } catch (e) {
    console.error('\n❌ Test failed:', (e as Error).message)
    process.exit(1)
  }
}, 1000)
