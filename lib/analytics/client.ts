/**
 * Analytics Client
 * 
 * Vendor-agnostic event tracking that sends events to /api/events
 * Can be extended to forward to GA4, PostHog, Segment, etc.
 */

import type { AnalyticsEvent, TrackOptions } from './types'

/**
 * Extract UTM parameters from URL
 */
function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  
  if (params.get('utm_source')) utm.utmSource = params.get('utm_source')!
  if (params.get('utm_medium')) utm.utmMedium = params.get('utm_medium')!
  if (params.get('utm_campaign')) utm.utmCampaign = params.get('utm_campaign')!
  if (params.get('utm_term')) utm.utmTerm = params.get('utm_term')!
  if (params.get('utm_content')) utm.utmContent = params.get('utm_content')!
  
  return utm
}

/**
 * Determine page type from pathname
 */
function getPageType(pathname: string): string | undefined {
  if (pathname === '/') return 'homepage'
  if (pathname.startsWith('/services/')) return 'service'
  if (pathname.startsWith('/blog/')) return 'blog'
  if (pathname.startsWith('/solutions/')) return 'solution'
  if (pathname.startsWith('/case-studies')) return 'case-study'
  if (pathname.startsWith('/locations/')) return 'location'
  if (pathname.match(/^\/[^/]+$/)) return 'city-hub'
  if (pathname.match(/^\/[^/]+\/[^/]+$/)) return 'city-service'
  if (pathname.match(/^\/[^/]+\/industry\/[^/]+$/)) return 'city-industry'
  if (pathname.match(/^\/[^/]+\/industry\/[^/]+\/[^/]+$/)) return 'city-industry-service'
  if (pathname === '/contact') return 'contact'
  if (pathname === '/pricing') return 'pricing'
  if (pathname === '/about') return 'about'
  return undefined
}

/**
 * Determine funnel stage from page type and event
 */
function getFunnelStage(pageType?: string, event?: string): string | undefined {
  // Awareness stage
  if (pageType === 'homepage' || pageType === 'blog') return 'awareness'
  
  // Interest stage
  if (pageType === 'service' || pageType === 'solution') return 'interest'
  
  // Consideration stage
  if (pageType === 'case-study' || pageType === 'pricing') return 'consideration'
  
  // Intent stage
  if (pageType === 'contact' || event === 'form_submit' || event === 'cta_click') return 'intent'
  
  // Conversion stage
  if (event === 'lead_capture' || event === 'form_submit') return 'conversion'
  
  return undefined
}

/**
 * Build standardized event payload
 */
function buildEventPayload(options: TrackOptions): AnalyticsEvent {
  if (typeof window === 'undefined') {
    throw new Error('track() can only be called in the browser')
  }

  const pathname = window.location.pathname
  const referrer = document.referrer || undefined
  const utmParams = getUTMParams()
  const pageType = options.pageType || getPageType(pathname)
  const funnelStage = options.funnelStage || getFunnelStage(pageType, options.event)

  const payload: AnalyticsEvent = {
    event: options.event,
    timestamp: Date.now(),
    pathname,
    referrer,
    ...utmParams,
  }

  // Add optional fields if provided
  if (pageType) payload.pageType = pageType
  if (funnelStage) payload.funnelStage = funnelStage
  if (options.trackingId) payload.trackingId = options.trackingId

  // Add any additional metadata
  Object.keys(options).forEach(key => {
    if (!['event', 'trackingId', 'pageType', 'funnelStage'].includes(key)) {
      payload[key] = options[key]
    }
  })

  return payload
}

/**
 * Send event to API endpoint
 */
async function sendEventToAPI(payload: AnalyticsEvent): Promise<void> {
  try {
    // Use fetch with keepalive for reliability
    await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true, // Ensures request completes even if page unloads
    })
  } catch (error) {
    // Silently fail - analytics should never break the app
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Analytics] Failed to send event:', error)
    }
  }
}

/**
 * Forward event to vendor analytics (if available)
 * 
 * This allows the abstraction to work alongside existing GA4/PostHog setups
 * without requiring them to function.
 */
function forwardToVendors(payload: AnalyticsEvent): void {
  // Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', payload.event, {
        event_category: payload.pageType || 'general',
        event_label: payload.trackingId,
        page_path: payload.pathname,
        ...payload,
      })
    } catch (error) {
      // Silently fail
    }
  }

  // Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    try {
      (window as any).dataLayer.push({
        event: payload.event,
        ...payload,
      })
    } catch (error) {
      // Silently fail
    }
  }

  // PostHog (if available)
  if (typeof window !== 'undefined' && (window as any).posthog) {
    try {
      (window as any).posthog.capture(payload.event, payload)
    } catch (error) {
      // Silently fail
    }
  }
}

/**
 * Track an event
 * 
 * @param eventName - The event name (e.g., 'cta_click', 'form_submit')
 * @param options - Event options including trackingId, pageType, funnelStage, and custom metadata
 * 
 * @example
 * track('cta_click', {
 *   trackingId: 'hero-cta-1',
 *   ctaText: 'Get Started',
 *   ctaLocation: 'hero'
 * })
 */
export function track(eventName: string, options: Omit<TrackOptions, 'event'> = {}): void {
  // SSR-safe: only run in browser
  if (typeof window === 'undefined') {
    return
  }

  // Non-blocking: use requestIdleCallback or setTimeout
  const sendEvent = () => {
    try {
      const payload = buildEventPayload({
        event: eventName,
        ...options,
      })

      // Send to our API endpoint
      sendEventToAPI(payload)

      // Forward to vendor analytics (if available)
      forwardToVendors(payload)

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics]', eventName, payload)
      }
    } catch (error) {
      // Silently fail - analytics should never break the app
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Error]', error)
      }
    }
  }

  // Use requestIdleCallback if available, otherwise setTimeout
  // This ensures tracking never blocks the main thread
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    (window as any).requestIdleCallback(sendEvent, { timeout: 2000 })
  } else {
    setTimeout(sendEvent, 0)
  }
}

// Type declarations for window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void
    }
    requestIdleCallback?: (
      callback: () => void,
      options?: { timeout?: number }
    ) => number
  }
}
