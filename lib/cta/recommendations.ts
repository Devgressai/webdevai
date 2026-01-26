/**
 * CTA Governance: CTA Recommendations
 * 
 * Provides helper functions for templates to get recommended CTAs
 * based on page type, route params, and funnel stage.
 */

import { PageType, FunnelStage, getFunnelStage } from './funnel-stages'
import { CTAPattern, getRecommendedCTAPattern, CTA_PATTERNS_BY_STAGE } from './patterns'
import { attachTrackingMetadata, inferCTATypeFromLabel } from './tracking'

export interface RecommendedCTA {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'outline'
  trackingId: string
  trackingEvent: string
  isPrimary: boolean
}

/**
 * Get recommended primary CTA for a page
 */
export function getRecommendedPrimaryCTA(
  pageType: PageType,
  pathname: string,
  routeParams?: Record<string, string>
): RecommendedCTA | null {
  const funnelStage = getFunnelStage(pageType, pathname)
  const pattern = getRecommendedCTAPattern(funnelStage)
  
  if (!pattern) {
    return null
  }
  
  // Use first label from pattern
  const label = pattern.labels[0]
  
  // Build href from first destination pattern
  // In production, you'd resolve this based on route params
  let href = '/contact' // Default fallback
  if (pattern.destinationPatterns[0]) {
    const patternStr = pattern.destinationPatterns[0].toString()
    if (patternStr.includes('/contact')) {
      href = '/contact'
    } else if (patternStr.includes('/tools')) {
      href = '/tools/seo-audit'
    } else if (patternStr.includes('/resources')) {
      href = '/resources'
    } else if (patternStr.includes('/pricing')) {
      href = '/pricing'
    } else if (patternStr.includes('/book')) {
      href = '/book'
    }
  }
  
  // Add offer parameter if needed
  if (funnelStage === 'MOFU' && pattern.type === 'audit') {
    href = '/contact?offer=audit'
  } else if (funnelStage === 'MOFU' && pattern.type === 'strategy') {
    href = '/contact?offer=roadmap'
  } else if (funnelStage === 'BOFU' && pattern.type === 'quote') {
    href = '/contact?offer=quote'
  } else if (funnelStage === 'BOFU' && pattern.type === 'booking') {
    href = '/book'
  }
  
  // Build identifier from route params
  const identifierParts: string[] = []
  if (routeParams?.city) identifierParts.push(routeParams.city)
  if (routeParams?.service) identifierParts.push(routeParams.service)
  if (routeParams?.industry) identifierParts.push(routeParams.industry)
  const identifier = identifierParts.join('-') || 'default'
  
  // Attach tracking metadata
  const ctaType = inferCTATypeFromLabel(label, funnelStage)
  const cta = attachTrackingMetadata(
    {
      label,
      href,
      variant: 'primary',
      isPrimary: true
    },
    pageType,
    identifier,
    funnelStage,
    ctaType || undefined
  )
  
  return {
    ...cta,
    variant: 'primary'
  }
}

/**
 * Get recommended secondary CTA for a page
 */
export function getRecommendedSecondaryCTA(
  pageType: PageType,
  pathname: string,
  routeParams?: Record<string, string>
): RecommendedCTA | null {
  const funnelStage = getFunnelStage(pageType, pathname)
  const patterns = CTA_PATTERNS_BY_STAGE[funnelStage]
  
  // Secondary CTA is typically "learn-more" type
  const learnMorePattern = patterns.find(p => p.type === 'learn-more')
  
  if (!learnMorePattern) {
    return null
  }
  
  const label = learnMorePattern.labels[0]
  let href = '/services'
  
  if (learnMorePattern.destinationPatterns[0]) {
    const patternStr = learnMorePattern.destinationPatterns[0].toString()
    if (patternStr.includes('/case-studies')) {
      href = '/case-studies'
    } else if (patternStr.includes('/services')) {
      href = '/services'
    } else if (patternStr.includes('/resources')) {
      href = '/resources'
    }
  }
  
  // Build identifier
  const identifierParts: string[] = []
  if (routeParams?.city) identifierParts.push(routeParams.city)
  if (routeParams?.service) identifierParts.push(routeParams.service)
  const identifier = identifierParts.join('-') || 'default'
  
  // Attach tracking metadata
  const cta = attachTrackingMetadata(
    {
      label,
      href,
      variant: 'outline',
      isPrimary: false
    },
    pageType,
    identifier,
    funnelStage,
    'learn-more'
  )
  
  return {
    ...cta,
    variant: 'outline'
  }
}

/**
 * Get both recommended CTAs (primary + optional secondary)
 */
export function getRecommendedCTAs(
  pageType: PageType,
  pathname: string,
  routeParams?: Record<string, string>
): {
  primary: RecommendedCTA | null
  secondary: RecommendedCTA | null
} {
  return {
    primary: getRecommendedPrimaryCTA(pageType, pathname, routeParams),
    secondary: getRecommendedSecondaryCTA(pageType, pathname, routeParams)
  }
}
