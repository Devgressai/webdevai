import { NextRequest, NextResponse } from 'next/server'
import { exportAsCSV, exportAsJSON } from '@/lib/lead-storage'
import { requireAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  // Check authentication
  if (!requireAuth(req)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const { searchParams } = new URL(req.url)
    const format = searchParams.get('format') || 'csv'
    const type = searchParams.get('type') as 'raffle' | 'contact' | null
    const typeLabel = type || 'all-leads'
    const dateStr = new Date().toISOString().split('T')[0]

    if (format === 'json') {
      const json = exportAsJSON(type)
      return new NextResponse(json, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="${typeLabel}-${dateStr}.json"`,
        },
      })
    } else {
      const csv = exportAsCSV(type)
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${typeLabel}-${dateStr}.csv"`,
        },
      })
    }
  } catch (error: any) {
    console.error('Error exporting raffle entries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to export entries' },
      { status: 500 }
    )
  }
}

