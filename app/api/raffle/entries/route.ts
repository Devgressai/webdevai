import { NextRequest, NextResponse } from 'next/server'
import { getAllLeads, getLeadsByType, deleteLead } from '@/lib/lead-storage'
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
    const type = searchParams.get('type') as 'raffle' | 'contact' | null
    
    const leads = type ? getLeadsByType(type) : getAllLeads()
    
    return NextResponse.json({
      success: true,
      leads,
      count: leads.length,
    })
  } catch (error: any) {
    console.error('Error fetching raffle entries:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch entries' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  // Check authentication
  if (!requireAuth(req)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Entry ID is required' },
        { status: 400 }
      )
    }

    const deleted = deleteLead(id)
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Lead deleted successfully',
    })
  } catch (error: any) {
    console.error('Error deleting raffle entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete entry' },
      { status: 500 }
    )
  }
}

