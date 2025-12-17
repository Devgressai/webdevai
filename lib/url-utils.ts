/**
 * URL normalization and validation utilities
 */

/**
 * Normalizes a URL string:
 * - Trims whitespace
 * - Adds https:// if protocol is missing
 * - Lowercases the hostname
 * - Removes trailing slashes (except for root)
 */
export function normalizeUrl(url: string): string {
  if (!url || typeof url !== 'string') {
    return ''
  }

  let normalized = url.trim()

  // If empty after trim, return empty
  if (!normalized) {
    return ''
  }

  // Add protocol if missing
  if (!normalized.match(/^https?:\/\//i)) {
    normalized = `https://${normalized}`
  }

  try {
    const urlObj = new URL(normalized)
    
    // Lowercase hostname
    urlObj.hostname = urlObj.hostname.toLowerCase()
    
    // Remove trailing slash (except for root)
    if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
      urlObj.pathname = urlObj.pathname.slice(0, -1)
    }

    return urlObj.toString()
  } catch {
    // If URL parsing fails, return the normalized string with https://
    return normalized
  }
}

/**
 * Validates if a string looks like a valid domain/URL
 * Basic validation - checks for domain-like patterns
 */
export function validateUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false
  }

  const trimmed = url.trim()
  if (!trimmed) {
    return false
  }

  // Basic domain pattern: at least one dot, valid characters
  // Allows: example.com, www.example.com, https://example.com, etc.
  const domainPattern = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/
  const urlPattern = /^https?:\/\/([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/

  // Check if it's a valid domain (with or without protocol)
  const withoutProtocol = trimmed.replace(/^https?:\/\//i, '')
  
  // Must have at least one dot
  if (!withoutProtocol.includes('.')) {
    return false
  }

  // Must not contain spaces
  if (withoutProtocol.includes(' ')) {
    return false
  }

  // Must match domain pattern
  if (!domainPattern.test(withoutProtocol)) {
    return false
  }

  // Block obviously invalid patterns
  const invalidPatterns = [
    /^localhost/i,
    /^127\.0\.0\.1/,
    /^192\.168\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /\.local$/i,
    /\.internal$/i,
  ]

  for (const pattern of invalidPatterns) {
    if (pattern.test(withoutProtocol)) {
      return false
    }
  }

  return true
}

