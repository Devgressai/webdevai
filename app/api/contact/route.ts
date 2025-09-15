import { NextRequest, NextResponse } from 'next/server'

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

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'no-reply@webvello.com'

    if (!RESEND_API_KEY || !TO_EMAIL) {
      return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 })
    }

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

    if (!resp.ok) {
      const text = await resp.text()
      return NextResponse.json({ ok: false, error: 'Failed to send email', detail: text }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}


