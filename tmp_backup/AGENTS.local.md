# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repo contains two main pieces:

- **Marketing site (root Next.js app)**: A Next.js 14, TypeScript, Tailwind CSS site for the Web Vello digital marketing agency. Primary code lives under `app/`, `components/`, and `lib/`.
- **Search & AI Readiness Audit tool**: A separate Next.js app under `apps/aeo-audit` used internally to audit websites for AEO (answer engine optimization) and AI readiness.

The marketing site focuses on high-quality, governed marketing pages (SEO, CTAs, analytics, leads). The AEO Audit app is an internal tool with its own database, workers, and test suite.

---

## Root Marketing Site (Next.js 14 App)

### Core Commands

From the repo root (`package.json`):

- **Install dependencies**
  - `npm install`

- **Run dev server**
  - `npm run dev`
  - Default URL: `http://localhost:3000`

- **Build & run production**
  - `npm run build`
  - `npm start`

- **Lint (ESLint + Next.js)**
  - `npm run lint`
  - `npm run a11y:lint` (same lint script, used for accessibility-focused checks)

- **Release / pre-deploy gate (preferred before merging to main or deploying)**
  - `npm run release:check`
  - Runs: build, lint, index governance validation, CTA governance validation, sitemap validation.

- **Sitemap validation utilities**
  - `npm run validate:sitemap` – validate sitemaps once.
  - `npm run test:sitemap` – run the full sitemap test suite.
  - **Run a single sitemap test file** (example):
    - `npx tsx lib/__tests__/sitemap-validation.test.ts`

- **Content & assets helpers**
  - `npm run seed:cis` – seed city/industry/service pages from TypeScript script.
  - `npm run index-pages` – simple indexing of pages.
  - `npm run generate-favicon` – generate favicons from a source image.

> Deployment is managed by Vercel; pushing to `main` triggers a production build.

### CI / Release Gate

CI logic is centralized under `ci/` (see `ci/README.md`) and wired through `npm run release:check`:

- **Build**: `npm run build` – validates TypeScript compilation and Next.js build.
- **Lint**: `npm run lint` – ESLint rules, including accessibility.
- **Index governance**: `node ci/validate-index-governance.js` – ensures SEO/indexing rules are respected.
- **CTA governance**: `node ci/validate-ctas.js` – enforces CTA rules by funnel stage and page type.
- **Sitemap validation**: `npm run validate:sitemap` (or `node ci/validate-sitemap.js`).

Use `npm run release:check` as the default "safe before deploy" command.

### High-Level Architecture

#### Next.js App Router & Layout

- **Routing**: Uses the App Router in `app/` (e.g., `app/layout.tsx`, `app/page.tsx`, and nested route segments).
- **Components**: 
  - `components/ui/` – base UI components (e.g., button variants, shared primitives).
  - `components/layout/` – layout primitives like the header/navigation shell.
  - `components/sections/` – page-level sections such as hero, pricing, stats, testimonials, etc.
- **Styling & design system**:
  - Tailwind config in `tailwind.config.js` defines the design tokens (colors, typography, spacing scale, breakpoints, etc.).
  - Global styles in `app/globals.css`.
  - The `cn()` utility in `lib/utils.ts` is the standard for merging Tailwind classes.

The site is structured around clear page types (homepage, services, pricing, city pages, etc.) that downstream systems use (analytics, CTAs, governance, sitemap and index policy).

#### Analytics System (`lib/analytics`)

Purpose: vendor-agnostic analytics that standardizes event payloads and forwards to vendor tools when present.

Key points:

- Central entry point: `track()` and helpers in `lib/analytics/client.ts` and `lib/analytics/cta-tracking.ts`.
- Events automatically enrich with:
  - URL/pathname, referrer
  - Page type (`homepage`, `service`, `blog`, `location`, `city-service`, etc.)
  - Funnel stage (`awareness`, `interest`, `consideration`, `intent`, `conversion`)
  - UTM parameters
  - Optional `trackingId` (for CTAs/forms).
- Client events POST to `app/api/events/route.ts`:
  - In dev, logs to console and can write to `data/events.json` (controlled via env vars).
  - In production, acts as a lightweight pass-through and forwarder.
- Integration with vendor analytics is automatic if scripts exist on `window` (`gtag`, `dataLayer`, `posthog`).

When adding new CTAs or forms, prefer to use the CTA + lead helpers that already integrate with analytics instead of manual `track()` calls.

#### CTA Governance System (`lib/cta` + `ci/validate-ctas.js`)

Purpose: enforce a consistent, governed CTA strategy across all pages.

Core ideas (see `lib/cta/README.md`):

- **Single primary CTA rule**: All non-exempt pages must have exactly one primary CTA, plus at most one secondary CTA.
- **Funnel-aware CTAs**: CTA labels and destinations must match funnel stages and page types.
- **Tracking required**: Especially for BOFU CTAs, tracking IDs/events are mandatory.

Key pieces:

- `getRecommendedCTAs(pageType, pathname, params)` – returns `primary` and `secondary` CTA configs for a given page.
- `getFunnelStage(pageType, pathname)` – derive funnel stage (`TOFU`, `MOFU`, `BOFU`).
- `validateCTAs({ pageType, pathname, funnelStage, ctas })` – validate per governance rules; used both in runtime and CI.
- `attachTrackingMetadata(...)` – add standardized tracking IDs/event names.

CI integration:

- `node ci/validate-ctas.js` scans the codebase and fails if:
  - BOFU pages lack a primary CTA.
  - Pages have multiple primary CTAs.
  - Destinations do not match funnel stage patterns.
  - Required tracking is missing.

When building new templates or page types, keep them aligned with the existing page-type and funnel-stage mapping in `lib/cta/funnel-stages.ts` to avoid CI regressions.

#### Uniqueness Injection Blocks (`lib/blocks` + index policy)

Purpose: provide structured, validated uniqueness/content blocks that power SEO-friendly, non-duplicative city/industry/service pages.

Concepts (see `lib/blocks/README.md`):

- Blocks like **Local Data Card**, **Industry KPI Map**, and **Proof Slot** expose a provider interface:
  - `LocalJson*Provider` – local JSON-backed seed data.
  - `Cms*Provider` – CMS-backed content.
  - `StubProvider` – explicit error if a block is not wired.
- Each provider:
  - Implements `get(input)`, `validate(data)`, `getLastUpdated(data)`, `getSources(data)`.
  - Has TTL-based in-memory caching per block type.
  - Enforces staleness rules (e.g., data older than 90 days fails validation).
- Integration with index policy:
  - Index policy code uses validation results to decide whether a page is indexable.
  - Missing/invalid blocks or stale data cause the page to become `noindex` with structured error logging.

When adding new city/industry/service variants or new uniqueness blocks, wire them through this provider system so that index governance and CI can reason about them.

#### Governance & Data Integrity (`lib/governance`)

Purpose: centralize governance disclaimers, data integrity checks, and high-risk claim gating.

Key responsibilities (see `lib/governance/README.md`):

- **Governance disclaimers**: `GovernanceDisclaimer` model with sources, last updated date, methodology summary, limitations, claim types, etc.
- **Staleness detection**: Tiered warnings/errors based on age of `lastUpdated` (e.g., >90 days = warning, >180 days = error).
- **High-risk claims**: Special handling for claim types like `performance`, `roi`, `ai-claims`, `competitor` and for high-risk page types like pricing, research, and comparisons.
- **Publish gates**:
  - `validateGovernanceDisclaimer(disclaimer)` – schema + policy validation.
  - `checkContentIntegrity(disclaimer, flags)` – ensures content meets integrity rules (no fabricated data, etc.).
  - `publishGate(disclaimer, pageMeta)` – used at build time to block publishing when rules are violated.
- **Approval tokens**: High-risk claims require tokens from `GOVERNANCE_APPROVAL_TOKENS` to pass the publish gate.

When introducing new high-risk content (performance metrics, ROI calculators, comparisons), define or update the associated disclaimers and call the governance helpers in page templates and/or build-time validation.

#### Lead Capture System (`lib/leads`)

Purpose: minimal, production-ready lead capture with validation, storage, and notifications.

Key flow (see `lib/leads/README.md`):

- UI:
  - `components/forms/bofu-lead-form.tsx` – drop-in BOFU lead form.
  - Typically rendered near the bottom of service/city-service pages with a `serviceInterest` and optional `ctaTrackingId`.
- API:
  - `POST /api/leads` (`app/api/leads/route.ts`).
  - Handles validation, spam protection (honeypot, rate limiting), sanitization, and storage.
- Storage / notifications:
  - Dev: file-backed storage to `data/leads.json` plus console logging.
  - Prod: in-memory storage by default; provider system is designed for extension (HubSpot, CMS-based storage, etc.).
  - Notification provider selected via `LEAD_NOTIFICATION_PROVIDER` (`console` vs `resend`).

Leads are integrated with CTA tracking and the analytics system; when changing the form or API, keep fields and tracking IDs in sync.

#### SEO, Index Governance & Sitemaps

- Index policy + governance:
  - `ci/validate-index-governance.js` ensures pages use shared SEO/indexing primitives (e.g., `getSeoDirectives()`), enforce `noindex` where required (city×industry hubs, etc.), and validate that required uniqueness blocks and governance disclaimers are present.
- Sitemap:
  - `lib/sitemap-validation.ts` plus tests under `lib/__tests__/` validate sitemap integrity (dedupe, URL format, lastmod correctness, size limits).
  - `npm run test:sitemap` is the canonical way to run all sitemap tests; use `npx tsx` on individual test files when debugging.

---

## AEO Audit App (`apps/aeo-audit`)

This is an internal Next.js application with its own stack (Prisma + PostgreSQL, BullMQ + Redis, Playwright workers) dedicated to scanning and auditing external sites.

### Core Commands (from `apps/aeo-audit`)

Run these from the `apps/aeo-audit` directory:

- **Install dependencies**
  - `cd apps/aeo-audit`
  - `npm install`

- **Dev server**
  - `npm run dev`
  - Default URL: `http://localhost:3000` (within the aeo-audit app context).

- **Production build & start**
  - `npm run build`
  - `npm start`

- **Lint**
  - `npm run lint`

- **Test suite (Jest)**
  - Run all tests: `npm test`
  - Watch mode: `npm run test:watch`
  - **Run a single test file (examples)**:
    - `npm test extraction.test.ts`
    - `npm test scoring.test.ts`
  - Coverage: `npm test -- --coverage`

- **Database (Prisma + PostgreSQL)**
  - Generate Prisma client: `npm run db:generate`
  - Run migrations (dev/interactive): `npm run db:migrate`
  - Seed DB: `npm run db:seed`
  - Prisma Studio: `npm run db:studio`

- **Workers**
  - Start all workers: `npm run worker`

> Before running, ensure PostgreSQL and Redis are running and `.env` is configured (see `apps/aeo-audit/README.md` and `ENV.md`).

### High-Level Architecture (AEO Audit)

See `apps/aeo-audit/README.md` and related docs for details; high-level overview:

- **App Router UI (`apps/aeo-audit/app/`)**
  - `app/dashboard`, `app/scans`, `app/domains`, `app/methodology`, `app/limitations`, etc. expose the audit dashboard, scan management, and documentation.
  - `app/api` contains API routes for scans, authentication, and report access.

- **Core libraries (`apps/aeo-audit/lib/`)**
  - `api/` – API protection utilities.
  - `budget/` – budget tracking for page/render/LLM limits.
  - `check-runner/` – rubric check execution.
  - `cluster-build/` – page clustering based on templates/signatures.
  - `crawl-politeness/` – robots.txt, rate limiting, and polite crawling.
  - `evidence/` – evidence storage, redaction, retention.
  - `extract-parse/` – HTML extraction and structured data parsing.
  - `llm-eval/` – optional LLM-based evaluation.
  - `monitoring/` – monitoring and diffing for recurring scans.
  - `page-fetch/` – HTTP fetching with redirect tracking.
  - `page-render/` – Playwright-based rendering fallback.
  - `queues/` – BullMQ queue configuration and orchestration.
  - `rubric/` – rubric loader and configuration.
  - `scans/` – scanning utilities, orchestration helpers.
  - `url-discovery/` – robots/sitemap/HTML-based URL discovery.

- **Database & schema (`apps/aeo-audit/prisma/`)**
  - Prisma schema and migrations encode scans, pages, issues, evidence, and report entities.

- **Workers (`apps/aeo-audit/scripts/worker.ts` + `lib/queues`)**
  - One BullMQ worker per logical step:
    - `scan_orchestrator`, `url_discovery`, `page_fetch`, `page_render_fallback`, `extract_parse`, `cluster_build`, `check_runner`, `llm_eval`, `report_build`, `scheduled_scan`, `evidence_retention`.
  - Workers are intended to run as a separate long-lived process in dev and production.

- **Security & governance (AEO)**
  - Basic password-based auth gated by `AEO_AUDIT_PASSWORD`.
  - All pages are `noindex` and protected via headers and noindex controls.
  - Budget controls for crawls, renders, and LLM calls (`MAX_PAGES`, `MAX_RENDERS`, `MAX_LLM_CALLS`, etc.).

---

## Testing & Local Validation Summary

- **Root marketing site**:
  - Prefer `npm run release:check` for full local validation (build, lint, governance, CTA, sitemap).
  - Use `npm run validate:sitemap`/`npm run test:sitemap` to focus on sitemap behavior; run individual TSX-based tests via `npx tsx <path-to-test>.ts`.

- **AEO Audit app**:
  - Use `npm test` / `npm run test:watch` under `apps/aeo-audit` for Jest tests.
  - Run single Jest tests via `npm test <pattern>.test.ts`.

Keep new pages, routes, and features aligned with the existing page-type, funnel-stage, governance, and analytics systems so that CI scripts and governance modules continue to enforce the intended marketing and compliance rules.
