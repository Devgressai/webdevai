/**
 * Lead Notification Providers
 * 
 * Provider interface for sending lead notifications via email or other channels.
 * Includes ConsoleProvider (dev-safe) and ResendProvider (production).
 */

import type { StoredLead, LeadProvider } from './types'

/**
 * Console Provider - Logs leads to console (dev-safe, no keys required)
 */
export class ConsoleProvider implements LeadProvider {
  async send(lead: StoredLead): Promise<{ success: boolean; error?: string }> {
    try {
      // Structured console log for development
      console.log('\n📧 NEW LEAD CAPTURED')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log(`Name:        ${lead.name}`)
      console.log(`Email:       ${lead.email}`)
      console.log(`Company:     ${lead.company || 'N/A'}`)
      console.log(`Website:     ${lead.website || 'N/A'}`)
      console.log(`Service:     ${lead.serviceInterest}`)
      console.log(`City:        ${lead.city || 'N/A'}`)
      console.log(`Message:     ${lead.message.substring(0, 100)}${lead.message.length > 100 ? '...' : ''}`)
      console.log(`Source:      ${lead.source || 'Unknown'}`)
      console.log(`Submitted:   ${lead.submittedAt}`)
      if (lead.ctaTrackingId) {
        console.log(`CTA ID:      ${lead.ctaTrackingId}`)
      }
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
      
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }
}

/**
 * Resend Provider - Sends emails via Resend API
 * 
 * Does not require keys to build - will gracefully fail if RESEND_API_KEY is not set
 */
export class ResendProvider implements LeadProvider {
  private apiKey: string | undefined
  private fromEmail: string
  private toEmail: string

  constructor() {
    this.apiKey = process.env.RESEND_API_KEY
    this.fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.EMAIL_FROM || 'noreply@webvello.com'
    this.toEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || 'hello@webvello.com'
  }

  async send(lead: StoredLead): Promise<{ success: boolean; error?: string }> {
    // If no API key, gracefully fail (allows build without keys)
    if (!this.apiKey) {
      console.warn('⚠️  ResendProvider: RESEND_API_KEY not configured. Skipping email send.')
      return { success: false, error: 'Resend API key not configured' }
    }

    try {
      const subject = `🚀 New Lead: ${lead.name}${lead.serviceInterest ? ` • ${lead.serviceInterest}` : ''}`
      const html = this.generateEmailHTML(lead)

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.fromEmail,
          to: [this.toEmail],
          reply_to: lead.email,
          subject,
          html,
        }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`Resend API error: ${response.status} ${errorData}`)
      }

      await response.json()
      return { success: true }
    } catch (error) {
      console.error('❌ ResendProvider error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }
    }
  }

  private generateEmailHTML(lead: StoredLead): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 28px;">🚀 New Lead Captured</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">From ${lead.source || 'Website'}</p>
  </div>
  
  <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="margin: 0 0 15px 0; color: #667eea; font-size: 20px;">📧 Lead Information</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
        <div>
          <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${this.escapeHtml(lead.name)}</p>
          <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${this.escapeHtml(lead.email)}" style="color: #667eea;">${this.escapeHtml(lead.email)}</a></p>
          ${lead.company ? `<p style="margin: 5px 0;"><strong>🏢 Company:</strong> ${this.escapeHtml(lead.company)}</p>` : ''}
        </div>
        <div>
          ${lead.website ? `<p style="margin: 5px 0;"><strong>🌐 Website:</strong> <a href="${this.escapeHtml(lead.website)}" style="color: #667eea;">${this.escapeHtml(lead.website)}</a></p>` : ''}
          <p style="margin: 5px 0;"><strong>🎯 Service:</strong> ${this.escapeHtml(lead.serviceInterest)}</p>
          ${lead.city ? `<p style="margin: 5px 0;"><strong>📍 City:</strong> ${this.escapeHtml(lead.city)}</p>` : ''}
        </div>
      </div>
      <p style="margin: 5px 0;"><strong>📅 Submitted:</strong> ${new Date(lead.submittedAt).toLocaleString()}</p>
      ${lead.ctaTrackingId ? `<p style="margin: 5px 0;"><strong>🔗 CTA ID:</strong> ${this.escapeHtml(lead.ctaTrackingId)}</p>` : ''}
    </div>

    <h3 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">💬 Message</h3>
    <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
      <p style="margin: 0; white-space: pre-wrap;">${this.escapeHtml(lead.message).replace(/\n/g, '<br/>')}</p>
    </div>

    <div style="margin-top: 30px; padding: 20px; background: #e8f5e9; border-radius: 8px; text-align: center;">
      <h3 style="margin: 0 0 10px 0; color: #2e7d32;">✅ Next Steps</h3>
      <p style="margin: 5px 0; color: #555;">
        1. Reply to this email within 24 hours<br/>
        2. Review their message to understand needs<br/>
        3. Send detailed information about: ${this.escapeHtml(lead.serviceInterest)}<br/>
        4. Schedule a consultation call
      </p>
    </div>
  </div>
</body>
</html>
    `.trim()
  }

  private escapeHtml(text: string): string {
    if (!text) return ''
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }
}

/**
 * Get the active notification provider based on environment
 */
export function getNotificationProvider(): LeadProvider {
  const provider = process.env.LEAD_NOTIFICATION_PROVIDER || 'console'
  
  switch (provider) {
    case 'resend':
      return new ResendProvider()
    case 'console':
    default:
      return new ConsoleProvider()
  }
}
