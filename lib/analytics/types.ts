/**
 * Analytics Event Types
 * 
 * Standardized event payload structure for vendor-agnostic tracking
 */

export interface AnalyticsEvent {
  // Core event data
  event: string
  timestamp: number
  
  // Page context
  pathname: string
  pageType?: string
  funnelStage?: string
  
  // Tracking identifiers
  trackingId?: string
  
  // Referral data
  referrer?: string
  
  // UTM parameters
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  
  // Additional metadata
  [key: string]: string | number | boolean | undefined
}

export interface TrackOptions {
  event: string
  trackingId?: string
  pageType?: string
  funnelStage?: string
  [key: string]: string | number | boolean | undefined
}
