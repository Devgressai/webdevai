# LLM Eval Implementation Summary

## Created Files

### Core Implementation
1. `lib/llm-eval/config.ts` - Configuration and site type weightings
2. `lib/llm-eval/sampling.ts` - Page sampling logic
3. `lib/llm-eval/extract.ts` - Sanitized extract builder (NO raw HTML)
4. `lib/llm-eval/schemas.ts` - Zod validation schemas
5. `lib/llm-eval/provider.ts` - LLM provider interface and implementations
6. `lib/llm-eval/worker.ts` - Main evaluation worker
7. `lib/llm-eval/index.ts` - Exports

### Documentation
8. `lib/llm-eval/README.md` - Implementation guide
9. `lib/llm-eval/PROVIDER_INTEGRATION.md` - How to plug in real providers

### Worker Integration
10. `lib/queues/workers.ts` (updated) - LLM Eval worker now calls implementation

## Key Features

### 1. Sampling Strategy

**Homepage Pages** (max 3):
- Homepage (`/`, `/home`, `/index`)
- About page (`/about`)
- Contact page (`/contact`)

**Top Pages** (max 10):
- Sorted by: `internalLinkCount * 2 + wordCount`
- Fallback to word count if link count unavailable

**Cluster Representatives** (max 5):
- One representative per cluster
- Uses `representativeType: 'best'` or `'typical'`

**Total Limit**: 20 pages (configurable)

### 2. Sanitized Extract (NO Raw HTML)

**Included**:
- URL, title, meta description, canonical
- Headings (h1, h2, h3 arrays)
- Word count
- Schema types and summary
- Image counts (total, with alt)
- List counts (ul, ol)

**Excluded**:
- ❌ Raw HTML
- ❌ Full page text
- ❌ Script/style content
- ❌ Any markup

### 3. LLM Provider Interface

**Interface**:
```typescript
interface LlmProvider {
  evaluate(
    extracts: SanitizedExtract[],
    evalType: 'readiness_score' | 'schema_quality' | 'content_alignment',
    config: LlmEvalConfig
  ): Promise<LlmEvalResult>
}
```

**Implementations**:
- `MockLlmProvider` (default) - Mock responses, no API key
- `OpenAiProvider` (stub) - Ready for OpenAI integration
- `AnthropicProvider` (stub) - Ready for Anthropic integration
- `GoogleProvider` (stub) - Ready for Google AI integration

### 4. Strict JSON Validation

**Zod Schema Validates**:
- `overallScore`: 0-100 (required)
- `readinessLevel`: enum (required)
- `evidence_quotes`: Array of quotes (optional, but enforced by business logic)
- `insufficient_evidence`: Boolean flag
- `recommendations`: Array (required)
- Optional: `schemaReadiness`, `contentQuality`, `metadataCompleteness`, `aiReadiness`, `strengths`, `weaknesses`, `reasoning`

**Validation Rules**:
- All scores must be 0-100
- Evidence quotes must have valid URLs
- Recommendations must have priority, category, suggestion

### 5. Evidence Quotes Enforcement

**Rule**: `evidence_quotes` required unless `insufficient_evidence: true`

**Implementation**:
```typescript
if (requireEvidenceQuotes && !insufficient_evidence && !hasEvidenceQuotes) {
  throw new Error('evidence_quotes required')
}
```

**When Allowed**:
- `insufficient_evidence: true` → Quotes optional
- `requireEvidenceQuotes: false` → Quotes optional

### 6. Evidence Quote Storage

Evidence quotes are stored as `Evidence` records:
- **Type**: `llm_evidence_quote`
- **Content**: Quote text
- **Selector**: Context (if provided)
- **Metadata**: Source URL, eval ID, eval type

## How to Plug in Real Provider

### Step 1: Install SDK

```bash
# OpenAI
npm install openai

# Anthropic
npm install @anthropic-ai/sdk

# Google
npm install @google/generative-ai
```

### Step 2: Implement Provider Class

Create `lib/llm-eval/providers/openai.ts`:

```typescript
import OpenAI from 'openai'
import { LlmProvider } from '../provider'
// ... implement evaluate() method
```

### Step 3: Update Provider Factory

Update `getLlmProvider()` in `lib/llm-eval/provider.ts` to instantiate real provider.

### Step 4: Set Environment Variables

```env
LLM_EVAL_PROVIDER=openai
OPENAI_API_KEY=sk-...
LLM_EVAL_MODEL=gpt-4
```

### Step 5: Build Prompt

Create prompt template that:
- Includes sanitized extracts
- Requests JSON output
- Specifies evaluation criteria
- Requires evidence quotes (unless insufficient evidence)

### Step 6: Handle Response

1. Parse JSON from LLM response
2. Validate with `validateLlmEvalResult()`
3. Enforce evidence quotes requirement
4. Return validated result

## Mock Provider Behavior

The mock provider:
- ✅ Returns realistic mock responses
- ✅ Validates response structure
- ✅ Generates evidence quotes from extracts
- ✅ Calculates scores based on extract data
- ✅ No API calls (fast, free)

**Use for**:
- Development
- Testing
- CI/CD
- When API keys unavailable

## Configuration

```env
# Sampling
LLM_EVAL_MAX_HOMEPAGE_PAGES=3
LLM_EVAL_MAX_TOP_PAGES=10
LLM_EVAL_MAX_CLUSTER_REPRESENTATIVES=5
LLM_EVAL_MAX_TOTAL_SAMPLES=20

# Provider
LLM_EVAL_PROVIDER=mock
LLM_EVAL_MODEL=gpt-4
LLM_EVAL_TEMPERATURE=0.7
LLM_EVAL_MAX_TOKENS=2000

# Validation
LLM_EVAL_REQUIRE_EVIDENCE_QUOTES=true
LLM_EVAL_ALLOW_INSUFFICIENT_EVIDENCE=true
```

## Usage Example

```typescript
import { evaluateWithLlm } from '@/lib/llm-eval/worker'

const result = await evaluateWithLlm({
  scanId: 'scan_123',
  evalType: 'readiness_score',
  context: { /* optional */ },
})

if (result.success) {
  console.log(`Score: ${result.overallScore}`)
  console.log(`Evidence quotes: ${result.evidenceQuotes.length}`)
  console.log(`Eval ID: ${result.evalId}`)
}
```

## Data Flow

```
1. Select sampling set (homepage + top + cluster reps)
   ↓
2. Build sanitized extracts (NO HTML)
   ↓
3. Get LLM provider (mock or real)
   ↓
4. Call provider.evaluate()
   ↓
5. Validate JSON response with Zod
   ↓
6. Enforce evidence quotes requirement
   ↓
7. Store LlmEval record
   ↓
8. Store evidence quotes as Evidence records
```

## Security

- ✅ No raw HTML sent to LLM
- ✅ Only structured metadata
- ✅ API keys in environment variables
- ✅ Input/output validation
- ✅ No hardcoded credentials

## Next Steps

1. Implement real provider integrations (OpenAI, Anthropic, Google)
2. Add prompt templates for different eval types
3. Add retry logic for API failures
4. Add rate limiting per provider
5. Add cost tracking and token usage
6. Add prompt versioning
7. Add A/B testing for prompts

