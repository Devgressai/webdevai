import { NextRequest, NextResponse } from 'next/server'
import { getAllRaffleEntries, getRaffleEntriesByStatus } from '@/lib/sanity-raffle'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    
    const entries = status 
      ? await getRaffleEntriesByStatus(status) 
      : await getAllRaffleEntries()
    
    return NextResponse.json({
      success: true,
      entries,
      count: entries.length,
    })
  } catch (error: any) {
    console.error('Error fetching raffle entries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch entries: ' + error.message },
      { status: 500 }
    )
  }
}

// Delete functionality is now handled in Sanity Studio
// You can delete entries directly from /studio

