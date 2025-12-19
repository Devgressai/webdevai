/**
 * API route for comparing two scans
 * GET /api/scans/compare?from=SCAN_ID&to=SCAN_ID
 */

import { NextRequest, NextResponse } from 'next/server'
import { computeDiff } from '@/lib/scans/compare'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const fromScanId = searchParams.get('from')
    const toScanId = searchParams.get('to')

    if (!fromScanId || !toScanId) {
      return NextResponse.json(
        { error: 'Missing required parameters: from and to' },
        { status: 400 }
      )
    }

    if (fromScanId === toScanId) {
      return NextResponse.json(
        { error: 'Cannot compare a scan to itself' },
        { status: 400 }
      )
    }

    const diff = await computeDiff(fromScanId, toScanId)

    return NextResponse.json(diff)
  } catch (error) {
    console.error('Error comparing scans:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to compare scans',
      },
      { status: 500 }
    )
  }
}

