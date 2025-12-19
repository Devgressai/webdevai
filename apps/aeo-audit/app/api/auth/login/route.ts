/**
 * Authentication login endpoint
 * Sets password cookie if password is correct
 */

import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    const requiredPassword = process.env.AEO_AUDIT_PASSWORD

    // If no password is set, allow access (dev mode)
    if (!requiredPassword) {
      const cookieStore = await cookies()
      cookieStore.set('aeo_audit_auth', 'dev-mode', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return NextResponse.json({ success: true })
    }

    // Check password
    if (password === requiredPassword) {
      const cookieStore = await cookies()
      cookieStore.set('aeo_audit_auth', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

