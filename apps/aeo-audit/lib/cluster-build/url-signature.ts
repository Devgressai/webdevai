/**
 * URL signature normalization utilities
 */

/**
 * Normalize URL to create a signature
 * Rules:
 * - Remove protocol (http/https)
 * - Remove www subdomain
 * - Remove trailing slash
 * - Lowercase
 * - Remove query parameters
 * - Remove fragments
 * - Normalize path segments (remove duplicates, normalize case)
 */
export function normalizeUrlSignature(url: string): string {
  try {
    const urlObj = new URL(url)

    // Remove protocol
    let signature = urlObj.hostname

    // Remove www
    if (signature.startsWith('www.')) {
      signature = signature.substring(4)
    }

    // Normalize path
    let path = urlObj.pathname
      .toLowerCase()
      .replace(/\/+/g, '/') // Multiple slashes to single
      .replace(/\/$/, '') // Remove trailing slash
      .split('/')
      .filter((segment) => segment.length > 0)
      .join('/')

    if (path && !path.startsWith('/')) {
      path = '/' + path
    }

    signature += path || '/'

    return signature
  } catch {
    // If URL parsing fails, return normalized version of input
    return url
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '')
      .split('?')[0]
      .split('#')[0]
  }
}

/**
 * Extract URL pattern for template detection
 */
export function extractUrlPattern(url: string): {
  pattern: string
  segments: string[]
  hasNumericSegments: boolean
  hasUuidSegments: boolean
} {
  const normalized = normalizeUrlSignature(url)
  const segments = normalized.split('/').filter((s) => s.length > 0)

  // Detect numeric segments (IDs)
  const hasNumericSegments = segments.some((s) => /^\d+$/.test(s))

  // Detect UUID segments
  const hasUuidSegments = segments.some((s) =>
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)
  )

  // Create pattern by replacing dynamic segments
  const pattern = segments
    .map((segment) => {
      if (/^\d+$/.test(segment)) {
        return '{id}'
      }
      if (
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          segment
        )
      ) {
        return '{uuid}'
      }
      if (/^[a-z0-9-]+$/i.test(segment)) {
        return segment
      }
      return '{slug}'
    })
    .join('/')

  return {
    pattern: '/' + pattern,
    segments,
    hasNumericSegments,
    hasUuidSegments,
  }
}

