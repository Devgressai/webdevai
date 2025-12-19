# LLM Provider Integration Guide

## Overview

This guide explains how to plug in a real LLM provider (OpenAI, Anthropic, Google) to replace the mock provider.

## Current Architecture

### Provider Interface

All providers implement the `LlmProvider` interface:

```typescript
interface LlmProvider {
  evaluate(
    extracts: SanitizedExtract[],
    evalType: 'readiness_score' | 'schema_quality' | 'content_alignment',
    config: LlmEvalConfig
  ): Promise<LlmEvalResult>
}
```

### Provider Selection

Providers are selected via `LLM_EVAL_PROVIDER` environment variable:

- `mock` → MockLlmProvider (default, no API key needed)
- `openai` → OpenAiProvider (requires `OPENAI_API_KEY`)
- `anthropic` → AnthropicProvider (requires `ANTHROPIC_API_KEY`)
- `google` → GoogleProvider (requires `GOOGLE_AI_API_KEY`)

## Integration Steps

### Step 1: Install Provider SDK

**OpenAI**:
```bash
npm install openai
```

**Anthropic**:
```bash
npm install @anthropic-ai/sdk
```

**Google**:
```bash
npm install @google/generative-ai
```

### Step 2: Implement Provider Class

#### OpenAI Example

```typescript
// lib/llm-eval/providers/openai.ts
import OpenAI from 'openai'
import { LlmProvider } from '../provider'
import { SanitizedExtract } from '../extract'
import { LlmEvalResult, validateLlmEvalResult } from '../schemas'
import { LlmEvalConfig } from '../config'

export class OpenAiProvider implements LlmProvider {
  private client: OpenAI

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey })
  }

  async evaluate(
    extracts: SanitizedExtract[],
    evalType: 'readiness_score' | 'schema_quality' | 'content_alignment',
    config: LlmEvalConfig
  ): Promise<LlmEvalResult> {
    // Build prompt
    const prompt = buildPrompt(extracts, evalType)

    // Call API
    const response = await this.client.chat.completions.create({
      model: config.model || 'gpt-4',
      temperature: config.temperature,
      max_tokens: config.maxTokens,
      messages: [
        {
          role: 'system',
          content: 'You are an AI search readiness evaluator. Return JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    })

    // Parse response
    const content = response.choices[0]?.message?.content
    if (!content) {
      throw new Error('Empty response from OpenAI')
    }

    const json = JSON.parse(content)

    // Validate
    const validation = validateLlmEvalResult(json)
    if (!validation.success) {
      throw new Error(`Validation failed: ${validation.error.message}`)
    }

    return validation.data
  }
}

function buildPrompt(
  extracts: SanitizedExtract[],
  evalType: string
): string {
  return `Evaluate the following pages for ${evalType}:

${extracts.map((e, i) => `
Page ${i + 1}:
- URL: ${e.url}
- Title: ${e.title || 'N/A'}
- Meta Description: ${e.metaDescription || 'N/A'}
- Word Count: ${e.wordCount}
- Schema Types: ${e.schemaTypes.join(', ') || 'None'}
- Headings: H1(${e.headings.h1.length}), H2(${e.headings.h2.length}), H3(${e.headings.h3.length})
`).join('\n')}

Return a JSON object with:
- overallScore (0-100)
- readinessLevel (excellent/good/fair/poor/critical)
- evidence_quotes (array of {quote, source, context})
- recommendations (array of {priority, category, suggestion, rationale})
- strengths, weaknesses, reasoning (optional)
`
}
```

#### Anthropic Example

```typescript
// lib/llm-eval/providers/anthropic.ts
import Anthropic from '@anthropic-ai/sdk'
import { LlmProvider } from '../provider'
import { SanitizedExtract } from '../extract'
import { LlmEvalResult, validateLlmEvalResult } from '../schemas'
import { LlmEvalConfig } from '../config'

export class AnthropicProvider implements LlmProvider {
  private client: Anthropic

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey })
  }

  async evaluate(
    extracts: SanitizedExtract[],
    evalType: 'readiness_score' | 'schema_quality' | 'content_alignment',
    config: LlmEvalConfig
  ): Promise<LlmEvalResult> {
    const prompt = buildPrompt(extracts, evalType)

    const response = await this.client.messages.create({
      model: config.model || 'claude-3-opus-20240229',
      max_tokens: config.maxTokens || 2000,
      temperature: config.temperature,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type from Anthropic')
    }

    const json = JSON.parse(content.text)
    const validation = validateLlmEvalResult(json)
    if (!validation.success) {
      throw new Error(`Validation failed: ${validation.error.message}`)
    }

    return validation.data
  }
}
```

### Step 3: Update Provider Factory

Update `lib/llm-eval/provider.ts`:

```typescript
import { OpenAiProvider } from './providers/openai'
import { AnthropicProvider } from './providers/anthropic'
import { GoogleProvider } from './providers/google'

export function getLlmProvider(config: LlmEvalConfig): LlmProvider {
  switch (config.provider) {
    case 'openai':
      const openaiKey = process.env.OPENAI_API_KEY
      if (!openaiKey) {
        throw new Error('OPENAI_API_KEY not set')
      }
      return new OpenAiProvider(openaiKey)

    case 'anthropic':
      const anthropicKey = process.env.ANTHROPIC_API_KEY
      if (!anthropicKey) {
        throw new Error('ANTHROPIC_API_KEY not set')
      }
      return new AnthropicProvider(anthropicKey)

    // ... etc
  }
}
```

### Step 4: Set Environment Variables

```env
LLM_EVAL_PROVIDER=openai
OPENAI_API_KEY=sk-...
LLM_EVAL_MODEL=gpt-4
LLM_EVAL_TEMPERATURE=0.7
LLM_EVAL_MAX_TOKENS=2000
```

### Step 5: Test

```typescript
// Test with real provider
const result = await evaluateWithLlm({
  scanId: 'scan_123',
  evalType: 'readiness_score',
})
```

## Prompt Engineering

### Prompt Structure

1. **System Message**: Define role and output format
2. **User Message**: Include sanitized extracts and evaluation criteria
3. **Response Format**: Request JSON (if supported by provider)

### Example Prompt Template

```
You are an AI search readiness evaluator. Evaluate the following pages and return JSON.

Pages:
{extracts}

Evaluation Criteria:
- Schema readiness: Presence and quality of structured data
- Content quality: Depth, clarity, organization
- Metadata completeness: Title, description, canonical
- AI readiness: Answer surface optimization

Return JSON with:
- overallScore (0-100)
- readinessLevel
- evidence_quotes (required unless insufficient_evidence: true)
- recommendations
```

## Error Handling

### API Errors

```typescript
try {
  const result = await provider.evaluate(extracts, evalType, config)
} catch (error) {
  if (error instanceof OpenAI.APIError) {
    // Handle OpenAI-specific errors
  } else if (error instanceof Anthropic.APIError) {
    // Handle Anthropic-specific errors
  } else {
    // Handle generic errors
  }
}
```

### Validation Errors

Validation errors are caught and returned in the result:

```typescript
const validation = validateLlmEvalResult(json)
if (!validation.success) {
  return {
    success: false,
    error: `Validation failed: ${validation.error.message}`,
  }
}
```

## Rate Limiting

### Per-Provider Limits

- **OpenAI**: Varies by tier (check your plan)
- **Anthropic**: Varies by tier
- **Google**: Varies by tier

### Implementation

Add rate limiting in provider:

```typescript
import pLimit from 'p-limit'

const limit = pLimit(5) // 5 concurrent requests

async evaluate(...) {
  return limit(async () => {
    // API call
  })
}
```

## Cost Tracking

### Track Token Usage

```typescript
const response = await client.chat.completions.create(...)

const tokens = {
  prompt: response.usage?.prompt_tokens || 0,
  completion: response.usage?.completion_tokens || 0,
  total: response.usage?.total_tokens || 0,
}

// Store in metadata
metadata: {
  ...metadata,
  tokenUsage: tokens,
  estimatedCost: calculateCost(tokens, model),
}
```

## Testing

### Mock Provider

Use mock provider for development:

```env
LLM_EVAL_PROVIDER=mock
```

### Real Provider Testing

1. Set API key in environment
2. Set provider to real provider
3. Run with small sample set
4. Verify validation passes
5. Check evidence quotes stored

## Security

### API Key Storage

- ✅ Store in environment variables
- ✅ Never commit to git
- ✅ Use secrets management in production
- ❌ Never hardcode in code

### Input Sanitization

- ✅ Sanitized extracts (no HTML)
- ✅ URL validation
- ✅ Schema validation on output

## Summary

To integrate a real provider:

1. Install provider SDK
2. Implement provider class
3. Update provider factory
4. Set environment variables
5. Test with small sample
6. Monitor costs and rate limits

The interface is designed to be provider-agnostic, making it easy to switch providers or support multiple providers simultaneously.

