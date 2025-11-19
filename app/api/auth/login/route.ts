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
    // Check origin (basic CSRF protection)
    if (!isSameOrigin(req)) {
      logSecurityEvent('CSRF_ATTEMPT', identifier)
      return NextResponse.json(
        { success: false, error: 'Invalid request origin' },
        { status: 403 }
      )
    }

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

