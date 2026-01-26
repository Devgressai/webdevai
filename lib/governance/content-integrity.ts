/**
 * Governance: Content Integrity Checks
 * 
 * Prevents fabricated data, invented results, and misleading claims.
 * Ensures all data is traceable, accurate, and properly attributed.
 */

import { GovernanceDisclaimer, ClaimType, DataSource } from './disclaimer'
import { checkStaleness } from './disclaimer'

export interface IntegrityCheckResult {
  check: string
  status: 'pass' | 'fail' | 'warning'
  message: string
  field?: string
}

export interface ContentIntegrityResult {
  valid: boolean
  checks: IntegrityCheckResult[]
  hasFabricatedDataRisk: boolean
  hasMissingAttribution: boolean
  hasStaleData: boolean
}

/**
 * Validate data source attribution
 * Ensures all data has traceable sources
 */
function validateSourceAttribution(
  sources: DataSource[],
  claimTypes: ClaimType[]
): IntegrityCheckResult[] {
  const results: IntegrityCheckResult[] = []
  
  // High-risk claim types require sources
  const highRiskTypes: ClaimType[] = ['performance', 'roi', 'ai-claims', 'dataset', 'market']
  const hasHighRiskClaims = claimTypes.some(ct => highRiskTypes.includes(ct))
  
  if (hasHighRiskClaims && sources.length === 0) {
    results.push({
      check: 'source_attribution',
      status: 'fail',
      message: 'High-risk claim types require at least one data source',
      field: 'sources'
    })
  } else if (sources.length === 0 && claimTypes.length > 0) {
    results.push({
      check: 'source_attribution',
      status: 'warning',
      message: 'Consider adding data sources for better traceability',
      field: 'sources'
    })
  } else {
    results.push({
      check: 'source_attribution',
      status: 'pass',
      message: `Data sources provided (${sources.length} source(s))`
    })
  }
  
  // Validate source URLs are accessible (basic format check)
  sources.forEach((source, index) => {
    if (source.url) {
      try {
        const url = new URL(source.url)
        if (!['http:', 'https:'].includes(url.protocol)) {
          results.push({
            check: 'source_url_format',
            status: 'fail',
            message: `Source ${index + 1} URL must use HTTP or HTTPS`,
            field: `sources[${index}].url`
          })
        }
      } catch {
        results.push({
          check: 'source_url_format',
          status: 'fail',
          message: `Source ${index + 1} URL is invalid`,
          field: `sources[${index}].url`
        })
      }
    }
  })
  
  return results
}

/**
 * Validate methodology completeness
 * Ensures methodology is detailed enough for high-risk claims
 */
function validateMethodology(
  methodologySummary: string,
  claimTypes: ClaimType[]
): IntegrityCheckResult[] {
  const results: IntegrityCheckResult[] = []
  
  const highRiskTypes: ClaimType[] = ['performance', 'roi', 'ai-claims', 'dataset']
  const hasHighRiskClaims = claimTypes.some(ct => highRiskTypes.includes(ct))
  
  if (!methodologySummary || methodologySummary.trim().length === 0) {
    if (hasHighRiskClaims) {
      results.push({
        check: 'methodology_completeness',
        status: 'fail',
        message: 'Methodology summary is required for high-risk claim types',
        field: 'methodologySummary'
      })
    } else {
      results.push({
        check: 'methodology_completeness',
        status: 'warning',
        message: 'Methodology summary recommended for better transparency',
        field: 'methodologySummary'
      })
    }
    return results
  }
  
  const wordCount = methodologySummary.trim().split(/\s+/).filter(w => w.length > 0).length
  
  if (hasHighRiskClaims) {
    if (wordCount < 100) {
      results.push({
        check: 'methodology_completeness',
        status: 'fail',
        message: `Methodology summary must be at least 100 words for high-risk claims (currently ${wordCount} words)`,
        field: 'methodologySummary'
      })
    } else {
      results.push({
        check: 'methodology_completeness',
        status: 'pass',
        message: `Methodology summary is sufficient (${wordCount} words)`
      })
    }
  } else {
    if (wordCount < 50) {
      results.push({
        check: 'methodology_completeness',
        status: 'warning',
        message: `Methodology summary is short (${wordCount} words). Consider adding more detail.`,
        field: 'methodologySummary'
      })
    } else {
      results.push({
        check: 'methodology_completeness',
        status: 'pass',
        message: `Methodology summary is adequate (${wordCount} words)`
      })
    }
  }
  
  return results
}

/**
 * Validate limitations are present
 * Ensures honest disclosure of data limitations
 */
function validateLimitations(limitations: string[]): IntegrityCheckResult[] {
  const results: IntegrityCheckResult[] = []
  
  if (limitations.length === 0) {
    results.push({
      check: 'limitations_present',
      status: 'fail',
      message: 'At least one limitation must be listed',
      field: 'limitations'
    })
  } else {
    const emptyLimitations = limitations.filter(l => !l || l.trim().length === 0)
    if (emptyLimitations.length > 0) {
      results.push({
        check: 'limitations_present',
        status: 'fail',
        message: `${emptyLimitations.length} empty limitation(s) found`,
        field: 'limitations'
      })
    } else {
      results.push({
        check: 'limitations_present',
        status: 'pass',
        message: `Limitations provided (${limitations.length} limitation(s))`
      })
    }
  }
  
  return results
}

/**
 * Validate case study/proof attribution
 * Prevents fake metrics by requiring source attribution or approval
 */
function validateProofAttribution(
  disclaimer: GovernanceDisclaimer,
  hasCaseStudyMetrics: boolean
): IntegrityCheckResult[] {
  const results: IntegrityCheckResult[] = []
  
  if (hasCaseStudyMetrics) {
    // Case studies with metrics require either:
    // 1. Source attribution (case study URL or reference)
    // 2. Approval token (human review)
    
    const hasSource = disclaimer.sources.some(s => 
      s.name.toLowerCase().includes('case study') ||
      s.name.toLowerCase().includes('client') ||
      s.url?.includes('case-studies')
    )
    
    if (!hasSource && !disclaimer.approvalToken) {
      results.push({
        check: 'proof_attribution',
        status: 'fail',
        message: 'Case study metrics require source attribution or approval token',
        field: 'sources'
      })
    } else {
      results.push({
        check: 'proof_attribution',
        status: 'pass',
        message: hasSource ? 'Case study has source attribution' : 'Case study has approval token'
      })
    }
  }
  
  return results
}

/**
 * Main content integrity check function
 */
export function checkContentIntegrity(
  disclaimer: GovernanceDisclaimer,
  context?: {
    hasCaseStudyMetrics?: boolean
    hasPerformanceClaims?: boolean
    hasROIEstimates?: boolean
  }
): ContentIntegrityResult {
  const checks: IntegrityCheckResult[] = []
  
  // Check source attribution
  checks.push(...validateSourceAttribution(disclaimer.sources, disclaimer.claimTypes))
  
  // Check methodology
  checks.push(...validateMethodology(disclaimer.methodologySummary, disclaimer.claimTypes))
  
  // Check limitations
  checks.push(...validateLimitations(disclaimer.limitations))
  
  // Check staleness
  const staleness = checkStaleness(disclaimer.lastUpdated)
  if (staleness.staleLevel === 'error') {
    checks.push({
      check: 'data_freshness',
      status: 'fail',
      message: `Data is ${staleness.daysSinceUpdate} days old. Critical update required.`,
      field: 'lastUpdated'
    })
  } else if (staleness.staleLevel === 'warning') {
    checks.push({
      check: 'data_freshness',
      status: 'warning',
      message: `Data is ${staleness.daysSinceUpdate} days old. Review recommended.`,
      field: 'lastUpdated'
    })
  } else {
    checks.push({
      check: 'data_freshness',
      status: 'pass',
      message: `Data is current (updated ${staleness.daysSinceUpdate} days ago)`
    })
  }
  
  // Check proof attribution (if applicable)
  if (context?.hasCaseStudyMetrics) {
    checks.push(...validateProofAttribution(disclaimer, true))
  }
  
  // Determine overall validity
  const hasFailures = checks.some(c => c.status === 'fail')
  const hasWarnings = checks.some(c => c.status === 'warning')
  
  const hasFabricatedDataRisk = 
    disclaimer.sources.length === 0 && 
    disclaimer.claimTypes.some(ct => ['performance', 'roi'].includes(ct))
  
  const hasMissingAttribution = 
    disclaimer.sources.length === 0 && 
    disclaimer.claimTypes.length > 0
  
  const hasStaleData = staleness.staleLevel !== 'current'
  
  return {
    valid: !hasFailures,
    checks,
    hasFabricatedDataRisk,
    hasMissingAttribution,
    hasStaleData
  }
}

/**
 * XSS-safe text normalization
 * Escapes HTML entities for safe rendering
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

/**
 * Normalize disclaimer text for safe rendering
 * Removes potentially dangerous characters while preserving readability
 */
export function normalizeDisclaimerText(text: string): string {
  // Remove control characters except newlines and tabs
  let normalized = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
  
  // Normalize whitespace (preserve intentional spacing)
  normalized = normalized.replace(/[ \t]+/g, ' ')
  
  // Trim each line
  normalized = normalized.split('\n').map(line => line.trim()).join('\n')
  
  return normalized
}

/**
 * Validate URL for safe linking
 */
export function validateSourceUrl(url: string): { valid: boolean; error?: string } {
  if (!url || url.trim().length === 0) {
    return { valid: false, error: 'URL cannot be empty' }
  }
  
  try {
    const parsed = new URL(url)
    
    // Only allow HTTP/HTTPS
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return { valid: false, error: 'URL must use HTTP or HTTPS protocol' }
    }
    
    // Block dangerous protocols
    if (['javascript:', 'data:', 'vbscript:'].includes(parsed.protocol)) {
      return { valid: false, error: 'URL uses unsafe protocol' }
    }
    
    return { valid: true }
  } catch {
    return { valid: false, error: 'URL is not valid' }
  }
}
