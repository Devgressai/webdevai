/**
 * Regression tests for HTML extraction
 * Tests extractor output fields, schema parsing, and word count heuristics
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { parseHtml } from '../lib/extract-parse/html-parser'
import { extractJsonLdBlocks } from '../lib/extract-parse/jsonld'

const FIXTURES_DIR = join(__dirname, 'fixtures')

function loadFixture(name: string): string {
  return readFileSync(join(FIXTURES_DIR, name), 'utf-8')
}

describe('HTML Extraction', () => {
  describe('Good Page', () => {
    const html = loadFixture('good-page.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('extracts title correctly', () => {
      expect(metadata.title).toBe('Example Company - Web Development Services')
    })

    test('extracts meta description', () => {
      expect(metadata.metaDescription).toBe(
        'We provide professional web development services for businesses of all sizes. Contact us today for a free consultation.'
      )
    })

    test('extracts canonical URL', () => {
      expect(metadata.canonical).toBe('https://example.com/services/web-development')
    })

    test('extracts meta robots', () => {
      expect(metadata.metaRobots).toBe('index, follow')
    })

    test('extracts OG tags', () => {
      expect(metadata.ogTags.present).toBe(true)
      expect(metadata.ogTags.tags['og:title']).toBe('Example Company - Web Development Services')
      expect(metadata.ogTags.tags['og:description']).toBe('Professional web development services')
      expect(metadata.ogTags.tags['og:type']).toBe('website')
    })

    test('extracts Twitter tags', () => {
      expect(metadata.twitterTags.present).toBe(true)
      expect(metadata.twitterTags.tags['twitter:card']).toBe('summary')
      expect(metadata.twitterTags.tags['twitter:title']).toBe('Example Company - Web Development Services')
    })

    test('extracts headings', () => {
      expect(metadata.headings.h1).toContain('Web Development Services')
      expect(metadata.headings.h2).toContain('Our Services')
      expect(metadata.headings.h2).toContain('Why Choose Us')
      expect(metadata.headings.h3).toContain('Custom Web Development')
      expect(metadata.headings.h3).toContain('E-commerce Solutions')
    })

    test('calculates word count', () => {
      // Good page should have substantial content
      expect(metadata.wordCount).toBeGreaterThan(100)
      expect(metadata.wordCount).toBeLessThan(500)
    })

    test('counts lists', () => {
      expect(metadata.lists.ulCount).toBeGreaterThan(0)
      expect(metadata.lists.olCount).toBeGreaterThan(0)
    })

    test('counts images with alt text', () => {
      expect(metadata.images.count).toBeGreaterThan(0)
      expect(metadata.images.withAlt).toBeGreaterThan(0)
    })

    test('extracts JSON-LD blocks', () => {
      expect(jsonLdBlocks.length).toBeGreaterThan(0)
    })

    test('parses JSON-LD correctly', () => {
      const validBlock = jsonLdBlocks.find((b) => b.parseOk)
      expect(validBlock).toBeDefined()
      expect(validBlock?.parsedType).toBe('Organization')
      expect(validBlock?.parsedData).toBeDefined()
      expect(validBlock?.parsedData['@type']).toBe('Organization')
    })
  })

  describe('Missing Title', () => {
    const html = loadFixture('missing-title.html')
    const metadata = parseHtml(html)

    test('detects missing title', () => {
      expect(metadata.title).toBeNull()
    })

    test('still extracts other metadata', () => {
      expect(metadata.metaDescription).toBeTruthy()
      expect(metadata.canonical).toBeTruthy()
    })

    test('extracts headings from body', () => {
      expect(metadata.headings.h1).toContain('Web Development Services')
    })
  })

  describe('Missing Canonical', () => {
    const html = loadFixture('missing-canonical.html')
    const metadata = parseHtml(html)

    test('detects missing canonical', () => {
      expect(metadata.canonical).toBeNull()
    })

    test('still extracts title and description', () => {
      expect(metadata.title).toBeTruthy()
      expect(metadata.metaDescription).toBeTruthy()
    })
  })

  describe('Invalid JSON-LD', () => {
    const html = loadFixture('invalid-jsonld.html')
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('detects invalid JSON-LD', () => {
      const invalidBlocks = jsonLdBlocks.filter((b) => !b.parseOk)
      expect(invalidBlocks.length).toBeGreaterThan(0)
    })

    test('sets parseOk to false for invalid blocks', () => {
      jsonLdBlocks.forEach((block) => {
        if (!block.parseOk) {
          expect(block.parsedData).toBeNull()
          expect(block.parsedType).toBeNull()
        }
      })
    })

    test('preserves raw text even for invalid blocks', () => {
      jsonLdBlocks.forEach((block) => {
        expect(block.rawText).toBeTruthy()
        expect(block.rawText.length).toBeGreaterThan(0)
      })
    })
  })

  describe('FAQ Present', () => {
    const html = loadFixture('faq-present.html')
    const metadata = parseHtml(html)
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('extracts FAQ content', () => {
      expect(metadata.headings.h3.length).toBeGreaterThan(0)
      // FAQ typically has question-like headings
      const hasQuestions = metadata.headings.h3.some((h) =>
        h.toLowerCase().includes('what') || h.toLowerCase().includes('how')
      )
      expect(hasQuestions).toBe(true)
    })

    test('extracts FAQPage schema', () => {
      const faqBlock = jsonLdBlocks.find((b) => b.parsedType === 'FAQPage')
      expect(faqBlock).toBeDefined()
      expect(faqBlock?.parseOk).toBe(true)
    })

    test('calculates word count for FAQ', () => {
      expect(metadata.wordCount).toBeGreaterThan(50)
    })
  })

  describe('SPA Shell', () => {
    const html = loadFixture('spa-shell.html')
    const metadata = parseHtml(html)

    test('detects minimal visible content', () => {
      expect(metadata.wordCount).toBeLessThan(50)
    })

    test('has title but minimal content', () => {
      expect(metadata.title).toBe('Loading...')
      expect(metadata.headings.h1.length).toBe(0)
    })

    test('has multiple script tags', () => {
      // SPA shells typically have many script tags
      const scriptCount = (html.match(/<script/gi) || []).length
      expect(scriptCount).toBeGreaterThan(2)
    })
  })

  describe('Minimal Content', () => {
    const html = loadFixture('minimal-content.html')
    const metadata = parseHtml(html)

    test('detects minimal word count', () => {
      expect(metadata.wordCount).toBeLessThan(10)
    })

    test('still extracts basic metadata', () => {
      expect(metadata.title).toBe('Minimal Page')
    })
  })

  describe('Missing Meta Description', () => {
    const html = loadFixture('missing-meta-description.html')
    const metadata = parseHtml(html)

    test('detects missing meta description', () => {
      expect(metadata.metaDescription).toBeNull()
    })

    test('still extracts title and canonical', () => {
      expect(metadata.title).toBeTruthy()
      expect(metadata.canonical).toBeTruthy()
    })
  })

  describe('Multiple JSON-LD Blocks', () => {
    const html = loadFixture('multiple-jsonld.html')
    const jsonLdBlocks = extractJsonLdBlocks(html)

    test('extracts all JSON-LD blocks', () => {
      expect(jsonLdBlocks.length).toBe(2)
    })

    test('parses all blocks correctly', () => {
      const allValid = jsonLdBlocks.every((b) => b.parseOk)
      expect(allValid).toBe(true)
    })

    test('extracts different schema types', () => {
      const types = jsonLdBlocks.map((b) => b.parsedType).filter(Boolean)
      expect(types).toContain('Organization')
      expect(types).toContain('BreadcrumbList')
    })
  })

  describe('Word Count Heuristics', () => {
    test('counts words correctly in good page', () => {
      const html = loadFixture('good-page.html')
      const metadata = parseHtml(html)
      // Good page should have substantial content
      expect(metadata.wordCount).toBeGreaterThan(100)
    })

    test('counts words correctly in minimal page', () => {
      const html = loadFixture('minimal-content.html')
      const metadata = parseHtml(html)
      // Minimal page should have very few words
      expect(metadata.wordCount).toBeLessThan(10)
    })

    test('excludes script and style content', () => {
      const html = loadFixture('spa-shell.html')
      const metadata = parseHtml(html)
      // SPA shell has scripts but minimal visible text
      expect(metadata.wordCount).toBeLessThan(50)
    })
  })
})

