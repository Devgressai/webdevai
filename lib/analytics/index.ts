/**
 * Analytics System
 * 
 * Vendor-agnostic analytics abstraction for tracking events
 * without locking into a specific provider.
 */

export * from './types'
export * from './client'

// Re-export track function as default export for convenience
export { track } from './client'
