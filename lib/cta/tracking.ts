/**
 * CTA Governance: Tracking Event Naming and Helpers
 * 
 * Provides standardized tracking event naming and ID generation
 * for CTA analytics and conversion tracking.
 */

import { PageType, FunnelStage } from './funnel-stages'
import { CTAType, getTrackingEventForCTAType } from './patterns'

/**
 * Generate tracking event name from CTA action and object
 * Format: cta_{action}_{object} (normalized lowercase, underscores)
 * 
 * Examples:
 * - "Get Free Audit" → "cta_get_audit"
 * - "Book Call" → "cta_book_call"
 * - "Download Guide" → "cta_download_guide"
 */
export function generateTrackingEventName(label: string): string {
  // Normalize: lowercase, remove special chars, replace spaces with underscores
  const normalized = label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/_+/g, '_') // Collapse multiple underscores
    .replace(/^_|_$/g, '') // Remove leading/trailing underscores
  
  // Ensure it starts with "cta_"
  if (!normalized.startsWith('cta_')) {
    return `cta_${normalized}`
  }
  
  return normalized
}

/**
 * Generate tracking ID for a CTA
 * Format: {pageType}_{identifier}_{position}
 * 
 * Examples:
 * - service_seo_primary → "service_seo_primary"
 * - city-service_denver_web-development_primary → "city-service_denver_web-development_primary"
 */
export function generateTrackingId(
  pageType: PageType,
  identifier: string,
  position: 'primary' | 'secondary'
): string {
  // Normalize identifier (remove special chars, use hyphens)
  const normalizedIdentifier = identifier
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Collapse multiple hyphens
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
  
  return `${pageType}_${normalizedIdentifier}_${position}`
}

/**
 * Generate tracking ID from route params
 * Handles common route patterns
 */
export function generateTrackingIdFromRoute(
  pageType: PageType,
  params: Record<string, string | undefined>,
  position: 'primary' | 'secondary'
): string {
  // Build identifier from route params
  const parts: string[] = []
  
  if (params.city) parts.push(params.city)
  if (params.service) parts.push(params.service)
  if (params.industry) parts.push(params.industry)
  if (params.slug) parts.push(params.slug)
  
  const identifier = parts.length > 0 ? parts.join('-') : 'default'
  
  return generateTrackingId(pageType, identifier, position)
}

/**
 * Attach tracking metadata to a CTA object
 * Returns CTA with tracking fields populated
 */
export function attachTrackingMetadata(
  cta: {
    label: string
    href: string
    variant?: string
    isPrimary: boolean
  },
  pageType: PageType,
  identifier: string,
  funnelStage: FunnelStage,
  ctaType?: CTAType
): {
  label: string
  href: string
  variant?: string
  isPrimary: boolean
  trackingId: string
  trackingEvent: string
} {
  const trackingId = generateTrackingId(
    pageType,
    identifier,
    cta.isPrimary ? 'primary' : 'secondary'
  )
  
  // Use recommended tracking event if CTA type is known, otherwise generate from label
  const trackingEvent = ctaType
    ? (getTrackingEventForCTAType(ctaType, funnelStage) || generateTrackingEventName(cta.label))
    : generateTrackingEventName(cta.label)
  
  return {
    ...cta,
    trackingId,
    trackingEvent
  }
}

/**
 * Extract CTA type from label (heuristic)
 * Used when CTA type is not explicitly provided
 */
export function inferCTATypeFromLabel(label: string, funnelStage: FunnelStage): CTAType | null {
  const normalized = label.toLowerCase()
  
  // Tool indicators
  if (normalized.includes('tool') || normalized.includes('audit') || normalized.includes('try')) {
    return 'tool'
  }
  
  // Download indicators
  if (normalized.includes('download') || normalized.includes('get') && normalized.includes('guide')) {
    return 'download'
  }
  
  // Audit indicators
  if (normalized.includes('audit') || normalized.includes('assessment')) {
    return 'audit'
  }
  
  // Strategy indicators
  if (normalized.includes('strategy') || normalized.includes('roadmap')) {
    return 'strategy'
  }
  
  // Booking indicators
  if (normalized.includes('book') || normalized.includes('schedule') || normalized.includes('consultation')) {
    return 'booking'
  }
  
  // Quote indicators
  if (normalized.includes('quote') || normalized.includes('pricing')) {
    return 'quote'
  }
  
  // Contact indicators
  if (normalized.includes('contact') || normalized.includes('start') || normalized.includes('get started')) {
    return 'contact'
  }
  
  // Learn more (fallback)
  if (normalized.includes('learn') || normalized.includes('view') || normalized.includes('see')) {
    return 'learn-more'
  }
  
  return null
}
