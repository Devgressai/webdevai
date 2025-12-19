/**
 * API route for getting changed URLs for a specific issue
 * GET /api/scans/compare/urls?from=SCAN_ID&to=SCAN_ID&issueCode=ISSUE_CODE
 */

import { NextRequest, NextResponse } from 'next/server'
import { getChangedUrlsForIssue } from '@/lib/scans/compare'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const fromScanId = searchParams.get('from')
    const toScanId = searchParams.get('to')
    const issueCode = searchParams.get('issueCode')

    if (!fromScanId || !toScanId || !issueCode) {
      return NextResponse.json(
        {
          error: 'Missing required parameters: from, to, and issueCode',
        },
        { status: 400 }
      )
    }

    const urls = await getChangedUrlsForIssue(fromScanId, toScanId, issueCode)

    return NextResponse.json({ urls })
  } catch (error) {
    console.error('Error getting changed URLs:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to get changed URLs',
      },
      { status: 500 }
    )
  }
}

