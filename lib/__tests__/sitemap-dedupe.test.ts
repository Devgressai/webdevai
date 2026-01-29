/**
 * Unit tests for sitemap URL deduplication.
 * 
 * DEDUPE RULE: First occurrence wins. Ensures each <loc> is emitted at most once.
 * 
 * Run with: npx tsx lib/__tests__/sitemap-dedupe.test.ts
 */

import {
  deduplicateSitemapEntries,
  assertNoDuplicateLocs,
  type SitemapEntry,
} from '../sitemap-dedupe'

const base = 'https://www.webvello.com'

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}

function assertEqual<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`)
  }
}

function assertArrayEqual<T>(actual: T[], expected: T[], message: string): void {
  if (actual.length !== expected.length) {
    throw new Error(`${message}: length mismatch (${actual.length} vs ${expected.length})`)
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(`${message}: mismatch at index ${i}`)
    }
  }
}

function assertThrows(fn: () => void, pattern: RegExp, message: string): void {
  let threw = false
  let errorMsg = ''
  try {
    fn()
  } catch (e) {
    threw = true
    errorMsg = e instanceof Error ? e.message : String(e)
  }
  if (!threw) throw new Error(`${message}: expected function to throw`)
  if (!pattern.test(errorMsg)) {
    throw new Error(`${message}: error message "${errorMsg}" did not match ${pattern}`)
  }
}

function assertDoesNotThrow(fn: () => void, message: string): void {
  try {
    fn()
  } catch (e) {
    throw new Error(`${message}: expected no throw but got ${e}`)
  }
}

// Test: removes duplicate locs, first occurrence wins
{
  const entries: SitemapEntry[] = [
    { url: `${base}/a`, lastModified: new Date('2025-01-01'), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/b`, lastModified: new Date('2025-01-02'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/a`, lastModified: new Date('2025-01-03'), changeFrequency: 'monthly', priority: 0.5 },
  ]
  const out = deduplicateSitemapEntries(entries)
  assertEqual(out.length, 2, 'dedupe removes duplicate')
  assertEqual(out[0].url, `${base}/a`, 'first URL preserved')
  assertEqual(out[0].priority, 1.0, 'first priority preserved')
  assertEqual(out[0].changeFrequency, 'daily', 'first changeFrequency preserved')
  assertEqual(out[1].url, `${base}/b`, 'second unique URL kept')
  console.log('✓ removes duplicate locs, first occurrence wins')
}

// Test: preserves order and keeps first occurrence metadata
{
  const entries: SitemapEntry[] = [
    { url: `${base}/only`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/dup`, lastModified: new Date('2025-01-01'), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/dup`, lastModified: new Date('2025-01-02'), changeFrequency: 'monthly', priority: 0.3 },
  ]
  const out = deduplicateSitemapEntries(entries)
  assertArrayEqual(out.map((e) => e.url), [`${base}/only`, `${base}/dup`], 'order preserved')
  const dupEntry = out.find((e) => e.url === `${base}/dup`)
  assertEqual(dupEntry?.priority, 1.0, 'first dup priority preserved')
  assertEqual(dupEntry?.changeFrequency, 'daily', 'first dup changeFrequency preserved')
  console.log('✓ preserves order and keeps first occurrence metadata')
}

// Test: returns empty array for empty input
{
  const out = deduplicateSitemapEntries([])
  assertEqual(out.length, 0, 'empty input returns empty output')
  console.log('✓ returns empty array for empty input')
}

// Test: output has no duplicate URLs
{
  const entries: SitemapEntry[] = [
    { url: `${base}/x`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/y`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/x`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  ]
  const out = deduplicateSitemapEntries(entries)
  const urls = out.map((e) => e.url)
  const unique = new Set(urls)
  assertEqual(unique.size, urls.length, 'no duplicates in output')
  console.log('✓ output has no duplicate URLs')
}

// Test: assertNoDuplicateLocs does not throw when all locs are unique
{
  const entries: SitemapEntry[] = [
    { url: `${base}/a`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/b`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  ]
  assertDoesNotThrow(() => assertNoDuplicateLocs(entries), 'unique locs do not throw')
  console.log('✓ assertNoDuplicateLocs does not throw when all locs are unique')
}

// Test: assertNoDuplicateLocs throws when duplicate locs exist
{
  const entries: SitemapEntry[] = [
    { url: `${base}/a`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/a`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]
  assertThrows(() => assertNoDuplicateLocs(entries), /Duplicate <loc>/, 'duplicate throws')
  assertThrows(() => assertNoDuplicateLocs(entries), /Deduplication must ensure/, 'error message contains explanation')
  console.log('✓ assertNoDuplicateLocs throws when duplicate locs exist')
}

console.log('\n✅ All sitemap dedupe tests passed!')
