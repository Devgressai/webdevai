/**
 * Lightweight, SSR-safe event tracking utility
 * No external dependencies, non-blocking
 * 
 * Designed to be easily swappable with GA4, PostHog, Segment, etc.
 */

export interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

/**
 * Track a conversion event with metadata
 * 
 * @param eventName - The exact event name to track
 * @param properties - Optional event properties/metadata
 * 
 * @example
 * trackEvent('geo_hero_cta_click', {
 *   page: 'geo-service',
 *   cta_location: 'hero',
 *   cta_label: 'Get Free GEO Audit'
 * })
 */
export function trackEvent(
  eventName: string,
  properties?: EventProperties
): void {
  // SSR-safe: only run in browser
  if (typeof window === 'undefined') {
    return
  }

  // Non-blocking: use requestIdleCallback or setTimeout
  const sendEvent = () => {
    try {
      // Add timestamp to properties
      const eventData = {
        ...properties,
        timestamp: Date.now(),
      }

      // Send to Google Analytics if available
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
          event_category: 'conversion',
          ...eventData,
        })
      }

      // Send to dataLayer if available (standard GTM format)
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          event_category: 'conversion',
          ...eventData,
        })
      }

      // Console log in development (non-blocking)
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics]', eventName, eventData)
      }

      // Hook for other analytics providers (PostHog, Segment, etc.)
      // Example: if (window.posthog) window.posthog.capture(eventName, eventData)
    } catch (error) {
      // Silently fail - analytics should never break the app
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Error]', error)
      }
    }
  }

  // Use requestIdleCallback if available, otherwise setTimeout
  // This ensures tracking never blocks the main thread
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(sendEvent, { timeout: 2000 })
  } else {
    setTimeout(sendEvent, 0)
  }
}

// Type declarations for window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    requestIdleCallback?: (
      callback: () => void,
      options?: { timeout?: number }
    ) => number
  }
}

