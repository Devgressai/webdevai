import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, createSessionResponse } from '@/lib/auth'
import {
  getClientIdentifier,
  checkLoginRateLimit,
  recordFailedAttempt,
  clearFailedAttempts,
  sanitizeInput,
  isSameOrigin,
  logSecurityEvent,
} from '@/lib/auth-security'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const startTime = Date.now()
  const identifier = getClientIdentifier(req)

  try {
    // CSRF protection - lenient for Vercel deployments
    // Allow all Vercel domains and your main domain
    const origin = req.headers.get('origin')
    const referer = req.headers.get('referer')
    const host = req.headers.get('host')
    
    // Log for debugging (remove in production if needed)
    if (process.env.NODE_ENV === 'development') {
      console.log('Login attempt:', { origin, referer, host })
    }
    
    // Only block obviously malicious cross-origin requests
    // Allow: webvello.com, localhost, any vercel.app domain, and requests without origin (same-origin)
    if (origin) {
      const isAllowed = 
        origin.includes('webvello.com') ||
        origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        origin.includes('vercel.app') ||
        origin.includes('vercel.com') ||
        !origin // No origin header means same-origin (browsers omit for same-origin POST)
      
      if (!isAllowed) {
        logSecurityEvent('CSRF_ATTEMPT', identifier, { origin, referer, host })
        return NextResponse.json(
          { success: false, error: 'Invalid request origin' },
          { status: 403 }
        )
      }
    }
    // If no origin header, it's a same-origin request (safe to allow)

    // Check rate limiting
    const rateLimitCheck = checkLoginRateLimit(identifier)
    if (!rateLimitCheck.allowed) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', identifier, {
        retryAfter: rateLimitCheck.retryAfter,
        lockedUntil: rateLimitCheck.lockedUntil,
      })

      if (rateLimitCheck.lockedUntil) {
        return NextResponse.json(
          {
            success: false,
            error: 'Too many failed attempts. Account temporarily locked.',
            retryAfter: rateLimitCheck.retryAfter,
          },
          {
            status: 429,
            headers: {
              'Retry-After': String(rateLimitCheck.retryAfter || 900),
            },
          }
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimitCheck.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimitCheck.retryAfter || 60),
          },
        }
      )
    }

    // Parse and validate input
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const { password } = body

    // Validate input
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      )
    }

    // Sanitize input
    const sanitizedPassword = sanitizeInput(password)

    // Verify password (always takes same time to prevent timing attacks)
    const isValid = verifyPassword(sanitizedPassword)

    if (isValid) {
      // Clear failed attempts on success
      clearFailedAttempts(identifier)
      
      logSecurityEvent('LOGIN_SUCCESS', identifier, {
        duration: Date.now() - startTime,
      })

      return createSessionResponse()
    } else {
      // Record failed attempt
      const attemptResult = recordFailedAttempt(identifier)
      
      logSecurityEvent('LOGIN_FAILED', identifier, {
        remainingAttempts: attemptResult.remainingAttempts,
        locked: attemptResult.locked,
      })

      // Generic error message (don't reveal if account exists)
      const errorMessage = attemptResult.locked
        ? `Too many failed attempts. Account locked for ${Math.ceil((attemptResult.lockedUntil! - Date.now()) / 60000)} minutes.`
        : 'Invalid credentials'

      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
          remainingAttempts: attemptResult.remainingAttempts,
        },
        { status: 401 }
      )
    }
  } catch (error: any) {
    logSecurityEvent('LOGIN_ERROR', identifier, {
      error: error.message,
    })
    
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

