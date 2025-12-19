/**
 * API route for exporting changed URLs as CSV
 * GET /api/scans/compare/urls/export.csv?from=SCAN_ID&to=SCAN_ID&issueCode=ISSUE_CODE
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

    // Generate CSV
    const csvHeader = 'URL,Status\n'
    const csvRows = urls
      .map((item) => `"${item.url.replace(/"/g, '""')}",${item.status}`)
      .join('\n')

    const csv = csvHeader + csvRows

    // Return CSV with proper headers
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="changed-urls-${issueCode}-${fromScanId}-${toScanId}.csv"`,
      },
    })
  } catch (error) {
    console.error('Error exporting changed URLs:', error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to export changed URLs',
      },
      { status: 500 }
    )
  }
}

