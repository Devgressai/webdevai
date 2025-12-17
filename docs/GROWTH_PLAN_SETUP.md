# Growth Plan Lead Capture Setup

This document explains how to configure the Growth Plan lead capture system.

## Overview

The Growth Plan form (`/free-growth-plan`) captures leads with:
- Website URL
- Contact information (name, email, phone)
- Business goals and budget
- UTM tracking parameters
- Anti-spam protection (honeypot + rate limiting)

## Environment Variables

Add these to your `.env.local` file:

### Email Configuration (Required)

Choose **one** of the following email delivery methods:

#### Option 1: SMTP (Recommended for most setups)

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_FROM_EMAIL=no-reply@webvello.com
CONTACT_TO_EMAIL=leads@webvello.com
```

**Gmail Setup:**
1. Enable 2-Factor Authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password as `SMTP_PASS`

**Other SMTP Providers:**
- **SendGrid**: `smtp.sendgrid.net`, port `587`
- **Mailgun**: `smtp.mailgun.org`, port `587`
- **AWS SES**: Use your SES SMTP endpoint

#### Option 2: Resend (Modern API-based)

```env
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_FROM_EMAIL=onboarding@resend.dev
CONTACT_TO_EMAIL=leads@webvello.com
```

**Resend Setup:**
1. Sign up at https://resend.com
2. Create an API key
3. Verify your domain (or use `onboarding@resend.dev` for testing)
4. Add `RESEND_API_KEY` to your `.env.local`

### Email Addresses

- `CONTACT_FROM_EMAIL`: The "from" address for notifications (must be verified with your email provider)
- `CONTACT_TO_EMAIL`: Where lead notifications are sent (your email address)

## Lead Storage

Leads are automatically saved to:
- **File System**: `data/leads.json` (JSON format)
- **Email Notification**: Sent to `CONTACT_TO_EMAIL`

### Lead Data Structure

```json
{
  "id": "growth-plan-1234567890-abc123",
  "type": "growth_plan",
  "name": "John Doe",
  "email": "john@example.com",
  "website": "https://example.com",
  "phone": "+1234567890",
  "goal": "More leads",
  "budget": "$2k–$5k",
  "consent": true,
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "ipAddress": "192.168.1.1",
  "source": "growth-plan",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "growth-plan-2024"
}
```

## Security Features

### 1. Honeypot Field
- Hidden form field named "company"
- Bots that fill it are silently rejected
- Real users never see or interact with it

### 2. Rate Limiting
- **5 submissions per 15 minutes per IP address**
- Prevents spam and abuse
- Returns HTTP 429 if limit exceeded

### 3. Server-Side Validation
- All client-side validations are re-checked on the server
- URL normalization and validation
- Email format validation
- Required field checks

## UTM Parameter Tracking

The system automatically captures UTM parameters from the URL:

- `utm_source` - Traffic source (e.g., "google", "facebook")
- `utm_medium` - Marketing medium (e.g., "cpc", "email")
- `utm_campaign` - Campaign name
- `utm_term` - Search term (for paid search)
- `utm_content` - Content identifier (for A/B testing)

**Example URL:**
```
/free-growth-plan?site=example.com&utm_source=google&utm_medium=cpc&utm_campaign=growth-plan-2024
```

UTM parameters are:
- Stored with the lead in the database
- Included in email notifications
- Sent to analytics (Google Analytics, dataLayer)

## Analytics Events

The form fires these analytics events:

### Page View
```javascript
{
  event: 'growth_plan_view',
  website: 'example.com',
  utm_source: 'google',
  utm_medium: 'cpc'
}
```

### Form Submission Success
```javascript
{
  event: 'growth_plan_submit_success',
  website: 'example.com',
  goal: 'More leads',
  has_budget: true,
  has_phone: true,
  utm_source: 'google',
  utm_medium: 'cpc'
}
```

## Testing

### Test the Form

1. Navigate to `/free-growth-plan?site=example.com`
2. Fill out the form
3. Check:
   - Email notification received
   - Lead saved to `data/leads.json`
   - Analytics events fired (check browser console)

### Test Rate Limiting

1. Submit the form 5 times quickly
2. 6th submission should return: `{ ok: false, error: "Too many requests..." }`

### Test Honeypot

1. Open browser DevTools
2. Find the hidden "company" field
3. Fill it with any value
4. Submit form - should silently reject (returns success but doesn't save)

## Troubleshooting

### Emails Not Sending

1. **Check environment variables** are set correctly
2. **Verify SMTP credentials** (username/password)
3. **Check spam folder** for test emails
4. **Review server logs** for error messages
5. **Test SMTP connection** using a tool like `telnet` or `openssl`

### Leads Not Saving

1. **Check file permissions** on `data/` directory
2. **Verify `data/leads.json`** exists and is writable
3. **Check server logs** for errors

### Rate Limiting Too Strict

Adjust in `app/api/growth-plan/route.ts`:
```typescript
// Current: 5 requests per 15 minutes
checkRateLimit(ip, 5, 15 * 60 * 1000)

// More lenient: 10 requests per 30 minutes
checkRateLimit(ip, 10, 30 * 60 * 1000)
```

## API Endpoint

**POST** `/api/growth-plan`

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "website": "https://example.com",
  "phone": "+1234567890",
  "goal": "More leads",
  "budget": "$2k–$5k",
  "consent": true,
  "company": "",  // Honeypot - must be empty
  "source": "growth-plan",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "growth-plan-2024"
}
```

### Success Response
```json
{
  "ok": true,
  "via": "smtp"  // or "resend"
}
```

### Error Response
```json
{
  "ok": false,
  "error": "Error message here"
}
```

## Next Steps

After receiving a lead:

1. **Review the email notification** for lead details
2. **Check UTM parameters** to understand traffic source
3. **Create personalized growth plan** within 24-48 hours
4. **Follow up via email** with the plan
5. **Track conversion** in your CRM/analytics

## Support

For issues or questions:
- Check server logs: `npm run dev` (development) or production logs
- Review this documentation
- Check environment variable configuration
- Verify email provider setup

