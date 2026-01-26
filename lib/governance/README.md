# Governance Disclaimers + Data Integrity Controls

Production-grade governance system for ensuring trust, compliance, and data integrity across all WebVello pages.

## Overview

The Governance System ensures:
- **Transparency**: All data has traceable sources
- **Accuracy**: No fabricated data, no invented results
- **Timeliness**: Data includes last updated timestamp with staleness detection
- **Methodology**: Clear explanation of data collection/calculation
- **Limitations**: Honest disclosure of data limitations
- **No Guarantees**: Clear disclaimers that results are not guaranteed
- **Human Review**: High-risk claims require approval before publishing

## Quick Start

### Validate Governance Disclaimer

```typescript
import { validateGovernanceDisclaimer, getDisclaimerStatus } from '@/lib/governance'

const disclaimer = {
  sources: [
    {
      name: 'Google Search Console',
      url: 'https://search.google.com/search-console',
      type: 'internal',
      access_date: '2026-01-20'
    }
  ],
  lastUpdated: '2026-01-25T10:00:00Z',
  methodologySummary: 'Data collected from 500+ client websites...',
  limitations: ['Benchmarks are based on aggregated data'],
  claimTypes: ['performance', 'roi']
}

const validation = validateGovernanceDisclaimer(disclaimer)
if (!validation.ok) {
  console.error('Validation errors:', validation.errors)
}

const status = getDisclaimerStatus(disclaimer)
console.log(status.status) // 'valid' | 'warning' | 'error'
```

### Check Content Integrity

```typescript
import { checkContentIntegrity } from '@/lib/governance'

const integrity = checkContentIntegrity(disclaimer, {
  hasCaseStudyMetrics: true,
  hasPerformanceClaims: true
})

if (!integrity.valid) {
  console.error('Integrity checks failed:', integrity.checks)
}
```

### Publish Gate (High-Risk Review)

```typescript
import { publishGate, detectHighRiskClaimFromPage } from '@/lib/governance'

const isHighRisk = detectHighRiskClaimFromPage(
  'pricing',
  '/pricing',
  { hasPricing: true, hasROIEstimates: true }
)

const gateResult = publishGate(disclaimer, {
  pageType: 'pricing',
  pathname: '/pricing',
  hasPricing: true,
  hasROIEstimates: true
})

if (!gateResult.canPublish) {
  console.error('Cannot publish:', gateResult.reasonCodes)
  if (gateResult.requiresApproval) {
    console.error('Approval token required')
  }
}
```

## Data Model

```typescript
interface GovernanceDisclaimer {
  sources: DataSource[]              // Required: At least 1 for high-risk claims
  lastUpdated: string                // Required: ISO 8601 datetime
  methodologySummary: string         // Required: Min 100 words for high-risk
  methodologyUrl?: string             // Optional: Link to full methodology
  limitations: string[]               // Required: At least 1 limitation
  claimTypes: ClaimType[]            // Required: Array of claim types
  complianceRefs?: string[]          // Optional: Compliance page references
  approvalToken?: string              // Required for high-risk if not approved
}
```

## Staleness Detection

- **< 30 days**: Current (green)
- **30-90 days**: Warning (yellow) - Review recommended
- **> 90 days**: Error (red) - Update required
- **> 180 days**: Critical error - Critical update required

## High-Risk Claims

High-risk claim types that require approval:
- `performance` - Performance guarantees or claims
- `roi` - ROI estimates or projections
- `ai-claims` - AI platform performance claims
- `competitor` - Competitor comparisons

High-risk page types:
- `pricing` - Pricing pages
- `research` - Research pages
- `comparison` - Comparison pages

## Approval Tokens

Approval tokens are loaded from environment variable:
```bash
GOVERNANCE_APPROVAL_TOKENS=token1,token2,token3
```

Tokens must be:
- At least 8 characters (16+ recommended)
- Present in allowlist
- Validated before publishing

## Content Integrity Rules

1. **No Fabricated Data**: All numbers must be traceable to sources
2. **No Invented Results**: All results must be from real data or clearly labeled as estimates
3. **No Misleading Claims**: Claims must be accurate and not exaggerated
4. **No Outdated Data**: Data >180 days old must be updated or removed
5. **No Missing Context**: Claims must include necessary context and limitations

## Integration

### In Page Templates

```typescript
import { GovernanceDisclaimerComponent } from '@/lib/governance/components/GovernanceDisclaimer'
import { validateGovernanceDisclaimer } from '@/lib/governance'

export default function PricingPage() {
  const disclaimer = {
    sources: [...],
    lastUpdated: '2026-01-25T10:00:00Z',
    methodologySummary: '...',
    limitations: [...],
    claimTypes: ['pricing']
  }
  
  const validation = validateGovernanceDisclaimer(disclaimer)
  
  return (
    <div>
      {/* Page content */}
      <GovernanceDisclaimerComponent 
        disclaimer={disclaimer} 
        variant="comprehensive"
      />
    </div>
  )
}
```

### In Build-Time Validation

```typescript
import { publishGate } from '@/lib/governance'

// In generateMetadata or build-time validation
const gateResult = publishGate(disclaimer, pageMeta)

if (!gateResult.canPublish) {
  throw new Error(`Page cannot be published: ${gateResult.reasonCodes.join(', ')}`)
}
```

### In CI Checks

```typescript
import { validateGovernanceDisclaimer, checkContentIntegrity } from '@/lib/governance'

// CI validation script
const validation = validateGovernanceDisclaimer(disclaimer)
const integrity = checkContentIntegrity(disclaimer)

if (!validation.ok || !integrity.valid) {
  process.exit(1) // Fail build
}
```

## Files

- `disclaimer.ts`: Core disclaimer data model and validation
- `content-integrity.ts`: Content integrity checks and XSS-safe utilities
- `review-workflow.ts`: High-risk review workflow and publish gates
- `components/GovernanceDisclaimer.tsx`: React component for rendering disclaimers
- `index.ts`: Main export file

## Governance Rules

1. **Data Sources**: Required for high-risk claim types
2. **Last Updated**: Must be within 180 days (90 days for warnings)
3. **Methodology**: Min 100 words for high-risk claims
4. **Limitations**: At least 1 limitation required
5. **Approval**: High-risk claims require approval token
6. **Staleness**: Data >90 days triggers warning, >180 days triggers error

## Example Disclaimer

```typescript
const disclaimer: GovernanceDisclaimer = {
  sources: [
    {
      name: 'Google Search Console',
      url: 'https://search.google.com/search-console',
      type: 'internal',
      access_date: '2026-01-20'
    },
    {
      name: 'Ahrefs Industry Report 2024',
      url: 'https://ahrefs.com/research',
      type: 'third_party',
      access_date: '2026-01-15'
    }
  ],
  lastUpdated: '2026-01-25T10:00:00Z',
  methodologySummary: 'Data collected from 500+ client websites over 12 months...',
  methodologyUrl: '/trust/our-methodology',
  limitations: [
    'Benchmarks are based on aggregated data and may not reflect individual results',
    'Market conditions can change rapidly',
    'Results may vary based on industry, location, and competition'
  ],
  claimTypes: ['performance', 'roi'],
  complianceRefs: ['data-ethics', 'ai-ethics'],
  approvalToken: 'approved-token-here' // Required for high-risk
}
```
