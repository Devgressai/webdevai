# Page Render Fallback Implementation

## Overview

The page render fallback system uses Playwright to render pages when raw HTML is insufficient for extraction. It only triggers when heuristics indicate rendering is needed.

## Components

### 1. Heuristics (`heuristics.ts`)

Determines if page rendering is needed based on:

1. **Visible text < 500 chars**: Insufficient content in raw HTML
2. **SPA shell detected AND missing key metadata**: Single Page Application with missing metadata
3. **Critical extraction fields missing**: Title, meta description, headings all missing

**Functions**:
- `shouldRenderPage(scanId, pageId, html)`: Main heuristic check
- `isSpaShell(html)`: Detect SPA indicators
- `isMissingKeyMetadata(metadata)`: Check for missing metadata
- `areCriticalFieldsMissing(metadata)`: Check for critical fields

### 2. Playwright Renderer (`playwright.ts`)

Renders pages with Playwright:

- **Timeout**: Max 10-15s (configurable, default 15s)
- **Asset blocking**: Blocks videos, large images when possible
- **Wait strategies**: Network idle, optional selector wait
- **Post-render extraction**: Extracts HTML after JavaScript execution

**Functions**:
- `renderPage(url, config)`: Render page with Playwright
- `isPlaywrightAvailable()`: Check if Playwright is installed
- `closeBrowser()`: Cleanup browser instance

### 3. Worker (`worker.ts`)

Orchestrates the render fallback process:

1. Checks heuristics
2. Renders with Playwright if needed
3. Stores render evidence
4. Enqueues extract_parse job with rendered HTML

**Functions**:
- `renderPageFallback(payload)`: Main worker function
- `storeRenderEvidence(pageId, evidence)`: Store render evidence

## Render Trigger Heuristics

### Heuristic 1: Insufficient Visible Text

**Condition**: `visibleTextLength < 500`

**Detection**:
- Strips scripts, styles, and HTML tags
- Counts remaining text characters
- If < 500 chars, likely needs rendering

**Confidence**: High

### Heuristic 2: SPA Shell + Missing Metadata

**Condition**: `isSpaShell(html) && isMissingKeyMetadata(metadata)`

**SPA Detection**:
- High script count (>5) + low visible text (<1000 chars)
- Root div with SPA IDs (`root`, `app`, `main`, `__next`)
- Framework detection (React, Vue, Angular, Next.js, etc.)

**Missing Metadata**:
- Missing 2+ of: title, meta description, headings, JSON-LD

**Confidence**: High

### Heuristic 3: Critical Fields Missing

**Condition**: All critical fields missing + low text

**Critical Fields**:
- Title
- Meta description
- Headings
- Visible text < 200 chars

**Confidence**: Medium

## Render Configuration

### Default Config

```typescript
{
  timeout: 15000,        // 15 seconds max
  blockAssets: true,     // Block heavy assets
  waitForTimeout: 1000,  // Wait 1s after load
}
```

### Asset Blocking

When `blockAssets: true`:
- **Videos**: Blocked (`.mp4`, `.webm`, `.avi`, `.mov`)
- **Large images**: Allowed (could add size checking)
- **Fonts**: Allowed (can slow rendering if blocked)
- **Other resources**: Allowed

## Evidence Storage

### Evidence Type

`render_fallback`

### Evidence Content

```json
{
  "renderUsed": true,
  "success": true,
  "duration": 1234,
  "reason": "SPA shell detected with missing key metadata",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Evidence Metadata

```json
{
  "duration": 1234,
  "reason": "SPA shell detected with missing key metadata",
  "metadata": {
    "title": "Page Title",
    "url": "https://example.com/page",
    "viewport": { "width": 1920, "height": 1080 }
  }
}
```

## Integration

### Page Fetch Worker

The `page_fetch` worker can trigger render fallback:

```typescript
// After fetching page, check if rendering needed
const heuristicResult = await shouldRenderPage(scanId, pageId, html)

if (heuristicResult.needsRender) {
  // Enqueue render fallback job
  await addJob(QUEUE_NAMES.PAGE_RENDER_FALLBACK, {
    scanId,
    url,
    fetchJobId: jobId,
  })
}
```

### Extract Parse Worker

The `extract_parse` worker receives rendered HTML:

```typescript
// Extract parse receives HTML (rendered or raw)
const html = payload.html // Rendered HTML from Playwright
const metadata = parseHtml(html)
```

## Usage

### Manual Render

```typescript
import { renderPage } from '@/lib/page-render/playwright'

const result = await renderPage('https://example.com', {
  timeout: 15000,
  blockAssets: true,
  waitForTimeout: 1000,
})

if (result.success) {
  console.log(`Rendered HTML: ${result.html?.length} chars`)
}
```

### Check Heuristics

```typescript
import { shouldRenderPage } from '@/lib/page-render/heuristics'

const result = await shouldRenderPage(scanId, pageId, html)

if (result.needsRender) {
  console.log(`Rendering needed: ${result.reason}`)
}
```

## Error Handling

### Playwright Not Available

If Playwright is not installed:
- Returns error: "Playwright not available"
- Does not attempt rendering

### Render Timeout

If render exceeds timeout:
- Returns error with timeout message
- Stores failure evidence
- Does not enqueue extract_parse

### Render Failure

If render fails for any reason:
- Stores failure evidence with reason
- Returns error
- Does not enqueue extract_parse

## Performance Considerations

1. **Concurrency**: Limited to 2 concurrent renders (resource intensive)
2. **Timeout**: 15s max per render
3. **Asset Blocking**: Reduces bandwidth and improves speed
4. **Browser Reuse**: Browser instance is reused across renders

## Next Steps

1. Add more sophisticated SPA detection
2. Add image size checking for asset blocking
3. Add render caching for repeated pages
4. Add render quality metrics
5. Add support for custom wait strategies

