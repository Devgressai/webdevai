/**
 * URL normalization and validation utilities
 */

/**
 * Normalizes a URL string:
 * - Trims whitespace
 * - Adds https:// if protocol is missing
 * - Lowercases the hostname (if it's a valid URL)
 * - Removes trailing slashes (except for root)
 * - Handles cases where input is just a name without TLD
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

  // Remove protocol if present (we'll add it back if needed)
  const withoutProtocol = normalized.replace(/^https?:\/\//i, '').trim()
  
  // If it looks like it might be a valid domain (has a dot), try to normalize as URL
  if (withoutProtocol.includes('.')) {
    // Add protocol if missing
    if (!normalized.match(/^https?:\/\//i)) {
      normalized = `https://${withoutProtocol}`
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
  } else {
    // No dot found - likely just a name/identifier
    // Return as-is (lowercased for consistency) without adding protocol
    return withoutProtocol.toLowerCase()
  }
}

/**
 * Validates if a string is acceptable as a website URL/identifier
 * Very lenient - accepts any non-empty text input
 */
export function validateUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false
  }

  const trimmed = url.trim()
  
  // Accept any non-empty text
  return trimmed.length > 0
}

