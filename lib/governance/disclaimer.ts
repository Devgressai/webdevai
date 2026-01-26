/**
 * Governance Disclaimers + Data Integrity Controls
 * 
 * Core data model and validation for governance disclaimers.
 * Ensures trust, compliance, and data integrity across all pages.
 */

export type ClaimType = 'pricing' | 'market' | 'competitor' | 'dataset' | 'ai-claims' | 'performance' | 'roi'

export type SourceType = 'internal' | 'external' | 'third_party' | 'proprietary'

export type ReviewStatus = 'pending' | 'approved' | 'rejected'

export type IntegrityStatus = 'valid' | 'flagged' | 'invalid'

export type StaleLevel = 'current' | 'warning' | 'error'

export interface DataSource {
  name: string
  url?: string
  type: SourceType
  access_date: string // ISO 8601 date
}

export interface GovernanceDisclaimer {
  sources: DataSource[]
  lastUpdated: string // ISO 8601 datetime
  methodologySummary: string
  methodologyUrl?: string
  limitations: string[]
  claimTypes: ClaimType[]
  complianceRefs?: string[]
  approvalToken?: string // For high-risk claims
}

export interface DisclaimerValidationResult {
  ok: boolean
  warnings: DisclaimerWarning[]
  errors: DisclaimerError[]
  staleLevel: StaleLevel
}

export interface DisclaimerWarning {
  code: string
  message: string
  field?: string
}

export interface DisclaimerError {
  code: string
  message: string
  field?: string
}

/**
 * Check staleness of disclaimer data
 * Returns: current (<30 days), warning (30-90 days), error (>90 days)
 */
export function checkStaleness(lastUpdated: string): {
  staleLevel: StaleLevel
  daysSinceUpdate: number
  message: string
} {
  const updatedDate = new Date(lastUpdated)
  const now = new Date()
  const daysSinceUpdate = Math.floor((now.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24))
  
  if (daysSinceUpdate < 30) {
    return {
      staleLevel: 'current',
      daysSinceUpdate,
      message: `Data is current (updated ${daysSinceUpdate} days ago)`
    }
  } else if (daysSinceUpdate < 90) {
    return {
      staleLevel: 'warning',
      daysSinceUpdate,
      message: `Data is ${daysSinceUpdate} days old. Review recommended.`
    }
  } else if (daysSinceUpdate < 180) {
    return {
      staleLevel: 'error',
      daysSinceUpdate,
      message: `Data is ${daysSinceUpdate} days old. Update required.`
    }
  } else {
    return {
      staleLevel: 'error',
      daysSinceUpdate,
      message: `Data is ${daysSinceUpdate} days old. Critical update required.`
    }
  }
}

/**
 * Validate governance disclaimer
 */
export function validateGovernanceDisclaimer(
  disclaimer: GovernanceDisclaimer,
  context?: {
    pageType?: string
    pathname?: string
    isHighRisk?: boolean
  }
): DisclaimerValidationResult {
  const warnings: DisclaimerWarning[] = []
  const errors: DisclaimerError[] = []
  
  // Check staleness
  const staleness = checkStaleness(disclaimer.lastUpdated)
  if (staleness.staleLevel === 'warning') {
    warnings.push({
      code: 'STALE_DATA_WARNING',
      message: staleness.message,
      field: 'lastUpdated'
    })
  } else if (staleness.staleLevel === 'error') {
    errors.push({
      code: 'STALE_DATA_ERROR',
      message: staleness.message,
      field: 'lastUpdated'
    })
  }
  
  // Validate data sources
  if (disclaimer.sources.length === 0) {
    // Only error if claim types require sources
    const requiresSources = disclaimer.claimTypes.length > 0 && 
      !disclaimer.claimTypes.every(ct => ct === 'pricing') // Pricing can be estimates without sources
    
    if (requiresSources) {
      errors.push({
        code: 'MISSING_DATA_SOURCES',
        message: 'At least one data source is required for claim types',
        field: 'sources'
      })
    }
  } else {
    // Validate each source
    disclaimer.sources.forEach((source, index) => {
      if (!source.name || source.name.trim().length === 0) {
        errors.push({
          code: 'INVALID_SOURCE_NAME',
          message: `Data source ${index + 1} must have a name`,
          field: `sources[${index}].name`
        })
      }
      
      if (!source.type) {
        errors.push({
          code: 'INVALID_SOURCE_TYPE',
          message: `Data source ${index + 1} must have a type`,
          field: `sources[${index}].type`
        })
      }
      
      if (source.url) {
        try {
          new URL(source.url)
        } catch {
          errors.push({
            code: 'INVALID_SOURCE_URL',
            message: `Data source ${index + 1} has invalid URL`,
            field: `sources[${index}].url`
          })
        }
      }
      
      if (!source.access_date) {
        warnings.push({
          code: 'MISSING_ACCESS_DATE',
          message: `Data source ${index + 1} should have access date`,
          field: `sources[${index}].access_date`
        })
      } else {
        // Validate ISO 8601 date format
        const date = new Date(source.access_date)
        if (isNaN(date.getTime())) {
          errors.push({
            code: 'INVALID_ACCESS_DATE',
            message: `Data source ${index + 1} has invalid access date format`,
            field: `sources[${index}].access_date`
          })
        }
      }
    })
  }
  
  // Validate last updated
  const lastUpdatedDate = new Date(disclaimer.lastUpdated)
  if (isNaN(lastUpdatedDate.getTime())) {
    errors.push({
      code: 'INVALID_LAST_UPDATED',
      message: 'lastUpdated must be a valid ISO 8601 datetime',
      field: 'lastUpdated'
    })
  }
  
  // Validate methodology summary
  if (!disclaimer.methodologySummary || disclaimer.methodologySummary.trim().length === 0) {
    // Only require for high-risk claim types
    const requiresMethodology = disclaimer.claimTypes.some(ct => 
      ['performance', 'roi', 'ai-claims', 'dataset'].includes(ct)
    )
    
    if (requiresMethodology) {
      errors.push({
        code: 'MISSING_METHODOLOGY',
        message: 'Methodology summary is required for high-risk claim types',
        field: 'methodologySummary'
      })
    }
  } else {
    // Check word count (min 100 words for high-risk)
    const wordCount = disclaimer.methodologySummary.trim().split(/\s+/).filter(w => w.length > 0).length
    const requiresDetailedMethodology = disclaimer.claimTypes.some(ct => 
      ['performance', 'roi', 'ai-claims', 'dataset'].includes(ct)
    )
    
    if (requiresDetailedMethodology && wordCount < 100) {
      errors.push({
        code: 'INSUFFICIENT_METHODOLOGY',
        message: `Methodology summary must be at least 100 words for high-risk claim types (currently ${wordCount} words)`,
        field: 'methodologySummary'
      })
    } else if (wordCount < 50) {
      warnings.push({
        code: 'SHORT_METHODOLOGY',
        message: `Methodology summary is short (${wordCount} words). Consider adding more detail.`,
        field: 'methodologySummary'
      })
    }
  }
  
  // Validate limitations
  if (disclaimer.limitations.length === 0) {
    errors.push({
      code: 'MISSING_LIMITATIONS',
      message: 'At least one limitation must be listed',
      field: 'limitations'
    })
  } else {
    disclaimer.limitations.forEach((limitation, index) => {
      if (!limitation || limitation.trim().length === 0) {
        errors.push({
          code: 'EMPTY_LIMITATION',
          message: `Limitation ${index + 1} cannot be empty`,
          field: `limitations[${index}]`
        })
      }
    })
  }
  
  // Validate claim types
  if (disclaimer.claimTypes.length === 0) {
    warnings.push({
      code: 'NO_CLAIM_TYPES',
      message: 'No claim types specified. Consider adding claim types for better governance.',
      field: 'claimTypes'
    })
  }
  
  // Validate compliance references (if provided)
  if (disclaimer.complianceRefs) {
    disclaimer.complianceRefs.forEach((ref, index) => {
      if (!ref || ref.trim().length === 0) {
        warnings.push({
          code: 'EMPTY_COMPLIANCE_REF',
          message: `Compliance reference ${index + 1} is empty`,
          field: `complianceRefs[${index}]`
        })
      }
    })
  }
  
  // Validate approval token format (if provided)
  if (disclaimer.approvalToken) {
    if (disclaimer.approvalToken.trim().length < 8) {
      errors.push({
        code: 'INVALID_APPROVAL_TOKEN',
        message: 'Approval token must be at least 8 characters',
        field: 'approvalToken'
      })
    }
  }
  
  return {
    ok: errors.length === 0,
    warnings,
    errors,
    staleLevel: staleness.staleLevel
  }
}

/**
 * Get disclaimer status summary
 */
export function getDisclaimerStatus(disclaimer: GovernanceDisclaimer): {
  status: 'valid' | 'warning' | 'error'
  staleLevel: StaleLevel
  hasRequiredFields: boolean
  hasHighRiskClaims: boolean
  requiresReview: boolean
  message: string
} {
  const validation = validateGovernanceDisclaimer(disclaimer)
  const staleness = checkStaleness(disclaimer.lastUpdated)
  
  const hasRequiredFields = 
    disclaimer.sources.length > 0 &&
    disclaimer.lastUpdated &&
    disclaimer.limitations.length > 0
  
  const hasHighRiskClaims = disclaimer.claimTypes.some(ct => 
    ['performance', 'roi', 'ai-claims'].includes(ct)
  )
  
  const requiresReview = hasHighRiskClaims && !disclaimer.approvalToken
  
  let status: 'valid' | 'warning' | 'error' = 'valid'
  if (validation.errors.length > 0 || staleness.staleLevel === 'error') {
    status = 'error'
  } else if (validation.warnings.length > 0 || staleness.staleLevel === 'warning' || requiresReview) {
    status = 'warning'
  }
  
  let message = 'Disclaimer is valid'
  if (status === 'error') {
    message = `Disclaimer has ${validation.errors.length} error(s)`
  } else if (status === 'warning') {
    message = `Disclaimer has ${validation.warnings.length} warning(s)`
  }
  
  return {
    status,
    staleLevel: staleness.staleLevel,
    hasRequiredFields,
    hasHighRiskClaims,
    requiresReview,
    message
  }
}

/**
 * Generate default limitations based on claim types
 */
export function generateDefaultLimitations(claimTypes: ClaimType[]): string[] {
  const limitations: string[] = []
  
  if (claimTypes.includes('pricing')) {
    limitations.push('Pricing ranges are estimates and may vary based on project scope, industry, and specific requirements.')
    limitations.push('Actual pricing will be determined after consultation and project assessment.')
  }
  
  if (claimTypes.includes('market') || claimTypes.includes('dataset')) {
    limitations.push('Benchmarks are based on aggregated data and may not reflect individual results.')
    limitations.push('Market conditions and industry trends can change rapidly.')
  }
  
  if (claimTypes.includes('competitor')) {
    limitations.push('Comparisons are based on publicly available information and may not reflect current features or pricing.')
    limitations.push('Feature sets and capabilities may change over time.')
  }
  
  if (claimTypes.includes('performance') || claimTypes.includes('roi')) {
    limitations.push('Results are not guaranteed and may vary based on individual circumstances.')
    limitations.push('Past performance does not guarantee future results.')
  }
  
  if (claimTypes.includes('ai-claims')) {
    limitations.push('AI platform capabilities and features are subject to change.')
    limitations.push('Actual performance may vary based on use case, content quality, and platform updates.')
  }
  
  // Always include generic limitation
  if (limitations.length === 0) {
    limitations.push('Data is provided for informational purposes only and accuracy is not guaranteed.')
  }
  
  return limitations
}

/**
 * Generate no-guarantee disclaimer text
 */
export function generateNoGuaranteeDisclaimer(claimTypes: ClaimType[]): string {
  if (claimTypes.includes('performance') || claimTypes.includes('roi')) {
    return 'Results are not guaranteed and may vary based on individual circumstances. Past performance does not guarantee future results.'
  }
  
  if (claimTypes.includes('pricing')) {
    return 'Pricing is subject to change without notice. Actual pricing will be determined after consultation.'
  }
  
  return 'Results are not guaranteed and may vary based on individual circumstances.'
}
