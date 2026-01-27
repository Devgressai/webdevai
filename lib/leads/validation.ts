/**
 * Lead Validation Utilities
 */

import type { LeadSubmission } from './types'

export interface ValidationResult {
  valid: boolean
  errors: Record<string, string>
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates URL format (optional field)
 */
export function isValidUrl(url: string): boolean {
  if (!url) return true // Optional field
  
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`)
    return true
  } catch {
    return false
  }
}

/**
 * Sanitizes string input
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 10000) // Max length
}

/**
 * Validates lead submission
 */
export function validateLeadSubmission(data: Partial<LeadSubmission>): ValidationResult {
  const errors: Record<string, string> = {}

  // Required fields
  const name = sanitizeString((data.name || '').toString())
  if (!name || name.length < 2) {
    errors.name = 'Name is required and must be at least 2 characters'
  }

  const email = sanitizeString((data.email || '').toString())
  if (!email) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address'
  }

  const message = sanitizeString((data.message || '').toString())
  if (!message || message.length < 10) {
    errors.message = 'Message is required and must be at least 10 characters'
  }

  const serviceInterest = sanitizeString((data.serviceInterest || '').toString())
  if (!serviceInterest) {
    errors.serviceInterest = 'Service interest is required'
  }

  // Optional fields validation
  if (data.company) {
    const company = sanitizeString(data.company.toString())
    if (company.length > 200) {
      errors.company = 'Company name is too long (max 200 characters)'
    }
  }

  if (data.website) {
    const website = sanitizeString(data.website.toString())
    if (!isValidUrl(website)) {
      errors.website = 'Please enter a valid website URL'
    }
  }

  if (data.city) {
    const city = sanitizeString(data.city.toString())
    if (city.length > 100) {
      errors.city = 'City name is too long (max 100 characters)'
    }
  }

  // Honeypot check (should be empty)
  if (data._honeypot && data._honeypot.toString().trim() !== '') {
    // Silently reject - don't reveal this is a honeypot
    errors._honeypot = 'Invalid submission'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
}
