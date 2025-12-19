# LLM Eval Implementation

## Overview

The LLM Eval job evaluates pages using LLM providers with sanitized extracts (NO raw HTML). It includes sampling, validation, and evidence quote storage.

## Process Flow

```
1. Select sampling set:
   - Homepage/about/contact pages
   - Top pages (by internal links)
   - Representative per cluster (bounded)
   ↓
2. Build sanitized extracts (NO raw HTML)
   - Only structured data: title, meta, headings, schema types, etc.
   ↓
3. Call LLM provider (mock or real)
   ↓
4. Validate strict JSON output with Zod
   ↓
5. Enforce evidence_quotes requirement
   ↓
6. Store LlmEval record
   ↓
7. Store evidence quotes as Evidence records
```

## Sampling Strategy

### Homepage Pages
- **Target**: Homepage, about, contact pages
- **Limit**: 3 pages (configurable)
- **Selection**: URL pattern matching (`/`, `/home`, `/about`, `/contact`)

### Top Pages
- **Target**: Pages with highest internal link count
- **Limit**: 10 pages (configurable)
- **Selection**: Sorted by `internalLinkCount * 2 + wordCount`
- **Fallback**: Word count if link count unavailable

### Cluster Representatives
- **Target**: One representative page per cluster
- **Limit**: 5 clusters (configurable)
- **Selection**: Uses `representativeType: 'best'` or `'typical'` from ClusterPageMap

### Total Sample Limit
- **Max**: 20 pages total (configurable)
- **Deduplication**: Pages selected in priority order (homepage → top → cluster)

## Sanitized Extract

### What's Included (NO Raw HTML)

```typescript
{
  url: string
  title: string | null
  metaDescription: string | null
  canonical: string | null
  headings: {
    h1: string[]
    h2: string[]
    h3: string[]
  }
  wordCount: number
  schemaTypes: string[]
  schemaSummary: Array<{
    type: string
    parseOk: boolean
  }>
  images: {
    total: number
    withAlt: number
  }
  lists: {
    ul: number
    ol: number
  }
}
```

### What's Excluded

- ❌ Raw HTML content
- ❌ Full page text
- ❌ Script tags
- ❌ Style content
- ❌ Any markup

**Rationale**: LLM evaluation focuses on structured metadata and content organization, not raw HTML parsing.

## LLM Provider Interface

### Interface

```typescript
interface LlmProvider {
  evaluate(
    extracts: SanitizedExtract[],
    evalType: 'readiness_score' | 'schema_quality' | 'content_alignment',
    config: LlmEvalConfig
  ): Promise<LlmEvalResult>
}
```

### Implementations

1. **MockProvider** (default)
   - Returns mock responses for testing
   - No API calls
   - Validates response structure

2. **OpenAiProvider** (stub)
   - Ready for OpenAI API integration
   - Requires `OPENAI_API_KEY`

3. **AnthropicProvider** (stub)
   - Ready for Anthropic API integration
   - Requires `ANTHROPIC_API_KEY`

4. **GoogleProvider** (stub)
   - Ready for Google AI API integration
   - Requires `GOOGLE_AI_API_KEY`

## Validation Schema

### Required Fields

- `overallScore`: 0-100
- `readinessLevel`: enum (excellent/good/fair/poor/critical)
- `recommendations`: Array of recommendation objects

### Optional Fields

- `schemaReadiness`: 0-100
- `contentQuality`: 0-100
- `metadataCompleteness`: 0-100
- `aiReadiness`: 0-100
- `strengths`: Array of strings
- `weaknesses`: Array of strings
- `reasoning`: String

### Evidence Quotes

- **Required** unless `insufficient_evidence: true`
- Each quote must have:
  - `quote`: Non-empty string
  - `source`: Valid URL
  - `context`: Optional string

### Validation Rules

1. **Strict JSON**: All fields must match schema types
2. **Score Ranges**: All scores must be 0-100
3. **Evidence Quotes**: Required unless `insufficient_evidence: true`
4. **URL Validation**: Source URLs must be valid

## Evidence Quotes Enforcement

### Rule

```typescript
if (requireEvidenceQuotes && !insufficient_evidence) {
  if (!evidence_quotes || evidence_quotes.length === 0) {
    throw new Error('evidence_quotes required')
  }
}
```

### When Allowed

- `insufficient_evidence: true` → Evidence quotes optional
- `requireEvidenceQuotes: false` → Evidence quotes optional

### Storage

Evidence quotes are stored as `Evidence` records:
- **Type**: `llm_evidence_quote`
- **Content**: Quote text
- **Selector**: Context (if provided)
- **Metadata**: Source URL, eval ID, eval type

## Configuration

### Environment Variables

```env
# Sampling
LLM_EVAL_MAX_HOMEPAGE_PAGES=3
LLM_EVAL_MAX_TOP_PAGES=10
LLM_EVAL_MAX_CLUSTER_REPRESENTATIVES=5
LLM_EVAL_MAX_TOTAL_SAMPLES=20

# Provider
LLM_EVAL_PROVIDER=mock  # mock, openai, anthropic, google
LLM_EVAL_MODEL=gpt-4
LLM_EVAL_TEMPERATURE=0.7
LLM_EVAL_MAX_TOKENS=2000

# Validation
LLM_EVAL_REQUIRE_EVIDENCE_QUOTES=true
LLM_EVAL_ALLOW_INSUFFICIENT_EVIDENCE=true
```

## Usage

```typescript
import { evaluateWithLlm } from '@/lib/llm-eval/worker'

const result = await evaluateWithLlm({
  scanId: 'scan_123',
  evalType: 'readiness_score',
  context: { /* optional context */ },
})

console.log(`Score: ${result.overallScore}`)
console.log(`Evidence quotes: ${result.evidenceQuotes.length}`)
```

## Next Steps

1. Implement real LLM provider integrations
2. Add prompt templates for different eval types
3. Add retry logic for API failures
4. Add rate limiting per provider
5. Add cost tracking

