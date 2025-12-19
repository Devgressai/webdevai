/**
 * Evidence redaction utilities
 * Redacts sensitive data from evidence content
 */

import crypto from 'crypto'

/**
 * Redaction patterns
 */
const REDACTION_PATTERNS = {
  // Email addresses
  email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,

  // Phone numbers (various formats)
  phone: /\b(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b/g,

  // Street addresses (basic patterns)
  streetAddress: /\b\d+\s+[A-Za-z0-9\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Way|Circle|Cir)\b/gi,

  // Token-like query params (session tokens, API keys, etc.)
  tokenParams: /[?&](?:token|key|api_key|session|auth|access_token|refresh_token|secret)=[A-Za-z0-9_-]{20,}/gi,

  // API keys in text
  apiKey: /\b(?:api[_-]?key|apikey)[=:]\s*[A-Za-z0-9_-]{20,}/gi,

  // Credit card numbers (basic pattern)
  creditCard: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
}

/**
 * Redaction replacement
 */
const REDACTION_REPLACEMENT = '[REDACTED]'

/**
 * Redact sensitive data from text
 */
export function redactSensitiveData(text: string): string {
  let redacted = text

  // Redact emails
  redacted = redacted.replace(REDACTION_PATTERNS.email, REDACTION_REPLACEMENT)

  // Redact phone numbers
  redacted = redacted.replace(REDACTION_PATTERNS.phone, REDACTION_REPLACEMENT)

  // Redact street addresses
  redacted = redacted.replace(REDACTION_PATTERNS.streetAddress, REDACTION_REPLACEMENT)

  // Redact token-like query params
  redacted = redacted.replace(REDACTION_PATTERNS.tokenParams, (match) => {
    const paramName = match.split('=')[0]
    return `${paramName}=${REDACTION_REPLACEMENT}`
  })

  // Redact API keys
  redacted = redacted.replace(REDACTION_PATTERNS.apiKey, (match) => {
    const prefix = match.split(/[=:]/)[0]
    return `${prefix}=${REDACTION_REPLACEMENT}`
  })

  // Redact credit card numbers
  redacted = redacted.replace(REDACTION_PATTERNS.creditCard, REDACTION_REPLACEMENT)

  return redacted
}

/**
 * Generate hash of content
 */
export function hashContent(content: string): string {
  return crypto.createHash('sha256').update(content).digest('hex')
}

/**
 * Count redacted items in text
 */
export function countRedactedItems(text: string): {
  emails: number
  phones: number
  addresses: number
  tokens: number
  total: number
} {
  const emails = (text.match(REDACTION_PATTERNS.email) || []).length
  const phones = (text.match(REDACTION_PATTERNS.phone) || []).length
  const addresses = (text.match(REDACTION_PATTERNS.streetAddress) || []).length
  const tokens =
    (text.match(REDACTION_PATTERNS.tokenParams) || []).length +
    (text.match(REDACTION_PATTERNS.apiKey) || []).length

  return {
    emails,
    phones,
    addresses,
    tokens,
    total: emails + phones + addresses + tokens,
  }
}

/**
 * Truncate content to max length
 */
export function truncateContent(content: string, maxLength: number): string {
  if (content.length <= maxLength) {
    return content
  }

  return content.substring(0, maxLength) + '...'
}

