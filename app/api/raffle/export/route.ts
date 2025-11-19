import { NextRequest, NextResponse } from 'next/server'
import { getAllRaffleEntries, type RaffleEntry } from '@/lib/sanity-raffle'

export const dynamic = 'force-dynamic'

function convertToCSV(entries: RaffleEntry[]): string {
  if (entries.length === 0) return 'No entries found'

  const headers = [
    'ID',
    'First Name',
    'Email',
    'Phone',
    'Has Website',
    'Site Name',
    'Website URL',
    'Consent',
    'Status',
    'IP Address',
    'Submitted At',
  ]

  const rows = entries.map(entry => [
    entry._id,
    entry.firstName,
    entry.email,
    entry.phone,
    entry.hasCurrentSite ? 'Yes' : 'No',
    entry.siteName || '',
    entry.websiteUrl || '',
    entry.consent ? 'Yes' : 'No',
    entry.status,
    entry.ipAddress || '',
    entry.submittedAt,
  ])

  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')

  return csv
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const format = searchParams.get('format') || 'csv'
    const dateStr = new Date().toISOString().split('T')[0]

    // Fetch all raffle entries from Sanity
    const entries = await getAllRaffleEntries()

    if (format === 'json') {
      const json = JSON.stringify(entries, null, 2)
      return new NextResponse(json, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="raffle-entries-${dateStr}.json"`,
        },
      })
    } else {
      const csv = convertToCSV(entries)
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="raffle-entries-${dateStr}.csv"`,
        },
      })
    }
  } catch (error: any) {
    console.error('Error exporting raffle entries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to export entries: ' + error.message },
      { status: 500 }
    )
  }
}

