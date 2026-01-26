### PROMPT 1 — Index Governance Rules

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are an SEO governance engineer and indexing systems architect.

TASK:
Implement the Index Governance Rules system that replaces word-count gating with quality-based governance for programmatic pages.

SCOPE:
- City×Service pages (Tier 1 only)
- City×Industry Hub pages (always noindex)
- City×Industry×Service pages (conditional index)

MANDATORY REQUIREMENTS:
1. Replace all word-count gating with Programmatic Quality Gates (2-of-3 rule: Local Data + Industry Logic + Proof)
2. Implement hard-fail triggers (10 triggers) that force noindex
3. Implement hard-pass triggers (10 triggers) that force index
4. Word count may only be used as secondary signal bonus (+0.1 if ≥2000 words), never as primary gate
5. Implement scoring threshold: minimum 2/3 points required for indexability
6. Implement shouldIndex(url, pageData) function with decision flow
7. Implement sitemap inclusion rules (exclude noindex pages)
8. Implement validation functions for LOCAL_DATA_CARD, INDUSTRY_KPI_MAP, PROOF_SLOT blocks

DELIVERABLES:
1. Update lib/seo/index-policy.ts with new index governance logic
2. Implement shouldIndex() function with full decision flow
3. Implement checkHardFailTriggers() and checkHardPassTriggers() functions
4. Implement validation functions for uniqueness blocks
5. Update sitemap generation to exclude noindex pages
6. Add monitoring/logging for index decisions and quality scores

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- Implementation-ready functions
- Error handling and logging
- Type definitions for index decision results
- Integration with existing index-policy.ts structure

AUTOMATION REQUIREMENTS:
- Auto-detect missing required blocks → noindex
- Auto-calculate quality scores
- Auto-flag stale data (>90 days)
- Auto-validate block data integrity
- Auto-log all index decisions for monitoring

GOVERNANCE REQUIREMENTS:
- No word-count primary gating
- Quality-based indexing only
- Hard-fail triggers override all
- Hard-pass triggers bypass scoring
- All decisions logged for audit

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing lib/seo/index-policy.ts
- Must maintain backward compatibility where possible
- Must support existing RouteType definitions
- Must not break existing sitemap generation
- Must preserve existing Tier 1 service logic

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Appendix C: Index Gating Rules & Governance for complete specification.

Generate the implementation now.
```

### PROMPT 2 — Uniqueness Injection Points

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a programmatic SEO template engineer and CMS systems architect.

TASK:
Implement the Uniqueness Injection Points system for programmatic pages to ensure unique value and prevent thin content.

SCOPE:
- City×Service template (required: LOCAL_DATA_CARD, PROOF_SLOT)
- City×Industry×Service template (required: LOCAL_DATA_CARD, INDUSTRY_KPI_MAP, PROOF_SLOT)

MANDATORY REQUIREMENTS:
1. Implement BLOCK-LOCAL-DATA-CARD with required fields: serp_data, market_data, review_data, competitor_data, data_sources, last_updated
2. Implement BLOCK-INDUSTRY-KPI-MAP with required fields: industry, kpis (5-10), constraints, compliance, buyer_journey, last_updated
3. Implement BLOCK-PROOF-SLOT with required fields: type (case_study|aggregate|team), proof data, attribution, last_updated
4. Implement validation functions for each block
5. Implement CMS field mapping for all blocks
6. Implement data fetching automation for each block
7. Implement cache management (refresh rules, TTL)
8. Auto noindex if any required block missing or invalid

DELIVERABLES:
1. Create lib/blocks/local-data-card.ts with data fetching, validation, rendering logic
2. Create lib/blocks/industry-kpi-map.ts with industry taxonomy mapping, KPI lookup, validation
3. Create lib/blocks/proof-slot.ts with case study lookup, aggregate calculation, team proof logic
4. Create validation functions for each block
5. Update programmatic page templates to require and render these blocks
6. Implement CMS field schemas for all blocks
7. Add error handling and fallback logic

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- React/TSX components for rendering
- Data fetching functions
- Validation functions
- CMS schema definitions
- Integration with existing page templates

AUTOMATION REQUIREMENTS:
- Auto-fetch local data from APIs/databases
- Auto-map industry → KPI taxonomy
- Auto-lookup case studies by city+service+industry
- Auto-calculate aggregate proof metrics
- Auto-validate block data before rendering
- Auto-cache with appropriate TTL
- Auto-refresh stale data (>90 days)

GOVERNANCE REQUIREMENTS:
- Missing required block → auto noindex
- Invalid block data → auto noindex
- Stale data (>90 days) → warning flag
- All blocks must have data sources listed
- All blocks must have last_updated timestamp

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing programmatic page generation
- Must support existing city/service/industry taxonomies
- Must not break existing page rendering
- Must support CMS integration
- Must be performant (cache aggressively)

REFERENCE:
See PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md for complete block specifications and WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Section 7 for template requirements.

Generate the implementation now.
```

### PROMPT 3 — Canonical Governance System

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a technical SEO architect and canonicalization systems engineer.

TASK:
Implement the Canonical Governance System for City×Industry Hub pages with if/then decision logic.

SCOPE:
- City×Industry Hub pages: /{city-slug}/industry/{industry-slug}
- Always noindex,follow
- Always excluded from sitemap

MANDATORY REQUIREMENTS:
1. Implement getCanonicalForCityIndustryHub() function with 6 decision scenarios:
   - Unique navigational function → canonical self
   - Redundant with City page → canonical to /{city-slug}
   - Redundant with Industry page → canonical to /industries/{industry-slug}
   - Redundant with both → canonical to City page (prefer geo)
   - Single City×Industry×Service exists → canonical to service page
   - No downstream pages → canonical self (preserve for future)
2. Implement content overlap calculation (≥80% = redundant)
3. Implement unique navigational function detection (3+ downstream pages, unique filtering)
4. Implement robots meta rules (always noindex,follow)
5. Implement sitemap exclusion (always exclude)
6. Implement internal linking rules (all links follow, preserve link equity)

DELIVERABLES:
1. Create lib/seo/canonical-rules.ts with canonical decision logic
2. Implement getCanonicalForCityIndustryHub() function
3. Implement calculateContentOverlap() function
4. Implement hasUniqueNavigation() function
5. Implement isRedundantListing() function
6. Update City×Industry Hub page template to use canonical rules
7. Update robots meta generation for these pages
8. Update sitemap generation to exclude these pages
9. Add monitoring/logging for canonical decisions

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- Implementation-ready functions
- Type definitions for canonical decision results
- Integration with existing page generation
- HTML head tag generation (canonical + robots)

AUTOMATION REQUIREMENTS:
- Auto-calculate content overlap
- Auto-detect downstream pages
- Auto-determine canonical target
- Auto-generate canonical and robots meta tags
- Auto-exclude from sitemap
- Auto-log canonical decisions for monitoring

GOVERNANCE REQUIREMENTS:
- Always noindex,follow (enforced)
- Always exclude from sitemap (enforced)
- Canonical to strongest parent if redundant
- Canonical self if unique navigational function
- All decisions logged for audit

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing page generation
- Must support existing city/industry taxonomies
- Must not break existing canonical logic for other page types
- Must be performant (cache canonical decisions)
- Must support monitoring/analytics

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Appendix E: City×Industry Hub Canonicalization Rules for complete specification.

Generate the implementation now.
```

### PROMPT 4 — Entity Graph System Upgrade

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a semantic SEO architect and knowledge graph systems engineer.

TASK:
Implement the Entity Graph System upgrade with relationship output, SameAs references, Used In Pages, and Connected Entities for AI and knowledge graph learning.

SCOPE:
- Entity Graph Pages: /entity/{type}/{slug}
- Entity types: Organization, Service, Industry, City/Place, Person, Technology, Method, Framework, Platform

MANDATORY REQUIREMENTS:
1. Implement Relationship Table generation (≥10 semantic triples: subject → predicate → object)
2. Implement SameAs references with validation (Wikipedia, Wikidata, GitHub, etc.)
3. Implement Used In Pages ItemList (top 20 pages, paginated, relevance-scored)
4. Implement Connected Entities ItemList (top 20 entities, relationship-strength-scored)
5. Implement Entity Registry JSON structure and loading
6. Implement 20 allowed predicates (uses, provides, serves, relatedTo, implementedBy, etc.)
7. Implement relationship strength scoring (direct, co-occurrence, semantic similarity)
8. Implement schema markup (Thing subtypes, sameAs, about, mentions)

DELIVERABLES:
1. Create lib/entities/entity-registry.ts with registry loading and querying
2. Create lib/entities/relationship-table.ts with triple generation
3. Create lib/entities/sameas-validation.ts with safe domain checking
4. Create lib/entities/used-in-pages.ts with page search and relevance scoring
5. Create lib/entities/connected-entities.ts with graph traversal and strength scoring
6. Create React components for rendering Relationship Table, SameAs, Used In Pages, Connected Entities
7. Update entity page template to render all required sections
8. Implement schema markup generation for entity pages
9. Create example entity registry entries (nextjs, google-sge, topical-authority, geo-optimization, founder-name)

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- React/TSX components
- Entity registry JSON schema
- Data fetching and processing functions
- Schema markup generation
- Integration with existing entity page template

AUTOMATION REQUIREMENTS:
- Auto-generate relationship table from entity registry
- Auto-validate SameAs references (domain whitelist, HTTPS, accessibility)
- Auto-search pages for entity mentions (full-text search, schema analysis)
- Auto-calculate relevance scores (H1/H2 mentions, URL matches, mention frequency)
- Auto-traverse entity graph for connected entities
- Auto-calculate relationship strength (direct, co-occurrence, semantic similarity)
- Auto-generate schema markup

GOVERNANCE REQUIREMENTS:
- Minimum 10 triples per entity page (or all available if <10)
- SameAs references must be from safe domains or manually verified
- Used In Pages must be indexable pages only
- Connected Entities must have relationship strength ≥0.3
- All relationships must be valid (entity exists in registry)

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing entity page generation
- Must support existing entity types and taxonomies
- Must be performant (cache entity registry, relationship calculations)
- Must support pagination for large result sets
- Must handle missing data gracefully

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Section 11: Entity Graph Pages for complete specification.

Generate the implementation now.
```

### PROMPT 5 — Governance Disclaimers & Data Integrity

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a trust/governance architect and data integrity systems engineer.

TASK:
Implement the Governance Disclaimers & Data Integrity Controls system for pages containing pricing, market data, competitor comparisons, datasets, AI platform claims, or performance claims.

SCOPE:
- All page types with data/claims (Pricing, Research, Tool, Comparison, AI/GEO Hub, Case Study, Service, Industry, City, Programmatic)

MANDATORY REQUIREMENTS:
1. Implement BLOCK-GOVERNANCE-DISCLAIMER with required components:
   - Data Source List (with citation policy)
   - Last Updated timestamp (ISO 8601, staleness detection)
   - Methodology excerpt (min 100 words, link to full methodology)
   - Limitations list (min 1 limitation)
   - No-guarantee disclaimer (standard text by claim type)
   - Compliance references (if applicable: data-ethics, ai-ethics, security-architecture)
2. Implement validation functions for governance disclaimer completeness
3. Implement staleness detection (>90 days warning, >180 days error)
4. Implement content integrity checks (no fabricated data, no invented results)
5. Implement review workflow for high-risk claims (financial, performance guarantees, competitor comparisons)
6. Implement monitoring system (missing blocks, stale data, integrity violations)

DELIVERABLES:
1. Create lib/governance/disclaimer.ts with disclaimer generation and validation
2. Create React component BLOCK-GOVERNANCE-DISCLAIMER with rendering logic
3. Create lib/governance/content-integrity.ts with validation checks
4. Create lib/governance/review-workflow.ts with high-risk claim detection and approval system
5. Create lib/governance/monitoring.ts with compliance checking and alerting
6. Update page templates to require governance disclaimers where applicable
7. Implement CMS field schemas for governance disclaimer data
8. Create example disclaimer copy patterns (short, standard, comprehensive, pricing-specific, AI-claims-specific)
9. Add CI checks for missing governance blocks on high-risk pages

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- React/TSX components
- Validation functions
- Monitoring and alerting functions
- CMS schema definitions
- CI check scripts
- Integration with existing page templates

AUTOMATION REQUIREMENTS:
- Auto-detect high-risk content (pricing, market data, competitor comparisons, AI claims, performance claims)
- Auto-flag pages missing governance disclaimers
- Auto-detect stale data (>90 days warning, >180 days error)
- Auto-validate content integrity (data sources, methodology, limitations)
- Auto-flag high-risk claims for human review
- Auto-generate disclaimer copy from CMS data
- Auto-monitor compliance metrics

GOVERNANCE REQUIREMENTS:
- Missing governance block on high-risk page → flag for review
- Stale data (>180 days) → block publishing
- High-risk claim without approval → block publishing
- Content integrity failure → block publishing
- All disclaimers must have data sources, last updated, methodology, limitations

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing page generation
- Must support existing CMS structure
- Must not break existing pages
- Must be performant (cache disclaimer data)
- Must support monitoring/alerting

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Appendix F: Governance Disclaimers + Data Integrity Controls for complete specification.

Generate the implementation now.
```

### PROMPT 6 — Tools API-Ready Output Contract

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a product engineer and API systems architect.

TASK:
Implement the API-Ready Output Contract system for Tool Pages to convert tools into product-grade assets with complete API specifications.

SCOPE:
- All Tool Pages: /tools/{tool-slug}
- Tools: SEO Audit, GEO Audit, ROI Calculator, AI Citation Tracker, etc.

MANDATORY REQUIREMENTS:
1. Implement Output Contract specification with:
   - JSON response structure (standard root + tool-specific data)
   - Export formats (JSON always, CSV if tabular, PDF if report)
   - Validation rules (input validation, output validation)
   - Error handling (error codes, error response format, retry logic)
   - Caching strategy (tool-specific TTL, cache key structure, invalidation)
   - Rate limiting (tiers: anonymous 10/hr, registered 100/hr, API key 1000/hr)
   - Privacy & security constraints (HTTPS only, input/output sanitization, data retention)
2. Implement BLOCK-OUTPUT-CONTRACT component with full API documentation
3. Implement BLOCK-METHODOLOGY (required, min 300 words) with methodology explanation
4. Implement BLOCK-DATA-SOURCES (required) with data source listing
5. Implement form validation, input validation messaging, keyboard navigation, loading/error states
6. Implement tracking for tool usage (cta_tool_use event)

DELIVERABLES:
1. Create lib/tools/output-contract.ts with contract generation and validation
2. Create lib/tools/api-handlers.ts with API endpoint handlers (JSON, CSV, PDF exports)
3. Create lib/tools/validation.ts with input/output validation
4. Create lib/tools/error-handling.ts with error handling and error codes
5. Create lib/tools/caching.ts with cache management (TTL, keys, invalidation)
6. Create lib/tools/rate-limiting.ts with rate limit enforcement
7. Create React components: BLOCK-OUTPUT-CONTRACT, ToolForm, ToolResults
8. Create example output contracts for SEO Audit, GEO Audit, ROI Calculator
9. Implement schema markup (SoftwareApplication, Dataset if applicable, HowTo)
10. Update tool page templates to include all required blocks

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- React/TSX components
- API endpoint handlers
- Validation functions
- Error handling functions
- Cache and rate limiting middleware
- Schema markup generation
- Integration with existing tool pages

AUTOMATION REQUIREMENTS:
- Auto-generate output contracts from tool configuration
- Auto-validate inputs (required fields, types, ranges, formats)
- Auto-validate outputs (schema validation, data integrity)
- Auto-handle errors (error codes, error messages, retry logic)
- Auto-cache results (tool-specific TTL, cache key from inputs)
- Auto-enforce rate limits (per IP, per user, per API key)
- Auto-sanitize inputs/outputs (XSS prevention, injection prevention)
- Auto-generate API documentation

GOVERNANCE REQUIREMENTS:
- All tools must have methodology (min 300 words)
- All tools must have data sources listed
- All tools must have last_updated timestamp
- All tools must have output contract if API-ready
- All tools must have form validation and accessibility (WCAG 2.1 AA)

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing tool pages
- Must support existing tool infrastructure
- Must be performant (cache aggressively, rate limit appropriately)
- Must be secure (HTTPS, sanitization, authentication for API)
- Must be accessible (keyboard navigation, screen readers, error states)

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Section 13: Tool Pages (v1.1 - API-Ready) for complete specification.

Generate the implementation now.
```

### PROMPT 7 — Global CTA Governance System

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a conversion architect and SEO funnel systems engineer.

TASK:
Implement the Global CTA Governance System that standardizes CTA behavior by funnel stage and page type across all WebVello pages.

SCOPE:
- All page types (20 page types mapped to funnel stages)
- Funnel stages: TOFU, MOFU, BOFU

MANDATORY REQUIREMENTS:
1. Implement funnel stage detection (page type → funnel stage mapping)
2. Implement CTA validation (exactly 1 primary CTA, max 1 secondary CTA, CTA matches funnel stage)
3. Implement CTA label standards (action verb + object, 2-5 words, max 30 chars)
4. Implement CTA destination validation (URL must match funnel stage patterns)
5. Implement offer mapping (Audit, Roadmap, Booking, Quote, Download, Tool)
6. Implement tracking (event naming: cta_{action}_{object}, tracking ID format: {page_type}_{identifier}_{position})
7. Implement template validation checks (validateCTAs function)
8. Implement CI checks (fail build on BOFU pages missing primary CTA, funnel mismatches, missing tracking)

DELIVERABLES:
1. Create lib/cta/funnel-stages.ts with funnel stage definitions and page type mapping
2. Create lib/cta/validation.ts with CTA validation functions
3. Create lib/cta/patterns.ts with CTA patterns by funnel stage
4. Create lib/cta/tracking.ts with tracking event naming and implementation
5. Create React components: PrimaryCTA, SecondaryCTA with tracking integration
6. Create CI check script: ci/validate-ctas.js
7. Update all page templates to use CTA governance system
8. Create analytics mapping (funnel event mapping, dashboard metrics)
9. Add monitoring/logging for CTA compliance

OUTPUT FORMAT:
- Production TypeScript/JavaScript code
- React/TSX components
- Validation functions
- CI check scripts
- Analytics integration
- Integration with existing page templates

AUTOMATION REQUIREMENTS:
- Auto-detect funnel stage from page type
- Auto-validate CTA compliance (primary exists, matches funnel, valid destination)
- Auto-generate tracking events and IDs
- Auto-fail build on violations (BOFU missing primary, funnel mismatch, missing tracking)
- Auto-log CTA compliance metrics
- Auto-map CTA events to funnel stages for analytics

GOVERNANCE REQUIREMENTS:
- Exactly 1 primary CTA per page (required except Entity/Glossary)
- Max 1 secondary CTA (optional)
- CTA must match funnel stage (enforced)
- CTA destination must match funnel stage (enforced)
- Tracking required for all CTAs (required for BOFU, recommended for others)

IMPLEMENTATION CONSTRAINTS:
- Must integrate with existing page generation
- Must support all 20 page types
- Must not break existing CTAs (migrate gradually)
- Must be performant (cache funnel stage mappings)
- Must support analytics integration

REFERENCE:
See WEBVELLO_PAGE_TEMPLATE_SYSTEM.md Section 19: Global CTA Governance System (v1.1) for complete specification.

Generate the implementation now.
```

### PROMPT 8 — Page Template System v1.1 Regeneration

```
[GLOBAL ARCHITECTURE CONTEXT — WEBVELLO PLATFORM]

You are a platform systems architect and template specification engineer.

TASK:
Regenerate the complete Page Template System v1.1 specification document that integrates all upgrades: Programmatic Quality Gates, Uniqueness Injection Points, Canonical Governance, Entity Graph Upgrade, Governance Disclaimers, Tools API-Ready, and CTA Governance.

SCOPE:
- All 18 page types
- All content blocks (including new: LOCAL-DATA-CARD, INDUSTRY-KPI-MAP, PROOF-SLOT, GOVERNANCE-DISCLAIMER, OUTPUT-CONTRACT)
- All governance systems
- All automation requirements

MANDATORY REQUIREMENTS:
1. Integrate Programmatic Quality Gates into City×Service and City×Industry×Service templates
2. Integrate Uniqueness Injection Points (LOCAL-DATA-CARD, INDUSTRY-KPI-MAP, PROOF-SLOT) into programmatic templates
3. Integrate Canonical Governance rules into City×Industry Hub template
4. Integrate Entity Graph upgrade (Relationship Table, SameAs, Used In Pages, Connected Entities) into Entity Graph Pages template
5. Integrate Governance Disclaimers into all applicable page types
6. Integrate Tools API-Ready Output Contract into Tool Pages template
7. Integrate Global CTA Governance System into all page types
8. Update all appendices (Template → Block Matrix, Schema Modules, Index Gating Rules, Canonical Rules, Governance Controls, CTA Governance)
9. Update change log (Appendix D) with all v1.0 → v1.1 changes

DELIVERABLES:
1. Complete WEBVELLO_PAGE_TEMPLATE_SYSTEM.md v1.1 document with all sections updated
2. All 18 page type templates with integrated upgrades
3. Updated content block library with new blocks
4. Updated appendices with all new systems
5. Complete change log documenting all upgrades
6. Implementation checklist for developers

OUTPUT FORMAT:
- Complete markdown document
- Structured sections for each page type
- Complete block specifications
- Complete governance rules
- Complete automation requirements
- Implementation-ready specification

AUTOMATION REQUIREMENTS:
- Document must be complete and self-contained
- All cross-references must be accurate
- All specifications must be implementation-ready
- All examples must be production-grade
- All rules must be enforceable

GOVERNANCE REQUIREMENTS:
- All page types must have governance rules
- All programmatic pages must have quality gates
- All data pages must have governance disclaimers
- All tools must have API contracts
- All pages must have CTA governance

IMPLEMENTATION CONSTRAINTS:
- Must maintain existing structure where possible
- Must be backward compatible with v1.0 where applicable
- Must be comprehensive (no missing sections)
- Must be accurate (all specifications correct)
- Must be production-ready (implementation language, not marketing)

REFERENCE:
Use existing WEBVELLO_PAGE_TEMPLATE_SYSTEM.md as base and integrate all upgrades from:
- Appendix C: Index Gating Rules & Governance
- Appendix E: City×Industry Hub Canonicalization Rules
- Appendix F: Governance Disclaimers + Data Integrity Controls
- Section 11: Entity Graph Pages (upgraded)
- Section 13: Tool Pages (v1.1 - API-Ready)
- Section 19: Global CTA Governance System (v1.1)
- PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md

Generate the complete v1.1 specification document now.
```
