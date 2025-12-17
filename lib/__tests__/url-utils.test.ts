/**
 * Unit tests for URL normalization and validation utilities
 */

import { normalizeUrl, validateUrl } from '../url-utils'

describe('normalizeUrl', () => {
  test('adds https:// to domain without protocol', () => {
    expect(normalizeUrl('example.com')).toBe('https://example.com')
  })

  test('preserves http:// protocol', () => {
    expect(normalizeUrl('http://example.com')).toBe('http://example.com')
  })

  test('preserves https:// protocol', () => {
    expect(normalizeUrl('https://example.com')).toBe('https://example.com')
  })

  test('trims whitespace', () => {
    expect(normalizeUrl('  example.com  ')).toBe('https://example.com')
  })

  test('lowercases hostname', () => {
    expect(normalizeUrl('EXAMPLE.COM')).toBe('https://example.com')
    expect(normalizeUrl('WWW.EXAMPLE.COM')).toBe('https://www.example.com')
  })

  test('removes trailing slash (except root)', () => {
    expect(normalizeUrl('https://example.com/')).toBe('https://example.com/')
    expect(normalizeUrl('https://example.com/path/')).toBe('https://example.com/path')
  })

  test('handles www prefix', () => {
    expect(normalizeUrl('www.example.com')).toBe('https://www.example.com')
  })

  test('handles empty string', () => {
    expect(normalizeUrl('')).toBe('')
  })

  test('handles null/undefined', () => {
    expect(normalizeUrl(null as any)).toBe('')
    expect(normalizeUrl(undefined as any)).toBe('')
  })

  test('handles URLs with paths', () => {
    expect(normalizeUrl('example.com/path')).toBe('https://example.com/path')
    expect(normalizeUrl('example.com/path/to/page')).toBe('https://example.com/path/to/page')
  })

  test('handles URLs with query strings', () => {
    expect(normalizeUrl('example.com?param=value')).toBe('https://example.com/?param=value')
  })

  test('handles URLs with ports', () => {
    expect(normalizeUrl('example.com:8080')).toBe('https://example.com:8080')
  })
})

describe('validateUrl', () => {
  test('accepts valid domains', () => {
    expect(validateUrl('example.com')).toBe(true)
    expect(validateUrl('www.example.com')).toBe(true)
    expect(validateUrl('subdomain.example.com')).toBe(true)
  })

  test('accepts URLs with protocol', () => {
    expect(validateUrl('https://example.com')).toBe(true)
    expect(validateUrl('http://example.com')).toBe(true)
  })

  test('rejects invalid domains', () => {
    expect(validateUrl('not a url')).toBe(false)
    expect(validateUrl('example')).toBe(false)
    expect(validateUrl('example.')).toBe(false)
  })

  test('rejects localhost', () => {
    expect(validateUrl('localhost')).toBe(false)
    expect(validateUrl('localhost:3000')).toBe(false)
  })

  test('rejects IP addresses', () => {
    expect(validateUrl('127.0.0.1')).toBe(false)
    expect(validateUrl('192.168.1.1')).toBe(false)
    expect(validateUrl('10.0.0.1')).toBe(false)
  })

  test('rejects .local domains', () => {
    expect(validateUrl('example.local')).toBe(false)
  })

  test('rejects .internal domains', () => {
    expect(validateUrl('example.internal')).toBe(false)
  })

  test('rejects URLs with spaces', () => {
    expect(validateUrl('example .com')).toBe(false)
    expect(validateUrl('example.com path')).toBe(false)
  })

  test('rejects empty string', () => {
    expect(validateUrl('')).toBe(false)
  })

  test('rejects null/undefined', () => {
    expect(validateUrl(null as any)).toBe(false)
    expect(validateUrl(undefined as any)).toBe(false)
  })

  test('trims before validation', () => {
    expect(validateUrl('  example.com  ')).toBe(true)
  })

  test('accepts complex domains', () => {
    expect(validateUrl('sub-domain.example-site.co.uk')).toBe(true)
  })
})

