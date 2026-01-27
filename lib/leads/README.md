# Lead Capture System

A minimal, production-ready lead capture system with validation, storage, and notifications.

## Features

- ✅ Server-side validation with email format checking
- ✅ Honeypot spam protection
- ✅ Rate limiting (5 submissions per 15 minutes per IP)
- ✅ String sanitization
- ✅ File-based storage in dev, in-memory in production
- ✅ Console logging provider (dev-safe, no keys required)
- ✅ Resend email provider (gracefully fails if no API key)
- ✅ CTA tracking ID support
- ✅ Loading, success, and error states

## Usage

### BOFU Form on Service Pages

```tsx
import { BOFULeadForm } from '@/components/forms/bofu-lead-form'

export default function ServicePage() {
  return (
    <div>
      {/* Your service page content */}
      
      {/* Add BOFU form at the bottom */}
      <BOFULeadForm 
        serviceInterest="web-development"
        ctaTrackingId="service-page-cta-1"
      />
    </div>
  )
}
```

### Contact Form (Existing)

The contact form at `/contact` uses `/api/contact` and can continue to work independently, or you can migrate it to use `/api/leads` if desired.

## API Endpoint

### POST `/api/leads`

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "company": "Acme Inc.",           // optional
  "website": "https://example.com",  // optional
  "message": "I need help with...",
  "serviceInterest": "web-development",
  "city": "New York",                // optional
  "ctaTrackingId": "hero-cta-1",     // optional
  "_honeypot": ""                    // must be empty
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "id": "lead-1234567890-abc123"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation failed",
  "errors": {
    "email": "Please enter a valid email address"
  }
}
```

## Configuration

### Environment Variables

```bash
# Notification Provider (console or resend)
LEAD_NOTIFICATION_PROVIDER=console

# Resend (optional - gracefully fails if not set)
RESEND_API_KEY=re_xxxxx
CONTACT_FROM_EMAIL=noreply@webvello.com
CONTACT_TO_EMAIL=hello@webvello.com

# Storage (optional - defaults to file in dev, memory in prod)
USE_FILE_STORAGE=true
```

### Provider Selection

The system automatically selects a provider based on `LEAD_NOTIFICATION_PROVIDER`:

- `console` (default): Logs to console - works without any configuration
- `resend`: Sends email via Resend API - requires `RESEND_API_KEY`

## Storage

- **Development**: Leads saved to `data/leads.json`
- **Production**: Leads stored in-memory (with console logging as backup)

## Security

- ✅ Server-side validation
- ✅ Honeypot field (hidden from users)
- ✅ Rate limiting (5 requests per 15 minutes per IP)
- ✅ String sanitization (removes HTML tags, limits length)
- ✅ Email format validation
- ✅ URL format validation (for website field)

## Future Integrations

The provider and storage interfaces are designed for easy extension:

- **HubSpot**: Implement `HubSpotProvider` and `HubSpotStorage`
- **Sanity**: Implement `SanityStorage`
- **Other email providers**: Extend `LeadProvider` interface

## Files

- `lib/leads/types.ts` - Type definitions
- `lib/leads/validation.ts` - Validation utilities
- `lib/leads/storage.ts` - Storage providers
- `lib/leads/providers.ts` - Notification providers
- `app/api/leads/route.ts` - API endpoint
- `components/forms/bofu-lead-form.tsx` - BOFU form component
