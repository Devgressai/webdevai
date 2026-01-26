/**
 * CTA Governance: CTA Patterns by Funnel Stage
 * 
 * Defines allowed CTA types, labels, and destinations for each funnel stage.
 * Used for validation and recommendation.
 */

import { FunnelStage } from './funnel-stages'

export type CTAType = 'tool' | 'download' | 'audit' | 'strategy' | 'booking' | 'quote' | 'contact' | 'learn-more'

export interface CTAPattern {
  type: CTAType
  labels: string[]
  destinationPatterns: RegExp[]
  trackingEventPattern: string
}

/**
 * Allowed CTA patterns by funnel stage
 * Based on Page Template System v1.1 Section 19.3
 */
export const CTA_PATTERNS_BY_STAGE: Record<FunnelStage, CTAPattern[]> = {
  TOFU: [
    {
      type: 'tool',
      labels: ['Run SEO Audit', 'Try Tool', 'Start Analysis', 'Use Free Tool'],
      destinationPatterns: [
        /^\/tools\/.*$/,
        /^\/seo-audit$/,
        /^\/website-speed-test$/
      ],
      trackingEventPattern: 'cta_tool_use'
    },
    {
      type: 'download',
      labels: ['Download Guide', 'Get Free Report', 'Download Resource', 'Get Free Guide'],
      destinationPatterns: [
        /^\/resources\/.*$/,
        /^\/blog\/.*$/,
        /.*\.pdf$/,
        /.*\.zip$/
      ],
      trackingEventPattern: 'cta_download'
    },
    {
      type: 'learn-more',
      labels: ['Learn More', 'Read Guide', 'Explore Resources', 'View All Tools'],
      destinationPatterns: [
        /^\/resources\/.*$/,
        /^\/blog\/.*$/,
        /^\/tools\/.*$/
      ],
      trackingEventPattern: 'cta_learn_more'
    }
  ],
  MOFU: [
    {
      type: 'audit',
      labels: ['Get Free Audit', 'Request SEO Audit', 'Get Free SEO Audit', 'Request Assessment'],
      destinationPatterns: [
        /^\/contact\?.*offer=audit.*$/,
        /^\/seo-audit$/,
        /^\/contact$/
      ],
      trackingEventPattern: 'cta_audit_request'
    },
    {
      type: 'strategy',
      labels: ['Get Strategy', 'Get Roadmap', 'Get Strategy Roadmap', 'Request Roadmap'],
      destinationPatterns: [
        /^\/contact\?.*offer=roadmap.*$/,
        /^\/solutions\/.*$/,
        /^\/contact$/
      ],
      trackingEventPattern: 'cta_roadmap_request'
    },
    {
      type: 'learn-more',
      labels: ['See Case Studies', 'View Case Studies', 'View Resources', 'Try Tool'],
      destinationPatterns: [
        /^\/case-studies\/.*$/,
        /^\/case-studies$/,
        /^\/resources\/.*$/,
        /^\/tools\/.*$/
      ],
      trackingEventPattern: 'cta_learn_more'
    }
  ],
  BOFU: [
    {
      type: 'quote',
      labels: ['Get Quote', 'Request Quote', 'Get Free Quote'],
      destinationPatterns: [
        /^\/contact\?.*offer=quote.*$/,
        /^\/pricing$/,
        /^\/contact$/
      ],
      trackingEventPattern: 'cta_quote_request'
    },
    {
      type: 'booking',
      labels: ['Book Call', 'Book Free Consultation', 'Schedule Consultation', 'Schedule Call'],
      destinationPatterns: [
        /^\/book$/,
        /^\/contact\?.*offer=booking.*$/,
        /^\/contact$/
      ],
      trackingEventPattern: 'cta_booking_request'
    },
    {
      type: 'contact',
      labels: ['Start Project', 'Get Started', 'Contact Sales', 'Start Your Project'],
      destinationPatterns: [
        /^\/contact\?.*offer=project.*$/,
        /^\/contact$/,
        /^\/pricing$/
      ],
      trackingEventPattern: 'cta_contact_request'
    },
    {
      type: 'learn-more',
      labels: ['Learn More', 'View Services', 'See Case Studies'],
      destinationPatterns: [
        /^\/services\/.*$/,
        /^\/case-studies\/.*$/,
        /^\/solutions\/.*$/
      ],
      trackingEventPattern: 'cta_learn_more'
    }
  ]
}

/**
 * Get allowed CTA types for a funnel stage
 */
export function getAllowedCTATypes(stage: FunnelStage): CTAType[] {
  return CTA_PATTERNS_BY_STAGE[stage].map(p => p.type)
}

/**
 * Check if a CTA label matches allowed patterns for a funnel stage
 */
export function isValidCTALabelForStage(label: string, stage: FunnelStage): boolean {
  const patterns = CTA_PATTERNS_BY_STAGE[stage]
  const normalizedLabel = label.trim().toLowerCase()
  
  return patterns.some(pattern =>
    pattern.labels.some(allowedLabel =>
      allowedLabel.toLowerCase() === normalizedLabel ||
      normalizedLabel.includes(allowedLabel.toLowerCase())
    )
  )
}

/**
 * Check if a destination URL matches allowed patterns for a funnel stage
 */
export function isValidCTADestinationForStage(destination: string, stage: FunnelStage): boolean {
  const patterns = CTA_PATTERNS_BY_STAGE[stage]
  
  // Normalize destination (remove query params for pattern matching)
  const normalizedDest = destination.split('?')[0]
  
  return patterns.some(pattern =>
    pattern.destinationPatterns.some(regex => regex.test(normalizedDest))
  )
}

/**
 * Get recommended tracking event for a CTA type and stage
 */
export function getTrackingEventForCTAType(type: CTAType, stage: FunnelStage): string | null {
  const patterns = CTA_PATTERNS_BY_STAGE[stage]
  const pattern = patterns.find(p => p.type === type)
  return pattern?.trackingEventPattern || null
}

/**
 * Get recommended CTA pattern for a funnel stage
 * Returns the first (primary) pattern for the stage
 */
export function getRecommendedCTAPattern(stage: FunnelStage): CTAPattern | null {
  const patterns = CTA_PATTERNS_BY_STAGE[stage]
  return patterns[0] || null
}
