/**
 * CTA Governance: Validation Functions
 * 
 * Validates CTA compliance against governance rules:
 * - Exactly 1 primary CTA (except exemptions)
 * - Max 1 secondary CTA
 * - Label format validation
 * - Destination validation by funnel stage
 * - Tracking requirements
 */

import { FunnelStage, PageType, isExemptFromPrimaryCTA } from './funnel-stages'
import { isValidCTALabelForStage, isValidCTADestinationForStage, getAllowedCTATypes } from './patterns'

export interface CTA {
  label: string
  href: string
  variant?: string
  trackingId?: string
  trackingEvent?: string
  isPrimary: boolean
}

export interface CTAValidationResult {
  ok: boolean
  errors: CTAValidationError[]
  warnings: CTAValidationWarning[]
}

export interface CTAValidationError {
  code: string
  message: string
  ctaIndex?: number
  field?: string
}

export interface CTAValidationWarning {
  code: string
  message: string
  ctaIndex?: number
  field?: string
}

/**
 * Validate CTA label format
 * Rules: 2-5 words, max 30 chars, action verb + object heuristic
 */
function validateCTALabel(label: string): { valid: boolean; error?: string } {
  const trimmed = label.trim()
  
  // Check length
  if (trimmed.length === 0) {
    return { valid: false, error: 'CTA label cannot be empty' }
  }
  
  if (trimmed.length > 30) {
    return { valid: false, error: `CTA label exceeds 30 characters (${trimmed.length})` }
  }
  
  // Check word count (2-5 words)
  const words = trimmed.split(/\s+/).filter(w => w.length > 0)
  if (words.length < 2) {
    return { valid: false, error: 'CTA label must have at least 2 words' }
  }
  
  if (words.length > 5) {
    return { valid: false, error: `CTA label exceeds 5 words (${words.length})` }
  }
  
  // Heuristic: Check for action verb (first word should be action-oriented)
  const actionVerbs = [
    'get', 'run', 'try', 'download', 'book', 'schedule', 'request', 'start',
    'view', 'see', 'explore', 'learn', 'read', 'contact', 'use', 'access'
  ]
  const firstWord = words[0].toLowerCase()
  if (!actionVerbs.some(verb => firstWord.startsWith(verb))) {
    return { valid: false, error: 'CTA label should start with an action verb' }
  }
  
  // Avoid generic labels
  const genericLabels = ['click here', 'submit', 'go', 'click', 'here']
  if (genericLabels.includes(trimmed.toLowerCase())) {
    return { valid: false, error: 'CTA label is too generic. Use specific action-oriented text.' }
  }
  
  return { valid: true }
}

/**
 * Validate CTA destination URL format
 */
function validateCTADestination(href: string): { valid: boolean; error?: string } {
  if (!href || href.trim().length === 0) {
    return { valid: false, error: 'CTA destination cannot be empty' }
  }
  
  // Must be relative URL or absolute URL
  if (!href.startsWith('/') && !href.startsWith('http://') && !href.startsWith('https://')) {
    return { valid: false, error: 'CTA destination must be a valid URL (relative or absolute)' }
  }
  
  // Relative URLs should not have protocol
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      new URL(href)
    } catch {
      return { valid: false, error: 'CTA destination is not a valid URL' }
    }
  }
  
  return { valid: true }
}

/**
 * Main CTA validation function
 */
export function validateCTAs(params: {
  pageType: PageType
  pathname: string
  funnelStage: FunnelStage
  ctas: CTA[]
}): CTAValidationResult {
  const { pageType, pathname, funnelStage, ctas } = params
  const errors: CTAValidationError[] = []
  const warnings: CTAValidationWarning[] = []
  
  // Separate primary and secondary CTAs
  const primaryCTAs = ctas.filter(c => c.isPrimary)
  const secondaryCTAs = ctas.filter(c => !c.isPrimary)
  
  // Check primary CTA count
  const isExempt = isExemptFromPrimaryCTA(pageType, pathname)
  
  if (!isExempt) {
    if (primaryCTAs.length === 0) {
      errors.push({
        code: 'MISSING_PRIMARY_CTA',
        message: `Page type "${pageType}" requires exactly 1 primary CTA`
      })
    } else if (primaryCTAs.length > 1) {
      errors.push({
        code: 'MULTIPLE_PRIMARY_CTAS',
        message: `Page has ${primaryCTAs.length} primary CTAs. Only 1 primary CTA is allowed.`
      })
    }
  } else {
    // Exempt pages can have 0-1 primary CTA
    if (primaryCTAs.length > 1) {
      errors.push({
        code: 'MULTIPLE_PRIMARY_CTAS',
        message: `Exempt page type "${pageType}" can have at most 1 primary CTA`
      })
    }
  }
  
  // Check secondary CTA count
  if (secondaryCTAs.length > 1) {
    errors.push({
      code: 'TOO_MANY_SECONDARY_CTAS',
      message: `Page has ${secondaryCTAs.length} secondary CTAs. Maximum 1 secondary CTA is allowed.`
    })
  }
  
  // Validate each CTA
  ctas.forEach((cta, index) => {
    // Validate label format
    const labelValidation = validateCTALabel(cta.label)
    if (!labelValidation.valid) {
      errors.push({
        code: 'INVALID_LABEL_FORMAT',
        message: labelValidation.error || 'Invalid CTA label format',
        ctaIndex: index,
        field: 'label'
      })
    }
    
    // Validate destination format
    const destValidation = validateCTADestination(cta.href)
    if (!destValidation.valid) {
      errors.push({
        code: 'INVALID_DESTINATION_FORMAT',
        message: destValidation.error || 'Invalid CTA destination format',
        ctaIndex: index,
        field: 'href'
      })
    }
    
    // Validate primary CTA matches funnel stage
    if (cta.isPrimary && !isExempt) {
      // Check label matches stage
      if (!isValidCTALabelForStage(cta.label, funnelStage)) {
        errors.push({
          code: 'CTA_LABEL_FUNNEL_MISMATCH',
          message: `Primary CTA label "${cta.label}" does not match funnel stage ${funnelStage}`,
          ctaIndex: index,
          field: 'label'
        })
      }
      
      // Check destination matches stage
      if (!isValidCTADestinationForStage(cta.href, funnelStage)) {
        errors.push({
          code: 'CTA_DESTINATION_FUNNEL_MISMATCH',
          message: `Primary CTA destination "${cta.href}" does not match funnel stage ${funnelStage}`,
          ctaIndex: index,
          field: 'href'
        })
      }
    }
    
    // Check tracking requirements
    if (cta.isPrimary) {
      if (funnelStage === 'BOFU') {
        // BOFU requires tracking
        if (!cta.trackingEvent) {
          errors.push({
            code: 'MISSING_TRACKING_BOFU',
            message: 'BOFU pages require tracking event on primary CTA',
            ctaIndex: index,
            field: 'trackingEvent'
          })
        }
        if (!cta.trackingId) {
          warnings.push({
            code: 'MISSING_TRACKING_ID_BOFU',
            message: 'BOFU pages should have tracking ID on primary CTA',
            ctaIndex: index,
            field: 'trackingId'
          })
        }
      } else {
        // TOFU/MOFU: tracking recommended
        if (!cta.trackingEvent) {
          warnings.push({
            code: 'MISSING_TRACKING_RECOMMENDED',
            message: `Tracking event recommended for ${funnelStage} pages`,
            ctaIndex: index,
            field: 'trackingEvent'
          })
        }
      }
    }
  })
  
  return {
    ok: errors.length === 0,
    errors,
    warnings
  }
}

/**
 * Validate a single CTA (for inline validation)
 */
export function validateSingleCTA(cta: CTA, funnelStage: FunnelStage, isPrimary: boolean): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  const labelValidation = validateCTALabel(cta.label)
  if (!labelValidation.valid) {
    errors.push(labelValidation.error || 'Invalid label')
  }
  
  const destValidation = validateCTADestination(cta.href)
  if (!destValidation.valid) {
    errors.push(destValidation.error || 'Invalid destination')
  }
  
  if (isPrimary) {
    if (!isValidCTALabelForStage(cta.label, funnelStage)) {
      errors.push(`Label does not match ${funnelStage} stage`)
    }
    if (!isValidCTADestinationForStage(cta.href, funnelStage)) {
      errors.push(`Destination does not match ${funnelStage} stage`)
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}
