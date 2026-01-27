/**
 * CTA Tracking Helper
 * 
 * Convenience functions for tracking CTA interactions
 */

import { track } from './client'

/**
 * Track a CTA click
 * 
 * @param trackingId - Unique identifier for the CTA (e.g., 'hero-cta-1')
 * @param options - Additional metadata
 * 
 * @example
 * trackCTA('hero-cta-1', {
 *   ctaText: 'Get Started',
 *   ctaLocation: 'hero'
 * })
 */
export function trackCTA(
  trackingId: string,
  options: {
    ctaText?: string
    ctaLocation?: string
    ctaType?: 'button' | 'link' | 'form'
    [key: string]: string | number | boolean | undefined
  } = {}
): void {
  track('cta_click', {
    trackingId,
    ...options,
    funnelStage: 'intent',
  })
}

/**
 * Track a form submission
 * 
 * @param formType - Type of form (e.g., 'contact', 'bofu', 'newsletter')
 * @param options - Additional metadata
 * 
 * @example
 * trackFormSubmit('bofu', {
 *   serviceInterest: 'web-development',
 *   trackingId: 'service-page-form'
 * })
 */
export function trackFormSubmit(
  formType: string,
  options: {
    trackingId?: string
    serviceInterest?: string
    [key: string]: string | number | boolean | undefined
  } = {}
): void {
  track('form_submit', {
    formType,
    ...options,
    funnelStage: 'conversion',
  })
}

/**
 * Track a lead capture
 * 
 * @param options - Lead capture metadata
 * 
 * @example
 * trackLeadCapture({
 *   trackingId: 'hero-cta-1',
 *   serviceInterest: 'web-development',
 *   formType: 'bofu'
 * })
 */
export function trackLeadCapture(options: {
  trackingId?: string
  serviceInterest?: string
  formType?: string
  [key: string]: string | number | boolean | undefined
} = {}): void {
  track('lead_capture', {
    ...options,
    funnelStage: 'conversion',
  })
}

/**
 * Track a page view (if needed for custom tracking)
 * 
 * @param options - Page view metadata
 */
export function trackPageView(options: {
  pageType?: string
  funnelStage?: string
  [key: string]: string | number | boolean | undefined
} = {}): void {
  track('page_view', options)
}
