import { NextRequest } from 'next/server'
import crypto from 'crypto'

// Rate limiting for login attempts
const loginAttempts = new Map<string, { count: number; resetTime: number; lockedUntil?: number }>()

// Configuration
const MAX_LOGIN_ATTEMPTS = 5 // Maximum failed attempts
const LOCKOUT_DURATION = 15 * 60 * 1000 // 15 minutes in milliseconds
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 10 // Max requests per minute

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of loginAttempts.entries()) {
    if (now > value.resetTime && (!value.lockedUntil || now > value.lockedUntil)) {
      loginAttempts.delete(key)
    }
  }
}, 5 * 60 * 1000)

// Get client identifier (IP address)
export function getClientIdentifier(request: NextRequest): string {
  return (
    request.ip ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

// Check rate limit for login endpoint
export function checkLoginRateLimit(identifier: string): {
  allowed: boolean
  remainingAttempts?: number
  lockedUntil?: number
  retryAfter?: number
} {
  const now = Date.now()
  const record = loginAttempts.get(identifier)

  // Check if account is locked
  if (record?.lockedUntil && now < record.lockedUntil) {
    return {
      allowed: false,
      lockedUntil: record.lockedUntil,
      retryAfter: Math.ceil((record.lockedUntil - now) / 1000), // seconds
    }
  }

  // Check rate limit (requests per minute)
  if (record && now < record.resetTime) {
    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
      return {
        allowed: false,
        retryAfter: Math.ceil((record.resetTime - now) / 1000),
      }
    }
  }

  return { allowed: true }
}

// Record failed login attempt
export function recordFailedAttempt(identifier: string): {
  locked: boolean
  remainingAttempts: number
  lockedUntil?: number
} {
  const now = Date.now()
  const record = loginAttempts.get(identifier)

  if (!record || now > record.resetTime) {
    // First attempt or window expired
    loginAttempts.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return {
      locked: false,
      remainingAttempts: MAX_LOGIN_ATTEMPTS - 1,
    }
  }

  record.count++

  // Check if we should lock the account
  if (record.count >= MAX_LOGIN_ATTEMPTS) {
    const lockedUntil = now + LOCKOUT_DURATION
    record.lockedUntil = lockedUntil
    loginAttempts.set(identifier, record)
    return {
      locked: true,
      remainingAttempts: 0,
      lockedUntil,
    }
  }

  loginAttempts.set(identifier, record)
  return {
    locked: false,
    remainingAttempts: MAX_LOGIN_ATTEMPTS - record.count,
  }
}

// Clear failed attempts on successful login
export function clearFailedAttempts(identifier: string): void {
  loginAttempts.delete(identifier)
}

// Generate CSRF token
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

// Verify CSRF token
export function verifyCSRFToken(token: string, expectedToken: string): boolean {
  if (!token || !expectedToken) return false
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expectedToken)
  )
}

// Sanitize input
export function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000) // Limit length
}

// Check if request is from same origin (basic CSRF protection)
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  const host = request.headers.get('host')

  if (!origin && !referer) {
    // Direct requests without origin/referer are suspicious
    return false
  }

  // In production, verify origin matches your domain
  if (process.env.NODE_ENV === 'production') {
    const allowedOrigin = process.env.NEXT_PUBLIC_BASE_URL || 'https://webvello.com'
    if (origin && !origin.startsWith(allowedOrigin)) {
      return false
    }
  }

  return true
}

// Log security event (in production, send to logging service)
export function logSecurityEvent(
  event: string,
  identifier: string,
  details?: Record<string, any>
): void {
  const timestamp = new Date().toISOString()
  console.warn(`[SECURITY] ${timestamp} - ${event}`, {
    identifier,
    ...details,
  })
  
  // In production, you might want to send this to a logging service
  // or security monitoring system
}

