/**
 * Email Service for Lead Notifications
 * 
 * This service handles sending email notifications when leads are captured.
 * Configure your preferred email service below.
 */

interface LeadData {
  email: string
  conversation: any[]
  timestamp: Date
  source?: string
  name?: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  urgency?: string
  message?: string
}

interface EmailServiceConfig {
  provider: 'resend' | 'sendgrid' | 'mailgun' | 'ses' | 'webhook'
  apiKey?: string
  from: string
  to: string
}

// ============================================
// OPTION 1: RESEND (Recommended - Easy & Free)
// ============================================
export async function sendEmailViaResend(lead: LeadData, config: EmailServiceConfig) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: config.from,
      to: config.to,
      subject: `🚀 New Lead from Chatbot: ${lead.email}`,
      html: generateLeadEmailHTML(lead),
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend API error: ${response.statusText}`)
  }

  return await response.json()
}

// ============================================
// OPTION 2: SENDGRID
// ============================================
export async function sendEmailViaSendGrid(lead: LeadData, config: EmailServiceConfig) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: config.to }],
        subject: `🚀 New Lead from Chatbot: ${lead.email}`,
      }],
      from: { email: config.from },
      content: [{
        type: 'text/html',
        value: generateLeadEmailHTML(lead),
      }],
    }),
  })

  if (!response.ok) {
    throw new Error(`SendGrid API error: ${response.statusText}`)
  }

  return await response.json()
}

// ============================================
// OPTION 3: MAILGUN
// ============================================
export async function sendEmailViaMailgun(lead: LeadData, config: EmailServiceConfig) {
  const domain = process.env.MAILGUN_DOMAIN || 'your-domain.com'
  
  const formData = new URLSearchParams({
    from: config.from,
    to: config.to,
    subject: `🚀 New Lead from Chatbot: ${lead.email}`,
    html: generateLeadEmailHTML(lead),
  })

  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`api:${config.apiKey}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Mailgun API error: ${response.statusText}`)
  }

  return await response.json()
}

// ============================================
// OPTION 4: AWS SES
// ============================================
export async function sendEmailViaSES(lead: LeadData, config: EmailServiceConfig) {
  // Note: This requires AWS SDK. For simplicity, we'll use a webhook approach
  // Or you can add AWS SDK and implement full SES integration
  throw new Error('AWS SES integration requires AWS SDK setup')
}

// ============================================
// OPTION 5: WEBHOOK (Send to Zapier, Make, etc.)
// ============================================
export async function sendViaWebhook(lead: LeadData, webhookUrl: string) {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: lead.email,
      timestamp: lead.timestamp,
      source: lead.source || 'chatbot',
      conversation: lead.conversation,
    }),
  })

  if (!response.ok) {
    throw new Error(`Webhook error: ${response.statusText}`)
  }

  return await response.json()
}

// ============================================
// MAIN SEND FUNCTION (Choose your provider)
// ============================================
export async function sendLeadNotification(lead: LeadData) {
  try {
    // Get configuration from environment variables (uses same as contact form)
    const config: EmailServiceConfig = {
      provider: (process.env.EMAIL_PROVIDER as any) || 'resend',
      apiKey: process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY, // Use your existing Resend key
      from: process.env.CONTACT_FROM_EMAIL || process.env.EMAIL_FROM || 'chatbot@webvello.com',
      to: process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || 'hello@webvello.com',
    }

    // Validate configuration
    if (!config.apiKey && config.provider !== 'webhook') {
      console.error('⚠️  EMAIL_API_KEY not configured. Lead captured but email not sent.')
      console.log('📧 Lead:', lead.email)
      return { success: false, error: 'Email not configured' }
    }

    // Send based on provider
    switch (config.provider) {
      case 'resend':
        return await sendEmailViaResend(lead, config)
      
      case 'sendgrid':
        return await sendEmailViaSendGrid(lead, config)
      
      case 'mailgun':
        return await sendEmailViaMailgun(lead, config)
      
      case 'webhook':
        const webhookUrl = process.env.WEBHOOK_URL
        if (!webhookUrl) {
          throw new Error('WEBHOOK_URL not configured')
        }
        return await sendViaWebhook(lead, webhookUrl)
      
      default:
        throw new Error(`Unknown email provider: ${config.provider}`)
    }

  } catch (error) {
    console.error('❌ Failed to send lead notification:', error)
    // Don't throw - we still want to save the lead even if email fails
    return { success: false, error: (error as Error).message }
  }
}

// ============================================
// EMAIL TEMPLATE
// ============================================
function generateLeadEmailHTML(lead: LeadData): string {
  const conversationHTML = lead.conversation
    .map(msg => {
      const role = msg.role === 'user' ? '👤 User' : '🤖 Bot'
      const bgColor = msg.role === 'user' ? '#e3f2fd' : '#f5f5f5'
      return `
        <div style="margin: 10px 0; padding: 12px; background: ${bgColor}; border-radius: 8px;">
          <strong>${role}:</strong><br/>
          ${msg.content.replace(/\n/g, '<br/>')}
        </div>
      `
    })
    .join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px;">🚀 New Lead Captured!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">From AI Chatbot</p>
      </div>
      
      <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 15px 0; color: #667eea; font-size: 20px;">📧 Lead Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <div>
              <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${lead.name || 'Not provided'}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${lead.email}" style="color: #667eea;">${lead.email}</a></p>
              <p style="margin: 5px 0;"><strong>📞 Phone:</strong> ${lead.phone || 'Not provided'}</p>
            </div>
            <div>
              <p style="margin: 5px 0;"><strong>🏢 Company:</strong> ${lead.company || 'Not provided'}</p>
              <p style="margin: 5px 0;"><strong>🎯 Service:</strong> ${lead.service || 'Not specified'}</p>
              <p style="margin: 5px 0;"><strong>📅 Time:</strong> ${lead.timestamp.toLocaleString()}</p>
            </div>
          </div>
          <p style="margin: 5px 0;"><strong>🔗 Source:</strong> ${lead.source || 'AI Chatbot'}</p>
        </div>

        <h3 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">💬 Conversation History</h3>
        <div style="margin-top: 20px;">
          ${conversationHTML}
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #e8f5e9; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 10px 0; color: #2e7d32;">✅ Next Steps</h3>
          <p style="margin: 5px 0; color: #555;">
            1. Reply to this email within 24 hours<br/>
            2. Review their conversation to understand needs<br/>
            3. Send detailed information about: ${lead.service || 'General inquiry'}<br/>
            4. Schedule a consultation call${lead.phone ? ' (call directly at provided number)' : ''}<br/>
            5. Follow up if no response in 48 hours
          </p>
        </div>

        <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0;">
          <p style="color: #999; font-size: 12px; margin: 5px 0;">
            This lead was automatically captured by your AI chatbot on webvello.com
          </p>
          <p style="color: #999; font-size: 12px; margin: 5px 0;">
            Powered by Web Vello AI Assistant
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ============================================
// SAVE TO DATABASE (Optional)
// ============================================
export async function saveLeadToDatabase(lead: LeadData) {
  // TODO: Implement your database save logic here
  // Examples:
  
  // Prisma:
  // await prisma.lead.create({
  //   data: {
  //     email: lead.email,
  //     conversation: JSON.stringify(lead.conversation),
  //     source: lead.source,
  //     timestamp: lead.timestamp
  //   }
  // })

  // MongoDB:
  // await db.collection('leads').insertOne(lead)

  // For now, just log
  console.log('💾 Lead saved:', lead.email)
  
  return { success: true }
}

