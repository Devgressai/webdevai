# A/B Testing Variants System

This document explains the A/B testing variant system implemented for the hero CTA and microcopy.

## Overview

The variant system supports multiple A/B testing platforms with a fallback to query parameters. It's designed to be lightweight and work with or without external testing tools.

## Variant Priority

The system checks for variants in this order:

1. **PostHog** (if available)
2. **Optimizely** (if available)
3. **Query Parameter** (`?v=a|b|c`)
4. **Default** (variant A)

## Hero CTA Button Variants

**Experiment Key:** `hero_cta_button`

- **Variant A (Default):** "Get Free Growth Plan →"
- **Variant B:** "Get Free Website Growth Audit →"
- **Variant C:** "Get My Free Proposal →"

## Hero Microcopy Variants

**Experiment Key:** `hero_microcopy`

- **Variant A (Default):** "Instant SEO + conversion opportunity scan. No obligation."
- **Variant B:** "See quick wins we'd prioritize for your site."

## Usage

### Query Parameter Method

Add `?v=a`, `?v=b`, or `?v=c` to the URL:

```
https://www.webvello.com/?v=b
https://www.webvello.com/?v=c
```

### PostHog Integration

If PostHog is available, the system automatically uses PostHog feature flags:

```javascript
// PostHog will automatically assign variants
// No code changes needed
```

**Setup in PostHog:**
1. Create feature flag: `hero_cta_button`
2. Create feature flag: `hero_microcopy`
3. Set variants: `a`, `b`, `c`
4. Configure traffic allocation

### Optimizely Integration

If Optimizely is available, the system automatically uses Optimizely experiments:

```javascript
// Optimizely will automatically assign variants
// No code changes needed
```

**Setup in Optimizely:**
1. Create experiment: `hero_cta_button`
2. Create experiment: `hero_microcopy`
3. Set variations: `a`, `b`, `c`
4. Configure traffic allocation

## Analytics Tracking

All variant views are automatically tracked:

```javascript
{
  event: 'ab_test_view',
  experiment_key: 'hero_cta_button',
  variant: 'b',
  source: 'query' // or 'posthog', 'optimizely', 'default'
}
```

Tracked via:
- Google Analytics (gtag)
- Google Tag Manager (dataLayer)

## Implementation Details

### Variant Utility

Located in: `lib/variant-utils.ts`

**Functions:**
- `getVariant(experimentKey)` - Get variant for an experiment
- `trackVariantView(experimentKey, variant, source)` - Track variant view

### Hero Component

Located in: `components/sections/hero.tsx`

**Changes:**
- Uses `getVariant()` to get CTA and microcopy variants
- Tracks variant views on component mount
- Displays appropriate variant text

## Testing Variants

### Manual Testing

1. **Test Variant A (Default):**
   ```
   https://www.webvello.com/
   ```

2. **Test Variant B:**
   ```
   https://www.webvello.com/?v=b
   ```

3. **Test Variant C:**
   ```
   https://www.webvello.com/?v=c
   ```

### Automated Testing

```javascript
// Test variant selection
import { getVariant } from '@/lib/variant-utils'

// Mock query parameter
window.location.search = '?v=b'
const variant = getVariant('hero_cta_button')
console.log(variant) // { variant: 'b', source: 'query' }
```

## Adding New Variants

### 1. Add Variant Text

Edit `components/sections/hero.tsx`:

```typescript
const CTA_VARIANTS = {
  a: 'Get Free Growth Plan',
  b: 'Get Free Website Growth Audit',
  c: 'Get My Free Proposal',
  d: 'New Variant Text', // Add new variant
}
```

### 2. Update Variant Type

Edit `lib/variant-utils.ts`:

```typescript
type Variant = 'a' | 'b' | 'c' | 'd' // Add new variant
```

### 3. Test

```
https://www.webvello.com/?v=d
```

## Best Practices

1. **Always have a default variant (A)** - Ensures the page works without testing tools
2. **Track all variant views** - Helps measure traffic distribution
3. **Use consistent experiment keys** - Makes analytics easier
4. **Test variants manually** - Verify they work before deploying
5. **Monitor analytics** - Track which variants perform best

## Analytics Queries

### Google Analytics 4

**View variant distribution:**
```
Event: ab_test_view
Dimensions: experiment_key, variant, source
Metrics: Event count
```

**Compare variant performance:**
```
Event: hero_growth_plan_submit
Segment by: variant (from ab_test_view)
Metrics: Conversion rate
```

### Google Tag Manager

**Debug variant assignment:**
```javascript
// Check dataLayer
console.log(window.dataLayer.filter(e => e.event === 'ab_test_view'))
```

## Troubleshooting

### Variant Not Changing

1. **Check query parameter:** Ensure `?v=a|b|c` is in URL
2. **Clear cache:** Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. **Check console:** Look for variant assignment logs
4. **Verify PostHog/Optimizely:** Ensure they're loaded before variant check

### Analytics Not Tracking

1. **Check gtag/dataLayer:** Ensure analytics is loaded
2. **Verify event name:** Should be `ab_test_view`
3. **Check browser console:** Look for errors
4. **Test manually:** Trigger event and check network tab

### PostHog/Optimizely Not Working

1. **Verify SDK loaded:** Check `window.posthog` or `window.optimizely`
2. **Check feature flag name:** Must match experiment key
3. **Verify traffic allocation:** Ensure flags are active
4. **Check user targeting:** Ensure you're in target audience

## Future Enhancements

- [ ] Server-side variant assignment
- [ ] Variant persistence (localStorage)
- [ ] Variant performance dashboard
- [ ] Automatic winner selection
- [ ] Multi-variate testing support

