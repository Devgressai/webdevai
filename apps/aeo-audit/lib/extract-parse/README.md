# Extract Parse Implementation

## Overview

The Extract Parse worker parses HTML and extracts:
- SEO metadata (title, meta description, meta robots, canonical)
- Social tags (OG, Twitter)
- Content structure (headings, word count, lists, images)
- JSON-LD blocks (raw text, parsed types, parse status)

## Process Flow

```
1. Receive HTML (from payload or Page metadata)
   ↓
2. Parse HTML with Cheerio
   - Extract title, meta tags, canonical
   - Extract OG/Twitter tags
   - Extract headings (h1, h2, h3)
   - Count words (visible text heuristic)
   - Count lists (ul, ol)
   - Count images and alt coverage
   ↓
3. Extract JSON-LD blocks
   - Find all <script type="application/ld+json">
   - Parse JSON
   - Extract @type
   - Track parse success/failure
   ↓
4. Update Page record
   - Store title in Page.title
   - Store all metadata in Page.metadata
   ↓
5. Store JSON-LD in SchemaBlock table
   - One record per JSON-LD block
   - Store raw text, parsed type, parse status
   ↓
6. Store Evidence snippets
   - Canonical tag snippet
   - Title/meta snippet
   - First JSON-LD block snippet
```

## Extracted Metadata

### SEO Metadata
- **title**: Page title from `<title>` tag
- **metaDescription**: Content from `<meta name="description">`
- **metaRobots**: Content from `<meta name="robots">`
- **canonical**: URL from `<link rel="canonical">`

### Social Tags
- **ogTags**: All Open Graph tags (`og:*`)
- **twitterTags**: All Twitter Card tags (`twitter:*`)

### Content Structure
- **headings**: Arrays of h1, h2, h3 text
- **wordCount**: Word count of visible text (script/style removed)
- **lists**: Count of `<ul>` and `<ol>` elements
- **images**: Count, with alt, without alt

### JSON-LD Blocks
- **rawText**: Raw JSON-LD string
- **parsedType**: Extracted `@type` value
- **parseOk**: Whether JSON parsed successfully
- **parsedData**: Parsed JSON object (if successful)

## Deterministic Truncation Rules

All text truncation follows deterministic rules:

### Rule: `truncateText(text, maxLength)`

1. **If text length ≤ maxLength**: Return text as-is
2. **If text length > maxLength**:
   - Truncate to `(maxLength - 3)` characters
   - Append `"..."` (3 characters)
   - Total length = `maxLength`
3. **Edge case**: If `maxLength ≤ 3`, truncate to `maxLength` without ellipsis

### Truncation Limits

| Snippet Type | Default Max | Configurable | Purpose |
|--------------|-------------|--------------|---------|
| **Evidence snippets** | 5000 chars | `EXTRACT_PARSE_MAX_EVIDENCE_SNIPPET` | General Evidence content |
| **JSON-LD block** | 50000 chars | `EXTRACT_PARSE_MAX_JSONLD_BLOCK` | SchemaBlock rawText |
| **Title/meta snippet** | 500 chars | `EXTRACT_PARSE_MAX_TITLE_SNIPPET` | Title/meta Evidence |
| **Canonical snippet** | 200 chars | `EXTRACT_PARSE_MAX_CANONICAL_SNIPPET` | Canonical Evidence |

### Examples

```typescript
// Example 1: Text fits
truncateText("Hello", 10) 
// Returns: "Hello"

// Example 2: Text exceeds limit
truncateText("This is a very long text that exceeds the limit", 20)
// Returns: "This is a very lo..."

// Example 3: Edge case
truncateText("Hello", 3)
// Returns: "Hel"
```

## Evidence Snippets

### 1. Canonical Tag Snippet

**Type**: `canonical_tag`

**Content**: Truncated canonical URL

**Rules**:
- Only stored if canonical tag present
- Max length: 200 chars (configurable)
- Truncation: `truncateText(canonical, maxCanonicalSnippetSize)`

**Metadata**:
```json
{
  "fullUrl": "https://example.com/full/canonical/url",
  "truncated": false
}
```

### 2. Title/Meta Snippet

**Type**: `title_meta_snippet`

**Content**: Combined title, meta description, meta robots

**Format**:
```
Title: Page Title
Meta Description: Page description text
Meta Robots: noindex, nofollow
```

**Rules**:
- Only stored if at least one field present
- Max length: 500 chars (configurable)
- Truncation: `truncateText(combined, maxTitleSnippetSize)`

**Metadata**:
```json
{
  "hasTitle": true,
  "hasMetaDescription": true,
  "hasMetaRobots": true,
  "truncated": false
}
```

### 3. First JSON-LD Block Snippet

**Type**: `jsonld_block_snippet`

**Content**: Truncated raw JSON-LD text from first block

**Rules**:
- Only stored if JSON-LD blocks found
- Uses first block only
- Max length: 5000 chars (configurable)
- Truncation: `truncateText(rawText, maxEvidenceSnippetSize)`

**Metadata**:
```json
{
  "blockIndex": 0,
  "parsedType": "Organization",
  "parseOk": true,
  "totalBlocks": 3,
  "originalSize": 1234,
  "truncated": false
}
```

## SchemaBlock Storage

### Table Structure

```typescript
{
  id: string
  pageId: string
  rawText: string        // Truncated to maxJsonLdBlockSize
  parsedType: string | null
  parseOk: boolean
  parsedData: Json | null  // Full parsed JSON (if parseOk)
  metadata: {
    position: number      // Order in document
    originalSize: number  // Original size before truncation
    truncated: boolean    // Whether truncation occurred
  }
}
```

### Storage Rules

1. **Delete existing**: All existing SchemaBlocks for page are deleted before inserting new ones
2. **One block per record**: Each JSON-LD block gets its own SchemaBlock record
3. **Truncation**: `rawText` is truncated to `maxJsonLdBlockSize` (default 50KB)
4. **Parse status**: `parseOk` indicates if JSON parsed successfully
5. **Type extraction**: `parsedType` extracted from `@type` field

## Page Metadata Storage

### Direct Fields

- **Page.title**: Extracted title (stored in Page.title column)

### Metadata JSON

All other data stored in `Page.metadata`:

```json
{
  "metaDescription": "...",
  "metaRobots": "...",
  "canonical": "...",
  "ogTags": { "present": true, "tags": {...} },
  "twitterTags": { "present": true, "tags": {...} },
  "headings": {
    "h1": ["..."],
    "h2": ["..."],
    "h3": ["..."]
  },
  "wordCount": 1234,
  "lists": {
    "ulCount": 5,
    "olCount": 2
  },
  "images": {
    "count": 10,
    "withAlt": 8,
    "withoutAlt": 2
  },
  "jsonLdBlockCount": 3,
  "jsonLdTypes": ["Organization", "WebPage"],
  "jsonLdParseOkCount": 2,
  "extractedAt": "2024-01-01T00:00:00.000Z"
}
```

## Configuration

### Environment Variables

```env
EXTRACT_PARSE_MAX_EVIDENCE_SNIPPET=5000    # Max Evidence snippet size
EXTRACT_PARSE_MAX_JSONLD_BLOCK=50000       # Max JSON-LD block size
EXTRACT_PARSE_MAX_TITLE_SNIPPET=500        # Max title/meta snippet
EXTRACT_PARSE_MAX_CANONICAL_SNIPPET=200    # Max canonical snippet
```

## Word Count Heuristic

The word count uses a simple heuristic:

1. Remove `<script>`, `<style>`, `<noscript>`, `<iframe>` elements
2. Extract text from `<body>` (or `<html>` if body not found)
3. Normalize whitespace (multiple spaces → single space)
4. Split by whitespace
5. Filter empty strings
6. Count remaining words

**Note**: This is a heuristic and may not match exact word counts from other tools.

## JSON-LD Parsing

### Supported Formats

1. **Single object**: `{ "@type": "Organization", ... }`
2. **Array of objects**: `[{ "@type": "Organization", ... }, ...]`
3. **With @context**: `{ "@context": "...", "@type": "Organization", ... }`

### Type Extraction

- **Single object**: Extract `@type` directly
- **Array**: Extract `@type` from first element
- **Missing @type**: `parsedType = null`

### Parse Status

- **parseOk = true**: JSON parsed successfully
- **parseOk = false**: JSON parse failed (invalid JSON)

## Error Handling

### Missing HTML

If HTML not provided in payload:
1. Try to get from `Page.metadata.html`
2. If not found, return error: `"HTML content not available"`

### Parse Errors

- HTML parse errors: Return empty metadata, log error
- JSON-LD parse errors: Mark `parseOk = false`, store raw text

## Usage

```typescript
import { extractAndParse } from '@/lib/extract-parse/worker'

const result = await extractAndParse({
  scanId: 'scan_123',
  pageId: 'page_456',
  url: 'https://example.com',
  html: '<html>...</html>', // Optional if stored in Page.metadata
})

console.log(`Title: ${result.metadata.title}`)
console.log(`JSON-LD blocks: ${result.jsonLdBlocks.length}`)
```

## Next Steps

1. Run migration to create SchemaBlock table
2. Store HTML in Page.metadata during page_fetch
3. Add HTML caching/compression
4. Enhance word count accuracy
5. Add schema validation

