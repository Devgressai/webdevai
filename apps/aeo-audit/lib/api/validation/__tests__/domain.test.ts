/**
 * Unit tests for domain validation
 */

import {
  isValidHostname,
  isLocalhost,
  isPrivateIP,
  couldResolveToPrivateIP,
  validateDomain,
  normalizeDomain,
} from '../domain'

describe('isValidHostname', () => {
  it('should validate correct hostnames', () => {
    expect(isValidHostname('example.com')).toBe(true)
    expect(isValidHostname('sub.example.com')).toBe(true)
    expect(isValidHostname('www.example.co.uk')).toBe(true)
    expect(isValidHostname('test-site.example.com')).toBe(true)
  })

  it('should reject invalid hostnames', () => {
    expect(isValidHostname('')).toBe(false)
    expect(isValidHostname('invalid')).toBe(false) // No TLD
    expect(isValidHostname('.example.com')).toBe(false) // Starts with dot
    expect(isValidHostname('example.com.')).toBe(false) // Ends with dot
    expect(isValidHostname('example..com')).toBe(false) // Double dot
  })

  it('should handle URLs with protocol', () => {
    expect(isValidHostname('https://example.com')).toBe(true)
    expect(isValidHostname('http://example.com')).toBe(true)
  })

  it('should handle URLs with paths', () => {
    expect(isValidHostname('example.com/path')).toBe(true)
    expect(isValidHostname('https://example.com/path/to/page')).toBe(true)
  })
})

describe('isLocalhost', () => {
  it('should detect localhost variations', () => {
    expect(isLocalhost('localhost')).toBe(true)
    expect(isLocalhost('127.0.0.1')).toBe(true)
    expect(isLocalhost('::1')).toBe(true)
    expect(isLocalhost('0.0.0.0')).toBe(true)
    expect(isLocalhost('local')).toBe(true)
  })

  it('should detect localhost with protocol', () => {
    expect(isLocalhost('http://localhost')).toBe(true)
    expect(isLocalhost('https://127.0.0.1')).toBe(true)
  })

  it('should detect localhost with port', () => {
    expect(isLocalhost('localhost:3000')).toBe(true)
    expect(isLocalhost('127.0.0.1:8080')).toBe(true)
  })

  it('should not detect valid domains as localhost', () => {
    expect(isLocalhost('example.com')).toBe(false)
    expect(isLocalhost('localhost.example.com')).toBe(false)
  })
})

describe('isPrivateIP', () => {
  it('should detect private IP ranges', () => {
    expect(isPrivateIP('10.0.0.1')).toBe(true)
    expect(isPrivateIP('172.16.0.1')).toBe(true)
    expect(isPrivateIP('192.168.1.1')).toBe(true)
    expect(isPrivateIP('169.254.1.1')).toBe(true)
    expect(isPrivateIP('127.0.0.1')).toBe(true)
  })

  it('should not detect public IPs', () => {
    expect(isPrivateIP('8.8.8.8')).toBe(false)
    expect(isPrivateIP('1.1.1.1')).toBe(false)
    expect(isPrivateIP('172.15.0.1')).toBe(false) // Outside 172.16.0.0/12
    expect(isPrivateIP('192.169.1.1')).toBe(false) // Outside 192.168.0.0/16
  })
})

describe('couldResolveToPrivateIP', () => {
  it('should detect IP addresses that are private', () => {
    expect(couldResolveToPrivateIP('10.0.0.1')).toBe(true)
    expect(couldResolveToPrivateIP('192.168.1.1')).toBe(true)
  })

  it('should detect suspicious domain patterns', () => {
    expect(couldResolveToPrivateIP('example.local')).toBe(true)
    expect(couldResolveToPrivateIP('example.internal')).toBe(true)
    expect(couldResolveToPrivateIP('example.lan')).toBe(true)
    expect(couldResolveToPrivateIP('example.localhost')).toBe(true)
  })

  it('should not flag valid public domains', () => {
    expect(couldResolveToPrivateIP('example.com')).toBe(false)
    expect(couldResolveToPrivateIP('google.com')).toBe(false)
  })
})

describe('validateDomain', () => {
  it('should validate correct domains', () => {
    const result = validateDomain('example.com')
    expect(result.valid).toBe(true)
    expect(result.error).toBeUndefined()
  })

  it('should reject localhost', () => {
    const result = validateDomain('localhost')
    expect(result.valid).toBe(false)
    expect(result.error).toContain('Localhost')
  })

  it('should reject private IPs', () => {
    const result = validateDomain('192.168.1.1')
    expect(result.valid).toBe(false)
    expect(result.error).toContain('Private IP')
  })

  it('should reject invalid hostnames', () => {
    const result = validateDomain('invalid')
    expect(result.valid).toBe(false)
    expect(result.error).toContain('hostname')
  })

  it('should reject empty domain', () => {
    const result = validateDomain('')
    expect(result.valid).toBe(false)
    expect(result.error).toContain('required')
  })

  it('should handle URLs with protocol', () => {
    const result = validateDomain('https://example.com')
    expect(result.valid).toBe(true)
  })
})

describe('normalizeDomain', () => {
  it('should remove protocol', () => {
    expect(normalizeDomain('https://example.com')).toBe('example.com')
    expect(normalizeDomain('http://example.com')).toBe('example.com')
  })

  it('should remove paths', () => {
    expect(normalizeDomain('example.com/path')).toBe('example.com')
    expect(normalizeDomain('https://example.com/path/to/page')).toBe('example.com')
  })

  it('should lowercase', () => {
    expect(normalizeDomain('EXAMPLE.COM')).toBe('example.com')
    expect(normalizeDomain('Example.Com')).toBe('example.com')
  })

  it('should trim whitespace', () => {
    expect(normalizeDomain('  example.com  ')).toBe('example.com')
  })
})

