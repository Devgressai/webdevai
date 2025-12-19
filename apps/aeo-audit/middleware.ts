/**
 * Middleware for authentication and security headers
 * Protects all /apps/aeo-audit routes
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Simple password-based authentication
 * For MVP - replace with proper auth in production
 */
function checkAuth(request: NextRequest): boolean {
  // Get password from environment variable
  const requiredPassword = process.env.AEO_AUDIT_PASSWORD

  // If no password is set, allow access (dev mode)
  if (!requiredPassword) {
    return true
  }

  // Check for password in cookie
  const cookiePassword = request.cookies.get('aeo_audit_auth')?.value

  if (cookiePassword === requiredPassword) {
    return true
  }

  // Check for password in Authorization header (Basic Auth)
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Basic ')) {
    try {
      const credentials = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8')
      const [username, password] = credentials.split(':')
      if (password === requiredPassword) {
        return true
      }
    } catch {
      // Invalid Basic Auth format
    }
  }

  return false
}

/**
 * Set security headers
 */
function getSecurityHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    // CSP-lite: Basic Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Allow inline scripts for Next.js
      "style-src 'self' 'unsafe-inline'", // Allow inline styles
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  }
}

export function middleware(request: NextRequest) {
  // Only apply to /apps/aeo-audit routes (or all routes if app is at root)
  const pathname = request.nextUrl.pathname

  // Allow auth page and auth API routes
  if (pathname === '/auth' || pathname.startsWith('/api/auth/')) {
    const response = NextResponse.next()
    Object.entries(getSecurityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }

  // Check if this is an audit tool route
  // Adjust this pattern based on your actual route structure
  const isAuditRoute = pathname.startsWith('/dashboard') ||
    pathname.startsWith('/scans') ||
    pathname.startsWith('/domains') ||
    pathname.startsWith('/methodology') ||
    pathname.startsWith('/limitations') ||
    pathname.startsWith('/api/scans') ||
    (pathname === '/' && !pathname.includes('/app/'))

  if (!isAuditRoute) {
    // Not an audit route, pass through
    return NextResponse.next()
  }

  // Check authentication
  if (!checkAuth(request)) {
    // For API routes, return 401
    if (pathname.startsWith('/api/')) {
      const response = new NextResponse('Authentication required', { status: 401 })
      response.headers.set('WWW-Authenticate', 'Basic realm="AEO Audit Tool"')
      Object.entries(getSecurityHeaders()).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      return response
    }

    // For page routes, redirect to auth page
    const authUrl = new URL('/auth', request.url)
    authUrl.searchParams.set('redirect', pathname)
    const response = NextResponse.redirect(authUrl)
    Object.entries(getSecurityHeaders()).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
    return response
  }

  // Create response with security headers
  const response = NextResponse.next()
  
  // Set security headers
  Object.entries(getSecurityHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Set noindex header for scan results pages
  if (pathname.match(/^\/scans\/[^/]+$/)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

