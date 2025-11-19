import { NextRequest, NextResponse } from 'next/server'
import { saveRaffleEntryToSanity, checkEmailExists } from '@/lib/sanity-raffle'
import nodemailer from 'nodemailer'

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

    // Check if email already exists
    try {
      const emailExists = await checkEmailExists(email)
      if (emailExists) {
        return NextResponse.json(
          { success: false, error: 'This email has already been entered in the raffle.' },
          { status: 400 }
        )
      }
    } catch (checkError) {
      console.error('Error checking email existence:', checkError)
      // Continue anyway - better to allow duplicate than block legitimate entry
    }

    // Save entry to Sanity
    let entryId = `raffle-${Date.now()}`
    try {
      const entry = await saveRaffleEntryToSanity({
        firstName,
        email,
        phone,
        hasCurrentSite,
        siteName: hasCurrentSite && siteName ? siteName : undefined,
        websiteUrl: hasCurrentSite && websiteUrl ? websiteUrl : undefined,
        consent,
        ipAddress,
      })
      entryId = entry._id
      console.log('✅ Raffle entry saved to Sanity:', entryId)
    } catch (saveError: any) {
      console.error('❌ Failed to save to Sanity:', saveError)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to save entry. Please try again or contact support.' 
        },
        { status: 500 }
      )
    }

    // Entry saved successfully! Now try to send email notification (but don't fail if email fails)
    const successResponse = {
      success: true,
      message: 'Thank you for entering! We will contact the winner within 3 days.',
      entryId,
    }

    // Try to send email notification in the background (non-blocking)
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || process.env.EMAIL_FROM || 'no-reply@webvello.com'

    if (!TO_EMAIL) {
      console.warn('⚠️  CONTACT_TO_EMAIL or EMAIL_TO not set. Entry captured but email not sent.')
      return NextResponse.json(successResponse)
    }

    const subject = `🎉 New Raffle Entry: ${firstName}`
    const html = `
      <h2>🎉 New Raffle Entry!</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Has Current Website:</strong> ${hasCurrentSite ? 'Yes' : 'No'}</p>
      ${hasCurrentSite && siteName ? `<p><strong>Site Name:</strong> ${siteName}</p>` : ''}
      ${hasCurrentSite && websiteUrl ? `<p><strong>Website URL:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>` : ''}
      <p><strong>Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
      <p><strong>IP Address:</strong> ${ipAddress}</p>
      <hr />
      <p>Submitted at ${new Date().toISOString()}</p>
      <p><small>Entry ID: ${entryId}</small></p>
    `

    // Try to send email but don't block the response
    try {
      // Try SMTP first if credentials exist
      const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
      if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: Number(SMTP_PORT) === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        })

        await transporter.sendMail({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject,
          html,
          replyTo: email,
        })
        console.log('✅ Email sent via SMTP')
      } 
      // Try Resend if configured
      else {
        const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY
        if (RESEND_API_KEY) {
          const resp = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: FROM_EMAIL,
              to: TO_EMAIL,
              subject,
              html,
              reply_to: email,
            }),
          })

          if (resp.ok) {
            console.log('✅ Email sent via Resend')
          } else {
            const errorText = await resp.text()
            console.error('⚠️  Resend error:', errorText)
          }
        }
      }
    } catch (emailError) {
      // Email failed but entry was saved - that's okay
      console.error('⚠️  Email notification failed:', emailError)
    }

    // Always return success since entry was saved
    return NextResponse.json(successResponse)

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
      { success: false, error: 'Failed to submit entry. Please try again.' },
      { status: 500 }
    )
  }
}

