# Uniqueness Injection Blocks

Provider-based system for uniqueness injection blocks with caching and validation.

## Usage

### 1. Choose a Provider

Each block type has three provider implementations:

- **LocalJsonProvider**: For dev/seed data (JSON files)
- **CmsProvider**: For CMS integration (reads from CMS fields)
- **StubProvider**: Throws clear error if not implemented

### 2. Example: Local Data Card

```typescript
import { 
  getLocalDataCard, 
  LocalJsonLocalDataProvider,
  CmsLocalDataProvider 
} from '@/lib/blocks'

// Option 1: Use JSON provider with seed data
const jsonProvider = new LocalJsonLocalDataProvider([
  {
    city: 'new-york-ny',
    state: 'NY',
    service: 'seo',
    serp_data: { avg_competitor_count: 15, ... },
    market_data: { market_size: 1000000, ... },
    // ... full LocalDataCard object
  }
])

// Option 2: Use CMS provider
const cmsProvider = new CmsLocalDataProvider(async (input) => {
  // Fetch from your CMS (Sanity, Contentful, etc.)
  const cmsData = await fetchFromCms(`local-data-${input.city}-${input.service}`)
  return cmsData
})

// Get data (with caching)
const result = await getLocalDataCard(
  { city: 'new-york-ny', state: 'NY', service: 'seo' },
  jsonProvider
)

if (result.validation.valid && result.data) {
  // Use result.data
} else {
  // Handle validation errors
  result.validation.errors.forEach(error => {
    console.error(`${error.code}: ${error.message}`)
  })
  // Page will be noindex if block is invalid
}
```

### 3. Example: Industry KPI Map

```typescript
import { 
  getIndustryKpiMap, 
  LocalJsonIndustryKpiProvider 
} from '@/lib/blocks'

const provider = new LocalJsonIndustryKpiProvider([
  {
    industry: 'healthcare',
    service: 'seo',
    kpis: [
      { metric: 'Patient Acquisition Cost', benchmark: 500 },
      { metric: 'Appointment Conversion Rate', benchmark: 0.15 },
      // ... 5-10 KPIs total
    ],
    constraints: [
      { type: 'HIPAA', description: 'Must comply with HIPAA regulations' }
    ],
    buyer_journey: {
      awareness: ['Research symptoms', 'Find providers'],
      consideration: ['Compare options', 'Read reviews'],
      decision: ['Book appointment', 'Schedule consultation']
    },
    last_updated: new Date().toISOString()
  }
])

const result = await getIndustryKpiMap(
  { industry: 'healthcare', service: 'seo' },
  provider
)
```

### 4. Example: Proof Slot

```typescript
import { 
  getProofSlot, 
  LocalJsonProofProvider 
} from '@/lib/blocks'

const provider = new LocalJsonProofProvider([
  {
    type: 'case_study',
    case_study_ref: {
      case_study_id: 'client-123',
      case_study_url: '/case-studies/client-123',
      case_study_verified: true,
      testimonial: {
        client_name: 'Client Name',
        client_verified: true,
        quote: 'Great results!'
      }
    },
    last_updated: new Date().toISOString()
  }
])

const result = await getProofSlot(
  { city: 'new-york-ny', service: 'seo', industry: 'healthcare' },
  provider
)
```

## Integration with Index Policy

The validation functions are automatically used by `index-policy.ts`:

- Missing or invalid blocks → page becomes noindex
- Validation errors are logged with structured error codes
- Stale data (>90 days) → validation fails

## Caching

All providers use in-memory caching:

- **LocalDataCard**: 24 hour TTL
- **IndustryKpiMap**: 12 hour TTL  
- **ProofSlot**: 6 hour TTL

Cache keys are generated from input parameters. Stale data (>90 days) triggers validation failure.

## Error Handling

All validation functions return structured `ValidationResult`:

```typescript
{
  valid: boolean
  errors: Array<{
    code: string        // Error code (e.g., 'MISSING_CITY')
    message: string     // Human-readable message
    field?: string      // Field path (e.g., 'serp_data.avg_competitor_count')
  }>
}
```

## Provider Interface

All providers implement:

```typescript
interface Provider {
  get(input): Promise<Data>
  validate(data): ValidationResult
  getLastUpdated(data): Date
  getSources(data): string[]
}
```

Implement custom providers by implementing this interface.
