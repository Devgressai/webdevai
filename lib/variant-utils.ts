/**
 * A/B Testing Variant System
 * 
 * Supports:
 * - PostHog (if available)
 * - Optimizely (if available)
 * - Query parameter fallback (?v=a|b|c)
 * - Default variant A
 */

type Variant = 'a' | 'b' | 'c'

interface VariantConfig {
  variant: Variant
  source: 'posthog' | 'optimizely' | 'query' | 'default'
}

/**
 * Get variant from PostHog (if available)
 */
function getPostHogVariant(experimentKey: string): Variant | null {
  if (typeof window === 'undefined') return null
  
  try {
    // @ts-ignore - PostHog may not be in types
    const posthog = window.posthog
    if (posthog && typeof posthog.getFeatureFlag === 'function') {
      const variant = posthog.getFeatureFlag(experimentKey)
      if (variant && ['a', 'b', 'c'].includes(variant.toLowerCase())) {
        return variant.toLowerCase() as Variant
      }
    }
  } catch {
    // PostHog not available
  }
  
  return null
}

/**
 * Get variant from Optimizely (if available)
 */
function getOptimizelyVariant(experimentKey: string): Variant | null {
  if (typeof window === 'undefined') return null
  
  try {
    // @ts-ignore - Optimizely may not be in types
    const optimizely = window.optimizely
    if (optimizely && typeof optimizely.get === 'function') {
      const state = optimizely.get('state')
      if (state && state.getVariation) {
        const variation = state.getVariation(experimentKey)
        if (variation && ['a', 'b', 'c'].includes(variation.toLowerCase())) {
          return variation.toLowerCase() as Variant
        }
      }
    }
  } catch {
    // Optimizely not available
  }
  
  return null
}

/**
 * Get variant from query parameter
 */
function getQueryVariant(): Variant | null {
  if (typeof window === 'undefined') return null
  
  try {
    const params = new URLSearchParams(window.location.search)
    const variant = params.get('v')?.toLowerCase()
    if (variant && ['a', 'b', 'c'].includes(variant)) {
      return variant as Variant
    }
  } catch {
    // URL parsing failed
  }
  
  return null
}

/**
 * Get A/B test variant with fallback chain
 * 
 * Priority:
 * 1. PostHog (if available)
 * 2. Optimizely (if available)
 * 3. Query parameter (?v=a|b|c)
 * 4. Default variant A
 */
export function getVariant(experimentKey: string): VariantConfig {
  // Try PostHog first
  const posthogVariant = getPostHogVariant(experimentKey)
  if (posthogVariant) {
    return { variant: posthogVariant, source: 'posthog' }
  }
  
  // Try Optimizely second
  const optimizelyVariant = getOptimizelyVariant(experimentKey)
  if (optimizelyVariant) {
    return { variant: optimizelyVariant, source: 'optimizely' }
  }
  
  // Try query parameter third
  const queryVariant = getQueryVariant()
  if (queryVariant) {
    return { variant: queryVariant, source: 'query' }
  }
  
  // Default to variant A
  return { variant: 'a', source: 'default' }
}

/**
 * Track variant view for analytics
 */
export function trackVariantView(experimentKey: string, variant: Variant, source: string) {
  if (typeof window === 'undefined') return
  
  try {
    // Track via dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'ab_test_view',
        experiment_key: experimentKey,
        variant,
        source,
      })
    }
    
    // Track via gtag
    if (window.gtag) {
      window.gtag('event', 'ab_test_view', {
        experiment_key: experimentKey,
        variant,
        source,
      })
    }
  } catch {
    // Analytics not available
  }
}

declare global {
  interface Window {
    posthog?: any
    optimizely?: any
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

