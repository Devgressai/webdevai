import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { saveGrowthPlanLead } from '@/lib/lead-storage'
import { normalizeUrl, validateUrl } from '@/lib/url-utils'
import { checkRateLimit } from '@/lib/rate-limit'

type GrowthPlanPayload = {
  name: string
  email: string
  website: string
  phone?: string
  goal: string
  budget?: string
  consent?: boolean
  company?: string // Honeypot field
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               req.headers.get('x-real-ip') || 
               'unknown'
    
    // Allow 5 submissions per 15 minutes per IP
    if (!checkRateLimit(ip, 5, 15 * 60 * 1000)) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Too many requests. Please try again later.' 
      }, { status: 429 })
    }

    const data = (await req.json()) as Partial<GrowthPlanPayload>

    // Honeypot check - if "company" field is filled, it's likely a bot
    const honeypot = (data.company || '').toString().trim()
    if (honeypot) {
      // Silently reject but return success to avoid revealing honeypot
      return NextResponse.json({ ok: true })
    }

    const name = (data.name || '').toString().trim()
    const email = (data.email || '').toString().trim()
    const website = (data.website || '').toString().trim()
    const phone = (data.phone || '').toString().trim()
    const goal = (data.goal || '').toString().trim()
    const budget = (data.budget || '').toString().trim()
    const consent = data.consent === true
    const source = (data.source || 'growth-plan').toString().trim()
    const utmSource = (data.utmSource || '').toString().trim() || undefined
    const utmMedium = (data.utmMedium || '').toString().trim() || undefined
    const utmCampaign = (data.utmCampaign || '').toString().trim() || undefined
    const utmTerm = (data.utmTerm || '').toString().trim() || undefined
    const utmContent = (data.utmContent || '').toString().trim() || undefined

    // Server-side validation (same as client)
    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: 'Please enter your name' }, { status: 400 })
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email address' }, { status: 400 })
    }

    if (!website || !validateUrl(website)) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid website URL' }, { status: 400 })
    }

    if (!goal) {
      return NextResponse.json({ ok: false, error: 'Please select a goal' }, { status: 400 })
    }

    // Normalize URL
    const normalizedWebsite = normalizeUrl(website)

    // Get IP address
    const ipAddress = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown'

    // Save growth plan lead to storage
    try {
      saveGrowthPlanLead({
        name,
        email,
        website: normalizedWebsite,
        phone: phone || undefined,
        goal,
        budget: budget || undefined,
        consent: consent || undefined,
        ipAddress,
        source,
        utmSource,
        utmMedium,
        utmCampaign,
        utmTerm,
        utmContent,
      })
    } catch (error) {
      console.error('Error saving growth plan lead:', error)
      // Continue with email even if storage fails
    }

    const TO_EMAIL = process.env.CONTACT_TO_EMAIL
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'no-reply@webvello.com'
    const subject = `New Growth Plan Request: ${name} • ${normalizedWebsite}`
    
    // Build UTM info string
    const utmInfo = [utmSource, utmMedium, utmCampaign].filter(Boolean).join(' • ')
    
    const html = `
      <h2>New Free Growth Plan Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${normalizedWebsite}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Goal:</strong> ${goal}</p>
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
      <p><strong>Consent to Communications:</strong> ${consent ? 'Yes' : 'No'}</p>
      ${utmInfo ? `<p><strong>UTM Source:</strong> ${utmSource || 'N/A'}</p>` : ''}
      ${utmMedium ? `<p><strong>UTM Medium:</strong> ${utmMedium}</p>` : ''}
      ${utmCampaign ? `<p><strong>UTM Campaign:</strong> ${utmCampaign}</p>` : ''}
      ${utmTerm ? `<p><strong>UTM Term:</strong> ${utmTerm}</p>` : ''}
      ${utmContent ? `<p><strong>UTM Content:</strong> ${utmContent}</p>` : ''}
      <hr />
      <p>Submitted at ${new Date().toISOString()}</p>
      <p><strong>IP Address:</strong> ${ipAddress}</p>
      <p><strong>Next Steps:</strong> Send personalized growth plan within 24-48 hours.</p>
    `
    if (!TO_EMAIL) {
      return NextResponse.json({ ok: false, error: 'CONTACT_TO_EMAIL not set' }, { status: 500 })
    }

    // 1) Try SMTP first if credentials exist
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      try {
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

        return NextResponse.json({ ok: true, via: 'smtp' })
      } catch (smtpErr) {
        // fall through to Resend
      }
    }

    // 2) Fallback to Resend if configured
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (RESEND_API_KEY) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          subject,
          html,
          reply_to: email,
        })
      })

      if (resp.ok) {
        return NextResponse.json({ ok: true, via: 'resend' })
      }
    }

    return NextResponse.json({ ok: false, error: 'Email delivery not configured' }, { status: 500 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}

