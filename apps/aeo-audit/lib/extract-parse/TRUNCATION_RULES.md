# Deterministic Truncation Rules

## Overview

All text truncation in the Extract Parse worker follows deterministic rules to ensure consistent behavior and predictable storage limits.

## Core Truncation Function

```typescript
function truncateText(text: string, maxLength: number): string
```

### Algorithm

1. **If `text.length <= maxLength`**:
   - Return text unchanged

2. **If `text.length > maxLength`**:
   - If `maxLength <= 3`: Truncate to `maxLength` characters (no ellipsis)
   - Otherwise: Truncate to `(maxLength - 3)` characters, append `"..."`

### Examples

```typescript
// Example 1: Text fits within limit
truncateText("Hello", 10)
// Returns: "Hello" (unchanged)

// Example 2: Text exceeds limit
truncateText("This is a very long text that exceeds the limit", 20)
// Returns: "This is a very lo..." (17 chars + 3 ellipsis = 20)

// Example 3: Edge case - very small limit
truncateText("Hello World", 3)
// Returns: "Hel" (no ellipsis, maxLength <= 3)

// Example 4: Exact match
truncateText("Hello", 5)
// Returns: "Hello" (unchanged, exact match)

// Example 5: One character over
truncateText("Hello World", 10)
// Returns: "Hello Wor..." (7 chars + 3 ellipsis = 10)
```

## Truncation Limits by Type

### 1. Evidence Snippets (General)

**Default**: 5000 characters  
**Config**: `EXTRACT_PARSE_MAX_EVIDENCE_SNIPPET`

**Used for**:
- JSON-LD block snippets (first block only)

**Example**:
```typescript
// Original: 10,000 character JSON-LD block
// Truncated: First 4997 chars + "..."
truncateText(jsonLdBlock, 5000)
// Result length: Exactly 5000 characters
```

### 2. JSON-LD Block Storage

**Default**: 50,000 characters  
**Config**: `EXTRACT_PARSE_MAX_JSONLD_BLOCK`

**Used for**:
- `SchemaBlock.rawText` field

**Note**: This is much larger than Evidence snippets because it's stored in a dedicated table, not Evidence.

**Example**:
```typescript
// Original: 75,000 character JSON-LD
// Truncated: First 49,997 chars + "..."
truncateText(jsonLdBlock, 50000)
// Result length: Exactly 50,000 characters
```

### 3. Title/Meta Snippet

**Default**: 500 characters  
**Config**: `EXTRACT_PARSE_MAX_TITLE_SNIPPET`

**Used for**:
- Combined title, meta description, meta robots snippet

**Format**:
```
Title: Page Title
Meta Description: Description text
Meta Robots: noindex, nofollow
```

**Example**:
```typescript
const snippet = [
  "Title: Very Long Page Title That Exceeds Limit",
  "Meta Description: Very long description...",
  "Meta Robots: noindex, nofollow"
].join("\n")

// If total > 500 chars:
truncateText(snippet, 500)
// Returns: First 497 chars + "..."
```

### 4. Canonical Snippet

**Default**: 200 characters  
**Config**: `EXTRACT_PARSE_MAX_CANONICAL_SNIPPET`

**Used for**:
- Canonical URL snippet

**Example**:
```typescript
// Very long canonical URL
const canonical = "https://example.com/very/long/path/with/many/segments/and/query/params?param1=value1&param2=value2"

// If > 200 chars:
truncateText(canonical, 200)
// Returns: First 197 chars + "..."
```

## Truncation Metadata

All truncated content includes metadata indicating truncation occurred:

### SchemaBlock Metadata

```json
{
  "position": 0,
  "originalSize": 75000,
  "truncated": true
}
```

### Evidence Metadata

```json
{
  "originalSize": 10000,
  "truncated": true,
  "blockIndex": 0,
  "totalBlocks": 3
}
```

## Deterministic Behavior

### Why Deterministic?

1. **Reproducibility**: Same input always produces same output
2. **Predictability**: Storage size is always within limits
3. **Debugging**: Easy to verify truncation occurred
4. **Consistency**: All truncation uses same algorithm

### Guarantees

- ✅ Output length ≤ `maxLength` (always)
- ✅ If truncated, output ends with `"..."` (unless maxLength ≤ 3)
- ✅ Original text preserved up to `(maxLength - 3)` characters
- ✅ Metadata tracks original size and truncation status

## Edge Cases

### Empty String

```typescript
truncateText("", 100)
// Returns: "" (unchanged)
```

### Very Small Limit

```typescript
truncateText("Hello", 1)
// Returns: "H" (no ellipsis, maxLength <= 3)

truncateText("Hello", 2)
// Returns: "He" (no ellipsis, maxLength <= 3)

truncateText("Hello", 3)
// Returns: "Hel" (no ellipsis, maxLength <= 3)

truncateText("Hello", 4)
// Returns: "H..." (1 char + 3 ellipsis = 4)
```

### Unicode Characters

The function works with Unicode characters (multi-byte):

```typescript
truncateText("Hello 世界", 10)
// Returns: "Hello 世..." (7 chars + 3 ellipsis = 10)
// Note: "世界" is 2 characters, not 6 bytes
```

### Special Characters

```typescript
truncateText("Hello\nWorld\tTest", 10)
// Returns: "Hello\nWor..." (preserves newlines/tabs)
```

## Configuration

All limits are configurable via environment variables:

```env
EXTRACT_PARSE_MAX_EVIDENCE_SNIPPET=5000
EXTRACT_PARSE_MAX_JSONLD_BLOCK=50000
EXTRACT_PARSE_MAX_TITLE_SNIPPET=500
EXTRACT_PARSE_MAX_CANONICAL_SNIPPET=200
```

## Testing Truncation

### Test Cases

```typescript
// Test 1: No truncation needed
expect(truncateText("Short", 10)).toBe("Short")

// Test 2: Truncation needed
expect(truncateText("Very long text", 10)).toBe("Very lo...")

// Test 3: Exact boundary
expect(truncateText("1234567890", 10)).toBe("1234567890")

// Test 4: One over boundary
expect(truncateText("12345678901", 10)).toBe("1234567...")

// Test 5: Edge case
expect(truncateText("Hello", 3)).toBe("Hel")
```

## Summary

| Aspect | Rule |
|--------|------|
| **Algorithm** | Truncate to `(maxLength - 3)`, append `"..."` |
| **Edge Case** | If `maxLength ≤ 3`, truncate to `maxLength` (no ellipsis) |
| **Guarantee** | Output length ≤ `maxLength` (always) |
| **Metadata** | Always track `originalSize` and `truncated` flag |
| **Deterministic** | Same input → same output (always) |

All truncation follows these rules consistently across all Evidence and SchemaBlock storage.

