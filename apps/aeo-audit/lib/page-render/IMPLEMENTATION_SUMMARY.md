# Page Render Fallback Implementation Summary

## Created Files

### Core Implementation
1. `lib/page-render/heuristics.ts`
   - Render trigger heuristics
   - SPA detection
   - Metadata checking
   - Visible text analysis

2. `lib/page-render/playwright.ts`
   - Playwright-based rendering
   - Asset blocking (videos, large images)
   - Timeout management (10-15s)
   - Post-render HTML extraction

3. `lib/page-render/worker.ts`
   - Main worker implementation
   - Heuristic checking
   - Render orchestration
   - Evidence storage
   - Extract_parse job enqueueing

4. `lib/page-render/index.ts`
   - Central exports

### Worker Integration
5. `lib/queues/workers.ts` (updated)
   - Page render fallback worker now calls implementation
   - Concurrency: 2 (resource intensive)

### Dependencies
6. `package.json` (updated)
   - Added `playwright` dependency

### Documentation
7. `lib/page-render/README.md`
   - Implementation guide
   - Usage examples
   - Configuration

8. `lib/page-render/HEURISTICS.md`
   - Detailed heuristic explanations
   - Examples
   - Flow diagrams

## Render Trigger Heuristics

### Heuristic 1: Insufficient Visible Text

**Condition**: `visibleTextLength < 500`

**Detection**:
- Strips scripts, styles, HTML tags
- Counts remaining text
- If < 500 chars, triggers render

**Confidence**: High

### Heuristic 2: SPA Shell + Missing Metadata

**Condition**: `isSpaShell(html) && isMissingKeyMetadata(metadata)`

**SPA Detection**:
- High script count (>5) + low text (<1000 chars)
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

## Playwright Rendering

### Configuration

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
- **Fonts**: Allowed
- **Other resources**: Allowed

### Render Process

1. Launch browser (reused across renders)
2. Create new page
3. Block heavy assets (if configured)
4. Navigate to URL
5. Wait for network idle
6. Wait for optional selector (if provided)
7. Wait for timeout (if configured)
8. Extract HTML
9. Extract metadata (title, URL, viewport)
10. Close page

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

## Integration Flow

### Page Fetch → Render Fallback

```
1. Page fetch completes
   ↓
2. Check heuristics on fetched HTML
   ↓
3. If needs render:
   - Enqueue page_render_fallback job
   ↓
4. Render fallback worker:
   - Check heuristics again
   - Render with Playwright
   - Store evidence
   - Enqueue extract_parse with rendered HTML
```

### Render Fallback → Extract Parse

```
1. Render completes
   ↓
2. Extract rendered HTML
   ↓
3. Enqueue extract_parse job with rendered HTML
   ↓
4. Extract parse processes rendered HTML
   ↓
5. Store extracted metadata
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

- Returns error: "Playwright not available"
- Does not attempt rendering

### Render Timeout

- Returns error with timeout message
- Stores failure evidence
- Does not enqueue extract_parse

### Render Failure

- Stores failure evidence with reason
- Returns error
- Does not enqueue extract_parse

## Performance

- **Concurrency**: 2 concurrent renders (resource intensive)
- **Timeout**: 15s max per render
- **Asset Blocking**: Reduces bandwidth and improves speed
- **Browser Reuse**: Browser instance reused across renders

## Next Steps

1. Add more sophisticated SPA detection
2. Add image size checking for asset blocking
3. Add render caching for repeated pages
4. Add render quality metrics
5. Add support for custom wait strategies

