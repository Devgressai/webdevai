import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const isAuthenticated = requireAuth(req)
  
  return NextResponse.json({
    authenticated: isAuthenticated,
  })
}

