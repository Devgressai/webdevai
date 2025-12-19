/**
 * Domain validation utilities
 * Validates hostnames and prevents SSRF attacks
 */

/**
 * Validates that a domain is a valid hostname
 */
export function isValidHostname(domain: string): boolean {
  if (!domain || typeof domain !== 'string') {
    return false
  }

  // Remove protocol and path if present
  const cleaned = domain
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .trim()

  if (cleaned.length === 0 || cleaned.length > 253) {
    return false
  }

  // Hostname regex: alphanumeric, dots, hyphens
  // Must start and end with alphanumeric
  const hostnameRegex = /^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i

  return hostnameRegex.test(cleaned)
}

/**
 * Checks if a domain is localhost or local
 */
export function isLocalhost(domain: string): boolean {
  const cleaned = domain
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .toLowerCase()
    .trim()

  const localhostPatterns = [
    'localhost',
    '127.0.0.1',
    '::1',
    '0.0.0.0',
    'local',
  ]

  return localhostPatterns.some((pattern) => cleaned === pattern || cleaned.startsWith(`${pattern}:`))
}

/**
 * Checks if an IP address is in a private range
 */
export function isPrivateIP(ip: string): boolean {
  // IPv4 private ranges
  const privateRanges = [
    /^10\./,                          // 10.0.0.0/8
    /^172\.(1[6-9]|2[0-9]|3[01])\./, // 172.16.0.0/12
    /^192\.168\./,                    // 192.168.0.0/16
    /^169\.254\./,                    // 169.254.0.0/16 (link-local)
    /^127\./,                         // 127.0.0.0/8 (loopback)
  ]

  return privateRanges.some((range) => range.test(ip))
}

/**
 * Resolves domain to IP and checks if it's private
 * Note: This is a basic check - in production, you might want to
 * actually resolve the domain, but that could be slow/expensive
 */
export function couldResolveToPrivateIP(domain: string): boolean {
  const cleaned = domain
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .trim()

  // Check if it's already an IP address
  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/
  if (ipRegex.test(cleaned)) {
    return isPrivateIP(cleaned)
  }

  // Check for suspicious patterns that might resolve to private IPs
  const suspiciousPatterns = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[01])\./,
    /^192\.168\./,
    /^169\.254\./,
    /^127\./,
    /\.local$/,
    /\.internal$/,
    /\.lan$/,
    /\.localhost$/,
  ]

  return suspiciousPatterns.some((pattern) => pattern.test(cleaned))
}

/**
 * Validates domain and prevents SSRF
 */
export interface DomainValidationResult {
  valid: boolean
  error?: string
}

export function validateDomain(domain: string): DomainValidationResult {
  // Check if domain is provided
  if (!domain || typeof domain !== 'string') {
    return {
      valid: false,
      error: 'Domain is required',
    }
  }

  // Check if it's localhost
  if (isLocalhost(domain)) {
    return {
      valid: false,
      error: 'Localhost and local domains are not allowed',
    }
  }

  // Check if it could resolve to private IP
  if (couldResolveToPrivateIP(domain)) {
    return {
      valid: false,
      error: 'Private IP addresses and internal domains are not allowed',
    }
  }

  // Check if it's a valid hostname
  if (!isValidHostname(domain)) {
    return {
      valid: false,
      error: 'Invalid hostname format',
    }
  }

  return { valid: true }
}

/**
 * Normalize domain (remove protocol, trailing slashes, lowercase)
 */
export function normalizeDomain(domain: string): string {
  return domain
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .toLowerCase()
    .trim()
}

