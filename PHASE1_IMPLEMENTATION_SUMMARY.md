# Phase 1 Implementation Summary

## Files Changed and Why

| File | Change |
|------|--------|
| **lib/data/city-data.ts** | NEW. Source of truth for `/[city]/[service]` cities. Exports `cityData`, `cityDataSlugs`. |
| **lib/data/service-data.ts** | NEW. Service content for `/[city]/[service]` (no icons). Exports `serviceData`, `serviceDataSlugs`. |
| **app/[city]/[service]/page.tsx** | Imports from lib/data; added `generateStaticParams`, `dynamicParams = false`; `notFound()` on invalid; `SERVICE_ICON_MAP` for icons. |
| **app/[city]/industry/[industry]/[service]/page.tsx** | IndexPolicy in `generateMetadata` (hasCmsContent, robots, canonical, openGraph.url); `notFound()` on invalid. |
| **lib/seo/index-policy.ts** | `path` for core; safety gates (valid city/industry, no `undefined` in canonicals); uses `cityDataSlugs` for city-service. |
| **app/sitemap.ts** | IndexPolicy for core, service, city, city-service; only indexable URLs; no city-industry; no city-industry-service (Phase 1). |

---

## Commands to Verify Locally

```bash
# 1. Install deps (if needed)
npm install

# 2. Build (fix pre-existing failures first: Hawaii metadata, @radix-ui/react-slot, nodemailer, axios)
npm run build

# 3. Start dev server
npm run dev

# 4. Fetch sitemap
curl -s http://localhost:3000/sitemap.xml | head -100

# 5. Confirm no /industry/ URLs in sitemap
curl -s http://localhost:3000/sitemap.xml | grep -E "/industry/" || echo "None found (expected)"

# 6. Sample 20+ URLs from sitemap and check 200 + self-canonical + robots
# (Use browser or curl; validate manually or with a small script.)

# 7. True 404 for unknown city+service
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/fake-city-xx/fake-service
# Expect: 404
```

**Note:** The app currently returns 500 on many routes due to pre-existing issues (`@axe-core/react`, Hawaii `use client`+metadata, etc.). Fix those first so the dev server can serve `/sitemap.xml` and city/service pages. Phase 1 code changes do not touch those paths.

---

## Pre-existing Build Blockers (unchanged by Phase 1)

- `app/locations/hawaii/page.tsx`: `use client` + `export const metadata` (not allowed).
- Missing deps: `@radix-ui/react-slot`, `nodemailer`, `axios`.

Fix these before `npm run build` succeeds. Phase 1 edits do not touch these.

---

## Sitemap Rules After Phase 1

- **Included:** Core (including solutions, Hawaii), services, blog, city hubs (`citySlugs`), city+service (`cityDataSlugs` × Tier 1 services only).
- **Excluded:** City-industry hubs (`/industry/`), city-industry-service (Phase 1).
- **Filter:** Every included URL goes through `IndexPolicyService.getPolicy`; only `indexable === true` are emitted. Canonical, `changeFrequency`, and `priority` come from the policy.

---

## 404 and notFound()

- **`/[city]/[service]`:** Invalid city or service → `notFound()`. With `dynamicParams = false`, only `generateStaticParams` combos are built; others 404 before the page runs.
- **`/[city]/industry/[industry]/[service]`:** Invalid city/industry/service → `notFound()`.

---

## IndexPolicy Safety Gates (D)

- City routes: `indexable` is never `true` if city is missing or invalid (hub: `citySlugs`; city-service: `cityDataSlugs`).
- City-industry routes: `indexable` never `true` if industry is missing or invalid (`industrySlugs`).
- Canonicals never contain `"undefined"`; `seg()` guards and sanitizes all segments.
