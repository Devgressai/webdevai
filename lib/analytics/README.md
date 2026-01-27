# Analytics System

A lightweight, vendor-agnostic analytics abstraction for tracking events without locking into a specific provider.

## Features

- ✅ Vendor-agnostic (works without GA4, PostHog, etc.)
- ✅ No external dependencies or API keys required
- ✅ Standardized event payload structure
- ✅ Automatic UTM parameter capture
- ✅ Automatic page type and funnel stage detection
- ✅ Optional file storage in dev
- ✅ Console logging in dev
- ✅ Forwards to vendor analytics if available (GA4, PostHog, etc.)

## Usage

### Basic Event Tracking

```tsx
import { track } from '@/lib/analytics'

// Track a simple event
track('button_click', {
  trackingId: 'hero-cta-1',
  buttonText: 'Get Started'
})
```

### CTA Tracking Helper

```tsx
import { trackCTA } from '@/lib/analytics/cta-tracking'

// Track a CTA click
trackCTA('hero-cta-1', {
  ctaText: 'Get Started',
  ctaLocation: 'hero',
  ctaType: 'button'
})
```

### Form Submission Tracking

```tsx
import { trackFormSubmit } from '@/lib/analytics/cta-tracking'

// Track form submission
trackFormSubmit('contact', {
  trackingId: 'contact-page-form',
  serviceInterest: 'web-development'
})
```

### Lead Capture Tracking

```tsx
import { trackLeadCapture } from '@/lib/analytics/cta-tracking'

// Track lead capture
trackLeadCapture({
  trackingId: 'bofu-form-1',
  serviceInterest: 'web-development',
  formType: 'bofu'
})
```

## Event Payload Structure

All events automatically include:

```typescript
{
  event: string              // Event name (e.g., 'cta_click')
  timestamp: number          // Unix timestamp
  pathname: string           // Current page path
  pageType?: string          // Auto-detected (homepage, service, blog, etc.)
  funnelStage?: string       // Auto-detected (awareness, interest, intent, conversion)
  trackingId?: string        // CTA/form tracking ID
  referrer?: string          // Document referrer
  utmSource?: string         // UTM parameters (if present)
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  // ... any additional metadata you pass
}
```

## Integration Points

### BOFU Form

The BOFU form automatically tracks lead captures:

```tsx
<BOFULeadForm 
  serviceInterest="web-development"
  ctaTrackingId="service-page-cta-1"
/>
```

### Custom CTA Buttons

```tsx
import { trackCTA } from '@/lib/analytics/cta-tracking'

<Button
  onClick={() => {
    trackCTA('hero-cta-1', {
      ctaText: 'Get Started',
      ctaLocation: 'hero'
    })
    // ... your button action
  }}
>
  Get Started
</Button>
```

## API Endpoint

### POST `/api/events`

Receives events from the client and:
- Validates payload
- Logs to console in dev
- Optionally writes to `data/events.json` in dev

**Request:**
```json
{
  "event": "cta_click",
  "timestamp": 1234567890,
  "pathname": "/services/web-development",
  "trackingId": "hero-cta-1",
  "pageType": "service",
  "funnelStage": "intent"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Event recorded"
}
```

## Configuration

### Environment Variables

```bash
# File storage (dev only, default: true in dev)
USE_FILE_STORAGE=true

# Events are stored in data/events.json (dev only)
```

### Vendor Integration

The system automatically forwards events to vendor analytics if available:

- **Google Analytics 4**: If `window.gtag` exists
- **Google Tag Manager**: If `window.dataLayer` exists
- **PostHog**: If `window.posthog` exists

No configuration needed - it just works if the vendor scripts are loaded.

## Page Type Detection

Automatically detects page types:
- `homepage` - `/`
- `service` - `/services/*`
- `blog` - `/blog/*`
- `solution` - `/solutions/*`
- `case-study` - `/case-studies`
- `location` - `/locations/*`
- `city-hub` - `/{city}`
- `city-service` - `/{city}/{service}`
- `city-industry` - `/{city}/industry/{industry}`
- `city-industry-service` - `/{city}/industry/{industry}/{service}`
- `contact` - `/contact`
- `pricing` - `/pricing`
- `about` - `/about`

## Funnel Stage Detection

Automatically detects funnel stages:
- `awareness` - Homepage, blog posts
- `interest` - Service pages, solutions
- `consideration` - Case studies, pricing
- `intent` - Contact page, CTA clicks
- `conversion` - Form submissions, lead captures

## Files

- `lib/analytics/types.ts` - Type definitions
- `lib/analytics/client.ts` - Client-side tracking function
- `lib/analytics/cta-tracking.ts` - CTA tracking helpers
- `app/api/events/route.ts` - API endpoint
- `lib/analytics/index.ts` - Main exports

## Example: Complete CTA Integration

```tsx
'use client'

import { trackCTA } from '@/lib/analytics/cta-tracking'
import { Button } from '@/components/ui/button'

export function HeroCTA() {
  const handleClick = () => {
    // Track the CTA click
    trackCTA('hero-cta-1', {
      ctaText: 'Get Started',
      ctaLocation: 'hero',
      ctaType: 'button'
    })
    
    // Your CTA action (e.g., scroll to form, open modal, etc.)
    document.getElementById('contact-form')?.scrollIntoView()
  }

  return (
    <Button onClick={handleClick}>
      Get Started
    </Button>
  )
}
```
