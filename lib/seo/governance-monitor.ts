/**
 * Governance Monitoring and Alerting
 * 
 * Tracks governance violations and provides monitoring hooks
 */

import { SeoDirectives } from './index-policy'

export interface GovernanceViolation {
  url: string
  routeType: string
  violationType: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  timestamp: string
  directives?: SeoDirectives
}

const violations: GovernanceViolation[] = []
const MAX_VIOLATIONS = 1000 // Prevent memory leak

/**
 * Record a governance violation
 */
export function recordViolation(
  url: string,
  routeType: string,
  violationType: string,
  severity: GovernanceViolation['severity'],
  message: string,
  directives?: SeoDirectives
): void {
  // Prevent memory leak
  if (violations.length >= MAX_VIOLATIONS) {
    violations.shift() // Remove oldest
  }
  
  violations.push({
    url,
    routeType,
    violationType,
    severity,
    message,
    timestamp: new Date().toISOString(),
    directives
  })
  
  // In production, send to monitoring service (DataDog, Sentry, etc.)
  if (process.env.NODE_ENV === 'production') {
    // Send to monitoring service
    console.error('[GovernanceViolation]', {
      url,
      routeType,
      violationType,
      severity,
      message
    })
  }
}

/**
 * Check directives for governance violations
 */
export function checkDirectivesForViolations(
  url: string,
  routeType: string,
  directives: SeoDirectives
): void {
  // Check for missing required blocks on programmatic pages
  if ((routeType === 'city-service' || routeType === 'city-industry-service') && directives.index) {
    if (directives.reasonCodes.includes('MISSING_REQUIRED_BLOCKS')) {
      recordViolation(
        url,
        routeType,
        'MISSING_REQUIRED_BLOCKS',
        'high',
        'Page indexed but missing required uniqueness blocks',
        directives
      )
    }
  }
  
  // Check for stale data
  if (directives.reasonCodes.includes('STALE_DATA')) {
    recordViolation(
      url,
      routeType,
      'STALE_DATA',
      'medium',
      'Page has stale data (>90 days)',
      directives
    )
  }
  
  // Check for low quality scores on indexed pages
  if (directives.index && directives.score < 0.5 && routeType !== 'core' && routeType !== 'service' && routeType !== 'city') {
    recordViolation(
      url,
      routeType,
      'LOW_QUALITY_SCORE',
      'medium',
      `Page indexed with low quality score: ${directives.score.toFixed(2)}`,
      directives
    )
  }
  
  // Check for City×Industry hub incorrectly indexed
  if (routeType === 'city-industry' && directives.index) {
    recordViolation(
      url,
      routeType,
      'CITY_INDUSTRY_HUB_INDEXED',
      'critical',
      'City×Industry hub incorrectly indexed (should always be noindex)',
      directives
    )
  }
  
  // Check for City×Industry hub in sitemap
  if (routeType === 'city-industry' && directives.inSitemap) {
    recordViolation(
      url,
      routeType,
      'CITY_INDUSTRY_HUB_IN_SITEMAP',
      'critical',
      'City×Industry hub incorrectly included in sitemap (should always be excluded)',
      directives
    )
  }
}

/**
 * Get all recorded violations
 */
export function getViolations(): GovernanceViolation[] {
  return [...violations]
}

/**
 * Get violations by severity
 */
export function getViolationsBySeverity(severity: GovernanceViolation['severity']): GovernanceViolation[] {
  return violations.filter(v => v.severity === severity)
}

/**
 * Get violations by route type
 */
export function getViolationsByRouteType(routeType: string): GovernanceViolation[] {
  return violations.filter(v => v.routeType === routeType)
}

/**
 * Clear violations (useful for testing)
 */
export function clearViolations(): void {
  violations.length = 0
}

/**
 * Get violation stats
 */
export function getViolationStats(): {
  total: number
  bySeverity: Record<string, number>
  byRouteType: Record<string, number>
  byViolationType: Record<string, number>
} {
  const bySeverity: Record<string, number> = {}
  const byRouteType: Record<string, number> = {}
  const byViolationType: Record<string, number> = {}
  
  violations.forEach(v => {
    bySeverity[v.severity] = (bySeverity[v.severity] || 0) + 1
    byRouteType[v.routeType] = (byRouteType[v.routeType] || 0) + 1
    byViolationType[v.violationType] = (byViolationType[v.violationType] || 0) + 1
  })
  
  return {
    total: violations.length,
    bySeverity,
    byRouteType,
    byViolationType
  }
}
