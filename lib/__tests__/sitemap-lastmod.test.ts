/**
 * Unit tests for sitemap lastmod timestamp resolution.
 *
 * LASTMOD HIERARCHY:
 * 1. CMS/frontmatter date — For blog posts
 * 2. Content timestamp map — For static core pages
 * 3. Data file baseline — For programmatic pages
 * 4. Fallback baseline — If nothing else
 *
 * Run with: npx tsx lib/__tests__/sitemap-lastmod.test.ts
 */

import {
  getCorePageLastMod,
  getServicePageLastMod,
  getBlogPostLastMod,
  getCityPageLastMod,
  getCityServicePageLastMod,
  validateLastModDistribution,
  CORE_PAGE_TIMESTAMPS,
  SERVICE_PAGE_BASELINE,
  CITY_DATA_BASELINE,
  CITY_SERVICE_BASELINE,
  FALLBACK_BASELINE,
} from '../sitemap-lastmod'

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}

function assertEqual<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`)
  }
}

// Test: getCorePageLastMod returns mapped timestamp for known pages
{
  const result = getCorePageLastMod('about')
  assertEqual(result.source, 'content-map', 'about page uses content-map')
  assertEqual(
    result.date.toISOString().split('T')[0],
    CORE_PAGE_TIMESTAMPS['about'],
    'about page date matches timestamp map'
  )
  console.log('✓ getCorePageLastMod returns mapped timestamp for known pages')
}

// Test: getCorePageLastMod returns fallback for unknown pages
{
  const result = getCorePageLastMod('some-unknown-page-xyz')
  assertEqual(result.source, 'fallback', 'unknown page uses fallback')
  assertEqual(
    result.date.toISOString().split('T')[0],
    FALLBACK_BASELINE,
    'unknown page date matches fallback baseline'
  )
  console.log('✓ getCorePageLastMod returns fallback for unknown pages')
}

// Test: getCorePageLastMod handles homepage (empty string)
{
  const result = getCorePageLastMod('')
  assertEqual(result.source, 'content-map', 'homepage uses content-map')
  assert(result.date instanceof Date, 'homepage returns valid Date')
  console.log('✓ getCorePageLastMod handles homepage (empty string)')
}

// Test: getServicePageLastMod returns service baseline
{
  const result = getServicePageLastMod('website-design')
  assertEqual(result.source, 'service-baseline', 'service page uses service-baseline')
  assertEqual(
    result.date.toISOString().split('T')[0],
    SERVICE_PAGE_BASELINE,
    'service page date matches service baseline'
  )
  console.log('✓ getServicePageLastMod returns service baseline')
}

// Test: getBlogPostLastMod uses CMS date when valid
{
  const result = getBlogPostLastMod('2025-01-15')
  assertEqual(result.source, 'cms', 'blog post with date uses cms source')
  assertEqual(
    result.date.toISOString().split('T')[0],
    '2025-01-15',
    'blog post date matches provided date'
  )
  console.log('✓ getBlogPostLastMod uses CMS date when valid')
}

// Test: getBlogPostLastMod uses fallback for undefined date
{
  const result = getBlogPostLastMod(undefined)
  assertEqual(result.source, 'fallback', 'blog post without date uses fallback')
  assertEqual(
    result.date.toISOString().split('T')[0],
    FALLBACK_BASELINE,
    'blog post without date matches fallback baseline'
  )
  console.log('✓ getBlogPostLastMod uses fallback for undefined date')
}

// Test: getBlogPostLastMod uses fallback for invalid date
{
  const result = getBlogPostLastMod('not-a-valid-date')
  assertEqual(result.source, 'fallback', 'blog post with invalid date uses fallback')
  console.log('✓ getBlogPostLastMod uses fallback for invalid date')
}

// Test: getCityPageLastMod returns city baseline
{
  const result = getCityPageLastMod('new-york-ny')
  assertEqual(result.source, 'city-baseline', 'city page uses city-baseline')
  assertEqual(
    result.date.toISOString().split('T')[0],
    CITY_DATA_BASELINE,
    'city page date matches city baseline'
  )
  console.log('✓ getCityPageLastMod returns city baseline')
}

// Test: getCityServicePageLastMod returns city-service baseline
{
  const result = getCityServicePageLastMod('new-york-ny', 'seo')
  assertEqual(result.source, 'city-service-baseline', 'city-service page uses city-service-baseline')
  assertEqual(
    result.date.toISOString().split('T')[0],
    CITY_SERVICE_BASELINE,
    'city-service page date matches city-service baseline'
  )
  console.log('✓ getCityServicePageLastMod returns city-service baseline')
}

// Test: validateLastModDistribution passes with varied timestamps
{
  const entries = [
    { url: 'https://example.com/a', lastModified: new Date('2025-01-01') },
    { url: 'https://example.com/b', lastModified: new Date('2025-01-02') },
    { url: 'https://example.com/c', lastModified: new Date('2025-01-03') },
    { url: 'https://example.com/d', lastModified: new Date('2025-01-04') },
    { url: 'https://example.com/e', lastModified: new Date('2025-01-05') },
  ]
  const result = validateLastModDistribution(entries)
  assertEqual(result.valid, true, 'varied timestamps pass validation')
  assert(result.warning === undefined, 'no warning for varied timestamps')
  console.log('✓ validateLastModDistribution passes with varied timestamps')
}

// Test: validateLastModDistribution warns when >30% share same timestamp
{
  const sameDate = new Date('2025-01-15')
  const entries = [
    { url: 'https://example.com/a', lastModified: sameDate },
    { url: 'https://example.com/b', lastModified: sameDate },
    { url: 'https://example.com/c', lastModified: sameDate },
    { url: 'https://example.com/d', lastModified: sameDate },
    { url: 'https://example.com/e', lastModified: new Date('2025-01-01') },
  ]
  const result = validateLastModDistribution(entries)
  assertEqual(result.valid, false, '80% identical timestamps fails validation')
  assert(result.warning !== undefined, 'warning present for identical timestamps')
  assert(result.warning!.includes('80.0%'), 'warning includes percentage')
  console.log('✓ validateLastModDistribution warns when >30% share same timestamp')
}

// Test: validateLastModDistribution handles empty array
{
  const result = validateLastModDistribution([])
  assertEqual(result.valid, true, 'empty array passes validation')
  console.log('✓ validateLastModDistribution handles empty array')
}

// Test: validateLastModDistribution handles string dates
{
  const entries = [
    { url: 'https://example.com/a', lastModified: '2025-01-01' },
    { url: 'https://example.com/b', lastModified: '2025-01-02' },
    { url: 'https://example.com/c', lastModified: '2025-01-03' },
    { url: 'https://example.com/d', lastModified: '2025-01-04' },
  ]
  const result = validateLastModDistribution(entries)
  assertEqual(result.valid, true, 'string dates pass validation (25% each, under 30% threshold)')
  console.log('✓ validateLastModDistribution handles string dates')
}

// Test: All baselines are valid ISO dates
{
  const baselines = [
    SERVICE_PAGE_BASELINE,
    CITY_DATA_BASELINE,
    CITY_SERVICE_BASELINE,
    FALLBACK_BASELINE,
  ]
  for (const baseline of baselines) {
    const parsed = new Date(baseline)
    assert(!isNaN(parsed.getTime()), `baseline ${baseline} is a valid date`)
  }
  console.log('✓ All baselines are valid ISO dates')
}

// Test: CORE_PAGE_TIMESTAMPS entries are valid dates
{
  for (const [path, timestamp] of Object.entries(CORE_PAGE_TIMESTAMPS)) {
    const parsed = new Date(timestamp)
    assert(!isNaN(parsed.getTime()), `CORE_PAGE_TIMESTAMPS['${path}'] = ${timestamp} is valid`)
  }
  console.log('✓ CORE_PAGE_TIMESTAMPS entries are valid dates')
}

console.log('\n✅ All sitemap lastmod tests passed!')
