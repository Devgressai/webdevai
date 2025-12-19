/**
 * Authentication logout endpoint
 * Clears password cookie
 */

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('aeo_audit_auth')

  return NextResponse.json({ success: true })
}

