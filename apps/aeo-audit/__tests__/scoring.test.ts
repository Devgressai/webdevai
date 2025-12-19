/**
 * Regression tests for scoring and checks
 * Tests deterministic check scores and expected ranges
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { parseHtml } from '../lib/extract-parse/html-parser'
import { extractJsonLdBlocks } from '../lib/extract-parse/jsonld'

const FIXTURES_DIR = join(__dirname, 'fixtures')

function loadFixture(name: string): string {
  return readFileSync(join(FIXTURES_DIR, name), 'utf-8')
}

/**
 * Mock check computation for testing
 * This simulates the check-runner logic without requiring a database
 */
function computeCheckScore(
  checkId: string,
  metadata: ReturnType<typeof parseHtml>,
  jsonLdBlocks: ReturnType<typeof extractJsonLdBlocks>
): number {
  switch (checkId) {
    case 'has_title':
      return metadata.title ? 5 : 0

    case 'has_meta_description':
      return metadata.metaDescription ? 5 : 0

    case 'has_canonical':
      return metadata.canonical ? 5 : 0

    case 'has_jsonld':
      return jsonLdBlocks.length > 0 ? 5 : 0

    case 'has_valid_jsonld':
      const validBlocks = jsonLdBlocks.filter((b) => b.parseOk)
      return validBlocks.length > 0 ? 5 : 0

    case 'has_organization_schema':
      const orgBlock = jsonLdBlocks.find(
        (b) => b.parseOk && b.parsedType === 'Organization'
      )
      return orgBlock ? 5 : 0

    case 'has_faq_schema':
      const faqBlock = jsonLdBlocks.find(
        (b) => b.parseOk && b.parsedType === 'FAQPage'
      )
      return faqBlock ? 5 : 0

    case 'has_sufficient_content':
      // Score based on word count: 0-100 words = 0-2, 100-300 = 3, 300+ = 5
      if (metadata.wordCount < 100) return Math.floor(metadata.wordCount / 50)
      if (metadata.wordCount < 300) return 3
      return 5

    case 'has_headings':
      const headingCount =
        metadata.headings.h1.length +
        metadata.headings.h2.length +
        metadata.headings.h3.length
      return headingCount > 0 ? 5 : 0

    case 'has_images_with_alt':
      if (metadata.images.count === 0) return 3 // No images is acceptable
      const altCoverage =
        metadata.images.withAlt / metadata.images.count
      if (altCoverage >= 0.9) return 5
      if (altCoverage >= 0.7) return 4
      if (altCoverage >= 0.5) return 3
      return 2

    default:
      return 0
  }
}

describe('Scoring and Checks', () => {
  describe('Good Page Scores', () => {
    const html = loadFixture('good-page.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_title score is 5', () => {
      const score = computeCheckScore('has_title', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })

    test('has_meta_description score is 5', () => {
      const score = computeCheckScore(
        'has_meta_description',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(5)
    })

    test('has_canonical score is 5', () => {
      const score = computeCheckScore('has_canonical', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })

    test('has_jsonld score is 5', () => {
      const score = computeCheckScore('has_jsonld', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })

    test('has_valid_jsonld score is 5', () => {
      const score = computeCheckScore(
        'has_valid_jsonld',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(5)
    })

    test('has_organization_schema score is 5', () => {
      const score = computeCheckScore(
        'has_organization_schema',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(5)
    })

    test('has_sufficient_content score is 5', () => {
      const score = computeCheckScore(
        'has_sufficient_content',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(5)
    })

    test('has_headings score is 5', () => {
      const score = computeCheckScore('has_headings', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })
  })

  describe('Missing Title Scores', () => {
    const html = loadFixture('missing-title.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_title score is 0', () => {
      const score = computeCheckScore('has_title', metadata, jsonLdBlocks)
      expect(score).toBe(0)
    })

    test('other checks still pass', () => {
      const canonicalScore = computeCheckScore(
        'has_canonical',
        metadata,
        jsonLdBlocks
      )
      expect(canonicalScore).toBe(5)
    })
  })

  describe('Missing Canonical Scores', () => {
    const html = loadFixture('missing-canonical.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_canonical score is 0', () => {
      const score = computeCheckScore('has_canonical', metadata, jsonLdBlocks)
      expect(score).toBe(0)
    })

    test('title check still passes', () => {
      const score = computeCheckScore('has_title', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })
  })

  describe('Invalid JSON-LD Scores', () => {
    const html = loadFixture('invalid-jsonld.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_jsonld score is 5 (blocks exist)', () => {
      const score = computeCheckScore('has_jsonld', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })

    test('has_valid_jsonld score is 0 (no valid blocks)', () => {
      const score = computeCheckScore(
        'has_valid_jsonld',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(0)
    })
  })

  describe('FAQ Present Scores', () => {
    const html = loadFixture('faq-present.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_faq_schema score is 5', () => {
      const score = computeCheckScore('has_faq_schema', metadata, jsonLdBlocks)
      expect(score).toBe(5)
    })

    test('has_sufficient_content score is 5', () => {
      const score = computeCheckScore(
        'has_sufficient_content',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(5)
    })
  })

  describe('SPA Shell Scores', () => {
    const html = loadFixture('spa-shell.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_sufficient_content score is low', () => {
      const score = computeCheckScore(
        'has_sufficient_content',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBeLessThan(3)
    })

    test('has_headings score is 0', () => {
      const score = computeCheckScore('has_headings', metadata, jsonLdBlocks)
      expect(score).toBe(0)
    })
  })

  describe('Minimal Content Scores', () => {
    const html = loadFixture('minimal-content.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('has_sufficient_content score is 0', () => {
      const score = computeCheckScore(
        'has_sufficient_content',
        metadata,
        jsonLdBlocks
      )
      expect(score).toBe(0)
    })
  })

  describe('Score Ranges', () => {
    test('all scores are in 0-5 range', () => {
      const fixtures = [
        'good-page.html',
        'missing-title.html',
        'missing-canonical.html',
        'invalid-jsonld.html',
        'faq-present.html',
        'spa-shell.html',
        'minimal-content.html',
        'missing-meta-description.html',
        'multiple-jsonld.html',
      ]

      const checks = [
        'has_title',
        'has_meta_description',
        'has_canonical',
        'has_jsonld',
        'has_valid_jsonld',
        'has_organization_schema',
        'has_faq_schema',
        'has_sufficient_content',
        'has_headings',
        'has_images_with_alt',
      ]

      fixtures.forEach((fixture) => {
        const html = loadFixture(fixture)
        const metadata = parseHtml(html)
        const jsonLdBlocks = extractJsonLdBlocks(html)

        checks.forEach((checkId) => {
          const score = computeCheckScore(checkId, metadata, jsonLdBlocks)
          expect(score).toBeGreaterThanOrEqual(0)
          expect(score).toBeLessThanOrEqual(5)
        })
      })
    })
  })

  describe('Deterministic Behavior', () => {
    test('same input produces same scores', () => {
      const html = loadFixture('good-page.html')
      const metadata1 = parseHtml(html)
      const jsonLdBlocks1 = extractJsonLdBlocks(html)
      const metadata2 = parseHtml(html)
      const jsonLdBlocks2 = extractJsonLdBlocks(html)

      const checks = [
        'has_title',
        'has_meta_description',
        'has_canonical',
        'has_jsonld',
        'has_valid_jsonld',
      ]

      checks.forEach((checkId) => {
        const score1 = computeCheckScore(checkId, metadata1, jsonLdBlocks1)
        const score2 = computeCheckScore(checkId, metadata2, jsonLdBlocks2)
        expect(score1).toBe(score2)
      })
    })
  })
})

