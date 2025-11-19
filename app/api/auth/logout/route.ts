import { NextResponse } from 'next/server'
import { destroySessionResponse } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST() {
  return destroySessionResponse()
}

