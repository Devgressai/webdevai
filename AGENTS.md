# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository overview

This repo contains two primary Next.js 14 applications plus shared libraries:

- **Marketing site (Web Vello / Webvello)** at the repository root
  - Next.js App Router (`app/`), Tailwind-based design system, Sanity CMS integration, and 70+ GEO/SEO-optimized service/location pages.
  - Deployed via Vercel; pushes to `main` trigger production deploys (see `README.md`).
- **Search & AI Readiness Audit tool** under `apps/aeo-audit`
  - Internal AEO (answer engine optimization) audit app using Next.js + Prisma (PostgreSQL) + BullMQ (Redis) + Playwright + Jest.
  - Implements a multi-stage crawl → extract → score → report pipeline.
- **Shared libraries and CI** at the root
  - `lib/analytics`, `lib/cta`, `lib/governance`, `lib/leads`, `lib/blocks` implement cross-cutting concerns for analytics, CTA and data governance, lead capture, and uniqueness blocks.
  - `ci/` contains release/SEO governance checks wired into `npm run release:check`.

Cursor rules are defined in `.cursor/rules`; the most important constraints and workflows from that file are summarized below so Warp agents behave consistently.

---

## Commands and workflows

### Root marketing site (Web Vello)

All commands below are run from the repo root (`/Users/george/webdevai`) unless noted.

**Install dependencies**

```bash
npm install
```

**Run the dev server** (marketing site)

```bash
npm run dev
# Next.js dev server at http://localhost:3000
```

**Build and run in production mode**

```bash
npm run build
npm start
```

**Linting (ESLint + basic a11y)**

```bash
npm run lint       # main ESLint run
npm run a11y:lint  # alias to next lint (kept for clarity)
```

**SEO/CTA governance + release gate (CI-aligned)**

Use this before pushing to `main` or opening a PR touching marketing pages, CTAs, or governance logic:

```bash
npm run release:check
```

`release:check` runs (see `ci/README.md` for details):
- `npm run build` – marketing site production build
- `npm run lint` – ESLint
- `node ci/validate-index-governance.js` – ensures pages follow index/noindex + governance rules
- `node ci/validate-ctas.js` – enforces CTA governance across BOFU/MOFU/TOFU pages

You can run the individual checks if you are iterating on a single concern:

```bash
# Build only
npm run build

# Lint only
npm run lint

# Index governance only
node ci/validate-index-governance.js

# CTA governance only
node ci/validate-ctas.js
```

**Utility scripts (marketing site)**

From the repo root:

```bash
# Seed CIS / GEO pages (see scripts for exact behavior)
npm run seed:cis

# Index pages (simple index generator)
npm run index-pages

# Generate favicon from source image
npm run generate-favicon
```

> Note: there is no root-level `npm test` script today; tests live under `apps/aeo-audit`.

### AEO Audit app (`apps/aeo-audit`)

Change into the app directory before running these commands:

```bash
cd apps/aeo-audit
npm install
```

**Dev server (UI)**

```bash
npm run dev
# Next.js dev server at http://localhost:3000 (for the audit tool)
```

**Build and production server**

```bash
npm run build
npm start
```

**Workers (BullMQ job processing)**

Workers must be running in a separate process for scans to progress:

```bash
npm run worker
```

This starts all workers (scan orchestrator, URL discovery, page fetch/render, extract-parse, check-runner, llm-eval, report build, scheduled scans, evidence retention, etc.).

**Database (Prisma + PostgreSQL)**

```bash
# Generate Prisma client
npm run db:generate

# Run migrations in dev (creates/updates schema, may also seed)
npm run db:migrate

# Seed database (optional, if seed script exists)
npm run db:seed

# Inspect DB via Prisma Studio
npm run db:studio
```

**Tests (Jest)**

From `apps/aeo-audit`:

```bash
# Run all tests
npm test

# Run a single test file
npm test extraction.test.ts
# or any specific file pattern supported by Jest

# Watch mode
npm run test:watch

# With coverage
npm test -- --coverage
```

**Playwright browser install (required for page rendering)**

```bash
npx playwright install chromium
```

**Required runtime services for AEO Audit**

- PostgreSQL (reachable via `DATABASE_URL`)
- Redis (reachable via `REDIS_URL`)
- `.env` in `apps/aeo-audit` with at least:
  - `DATABASE_URL`
  - `REDIS_URL`
  - `NEXT_PUBLIC_APP_URL`

See `apps/aeo-audit/README.md` and `apps/aeo-audit/ENV.md` for the full environment matrix.

---

## High-level architecture

### Marketing site (root Next.js app)

**Purpose and domain**

- Public-facing marketing site for Webvello / Web Vello, focused on:
  - Generative Engine Optimization (GEO) / answer engine optimization
  - AI search optimization (ChatGPT, Perplexity, Google AI, etc.)
  - Web design/development and local SEO services
- Contains a large set of GEO pages covering major U.S. markets and services.

**Top-level structure** (see `README.md` and `.cursor/rules`):

- `app/`
  - App Router entrypoints: home, services, locations, blog, case studies, pricing, resources, etc.
  - `services/` includes:
    - `geo-*` directories for city-specific GEO pages (e.g. `app/services/geo-austin/page.tsx`).
    - `[service]` routes for individual service pages.
  - `locations/` – location hub pages.
  - `blog/` – blog listing and posts (Sanity-backed).
- `components/`
  - `ui/` – base UI components (buttons, inputs, layout primitives) using shadcn-style patterns.
  - `layout/` – shared layout components like header/navigation.
  - `sections/` – composed sections such as hero, pricing, testimonials.
- `lib/` (root-level, marketing-site focused):
  - `lib/utils.ts` – core utilities (e.g. class name merging `cn()`).
  - `lib/analytics` – vendor-agnostic event tracking with page-type and funnel-stage detection; ships an `app/api/events/route.ts` endpoint.
  - `lib/cta` – CTA governance (page-type-aware CTA recommendations, validation, tracking metadata, funnel-stage mapping, and CI integration via `ci/validate-ctas.js`).
  - `lib/governance` – governance disclaimers, data integrity checks, high-risk claim review workflow, and publish gates.
  - `lib/leads` – lead capture system (BOFU forms, `/api/leads` endpoint, validation, storage, and notification providers).
  - `lib/blocks` – uniqueness and data blocks (LocalDataCard, IndustryKpiMap, ProofSlot) with provider abstraction (local JSON, CMS, stub) and validation; tied to the index policy.
- `ci/`
  - `release-check.js` and governance scripts (`validate-index-governance.js`, `validate-ctas.js`) that enforce SEO/indexing and CTA governance rules.
- `public/`
  - `sitemap.xml`, `robots.txt` and static assets used for SEO and branding.
- `schemas/`
  - JSON-LD schema definitions used by the marketing pages.

**Key cross-cutting systems**

- **Analytics** (`lib/analytics`)
  - Central `track` API and CTA-specific helpers (`trackCTA`, `trackFormSubmit`, `trackLeadCapture`).
  - Automatically enriches events with pathname, page type (homepage, service, blog, city-hub, city-service, etc.), funnel stage, referrer, and UTM parameters.
  - Dev mode can write to `data/events.json` and log to console; in browsers with GA4/Tag Manager/PostHog loaded, forwards events to those vendors.

- **CTA Governance** (`lib/cta` + `ci/validate-ctas.js`)
  - Encodes funnel stages (TOFU, MOFU, BOFU) and page-type mapping (e.g. `service`, `city-service`, `city-industry-service` → BOFU).
  - Provides `getRecommendedCTAs` to derive primary/secondary CTAs per page, with tracking IDs and event names.
  - `validateCTAs` enforces:
    - Exactly **one** primary CTA on most pages (with specified exemptions like glossary/legal/entity pages).
    - At most one secondary CTA.
    - Label formats (2–5 words, action-verb-first) and destination rules consistent with funnel stage.

- **Governance & data integrity** (`lib/governance` + `ci/validate-index-governance.js`)
  - `GovernanceDisclaimer` model and helpers (`validateGovernanceDisclaimer`, `checkContentIntegrity`, `publishGate`) ensure:
    - Every high-risk data claim (performance, ROI, AI-claims, competitor comparisons) is backed by real sources, clear methodology, limitations, and staleness checks.
    - `lastUpdated` drives staleness status (current/warning/error/critical) with thresholds at 30/90/180 days.
    - High-risk claims require approval tokens from `GOVERNANCE_APPROVAL_TOKENS`.
  - `validate-index-governance.js` integrates content uniqueness blocks and governance, ensuring indexable pages satisfy required blocks and directives.

- **Uniqueness blocks & index policy** (`lib/blocks`)
  - Block providers (LocalJson*, Cms*, Stub*) supply structured data such as local market stats, industry KPIs, and proof slots.
  - Each block type has validation and caching with TTLs; stale or invalid blocks push affected pages to `noindex` via index policy integration.

- **Lead capture** (`lib/leads`)
  - `/api/leads` stores and/or forwards leads (dev: file-based; prod: in-memory with providers like Resend or console logging).
  - BOFU forms (`components/forms/bofu-lead-form.tsx`) tie into analytics (CTA tracking IDs) and enforce spam protection, validation, and rate limiting.

### AEO Audit app architecture (`apps/aeo-audit`)

**Purpose and domain**

- Internal tool to audit websites for search/answer engine/AI readiness.
- No public distribution; focuses on thorough scanning, structured data inspection, and scoring.

**High-level structure** (see `apps/aeo-audit/README.md`):

- `app/`
  - Next.js App Router for UI: dashboard, scans, domains, methodology, limitations, API routes, and auth.
- `components/`
  - UI and visualization components used by the dashboard and scan views.
- `lib/`
  - `api/` – SSRF-safe domain validation, rate limiting, and concurrent scan limits; used in `/api/scans` and similar endpoints.
  - `budget/` – scan, render, and LLM budget tracking.
  - `crawl-politeness/` – robots.txt-aware crawling and politeness policies.
  - `url-discovery/` – sitemap parsing and bounded crawl to construct URL sets.
  - `page-fetch/` – HTML fetching with redirect tracking and HTTP status collection.
  - `page-render/` – optional Playwright rendering for SPA-like pages.
  - `extract-parse/` – extraction of metadata, headings, content metrics, JSON-LD schema, etc.
  - `cluster-build/` – template/cluster detection for grouping similar pages.
  - `check-runner/` – evaluates rubric-based checks against page/cluster metrics, applies caps, and computes category/pillar/overall scores; persists issues and report snapshots.
  - `llm-eval/` – LLM-based evaluation stage where enabled (respecting budgets and redaction).
  - `evidence/` – storage and redaction of crawl/render evidence.
  - `queues/` – BullMQ queue definitions and orchestration.
  - `rubric/` – rubric loading and definitions for checks and scoring.
  - `scans/` – scan lifecycle utilities.
- `src/config/`
  - Central Zod-validated configuration entrypoint for the audit app; must be used instead of direct `process.env` access.
- `prisma/`
  - Database schema, migrations, and seeding logic.
- `scripts/`
  - Operational helpers like `scripts/worker.ts` used by `npm run worker`.
- `__tests__/`
  - Regression tests using local HTML fixtures for extraction and scoring (no network, no DB/Redis required for these tests).

**AEO audit workflow**

At a high level, a scan goes through:

1. **URL discovery** – using sitemaps and bounded crawls, respecting robots.txt and politeness.
2. **Page fetching** – HTTP requests, status codes, redirects.
3. **Page rendering** – optional Playwright pass for JS-heavy pages.
4. **Extraction** – metadata, headings, word counts, schema blocks, FAQs, etc.
5. **Clustering** – grouping similar templates.
6. **Check runner** – rubric-based scoring (0–5 per check), category scores, pillar scores, and a site-level score with site-type weighting; triggers issues with priority scores.
7. **LLM evaluation** – optional; uses budget controls to cap LLM usage.
8. **Reporting** – persist scan, issues, and report snapshot for UI and CSV exports.

**Configuration model (`apps/aeo-audit/src/config`)**

- All environment and runtime configuration is centralized under `config` with Zod validation.
- Required: `DATABASE_URL`, `REDIS_URL`, `NEXT_PUBLIC_APP_URL`.
- Optional with defaults: `MAX_PAGES`, `MAX_DEPTH`, `USER_AGENT`, `EVIDENCE_MODE`, `SITE_TYPE_OVERRIDE`, `LLM_PROVIDER`, `LLM_MODEL`, etc.
- Replace any `process.env.*` usage in audit code with the appropriate `config.*` helper to stay consistent.

**API protection (`apps/aeo-audit/lib/api`)**

- `validation/domain.ts` – prevents SSRF via hostname validation, localhost/private IP rejection, and normalization.
- `rate-limit.ts` – Redis-backed per-IP sliding-window rate limiting.
- `concurrent-scans.ts` – caps concurrent scans per user/session using Redis.
- These utilities return appropriate headers and user-facing error messages; reuse them in new API routes.

---

## GEO / SEO and content rules (from `.cursor/rules`)

The `.cursor/rules` file encodes additional constraints important for GEO/SEO work on the marketing site. Future Warp agents should respect these when modifying or creating content and pages.

### Code and naming standards

- **Technology stack**: Next.js 14+ with TypeScript, Tailwind CSS, custom React components, shadcn/ui patterns, Sanity CMS, JSON-LD-based schema, Vercel deployment.
- **TypeScript/React**
  - Use TypeScript everywhere; avoid `any`.
  - Prefer functional components with hooks; keep components under ~400 lines.
- **File organization**
  - One component per file; descriptive filenames in kebab-case.
  - Group related utilities under `lib/`.
- **Naming conventions**
  - Components: `PascalCase` (e.g. `GEOPhiladelphiaPage`).
  - Functions: `camelCase`.
  - Constants: `UPPER_SNAKE_CASE`.
  - Files: `kebab-case` (e.g. `geo-philadelphia.tsx`).

### SEO & metadata expectations

- Title tags: ≤ 60 characters and unique per page.
- Meta descriptions: ≤ 155 characters and unique per page.
- Canonical URLs must be correctly set for all indexable pages.
- Schema markup should use appropriate types (Service, FAQ, Breadcrumb, Organization, etc.) and be valid JSON-LD.
- Ensure pages integrate with sitemap generation (`app/sitemap.ts`) and `robots.txt` directives.

### Content guidelines

- Do **not** fabricate data, addresses, ratings, or reviews.
- Emphasize real value propositions and remote delivery.
- Maintain transparency about methodology and limitations, especially where performance/ROI is discussed (coordinate with `lib/governance`).
- GEO pages must reflect real cities/markets covered by the project.

### GEO page requirements

For each GEO city page (e.g. `app/services/geo-austin/page.tsx`):

1. **Hero section** with city-specific headline and visual treatment.
2. **Why GEO matters** for that city/market.
3. **How we deliver** with remote-first explanation.
4. **5-step process** describing methodology.
5. **Industries served** – at least six city-specific industries.
6. **FAQs** – at least eight unique Q&A pairs per city.
7. **CTA section** – CTAs aligned with funnel stage, wired into CTA governance and analytics.
8. **Schema markup** – Service + FAQ + Breadcrumb JSON-LD blocks.

### Performance and UX standards

- Target page load < 2 seconds and mobile Lighthouse scores > 90.
- All Core Web Vitals should be green.
- Maintain mobile-first responsive design and avoid layout shifts.

### Git workflow expectations

- Branch naming: `feature/description` or `fix/description`.
- Commit messages: clear, descriptive, present tense.
- Only merge to `main` after running `npm run release:check` and resolving issues.
- Do **not** force-push to `main`.

### Common GEO-related tasks

- **Creating a new GEO page**
  - Add a new city directory under `app/services/geo-[city]/page.tsx` based on an existing template like `app/services/geo-austin/page.tsx`.
  - Update `app/sitemap.ts` to include the new slug.
  - Adjust `public/robots.txt` if crawl directives need changes.
  - Add city metadata to `lib/cities.ts` when needed.
  - Ensure all GEO page requirements and schema markup are satisfied.

- **Adding blog content**
  - Use existing blog structure (Sanity-backed) and follow internal linking and keyword optimization patterns already present in the codebase.
  - Ensure appropriate schema, metadata, and governance disclaimers when making performance/ROI claims.

---

## How future Warp agents should approach changes

- For **marketing site changes**:
  - Understand the interplay between GEO pages, CTA governance, analytics, and governance disclaimers before modifying templates.
  - Keep new pages compliant with GEO page requirements, SEO metadata limits, CTA rules, and governance/data integrity constraints.
  - Run `npm run release:check` locally when touching SEO, CTAs, or governance-related logic.

- For **AEO Audit tool changes**:
  - Fit new functionality into the existing scan pipeline (URL discovery → fetch/render → extract → cluster → check-runner → report).
  - Use the centralized `config` module instead of accessing `process.env` directly.
  - Reuse API protection utilities (`lib/api`) for new endpoints.
  - When changing extraction/scoring, extend or update regression tests in `apps/aeo-audit/__tests__` and run `npm test` (and specific tests like `npm test extraction.test.ts`).
