# Render Trigger Heuristics

## Overview

The render fallback system uses heuristics to determine when Playwright rendering is needed. It only triggers when raw HTML is insufficient for extraction.

## Heuristic 1: Insufficient Visible Text

**Trigger Condition**: `visibleTextLength < 500`

**Detection Method**:
1. Strip all `<script>` tags and content
2. Strip all `<style>` tags and content
3. Remove all HTML tags
4. Count remaining text characters
5. If count < 500, trigger render

**Example**:
```html
<html>
  <body>
    <div id="app"></div>
    <script src="app.js"></script>
  </body>
</html>
```
Visible text: ~0 chars → **Triggers render**

**Confidence**: High

## Heuristic 2: SPA Shell + Missing Metadata

**Trigger Condition**: `isSpaShell(html) && isMissingKeyMetadata(metadata)`

### SPA Detection

**Indicators**:
1. **High script count + low text**: `scriptCount > 5 && visibleTextLength < 1000`
2. **Root div with SPA IDs**: `root`, `app`, `main`, `__next` (Next.js)
3. **Framework detection**: React, Vue, Angular, Next.js, Nuxt, Gatsby

**Example**:
```html
<html>
  <body>
    <div id="root"></div>
    <script src="react.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```
SPA detected: ✅ (root div + React)

### Missing Metadata Check

**Missing if**: 2+ of these are missing:
- Title (`<title>`)
- Meta description (`<meta name="description">`)
- Headings (`<h1>`, `<h2>`, `<h3>`)
- JSON-LD (`<script type="application/ld+json">`)

**Example**:
```html
<html>
  <head>
    <title>Loading...</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```
Missing: Meta description, headings, JSON-LD → **Triggers render**

**Confidence**: High

## Heuristic 3: Critical Fields Missing

**Trigger Condition**: All critical fields missing + low text

**Critical Fields**:
- Title: Missing
- Meta description: Missing
- Headings: Missing
- Visible text: < 200 chars

**Example**:
```html
<html>
  <body>
    <p>Loading...</p>
  </body>
</html>
```
All critical fields missing → **Triggers render**

**Confidence**: Medium

## Heuristic Flow

```
1. Parse HTML (lightweight)
   ↓
2. Extract visible text length
   ↓
3. Check Heuristic 1: Text < 500?
   ├─ Yes → Render (High confidence)
   └─ No → Continue
   ↓
4. Check Heuristic 2: SPA + Missing Metadata?
   ├─ Yes → Render (High confidence)
   └─ No → Continue
   ↓
5. Check Heuristic 3: Critical Fields Missing?
   ├─ Yes → Render (Medium confidence)
   └─ No → Skip render
```

## Examples

### Example 1: SPA with Content

```html
<html>
  <head>
    <title>My App</title>
    <meta name="description" content="My app description">
  </head>
  <body>
    <div id="root"></div>
    <script src="react.js"></script>
  </body>
</html>
```

**Analysis**:
- Visible text: ~50 chars (title + meta)
- SPA detected: ✅
- Missing metadata: ❌ (has title, meta description)
- **Result**: Does NOT trigger render (SPA but has metadata)

### Example 2: SPA without Metadata

```html
<html>
  <body>
    <div id="app"></div>
    <script src="vue.js"></script>
  </body>
</html>
```

**Analysis**:
- Visible text: ~0 chars
- SPA detected: ✅
- Missing metadata: ✅ (no title, no meta, no headings)
- **Result**: **Triggers render** (Heuristic 2)

### Example 3: Minimal Content

```html
<html>
  <body>
    <p>Hello</p>
  </body>
</html>
```

**Analysis**:
- Visible text: ~5 chars
- **Result**: **Triggers render** (Heuristic 1: < 500 chars)

### Example 4: Full HTML

```html
<html>
  <head>
    <title>Full Page</title>
    <meta name="description" content="Full description">
  </head>
  <body>
    <h1>Heading</h1>
    <p>Lots of content here... (500+ chars)</p>
  </body>
</html>
```

**Analysis**:
- Visible text: 500+ chars
- Has metadata: ✅
- **Result**: Does NOT trigger render

## Configuration

Heuristics are not configurable (hardcoded thresholds):
- Visible text threshold: 500 chars
- SPA script threshold: 5 scripts
- SPA text threshold: 1000 chars
- Critical text threshold: 200 chars

## Performance

Heuristics are lightweight:
- No full HTML parsing
- Simple regex matching
- Fast execution (< 10ms typically)

## Next Steps

1. Add configurable thresholds
2. Add more SPA detection patterns
3. Add learning from render results
4. Add confidence scoring
5. Add render quality metrics

