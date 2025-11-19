import { NextRequest, NextResponse } from 'next/server'
import { saveRaffleEntry } from '@/lib/lead-storage'

export const dynamic = 'force-dynamic'

interface RaffleFormData {
  firstName: string
  email: string
  phone: string
  hasCurrentSite: boolean
  siteName?: string
  websiteUrl?: string
  consent: boolean
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<RaffleFormData>

    const firstName = (data.firstName || '').toString().trim()
    const email = (data.email || '').toString().trim()
    const phone = (data.phone || '').toString().trim()
    const hasCurrentSite = data.hasCurrentSite === true
    const siteName = (data.siteName || '').toString().trim()
    const websiteUrl = (data.websiteUrl || '').toString().trim()
    const consent = data.consent === true

    // Validation
    if (!firstName || !email || !isValidEmail(email) || !phone) {
      return NextResponse.json(
        { success: false, error: 'First name, email, and phone number are required' },
        { status: 400 }
      )
    }

    if (hasCurrentSite && (!siteName || !websiteUrl)) {
      return NextResponse.json(
        { success: false, error: 'Site name and website URL are required if you have a current website' },
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
    try {
      const entry = saveRaffleEntry({
        firstName,
        email,
        phone,
        hasCurrentSite,
        siteName: hasCurrentSite && siteName ? siteName : undefined,
        websiteUrl: hasCurrentSite && websiteUrl ? websiteUrl : undefined,
        consent,
        ipAddress,
      })

      return NextResponse.json({
        success: true,
        message: 'Thank you for entering! We will contact the winner within 3 days.',
        entryId: entry.id,
      })
    } catch (saveError: any) {
      console.error('Error saving raffle entry:', saveError)
      return NextResponse.json(
        { 
          success: false, 
          error: saveError.message || 'Failed to save entry. Please try again.' 
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Error submitting raffle entry:', error)
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request data. Please check your form and try again.' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit entry. Please try again.' },
      { status: 500 }
    )
  }
}

