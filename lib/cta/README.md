# CTA Governance System

Production-grade CTA governance system for WebVello platform. Enforces consistent CTA behavior by funnel stage and page type.

## Overview

The CTA Governance System ensures:
- Exactly 1 primary CTA per page (except exemptions)
- Max 1 secondary CTA
- CTAs match funnel stage (TOFU/MOFU/BOFU)
- Proper tracking on all CTAs
- Label and destination validation

## Quick Start

### Get Recommended CTAs

```typescript
import { getRecommendedCTAs } from '@/lib/cta'

const { primary, secondary } = getRecommendedCTAs(
  'city-service',
  '/denver-co/seo',
  { city: 'denver-co', service: 'seo' }
)

// primary: { label: "Get Quote", href: "/contact?offer=quote", ... }
// secondary: { label: "Learn More", href: "/services", ... }
```

### Validate CTAs

```typescript
import { validateCTAs, getFunnelStage } from '@/lib/cta'

const funnelStage = getFunnelStage('service', '/services/seo')
const validation = validateCTAs({
  pageType: 'service',
  pathname: '/services/seo',
  funnelStage,
  ctas: [
    {
      label: 'Get Quote',
      href: '/contact?offer=quote',
      isPrimary: true,
      trackingEvent: 'cta_quote_request',
      trackingId: 'service_seo_primary'
    }
  ]
})

if (!validation.ok) {
  console.error('CTA validation errors:', validation.errors)
}
```

### Attach Tracking Metadata

```typescript
import { attachTrackingMetadata } from '@/lib/cta'

const cta = attachTrackingMetadata(
  {
    label: 'Get Free Audit',
    href: '/contact?offer=audit',
    isPrimary: true
  },
  'service',
  'seo',
  'MOFU',
  'audit'
)

// Returns CTA with trackingId and trackingEvent populated
```

## Funnel Stages

- **TOFU (Top of Funnel)**: Awareness/education. CTAs: Tools, Downloads, Learn More
- **MOFU (Middle of Funnel)**: Consideration/evaluation. CTAs: Audits, Strategy, Case Studies
- **BOFU (Bottom of Funnel)**: Conversion/decision. CTAs: Quotes, Booking, Contact

## Page Type Mapping

See `funnel-stages.ts` for complete mapping. Examples:
- `service` → BOFU
- `city-service` → BOFU
- `city-industry-service` → BOFU
- `industry` → MOFU
- `city` → MOFU
- `tool` → TOFU
- `glossary` → TOFU

## Exemptions

Pages exempt from primary CTA requirement:
- Entity pages (`entity`)
- Glossary pages (`glossary`)
- Legal pages (`/trust/privacy`, `/trust/terms`, etc.)

## CI Validation

Run CI validation:

```bash
node ci/validate-ctas.js
```

Fails build on:
- BOFU pages missing primary CTA
- Multiple primary CTAs
- Funnel mismatch destinations
- Missing tracking on BOFU CTAs

## Files

- `funnel-stages.ts`: Funnel stage definitions and page type mapping
- `patterns.ts`: CTA patterns by funnel stage
- `validation.ts`: CTA validation functions
- `tracking.ts`: Tracking event naming and helpers
- `recommendations.ts`: Helper functions for recommended CTAs
- `index.ts`: Main export file

## Integration

### In Page Templates

```typescript
import { getRecommendedCTAs, getFunnelStage } from '@/lib/cta'

export default function ServicePage({ params }) {
  const { primary, secondary } = getRecommendedCTAs(
    'service',
    `/services/${params.service}`,
    params
  )
  
  return (
    <div>
      {primary && (
        <Button href={primary.href} data-tracking-id={primary.trackingId}>
          {primary.label}
        </Button>
      )}
      {secondary && (
        <Link href={secondary.href}>{secondary.label}</Link>
      )}
    </div>
  )
}
```

### In Build-Time Validation

```typescript
import { validateCTAs, getFunnelStage } from '@/lib/cta'

// In generateMetadata or build-time validation
const funnelStage = getFunnelStage(pageType, pathname)
const validation = validateCTAs({ pageType, pathname, funnelStage, ctas })

if (!validation.ok) {
  console.error('CTA validation failed:', validation.errors)
}
```

## Governance Rules

1. **Exactly 1 Primary CTA**: Required on all pages except exemptions
2. **Max 1 Secondary CTA**: Optional, but max 1 if present
3. **Label Format**: 2-5 words, max 30 chars, action verb + object
4. **Destination Rules**: Must match allowed patterns for funnel stage
5. **Tracking**: Required on BOFU, recommended on TOFU/MOFU

## Tracking Events

Tracking events follow pattern: `cta_{action}_{object}`

Examples:
- `cta_get_audit`
- `cta_book_call`
- `cta_download_guide`
- `cta_quote_request`

Tracking IDs follow pattern: `{pageType}_{identifier}_{position}`

Examples:
- `service_seo_primary`
- `city-service_denver-co_seo_primary`
- `city-industry-service_denver-co_healthcare_web-development_primary`
