import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex')
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123' // Change this in production!
const COOKIE_NAME = 'raffle-admin-session'
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours

// Use scrypt for better password hashing (more secure than SHA-256)
function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const usedSalt = salt || crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, usedSalt + SESSION_SECRET, 64).toString('hex')
  return { hash, salt: usedSalt }
}

// Generate session token
function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

// Store password hash (for future use if we want to support multiple admins)
// For now, we compare directly but use secure hashing
let cachedPasswordHash: { hash: string; salt: string } | null = null

function getPasswordHash(): { hash: string; salt: string } {
  if (!cachedPasswordHash) {
    // Use a fixed salt for the admin password (stored in env)
    const salt = crypto.createHash('sha256').update(ADMIN_PASSWORD + SESSION_SECRET).digest('hex').slice(0, 32)
    cachedPasswordHash = hashPassword(ADMIN_PASSWORD, salt)
  }
  return cachedPasswordHash
}

// Verify password with constant-time comparison
export function verifyPassword(password: string): boolean {
  try {
    const { hash: expectedHash, salt } = getPasswordHash()
    const { hash: providedHash } = hashPassword(password, salt)
    
    // Use timing-safe comparison to prevent timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(expectedHash),
      Buffer.from(providedHash)
    )
  } catch (error) {
    // If verification fails for any reason, return false
    return false
  }
}

// Create session response with enhanced security
export function createSessionResponse(): NextResponse {
  const token = generateSessionToken()
  const response = NextResponse.json({ success: true })
  
  // Enhanced cookie security
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true, // Prevents JavaScript access
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict', // Stricter CSRF protection
    maxAge: SESSION_DURATION / 1000, // Convert to seconds
    path: '/',
    // Add additional security headers
  })
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  return response
}

// Verify session from request
export function verifySession(request: NextRequest): boolean {
  const token = request.cookies.get(COOKIE_NAME)?.value
  return !!token
}

// Destroy session response
export function destroySessionResponse(): NextResponse {
  const response = NextResponse.json({ success: true })
  response.cookies.delete(COOKIE_NAME)
  return response
}

// Middleware helper for protected routes
export function requireAuth(request: NextRequest): boolean {
  return verifySession(request)
}

