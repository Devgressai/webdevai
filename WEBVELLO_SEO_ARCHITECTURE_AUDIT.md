# Web Vello (webvello.com) — Search Systems Architecture & Index Governance Audit

**Document type:** Long-term reference — technical SEO, entity classification, index governance, and scaling risk  
**Scope:** Next.js 14 App Router, TypeScript, programmatic and hand-crafted routes  
**Audience:** Principal / technical SEO, systems architects, product  

---

## 1. Executive Summary

### 1.1 How Google and AI Systems Would Classify the Site

| Dimension | Classification | Evidence / Rationale |
|-----------|----------------|----------------------|
| **Primary entity** | Digital marketing / GEO & SEO agency (“Web Vello”) | Root metadata, layout title “Web Vello - GEO & SEO Agency”, service-centric IA, B2B CTAs. |
| **Site type** | Hybrid: (1) hand-crafted service/marketing site, (2) programmatic local/industry pages | Core + services + blog + solutions are editorial; `/[city]`, `/[city]/[service]`, `/[city]/industry/[industry]/[service]` are template-driven with uniqueness blocks. |
| **Programmatic footprint** | Medium–high (city × service, city × industry × service) | ~60 cities × 8 Tier 1 services = 480+ city-service URLs; city × industry × service = citySlugs × industrySlugs × 3 services (web-development, seo, website-design) = thousands of URLs. |
| **Index posture** | Gated: Tier 1 always index; programmatic index only when blocks pass | `getSeoDirectives()` enforces 2-of-3 (or 2-of-2 for city-service) block rule and score thresholds; city×industry hubs always noindex. |
| **Authority signals** | Agency positioning (GEO, AI SEO, case studies, tools) | Homepage/solutions/blog; trust elements; tools (SEO audit, speed test). Risk: programmatic scale without sufficient differentiation can dilute entity clarity. |

**Summary:** Crawlers and AI systems will see a **B2B digital agency** with a **programmatic local/vertical layer**. Classification clarity depends on strong entity signals at the root and pillar level and on **strict index governance** so that only programmatic URLs with real uniqueness (blocks + score) are indexed.

---

## 2. Route and Page Type Classification

### 2.1 Canonical Route Types (Index Policy)

| Route type | Pattern | Index default | Sitemap | Notes |
|------------|---------|---------------|---------|--------|
| **core** | `/`, `/about`, `/pricing`, `/blog`, etc. | Always index | Yes (core sitemap) | Hand-crafted; no blocks. |
| **service** | `/services/[slug]` | Always index* | Yes (services sitemap) | *Some canonicals point to `/[city]` or `/[city]/[service]` via `getServicePageCanonical()`. |
| **city** | `/[city]` | Always index | Yes (locations) | City hubs; canonical self. |
| **city-service** | `/[city]/[service]` | Conditional | No** | Requires LOCAL_DATA_CARD + PROOF_SLOT; Tier 1 service only; score ≥ 0.65. |
| **city-industry** | `/[city]/industry/[industry]` | **Always noindex** | No | Navigation hub; overlap with city/industry; canonical may point to city, industry, or self. |
| **city-industry-service** | `/[city]/industry/[industry]/[service]` | Conditional | No** | Requires all three blocks; score ≥ 0.75; allowed services: web-development, seo, website-design. |

**\*\*** At **sitemap build time**, `generateLocationsEntries()` calls `getSeoDirectives()` with `blocks: {}` for city-service. That fails the block gate, so **no city-service (and no city-industry-service) URLs are included in the sitemap**. Only location hubs and city hubs are in the locations sitemap. Programmatic URLs are discoverable only via internal links and crawl.

### 2.2 Page Type vs. Funnel (CTA Governance)

CTA governance is **documented** (e.g. `lib/cta/README.md`, `getRecommendedCTAs`, `getFunnelStage`) but **not enforced in CI** for all pages. Programmatic pages use generic CTAs (“Get Free Consultation”, “View Our Work”). For clean entity and conversion alignment:

- Map each **page type** to a funnel stage (TOFU/MOFU/BOFU) and ensure primary CTA matches.
- Enforce in CI: `ci/validate-ctas.js` (or equivalent) so BOFU pages have a single primary CTA and tracking.

---

## 3. Index Governance — Strengths and Gaps

### 3.1 Strengths

1. **Single source of truth:** `getSeoDirectives(url, params)` in `lib/seo/index-policy.ts` drives index, follow, canonical, and inSitemap. Programmatic pages pass `blocks` from block providers; missing/invalid blocks → noindex.
2. **City×industry hubs:** Explicitly always noindex via early return in `getSeoDirectives()`; `getCityIndustryHubRobots()` used in `app/[city]/industry/[industry]/page.tsx`. Prevents thin hub pages from being indexed.
3. **Hard-fail triggers:** Invalid city/industry/service slug, missing required blocks, invalid or stale block data, manual noindex → noindex. Reduces risk of indexing bad or duplicate programmatic URLs.
4. **City-service and city-industry-service pages:** Both use `getSeoDirectives()` with blocks in `generateMetadata()` and set `robots: { index: directives.index, follow: directives.follow }`. Aligns with GOVERNANCE_FIXES_REQUIRED (fixes 1 and 2 are implemented in code).
5. **Governance monitoring:** `checkDirectivesForViolations()` in index-policy and `lib/seo/governance-monitor.ts` record violations (e.g. indexed programmatic page with missing blocks).
6. **Canonical rules:** City×industry hub canonicals use overlap store and `getCanonicalForCityIndustryHub()`; service pages use `getServicePageCanonical()` so geo/service combos canonical to `/[city]` or `/[city]/[service]`.

### 3.2 Gaps and Risks

1. **City page metadata:** `app/[city]/page.tsx` does **not** call `getSeoDirectives()`. It sets canonical and OG manually. For consistency and future-proofing, city pages should use `getSeoDirectives()` with `routeType: 'city'` so any future rule change (e.g. conditional city index) is centralized.
2. **Sitemap vs. index mismatch:** Locations sitemap includes **only** location hub pages and city hubs. All city-service and city-industry-service URLs are omitted (because sitemap runs with empty blocks). Consequence:
   - **Pro:** No thin programmatic URLs are submitted; discovery is link-driven.
   - **Con:** Programmatic URLs that **do** pass at runtime (e.g. when blocks are valid) are never in the sitemap; indexing depends entirely on internal links and crawl budget. If internal linking to programmatic pages is sparse, those URLs may be under-discovered.
3. **CI sitemap check:** `ci/validate-index-governance.js` checks **`app/sitemap.ts`** for the string `directives.inSitemap`. That string appears only in **`lib/sitemap-entries.ts`**. So the CI check **fails** even though governance is implemented in sitemap-entries. CI should validate `lib/sitemap-entries.ts` (or a shared module that both use) for `directives.inSitemap`.
4. **Block providers:** City-service and city-industry-service use **Stub** providers (`StubLocalDataProvider`, `StubProofProvider`, `StubIndustryKpiProvider`). Stubs typically return null or invalid data → validation fails → **all** such programmatic pages are noindex until real providers (e.g. LocalJson, CMS) are wired. Document this clearly so production rollout includes real block data.
5. **Governance disclaimers:** `GovernanceDisclaimer`, `validateGovernanceDisclaimer`, `publishGate` exist in `lib/governance/` but are **not** referenced from programmatic or high-claim pages (e.g. pricing, case studies). For agency-standard trust and compliance, high-claim pages should attach disclaimers and, where appropriate, run publishGate at build or render.

---

## 4. Sitemap and Crawl Efficiency

### 4.1 Current Structure

- **Index:** `/sitemap.xml` (Next.js `generateSitemaps()`).
- **Child sitemaps:**  
  - `0`: core (homepage, about, contact, pricing, legal, hubs).  
  - `1`: services (+ solutions, tools); services that canonical off-site are skipped.  
  - `2`: blog (from `getBlogPosts()`).  
  - `3+`: locations (location hubs + city hubs only; chunked if > 45k URLs).

No city-service or city-industry-service URLs in any sitemap.

### 4.2 Recommendations

1. **Document intent:** In `app/sitemap.ts` or `lib/sitemap-entries.ts`, add a short comment that programmatic URLs are intentionally excluded from the sitemap when block eligibility cannot be determined at build time; they are discovered via internal links.
2. **Optional — precomputed eligibility:** If you want programmatic URLs that pass quality gates in the sitemap, add a build-time step that evaluates `getSeoDirectives()` with **real** block data (or a precomputed eligibility list) and write only those URLs into the locations sitemap. Requires block data or eligibility cache available at build.
3. **Lastmod:** Keep using `getCorePageLastMod`, `getServicePageLastMod`, `getCityPageLastMod`, `getCityServicePageLastMod`, `getBlogPostLastMod` so lastmod reflects actual content/entity data where possible; avoid a single “site-wide” lastmod for all programmatic URLs.

---

## 5. Semantic and Entity Graph

### 5.1 What Exists

- **Organization:** Root layout and multiple pages emit Organization/LocalBusiness-style schema; city and city-industry-service pages include local and service schema.
- **Breadcrumbs:** BreadcrumbList schema on city, city-service, city-industry, city-industry-service (via `Breadcrumbs` + `generate*Breadcrumbs`).
- **Service/FAQ:** Service and FAQPage schema on city-industry-service and city-industry hub pages.
- **Internal linking:** `lib/internal-linking.ts` and `advanced-internal-linking.ts`; footer uses `citySlugs` for city links; header nav is service/solutions-focused; city pages link to Tier 1 city-service and state pages.

### 5.2 Gaps for Entity and AI Clarity

1. **Single Organization node:** Ensure one canonical Organization (e.g. same @id) is referenced from all important pages so Google and AI systems can merge the entity. Avoid multiple competing Organization nodes with different names/URLs (e.g. “Web Vello” vs “Webvello” — homepage uses “Webvello”, layout uses “Web Vello”; standardize).
2. **Entity graph doc:** Add a short doc (e.g. `docs/entity-graph.md`) that lists: (a) main entity (Organization), (b) service entities, (c) place entities (cities/states), (d) how they connect (areaServed, offers, etc.). Helps maintain consistent schema and internal linking.
3. **City-service and city-industry-service:** Already have breadcrumb + Service/FAQ; consider one concise LocalBusiness or ProfessionalService node per page with sameAs/or parent organization pointer so local pages clearly tie back to the main brand.
4. **Blog and topical clusters:** Blog posts are many; ensure they link to pillar services and key location pages so topical authority and entity graph reinforce each other.

---

## 6. Internal Linking and Content Hierarchy

### 6.1 Current State

- **Footer:** Top 24 cities (from `citySlugs`), key services (website design, web development, AI consulting, SEO).
- **Header:** Services and solutions mega-nav; no city or programmatic links in main nav (good for clarity).
- **City page:** Links to Tier 1 city-service URLs, state page when available, and pillar services.
- **City-service page:** Links to pillar service, secondary pillar, city hub, homepage.
- **City-industry page:** Links to city-industry-service (3 services), city hub, contact.
- **Internal linking lib:** `getContextualLinks`, `getRelatedContent` etc. — ensure they are used on high-value templates (e.g. service, blog) so programmatic and pillar pages get inbound links.

### 6.2 Recommendations

1. **Pillar → programmatic:** Every pillar service page (`/services/ai-seo`, `/services/web-development`, etc.) should link to a bounded set of city or city-service pages (e.g. “We serve Seattle, Denver, Austin…” with links). That improves discovery of programmatic URLs without overlinking.
2. **Blog → services and locations:** In blog sidebar or related-posts, link to 1–2 relevant service pages and optionally 1–2 city/city-service pages where the post is relevant.
3. **Depth and breadth:** Avoid linking to every city-service from the homepage. Keep homepage to core services, solutions, and maybe 1–2 featured cities; use city hub and footer for broader city coverage.
4. **Anchor text:** Vary anchor text (e.g. “SEO in Seattle”, “Seattle SEO services”, “our Seattle office”) so it looks natural and supports keyword coverage without over-optimization.

---

## 7. Programmatic SEO and Scaling Risk

### 7.1 What Protects You

- **Tier 1 service constraint:** Only 8 services are allowed for city-service index; city-industry-service allows only 3 (web-development, seo, website-design). Limits combinatorial explosion.
- **Block gate:** Index only when LOCAL_DATA_CARD (+ INDUSTRY_KPI_MAP for city-industry-service) + PROOF_SLOT are present and valid. Stub providers mean currently **no** programmatic page indexes until real data is wired.
- **City×industry hub noindex:** Prevents indexing of thin hub pages that duplicate city/industry content.
- **Canonical consolidation:** Service pages that are geo variants canonical to city or city-service; reduces duplicate indexing.
- **Score thresholds:** 0.65 (city-service) and 0.75 (city-industry-service) add a second gate beyond “blocks present”.

### 7.2 Scaling and Penalty Risks

1. **Template similarity:** If block data is shallow (e.g. same template with only city/service name swapped), Google may still see low added value. Mitigation: ensure blocks inject **real** local data (SERP/market/review), industry KPIs, and proof (case study or aggregate metrics); avoid placeholder or repeated text.
2. **City/industry list growth:** Adding many more cities or industries multiplies URL count. Keep index gate strict; consider not indexing city-industry-service for new industries until you have real INDUSTRY_KPI_MAP and proof data.
3. **Guarantee claims:** Programmatic and solution pages sometimes use “300%+ growth”, “3x ROI”, “guaranteed”. These need governance disclaimers and, where appropriate, `publishGate()` so high-claim pages don’t go out without review.
4. **Sitemap vs. crawl:** If you later add thousands of programmatic URLs to the sitemap, ensure they **all** pass `getSeoDirectives()` at build time; otherwise you risk submitting URLs that then noindex, which can look inconsistent to crawlers.

---

## 8. Alignment with Top U.S. Agency Practices

### 8.1 Already Aligned

- Clear primary entity (agency) and service pillars.
- Tools (SEO audit, speed test) as lead and trust signals.
- Solutions (problem-aware) and case studies.
- Index governance and noindex for thin hubs.
- Structured data (Organization, breadcrumbs, Service, FAQ) on key page types.
- Mobile and performance considerations (dynamic imports, lazy sections).

### 8.2 Improvements to Consider

1. **Brand consistency:** Use one canonical brand spelling everywhere (e.g. “Web Vello”) in metadata, schema, and visible UI to avoid splitting the entity.
2. **Trust and compliance:** Surface governance disclaimers on pricing, case studies, and any page with strong performance claims; run `validateGovernanceDisclaimer` / `publishGate` in build or runtime where applicable.
3. **CTA governance in CI:** Run `ci/validate-ctas.js` (or equivalent) in the release gate so every BOFU page has exactly one primary CTA and required tracking.
4. **Entity documentation:** Maintain `docs/entity-graph.md` (or similar) describing Organization, services, locations, and how they relate for schema and internal linking.
5. **Monitoring:** Use existing governance violation logging to feed a dashboard or alerts so you see quickly if programmatic pages index without blocks or if canonicals break.

---

## 9. Code-Level Change List

### 9.1 Critical (Do First)

| # | File | Change |
|---|------|--------|
| 1 | `ci/validate-index-governance.js` | Check `lib/sitemap-entries.ts` for `directives.inSitemap` (or a shared constant) instead of `app/sitemap.ts`, so CI passes while still enforcing sitemap governance. |
| 2 | `app/[city]/page.tsx` | In `generateMetadata()`, call `getSeoDirectives()` with `routeType: 'city', city: params.city` and use `directives.canonical` and `robots: { index: directives.index, follow: directives.follow }` for consistency with index policy. |
| 3 | `lib/sitemap-entries.ts` or `app/sitemap.ts` | Add a brief comment that programmatic (city-service, city-industry-service) URLs are intentionally omitted from the sitemap when block eligibility is not available at build time and are discovered via internal links. |

### 9.2 High (Governance and Trust)

| # | File | Change |
|---|------|--------|
| 4 | `lib/governance/` + pricing/case-study pages | Use `GovernanceDisclaimer` and `publishGate` (or at least `validateGovernanceDisclaimer`) on pricing and case study pages; render `GovernanceDisclaimerComponent` where claims are strong. |
| 5 | `lib/cta/` + CI | Implement or complete `ci/validate-ctas.js` to enforce one primary CTA per BOFU page and required tracking; run it in `npm run release:check`. |
| 6 | Root metadata / layout | Standardize brand to one form (e.g. “Web Vello”) in `metadata.title`, `metadata.description`, and schema `name`/`publisher` so Organization entity is consistent. |

### 9.3 Medium (Semantic and Discovery)

| # | File | Change |
|---|------|--------|
| 7 | New: `docs/entity-graph.md` | Document main entity (Organization), services, locations, and relationships for schema and internal linking. |
| 8 | Pillar service pages | Add a “Locations we serve” or “Featured markets” section with links to a subset of city or city-service pages. |
| 9 | Blog sidebar / related | Ensure links to relevant service and optionally 1–2 city/city-service pages. |
| 10 | Block providers | Replace Stub providers with real data (LocalJson, CMS, or API) for production so programmatic pages that pass validation can index; document in GOVERNANCE_FIXES_REQUIRED or README. |

### 9.4 Optional (Scale and Monitoring)

| # | File | Change |
|---|------|--------|
| 11 | Build pipeline | If you want programmatic URLs in the sitemap, add a step that precomputes eligibility (e.g. with real block data or cached results) and extends `generateLocationsEntries()` to include only eligible city-service and city-industry-service URLs. |
| 12 | `lib/seo/governance-monitor.ts` | Optionally send violations to a monitoring service (e.g. Sentry, DataDog) with severity and URL so the team can react quickly. |

---

## 10. GOVERNANCE_FIXES_REQUIRED.md vs. Code

| Item in doc | Code status | Note |
|-------------|-------------|------|
| City×industry×service: pass blocks to `getSeoDirectives()` | ✅ Done | `app/[city]/industry/[industry]/[service]/page.tsx` passes blocks and uses directives for canonical and robots. |
| City×service: use `getSeoDirectives()`, robots meta | ✅ Done | `app/[city]/[service]/page.tsx` uses `getSeoDirectives()` with blocks and sets robots. |
| Sitemap block handling / comment | ⚠️ Partial | Sitemap correctly omits programmatic when blocks are empty; add comment (see §9.1 #3). |
| CTA governance implementation | ❌ Not in CI | CTA lib exists; `ci/validate-ctas.js` not wired in release gate. |
| Governance disclaimers implementation | ❌ Not on pages | Lib exists; pricing/case studies don’t use disclaimers or publishGate. |
| Entity graph verification | ⚠️ Manual | Schema and links exist; add docs and ensure one Organization @id. |

---

## 11. Summary Table: Index and Sitemap by Route Type

| Route type | Index | In sitemap | Canonical | Notes |
|------------|-------|------------|-----------|--------|
| core | Yes | Yes | Self | Hand-crafted. |
| service | Yes* | Yes* | Self or city/city-service | *Per getServicePageCanonical; geo variants excluded from services sitemap. |
| city | Yes | Yes | Self | Use getSeoDirectives in metadata (recommended). |
| city-service | Gate | No | Self | Block + score gate; not in sitemap (empty blocks at build). |
| city-industry | No | No | City / industry / self | Always noindex. |
| city-industry-service | Gate | No | Self | Block + score gate; not in sitemap. |

---

This audit is intended as a long-term reference. Re-run index governance CI after any change to programmatic routes or to `getSeoDirectives()`; update this doc when you add new route types or change index rules.
