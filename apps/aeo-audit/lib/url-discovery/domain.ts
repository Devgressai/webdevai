/**
 * Domain normalization utilities
 */

/**
 * Normalize domain: force https, normalize www
 */
export function normalizeDomain(domain: string): {
  normalized: string
  baseUrl: string
  hasWww: boolean
} {
  // Remove protocol
  let normalized = domain.replace(/^https?:\/\//, '').toLowerCase()

  // Remove trailing slash
  normalized = normalized.replace(/\/$/, '')

  // Remove path
  normalized = normalized.split('/')[0]

  // Normalize www
  const hasWww = normalized.startsWith('www.')
  const domainWithoutWww = normalized.replace(/^www\./, '')

  // Force https
  const baseUrl = `https://${normalized}`

  return {
    normalized: domainWithoutWww,
    baseUrl,
    hasWww,
  }
}

/**
 * Check if URL belongs to domain
 */
export function isSameDomain(url: string, baseDomain: string): boolean {
  try {
    const urlObj = new URL(url)
    const baseObj = new URL(baseDomain)
    return urlObj.hostname === baseObj.hostname || 
           urlObj.hostname === `www.${baseObj.hostname}` ||
           `www.${urlObj.hostname}` === baseObj.hostname
  } catch {
    return false
  }
}

/**
 * Normalize URL (remove fragments, query params for comparison)
 */
export function normalizeUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    // Remove fragment and query for comparison
    return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '')
  } catch {
    return url
  }
}

