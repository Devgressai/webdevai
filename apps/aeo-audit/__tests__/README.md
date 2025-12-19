# Regression Test Suite

## Overview

This test suite provides regression tests for HTML extraction and scoring functionality. All tests use local fixture files and require no network calls.

## Test Structure

### Fixtures

Located in `__tests__/fixtures/`:

1. **good-page.html**: Complete page with canonical, schema, meta tags, headings, and content
2. **missing-title.html**: Page without a title tag
3. **missing-canonical.html**: Page without canonical URL
4. **invalid-jsonld.html**: Page with invalid JSON-LD blocks
5. **faq-present.html**: Page with FAQ content and FAQPage schema
6. **spa-shell.html**: Single Page Application shell with minimal content
7. **minimal-content.html**: Page with very little content
8. **missing-meta-description.html**: Page without meta description
9. **multiple-jsonld.html**: Page with multiple valid JSON-LD blocks

### Test Files

- **extraction.test.ts**: Tests HTML extraction functionality
  - Extractor output fields
  - Schema parse_ok behavior
  - Word count heuristics
  - Metadata extraction (title, description, canonical, OG tags, etc.)

- **scoring.test.ts**: Tests scoring and check computation
  - Deterministic check scores
  - Expected score ranges (0-5)
  - Score consistency

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Specific Test File

```bash
npm test extraction.test.ts
npm test scoring.test.ts
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm test -- --coverage
```

## Test Coverage

### Extraction Tests

- ✅ Title extraction (present/missing)
- ✅ Meta description extraction
- ✅ Canonical URL extraction
- ✅ Meta robots extraction
- ✅ OG tags extraction
- ✅ Twitter tags extraction
- ✅ Headings extraction (h1, h2, h3)
- ✅ Word count calculation
- ✅ List counting (ul, ol)
- ✅ Image counting with alt text
- ✅ JSON-LD block extraction
- ✅ JSON-LD parsing (valid/invalid)
- ✅ Schema type extraction

### Scoring Tests

- ✅ Check score computation
- ✅ Score ranges (0-5 validation)
- ✅ Missing field detection
- ✅ Invalid schema detection
- ✅ Content sufficiency scoring
- ✅ Deterministic behavior (same input = same output)

## Test Scenarios

### Good Page
- All checks should pass (score = 5)
- All metadata fields present
- Valid JSON-LD schema

### Missing Title
- `has_title` check fails (score = 0)
- Other checks still pass

### Missing Canonical
- `has_canonical` check fails (score = 0)
- Other checks still pass

### Invalid JSON-LD
- `has_jsonld` check passes (blocks exist)
- `has_valid_jsonld` check fails (no valid blocks)
- `parseOk` is false for invalid blocks

### FAQ Present
- `has_faq_schema` check passes
- FAQPage schema detected
- Sufficient content for FAQ

### SPA Shell
- Minimal visible content
- Low content sufficiency score
- No headings in initial HTML

### Minimal Content
- Very low word count
- Content sufficiency score = 0

## Adding New Tests

### Adding a New Fixture

1. Create HTML file in `__tests__/fixtures/`
2. Add test cases in `extraction.test.ts` or `scoring.test.ts`
3. Use `loadFixture()` helper to load the HTML

Example:

```typescript
describe('New Scenario', () => {
  const html = loadFixture('new-scenario.html')
  const metadata = parseHtml(html)
  
  test('verifies expected behavior', () => {
    expect(metadata.title).toBe('Expected Title')
  })
})
```

### Adding a New Check

1. Add check computation logic to `scoring.test.ts`
2. Add test cases for different scenarios
3. Verify score ranges (0-5)

Example:

```typescript
function computeCheckScore(checkId: string, ...): number {
  switch (checkId) {
    case 'new_check':
      return condition ? 5 : 0
    // ...
  }
}
```

## Best Practices

1. **No Network Calls**: All tests use local fixtures
2. **Deterministic**: Same input always produces same output
3. **Isolated**: Tests don't depend on each other
4. **Fast**: Tests run quickly without external dependencies
5. **Clear**: Test names describe what they verify

## Troubleshooting

### Tests Fail After Code Changes

1. Check if extraction logic changed
2. Verify fixture files are still valid HTML
3. Update expected values if behavior intentionally changed

### Score Ranges Invalid

1. Verify check computation logic
2. Check that scores are always 0-5
3. Ensure deterministic behavior

### JSON-LD Parsing Issues

1. Verify fixture JSON-LD is valid/invalid as expected
2. Check `parseOk` flag behavior
3. Verify `parsedType` extraction

## CI/CD Integration

These tests are designed to run in CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run tests
  run: npm test
```

No external dependencies required (no database, no Redis, no network).

