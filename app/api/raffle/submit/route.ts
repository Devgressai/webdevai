import { NextRequest, NextResponse } from 'next/server'
import { saveRaffleEntry } from '@/lib/lead-storage'

export const dynamic = 'force-dynamic'

interface RaffleFormData {
  fullName: string
  email: string
  phone?: string
  businessName?: string
  websiteUrl?: string
  needs?: string
  budget?: string
  consent: boolean
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<RaffleFormData>

    const fullName = (data.fullName || '').toString().trim()
    const email = (data.email || '').toString().trim()
    const phone = (data.phone || '').toString().trim()
    const businessName = (data.businessName || '').toString().trim()
    const websiteUrl = (data.websiteUrl || '').toString().trim()
    const needs = (data.needs || '').toString().trim()
    const budget = (data.budget || '').toString().trim()
    const consent = data.consent === true

    // Validation
    if (!fullName || !email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Full name and valid email are required' },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'You must agree to the consent terms' },
        { status: 400 }
      )
    }

    // Get IP address
    const ipAddress = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown'

    // Save entry
    const entry = saveRaffleEntry({
      fullName,
      email,
      phone: phone || undefined,
      businessName: businessName || undefined,
      websiteUrl: websiteUrl || undefined,
      needs: needs || undefined,
      budget: budget || undefined,
      consent,
      ipAddress,
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for entering! We will contact the winner within 3 days.',
      entryId: entry.id,
    })
  } catch (error: any) {
    console.error('Error submitting raffle entry:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit entry. Please try again.' },
      { status: 500 }
    )
  }
}

