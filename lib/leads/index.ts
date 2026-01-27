/**
 * Lead Capture System
 * 
 * Unified lead capture system with:
 * - Validation
 * - Storage (file-based in dev, in-memory in prod)
 * - Notifications (ConsoleProvider, ResendProvider)
 * - Rate limiting
 * - Security (honeypot, sanitization)
 */

export * from './types'
export * from './validation'
export * from './storage'
export * from './providers'
