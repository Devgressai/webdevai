# CI Validation Scripts

## Release Gate

### Quick Start

Run all pre-deployment checks:

```bash
npm run release:check
```

This command runs:
1. **Build** - `npm run build` (validates TypeScript compilation and Next.js build)
2. **Lint** - `npm run lint` (ESLint validation)
3. **Index Governance** - `node ci/validate-index-governance.js` (validates SEO governance compliance)
4. **CTA Governance** - `node ci/validate-ctas.js` (validates CTA governance compliance)
5. **Sitemap Validation** - `npx tsx lib/sitemap-validation.ts` (validates sitemap integrity)

### Behavior

- **Fail Fast**: Stops on first failure
- **Clear Output**: Color-coded, actionable error messages
- **Exit Codes**: Returns `0` on success, `1` on failure (CI-friendly)

### Individual Checks

You can also run checks individually:

```bash
# Build only
npm run build

# Lint only
npm run lint

# Index governance only
node ci/validate-index-governance.js

# CTA governance only
node ci/validate-ctas.js

# Sitemap validation only
npm run validate:sitemap
# or
node ci/validate-sitemap.js
```

### CI/CD Integration

Add to your CI pipeline (e.g., GitHub Actions, GitLab CI):

```yaml
# Example GitHub Actions
- name: Run release gate
  run: npm run release:check
```

### Pre-commit Hook (Optional)

To run before every commit, add to `.husky/pre-commit`:

```bash
#!/bin/sh
npm run release:check
```

## Validation Scripts

### `validate-index-governance.js`

Validates SEO governance compliance:
- All programmatic pages use `getSeoDirectives()`
- City×Industry hubs are always noindex
- Sitemap uses `directives.inSitemap` checks
- Required blocks are present for indexable pages

**Exit Code**: `0` on success, `1` on violations

### `validate-ctas.js`

Validates CTA governance compliance:
- BOFU pages have exactly 1 primary CTA
- No multiple primary CTAs
- CTA destinations match funnel stage
- BOFU CTAs have tracking

**Exit Code**: `0` on success, `1` on violations

**Note**: Requires TypeScript to be compiled or use `ts-node` for `lib/cta/` modules.

### `validate-sitemap.js`

Validates sitemap integrity and compliance:
- No duplicate `<loc>` URLs within or across sitemaps
- All `<loc>` values are absolute HTTPS URLs
- All `<lastmod>` values are valid ISO 8601 UTC dates
- No sitemap exceeds 50,000 URLs (protocol limit)
- Sitemap index references all child sitemaps
- Warning (non-blocking) if >30% of URLs share identical lastmod

**Exit Code**: `0` on success, `1` on validation errors

**Performance**: Runs in <100ms for typical sites (~1000 URLs)

**Alternative**: `npm run validate:sitemap` (same check via npm script)

## Troubleshooting

### "Error loading CTA validation modules"

The CTA validation script requires compiled TypeScript. Options:

1. **Compile TypeScript first**:
   ```bash
   npx tsc --noEmit
   ```

2. **Use ts-node** (update `ci/validate-ctas.js` to use `ts-node/register`)

3. **Skip CTA validation** (not recommended for production)

### Build fails

- Check TypeScript errors: `npx tsc --noEmit`
- Check Next.js build output for specific errors
- Ensure all dependencies are installed: `npm install`

### Lint fails

- Fix ESLint errors: `npm run lint -- --fix` (auto-fix)
- Review linting rules in `.eslintrc.json`

## Adding New Checks

To add a new validation check:

1. Create script in `ci/` directory
2. Add to `ci/release-check.js` checks array:

```javascript
{
  step: 5,
  command: 'node ci/validate-new-check.js',
  description: 'New Check Description',
  optional: false
}
```

3. Ensure script exits with `process.exit(0)` on success, `process.exit(1)` on failure
