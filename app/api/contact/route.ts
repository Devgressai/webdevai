import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { saveContactLead } from '@/lib/lead-storage'

type ContactPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  urgency?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /.+@.+\..+/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ContactPayload>

    const name = (data.name || '').toString().trim()
    const email = (data.email || '').toString().trim()
    const company = (data.company || '').toString().trim()
    const phone = (data.phone || '').toString().trim()
    const service = (data.service || '').toString().trim()
    const budget = (data.budget || '').toString().trim()
    const urgency = (data.urgency || '').toString().trim()
    const message = (data.message || '').toString().trim()

    if (!name || !email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid name or email' }, { status: 400 })
    }

    // Get IP address
    const ipAddress = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown'

    // Save contact lead to storage
    try {
      saveContactLead({
        name,
        email,
        company: company || undefined,
        phone: phone || undefined,
        service: service || undefined,
        budget: budget || undefined,
        urgency: urgency || undefined,
        message: message || undefined,
        ipAddress,
      })
    } catch (error) {
      console.error('Error saving contact lead:', error)
      // Continue with email even if storage fails
    }

    const TO_EMAIL = process.env.CONTACT_TO_EMAIL
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'no-reply@webvello.com'
    const subject = `New Contact Form Submission: ${name}${service ? ` • ${service}` : ''}`
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
      ${urgency ? `<p><strong>Timeline:</strong> ${urgency}</p>` : ''}
      ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      <hr />
      <p>Submitted at ${new Date().toISOString()}</p>
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
          secure: Number(SMTP_PORT) === 465, // true for 465, false for others
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


