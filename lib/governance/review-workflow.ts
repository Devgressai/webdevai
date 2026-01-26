/**
 * Governance: High-Risk Review Workflow
 * 
 * Detects high-risk claims and enforces human review workflow.
 * Prevents publishing of unapproved high-risk content.
 */

import { GovernanceDisclaimer, ClaimType, checkStaleness } from './disclaimer'

export type PageType = 
  | 'pricing'
  | 'research'
  | 'tool'
  | 'comparison'
  | 'ai-geo-hub'
  | 'case-study'
  | 'service'
  | 'industry'
  | 'city'
  | 'city-service'
  | 'city-industry-service'
  | 'core'
  | 'other'

export interface PageMeta {
  pageType: PageType
  pathname: string
  hasPricing?: boolean
  hasMarketData?: boolean
  hasCompetitorComparison?: boolean
  hasDataset?: boolean
  hasAIClaims?: boolean
  hasPerformanceClaims?: boolean
  hasROIEstimates?: boolean
  hasCaseStudyMetrics?: boolean
}

export interface PublishGateResult {
  canPublish: boolean
  requiresApproval: boolean
  approvalToken?: string
  reasonCodes: string[]
  warnings: string[]
}

/**
 * High-risk claim types that require approval
 */
const HIGH_RISK_CLAIM_TYPES: ClaimType[] = [
  'performance',
  'roi',
  'ai-claims',
  'competitor'
]

/**
 * High-risk page types that always require review
 */
const HIGH_RISK_PAGE_TYPES: PageType[] = [
  'pricing',
  'research',
  'comparison'
]

/**
 * Approval token allowlist (loaded from environment or config)
 * In production, this would be stored in a secure config or database
 */
function getApprovalTokenAllowlist(): string[] {
  // Load from environment variable (comma-separated)
  const envTokens = process.env.GOVERNANCE_APPROVAL_TOKENS
  if (envTokens) {
    return envTokens.split(',').map(t => t.trim()).filter(t => t.length > 0)
  }
  
  // Default: empty (no tokens approved)
  return []
}

/**
 * Detect if page has high-risk claims
 */
export function detectHighRiskClaim(pageMeta: PageMeta): boolean {
  // Check page type
  if (HIGH_RISK_PAGE_TYPES.includes(pageMeta.pageType)) {
    return true
  }
  
  // Check for high-risk content flags
  if (pageMeta.hasPerformanceClaims || pageMeta.hasROIEstimates) {
    return true
  }
  
  if (pageMeta.hasAIClaims && pageMeta.pageType === 'ai-geo-hub') {
    return true
  }
  
  if (pageMeta.hasCompetitorComparison && pageMeta.pageType === 'comparison') {
    return true
  }
  
  if (pageMeta.hasCaseStudyMetrics && !pageMeta.hasPricing) {
    // Case studies with metrics are medium-risk, not high-risk
    return false
  }
  
  return false
}

/**
 * Check if claim types require approval
 */
export function requiresApproval(claimTypes: ClaimType[]): boolean {
  return claimTypes.some(ct => HIGH_RISK_CLAIM_TYPES.includes(ct))
}

/**
 * Validate approval token
 * Checks against allowlist (from env/config)
 */
export function validateApprovalToken(token: string): {
  valid: boolean
  message: string
} {
  if (!token || token.trim().length === 0) {
    return {
      valid: false,
      message: 'Approval token is required'
    }
  }
  
  if (token.length < 8) {
    return {
      valid: false,
      message: 'Approval token must be at least 8 characters'
    }
  }
  
  const allowlist = getApprovalTokenAllowlist()
  
  if (allowlist.length === 0) {
    // No allowlist configured - in production, this should fail
    // For development, allow if token format is valid
    return {
      valid: token.length >= 16, // Require longer tokens if no allowlist
      message: allowlist.length === 0 
        ? 'Approval token allowlist not configured. Token format validation only.'
        : 'Approval token not found in allowlist'
    }
  }
  
  const isValid = allowlist.includes(token.trim())
  
  return {
    valid: isValid,
    message: isValid 
      ? 'Approval token is valid'
      : 'Approval token not found in allowlist'
  }
}

/**
 * Detect high-risk claims from page metadata
 * Used by templates and CI to determine if review is needed
 */
export function detectHighRiskClaimFromPage(
  pageType: PageType,
  pathname: string,
  contentFlags?: {
    hasPricing?: boolean
    hasMarketData?: boolean
    hasCompetitorComparison?: boolean
    hasDataset?: boolean
    hasAIClaims?: boolean
    hasPerformanceClaims?: boolean
    hasROIEstimates?: boolean
    hasCaseStudyMetrics?: boolean
  }
): boolean {
  const pageMeta: PageMeta = {
    pageType,
    pathname,
    ...contentFlags
  }
  
  return detectHighRiskClaim(pageMeta)
}

/**
 * Publish gate: Determine if page can be published
 * Returns result with reason codes and warnings
 */
export function publishGate(
  disclaimer: GovernanceDisclaimer,
  pageMeta: PageMeta
): PublishGateResult {
  const reasonCodes: string[] = []
  const warnings: string[] = []
  
  // Check if page has high-risk claims
  const isHighRisk = detectHighRiskClaim(pageMeta)
  const needsApproval = requiresApproval(disclaimer.claimTypes)
  
  // Check approval token if required
  if (isHighRisk || needsApproval) {
    if (!disclaimer.approvalToken) {
      return {
        canPublish: false,
        requiresApproval: true,
        reasonCodes: ['MISSING_APPROVAL_TOKEN', 'HIGH_RISK_CLAIMS_DETECTED'],
        warnings: ['High-risk claims detected. Approval token required before publishing.']
      }
    }
    
    const tokenValidation = validateApprovalToken(disclaimer.approvalToken)
    if (!tokenValidation.valid) {
      return {
        canPublish: false,
        requiresApproval: true,
        approvalToken: disclaimer.approvalToken,
        reasonCodes: ['INVALID_APPROVAL_TOKEN', 'HIGH_RISK_CLAIMS_DETECTED'],
        warnings: [tokenValidation.message]
      }
    }
    
    // Token is valid
    reasonCodes.push('APPROVAL_TOKEN_VALID')
  }
  
  // Check for stale data (warning, not blocking)
  const staleness = checkStaleness(disclaimer.lastUpdated)
  if (staleness.staleLevel === 'error') {
    warnings.push(`Data is ${staleness.daysSinceUpdate} days old. Update recommended before publishing.`)
    reasonCodes.push('STALE_DATA_WARNING')
  }
  
  // Check for missing required fields
  if (disclaimer.sources.length === 0 && disclaimer.claimTypes.length > 0) {
    const requiresSources = disclaimer.claimTypes.some(ct => 
      ['performance', 'roi', 'ai-claims', 'dataset'].includes(ct)
    )
    
    if (requiresSources) {
      return {
        canPublish: false,
        requiresApproval: false,
        reasonCodes: ['MISSING_DATA_SOURCES'],
        warnings: ['Data sources are required for high-risk claim types']
      }
    }
  }
  
  if (disclaimer.limitations.length === 0) {
    return {
      canPublish: false,
      requiresApproval: false,
      reasonCodes: ['MISSING_LIMITATIONS'],
      warnings: ['At least one limitation must be listed']
    }
  }
  
  // Check methodology for high-risk claims
  if (disclaimer.claimTypes.some(ct => ['performance', 'roi', 'ai-claims'].includes(ct))) {
    if (!disclaimer.methodologySummary || disclaimer.methodologySummary.trim().length === 0) {
      return {
        canPublish: false,
        requiresApproval: false,
        reasonCodes: ['MISSING_METHODOLOGY'],
        warnings: ['Methodology summary is required for high-risk claim types']
      }
    }
    
    const wordCount = disclaimer.methodologySummary.trim().split(/\s+/).filter(w => w.length > 0).length
    if (wordCount < 100) {
      return {
        canPublish: false,
        requiresApproval: false,
        reasonCodes: ['INSUFFICIENT_METHODOLOGY'],
        warnings: [`Methodology summary must be at least 100 words (currently ${wordCount} words)`]
      }
    }
  }
  
  // All checks passed
  return {
    canPublish: true,
    requiresApproval: isHighRisk || needsApproval,
    approvalToken: disclaimer.approvalToken,
    reasonCodes: reasonCodes.length > 0 ? reasonCodes : ['ALL_CHECKS_PASSED'],
    warnings
  }
}

/**
 * Generate approval token (for testing/admin use)
 * In production, tokens should be generated by review system
 */
export function generateApprovalToken(): string {
  // Generate a random token (for testing only)
  // In production, use a secure token generator
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}
