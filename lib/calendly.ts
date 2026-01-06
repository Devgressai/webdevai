/**
 * Calendly Integration Helper
 * 
 * Handles Calendly calendar embedding on /book page.
 * All "Book a Discovery Call" buttons redirect to /book page where
 * the calendar is embedded directly (no popup, no external redirect).
 * Includes UTM parameter preservation for tracking.
 */

// Calendly configuration
// Set NEXT_PUBLIC_CALENDLY_USERNAME in your .env.local file or Vercel environment variables
// Example: NEXT_PUBLIC_CALENDLY_USERNAME=your-username
// If your Calendly link is just https://calendly.com/webvello (no event type), leave CALENDLY_EVENT_TYPE empty
const CALENDLY_USERNAME = process.env.NEXT_PUBLIC_CALENDLY_USERNAME || 'webvello'
const CALENDLY_EVENT_TYPE = process.env.NEXT_PUBLIC_CALENDLY_EVENT_TYPE || '' // Empty if no event type
const CALENDLY_BASE_URL = CALENDLY_EVENT_TYPE 
  ? `https://calendly.com/${CALENDLY_USERNAME}/${CALENDLY_EVENT_TYPE}`
  : `https://calendly.com/${CALENDLY_USERNAME}`

/**
 * Get UTM parameters from current URL
 */
function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}
  
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })
  
  return utmParams
}

/**
 * Build Calendly URL with UTM parameters
 */
function buildCalendlyUrl(): string {
  if (typeof window === 'undefined') {
    // SSR fallback - return base URL without UTM params
    return CALENDLY_BASE_URL
  }
  
  const utmParams = getUTMParams()
  const url = new URL(CALENDLY_BASE_URL)
  
  Object.entries(utmParams).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })
  
  return url.toString()
}

/**
 * Check if Calendly widget is loaded and available
 */
function isCalendlyLoaded(): boolean {
  if (typeof window === 'undefined') return false
  return typeof (window as any).Calendly !== 'undefined'
}

/**
 * Navigate to /book page with embedded Calendly calendar
 * The calendar is embedded directly in the page using Calendly's inline widget.
 * Users stay on your site - no popup, no redirect to Calendly's website.
 */
export function openCalendlyPopup(): void {
  if (typeof window === 'undefined') {
    // SSR - this function should only be called client-side
    return
  }

  // Navigate to /book page where calendar is embedded
  window.location.href = '/book'
}

/**
 * Get the Calendly embed URL for iframe usage
 */
export function getCalendlyEmbedUrl(): string {
  return buildCalendlyUrl()
}

