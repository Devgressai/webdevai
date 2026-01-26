# WebVello Page Template System

**Version:** 1.1  
**Classification:** Enterprise-Grade AI-Native Growth Platform  
**Audience:** Developers, CMS engineers, SEO engineers, AI engineers, Automation engineers, Product teams  
**Status:** Production-ready platform template architecture

**Changes from v1.0:** See Appendix D for complete change log.

---

## 0. SHARED CONTENT BLOCK LIBRARY

Reusable blocks referenced across all page types. Each block specifies: Purpose, Inputs, Data sources, Dynamic variables, Reusability, Automation compatibility.

### BLOCK-HERO
| Attribute | Spec |
|-----------|------|
| **Purpose** | Above-fold value proposition, primary keyword, CTA anchor |
| **Inputs** | `title`, `subtitle`, `primary_cta`, `secondary_cta`, `visual_asset` |
| **Data sources** | CMS: `hero_title`, `hero_subtitle`; Programmatic: `{entity_name}`, `{location}` |
| **Dynamic variables** | `{{entity}}`, `{{industry}}`, `{{city}}`, `{{service}}`, `{{metric}}` |
| **Reusability** | All hub, service, programmatic, solution pages |
| **Automation** | Template string substitution; CMS field mapping |

### BLOCK-DEFINITION
| Attribute | Spec |
|-----------|------|
| **Purpose** | Canonical definition for AI extraction, featured-snippet target |
| **Inputs** | `term`, `definition` (2–4 sentences), `source_ref`, `related_terms[]` |
| **Data sources** | Glossary API, CMS `definition` field |
| **Dynamic variables** | `{{term}}`, `{{definition}}` |
| **Reusability** | Cluster, glossary, entity, tool pages |
| **Automation** | Glossary slug → definition lookup; schema `DefinedTerm` |

### BLOCK-AUTHORITY
| Attribute | Spec |
|-----------|------|
| **Purpose** | Credibility signals: expertise, methodology, credentials |
| **Inputs** | `headline`, `claims[]`, `evidence[]`, `entity_refs[]` |
| **Data sources** | CMS, `/entity/*`, `/trust/our-methodology` |
| **Dynamic variables** | `{{claims}}`, `{{entity_refs}}` |
| **Reusability** | Hub, service, trust, tool pages |
| **Automation** | Entity ID → name/url; claim taxonomy |

### BLOCK-TRUST
| Attribute | Spec |
|-----------|------|
| **Purpose** | Social proof, governance, compliance signals |
| **Inputs** | `type` (reviews | testimonials | awards | compliance), `items[]`, `max_display` |
| **Data sources** | `/trust/*`, review API, CMS `testimonials` |
| **Dynamic variables** | `{{items}}`, `{{type}}` |
| **Reusability** | Service, case study, proof, BOFU pages |
| **Automation** | Filter by `type`; pagination; schema `Review`/`Organization` |

### BLOCK-PROOF
| Attribute | Spec |
|-----------|------|
| **Purpose** | Quantified outcomes, metrics, case study refs |
| **Inputs** | `metric_label`, `value`, `context`, `case_study_ref`, `industry` |
| **Data sources** | `/case-studies/*`, `/proof/*`, analytics |
| **Dynamic variables** | `{{metric}}`, `{{value}}`, `{{case_ref}}` |
| **Reusability** | Service, case study, proof, programmatic pages |
| **Automation** | Case study tags → aggregate; metric normalization |

### BLOCK-PROCESS
| Attribute | Spec |
|-----------|------|
| **Purpose** | Step-by-step methodology; HowTo extraction |
| **Inputs** | `steps[]` { `name`, `description`, `duration?` }, `outcome` |
| **Data sources** | CMS, `/trust/our-process` |
| **Dynamic variables** | `{{steps}}`, `{{outcome}}` |
| **Reusability** | Trust, tool, cluster, solution pages |
| **Automation** | Ordered list; schema `HowTo` |

### BLOCK-METHODOLOGY
| Attribute | Spec |
|-----------|------|
| **Purpose** | Framework description, linkage to entity/method |
| **Inputs** | `name`, `description`, `principles[]`, `entity_method_ref` |
| **Data sources** | `/entity/method/*`, `/trust/our-methodology` |
| **Dynamic variables** | `{{name}}`, `{{principles}}` |
| **Reusability** | Trust, entity, service, cluster pages |
| **Automation** | Method slug → entity fetch |

### BLOCK-DATA
| Attribute | Spec |
|-----------|------|
| **Purpose** | Structured data, stats, sources; Dataset signaling |
| **Inputs** | `dataset_name`, `rows[]`, `source_url`, `last_updated` |
| **Data sources** | Research API, tool output, CMS |
| **Dynamic variables** | `{{rows}}`, `{{source_url}}` |
| **Reusability** | Research, tool, comparison pages |
| **Automation** | Schema `Dataset`; CSV/JSON export |

### BLOCK-COMPARISON
| Attribute | Spec |
|-----------|------|
| **Purpose** | A vs B structure; comparison extraction |
| **Inputs** | `subject_a`, `subject_b`, `dimensions[]`, `verdict` |
| **Data sources** | CMS, `/compare/*` |
| **Dynamic variables** | `{{subject_a}}`, `{{subject_b}}`, `{{dimensions}}` |
| **Reusability** | Comparison, cluster pages |
| **Automation** | Dimension taxonomy; entity refs |

### BLOCK-USE-CASE
| Attribute | Spec |
|-----------|------|
| **Purpose** | Scenario → solution mapping; qualification |
| **Inputs** | `scenario`, `solution_ref`, `industry?`, `outcome` |
| **Data sources** | CMS, service/industry taxonomy |
| **Dynamic variables** | `{{scenario}}`, `{{solution_ref}}` |
| **Reusability** | Service, industry, tool, solution pages |
| **Automation** | Use case → service tagging |

### BLOCK-LOCAL-RELEVANCE
| Attribute | Spec |
|-----------|------|
| **Purpose** | Geo-specific signals, local entity, NAP |
| **Inputs** | `city`, `state`, `region`, `local_entities[]`, `service_area` |
| **Data sources** | `citySlugs`, `cityData`, `/entity/city/*` |
| **Dynamic variables** | `{{city}}`, `{{state}}`, `{{region}}` |
| **Reusability** | City, programmatic (city×service, city×industry×service) |
| **Automation** | City slug → data lookup; schema `Place` |

### BLOCK-INDUSTRY-RELEVANCE
| Attribute | Spec |
|-----------|------|
| **Purpose** | Industry-specific signals, vertical entity |
| **Inputs** | `industry`, `challenges[]`, `solutions[]`, `entity_industry_ref` |
| **Data sources** | `industrySlugs`, `/entity/industry/*`, `/industries/*` |
| **Dynamic variables** | `{{industry}}`, `{{challenges}}`, `{{solutions}}` |
| **Reusability** | Industry, programmatic, cluster, service pages |
| **Automation** | Industry slug → entity fetch; service mapping |

### BLOCK-AI-DISCOVERY
| Attribute | Spec |
|-----------|------|
| **Purpose** | GEO/AEO-optimized: definitions, lists, step sequences, entity refs |
| **Inputs** | `definition?`, `bullet_list?`, `steps?`, `entity_refs[]`, `faq_refs[]` |
| **Data sources** | Glossary, FAQ, entity graph |
| **Dynamic variables** | `{{definition}}`, `{{entity_refs}}` |
| **Reusability** | All page types |
| **Automation** | Speakable markup; FAQ schema; entity triples |

### BLOCK-EDUCATION
| Attribute | Spec |
|-----------|------|
| **Purpose** | Instructional content; link to resources/glossary |
| **Inputs** | `headline`, `sections[]`, `related_links[]`, `glossary_terms[]` |
| **Data sources** | CMS, `/resources/*`, `/glossary/*` |
| **Dynamic variables** | `{{sections}}`, `{{related_links}}` |
| **Reusability** | Cluster, tool, research, glossary pages |
| **Automation** | Term extraction → glossary links |

### BLOCK-FAQ
| Attribute | Spec |
|-----------|------|
| **Purpose** | Q&A for featured snippet, FAQ schema, voice |
| **Inputs** | `questions[]` { `q`, `a` }, `max_display`, `topic` |
| **Data sources** | CMS FAQ, programmatic FAQ bank |
| **Dynamic variables** | `{{questions}}` |
| **Reusability** | Service, cluster, tool, programmatic pages |
| **Automation** | Schema `FAQPage`; topic → question pool |

### BLOCK-CTA
| Attribute | Spec |
|-----------|------|
| **Purpose** | Primary conversion action |
| **Inputs** | `label`, `url`, `variant` (primary|secondary|outline), `tracking_id` |
| **Data sources** | Route config, `/contact`, `/pricing`, service CTAs |
| **Dynamic variables** | `{{url}}`, `{{label}}` |
| **Reusability** | All page types |
| **Automation** | Funnel position → CTA mapping |

### BLOCK-CONVERSION
| Attribute | Spec |
|-----------|------|
| **Purpose** | Lead capture, form, offer mapping |
| **Inputs** | `form_id`, `offer_ref`, `fields[]`, `privacy_url`, `success_redirect` |
| **Data sources** | Form config, `/contact`, offer taxonomy |
| **Dynamic variables** | `{{form_id}}`, `{{offer_ref}}` |
| **Reusability** | BOFU, tool, pricing, solution pages |
| **Automation** | Page type → form variant; UTM passthrough |

### BLOCK-LOCAL-DATA-CARD
| Attribute | Spec |
|-----------|------|
| **Purpose** | Uniqueness injection: SERP/market/competitor/review data for programmatic pages |
| **Inputs** | `city`, `service`, `serp_data` { `avg_competitor_count`, `top_3_difficulty`, `local_pack_presence` }, `market_data` { `market_size`, `growth_rate`, `key_players[]` }, `review_data` { `avg_rating_range`, `review_count_range` }, `last_updated` |
| **Data sources** | SERP API, market research API, review aggregator API, CMS `local_data` field |
| **Dynamic variables** | `{{city}}`, `{{service}}`, `{{serp_data}}`, `{{market_data}}`, `{{review_data}}` |
| **Reusability** | City×Service, City×Industry×Service (required uniqueness slot) |
| **Automation** | City+service → API lookup; cache results; update frequency configurable |

### BLOCK-INDUSTRY-KPI-MAP
| Attribute | Spec |
|-----------|------|
| **Purpose** | Uniqueness injection: industry KPIs, constraints, compliance for programmatic pages |
| **Inputs** | `industry`, `service`, `kpis[]` { `metric`, `benchmark`, `context` }, `constraints[]` { `type`, `description`, `impact` }, `compliance[]` { `regulation`, `requirement`, `link` }, `last_updated` |
| **Data sources** | Industry research API, compliance database, CMS `industry_kpi` field |
| **Dynamic variables** | `{{industry}}`, `{{service}}`, `{{kpis}}`, `{{constraints}}`, `{{compliance}}` |
| **Reusability** | City×Industry×Service, Industry pages (required uniqueness slot) |
| **Automation** | Industry+service → KPI lookup; compliance filter; update frequency configurable |

### BLOCK-PROOF-SLOT
| Attribute | Spec |
|-----------|------|
| **Purpose** | Uniqueness injection: case study OR aggregate proof OR team proof with attribution |
| **Inputs** | `type` (case_study | aggregate | team), `case_study_ref?`, `aggregate_metrics[]?`, `team_proof[]?` { `member`, `credential`, `attribution` }, `attribution_required` (boolean) |
| **Data sources** | `/case-studies/*`, analytics aggregate, team database, CMS `proof_slot` field |
| **Dynamic variables** | `{{type}}`, `{{case_study_ref}}`, `{{aggregate_metrics}}`, `{{team_proof}}` |
| **Reusability** | City×Service, City×Industry×Service (required uniqueness slot) |
| **Automation** | Filter case studies by city+service+industry tags; aggregate metrics by dimension; team proof by attribution rules |

### BLOCK-GOVERNANCE-DISCLAIMER
| Attribute | Spec |
|-----------|------|
| **Purpose** | Data integrity controls: source listing, timestamps, methodology, limitations |
| **Inputs** | `data_sources[]` { `name`, `url`, `type` }, `last_updated` (ISO 8601), `methodology_excerpt`, `limitations[]`, `no_guarantee_disclaimer` (boolean), `applies_to` (pricing | market_data | competitor | dataset | ai_claims) |
| **Data sources** | CMS `governance_disclaimer` field, data source registry |
| **Dynamic variables** | `{{data_sources}}`, `{{last_updated}}`, `{{methodology_excerpt}}`, `{{limitations}}` |
| **Reusability** | Pricing, Research, Tool, Comparison, AI/GEO Hub, any page with data claims |
| **Automation** | Auto-generate from data source registry; timestamp from last data update; methodology from `/trust/our-methodology` link |

---

## 1. AUTHORITY HUB PAGES

**Examples:** `/`, `/about`, `/resources`, `/solutions`, `/industries`, `/locations`, `/case-studies`, `/blog`

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | Authority Hub |
| **URL pattern** | `/{hub-slug}` or `/{hub-slug}/{sub-slug}` |
| **CMS template ID** | `template_authority_hub` |
| **Indexing** | index |
| **Canonical** | Self; no alternate |
| **Sitemap** | Core bucket; priority 0.9–1.0; changeFreq weekly/daily |

### B) SEO Structure
- **H1:** Single H1; `{{hub_name}}` or `{{hub_name}}: {{value_prop}}`. Primary keyword in H1.
- **H2:** Sections: Hero, Definition/Overview, Authority, Trust, Resources/Services, CTA. 4–8 H2s.
- **H3:** Sub-sections under each H2; support entity/cluster links. No H4 without H3.

**Keyword framework:** Primary = hub topic; secondary = use cases, outcomes; LSI = related hubs, entities.  
**Entity embedding:** Link to `/entity/webvello`, `/entity/{service}`, `/entity/industry/{industry}`, `/entity/city/{city}` as relevant.  
**Topic clustering:** Hub = cluster root; link to cluster pages (`/resources/what-is-*`, how-to, etc.).

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-DEFINITION or BLOCK-EDUCATION | ✓ |
| 3 | BLOCK-AUTHORITY | ✓ |
| 4 | BLOCK-TRUST | Optional |
| 5 | BLOCK-CTA | ✓ |
| 6 | ItemList (links to children: services, cities, industries, case studies) | ✓ |
| 7 | BLOCK-FAQ | Optional |

### D) AI/GEO/AEO Formatting
- Provide BLOCK-DEFINITION for hub concept; keep &lt; 160 chars extractable.
- Use BLOCK-AI-DISCOVERY: short bullet lists, 3–5 step sequences where applicable.
- Add BLOCK-FAQ (5–10 Q&A) for FAQ schema and voice.
- Use `Speakable` on definition + key lists.

### E) Entity Graph Signaling
- **Entities:** Organization (WebVello), WebPage, BreadcrumbList.
- **Relationships:** `hasPart` → child hubs/pages; `about` → main topic.
- **Linking:** Every hub links to &gt;= 3 entity pages and &gt;= 5 downstream (services/clusters).

### F) Conversion Architecture
- **Funnel:** MOFU (main hubs) or TOFU (e.g. `/resources`, `/blog`).
- **Intent:** Informational → commercial; qualify via content + CTAs.
- **CTA logic:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.
- **Lead capture:** Optional embedded form on BOFU-leaning hubs (e.g. solutions).
- **Trust:** BLOCK-TRUST above CTA.

### G) Internal Linking
- **Upstream:** Homepage; parent hub if nested.
- **Downstream:** Services, industries, cities, case studies, cluster pages (configurable per hub).
- **Lateral:** Other authority hubs.
- **Authority:** Link to `/trust/our-methodology`, `/entity/*`.
- **Conversion:** Link to `/contact`, `/pricing`, `/solutions/*`.
- **Automation:** Hub config → link sets; max 15–20 outbound contextual links per page.

### H) Schema
- **WebPage**, **Organization**, **BreadcrumbList**. Optional: **ItemList** for child links, **FAQPage** if FAQ block present.

### I) UX/UI
- **Layout:** Hero → 2–3 column grid or stacked sections; sticky CTA on scroll.
- **Hierarchy:** Clear H1 → H2 → H3; visual weight on hero + CTA.
- **Trust:** Logos, metrics, testimonials in BLOCK-TRUST.
- **Nav:** Global nav + breadcrumbs; hub-specific subnav where applicable.
- **Performance:** LCP &lt; 2.5s; CLS &lt; 0.1. **A11y:** WCAG 2.1 AA; focus order, ARIA where needed.

### K) Governance & Quality
- **Required:** BLOCK-HERO, BLOCK-DEFINITION or BLOCK-EDUCATION, BLOCK-AUTHORITY, BLOCK-CTA, BreadcrumbList.
- **Min content:** 1,500 words or equivalent structured blocks.
- **Validation:** H1 unique; canonical self; no duplicate meta description across hub siblings.

---

## 2. AI / GEO / AEO HUB PAGES

**Examples:** `/generative-engine-optimization`, `/ai-search-optimization`, `/ai-content-discovery`, `/answer-engine-optimization`, `/ai-seo`, platform-specific variants

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | AI/GEO/AEO Hub |
| **URL pattern** | `/{geo-service-slug}` e.g. `/generative-engine-optimization`, `/ai-search-optimization` |
| **CMS template ID** | `template_ai_geo_hub` |
| **Indexing** | index |
| **Canonical** | Self |
| **Sitemap** | Core; priority 0.9 |

### B) SEO Structure
- **H1:** `{{Concept}}` or `{{Concept}} for {{Audience}}`. Primary = GEO/AEO/service keyword.
- **H2:** Definition, How It Works, Platforms (SGE, ChatGPT, Perplexity, etc.), Methodology, Proof, Use Cases, FAQ, CTA.
- **H3:** Per-platform or per-method; entity refs.

**Keyword framework:** Primary = GEO/AEO/service; secondary = platform names, “AI visibility,” “answer engine.”  
**Entity embedding:** Link `/entity/geo`, `/entity/platform/*`, `/entity/method/*`.  
**Topic clustering:** Link to `/resources/geo-guides`, `/resources/what-is-geo`, comparison pages.

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-DEFINITION | ✓ |
| 3 | BLOCK-PROCESS / BLOCK-METHODOLOGY | ✓ |
| 4 | BLOCK-AI-DISCOVERY | ✓ |
| 5 | BLOCK-USE-CASE | ✓ |
| 6 | BLOCK-PROOF | Optional |
| 7 | BLOCK-TRUST | Optional |
| 8 | BLOCK-GOVERNANCE-DISCLAIMER | ✓ (AI platform claims) |
| 9 | BLOCK-FAQ | ✓ |
| 10 | BLOCK-CTA | ✓ |

### D) AI/GEO/AEO Formatting
- **Definition:** Single, clear, &lt; 160 chars; BLOCK-DEFINITION.
- **Lists:** Bullet “key platforms,” “key tactics”; numbered “steps to optimize for X.”
- **Structured:** HowTo for “How to optimize for [platform]”; FAQ schema.
- **Entity refs:** Explicit links to `/entity/platform/*`, `/entity/method/*`.
- **Speakable:** Definition + key lists.

### E) Entity Graph Signaling
- **Entities:** Service, DefinedTerm (concept), Person/Organization; platform entities.
- **Relationships:** `sameAs` / `relatedTo` platform entities; `uses` methodology.
- **Linking:** &gt;= 3 entity pages (platform, method); &gt;= 2 comparison/cluster pages.

### F) Conversion Architecture
- **Funnel:** MOFU → BOFU.
- **Intent:** Commercial; “Get GEO/AEO strategy” → `/contact` or audit.
- **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.
- **Trust:** Methodology + proof blocks; link to `/trust/our-methodology`, `/trust/ai-ethics`.
- **Governance:** **BLOCK-GOVERNANCE-DISCLAIMER** required (AI platform claims, methodology).

### G) Internal Linking
- **Upstream:** `/services`, `/resources/geo-guides`, home.
- **Downstream:** `/entity/platform/*`, `/entity/method/*`, `/tools/geo-audit`, `/tools/aeo-audit`, `/compare/*`.
- **Lateral:** Other GEO/AEO hubs.
- **Automation:** Platform taxonomy → entity links; tool mapping by service.

### H) Schema
- **WebPage**, **Service**, **Organization**, **BreadcrumbList**, **FAQPage**, **HowTo** (if process). Optional **Speakable**.

### I) UX/UI
- Same as Authority Hub; emphasise methodology + proof. Optional “Platform tabs” (SGE, ChatGPT, etc.) if multi-platform.

### K) Governance & Quality
- **Required:** BLOCK-DEFINITION, BLOCK-PROCESS or METHODOLOGY, BLOCK-FAQ, BLOCK-CTA.
- **Compliance:** Align with `/trust/ai-ethics`, `/trust/data-ethics`; no inflated AI claims.
- **Min content:** 2,000 words.

---

## 3. CLUSTER PAGES (High-Intent Topic Hubs)

**Examples:** `/resources/what-is-seo`, `/resources/what-is-geo`, `/resources/how-to-optimize-for-ai-search`, `/resources/seo-for-healthcare`, `/compare/seo-vs-geo`

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | Cluster |
| **URL pattern** | `/resources/{cluster-type}/{slug}`, `/compare/{slug}` |
| **CMS template ID** | `template_cluster` |
| **Indexing** | index |
| **Canonical** | Self |
| **Sitemap** | Resources/Compare bucket; priority 0.7–0.8 |

### B) SEO Structure
- **H1:** `What Is {{Term}}?` | `How to {{Action}}` | `{{Term A}} vs {{Term B}}`. One primary keyword.
- **H2:** Definition / Overview, Key Concepts, Steps or Dimensions, Use Cases, Related, FAQ, CTA. 4–7 H2s.
- **H3:** Sub-points; support extraction.

**Keyword framework:** Primary = exact phrase; secondary = related terms, “guide,” “explained.”  
**Entity embedding:** Link `/entity/*`, `/glossary/*` for terms.  
**Topic clustering:** Parent = `/resources` or `/compare`; siblings = same cluster type.

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-DEFINITION | ✓ |
| 3 | BLOCK-EDUCATION or BLOCK-COMPARISON | ✓ |
| 4 | BLOCK-AI-DISCOVERY | ✓ |
| 5 | BLOCK-USE-CASE | Optional |
| 6 | BLOCK-FAQ | ✓ |
| 7 | BLOCK-CTA | ✓ |

### D) AI/GEO/AEO Formatting
- **Definition:** BLOCK-DEFINITION; &lt; 160 chars.
- **Lists:** Key points, steps, or comparison dimensions.
- **FAQ:** 5–10 Q&A; FAQ schema.
- **Speakable:** Definition + 1–2 lists.

### E) Entity Graph Signaling
- **Entities:** DefinedTerm, Thing, related Service/Industry.
- **Relationships:** `definition`; `relatedTo` other terms/services.
- **Linking:** &gt;= 2 glossary, &gt;= 2 entity, &gt;= 3 service/cluster.

### F) Conversion Architecture
- **Funnel:** TOFU/MOFU.
- **Intent:** Informational → commercial.
- **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.
- **Qualification:** Use-case block drives relevant service links.

### G) Internal Linking
- **Upstream:** `/resources`, `/compare`, parent hub.
- **Downstream:** Services, glossary, entity, related clusters.
- **Automation:** Cluster taxonomy → related clusters; term extraction → glossary.

### H) Schema
- **Article** or **WebPage**, **BreadcrumbList**, **FAQPage**, **DefinedTerm** (or **Speakable**). **HowTo** if steps.

### I) UX/UI
- Article-like layout; table of contents for long pages. Clear CTA at end.

### K) Governance & Quality
- **Required:** BLOCK-DEFINITION, BLOCK-EDUCATION or COMPARISON, BLOCK-FAQ, BLOCK-CTA.
- **Min content:** 2,000 words.
- **Uniqueness:** No cross-cluster duplicate definitions; canonical single URL per topic.

---

## 4. SERVICE PAGES

**Examples:** `/services/website-design`, `/services/seo`, `/services/ai-seo`, `/services/geo-services`

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | Service |
| **URL pattern** | `/services/{service-slug}` |
| **CMS template ID** | `template_service` |
| **Indexing** | index |
| **Canonical** | Self |
| **Sitemap** | Services bucket; priority 0.8 |

### B) SEO Structure
- **H1:** `{{Service Name}}` or `{{Service Name}} Services`. Primary = service keyword.
- **H2:** What Is X, What We Deliver, Process, Industries We Serve, Proof, FAQ, Get Started. 5–8 H2s.
- **H3:** Sub-services, industries, steps.

**Keyword framework:** Primary = service; secondary = “company,” “agency,” “near me,” use cases.  
**Entity embedding:** `/entity/{service}`; link industry/city entities.  
**Topic clustering:** Parent = `/services`; cluster = how-to, what-is, comparisons.

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-DEFINITION | ✓ |
| 3 | BLOCK-PROCESS | ✓ |
| 4 | BLOCK-INDUSTRY-RELEVANCE | Optional |
| 5 | BLOCK-PROOF | ✓ |
| 6 | BLOCK-USE-CASE | ✓ |
| 7 | BLOCK-TRUST | ✓ |
| 8 | BLOCK-FAQ | ✓ |
| 9 | BLOCK-CTA | ✓ |
| 10 | BLOCK-CONVERSION | Optional (form) |

### D) AI/GEO/AEO Formatting
- **Definition:** BLOCK-DEFINITION.
- **Process:** HowTo; numbered steps.
- **FAQ:** 8–12 Q&A.
- **Speakable:** Definition + steps summary.

### E) Entity Graph Signaling
- **Entities:** Service, Organization, BreadcrumbList.
- **Relationships:** `provider` WebVello; `serves` Industry/Place.
- **Linking:** &gt;= 1 `/entity/{service}`; &gt;= 3 industry/city pages; &gt;= 2 case studies.

### F) Conversion Architecture
- **Funnel:** BOFU.
- **Intent:** Commercial/transactional.
- **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.
- **Lead capture:** Optional form; offer = service-specific.
- **Trust:** Proof + testimonials above CTA.

### G) Internal Linking
- **Upstream:** `/services`, parent service hub.
- **Downstream:** City×service, industry, case studies, tools, cluster pages.
- **Automation:** Service slug → city/industry link sets; case study tag filter.

### H) Schema
- **Service**, **Organization**, **BreadcrumbList**, **FAQPage**, **HowTo**. Optional **Offer** if pricing snippet.

### I) UX/UI
- Hero → Process → Proof → FAQ → CTA. Trust block visible before form.

### K) Governance & Quality
- **Required:** BLOCK-DEFINITION, BLOCK-PROCESS, BLOCK-PROOF, BLOCK-FAQ, BLOCK-CTA.
- **Min content:** 2,000 words.
- **Proof:** At least 1 proof block (metrics or case refs).

---

## 5. INDUSTRY PAGES

**Examples:** `/industries/healthcare`, `/industries/technology`

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | Industry |
| **URL pattern** | `/industries/{industry-slug}` |
| **CMS template ID** | `template_industry` |
| **Indexing** | index |
| **Canonical** | Self |
| **Sitemap** | Industries bucket; priority 0.8 |

### B) SEO Structure
- **H1:** `{{Industry}} Digital Marketing` or `{{Industry}} SEO & Growth`. Primary = industry + “SEO”/“marketing.”
- **H2:** Overview, Challenges, Solutions, Services, Case Studies, Cities, FAQ, CTA.
- **H3:** Per challenge/solution; per service.

**Keyword framework:** Primary = industry + service; secondary = “companies,” “agencies.”  
**Entity embedding:** `/entity/industry/{industry}`; link services, cities.  
**Topic clustering:** Link `/resources/seo-for-{industry}`, `/resources/geo-for-{industry}`.

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-DEFINITION or BLOCK-EDUCATION | ✓ |
| 3 | BLOCK-INDUSTRY-RELEVANCE | ✓ |
| 4 | BLOCK-USE-CASE | ✓ |
| 5 | BLOCK-PROOF (industry-specific) | ✓ |
| 6 | ItemList (services, case studies, cities) | ✓ |
| 7 | BLOCK-FAQ | Optional |
| 8 | BLOCK-CTA | ✓ |

### D) AI/GEO/AEO Formatting
- **Definition:** Industry + “digital growth” / “SEO” focus.
- **Lists:** Challenges, solutions, services.
- **FAQ:** Industry-specific 5–8 Q&A.

### E) Entity Graph Signaling
- **Entities:** Organization, Place (where relevant), Service; industry entity.
- **Relationships:** `serves` industry; `hasOfferCatalog` services.
- **Linking:** `/entity/industry/{industry}`; &gt;= 3 services; &gt;= 3 cities; case studies by industry.

### F) Conversion Architecture
- **Funnel:** MOFU.
- **Intent:** Commercial.
- **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.

### G) Internal Linking
- **Upstream:** `/industries`, `/resources/*`.
- **Downstream:** Services, cities, case studies, cluster pages.
- **Automation:** Industry slug → services/cities/case studies filter.

### H) Schema
- **WebPage**, **Organization**, **BreadcrumbList**, **ItemList**. Optional **FAQPage**.

### I) UX/UI
- Hero → Industry relevance → Use cases → Proof → Links grid → CTA.

### K) Governance & Quality
- **Required:** BLOCK-INDUSTRY-RELEVANCE, BLOCK-USE-CASE, BLOCK-PROOF, BLOCK-CTA.
- **Min content:** 2,000 words.
- **Industry slug:** Must exist in `industrySlugs`.

---

## 6. CITY PAGES

**Examples:** `/new-york-ny`, `/los-angeles-ca`, `/chicago-il`

### A) Identity
| Field | Value |
|-------|--------|
| **Page type** | City |
| **URL pattern** | `/{city-slug}` |
| **CMS template ID** | `template_city` |
| **Indexing** | index |
| **Canonical** | Self |
| **Sitemap** | Locations-tier1; priority 0.8 |

### B) SEO Structure
- **H1:** `{{City}}, {{State}} Web Design & SEO` or `Digital Growth in {{City}}`. Primary = city + service.
- **H2:** Overview, Local Expertise, Services, Industries, Case Studies, Nearby Cities, FAQ, CTA.
- **H3:** Per service, industry.

**Keyword framework:** Primary = city + “web design” / “SEO”; secondary = “companies,” “agency.”  
**Entity embedding:** `/entity/city/{city}`; link state, services, industries.  
**Topic clustering:** Link `/resources/local-seo-*`, location guides.

### C) Content Blocks
| Slot | Block | Required |
|------|--------|----------|
| 1 | BLOCK-HERO | ✓ |
| 2 | BLOCK-LOCAL-RELEVANCE | ✓ |
| 3 | BLOCK-AUTHORITY | ✓ |
| 4 | ItemList (services, industries, case studies) | ✓ |
| 5 | BLOCK-PROOF | Optional |
| 6 | BLOCK-FAQ | Optional |
| 7 | BLOCK-CTA | ✓ |

### D) AI/GEO/AEO Formatting
- **Definition:** “WebVello serves {{City}}, {{State}} with…” &lt; 160 chars.
- **Lists:** Services, industries, key landmarks/areas if relevant.
- **NAP:** Consistent in BLOCK-LOCAL-RELEVANCE + schema.

### E) Entity Graph Signaling
- **Entities:** Place (city), Organization; Parent administrative area (state).
- **Relationships:** `areaServed` city; `hasOfferCatalog` services.
- **Linking:** `/entity/city/{city}`; state page; &gt;= 8 city×service; industries.

### F) Conversion Architecture
- **Funnel:** MOFU.
- **Intent:** Commercial; local.
- **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position.

### G) Internal Linking
- **Upstream:** `/locations`, state page.
- **Downstream:** City×service (Tier 1), city×industry hub, case studies by city.
- **Automation:** `citySlugs` → links; Tier 1 services from config.

### H) Schema
- **WebPage**, **Place**, **LocalBusiness** or **Organization**, **BreadcrumbList**, **ItemList**.

### I) UX/UI
- Hero with city; local relevance prominent; service grid.

### K) Governance & Quality
- **Required:** BLOCK-LOCAL-RELEVANCE, ItemList (services), BLOCK-CTA.
- **Min content:** 1,500 words.
- **City slug:** Must exist in `citySlugs` / `cityDataSlugs`.

---

## 7. PROGRAMMATIC PAGES

### 7a. City × Service

**URL pattern:** `/{city-slug}/{service-slug}`. **Template ID:** `template_city_service`. **Indexing:** index (Tier 1 only). **Sitemap:** locations-tier1; priority 0.7.

**H1:** `{{Service Name}} in {{City}}, {{State}}`. **H2:** Overview, What We Deliver, Local Data, Local Proof, Process, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION (localized), BLOCK-LOCAL-RELEVANCE, **BLOCK-LOCAL-DATA-CARD** (required uniqueness slot), **BLOCK-PROOF-SLOT** (required uniqueness slot), BLOCK-PROCESS, BLOCK-FAQ, BLOCK-CTA.

**Entity:** Place + Service; `areaServed` city. **Linking:** Upstream city + service; downstream case studies by city/service.

**Programmatic:** Inputs `city`, `service`. Data: `cityDataSlugs` × `TIER1_SERVICES`.

**Uniqueness Injection Points (Required):**
- **BLOCK-LOCAL-DATA-CARD:** Must include SERP data, market data, or review data for city+service combination.
- **BLOCK-PROOF-SLOT:** Must include case study ref OR aggregate metrics OR team proof with attribution.

**Index gating:** Tier 1 service only (from `TIER1_SERVICES`). If required uniqueness slots missing → auto noindex.

---

### 7b. City × Industry Hub

**URL pattern:** `/{city-slug}/industry/{industry-slug}`. **Template ID:** `template_city_industry_hub`. **Indexing:** noindex. **Sitemap:** exclude.

**Canonical Logic:** See **APPENDIX E: City×Industry Hub Canonicalization Rules** for complete specification.

**Summary:**
- **If unique navigational function:** Page provides unique navigation/filtering not available on City or Industry pages → canonical self.
- **If redundant:** Page content is duplicated on City page industry list or Industry page city list → canonical to strongest parent:
  - If City page has comprehensive industry list → canonical to `/{city-slug}`
  - If Industry page has comprehensive city list → canonical to `/industries/{industry-slug}`
  - If both have comprehensive lists → canonical to City page (more specific geo context)
- **If single service page exists:** Only one City×Industry×Service page → canonical to service page.
- **If no downstream pages:** No City×Industry×Service pages → canonical self (preserve for future).
- **Default:** noindex,follow; canonical self (for link equity).

**H1:** `{{Industry}} in {{City}}, {{State}}`. **H2:** Overview, Services, Case Studies, CTA.

**Blocks:** BLOCK-HERO, BLOCK-LOCAL-RELEVANCE, BLOCK-INDUSTRY-RELEVANCE, ItemList (city×industry×service links), BLOCK-CTA.

**Purpose:** Bridge/navigation; link equity only. **Linking:** Upstream city, industry; downstream city×industry×service.

**Programmatic:** Inputs `city`, `industry`. Noindex always. Minimal copy; focus on link list.

---

### 7c. City × Industry × Service

**URL pattern:** `/{city-slug}/industry/{industry-slug}/{service-slug}`. **Template ID:** `template_city_industry_service`. **Indexing:** conditional (Programmatic Quality Gates). **Sitemap:** include only if indexable. **Canonical:** self.

**H1:** `{{Service}} for {{Industry}} in {{City}}, {{State}}`. **H2:** Overview, Local Data, Industry KPIs, Local + Industry Relevance, Proof, Process, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION, BLOCK-LOCAL-RELEVANCE, **BLOCK-LOCAL-DATA-CARD** (required uniqueness slot), **BLOCK-INDUSTRY-KPI-MAP** (required uniqueness slot), BLOCK-INDUSTRY-RELEVANCE, **BLOCK-PROOF-SLOT** (required uniqueness slot), BLOCK-PROCESS, BLOCK-FAQ, BLOCK-CTA.

**Entity:** Place + Service + Industry. **Linking:** Upstream city, industry, service, city×industry hub; downstream case studies.

**Programmatic:** Inputs `city`, `industry`, `service`.

**Uniqueness Injection Points (Required):**
- **BLOCK-LOCAL-DATA-CARD:** Must include SERP/market/competitor/review data for city+service.
- **BLOCK-INDUSTRY-KPI-MAP:** Must include industry KPIs, constraints, or compliance data for industry+service.
- **BLOCK-PROOF-SLOT:** Must include case study ref OR aggregate metrics OR team proof with attribution.

**Programmatic Quality Gates (Index Gating):**
- **2-of-3 Rule:** Page must pass at least 2 of 3 quality dimensions:
  1. **Local Data:** BLOCK-LOCAL-DATA-CARD has valid data (SERP, market, or review data present).
  2. **Industry Logic:** BLOCK-INDUSTRY-KPI-MAP has valid data (KPIs, constraints, or compliance present).
  3. **Proof:** BLOCK-PROOF-SLOT has valid proof (case study ref OR aggregate metrics OR team proof with attribution).

- **Scoring Threshold:** Each dimension scores 1 point if valid. Minimum 2 points required for indexability.

- **Hard-Fail Triggers (Auto noindex):**
  - Missing any required uniqueness slot (BLOCK-LOCAL-DATA-CARD, BLOCK-INDUSTRY-KPI-MAP, BLOCK-PROOF-SLOT).
  - Invalid city/industry/service combination (not in valid taxonomies).
  - Duplicate content detected (identical to another city×industry×service page).

- **Hard-Pass Triggers (Auto index):**
  - Has CMS content flag (`hasCmsContent === true`).
  - All 3 uniqueness slots present with valid data.

- **Word Count:** May be used as fallback quality signal only (e.g., for scoring tie-breaker), never as primary gate.

**Schema:** Service, Place, BreadcrumbList, FAQPage.

---

## 8. CASE STUDY PAGES

**URL pattern:** `/case-studies/{slug}`. **Template ID:** `template_case_study`. **Indexing:** index. **Sitemap:** core; priority 0.7.

**H1:** `{{Client Name}}: {{Outcome}}`. **H2:** Overview, Challenge, Solution, Results, Services Used, CTA.

**Blocks:** BLOCK-HERO, BLOCK-PROOF (metrics), BLOCK-PROCESS (solution), BLOCK-TRUST (testimonial), BLOCK-USE-CASE, BLOCK-CTA.

**Entity:** Organization (client), Service, Place. **Relationships:** `clientOf` WebVello; `uses` services; `locatedIn` city.

**Conversion:** MOFU; “See how we can help” → `/contact`; “Similar case studies” → `/case-studies/by-industry|by-service|by-result`.

**Linking:** Upstream `/case-studies`, by-industry, by-service, by-city, by-result; downstream services, industries, cities.

**Schema:** **Article** (or **Report**), **Organization**, **BreadcrumbList**. Optional **Review**, **ItemList** (services).

**Governance:** Required proof block with ≥ 2 metrics; client name + outcome; no fake metrics.

---

## 9. PROOF ENGINE PAGES

**Examples:** `/case-studies/by-industry/{industry}`, `/case-studies/by-service/{service}`, `/case-studies/by-result/{metric}`, `/proof/results`

**URL pattern:** `/case-studies/by-{dimension}/{value}` or `/proof/{slug}`. **Template ID:** `template_proof_engine`. **Indexing:** index. **Sitemap:** include.

**H1:** `Case Studies: {{Dimension}} {{Value}}` or `{{Proof Page Title}}`. **H2:** Overview, Filters, ItemList (case studies or proof items), CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION or BLOCK-EDUCATION, BLOCK-PROOF (aggregate or list), ItemList (cards with links), BLOCK-CTA.

**Entity:** ItemList; link to case studies, services, industries. **Linking:** Upstream `/case-studies`, `/proof`; downstream case studies, services.

**Schema:** **CollectionPage**, **ItemList**, **BreadcrumbList**. **Governance:** Only link to real case studies; dimension/value must exist in taxonomy.

---

## 10. TRUST & GOVERNANCE PAGES

**Examples:** `/trust/our-process`, `/trust/our-methodology`, `/trust/our-standards`, `/trust/compliance`, `/trust/data-ethics`, `/trust/ai-ethics`, `/trust/security-architecture`, `/trust/reviews`, `/trust/testimonials`

**URL pattern:** `/trust/{slug}`. **Template ID:** `template_trust`. **Indexing:** index. **Sitemap:** core; priority 0.7.

**H1:** `{{Trust Page Title}}`. **H2:** Overview, Principles/Steps, Evidence, Related, CTA. Governance pages: Process, Methodology, Standards, Compliance, Ethics, Security.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION or BLOCK-EDUCATION, BLOCK-PROCESS or BLOCK-METHODOLOGY, BLOCK-AUTHORITY, BLOCK-TRUST (for reviews/testimonials), BLOCK-CTA.

**Entity:** Organization; link `/entity/webvello`, `/entity/method/*`. **Linking:** Upstream homepage, `/about`; downstream services, entity, tools.

**Schema:** **WebPage**, **Organization**, **BreadcrumbList**. HowTo for process. **Governance:** Align with actual practices; review legal/compliance for compliance, data-ethics, ai-ethics.

---

## 11. ENTITY GRAPH PAGES

**Examples:** `/entity/webvello`, `/entity/seo`, `/entity/industry/healthcare`, `/entity/city/new-york-ny`, `/entity/person/{name}`, `/entity/technology/nextjs`, `/entity/method/geo-optimization`, `/entity/framework/topical-authority`, `/entity/platform/google-sge`

**URL pattern:** `/entity/{type}/{slug}` or `/entity/{slug}` for webvello. **Template ID:** `template_entity`. **Indexing:** index. **Sitemap:** include; priority 0.6.

**H1:** `{{Entity Name}}`. **H2:** Definition/Overview, Relationship Table, SameAs References, Connected Entities, Used In Pages, Links.

**Blocks:** BLOCK-DEFINITION (required), BLOCK-AUTHORITY, BLOCK-AI-DISCOVERY (entity refs, triples), **Relationship Table** (required, ≥10 triples when available), **SameAs References** (required if applicable), **Used In Pages ItemList** (required), **Connected Entities ItemList** (required), ItemList (related entities, linking pages).

**Entity Types:** Organization, Service, Industry, City/Place, Person, Technology, Method, Framework, Platform, DefinedTerm, Product, SoftwareApplication.

---

### 11.1 Relationship Table (Required Section)

**Purpose:** Explicit semantic triples (subject → predicate → object) for AI and knowledge graph learning.

**Minimum Requirement:** At least 10 triples per entity page when available. If fewer than 10 triples available, include all available triples.

**Format:** HTML table with columns:
- **Subject:** Entity name (linked to entity page)
- **Predicate:** Relationship type (from allowed predicates list)
- **Object:** Related entity or value (linked if entity, plain text if value)

**Allowed Predicates (Relationship Types):**

| Predicate | Description | Example | Applies To Entity Types |
|-----------|-------------|---------|------------------------|
| `uses` | Entity uses/employs another entity | `Next.js` → `uses` → `React` | Technology, Method, Framework, Platform |
| `provides` | Entity provides service/product | `WebVello` → `provides` → `SEO Services` | Organization, Service |
| `serves` | Entity serves industry/market | `SEO Services` → `serves` → `Healthcare Industry` | Service, Organization |
| `relatedTo` | General relationship | `SEO` → `relatedTo` → `Content Marketing` | All types |
| `implementedBy` | Entity is implemented by another | `Topical Authority` → `implementedBy` → `WebVello` | Framework, Method |
| `measuredBy` | Entity is measured by metric/tool | `SEO Performance` → `measuredBy` → `Google Analytics` | Service, Method |
| `appearsIn` | Entity appears in page/content | `Next.js` → `appearsIn` → `/blog/nextjs-seo` | Technology, Person, Method |
| `comparedWith` | Entity compared with another | `Next.js` → `comparedWith` → `Gatsby` | Technology, Framework, Platform |
| `locatedIn` | Entity located in place | `Healthcare Industry` → `locatedIn` → `New York, NY` | Industry, Organization |
| `developedBy` | Entity developed by organization/person | `Next.js` → `developedBy` → `Vercel` | Technology, Framework, Platform |
| `optimizedFor` | Entity optimized for platform | `GEO Optimization` → `optimizedFor` → `Google SGE` | Method, Framework |
| `partOf` | Entity is part of larger entity | `SEO` → `partOf` → `Digital Marketing` | Service, Method |
| `requires` | Entity requires another entity | `GEO Optimization` → `requires` → `Entity Graph` | Method, Framework |
| `enables` | Entity enables capability | `Entity Graph` → `enables` → `AI Discovery` | Framework, Method |
| `basedOn` | Entity based on another | `Topical Authority` → `basedOn` → `E-A-T Framework` | Framework, Method |
| `createdBy` | Entity created by person/organization | `GEO Optimization Method` → `createdBy` → `Founder Name` | Method, Framework |
| `appliesTo` | Entity applies to industry/service | `GEO Optimization` → `appliesTo` → `Healthcare SEO` | Method, Framework |
| `measuredBy` | Entity measured by KPI/metric | `SEO Success` → `measuredBy` → `Organic Traffic` | Service, Method |
| `citedIn` | Entity cited in research/content | `Topical Authority` → `citedIn` → `/research/topical-authority-study` | Framework, Method |

**Data Sources:**
- Entity registry (`entity_registry.json`)
- Relationship graph API
- Page content analysis (entity mentions)
- Manual curation

**Automation:**
```javascript
function generateRelationshipTable(entityId, entityRegistry) {
  const relationships = entityRegistry.entities[entityId].relationships || [];
  const triples = relationships
    .filter(rel => isValidPredicate(rel.predicate))
    .slice(0, Math.max(10, relationships.length)); // At least 10, or all if fewer
  
  return triples.map(triple => ({
    subject: entityRegistry.entities[entityId].name,
    predicate: triple.predicate,
    object: triple.object,
    objectEntityId: triple.objectEntityId,
    objectUrl: triple.objectEntityId ? `/entity/${getEntityType(triple.objectEntityId)}/${getEntitySlug(triple.objectEntityId)}` : null
  }));
}
```

**Rendering Rules:**
- Subject always links to current entity page (self-reference)
- Object links to entity page if `objectEntityId` exists, otherwise plain text
- Predicate displayed as human-readable label (e.g., "Uses" instead of "uses")
- Table sorted by predicate type, then by object name
- If >20 triples, paginate or show "Top 20" with "View all" link

---

### 11.2 SameAs References (Required if Applicable)

**Purpose:** Link to authoritative external references for entity disambiguation and knowledge graph linking.

**When to Include:**
- Entity has Wikipedia page
- Entity has Wikidata entry
- Entity has authoritative industry database entry
- Entity has official documentation/specification page
- Entity has verified external reference

**When to Omit:**
- No authoritative external reference exists
- Only low-quality/unverified sources available
- Entity is internal/proprietary (e.g., WebVello-specific method)

**Validation Rules:**
- **Safe Domains (Whitelist):**
  - `wikipedia.org` (Wikipedia)
  - `wikidata.org` (Wikidata)
  - `github.com` (for technologies, frameworks)
  - `npmjs.com` (for JavaScript packages)
  - `pypi.org` (for Python packages)
  - `schema.org` (for schema definitions)
  - `w3.org` (for web standards)
  - Industry-specific authoritative domains (e.g., `mdn.org` for web tech, `react.dev` for React)
- **Validation Checks:**
  - URL must be HTTPS
  - URL must return 200 status code
  - URL must contain entity name or identifier
  - Source must be verified authoritative (manual review for new sources)

**Format:**
- List of external references with:
  - **Source name** (e.g., "Wikipedia", "Wikidata", "GitHub")
  - **URL** (linked)
  - **Type** (wikipedia | wikidata | documentation | specification | industry_db | other)
  - **Verified** (boolean, manual verification flag)

**Data Sources:**
- External entity registry lookup
- Wikipedia API (for organizations, places, people)
- Wikidata API (for structured data)
- Manual curation

**Automation:**
```javascript
function getSameAsReferences(entityId, entityType, entityRegistry) {
  const sameAs = entityRegistry.entities[entityId].sameAs || [];
  
  return sameAs
    .filter(ref => isValidSameAsReference(ref))
    .map(ref => ({
      url: ref.url,
      source: ref.source,
      type: ref.type,
      verified: ref.verified || false
    }));
}

function isValidSameAsReference(ref) {
  // Check domain whitelist
  const domain = new URL(ref.url).hostname;
  const safeDomains = ['wikipedia.org', 'wikidata.org', 'github.com', 'npmjs.com', 'pypi.org', 'schema.org', 'w3.org'];
  
  if (!safeDomains.includes(domain) && !ref.verified) {
    return false; // Require manual verification for non-whitelist domains
  }
  
  // Check HTTPS
  if (!ref.url.startsWith('https://')) {
    return false;
  }
  
  return true;
}
```

**Rendering Rules:**
- Display as bulleted list or table
- Link to external reference
- Show source badge/icon
- Show "Verified" badge if `verified === true`
- Group by source type (Wikipedia, Wikidata, Documentation, etc.)

---

### 11.3 Used In Pages ItemList (Required)

**Purpose:** List pages where entity is referenced, demonstrating entity usage and context.

**Selection Rules:**
1. **Top Pages Priority:**
   - Pages where entity is primary subject (H1/H2 mentions)
   - Pages with entity in URL slug
   - Pages with entity in schema markup
   - Pages with high authority/trust signals
2. **Pagination:**
   - Display top 20 pages initially
   - If >20 pages, show pagination (20 per page)
   - Sort by relevance score (entity mention frequency, page authority, recency)
3. **Filtering:**
   - Exclude noindex pages
   - Exclude duplicate content pages
   - Include only indexable pages

**Format:**
- ItemList with items:
  - **Page title** (linked)
  - **Page URL**
  - **Page type** (service | industry | city | blog | case-study | tool | etc.)
  - **Context** (how entity is used: "Primary subject", "Mentioned in", "Related to")
  - **Relevance score** (for sorting, not displayed)

**Data Sources:**
- Page index (full-text search)
- Entity tagging system
- Schema markup analysis
- Content analysis (entity mention extraction)

**Automation:**
```javascript
function getUsedInPages(entityId, entityName, pageIndex, options = {}) {
  const { limit = 20, offset = 0, sortBy = 'relevance' } = options;
  
  // Search page index for entity mentions
  const pages = pageIndex.search({
    query: entityName,
    entityId: entityId,
    filters: {
      indexable: true,
      noindex: false
    }
  });
  
  // Score pages by relevance
  const scoredPages = pages.map(page => ({
    ...page,
    relevanceScore: calculateRelevanceScore(page, entityId, entityName)
  }));
  
  // Sort by relevance
  scoredPages.sort((a, b) => b.relevanceScore - a.relevanceScore);
  
  // Paginate
  return scoredPages.slice(offset, offset + limit);
}

function calculateRelevanceScore(page, entityId, entityName) {
  let score = 0;
  
  // Primary subject (H1/H2 mention)
  if (page.h1.includes(entityName) || page.h2.includes(entityName)) {
    score += 10;
  }
  
  // Entity in URL
  if (page.url.includes(entityName.toLowerCase().replace(/\s+/g, '-'))) {
    score += 8;
  }
  
  // Entity in schema
  if (page.schema?.about?.identifier === entityId) {
    score += 7;
  }
  
  // Mention frequency
  const mentionCount = (page.content.match(new RegExp(entityName, 'gi')) || []).length;
  score += Math.min(mentionCount, 5); // Cap at 5
  
  // Page authority (if available)
  if (page.authorityScore) {
    score += page.authorityScore * 0.1;
  }
  
  return score;
}
```

**Rendering Rules:**
- Display as ItemList (ordered or unordered)
- Show page title, type, and context
- Link to page URL
- Show pagination if >20 pages
- Group by page type (optional)

---

### 11.4 Connected Entities ItemList (Required)

**Purpose:** Graph adjacency list showing entities directly connected in knowledge graph, with relationship strength weighting.

**Relationship Strength Scoring:**
- **Direct relationship:** Entity directly linked in relationship table → score: 1.0
- **Co-occurrence:** Entities appear together on same pages → score: 0.5-0.9 (based on frequency)
- **Semantic similarity:** Entities share similar attributes/context → score: 0.3-0.7
- **Hierarchical relationship:** Parent-child or part-of relationship → score: 0.8-1.0

**Weighting Formula:**
```
relationshipStrength = (
  directRelationshipWeight * 1.0 +
  coOccurrenceWeight * coOccurrenceScore +
  semanticSimilarityWeight * similarityScore +
  hierarchicalWeight * hierarchicalScore
) / totalWeight
```

**Format:**
- ItemList with items:
  - **Entity name** (linked to entity page)
  - **Entity type** (technology | method | framework | etc.)
  - **Relationship type** (primary relationship predicate)
  - **Relationship strength** (0.0-1.0, for sorting, optionally displayed)
  - **Entity URL**

**Data Sources:**
- Entity registry (relationship graph)
- Page co-occurrence analysis
- Semantic similarity analysis

**Automation:**
```javascript
function getConnectedEntities(entityId, entityRegistry, pageIndex, options = {}) {
  const { limit = 20, minStrength = 0.3 } = options;
  
  const entity = entityRegistry.entities[entityId];
  const directConnections = entity.relationships || [];
  
  // Get direct relationships
  const connected = directConnections.map(rel => ({
    entityId: rel.objectEntityId,
    relationshipType: rel.predicate,
    strength: 1.0, // Direct relationship
    source: 'direct'
  }));
  
  // Get co-occurrence relationships
  const coOccurrences = findCoOccurringEntities(entityId, entity.name, pageIndex);
  coOccurrences.forEach(co => {
    const existing = connected.find(c => c.entityId === co.entityId);
    if (existing) {
      existing.strength = Math.max(existing.strength, co.strength);
    } else {
      connected.push({
        entityId: co.entityId,
        relationshipType: 'relatedTo',
        strength: co.strength,
        source: 'cooccurrence'
      });
    }
  });
  
  // Filter by minimum strength
  const filtered = connected.filter(c => c.strength >= minStrength);
  
  // Sort by strength
  filtered.sort((a, b) => b.strength - a.strength);
  
  // Enrich with entity metadata
  return filtered.slice(0, limit).map(conn => ({
    ...conn,
    entityName: entityRegistry.entities[conn.entityId]?.name,
    entityType: entityRegistry.entities[conn.entityId]?.type,
    entityUrl: `/entity/${entityRegistry.entities[conn.entityId]?.type}/${entityRegistry.entities[conn.entityId]?.slug}`
  }));
}

function findCoOccurringEntities(entityId, entityName, pageIndex) {
  // Find pages where entity appears
  const entityPages = pageIndex.search({ entityId });
  
  // Find other entities on same pages
  const coOccurrences = {};
  entityPages.forEach(page => {
    page.entities.forEach(otherEntityId => {
      if (otherEntityId !== entityId) {
        if (!coOccurrences[otherEntityId]) {
          coOccurrences[otherEntityId] = 0;
        }
        coOccurrences[otherEntityId]++;
      }
    });
  });
  
  // Calculate strength (normalized by total pages)
  const totalPages = entityPages.length;
  return Object.entries(coOccurrences).map(([entityId, count]) => ({
    entityId,
    strength: Math.min(count / totalPages, 0.9) // Cap at 0.9 for co-occurrence
  }));
}
```

**Rendering Rules:**
- Display as ItemList
- Sort by relationship strength (strongest first)
- Show top 20 connected entities
- Link to entity pages
- Optionally show strength indicator (visual bar or badge)
- Group by relationship type (optional)

---

### 11.5 Entity Registry JSON Structure

**Purpose:** Central registry storing entity metadata, relationships, and graph structure.

**Schema:**
```json
{
  "version": "1.0",
  "lastUpdated": "2026-01-25T00:00:00Z",
  "entities": {
    "entity_id": {
      "id": "entity_id",
      "name": "Entity Name",
      "slug": "entity-slug",
      "type": "technology|method|framework|platform|person|organization|service|industry|city|place",
      "description": "Entity description",
      "url": "/entity/{type}/{slug}",
      "sameAs": [
        {
          "url": "https://external-reference.com/entity",
          "source": "Wikipedia|Wikidata|GitHub|Documentation",
          "type": "wikipedia|wikidata|documentation|specification|industry_db|other",
          "verified": true
        }
      ],
      "relationships": [
        {
          "predicate": "uses|provides|serves|relatedTo|...",
          "object": "Related Entity Name",
          "objectEntityId": "related_entity_id",
          "strength": 1.0
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "system|manual",
        "tags": ["tag1", "tag2"]
      }
    }
  }
}
```

**Example Registry Entries:**

```json
{
  "entities": {
    "nextjs": {
      "id": "nextjs",
      "name": "Next.js",
      "slug": "nextjs",
      "type": "technology",
      "description": "React framework for production with hybrid static & server rendering",
      "url": "/entity/technology/nextjs",
      "sameAs": [
        {
          "url": "https://nextjs.org",
          "source": "Next.js",
          "type": "documentation",
          "verified": true
        },
        {
          "url": "https://github.com/vercel/next.js",
          "source": "GitHub",
          "type": "documentation",
          "verified": true
        },
        {
          "url": "https://en.wikipedia.org/wiki/Next.js",
          "source": "Wikipedia",
          "type": "wikipedia",
          "verified": true
        }
      ],
      "relationships": [
        {
          "predicate": "uses",
          "object": "React",
          "objectEntityId": "react",
          "strength": 1.0
        },
        {
          "predicate": "developedBy",
          "object": "Vercel",
          "objectEntityId": "vercel",
          "strength": 1.0
        },
        {
          "predicate": "comparedWith",
          "object": "Gatsby",
          "objectEntityId": "gatsby",
          "strength": 0.8
        },
        {
          "predicate": "appearsIn",
          "object": "/blog/nextjs-seo-optimization",
          "objectEntityId": null,
          "strength": 0.7
        },
        {
          "predicate": "relatedTo",
          "object": "Server-Side Rendering",
          "objectEntityId": "ssr",
          "strength": 0.9
        },
        {
          "predicate": "relatedTo",
          "object": "Static Site Generation",
          "objectEntityId": "ssg",
          "strength": 0.9
        },
        {
          "predicate": "optimizedFor",
          "object": "SEO",
          "objectEntityId": "seo",
          "strength": 0.8
        },
        {
          "predicate": "partOf",
          "object": "React Ecosystem",
          "objectEntityId": "react-ecosystem",
          "strength": 0.7
        },
        {
          "predicate": "measuredBy",
          "object": "Core Web Vitals",
          "objectEntityId": "core-web-vitals",
          "strength": 0.6
        },
        {
          "predicate": "appliesTo",
          "object": "Web Development",
          "objectEntityId": "web-development",
          "strength": 0.8
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "system",
        "tags": ["react", "framework", "ssr", "ssg"]
      }
    },
    "google-sge": {
      "id": "google-sge",
      "name": "Google SGE",
      "slug": "google-sge",
      "type": "platform",
      "description": "Google Search Generative Experience (SGE) - AI-powered search results",
      "url": "/entity/platform/google-sge",
      "sameAs": [
        {
          "url": "https://www.google.com/search/labs",
          "source": "Google",
          "type": "documentation",
          "verified": true
        }
      ],
      "relationships": [
        {
          "predicate": "relatedTo",
          "object": "Generative Engine Optimization",
          "objectEntityId": "geo",
          "strength": 1.0
        },
        {
          "predicate": "relatedTo",
          "object": "AI Search Optimization",
          "objectEntityId": "ai-search-optimization",
          "strength": 0.9
        },
        {
          "predicate": "developedBy",
          "object": "Google",
          "objectEntityId": "google",
          "strength": 1.0
        },
        {
          "predicate": "comparedWith",
          "object": "ChatGPT",
          "objectEntityId": "chatgpt",
          "strength": 0.7
        },
        {
          "predicate": "comparedWith",
          "object": "Perplexity",
          "objectEntityId": "perplexity",
          "strength": 0.7
        },
        {
          "predicate": "optimizedFor",
          "object": "GEO Optimization",
          "objectEntityId": "geo-optimization",
          "strength": 0.9
        },
        {
          "predicate": "uses",
          "object": "Large Language Models",
          "objectEntityId": "llm",
          "strength": 0.8
        },
        {
          "predicate": "measuredBy",
          "object": "AI Answer Inclusion Rate",
          "objectEntityId": "ai-answer-inclusion-rate",
          "strength": 0.8
        },
        {
          "predicate": "appearsIn",
          "object": "/generative-engine-optimization",
          "objectEntityId": null,
          "strength": 0.9
        },
        {
          "predicate": "appearsIn",
          "object": "/ai-search-optimization",
          "objectEntityId": null,
          "strength": 0.9
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "system",
        "tags": ["google", "ai", "search", "sge", "geo"]
      }
    },
    "topical-authority": {
      "id": "topical-authority",
      "name": "Topical Authority",
      "slug": "topical-authority",
      "type": "framework",
      "description": "SEO framework for building expertise and authority around specific topics",
      "url": "/entity/framework/topical-authority",
      "sameAs": [],
      "relationships": [
        {
          "predicate": "basedOn",
          "object": "E-A-T Framework",
          "objectEntityId": "eat-framework",
          "strength": 0.9
        },
        {
          "predicate": "relatedTo",
          "object": "Content Clustering",
          "objectEntityId": "content-clustering",
          "strength": 0.8
        },
        {
          "predicate": "relatedTo",
          "object": "Entity Graph",
          "objectEntityId": "entity-graph",
          "strength": 0.9
        },
        {
          "predicate": "implementedBy",
          "object": "WebVello",
          "objectEntityId": "webvello",
          "strength": 1.0
        },
        {
          "predicate": "requires",
          "object": "Entity Graph",
          "objectEntityId": "entity-graph",
          "strength": 0.8
        },
        {
          "predicate": "enables",
          "object": "AI Discovery",
          "objectEntityId": "ai-discovery",
          "strength": 0.9
        },
        {
          "predicate": "appliesTo",
          "object": "SEO",
          "objectEntityId": "seo",
          "strength": 1.0
        },
        {
          "predicate": "measuredBy",
          "object": "Topical Authority Score",
          "objectEntityId": "topical-authority-score",
          "strength": 0.8
        },
        {
          "predicate": "citedIn",
          "object": "/research/topical-authority-study",
          "objectEntityId": null,
          "strength": 0.7
        },
        {
          "predicate": "relatedTo",
          "object": "Programmatic SEO",
          "objectEntityId": "programmatic-seo",
          "strength": 0.8
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "manual",
        "tags": ["seo", "framework", "authority", "e-a-t"]
      }
    },
    "geo-optimization": {
      "id": "geo-optimization",
      "name": "GEO Optimization",
      "slug": "geo-optimization",
      "type": "method",
      "description": "Generative Engine Optimization - method for optimizing content for AI search engines",
      "url": "/entity/method/geo-optimization",
      "sameAs": [],
      "relationships": [
        {
          "predicate": "optimizedFor",
          "object": "Google SGE",
          "objectEntityId": "google-sge",
          "strength": 1.0
        },
        {
          "predicate": "optimizedFor",
          "object": "ChatGPT",
          "objectEntityId": "chatgpt",
          "strength": 0.9
        },
        {
          "predicate": "optimizedFor",
          "object": "Perplexity",
          "objectEntityId": "perplexity",
          "strength": 0.9
        },
        {
          "predicate": "requires",
          "object": "Entity Graph",
          "objectEntityId": "entity-graph",
          "strength": 0.9
        },
        {
          "predicate": "relatedTo",
          "object": "AI Search Optimization",
          "objectEntityId": "ai-search-optimization",
          "strength": 0.9
        },
        {
          "predicate": "implementedBy",
          "object": "WebVello",
          "objectEntityId": "webvello",
          "strength": 1.0
        },
        {
          "predicate": "createdBy",
          "object": "Founder Name",
          "objectEntityId": "founder-name",
          "strength": 0.8
        },
        {
          "predicate": "appliesTo",
          "object": "Content Marketing",
          "objectEntityId": "content-marketing",
          "strength": 0.8
        },
        {
          "predicate": "measuredBy",
          "object": "AI Citation Frequency",
          "objectEntityId": "ai-citation-frequency",
          "strength": 0.8
        },
        {
          "predicate": "citedIn",
          "object": "/generative-engine-optimization",
          "objectEntityId": null,
          "strength": 0.9
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "manual",
        "tags": ["geo", "ai", "optimization", "method"]
      }
    },
    "founder-name": {
      "id": "founder-name",
      "name": "Founder Name",
      "slug": "founder-name",
      "type": "person",
      "description": "Founder and CEO of WebVello",
      "url": "/entity/person/founder-name",
      "sameAs": [
        {
          "url": "https://www.linkedin.com/in/founder-name",
          "source": "LinkedIn",
          "type": "other",
          "verified": true
        }
      ],
      "relationships": [
        {
          "predicate": "createdBy",
          "object": "WebVello",
          "objectEntityId": "webvello",
          "strength": 1.0
        },
        {
          "predicate": "createdBy",
          "object": "GEO Optimization Method",
          "objectEntityId": "geo-optimization",
          "strength": 0.8
        },
        {
          "predicate": "relatedTo",
          "object": "SEO",
          "objectEntityId": "seo",
          "strength": 0.9
        },
        {
          "predicate": "appearsIn",
          "object": "/about",
          "objectEntityId": null,
          "strength": 0.8
        },
        {
          "predicate": "appearsIn",
          "object": "/trust/our-methodology",
          "objectEntityId": null,
          "strength": 0.7
        },
        {
          "predicate": "relatedTo",
          "object": "Digital Marketing",
          "objectEntityId": "digital-marketing",
          "strength": 0.8
        },
        {
          "predicate": "citedIn",
          "object": "/blog/founder-interview",
          "objectEntityId": null,
          "strength": 0.7
        },
        {
          "predicate": "relatedTo",
          "object": "Entity Graph",
          "objectEntityId": "entity-graph",
          "strength": 0.7
        },
        {
          "predicate": "appearsIn",
          "object": "/case-studies",
          "objectEntityId": null,
          "strength": 0.6
        },
        {
          "predicate": "relatedTo",
          "object": "AI Search",
          "objectEntityId": "ai-search",
          "strength": 0.7
        }
      ],
      "metadata": {
        "created": "2026-01-01T00:00:00Z",
        "updated": "2026-01-25T00:00:00Z",
        "author": "manual",
        "tags": ["founder", "ceo", "webvello"]
      }
    }
  }
}
```

---

### 11.6 Rendering Logic Rules

**Page Generation Flow:**
1. Load entity from registry by `entityId` or `slug`
2. Generate Relationship Table (≥10 triples)
3. Generate SameAs References (if applicable)
4. Generate Used In Pages ItemList (top 20, paginated)
5. Generate Connected Entities ItemList (top 20, sorted by strength)
6. Render page with all sections

**Error Handling:**
- If entity not found in registry → 404
- If <10 triples available → show all available triples
- If no SameAs references → omit section (not required)
- If no Used In Pages → show empty state message
- If no Connected Entities → show empty state message

**Performance:**
- Cache entity registry (24h TTL)
- Cache relationship calculations (12h TTL)
- Cache Used In Pages results (6h TTL)
- Lazy load paginated sections

---

### 11.7 Schema Markup Guidance

**Thing Subtypes by Entity Type:**

| Entity Type | Schema.org Type | Additional Properties |
|-------------|----------------|----------------------|
| Organization | `Organization` | `sameAs`, `knowsAbout`, `hasOfferCatalog` |
| Service | `Service` | `provider`, `areaServed`, `serviceType` |
| Industry | `Thing` (or custom) | `about`, `relatedTo` |
| City/Place | `Place` | `sameAs` (Wikipedia/GeoNames), `containedIn` |
| Person | `Person` | `sameAs` (LinkedIn/Wikipedia), `knowsAbout`, `alumniOf` |
| Technology | `SoftwareApplication` or `Thing` | `sameAs` (GitHub/npm), `applicationCategory`, `operatingSystem` |
| Method | `Thing` (or `CreativeWork`) | `about`, `teaches`, `learningResourceType` |
| Framework | `Thing` (or `CreativeWork`) | `about`, `teaches`, `isBasedOn` |
| Platform | `SoftwareApplication` or `Thing` | `sameAs`, `applicationCategory` |

**Required Schema Properties:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization|Person|Place|SoftwareApplication|Thing",
  "name": "Entity Name",
  "description": "Entity description",
  "url": "https://webvello.com/entity/{type}/{slug}",
  "sameAs": [
    "https://external-reference.com/entity"
  ],
  "about": {
    "@type": "Thing",
    "name": "Related Topic"
  },
  "mentions": [
    {
      "@type": "Thing",
      "name": "Related Entity"
    }
  ]
}
```

**Relationship Schema (Optional, Advanced):**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Entity Relationships",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Thing",
        "name": "Related Entity",
        "additionalProperty": {
          "@type": "PropertyValue",
          "name": "relationshipType",
          "value": "uses|provides|serves|..."
        }
      }
    }
  ]
}
```

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://webvello.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Entities",
      "item": "https://webvello.com/entities"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Entity Name",
      "item": "https://webvello.com/entity/{type}/{slug}"
    }
  ]
}
```

---

**Relationships:** Semantic triples; link to related entity pages.

**Linking:** Bidirectional; link from and to services, industries, cities, cluster pages. **Automation:** Entity registry → relationship graph; auto links.

**Schema:** **Thing** subclass per type; **BreadcrumbList**; **sameAs** property for external references; **about** and **mentions** for relationships. **Governance:** Entity must exist in registry; no orphan entities; relationship table must have ≥ 10 triples when available (or all available if <10).

---

## 12. GLOSSARY PAGES

**URL pattern:** `/glossary/{term-slug}`. **Template ID:** `template_glossary`. **Indexing:** index. **Sitemap:** include; priority 0.6.

**H1:** `What Is {{Term}}?` **H2:** Definition, Key Points, Related Terms, Use in Practice, FAQ, Links.

**Blocks:** BLOCK-DEFINITION (required), BLOCK-EDUCATION, BLOCK-AI-DISCOVERY, ItemList (related terms), BLOCK-CTA (optional).

**Entity:** DefinedTerm. **Linking:** Glossary hub; related terms; cluster/service pages that use term.

**Schema:** **DefinedTerm**, **BreadcrumbList**, **FAQPage** if FAQ. **Governance:** Single definition per term; canonical glossary URL.

---

## 13. TOOL PAGES (v1.1 - API-Ready)

**Examples:** `/tools/seo-audit`, `/tools/geo-audit`, `/tools/roi-calculator`, `/tools/ai-citation-tracker`

**URL pattern:** `/tools/{tool-slug}`. **Template ID:** `template_tool`. **Indexing:** index. **Sitemap:** include; priority 0.7.

**H1:** `{{Tool Name}}`. **H2:** What It Does, How It Works, How to Use, Methodology, Data Sources, Output Contract, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION, BLOCK-PROCESS (how to use), **BLOCK-METHODOLOGY** (required), **BLOCK-DATA-SOURCES** (required), BLOCK-DATA (if applicable), BLOCK-EDUCATION, **BLOCK-OUTPUT-CONTRACT** (required for API-ready tools), **BLOCK-GOVERNANCE-DISCLAIMER** (required if tool outputs data), BLOCK-FAQ, BLOCK-CTA, BLOCK-CONVERSION (lead capture).

**Entity:** SoftwareApplication. **Linking:** Related services, cluster pages, `/trust/our-methodology`, entity pages.

---

### 13.1 Output Contract (Required for API-Ready Tools)

**Purpose:** Define complete API contract for tool output, enabling programmatic access and integration.

#### 13.1.1 JSON Response Structure

**Standard Root Structure:**
```json
{
  "tool_id": "string",
  "version": "string",
  "timestamp": "ISO8601",
  "request_id": "string",
  "data": {
    // Tool-specific data structure
  },
  "metadata": {
    "processing_time_ms": "number",
    "data_sources": ["array of strings"],
    "methodology_ref": "string (URL)",
    "cache_hit": "boolean",
    "cache_ttl_remaining": "number (seconds)"
  },
  "errors": ["array of error objects (if any)"],
  "warnings": ["array of warning objects (if any)"]
}
```

**Field Specifications:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tool_id` | string | Yes | Tool identifier (e.g., "seo-audit", "geo-audit") |
| `version` | string | Yes | API version (e.g., "1.0", "2.1") |
| `timestamp` | ISO8601 | Yes | Response generation timestamp |
| `request_id` | string | Yes | Unique request identifier for tracking |
| `data` | object | Yes | Tool-specific output data |
| `metadata` | object | Yes | Response metadata |
| `errors` | array | No | Array of error objects (if validation/processing errors) |
| `warnings` | array | No | Array of warning objects (if non-fatal issues) |

**Tool-Specific Data Structures:** See Section 13.4 for example contracts.

---

#### 13.1.2 Export Formats

**Available Formats:**

| Format | Availability | Use Case | Structure |
|--------|--------------|----------|-----------|
| **JSON** | Always | API responses, programmatic access | Full structured output |
| **CSV** | If tabular data | Spreadsheet analysis, bulk processing | Flattened table format |
| **PDF** | If report format | Human-readable reports, sharing | Formatted document |

**Format Selection:**
- **Default:** JSON (always available)
- **CSV:** Available if tool outputs tabular data (e.g., audit results, comparison tables)
- **PDF:** Available if tool generates reports (e.g., SEO audit report, ROI analysis)

**Export Endpoints:**
- JSON: `GET /api/tools/{tool_id}/run?format=json`
- CSV: `GET /api/tools/{tool_id}/run?format=csv`
- PDF: `GET /api/tools/{tool_id}/run?format=pdf`

**CSV Format Rules:**
- First row: Column headers
- Subsequent rows: Data values
- Nested objects: Flattened with dot notation (e.g., `metrics.organic_traffic`)
- Arrays: Serialized as comma-separated values or separate rows

**PDF Format Rules:**
- Includes tool name, timestamp, methodology reference
- Formatted for print/readability
- Includes data source citations
- Page numbers, table of contents (if multi-page)

---

#### 13.1.3 Validation Rules

**Input Validation:**

| Validation Type | Rules | Error Code |
|----------------|-------|------------|
| **Required Fields** | All required fields must be present | `MISSING_REQUIRED_FIELD` |
| **Type Checks** | Field types must match specification | `INVALID_TYPE` |
| **Range Checks** | Numeric values must be within valid range | `VALUE_OUT_OF_RANGE` |
| **Format Checks** | Strings must match format (URL, email, etc.) | `INVALID_FORMAT` |
| **Length Checks** | Strings/arrays must be within length limits | `INVALID_LENGTH` |

**Output Validation:**

| Validation Type | Rules |
|----------------|-------|
| **Schema Validation** | Output must match JSON schema |
| **Data Integrity** | Calculated values must be mathematically correct |
| **Completeness** | All expected fields must be present |
| **Type Consistency** | Field types must match specification |

**Validation Response Format:**
```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Validation failed",
    "details": {
      "field": "url",
      "issue": "Invalid URL format",
      "value": "not-a-url"
    }
  }
}
```

---

#### 13.1.4 Error Handling Rules

**Error Response Structure:**
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {
      // Error-specific details
    },
    "request_id": "string",
    "timestamp": "ISO8601"
  }
}
```

**Standard Error Codes:**

| Error Code | HTTP Status | Description | Retryable |
|------------|-------------|-------------|-----------|
| `INVALID_INPUT` | 400 | Input validation failed | No |
| `MISSING_REQUIRED_FIELD` | 400 | Required field missing | No |
| `INVALID_TYPE` | 400 | Field type mismatch | No |
| `VALUE_OUT_OF_RANGE` | 400 | Value outside valid range | No |
| `INVALID_FORMAT` | 400 | Format validation failed | No |
| `PROCESSING_ERROR` | 500 | Internal processing error | Yes |
| `DATA_UNAVAILABLE` | 503 | Required data source unavailable | Yes |
| `RATE_LIMIT_EXCEEDED` | 429 | Rate limit exceeded | Yes (with backoff) |
| `SERVICE_UNAVAILABLE` | 503 | Tool temporarily unavailable | Yes |
| `TIMEOUT` | 504 | Request timeout | Yes |
| `UNAUTHORIZED` | 401 | Authentication required | No |
| `FORBIDDEN` | 403 | Access denied | No |

**Error Message Guidelines:**
- **Clear:** Explain what went wrong
- **Actionable:** Suggest how to fix (if applicable)
- **Non-sensitive:** Don't expose internal details
- **Consistent:** Use standard error message format

**Example Error Responses:**
```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "URL validation failed",
    "details": {
      "field": "url",
      "issue": "URL must be a valid HTTP/HTTPS URL",
      "value": "not-a-url",
      "suggestion": "Please provide a valid URL starting with http:// or https://"
    },
    "request_id": "req_123456",
    "timestamp": "2026-01-25T10:30:00Z"
  }
}
```

---

#### 13.1.5 Caching Strategy

**Cache Rules by Tool Type:**

| Tool Type | Cache Duration | Cache Key | Invalidation |
|-----------|---------------|-----------|--------------|
| **SEO Audit** | 24 hours | Input URL + tool version | On URL content change |
| **GEO Audit** | 12 hours | Input URL + tool version | On URL content change |
| **ROI Calculator** | No cache | Input parameters hash | Always fresh |
| **AI Citation Tracker** | 6 hours | Input URL + date range | On new citations |

**Cache Key Structure:**
```
cache_key = hash(tool_id + input_parameters + tool_version)
```

**Cache Headers:**
- `Cache-Control: public, max-age={seconds}`
- `ETag: {cache_key_hash}`
- `Last-Modified: {timestamp}`

**Cache Hit Response:**
```json
{
  "data": { /* cached data */ },
  "metadata": {
    "cache_hit": true,
    "cache_ttl_remaining": 3600,
    "cache_key": "abc123..."
  }
}
```

**Cache Invalidation:**
- **Time-based:** Automatic expiration after TTL
- **Event-based:** Invalidate on data source updates
- **Manual:** Admin-triggered invalidation

---

#### 13.1.6 Rate Limiting Rules

**Rate Limit Tiers:**

| Tier | Limit | Window | Headers |
|------|-------|--------|---------|
| **Anonymous** | 10 requests | Per hour | `X-RateLimit-Limit: 10` |
| **Registered** | 100 requests | Per hour | `X-RateLimit-Limit: 100` |
| **API Key** | 1,000 requests | Per hour | `X-RateLimit-Limit: 1000` |

**Rate Limit Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1706184000
```

**Rate Limit Exceeded Response:**
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Please try again later.",
    "details": {
      "limit": 100,
      "remaining": 0,
      "reset_at": "2026-01-25T11:00:00Z"
    }
  }
}
```

**Rate Limiting Implementation:**
- **Per IP:** For anonymous users
- **Per User ID:** For registered users
- **Per API Key:** For API key authentication
- **Sliding window:** Count requests in rolling time window

---

#### 13.1.7 Privacy & Security Constraints

**Data Privacy:**
- **Input Data:** Never logged or stored (unless explicitly required for tool function)
- **Output Data:** Stored only if user opts in (e.g., "Save report")
- **PII Handling:** No PII collected unless necessary; encrypted if stored
- **GDPR Compliance:** User data deletion on request

**Security:**
- **HTTPS Only:** All API endpoints require HTTPS
- **Input Sanitization:** All inputs sanitized to prevent injection attacks
- **Output Sanitization:** All outputs sanitized to prevent XSS
- **Authentication:** API keys required for programmatic access
- **Rate Limiting:** Prevents abuse and DoS attacks

**Security Headers:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
```

**Data Retention:**
- **Input Data:** Deleted immediately after processing (unless user opts in)
- **Output Data:** Retained for 30 days (if user opts in), then deleted
- **Logs:** Retained for 90 days, then anonymized

---

### 13.2 Methodology + Data Sources (Required)

**BLOCK-METHODOLOGY (Required):**

**Purpose:** Explain how the tool works, what it measures, and how it calculates results.

**Requirements:**
- **Minimum length:** 300 words
- **Must include:**
  - Tool purpose and scope
  - Measurement methodology
  - Calculation formulas (if applicable)
  - Data collection process
  - Limitations and assumptions
  - Link to full methodology page (`/trust/our-methodology`)

**Example Structure:**
```html
<h3>Methodology</h3>
<p>
  The {{Tool Name}} analyzes [what it analyzes] using [methodology]. 
  [Detailed explanation of how it works, what it measures, how calculations are performed.]
</p>
<p>
  <strong>Key Metrics:</strong>
  <ul>
    <li>[Metric 1]: [How it's calculated]</li>
    <li>[Metric 2]: [How it's calculated]</li>
  </ul>
</p>
<p>
  <strong>Limitations:</strong>
  [Tool limitations, assumptions, edge cases]
</p>
<p>
  <a href="/trust/our-methodology">View full methodology documentation</a>
</p>
```

**BLOCK-DATA-SOURCES (Required):**

**Purpose:** List all data sources used by the tool.

**Requirements:**
- **Must include:**
  - All external data sources (APIs, databases, etc.)
  - All internal data sources (analytics, databases, etc.)
  - Data source access dates
  - Data source reliability/authority notes

**Example:**
```html
<h3>Data Sources</h3>
<ul>
  <li>
    <strong>Google Search Console API</strong> - 
    <a href="https://developers.google.com/webmaster-tools" target="_blank" rel="noopener">developers.google.com/webmaster-tools</a>
    (External API, accessed 2026-01-25)
  </li>
  <li>
    <strong>Internal Analytics Database</strong> - 
    Proprietary data (Internal database, accessed 2026-01-25)
  </li>
</ul>
```

**Last Updated Rule:**
- **Required field:** `last_updated` (ISO 8601 date)
- **Update triggers:**
  - Methodology changes → Update timestamp
  - Data source changes → Update timestamp
  - Tool version updates → Update timestamp
  - Quarterly review → Update timestamp (even if no changes)
- **Display:** "Last updated: [Date]" in methodology section

---

### 13.3 UX + Accessibility Requirements

#### 13.3.1 Form Requirements

**Input Fields:**
- **Labels:** All inputs must have associated `<label>` elements
- **Placeholders:** Helpful placeholder text (not a replacement for labels)
- **Help Text:** Contextual help text for complex inputs
- **Required Indicators:** Visual indicator (*) for required fields
- **Error States:** Clear error messages below invalid fields

**Form Validation:**
- **Client-side:** Immediate feedback on input
- **Server-side:** Validation on submit
- **Error Messages:** Clear, actionable error messages
- **Success States:** Confirmation on successful submission

**Example Form Structure:**
```html
<form>
  <div class="form-group">
    <label for="url">
      Website URL <span class="required">*</span>
    </label>
    <input 
      type="url" 
      id="url" 
      name="url" 
      placeholder="https://example.com"
      required
      aria-describedby="url-help url-error"
    />
    <small id="url-help" class="help-text">
      Enter the full URL of the website you want to audit
    </small>
    <div id="url-error" class="error-message" role="alert" aria-live="polite">
      <!-- Error message appears here -->
    </div>
  </div>
</form>
```

#### 13.3.2 Input Validation Messaging

**Validation Rules:**
- **Real-time:** Validate on blur (when user leaves field)
- **On Submit:** Validate all fields before submission
- **Error Display:** Show errors inline, below field
- **Error Icons:** Visual indicator (icon) for errors
- **Success Icons:** Visual indicator for valid fields (optional)

**Error Message Format:**
- **Clear:** Explain what's wrong
- **Actionable:** Suggest how to fix
- **Concise:** Keep messages short
- **Accessible:** Use `aria-describedby` and `role="alert"`

**Example Error Messages:**
```html
<!-- Invalid URL -->
<div class="error-message" role="alert" aria-live="polite">
  <span class="error-icon" aria-hidden="true">⚠</span>
  Please enter a valid URL starting with http:// or https://
</div>

<!-- Required field missing -->
<div class="error-message" role="alert" aria-live="polite">
  <span class="error-icon" aria-hidden="true">⚠</span>
  This field is required
</div>

<!-- Value out of range -->
<div class="error-message" role="alert" aria-live="polite">
  <span class="error-icon" aria-hidden="true">⚠</span>
  Please enter a value between 1 and 100
</div>
```

#### 13.3.3 Keyboard Navigation

**Requirements:**
- **Tab Order:** Logical tab order through form fields
- **Focus Indicators:** Visible focus outline on all interactive elements
- **Skip Links:** Skip to main content link for screen readers
- **Keyboard Shortcuts:** Standard shortcuts (Enter to submit, Esc to cancel)
- **Focus Management:** Focus moves to error message on validation failure

**Focus Management Example:**
```javascript
// On form submission error
function handleFormError(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  // Set error message
  errorElement.textContent = errorMessage;
  errorElement.setAttribute('aria-live', 'polite');
  
  // Move focus to error message
  errorElement.focus();
  
  // Scroll to error
  errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
```

#### 13.3.4 Loading & Error States

**Loading States:**
- **Loading Indicator:** Spinner or progress bar during processing
- **Loading Message:** "Analyzing your website..." or similar
- **Disabled State:** Disable form during processing
- **Accessibility:** `aria-busy="true"` on loading container

**Loading State Example:**
```html
<div class="loading-state" aria-busy="true" aria-live="polite">
  <div class="spinner" aria-hidden="true"></div>
  <p>Analyzing your website... This may take a few moments.</p>
</div>
```

**Error States:**
- **Error Display:** Clear error message at top of form or inline
- **Error Recovery:** Allow user to retry or fix errors
- **Error Persistence:** Errors persist until user fixes or dismisses
- **Accessibility:** `role="alert"` and `aria-live="polite"` for errors

**Error State Example:**
```html
<div class="error-state" role="alert" aria-live="polite">
  <h3>Error Processing Request</h3>
  <p>We encountered an error while processing your request. Please try again.</p>
  <button onclick="retryRequest()">Try Again</button>
</div>
```

**Success States:**
- **Success Message:** Confirmation when tool completes successfully
- **Results Display:** Clear presentation of results
- **Export Options:** Prominent export/download buttons
- **Next Steps:** Clear call-to-action for next steps

---

### 13.4 Example Output Contracts

#### 13.4.1 SEO Audit Tool

**Tool ID:** `seo-audit`

**Input:**
```json
{
  "url": "https://example.com",
  "options": {
    "include_technical": true,
    "include_content": true,
    "include_links": true
  }
}
```

**Output Structure:**
```json
{
  "tool_id": "seo-audit",
  "version": "1.0",
  "timestamp": "2026-01-25T10:30:00Z",
  "request_id": "req_seo_123456",
  "data": {
    "url": "https://example.com",
    "overall_score": 75,
    "scores": {
      "technical": 80,
      "content": 70,
      "links": 75,
      "mobile": 85,
      "speed": 70
    },
    "issues": [
      {
        "type": "critical",
        "category": "technical",
        "title": "Missing Meta Description",
        "description": "The page is missing a meta description tag.",
        "impact": "high",
        "fix": "Add a meta description tag between 120-160 characters.",
        "location": "head"
      }
    ],
    "recommendations": [
      {
        "priority": "high",
        "title": "Improve Page Speed",
        "description": "Page load time is 3.2s, target is <2s.",
        "action": "Optimize images and enable compression."
      }
    ],
    "metrics": {
      "page_load_time": 3.2,
      "mobile_friendly": true,
      "https_enabled": true,
      "meta_tags_count": 3,
      "heading_structure_valid": true
    }
  },
  "metadata": {
    "processing_time_ms": 4500,
    "data_sources": [
      "Google PageSpeed Insights API",
      "Internal crawler",
      "Google Search Console API"
    ],
    "methodology_ref": "https://webvello.com/trust/our-methodology",
    "cache_hit": false,
    "cache_ttl_remaining": null
  }
}
```

**Export Formats:**
- **JSON:** Full structure (always available)
- **CSV:** Flattened issues and recommendations table
- **PDF:** Formatted audit report with scores, issues, recommendations

**Caching:** 24 hours (cache key: URL + tool version)

**Rate Limiting:** 10/hour (anonymous), 100/hour (registered)

---

#### 13.4.2 GEO Audit Tool

**Tool ID:** `geo-audit`

**Input:**
```json
{
  "url": "https://example.com",
  "ai_platforms": ["google-sge", "chatgpt", "perplexity"],
  "date_range": {
    "start": "2026-01-01",
    "end": "2026-01-25"
  }
}
```

**Output Structure:**
```json
{
  "tool_id": "geo-audit",
  "version": "1.0",
  "timestamp": "2026-01-25T10:30:00Z",
  "request_id": "req_geo_123456",
  "data": {
    "url": "https://example.com",
    "ai_visibility_score": 65,
    "platform_scores": {
      "google-sge": 70,
      "chatgpt": 60,
      "perplexity": 55
    },
    "entity_graph_coverage": {
      "entities_found": 12,
      "entities_linked": 8,
      "coverage_score": 67
    },
    "citations": [
      {
        "platform": "google-sge",
        "query": "best seo practices",
        "cited": true,
        "position": 3,
        "snippet": "According to example.com, best practices include..."
      }
    ],
    "recommendations": [
      {
        "priority": "high",
        "title": "Increase Entity Graph Coverage",
        "description": "Only 8 of 12 entities are properly linked.",
        "action": "Add entity relationships and schema markup."
      }
    ],
    "metrics": {
      "brand_mention_density": 0.15,
      "co_occurrence_score": 0.62,
      "entity_proximity_score": 0.58,
      "ai_citation_frequency": 0.08
    }
  },
  "metadata": {
    "processing_time_ms": 8200,
    "data_sources": [
      "Internal AI platform monitoring",
      "Entity graph database",
      "Citation tracking database"
    ],
    "methodology_ref": "https://webvello.com/trust/our-methodology",
    "cache_hit": false,
    "cache_ttl_remaining": null
  }
}
```

**Export Formats:**
- **JSON:** Full structure (always available)
- **CSV:** Citations table, recommendations table
- **PDF:** Formatted GEO audit report

**Caching:** 12 hours (cache key: URL + platforms + date range + tool version)

**Rate Limiting:** 10/hour (anonymous), 100/hour (registered)

---

#### 13.4.3 ROI Calculator

**Tool ID:** `roi-calculator`

**Input:**
```json
{
  "current_monthly_traffic": 10000,
  "target_monthly_traffic": 25000,
  "average_conversion_rate": 0.02,
  "average_order_value": 100,
  "current_seo_cost": 5000,
  "projected_seo_cost": 8000
}
```

**Output Structure:**
```json
{
  "tool_id": "roi-calculator",
  "version": "1.0",
  "timestamp": "2026-01-25T10:30:00Z",
  "request_id": "req_roi_123456",
  "data": {
    "inputs": {
      "current_monthly_traffic": 10000,
      "target_monthly_traffic": 25000,
      "average_conversion_rate": 0.02,
      "average_order_value": 100,
      "current_seo_cost": 5000,
      "projected_seo_cost": 8000
    },
    "calculations": {
      "traffic_increase": 15000,
      "traffic_increase_percentage": 150,
      "additional_conversions": 300,
      "additional_revenue": 30000,
      "cost_increase": 3000,
      "roi": 900,
      "roi_percentage": 9000,
      "payback_period_months": 1.2
    },
    "projections": {
      "monthly_revenue_increase": 30000,
      "annual_revenue_increase": 360000,
      "annual_roi": 10800,
      "annual_roi_percentage": 108000
    },
    "breakdown": {
      "current_state": {
        "monthly_traffic": 10000,
        "monthly_conversions": 200,
        "monthly_revenue": 20000,
        "monthly_cost": 5000,
        "monthly_profit": 15000
      },
      "projected_state": {
        "monthly_traffic": 25000,
        "monthly_conversions": 500,
        "monthly_revenue": 50000,
        "monthly_cost": 8000,
        "monthly_profit": 42000
      }
    }
  },
  "metadata": {
    "processing_time_ms": 150,
    "data_sources": [
      "User inputs",
      "Industry benchmarks (for validation)"
    ],
    "methodology_ref": "https://webvello.com/trust/our-methodology",
    "cache_hit": false,
    "cache_ttl_remaining": null,
    "disclaimer": "ROI estimates are projections based on provided inputs and industry averages. Actual results may vary."
  },
  "warnings": [
    {
      "type": "assumption",
      "message": "Calculations assume conversion rate remains constant with traffic increase."
    }
  ]
}
```

**Export Formats:**
- **JSON:** Full structure (always available)
- **CSV:** Calculations and projections table
- **PDF:** Formatted ROI analysis report

**Caching:** No cache (calculations are user-specific and should be fresh)

**Rate Limiting:** 20/hour (anonymous), 200/hour (registered)

---

### 13.5 Schema Implications

**SoftwareApplication Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{{Tool Name}}",
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "{{Tool description}}",
  "url": "https://webvello.com/tools/{{tool-slug}}",
  "softwareVersion": "{{version}}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "100"
  },
  "featureList": [
    "{{Feature 1}}",
    "{{Feature 2}}"
  ]
}
```

**Dataset Schema (if tool exposes data):**

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "{{Tool Name}} Results",
  "description": "Dataset generated by {{Tool Name}}",
  "url": "https://webvello.com/tools/{{tool-slug}}",
  "license": "https://webvello.com/terms",
  "creator": {
    "@type": "Organization",
    "name": "WebVello"
  },
  "datePublished": "{{timestamp}}",
  "dateModified": "{{last_updated}}",
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "{{export_url}}"
    }
  ]
}
```

**HowTo Schema (for tool usage instructions):**

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use {{Tool Name}}",
  "description": "Step-by-step instructions for using {{Tool Name}}",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enter URL",
      "text": "Enter the website URL you want to analyze"
    },
    {
      "@type": "HowToStep",
      "name": "Click Analyze",
      "text": "Click the 'Analyze' button to start the audit"
    }
  ]
}
```

---

**Schema:** **SoftwareApplication**, **HowTo**, **FAQPage**, **Organization**, **BreadcrumbList**. Optional **Dataset** if tool exposes data.

**Governance:** Every tool must have methodology (min 300 words), data sources, educational content (2k+ words), clear use cases, and Output Contract if API-ready. **A11y:** Form labels, error handling, keyboard navigation, loading/error states, WCAG 2.1 AA compliance.

---

## 14. RESEARCH PAGES

**URL pattern:** `/research/{slug}` or `/research/industry-reports/{industry}`. **Template ID:** `template_research`. **Indexing:** index (if substantial). **Sitemap:** include when indexed.

**H1:** `{{Research Title}}`. **H2:** Summary, Methodology, Findings, Data, Implications, Sources, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION (summary), BLOCK-DATA, BLOCK-METHODOLOGY, BLOCK-EDUCATION, **BLOCK-GOVERNANCE-DISCLAIMER** (required: datasets, market data), BLOCK-CTA.

**Entity:** Report, Dataset. **Linking:** Research hub, industry pages, cluster pages, tools.

**Schema:** **Report** or **Article**, **Dataset** (if applicable), **BreadcrumbList**. **Governance:** Cite sources; no fabricated data. **BLOCK-GOVERNANCE-DISCLAIMER** must include: data sources, last updated timestamp, methodology excerpt, limitations.

---

## 15. COMPARISON PAGES

**URL pattern:** `/compare/{slug}`. **Template ID:** `template_comparison`. **Indexing:** index. **Sitemap:** include; priority 0.7.

**H1:** `{{Subject A}} vs {{Subject B}}`. **H2:** Overview, Comparison Dimensions, Verdict, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION, BLOCK-COMPARISON, **BLOCK-GOVERNANCE-DISCLAIMER** (required if competitor comparisons), BLOCK-FAQ, BLOCK-CTA.

**Entity:** Link `/entity/*` for subjects. **Schema:** **Article**, **BreadcrumbList**, **FAQPage**. **Governance:** Min 2,000 words; clear dimensions; no duplicate compare pages per pair. **BLOCK-GOVERNANCE-DISCLAIMER** required if page includes competitor comparisons or market data.

---

## 16. PRICING PAGES

**URL pattern:** `/pricing`. **Template ID:** `template_pricing`. **Indexing:** index. **Sitemap:** core; priority 0.9.

**H1:** `Pricing`. **H2:** Overview, Plans/Packages, Add-ons, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION (pricing approach), BLOCK-DATA (plans), **BLOCK-GOVERNANCE-DISCLAIMER** (required: pricing ranges, terms), BLOCK-FAQ, BLOCK-CTA, BLOCK-CONVERSION.

**Entity:** Organization; Offer. **Schema:** **WebPage**, **Offer** (or **Product**), **FAQPage**, **BreadcrumbList**.

**Governance:** Prices must match actual offers; clear terms. **BLOCK-GOVERNANCE-DISCLAIMER** must include: data sources (pricing database), last updated timestamp, methodology excerpt (how pricing is determined), limitations (e.g., "prices may vary by project scope"), no-guarantee disclaimer.

---

## 17. SOLUTIONS PAGES

**URL pattern:** `/solutions/{solution-slug}`. **Template ID:** `template_solution`. **Indexing:** index. **Sitemap:** core; priority 0.8.

**H1:** `{{Solution Name}}`. **H2:** Who It’s For, Problem, Solution, Process, Proof, FAQ, CTA.

**Blocks:** BLOCK-HERO, BLOCK-DEFINITION, BLOCK-USE-CASE, BLOCK-PROCESS, BLOCK-PROOF, BLOCK-TRUST, BLOCK-FAQ, BLOCK-CTA, BLOCK-CONVERSION (optional).

**Funnel:** MOFU → BOFU. **CTA:** See Global CTA Governance System (Section 19). Primary CTA must match funnel position. **Schema:** **WebPage**, **Service**, **BreadcrumbList**, **FAQPage**. **Governance:** Align with solution taxonomy; link to relevant services.

---

## 18. MEDIA / PR PAGES

**URL pattern:** `/media`, `/media/press-releases`, `/media/press-releases/{slug}`, `/media/news`, `/media/mentions`

**Template ID:** `template_media` | `template_press_release`. **Indexing:** index. **Sitemap:** include.

**H1:** `{{Media Hub Title}}` or `{{Press Release Title}}`. **H2:** Overview, ItemList (releases/mentions), CTA.

**Blocks:** BLOCK-HERO, BLOCK-EDUCATION (hub only), ItemList, BLOCK-CTA. For press release: BLOCK-HERO, BLOCK-DEFINITION (summary), date, source, body, BLOCK-CTA.

**Schema:** **CollectionPage** or **NewsArticle**, **BreadcrumbList**, **ItemList**. **Governance:** Real dates and sources; no fabricated coverage.

---

## APPENDIX A: Template → Block Matrix

| Page Type | HERO | DEF | AUTH | TRUST | PROOF | PROCESS | METHOD | DATA | COMP | USE | LOCAL | IND | AI | EDUC | FAQ | CTA | CONV | LOCAL-DATA | IND-KPI | PROOF-SLOT | GOV-DISC |
|-----------|------|-----|------|-------|-------|---------|--------|------|------|-----|-------|-----|-----|------|-----|-----|------|------------|---------|------------|----------|
| Authority Hub | ✓ | ✓ | ✓ | o | - | - | - | - | - | - | - | - | o | ✓ | o | ✓ | - | - | - | - | - |
| AI/GEO Hub | ✓ | ✓ | - | o | o | ✓ | ✓ | - | - | ✓ | - | - | ✓ | - | ✓ | ✓ | - | - | - | - | ✓ |
| Cluster | ✓ | ✓ | - | - | - | - | - | - | o | o | - | - | ✓ | ✓ | ✓ | ✓ | - | - | - | - | - |
| Service | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | - | - | ✓ | - | o | o | - | ✓ | ✓ | o | - | - | - | - |
| Industry | ✓ | o | - | - | ✓ | - | - | - | - | ✓ | - | ✓ | - | ✓ | o | ✓ | - | - | - | - | - |
| City | ✓ | - | ✓ | - | o | - | - | - | - | - | ✓ | - | - | - | o | ✓ | - | - | - | - | - |
| City×Service | ✓ | ✓ | - | - | ✓ | ✓ | - | - | - | - | ✓ | - | o | - | ✓ | ✓ | - | ✓ | - | ✓ | - |
| City×Ind Hub | ✓ | - | - | - | - | - | - | - | - | - | ✓ | ✓ | - | - | - | ✓ | - | - | - | - | - |
| City×Ind×Svc | ✓ | ✓ | - | - | ✓ | ✓ | - | - | - | - | ✓ | ✓ | o | - | ✓ | ✓ | - | ✓ | ✓ | ✓ | - |
| Case Study | ✓ | - | - | ✓ | ✓ | ✓ | - | - | - | ✓ | o | o | - | - | - | ✓ | - | - | - | - | - |
| Proof Engine | ✓ | o | - | - | ✓ | - | - | - | - | - | - | - | - | o | - | ✓ | - | - | - | - | - |
| Trust | ✓ | o | ✓ | ✓ | - | ✓ | ✓ | - | - | - | - | - | - | - | - | ✓ | - | - | - | - | - |
| Entity | - | ✓ | ✓ | - | - | - | - | - | - | - | - | - | ✓ | - | o | o | - | - | - | - | - |
| Glossary | - | ✓ | - | - | - | - | - | - | - | - | - | - | ✓ | ✓ | o | o | - | - | - | - | - |
| Tool | ✓ | ✓ | - | - | - | ✓ | ✓ | o | - | - | - | - | o | ✓ | ✓ | ✓ | ✓ | - | - | - | o |
| Research | ✓ | ✓ | - | - | - | - | ✓ | ✓ | - | - | - | - | - | ✓ | - | ✓ | - | - | - | - | ✓ |
| Comparison | ✓ | ✓ | - | - | - | - | - | - | ✓ | - | - | - | - | - | ✓ | ✓ | - | - | - | - | o |
| Pricing | ✓ | ✓ | - | - | - | - | - | ✓ | - | - | - | - | - | - | ✓ | ✓ | ✓ | - | - | - | ✓ |
| Solutions | ✓ | ✓ | - | ✓ | ✓ | ✓ | - | - | - | ✓ | - | - | - | - | ✓ | ✓ | o | - | - | - | - |
| Media/PR | ✓ | o | - | - | - | - | - | - | - | - | - | - | - | o | - | ✓ | - | - | - | - | - |

✓ = required; o = optional; - = not used.

**New blocks in v1.1:**
- **LOCAL-DATA:** BLOCK-LOCAL-DATA-CARD (required for City×Service, City×Ind×Svc)
- **IND-KPI:** BLOCK-INDUSTRY-KPI-MAP (required for City×Ind×Svc)
- **PROOF-SLOT:** BLOCK-PROOF-SLOT (required for City×Service, City×Ind×Svc)
- **GOV-DISC:** BLOCK-GOVERNANCE-DISCLAIMER (required for Pricing, Research, Comparison if competitor data, AI/GEO Hub, Tool if data output)

✓ = required; o = optional; - = not used.

---

## APPENDIX B: Schema Modules by Page Type

| Page Type | WebPage | Org | Breadcrumb | Service | FAQ | HowTo | Article | Place | ItemList | Other |
|-----------|---------|-----|------------|---------|-----|-------|---------|-------|----------|-------|
| Authority Hub | ✓ | ✓ | ✓ | - | o | - | - | - | o | - |
| AI/GEO Hub | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | - | - | Speakable |
| Cluster | o | ✓ | ✓ | - | ✓ | o | ✓ | - | - | DefinedTerm |
| Service | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | - | - | - |
| Industry | ✓ | ✓ | ✓ | - | o | - | - | - | ✓ | - |
| City | ✓ | ✓ | ✓ | - | o | - | - | ✓ | ✓ | LocalBusiness |
| City×Service | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | ✓ | - | - |
| Case Study | - | ✓ | ✓ | - | - | - | ✓ | o | o | - |
| Proof Engine | ✓ | ✓ | ✓ | - | - | - | - | - | ✓ | CollectionPage |
| Trust | ✓ | ✓ | ✓ | - | - | ✓ | - | - | - | - |
| Entity | ✓ | o | ✓ | - | o | - | - | o | ✓ | Thing subclass |
| Glossary | ✓ | ✓ | ✓ | - | o | - | - | - | ✓ | DefinedTerm |
| Tool | ✓ | ✓ | ✓ | - | ✓ | ✓ | - | - | - | SoftwareApplication |
| Research | ✓ | ✓ | ✓ | - | - | - | ✓ | - | - | Report, Dataset |
| Comparison | ✓ | ✓ | ✓ | - | ✓ | - | ✓ | - | - | - |
| Pricing | ✓ | ✓ | ✓ | - | ✓ | - | - | - | - | Offer |
| Solutions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | - | - | - | - |
| Media/PR | ✓ | ✓ | ✓ | - | - | - | o | - | ✓ | NewsArticle |

---

## APPENDIX C: Index Gating Rules & Governance

### C.1 Index Gating Rules Table

| Page Type | Default | Override Logic | Hard-Fail Triggers | Hard-Pass Triggers |
|-----------|---------|----------------|-------------------|-------------------|
| Authority Hub | index | - | Invalid URL pattern | - |
| AI/GEO Hub | index | - | Invalid URL pattern | - |
| Cluster | index | - | Invalid URL pattern | - |
| Service | index | - | Invalid service slug | - |
| Industry | index | - | Invalid industry slug | - |
| City | index | - | Invalid city slug | - |
| City×Service | index (Tier 1 only) | Tier check + uniqueness validation | See C.5 | See C.6 |
| City×Industry Hub | noindex,follow | Always noindex; excluded from sitemap | - | - |
| City×Industry×Service | conditional | Programmatic Quality Gates (2-of-3 rule) | See C.5 | See C.6 |
| Case Study | index | - | Invalid case study slug | - |
| Proof Engine | index | - | Invalid dimension/value | - |
| Trust | index | - | Invalid trust page slug | - |
| Entity | index | - | Invalid entity type/slug | - |
| Glossary | index | - | Invalid term slug | - |
| Tool | index | - | Invalid tool slug | - |
| Research | index | if substantial content | Invalid research slug | - |
| Comparison | index | - | Invalid comparison slug | - |
| Pricing | index | - | Invalid pricing page | - |
| Solutions | index | - | Invalid solution slug | - |
| Media/PR | index | - | Invalid media slug | - |

### C.2 Decision Flow Chart (Text-Based)

```
START: shouldIndex(url, pageData)
│
├─ STEP 1: Identify Page Type
│   └─ IF pageType === "city_service" → GOTO STEP 2A
│   └─ IF pageType === "city_industry_hub" → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   └─ IF pageType === "city_industry_service" → GOTO STEP 2B
│   └─ ELSE → GOTO STEP 3 (non-programmatic)
│
├─ STEP 2A: City×Service Index Decision
│   ├─ CHECK: Is service in TIER1_SERVICES?
│   │   └─ NO → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   │   └─ YES → CONTINUE
│   ├─ CHECK: Hard-Fail Triggers (C.5)
│   │   └─ IF any trigger → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   ├─ CHECK: Required Uniqueness Blocks
│   │   ├─ IF missing LOCAL_DATA_CARD → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   │   └─ IF missing PROOF_SLOT → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   ├─ CHECK: Hard-Pass Triggers (C.6)
│   │   └─ IF any trigger → RETURN {indexable: true, robots: "index,follow", sitemap: true}
│   └─ DEFAULT → RETURN {indexable: true, robots: "index,follow", sitemap: true}
│
├─ STEP 2B: City×Industry×Service Index Decision
│   ├─ CHECK: Hard-Fail Triggers (C.5)
│   │   └─ IF any trigger → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   ├─ CHECK: Hard-Pass Triggers (C.6)
│   │   └─ IF any trigger → RETURN {indexable: true, robots: "index,follow", sitemap: true}
│   ├─ CHECK: Required Uniqueness Blocks
│   │   ├─ IF missing LOCAL_DATA_CARD → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   │   ├─ IF missing INDUSTRY_KPI_MAP → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   │   └─ IF missing PROOF_SLOT → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   ├─ SCORE: Programmatic Quality Gates (2-of-3 rule)
│   │   ├─ Score LOCAL_DATA_CARD (0 or 1)
│   │   ├─ Score INDUSTRY_KPI_MAP (0 or 1)
│   │   ├─ Score PROOF_SLOT (0 or 1)
│   │   └─ Total Score = sum of 3 scores
│   ├─ CHECK: Scoring Threshold
│   │   └─ IF Total Score < 2 → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
│   │   └─ IF Total Score >= 2 → CONTINUE
│   ├─ BONUS: Word Count (secondary signal only)
│   │   └─ IF wordCount >= 2000 → Add +0.1 bonus (max score still 3.0)
│   └─ RETURN {indexable: true, robots: "index,follow", sitemap: true}
│
└─ STEP 3: Non-Programmatic Pages
    ├─ CHECK: Hard-Fail Triggers (C.5) - generic
    │   └─ IF any trigger → RETURN {indexable: false, robots: "noindex,follow", sitemap: false}
    └─ DEFAULT → RETURN {indexable: true, robots: "index,follow", sitemap: true}
```

### C.3 Pseudocode: shouldIndex(url, pageData)

```javascript
function shouldIndex(url, pageData) {
  const { pageType, city, service, industry, blocks, metadata } = pageData;
  
  // STEP 1: Identify Page Type
  if (pageType === "city_industry_hub") {
    return {
      indexable: false,
      robots: "noindex,follow",
      sitemap: false,
      reason: "City×Industry Hub always noindex"
    };
  }
  
  // STEP 2A: City×Service Index Decision
  if (pageType === "city_service") {
    // Tier check
    if (!TIER1_SERVICES.includes(service)) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: "Service not in TIER1_SERVICES"
      };
    }
    
    // Hard-fail triggers
    const hardFail = checkHardFailTriggers(pageData, "city_service");
    if (hardFail) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: hardFail.reason
      };
    }
    
    // Required uniqueness blocks
    if (!blocks.LOCAL_DATA_CARD || !blocks.PROOF_SLOT) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: "Missing required uniqueness blocks"
      };
    }
    
    // Hard-pass triggers
    const hardPass = checkHardPassTriggers(pageData, "city_service");
    if (hardPass) {
      return {
        indexable: true,
        robots: "index,follow",
        sitemap: true,
        reason: hardPass.reason
      };
    }
    
    // Default: index
    return {
      indexable: true,
      robots: "index,follow",
      sitemap: true,
      reason: "Tier 1 service with required blocks"
    };
  }
  
  // STEP 2B: City×Industry×Service Index Decision
  if (pageType === "city_industry_service") {
    // Hard-fail triggers
    const hardFail = checkHardFailTriggers(pageData, "city_industry_service");
    if (hardFail) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: hardFail.reason
      };
    }
    
    // Hard-pass triggers
    const hardPass = checkHardPassTriggers(pageData, "city_industry_service");
    if (hardPass) {
      return {
        indexable: true,
        robots: "index,follow",
        sitemap: true,
        reason: hardPass.reason
      };
    }
    
    // Required uniqueness blocks
    if (!blocks.LOCAL_DATA_CARD || !blocks.INDUSTRY_KPI_MAP || !blocks.PROOF_SLOT) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: "Missing required uniqueness blocks"
      };
    }
    
    // Programmatic Quality Gates: 2-of-3 rule
    let score = 0;
    let reasons = [];
    
    // Score LOCAL_DATA_CARD
    if (blocks.LOCAL_DATA_CARD && 
        blocks.LOCAL_DATA_CARD.serp_data && 
        blocks.LOCAL_DATA_CARD.market_data && 
        blocks.LOCAL_DATA_CARD.review_data) {
      score += 1;
      reasons.push("Local data present");
    }
    
    // Score INDUSTRY_KPI_MAP
    if (blocks.INDUSTRY_KPI_MAP && 
        blocks.INDUSTRY_KPI_MAP.kpis && 
        blocks.INDUSTRY_KPI_MAP.kpis.length >= 5) {
      score += 1;
      reasons.push("Industry KPIs present");
    }
    
    // Score PROOF_SLOT
    if (blocks.PROOF_SLOT && 
        blocks.PROOF_SLOT.type && 
        validateProofSlot(blocks.PROOF_SLOT)) {
      score += 1;
      reasons.push("Proof present");
    }
    
    // Scoring threshold: minimum 2 points
    if (score < 2) {
      return {
        indexable: false,
        robots: "noindex,follow",
        sitemap: false,
        reason: `Quality score ${score}/3 below threshold (2/3 required). Missing: ${getMissingDimensions(score, blocks)}`
      };
    }
    
    // Word count bonus (secondary signal only, never primary gate)
    let wordCountBonus = 0;
    if (metadata.wordCount && metadata.wordCount >= 2000) {
      wordCountBonus = 0.1;
      reasons.push("Word count bonus (+0.1)");
    }
    
    // Final score (for logging/monitoring, not used for decision)
    const finalScore = score + wordCountBonus;
    
    return {
      indexable: true,
      robots: "index,follow",
      sitemap: true,
      reason: `Quality score ${score}/3 (${reasons.join(", ")})`,
      qualityScore: finalScore
    };
  }
  
  // STEP 3: Non-Programmatic Pages
  // Hard-fail triggers (generic)
  const hardFail = checkHardFailTriggers(pageData, pageType);
  if (hardFail) {
    return {
      indexable: false,
      robots: "noindex,follow",
      sitemap: false,
      reason: hardFail.reason
    };
  }
  
  // Default: index
  return {
    indexable: true,
    robots: "index,follow",
    sitemap: true,
    reason: "Default index for non-programmatic page"
  };
}

// Helper: Check hard-fail triggers
function checkHardFailTriggers(pageData, pageType) {
  const { city, service, industry, blocks, metadata } = pageData;
  
  // Trigger 1: Invalid city slug
  if (city && !cityDataSlugs.includes(city) && !citySlugs.includes(city)) {
    return { reason: "Invalid city slug" };
  }
  
  // Trigger 2: Invalid service slug
  if (service && !serviceSlugs.includes(service) && !TIER1_SERVICES.includes(service)) {
    return { reason: "Invalid service slug" };
  }
  
  // Trigger 3: Invalid industry slug
  if (industry && !industrySlugs.includes(industry)) {
    return { reason: "Invalid industry slug" };
  }
  
  // Trigger 4: Duplicate content detected
  if (metadata.duplicateContent === true) {
    return { reason: "Duplicate content detected" };
  }
  
  // Trigger 5: Missing required blocks (programmatic only)
  if (pageType === "city_service") {
    if (!blocks.LOCAL_DATA_CARD || !blocks.PROOF_SLOT) {
      return { reason: "Missing required uniqueness blocks" };
    }
  }
  if (pageType === "city_industry_service") {
    if (!blocks.LOCAL_DATA_CARD || !blocks.INDUSTRY_KPI_MAP || !blocks.PROOF_SLOT) {
      return { reason: "Missing required uniqueness blocks" };
    }
  }
  
  // Trigger 6: Invalid block data (validation failed)
  if (blocks.LOCAL_DATA_CARD && !validateLocalDataCard(blocks.LOCAL_DATA_CARD)) {
    return { reason: "LOCAL_DATA_CARD validation failed" };
  }
  if (blocks.INDUSTRY_KPI_MAP && !validateIndustryKpiMap(blocks.INDUSTRY_KPI_MAP)) {
    return { reason: "INDUSTRY_KPI_MAP validation failed" };
  }
  if (blocks.PROOF_SLOT && !validateProofSlot(blocks.PROOF_SLOT)) {
    return { reason: "PROOF_SLOT validation failed" };
  }
  
  // Trigger 7: Stale data (last_updated > 90 days for programmatic)
  if (pageType === "city_service" || pageType === "city_industry_service") {
    const maxAge = 90 * 24 * 60 * 60 * 1000; // 90 days in ms
    if (blocks.LOCAL_DATA_CARD && 
        new Date() - new Date(blocks.LOCAL_DATA_CARD.last_updated) > maxAge) {
      return { reason: "LOCAL_DATA_CARD data stale (>90 days)" };
    }
  }
  
  // Trigger 8: Invalid URL pattern
  if (!isValidUrlPattern(url, pageType)) {
    return { reason: "Invalid URL pattern" };
  }
  
  // Trigger 9: Manual noindex override
  if (metadata.manualNoindex === true) {
    return { reason: "Manual noindex override" };
  }
  
  // Trigger 10: CMS content flag false (if expected true)
  if (pageType === "city_industry_service" && 
      metadata.hasCmsContent === false && 
      metadata.expectedCmsContent === true) {
    return { reason: "Expected CMS content missing" };
  }
  
  return null; // No hard-fail trigger
}

// Helper: Check hard-pass triggers
function checkHardPassTriggers(pageData, pageType) {
  const { blocks, metadata } = pageData;
  
  // Trigger 1: CMS content flag true
  if (metadata.hasCmsContent === true) {
    return { reason: "CMS content present" };
  }
  
  // Trigger 2: All 3 uniqueness blocks present with valid data (City×Industry×Service)
  if (pageType === "city_industry_service") {
    if (blocks.LOCAL_DATA_CARD && 
        blocks.INDUSTRY_KPI_MAP && 
        blocks.PROOF_SLOT &&
        validateLocalDataCard(blocks.LOCAL_DATA_CARD) &&
        validateIndustryKpiMap(blocks.INDUSTRY_KPI_MAP) &&
        validateProofSlot(blocks.PROOF_SLOT)) {
      return { reason: "All 3 uniqueness blocks present and valid" };
    }
  }
  
  // Trigger 3: Case study proof with verified client
  if (blocks.PROOF_SLOT && 
      blocks.PROOF_SLOT.type === "case_study" &&
      blocks.PROOF_SLOT.case_study_ref &&
      blocks.PROOF_SLOT.case_study_ref.case_study_verified === true &&
      blocks.PROOF_SLOT.case_study_ref.testimonial &&
      blocks.PROOF_SLOT.case_study_ref.testimonial.client_verified === true) {
    return { reason: "Verified case study proof present" };
  }
  
  // Trigger 4: High-quality local data (all data sources present)
  if (blocks.LOCAL_DATA_CARD &&
      blocks.LOCAL_DATA_CARD.serp_data &&
      blocks.LOCAL_DATA_CARD.market_data &&
      blocks.LOCAL_DATA_CARD.review_data &&
      blocks.LOCAL_DATA_CARD.competitor_data &&
      blocks.LOCAL_DATA_CARD.data_sources &&
      blocks.LOCAL_DATA_CARD.data_sources.length >= 2) {
    return { reason: "High-quality local data (all sources present)" };
  }
  
  // Trigger 5: Industry KPI map with 8+ KPIs
  if (blocks.INDUSTRY_KPI_MAP &&
      blocks.INDUSTRY_KPI_MAP.kpis &&
      blocks.INDUSTRY_KPI_MAP.kpis.length >= 8) {
    return { reason: "Comprehensive industry KPI map (8+ KPIs)" };
  }
  
  // Trigger 6: Recent data updates (all blocks updated within 30 days)
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  if (pageType === "city_industry_service") {
    const allRecent = 
      (!blocks.LOCAL_DATA_CARD || new Date(blocks.LOCAL_DATA_CARD.last_updated) >= thirtyDaysAgo) &&
      (!blocks.INDUSTRY_KPI_MAP || new Date(blocks.INDUSTRY_KPI_MAP.last_updated) >= thirtyDaysAgo) &&
      (!blocks.PROOF_SLOT || new Date(blocks.PROOF_SLOT.last_updated) >= thirtyDaysAgo);
    if (allRecent) {
      return { reason: "All data blocks updated within 30 days" };
    }
  }
  
  // Trigger 7: Manual index override
  if (metadata.manualIndex === true) {
    return { reason: "Manual index override" };
  }
  
  // Trigger 8: Featured/priority page flag
  if (metadata.featured === true || metadata.priority === "high") {
    return { reason: "Featured/priority page" };
  }
  
  // Trigger 9: High engagement metrics (if available)
  if (metadata.engagementScore && metadata.engagementScore >= 0.8) {
    return { reason: "High engagement score" };
  }
  
  // Trigger 10: External citation/reference (if available)
  if (metadata.externalCitations && metadata.externalCitations.length >= 3) {
    return { reason: "Multiple external citations" };
  }
  
  return null; // No hard-pass trigger
}

// Helper: Get missing dimensions for quality score
function getMissingDimensions(score, blocks) {
  const missing = [];
  if (!blocks.LOCAL_DATA_CARD || !validateLocalDataCard(blocks.LOCAL_DATA_CARD)) {
    missing.push("Local Data");
  }
  if (!blocks.INDUSTRY_KPI_MAP || !validateIndustryKpiMap(blocks.INDUSTRY_KPI_MAP)) {
    missing.push("Industry Logic");
  }
  if (!blocks.PROOF_SLOT || !validateProofSlot(blocks.PROOF_SLOT)) {
    missing.push("Proof");
  }
  return missing.join(", ");
}

// Helper: Validation functions (see PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md for full implementations)
function validateLocalDataCard(block) {
  // Returns: boolean
  // Validates: Required fields present, data quality checks
  // See PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md Section 1.6
}

function validateIndustryKpiMap(block) {
  // Returns: boolean
  // Validates: Industry slug valid, 5-10 KPIs, constraints present, buyer journey present
  // See PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md Section 2.6
}

function validateProofSlot(block) {
  // Returns: boolean
  // Validates: Type valid, required fields for type, proof validity rules
  // See PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md Section 3.4
}

function isValidUrlPattern(url, pageType) {
  // Returns: boolean
  // Validates: URL matches expected pattern for page type
  // Patterns:
  // - city_service: /{city-slug}/{service-slug}
  // - city_industry_hub: /{city-slug}/industry/{industry-slug}
  // - city_industry_service: /{city-slug}/industry/{industry-slug}/{service-slug}
}
```

### C.4 Sitemap Inclusion Rules

**Rule Set:**
1. **Include if:** `shouldIndex(url, pageData).indexable === true`
2. **Exclude if:** `shouldIndex(url, pageData).indexable === false`
3. **Exclude if:** `pageType === "city_industry_hub"` (always noindex)
4. **Exclude if:** `robots === "noindex"` (from shouldIndex result)

**Sitemap Buckets:**
- **Core bucket:** Authority Hub, AI/GEO Hub, Service, Industry, City, Case Study, Trust, Entity, Glossary, Tool, Research, Comparison, Pricing, Solutions, Media/PR
- **Locations-tier1 bucket:** City×Service (Tier 1 only, indexable)
- **Programmatic-tier2 bucket:** City×Industry×Service (indexable only)
- **Excluded:** City×Industry Hub (always excluded)

**Sitemap Generation Logic:**
```javascript
function generateSitemapEntry(url, pageData) {
  const indexDecision = shouldIndex(url, pageData);
  
  if (!indexDecision.indexable || indexDecision.sitemap === false) {
    return null; // Exclude from sitemap
  }
  
  return {
    url: indexDecision.canonical || url,
    lastModified: pageData.metadata.lastModified || new Date(),
    changeFrequency: getChangeFrequency(pageData.pageType),
    priority: getPriority(pageData.pageType, indexDecision)
  };
}
```

### C.5 Hard-Fail Triggers (10 Triggers)

| # | Trigger | Condition | Applies To | Action |
|---|---------|-----------|------------|--------|
| 1 | Invalid city slug | `city` not in `cityDataSlugs` or `citySlugs` | City×Service, City×Industry×Service | noindex,follow |
| 2 | Invalid service slug | `service` not in `serviceSlugs` or `TIER1_SERVICES` | City×Service, City×Industry×Service | noindex,follow |
| 3 | Invalid industry slug | `industry` not in `industrySlugs` | City×Industry×Service | noindex,follow |
| 4 | Duplicate content | `metadata.duplicateContent === true` | All programmatic | noindex,follow |
| 5 | Missing required blocks | Missing LOCAL_DATA_CARD, INDUSTRY_KPI_MAP, or PROOF_SLOT | City×Service, City×Industry×Service | noindex,follow |
| 6 | Block validation failed | LOCAL_DATA_CARD, INDUSTRY_KPI_MAP, or PROOF_SLOT validation fails | City×Service, City×Industry×Service | noindex,follow |
| 7 | Stale data | `last_updated` > 90 days for LOCAL_DATA_CARD | City×Service, City×Industry×Service | noindex,follow |
| 8 | Invalid URL pattern | URL doesn't match expected pattern for page type | All | noindex,follow |
| 9 | Manual noindex override | `metadata.manualNoindex === true` | All | noindex,follow |
| 10 | Expected CMS content missing | `hasCmsContent === false` when `expectedCmsContent === true` | City×Industry×Service | noindex,follow |

### C.6 Hard-Pass Triggers (10 Triggers)

| # | Trigger | Condition | Applies To | Action |
|---|---------|-----------|------------|--------|
| 1 | CMS content flag | `metadata.hasCmsContent === true` | City×Industry×Service | index,follow |
| 2 | All 3 blocks valid | LOCAL_DATA_CARD, INDUSTRY_KPI_MAP, PROOF_SLOT all present and valid | City×Industry×Service | index,follow |
| 3 | Verified case study | Case study proof with `case_study_verified === true` and `client_verified === true` | City×Service, City×Industry×Service | index,follow |
| 4 | High-quality local data | All data sources present (SERP, market, review, competitor) | City×Service, City×Industry×Service | index,follow |
| 5 | Comprehensive KPI map | INDUSTRY_KPI_MAP with 8+ KPIs | City×Industry×Service | index,follow |
| 6 | Recent data updates | All blocks updated within 30 days | City×Industry×Service | index,follow |
| 7 | Manual index override | `metadata.manualIndex === true` | All | index,follow |
| 8 | Featured/priority page | `metadata.featured === true` or `metadata.priority === "high"` | All | index,follow |
| 9 | High engagement score | `metadata.engagementScore >= 0.8` | All | index,follow |
| 10 | External citations | `metadata.externalCitations.length >= 3` | All | index,follow |

### C.7 Word Count as Secondary Signal

**Rule:** Word count may be used only as a secondary signal (bonus scoring), never as a primary gate.

**Implementation:**
- If `wordCount >= 2000`: Add +0.1 bonus to quality score
- Maximum quality score remains 3.0 (cannot exceed)
- Word count bonus does not affect indexability decision if quality score < 2
- Word count bonus only applies if quality score >= 2 (already indexable)

**Example:**
```
Quality Score: 2/3 (Local Data + Proof present, Industry Logic missing)
Word Count: 2500 words
Bonus: +0.1
Final Score: 2.1/3.0
Decision: INDEX (because score >= 2, bonus is applied but not required)
```

**Non-Example (Invalid):**
```
Quality Score: 1/3 (only Local Data present)
Word Count: 2500 words
Bonus: +0.1
Final Score: 1.1/3.0
Decision: NOINDEX (score < 2, word count bonus cannot make it indexable)
```

### C.8 Summary

**Key Principles:**
1. **Word count is never a primary gate** - Only used as secondary signal bonus
2. **Quality over quantity** - 2-of-3 rule ensures minimum quality threshold
3. **Hard-fail triggers override all** - Safety net for invalid/low-quality pages
4. **Hard-pass triggers bypass scoring** - Fast-track high-quality pages
5. **Uniqueness blocks required** - Missing blocks → auto noindex

**Decision Priority:**
1. Hard-fail triggers (highest priority)
2. Hard-pass triggers (if no hard-fail)
3. Required blocks check (if no triggers)
4. Quality gates scoring (City×Industry×Service only)
5. Word count bonus (secondary signal only)

**Implementation Notes:**
- All validation functions reference PROGRAMMATIC_UNIQUENESS_INJECTION_SPEC.md
- Sitemap generation must call `shouldIndex()` for each URL
- Index decisions should be cached with appropriate TTL
- Quality scores should be logged for monitoring/optimization

---

## 19. GLOBAL CTA GOVERNANCE SYSTEM (v1.1)

**Purpose:** Enforce CTA consistency by funnel stage across all page types, ensuring conversion optimization and tracking accuracy.

---

### 19.1 Funnel Stage Definitions

#### 19.1.1 TOFU (Top of Funnel)

**Definition:** Awareness and education stage. Users are discovering, learning, and exploring.

**User Intent:**
- Learning about topics
- Researching solutions
- Understanding concepts
- Exploring tools and resources

**Primary Goal:** Education, engagement, lead capture (soft)

**Typical User Actions:**
- Reading blog posts
- Using tools
- Downloading guides
- Browsing resources

#### 19.1.2 MOFU (Middle of Funnel)

**Definition:** Consideration and evaluation stage. Users are comparing options and assessing fit.

**User Intent:**
- Evaluating solutions
- Comparing options
- Seeking proof/validation
- Understanding process

**Primary Goal:** Qualification, trust building, lead capture (medium)

**Typical User Actions:**
- Viewing case studies
- Requesting audits/assessments
- Reading about methodology
- Comparing services

#### 19.1.3 BOFU (Bottom of Funnel)

**Definition:** Decision and conversion stage. Users are ready to take action.

**User Intent:**
- Getting quotes
- Booking consultations
- Starting projects
- Making purchases

**Primary Goal:** Conversion, sales, revenue

**Typical User Actions:**
- Requesting quotes
- Booking calls
- Viewing pricing
- Contacting sales

---

### 19.2 Page Type → Funnel Stage Mapping

| Page Type | Default Funnel Stage | Rationale |
|-----------|----------------------|-----------|
| **Authority Hub (main)** | MOFU | Main hub pages focus on consideration |
| **Authority Hub (`/resources`, `/blog`)** | TOFU | Educational content for awareness |
| **AI/GEO Hub** | MOFU → BOFU | Can serve both consideration and conversion |
| **Cluster** | TOFU/MOFU | Educational clusters (TOFU) or topic hubs (MOFU) |
| **Service** | BOFU | Direct service pages target conversion |
| **Industry** | MOFU | Industry pages focus on qualification |
| **City** | MOFU | City pages focus on local qualification |
| **City×Service** | BOFU | Local service pages target conversion |
| **City×Industry Hub** | TOFU | Navigation pages, low conversion intent |
| **City×Industry×Service** | BOFU | Highly specific, high conversion intent |
| **Case Study** | MOFU | Proof and validation for consideration |
| **Proof Engine** | MOFU | Aggregated proof for consideration |
| **Trust** | TOFU/MOFU | Trust building for awareness/consideration |
| **Entity** | TOFU | Educational entity pages |
| **Glossary** | TOFU | Educational definitions |
| **Tool** | TOFU | Tools for awareness and engagement |
| **Research** | TOFU | Research content for awareness |
| **Comparison** | TOFU/MOFU | Comparisons for awareness/consideration |
| **Pricing** | BOFU | Pricing pages target conversion |
| **Solutions** | MOFU → BOFU | Solutions can serve consideration or conversion |
| **Media/PR** | TOFU | Media content for awareness |

---

### 19.3 CTA Governance Table

| Funnel Stage | Primary CTA Type | Primary CTA Labels | Primary CTA Destinations | Secondary CTA Type | Secondary CTA Labels | Secondary CTA Destinations | Max CTAs |
|--------------|------------------|-------------------|-------------------------|-------------------|---------------------|--------------------------|----------|
| **TOFU** | Tool/Guide/Download | "Run SEO Audit", "Try Tool", "Download Guide", "Get Free Report", "Start Analysis" | `/tools/*`, `/resources/*`, `/blog/*`, download URLs | Learn More | "Learn More", "Read Guide", "Explore Resources", "View All Tools" | Related content, resource hubs, tool listings | 2 (1 primary, 1 secondary) |
| **MOFU** | Audit/Strategy Offer | "Get Free Audit", "Get Strategy", "Request Assessment", "See Case Studies", "Get Roadmap" | `/contact`, `/seo-audit`, `/case-studies/*`, `/solutions/*`, `/contact?offer=audit` | Tool/Resource | "Try Tool", "View Resources", "Download Guide" | `/tools/*`, `/resources/*` | 2 (1 primary, 1 secondary) |
| **BOFU** | Book Call/Quote/Pricing | "Get Quote", "Book Call", "See Pricing", "Start Project", "Get Started", "Contact Sales" | `/contact`, `/pricing`, `/book`, `/contact?offer=quote`, service-specific contact URLs | Learn More | "Learn More", "View Services", "See Case Studies" | Service pages, case studies, solutions | 2 (1 primary, 1 secondary) |

---

### 19.4 CTA Rules

#### 19.4.1 Primary CTA Rules

**Rule 1: Exactly 1 Primary CTA per Page**
- **Required:** All pages except Entity and Glossary (optional)
- **Enforcement:** Template validation, CI checks
- **Exception:** Entity and Glossary pages may have 0-1 primary CTA

**Rule 2: CTA Must Match Funnel Stage**
- **Validation:** Primary CTA type must match page funnel stage
- **Enforcement:** Template validation on render
- **Error:** If mismatch, log warning and use fallback CTA

**Rule 3: CTA Label Standards**
- **Format:** Action verb + object (e.g., "Get Free Audit", "Book Call")
- **Length:** 2-5 words, max 30 characters
- **Tone:** Clear, action-oriented, benefit-focused
- **Avoid:** Generic labels like "Click Here", "Submit", "Go"

**Rule 4: CTA Destination Standards**
- **TOFU:** Must point to `/tools/*`, `/resources/*`, `/blog/*`, or download URLs
- **MOFU:** Must point to `/contact`, `/seo-audit`, `/case-studies/*`, `/solutions/*`, or offer-specific contact URLs
- **BOFU:** Must point to `/contact`, `/pricing`, `/book`, or service-specific contact URLs
- **Validation:** URL must match allowed patterns for funnel stage

**Rule 5: Offer Mapping Rules**

| Offer Type | Funnel Stage | CTA Label Pattern | Destination Pattern | Tracking Event |
|------------|--------------|-------------------|---------------------|----------------|
| **Audit** | MOFU | "Get Free Audit", "Request SEO Audit" | `/contact?offer=audit`, `/seo-audit` | `cta_audit_request` |
| **Roadmap** | MOFU | "Get Strategy", "Get Roadmap" | `/contact?offer=roadmap`, `/solutions/*` | `cta_roadmap_request` |
| **Booking** | BOFU | "Book Call", "Schedule Consultation" | `/book`, `/contact?offer=booking` | `cta_booking_request` |
| **Quote** | BOFU | "Get Quote", "Request Quote" | `/contact?offer=quote`, `/pricing` | `cta_quote_request` |
| **Download** | TOFU | "Download Guide", "Get Free Report" | `/resources/*`, download URLs | `cta_download` |
| **Tool** | TOFU | "Run SEO Audit", "Try Tool" | `/tools/*` | `cta_tool_use` |

#### 19.4.2 Secondary CTA Rules

**Rule 1: Max 1 Secondary CTA**
- **Optional:** Secondary CTA is optional
- **Requirement:** Primary CTA must be present for secondary CTA
- **Purpose:** Provide alternative action path

**Rule 2: Secondary CTA Must Be Different Type**
- **Requirement:** Secondary CTA must be different type from primary
- **Purpose:** Provide complementary action (e.g., primary = "Get Quote", secondary = "Learn More")

**Rule 3: Secondary CTA Positioning**
- **Location:** Below primary CTA or in sidebar
- **Visual Hierarchy:** Less prominent than primary CTA
- **Style:** Text link or smaller button

---

### 19.5 CTA Patterns by Stage

#### 19.5.1 TOFU CTA Patterns

**Pattern 1: Tool Engagement**
- **Primary:** "Run SEO Audit" → `/tools/seo-audit`
- **Secondary:** "View All Tools" → `/tools`
- **Use Case:** Tool pages, resource pages

**Pattern 2: Content Download**
- **Primary:** "Download SEO Guide" → `/resources/seo-guide`
- **Secondary:** "Learn More" → `/blog/seo-basics`
- **Use Case:** Blog posts, resource pages

**Pattern 3: Educational Exploration**
- **Primary:** "Try Free Tool" → `/tools/seo-audit`
- **Secondary:** "Read Guide" → `/resources/seo-guide`
- **Use Case:** Glossary, entity pages, research pages

#### 19.5.2 MOFU CTA Patterns

**Pattern 1: Audit Offer**
- **Primary:** "Get Free SEO Audit" → `/contact?offer=audit`
- **Secondary:** "See Case Studies" → `/case-studies`
- **Use Case:** Service pages, industry pages, city pages

**Pattern 2: Strategy Offer**
- **Primary:** "Get Strategy Roadmap" → `/contact?offer=roadmap`
- **Secondary:** "Try SEO Tool" → `/tools/seo-audit`
- **Use Case:** Solutions pages, cluster pages

**Pattern 3: Proof Validation**
- **Primary:** "See Case Studies" → `/case-studies`
- **Secondary:** "Get Free Audit" → `/contact?offer=audit`
- **Use Case:** Proof engine pages, case study hubs

#### 19.5.3 BOFU CTA Patterns

**Pattern 1: Quote Request**
- **Primary:** "Get Quote" → `/contact?offer=quote`
- **Secondary:** "See Pricing" → `/pricing`
- **Use Case:** Service pages, city×service pages

**Pattern 2: Booking**
- **Primary:** "Book Free Consultation" → `/book`
- **Secondary:** "Learn More" → Service page
- **Use Case:** Service pages, pricing pages

**Pattern 3: Direct Contact**
- **Primary:** "Start Your Project" → `/contact?offer=project`
- **Secondary:** "View Case Studies" → `/case-studies`
- **Use Case:** Solutions pages, service pages

---

### 19.6 CTA Examples

#### 19.6.1 TOFU Examples

**Example 1: Tool Page**
```html
<!-- Primary CTA -->
<a href="/tools/seo-audit" 
   class="cta-primary" 
   data-tracking-event="cta_tool_use"
   data-tracking-id="tool_seo_audit_primary">
  Run SEO Audit
</a>

<!-- Secondary CTA -->
<a href="/tools" 
   class="cta-secondary" 
   data-tracking-event="cta_tool_explore"
   data-tracking-id="tool_seo_audit_secondary">
  View All Tools
</a>
```

**Example 2: Blog Post**
```html
<!-- Primary CTA -->
<a href="/resources/seo-guide" 
   class="cta-primary" 
   data-tracking-event="cta_download"
   data-tracking-id="blog_seo_basics_primary">
  Download SEO Guide
</a>

<!-- Secondary CTA -->
<a href="/blog/seo-advanced" 
   class="cta-secondary" 
   data-tracking-event="cta_content_explore"
   data-tracking-id="blog_seo_basics_secondary">
  Read Advanced Guide
</a>
```

**Example 3: Glossary Page**
```html
<!-- Primary CTA -->
<a href="/tools/seo-audit" 
   class="cta-primary" 
   data-tracking-event="cta_tool_use"
   data-tracking-id="glossary_seo_primary">
  Try SEO Audit Tool
</a>

<!-- Secondary CTA (optional) -->
<a href="/blog/seo-basics" 
   class="cta-secondary" 
   data-tracking-event="cta_content_explore"
   data-tracking-id="glossary_seo_secondary">
  Learn More About SEO
</a>
```

#### 19.6.2 MOFU Examples

**Example 1: Service Page**
```html
<!-- Primary CTA -->
<a href="/contact?offer=audit" 
   class="cta-primary" 
   data-tracking-event="cta_audit_request"
   data-tracking-id="service_seo_primary">
  Get Free SEO Audit
</a>

<!-- Secondary CTA -->
<a href="/case-studies/by-service/seo" 
   class="cta-secondary" 
   data-tracking-event="cta_case_study_view"
   data-tracking-id="service_seo_secondary">
  See Case Studies
</a>
```

**Example 2: Industry Page**
```html
<!-- Primary CTA -->
<a href="/contact?offer=roadmap" 
   class="cta-primary" 
   data-tracking-event="cta_roadmap_request"
   data-tracking-id="industry_healthcare_primary">
  Get Strategy Roadmap
</a>

<!-- Secondary CTA -->
<a href="/tools/seo-audit" 
   class="cta-secondary" 
   data-tracking-event="cta_tool_use"
   data-tracking-id="industry_healthcare_secondary">
  Try SEO Audit Tool
</a>
```

**Example 3: Case Study Page**
```html
<!-- Primary CTA -->
<a href="/contact?offer=audit" 
   class="cta-primary" 
   data-tracking-event="cta_audit_request"
   data-tracking-id="case_study_client_primary">
  Get Free Audit
</a>

<!-- Secondary CTA -->
<a href="/case-studies" 
   class="cta-secondary" 
   data-tracking-event="cta_case_study_explore"
   data-tracking-id="case_study_client_secondary">
  View All Case Studies
</a>
```

#### 19.6.3 BOFU Examples

**Example 1: Service Page**
```html
<!-- Primary CTA -->
<a href="/contact?offer=quote" 
   class="cta-primary" 
   data-tracking-event="cta_quote_request"
   data-tracking-id="service_seo_primary">
  Get Quote
</a>

<!-- Secondary CTA -->
<a href="/pricing" 
   class="cta-secondary" 
   data-tracking-event="cta_pricing_view"
   data-tracking-id="service_seo_secondary">
  See Pricing
</a>
```

**Example 2: City×Service Page**
```html
<!-- Primary CTA -->
<a href="/contact?offer=quote&city=new-york-ny&service=seo" 
   class="cta-primary" 
   data-tracking-event="cta_quote_request"
   data-tracking-id="city_service_ny_seo_primary">
  Get Quote for NYC SEO
</a>

<!-- Secondary CTA -->
<a href="/new-york-ny/seo" 
   class="cta-secondary" 
   data-tracking-event="cta_service_explore"
   data-tracking-id="city_service_ny_seo_secondary">
  Learn More About Our SEO Services
</a>
```

**Example 3: Pricing Page**
```html
<!-- Primary CTA -->
<a href="/book" 
   class="cta-primary" 
   data-tracking-event="cta_booking_request"
   data-tracking-id="pricing_primary">
  Book Free Consultation
</a>

<!-- Secondary CTA -->
<a href="/contact?offer=quote" 
   class="cta-secondary" 
   data-tracking-event="cta_quote_request"
   data-tracking-id="pricing_secondary">
  Get Custom Quote
</a>
```

---

### 19.7 Tracking Requirements

#### 19.7.1 Tracking Event Naming Conventions

**Format:** `cta_{action}_{object}`

**Standard Events:**

| Event Name | Description | Funnel Stage | Example |
|------------|-------------|--------------|---------|
| `cta_tool_use` | User clicks to use a tool | TOFU | "Run SEO Audit" |
| `cta_download` | User clicks to download content | TOFU | "Download Guide" |
| `cta_content_explore` | User clicks to explore content | TOFU | "Read More" |
| `cta_audit_request` | User requests audit/assessment | MOFU | "Get Free Audit" |
| `cta_roadmap_request` | User requests strategy roadmap | MOFU | "Get Strategy" |
| `cta_case_study_view` | User views case studies | MOFU | "See Case Studies" |
| `cta_quote_request` | User requests quote | BOFU | "Get Quote" |
| `cta_booking_request` | User books consultation | BOFU | "Book Call" |
| `cta_pricing_view` | User views pricing | BOFU | "See Pricing" |
| `cta_contact` | User contacts (generic) | BOFU | "Contact Us" |

#### 19.7.2 Tracking ID Format

**Format:** `{page_type}_{page_identifier}_{cta_position}`

**Examples:**
- `tool_seo_audit_primary`
- `blog_seo_basics_primary`
- `service_seo_primary`
- `city_service_ny_seo_primary`
- `pricing_primary`

#### 19.7.3 Tracking Implementation

**HTML Attributes:**
```html
<a href="/contact?offer=audit" 
   class="cta-primary" 
   data-tracking-event="cta_audit_request"
   data-tracking-id="service_seo_primary"
   data-tracking-context='{"page_type":"service","service":"seo","funnel_stage":"mofu"}'>
  Get Free SEO Audit
</a>
```

**JavaScript Tracking:**
```javascript
function trackCTAClick(element) {
  const event = element.dataset.trackingEvent;
  const trackingId = element.dataset.trackingId;
  const context = JSON.parse(element.dataset.trackingContext || '{}');
  
  // Google Analytics
  gtag('event', event, {
    'event_category': 'CTA',
    'event_label': trackingId,
    'page_type': context.page_type,
    'funnel_stage': context.funnel_stage
  });
  
  // Custom analytics
  analytics.track(event, {
    tracking_id: trackingId,
    ...context
  });
}
```

---

### 19.8 Enforcement Rules

#### 19.8.1 Template Validation Checks

**Validation Function:**
```javascript
function validateCTAs(pageData) {
  const { pageType, funnelStage, ctas } = pageData;
  const errors = [];
  const warnings = [];
  
  // Check primary CTA exists (except Entity/Glossary)
  if (!['entity', 'glossary'].includes(pageType)) {
    if (!ctas.primary) {
      errors.push({
        type: 'missing_primary_cta',
        message: `Page type ${pageType} requires a primary CTA`,
        severity: 'error'
      });
    }
  }
  
  // Check primary CTA matches funnel stage
  if (ctas.primary) {
    const allowedTypes = getCTATypesForFunnelStage(funnelStage);
    if (!allowedTypes.includes(ctas.primary.type)) {
      errors.push({
        type: 'cta_funnel_mismatch',
        message: `Primary CTA type ${ctas.primary.type} does not match funnel stage ${funnelStage}`,
        severity: 'error'
      });
    }
    
    // Check CTA destination matches funnel stage
    if (!isValidDestinationForFunnelStage(ctas.primary.url, funnelStage)) {
      errors.push({
        type: 'cta_destination_invalid',
        message: `Primary CTA destination ${ctas.primary.url} is not valid for funnel stage ${funnelStage}`,
        severity: 'error'
      });
    }
  }
  
  // Check secondary CTA count
  if (ctas.secondary && ctas.secondary.length > 1) {
    warnings.push({
      type: 'too_many_secondary_ctas',
      message: 'Maximum 1 secondary CTA allowed',
      severity: 'warning'
    });
  }
  
  // Check tracking requirements
  if (ctas.primary && !ctas.primary.trackingEvent) {
    warnings.push({
      type: 'missing_tracking',
      message: 'Primary CTA missing tracking event',
      severity: 'warning'
    });
  }
  
  return { errors, warnings };
}
```

#### 19.8.2 CI Checks

**Build Failure Conditions:**
1. **BOFU pages missing primary CTA:** Build fails
2. **Primary CTA funnel mismatch:** Build fails
3. **Primary CTA destination invalid:** Build fails
4. **Missing tracking event on primary CTA:** Build fails (BOFU only)

**CI Check Implementation:**
```javascript
// ci/validate-ctas.js
function validateCTAsInBuild() {
  const pages = getAllPages();
  const failures = [];
  
  pages.forEach(page => {
    const validation = validateCTAs(page);
    
    // Fail build on errors
    validation.errors.forEach(error => {
      if (error.severity === 'error') {
        failures.push({
          page: page.url,
          error: error.message
        });
      }
    });
    
    // Fail build on BOFU pages missing primary CTA
    if (page.funnelStage === 'bofu' && !page.ctas.primary) {
      failures.push({
        page: page.url,
        error: 'BOFU page missing required primary CTA'
      });
    }
    
    // Fail build on BOFU pages missing tracking
    if (page.funnelStage === 'bofu' && page.ctas.primary && !page.ctas.primary.trackingEvent) {
      failures.push({
        page: page.url,
        error: 'BOFU page primary CTA missing tracking event'
      });
    }
  });
  
  if (failures.length > 0) {
    console.error('CTA Validation Failures:');
    failures.forEach(f => console.error(`  ${f.page}: ${f.error}`));
    process.exit(1); // Fail build
  }
}
```

#### 19.8.3 Analytics Mapping

**Analytics Dashboard Mapping:**

| Metric | Description | Funnel Stage |
|--------|-------------|--------------|
| `cta_click_rate` | % of page views with CTA clicks | All |
| `cta_conversion_rate` | % of CTA clicks that convert | All |
| `tofu_engagement_rate` | Tool usage / content downloads | TOFU |
| `mofu_qualification_rate` | Audit requests / roadmap requests | MOFU |
| `bofu_conversion_rate` | Quote requests / bookings | BOFU |
| `funnel_attribution` | CTA source attribution | All |

**Analytics Event Mapping:**
```javascript
// Map CTA events to funnel stages
const funnelEventMapping = {
  'cta_tool_use': 'tofu',
  'cta_download': 'tofu',
  'cta_content_explore': 'tofu',
  'cta_audit_request': 'mofu',
  'cta_roadmap_request': 'mofu',
  'cta_case_study_view': 'mofu',
  'cta_quote_request': 'bofu',
  'cta_booking_request': 'bofu',
  'cta_pricing_view': 'bofu'
};
```

---

### 19.9 Summary

**Key Rules:**
1. **Exactly 1 primary CTA** per page (required except Entity/Glossary)
2. **Max 1 secondary CTA** (optional)
3. **CTA must match funnel stage** (enforced by validation)
4. **CTA destination must match funnel stage** (enforced by validation)
5. **Tracking required** for all CTAs (required for BOFU, recommended for others)

**Enforcement:**
- Template validation on render
- CI checks fail build on violations
- Analytics tracking for all CTAs

**Page Type Mapping:**
- 20 page types mapped to funnel stages
- Clear rationale for each mapping

**CTA Patterns:**
- 3 patterns per funnel stage (9 total)
- Clear use cases and examples

**Tracking:**
- Standard event naming conventions
- Tracking ID format
- Analytics mapping

---

## APPENDIX E: City×Industry Hub Canonicalization Rules

**Purpose:** Define canonicalization strategy for City×Industry Hub pages (`/{city-slug}/industry/{industry-slug}`) to prevent duplicate content issues while preserving link equity and navigation functionality.

### E.1 Canonical Decision Table

| Condition | Canonical Target | Robots Meta | Sitemap | Internal Links | Rationale |
|-----------|-----------------|-------------|---------|----------------|-----------|
| **Unique navigational function** (see E.2.1) | Self (`/{city-slug}/industry/{industry-slug}`) | `noindex,follow` | Exclude | Follow | Preserves link equity while avoiding duplicate content |
| **Redundant with City page** (see E.2.2) | `/{city-slug}` | `noindex,follow` | Exclude | Follow | Consolidates authority to City page |
| **Redundant with Industry page** (see E.2.3) | `/industries/{industry-slug}` | `noindex,follow` | Exclude | Follow | Consolidates authority to Industry page |
| **Redundant with both** (see E.2.4) | `/{city-slug}` (prefer City) | `noindex,follow` | Exclude | Follow | City page more specific geo context |
| **Single City×Industry×Service exists** (see E.2.5) | `/{city-slug}/industry/{industry-slug}/{service-slug}` | `noindex,follow` | Exclude | Follow | Consolidates to indexable service page |
| **No downstream pages** (see E.2.6) | Self (or closest parent) | `noindex,follow` | Exclude | Follow | Preserves link equity for future pages |

### E.2 Canonical Decision Logic

#### E.2.1 Unique Navigational Function

**Definition:** Page provides navigation/filtering functionality not available on parent pages.

**Conditions (ALL must be true):**
1. Page has 3+ City×Industry×Service links (downstream pages exist)
2. City page does NOT list all industry-specific services for this industry
3. Industry page does NOT list all city-specific services for this city
4. Page has unique filtering/navigation (e.g., industry-specific service grid, industry-specific case studies)
5. Page serves as primary navigation entry point for City×Industry×Service pages

**Canonical:** Self (`/{city-slug}/industry/{industry-slug}`)

**Example:**
- URL: `/new-york-ny/industry/healthcare`
- City page (`/new-york-ny`) lists all services but not industry-filtered
- Industry page (`/industries/healthcare`) lists all cities but not city-filtered
- Hub page has 5+ healthcare services in NYC
- **Decision:** Canonical self

#### E.2.2 Redundant with City Page

**Definition:** City page already provides comprehensive industry listing for this city.

**Conditions (ANY can be true):**
1. City page has industry section that lists all services for this industry
2. City page has industry filter that shows same services as hub page
3. City page has comprehensive industry list with links to all City×Industry×Service pages
4. Hub page content is 80%+ duplicated on City page

**Canonical:** `/{city-slug}`

**Example:**
- URL: `/los-angeles-ca/industry/real-estate`
- City page (`/los-angeles-ca`) has "Industries We Serve" section listing all real estate services
- Hub page shows same services as City page
- **Decision:** Canonical to `/los-angeles-ca`

#### E.2.3 Redundant with Industry Page

**Definition:** Industry page already provides comprehensive city listing for this industry.

**Conditions (ANY can be true):**
1. Industry page has city section that lists all services for this city
2. Industry page has city filter that shows same services as hub page
3. Industry page has comprehensive city list with links to all City×Industry×Service pages
4. Hub page content is 80%+ duplicated on Industry page

**Canonical:** `/industries/{industry-slug}`

**Example:**
- URL: `/chicago-il/industry/legal`
- Industry page (`/industries/legal`) has "Cities We Serve" section listing all legal services in Chicago
- Hub page shows same services as Industry page
- **Decision:** Canonical to `/industries/legal`

#### E.2.4 Redundant with Both City and Industry Pages

**Definition:** Both City and Industry pages provide comprehensive listings.

**Conditions (ALL must be true):**
1. City page has comprehensive industry listing
2. Industry page has comprehensive city listing
3. Hub page content is duplicated on both

**Canonical:** `/{city-slug}` (prefer City page for geo-specificity)

**Example:**
- URL: `/miami-fl/industry/restaurants`
- City page has "Restaurant Services" section
- Industry page has "Miami Services" section
- Both show same services
- **Decision:** Canonical to `/miami-fl` (geo context preferred)

#### E.2.5 Single City×Industry×Service Page Exists

**Definition:** Only one indexable City×Industry×Service page exists for this City×Industry combination.

**Conditions (ALL must be true):**
1. Exactly 1 City×Industry×Service page exists and is indexable
2. Hub page primarily links to this single service page
3. Hub page has minimal unique content beyond the service link

**Canonical:** `/{city-slug}/industry/{industry-slug}/{service-slug}`

**Example:**
- URL: `/boston-ma/industry/healthcare`
- Only 1 service: `/boston-ma/industry/healthcare/seo`
- Hub page is essentially a redirect page
- **Decision:** Canonical to `/boston-ma/industry/healthcare/seo`

#### E.2.6 No Downstream Pages

**Definition:** No City×Industry×Service pages exist (or all are noindex).

**Conditions (ALL must be true):**
1. Zero City×Industry×Service pages exist, OR
2. All City×Industry×Service pages are noindex (failed quality gates)

**Canonical:** Self (or closest parent if no future pages expected)

**Example:**
- URL: `/portland-or/industry/aerospace`
- No City×Industry×Service pages exist
- Hub page has placeholder content only
- **Decision:** Canonical self (preserve for future pages)

### E.3 Redundant Listing Classification

**A page is classified as "redundant listing" if:**

1. **Content Overlap ≥ 80%:** Hub page content (service links, descriptions, case studies) overlaps 80%+ with parent page
2. **No Unique Navigation:** Hub page does not provide unique filtering, sorting, or navigation not available on parent
3. **Parent Has Comprehensive List:** Parent page (City or Industry) has section that lists all services for the hub's combination
4. **Duplicate Service Links:** Hub page service links are identical to parent page service links
5. **No Unique Value Proposition:** Hub page does not add unique value beyond what parent provides

**A page is classified as "unique navigational function" if:**

1. **Unique Filtering:** Provides industry-specific filtering not on City page, or city-specific filtering not on Industry page
2. **3+ Downstream Pages:** Has 3+ City×Industry×Service pages linked (demonstrates navigational value)
3. **Unique Content Blocks:** Has unique content blocks (e.g., industry-specific local data, city-specific industry KPIs)
4. **Primary Navigation Entry:** Serves as primary entry point for City×Industry×Service pages in internal linking structure
5. **Different Service Set:** Lists different or more specific services than parent pages

### E.4 Robots Meta Rules

**Default:** `noindex,follow`

**Rules:**
- **Always noindex:** City×Industry Hub pages never index (navigation/bridge pages)
- **Always follow:** Links are always followed to preserve link equity flow
- **No override:** No manual override to index (enforced at template level)

**Implementation:**
```html
<meta name="robots" content="noindex,follow">
```

**Additional Meta Tags:**
```html
<!-- Prevent indexing by all search engines -->
<meta name="robots" content="noindex,follow">
<meta name="googlebot" content="noindex,follow">
<meta name="bingbot" content="noindex,follow">
```

### E.5 Internal Linking Behavior

**Rules:**
1. **All links are followed:** No `nofollow` on internal links (preserve link equity)
2. **Link to downstream pages:** Always link to City×Industry×Service pages (if exist)
3. **Link to upstream pages:** Always link to City page and Industry page
4. **Link to case studies:** Link to relevant case studies filtered by city+industry
5. **No external nofollow:** External links (if any) should be `follow` unless spam/low-quality

**Link Structure:**
```
/{city-slug}/industry/{industry-slug}
├─ Upstream links (follow):
│  ├─ /{city-slug} (City page)
│  └─ /industries/{industry-slug} (Industry page)
├─ Downstream links (follow):
│  ├─ /{city-slug}/industry/{industry-slug}/{service-1}
│  ├─ /{city-slug}/industry/{industry-slug}/{service-2}
│  └─ ... (all City×Industry×Service pages)
└─ Lateral links (follow):
   ├─ /case-studies/by-city/{city-slug}
   ├─ /case-studies/by-industry/{industry-slug}
   └─ Related City×Industry Hub pages (if applicable)
```

### E.6 Sitemap Rules

**Rule:** Always exclude City×Industry Hub pages from sitemap

**Implementation:**
```javascript
function shouldIncludeInSitemap(url, pageData) {
  if (pageData.pageType === "city_industry_hub") {
    return false; // Always exclude
  }
  // ... other logic
}
```

**Rationale:**
- Pages are noindex (no need in sitemap)
- Pages are navigation/bridge pages (not destination pages)
- Sitemap should only include indexable pages

### E.7 Example HTML Head Tags

#### Example 1: Canonical Self (Unique Navigational Function)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Healthcare Services in New York, NY | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/new-york-ny/industry/healthcare">
  <meta name="description" content="Healthcare SEO and digital marketing services in New York, NY. Industry-specific solutions for healthcare providers.">
</head>
```

#### Example 2: Canonical to City Page (Redundant with City)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Real Estate Services in Los Angeles, CA | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/los-angeles-ca">
  <meta name="description" content="Real estate SEO and digital marketing services in Los Angeles, CA.">
</head>
```

#### Example 3: Canonical to Industry Page (Redundant with Industry)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Legal Services in Chicago, IL | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/industries/legal">
  <meta name="description" content="Legal SEO and digital marketing services in Chicago, IL.">
</head>
```

#### Example 4: Canonical to City Page (Redundant with Both)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Restaurant Services in Miami, FL | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/miami-fl">
  <meta name="description" content="Restaurant SEO and digital marketing services in Miami, FL.">
</head>
```

#### Example 5: Canonical to Service Page (Single Service)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Healthcare Services in Boston, MA | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/boston-ma/industry/healthcare/seo">
  <meta name="description" content="Healthcare SEO services in Boston, MA.">
</head>
```

#### Example 6: Canonical Self (No Downstream Pages)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Aerospace Services in Portland, OR | WebVello</title>
  <meta name="robots" content="noindex,follow">
  <link rel="canonical" href="https://webvello.com/portland-or/industry/aerospace">
  <meta name="description" content="Aerospace SEO and digital marketing services in Portland, OR.">
</head>
```

### E.8 Example Canonical Decisions

#### Example 1: Unique Navigational Function
- **URL:** `/new-york-ny/industry/healthcare`
- **City page:** Lists all services but not industry-filtered
- **Industry page:** Lists all cities but not city-filtered
- **Downstream pages:** 8 City×Industry×Service pages exist
- **Content overlap:** 30% with City, 25% with Industry
- **Decision:** Canonical self (`/new-york-ny/industry/healthcare`)
- **Reason:** Unique navigation with 8+ downstream pages

#### Example 2: Redundant with City Page
- **URL:** `/los-angeles-ca/industry/real-estate`
- **City page:** Has "Industries We Serve" section with all real estate services
- **Industry page:** Lists cities but not comprehensive
- **Downstream pages:** 5 City×Industry×Service pages exist
- **Content overlap:** 85% with City page
- **Decision:** Canonical to `/los-angeles-ca`
- **Reason:** City page already provides comprehensive listing

#### Example 3: Redundant with Industry Page
- **URL:** `/chicago-il/industry/legal`
- **City page:** Lists services but not industry-specific
- **Industry page:** Has "Cities We Serve" section with all Chicago legal services
- **Downstream pages:** 6 City×Industry×Service pages exist
- **Content overlap:** 90% with Industry page
- **Decision:** Canonical to `/industries/legal`
- **Reason:** Industry page already provides comprehensive listing

#### Example 4: Redundant with Both
- **URL:** `/miami-fl/industry/restaurants`
- **City page:** Has "Restaurant Services" section
- **Industry page:** Has "Miami Services" section
- **Downstream pages:** 4 City×Industry×Service pages exist
- **Content overlap:** 80% with City, 75% with Industry
- **Decision:** Canonical to `/miami-fl`
- **Reason:** Both redundant, prefer City for geo-specificity

#### Example 5: Single Service Page
- **URL:** `/boston-ma/industry/healthcare`
- **City page:** Lists services but not comprehensive
- **Industry page:** Lists cities but not comprehensive
- **Downstream pages:** 1 City×Industry×Service page (`/boston-ma/industry/healthcare/seo`)
- **Content overlap:** 95% with service page
- **Decision:** Canonical to `/boston-ma/industry/healthcare/seo`
- **Reason:** Hub is essentially redirect to single service page

#### Example 6: No Downstream Pages
- **URL:** `/portland-or/industry/aerospace`
- **City page:** Lists services but not aerospace-specific
- **Industry page:** Lists cities but not Portland-specific
- **Downstream pages:** 0 City×Industry×Service pages exist
- **Content overlap:** N/A (placeholder content)
- **Decision:** Canonical self (`/portland-or/industry/aerospace`)
- **Reason:** Preserve link equity for future pages

### E.9 Monitoring Metrics

**Metrics to track for canonical strategy validation:**

#### E.9.1 Canonical Coverage
- **Metric:** % of City×Industry Hub pages with canonical tag
- **Target:** 100%
- **Alert:** If < 100%, investigate missing canonicals

#### E.9.2 Canonical Target Distribution
- **Metric:** Distribution of canonical targets (self vs. City vs. Industry vs. Service)
- **Target:** Monitor for unexpected patterns
- **Alert:** If > 50% canonical to self, review redundancy logic

#### E.9.3 Link Equity Flow
- **Metric:** Internal link count to City×Industry Hub pages
- **Target:** Monitor for link equity preservation
- **Alert:** If link count drops significantly, review internal linking

#### E.9.4 Duplicate Content Detection
- **Metric:** Content similarity score between Hub and parent pages
- **Target:** < 80% overlap for "unique navigational function"
- **Alert:** If overlap > 80% but canonical self, review decision logic

#### E.9.5 Downstream Page Count
- **Metric:** Number of City×Industry×Service pages per Hub
- **Target:** Track for "unique navigational function" classification
- **Alert:** If Hub has 0 downstream pages but canonical self, review decision

#### E.9.6 Search Console Canonical Issues
- **Metric:** Google Search Console canonical warnings/errors
- **Target:** 0 errors
- **Alert:** If errors detected, investigate canonical implementation

#### E.9.7 Index Status
- **Metric:** % of Hub pages correctly noindexed
- **Target:** 100% noindex
- **Alert:** If any Hub pages indexed, investigate robots meta implementation

#### E.9.8 Sitemap Exclusion
- **Metric:** % of Hub pages excluded from sitemap
- **Target:** 100% excluded
- **Alert:** If any Hub pages in sitemap, investigate sitemap generation logic

### E.10 Implementation Pseudocode

```javascript
function getCanonicalForCityIndustryHub(city, industry, pageData) {
  const { downstreamPages, cityPageContent, industryPageContent } = pageData;
  
  // E.2.5: Single City×Industry×Service page exists
  if (downstreamPages.length === 1 && downstreamPages[0].indexable) {
    return downstreamPages[0].url;
  }
  
  // E.2.6: No downstream pages
  if (downstreamPages.length === 0) {
    return `/${city}/industry/${industry}`; // Self
  }
  
  // Calculate content overlap
  const cityOverlap = calculateContentOverlap(pageData.content, cityPageContent);
  const industryOverlap = calculateContentOverlap(pageData.content, industryPageContent);
  
  // E.2.4: Redundant with both
  if (cityOverlap >= 0.8 && industryOverlap >= 0.8) {
    return `/${city}`; // Prefer City
  }
  
  // E.2.2: Redundant with City
  if (cityOverlap >= 0.8) {
    return `/${city}`;
  }
  
  // E.2.3: Redundant with Industry
  if (industryOverlap >= 0.8) {
    return `/industries/${industry}`;
  }
  
  // E.2.1: Unique navigational function
  if (downstreamPages.length >= 3 && 
      hasUniqueNavigation(pageData) &&
      !isRedundantListing(pageData, cityPageContent, industryPageContent)) {
    return `/${city}/industry/${industry}`; // Self
  }
  
  // Default: Self (preserve link equity)
  return `/${city}/industry/${industry}`;
}

function calculateContentOverlap(hubContent, parentContent) {
  // Returns: 0.0 to 1.0 (overlap percentage)
  // Compares service links, descriptions, case studies
  // Implementation: Jaccard similarity or text similarity
}

function hasUniqueNavigation(pageData) {
  // Returns: boolean
  // Checks: Unique filtering, 3+ downstream pages, unique content blocks
}

function isRedundantListing(pageData, cityContent, industryContent) {
  // Returns: boolean
  // Checks: Content overlap >= 80%, no unique navigation, duplicate service links
}
```

### E.11 Summary

**Key Principles:**
1. **Always noindex,follow** - Hub pages never index, links always followed
2. **Always exclude from sitemap** - Navigation pages don't belong in sitemap
3. **Canonical to strongest parent** - If redundant, consolidate authority
4. **Canonical self if unique** - If provides unique navigation, preserve link equity
5. **Monitor for changes** - Content overlap and downstream pages can change over time

**Decision Priority:**
1. Single service page exists → Canonical to service page
2. No downstream pages → Canonical self (preserve for future)
3. Redundant with both → Canonical to City page
4. Redundant with City → Canonical to City page
5. Redundant with Industry → Canonical to Industry page
6. Unique navigational function → Canonical self

---

## APPENDIX F: Governance Disclaimers + Data Integrity Controls

**Purpose:** Ensure trust, compliance, and data integrity across all WebVello pages containing pricing, market data, competitor comparisons, datasets, research findings, AI platform claims, or performance claims.

### F.1 Global Rules

**Scope:** Applies to any page containing:
- Pricing ranges or pricing guidance
- Market data or benchmarks
- Competitor comparisons
- Datasets or research findings
- AI platform claims (SGE/ChatGPT/Perplexity/Gemini)
- Performance claims or ROI estimates

**Core Principles:**
1. **Transparency:** All data must have traceable sources
2. **Accuracy:** No fabricated data, no invented results
3. **Timeliness:** Data must include last updated timestamp
4. **Methodology:** Clear explanation of how data was collected/calculated
5. **Limitations:** Honest disclosure of data limitations
6. **No Guarantees:** Clear disclaimers that results are not guaranteed
7. **Compliance:** Reference compliance/ethics pages where relevant
8. **Human Review:** High-risk claims require human approval

**Enforcement:**
- Missing governance blocks → Page flagged for review
- High-risk claims without approval → Page blocked from publishing
- Stale data (>90 days) → Warning flag, auto-flag for update

---

### F.2 Required Components

#### F.2.1 Data Source List (Required)

**Purpose:** Provide traceable citations for all data, claims, and benchmarks.

**Format:**
- Ordered list of data sources
- Each source includes:
  - **Source name** (e.g., "Google Search Console", "Internal Analytics", "Industry Report 2024")
  - **Source URL** (if publicly available)
  - **Source type** (internal | external | third_party | proprietary)
  - **Access date** (when data was accessed)
  - **Citation format** (APA, MLA, or simple link)

**Citation Policy:**
- **Internal data:** Must cite internal analytics, tools, or databases
- **External data:** Must link to original source (if public) or cite publication
- **Third-party data:** Must cite provider and license terms
- **Proprietary data:** Must disclose "Proprietary" and methodology

**Example:**
```html
<h3>Data Sources</h3>
<ol>
  <li>
    <strong>Google Search Console</strong> - 
    <a href="https://search.google.com/search-console" target="_blank" rel="noopener">search.google.com/search-console</a> 
    (Internal analytics, accessed 2026-01-20)
  </li>
  <li>
    <strong>Ahrefs Industry Report 2024</strong> - 
    <a href="https://ahrefs.com/research" target="_blank" rel="noopener">ahrefs.com/research</a> 
    (Third-party research, accessed 2026-01-15)
  </li>
  <li>
    <strong>Internal Client Database</strong> - 
    Proprietary data (Internal database, accessed 2026-01-25)
  </li>
</ol>
```

**CMS Field:** `data_sources[]` (array of objects with `name`, `url`, `type`, `access_date`)

---

#### F.2.2 Last Updated Timestamp (Required)

**Purpose:** Indicate data freshness and when page was last reviewed.

**Rules:**
- **Format:** ISO 8601 date-time (e.g., `2026-01-25T10:30:00Z`)
- **Display:** Human-readable format (e.g., "Last updated: January 25, 2026")
- **Update triggers:**
  - Data source updated → Update timestamp
  - Page content revised → Update timestamp
  - Methodology changed → Update timestamp
  - Quarterly review → Update timestamp (even if no changes)

**Staleness Thresholds:**
- **< 30 days:** Green (current)
- **30-90 days:** Yellow (review recommended)
- **> 90 days:** Red (update required, auto-flag)

**Example:**
```html
<p class="last-updated">
  <strong>Last updated:</strong> January 25, 2026
  <span class="data-freshness-indicator" data-freshness="current">●</span>
</p>
```

**CMS Field:** `last_updated` (ISO 8601 datetime, auto-updated on data changes)

---

#### F.2.3 Methodology Excerpt Block (Required)

**Purpose:** Explain how data was collected, calculated, or derived.

**Requirements:**
- **Minimum length:** 100 words
- **Must include:**
  - Data collection method
  - Calculation/formula (if applicable)
  - Sample size or scope
  - Time period covered
  - Any assumptions or adjustments
- **Link to full methodology:** Link to `/trust/our-methodology` or methodology page

**Example:**
```html
<h3>Methodology</h3>
<p>
  Data was collected from Google Search Console for 500+ client websites over a 12-month period (January 2025 - January 2026). 
  Organic traffic growth was calculated as the percentage change in total organic sessions year-over-year. 
  Only websites with consistent tracking and no major site migrations were included. 
  Industry benchmarks were derived from aggregated anonymized data across all clients in each industry vertical.
  <a href="/trust/our-methodology">View full methodology</a>.
</p>
```

**CMS Field:** `methodology_excerpt` (text, min 100 words, max 500 words)

---

#### F.2.4 Limitations + No-Guarantee Disclaimer (Required)

**Purpose:** Disclose data limitations and clarify that results are not guaranteed.

**Required Disclaimers by Type:**

**Pricing:**
- "Pricing ranges are estimates and may vary based on project scope, industry, and specific requirements."
- "Actual pricing will be determined after consultation and project assessment."
- "Prices are subject to change without notice."

**Market Data/Benchmarks:**
- "Benchmarks are based on aggregated data and may not reflect individual results."
- "Market conditions and industry trends can change rapidly."
- "Results may vary based on industry, location, competition, and other factors."

**Competitor Comparisons:**
- "Comparisons are based on publicly available information and may not reflect current features or pricing."
- "Feature sets and capabilities may change over time."
- "Comparison is for informational purposes only and does not constitute endorsement."

**Datasets/Research:**
- "Data is provided for informational purposes only."
- "Research findings are based on the sample and methodology described and may not be generalizable."
- "Data accuracy is not guaranteed and should be verified independently."

**AI Platform Claims:**
- "AI platform capabilities and features are subject to change."
- "Claims are based on publicly available information and testing as of [date]."
- "Actual performance may vary based on use case, content quality, and platform updates."

**Performance Claims/ROI Estimates:**
- "Results are not guaranteed and may vary based on individual circumstances."
- "Past performance does not guarantee future results."
- "ROI estimates are projections based on industry averages and may not reflect actual results."

**Example:**
```html
<h3>Limitations & Disclaimer</h3>
<ul>
  <li>Benchmarks are based on aggregated data and may not reflect individual results.</li>
  <li>Market conditions and industry trends can change rapidly.</li>
  <li>Results may vary based on industry, location, competition, and other factors.</li>
  <li>Data is provided for informational purposes only and accuracy is not guaranteed.</li>
</ul>
<p class="no-guarantee">
  <strong>No Guarantee:</strong> Results are not guaranteed and may vary based on individual circumstances. 
  Past performance does not guarantee future results.
</p>
```

**CMS Field:** `limitations[]` (array of strings), `no_guarantee_disclaimer` (boolean, auto-include standard text)

---

#### F.2.5 Compliance/Ethics References (Required if Applicable)

**Purpose:** Link to relevant compliance, ethics, or governance pages when data involves sensitive topics.

**When Required:**
- Data involves personal information → Link to `/trust/data-ethics`
- AI/ML claims or methodology → Link to `/trust/ai-ethics`
- Security or privacy claims → Link to `/trust/security-architecture`
- Research involving human subjects → Link to `/trust/compliance`
- Financial or legal claims → Link to `/trust/compliance`

**Example:**
```html
<p class="compliance-reference">
  For information about our data ethics and privacy practices, see 
  <a href="/trust/data-ethics">Data Ethics</a> and 
  <a href="/trust/security-architecture">Security Architecture</a>.
</p>
```

**CMS Field:** `compliance_references[]` (array of page slugs)

---

#### F.2.6 Review Workflow (High-Risk Claims)

**Purpose:** Ensure human approval for high-risk claims before publishing.

**High-Risk Claim Types:**
1. **Financial claims:** ROI estimates, revenue projections, cost savings
2. **Performance guarantees:** "We guarantee X% increase"
3. **Competitor comparisons:** Direct feature/price comparisons
4. **AI platform claims:** Specific performance metrics for SGE/ChatGPT/etc.
5. **Regulatory/compliance claims:** "We comply with X regulation"
6. **Client testimonials:** Specific metrics or results from clients

**Review Workflow:**
1. **Auto-flag:** System flags pages with high-risk claims
2. **Human review:** Designated reviewer (legal/compliance team) reviews
3. **Approval required:** Page cannot publish without approval
4. **Audit trail:** Log who approved, when, and any notes

**CMS Field:** `requires_review` (boolean), `review_status` (pending | approved | rejected), `reviewed_by` (user ID), `reviewed_at` (datetime), `review_notes` (text)

---

#### F.2.7 Content Integrity Checks

**Purpose:** Prevent fabricated data, invented results, or misleading claims.

**Automated Checks:**
- **Data source validation:** All data sources must exist and be accessible
- **Timestamp validation:** Last updated must be within last 90 days (warning) or 180 days (error)
- **Methodology validation:** Methodology excerpt must be ≥100 words
- **Limitation validation:** At least one limitation must be listed
- **Citation validation:** All external sources must have valid URLs

**Manual Checks (Human Review):**
- **Fabricated data:** Review for invented metrics or results
- **Misleading claims:** Review for exaggerated or unsubstantiated claims
- **Outdated data:** Review for stale data that may mislead
- **Missing context:** Review for claims that lack necessary context

**Content Integrity Rules:**
1. **No fabricated data:** All numbers must be traceable to sources
2. **No invented results:** All results must be from real data or clearly labeled as estimates
3. **No misleading claims:** Claims must be accurate and not exaggerated
4. **No outdated data:** Data >180 days old must be updated or removed
5. **No missing context:** Claims must include necessary context and limitations

**CMS Field:** `content_integrity_status` (valid | flagged | invalid), `integrity_checks[]` (array of check results)

---

### F.3 Template Insert Points

**Page Types Requiring Governance Disclaimers:**

| Page Type | Required Components | Risk Level |
|-----------|-------------------|------------|
| **Pricing Pages** | All (Data Sources, Last Updated, Methodology, Limitations, No-Guarantee) | High |
| **Research Pages** | All + Compliance References (if applicable) | High |
| **Tool Pages** (with data output) | All + Compliance References (if applicable) | Medium-High |
| **Comparison Pages** (with competitor data) | All + Compliance References (if applicable) | High |
| **AI/GEO Hub Pages** | Data Sources, Last Updated, Methodology, Limitations, Compliance References | Medium-High |
| **Case Study Pages** (with metrics) | Data Sources, Last Updated, Limitations, No-Guarantee | Medium |
| **Service Pages** (with performance claims) | Data Sources, Last Updated, Limitations, No-Guarantee | Medium |
| **Industry Pages** (with market data) | Data Sources, Last Updated, Methodology, Limitations | Medium |
| **City Pages** (with local data) | Data Sources, Last Updated, Limitations | Low-Medium |
| **Programmatic Pages** (with local/industry data) | Data Sources, Last Updated, Limitations | Low-Medium |

**Insert Point Location:**
- **Before CTA block:** Governance disclaimer appears before final CTA
- **After main content:** Governance disclaimer appears after main content blocks
- **Footer section:** Governance disclaimer appears in page footer (for high-risk pages)

---

### F.4 CMS Field Requirements

**Required CMS Fields for Governance Disclaimers:**

```typescript
interface GovernanceDisclaimer {
  // Data Sources
  data_sources: Array<{
    name: string;           // Required
    url?: string;           // Optional (if publicly available)
    type: 'internal' | 'external' | 'third_party' | 'proprietary';  // Required
    access_date: string;    // ISO 8601 date, required
  }>;
  
  // Timestamps
  last_updated: string;     // ISO 8601 datetime, required, auto-updated
  
  // Methodology
  methodology_excerpt: string;  // Required, min 100 words, max 500 words
  methodology_link?: string;    // Optional, link to full methodology page
  
  // Limitations
  limitations: string[];    // Required, array of limitation strings
  no_guarantee_disclaimer: boolean;  // Required, auto-include standard text
  
  // Compliance
  compliance_references?: string[];  // Optional, array of page slugs
  
  // Review
  requires_review: boolean;  // Auto-set based on claim types
  review_status: 'pending' | 'approved' | 'rejected';  // Required if requires_review
  reviewed_by?: string;    // User ID, required if approved/rejected
  reviewed_at?: string;    // ISO 8601 datetime, required if approved/rejected
  review_notes?: string;   // Optional, reviewer notes
  
  // Content Integrity
  content_integrity_status: 'valid' | 'flagged' | 'invalid';  // Auto-calculated
  integrity_checks: Array<{
    check: string;         // Check name
    status: 'pass' | 'fail' | 'warning';
    message: string;
  }>;
  
  // Scope
  applies_to: Array<'pricing' | 'market_data' | 'competitor' | 'dataset' | 'ai_claims' | 'performance'>;
}
```

**Field Validation Rules:**
- `data_sources`: Must have ≥1 source
- `last_updated`: Must be valid ISO 8601, must be within last 180 days
- `methodology_excerpt`: Must be 100-500 words
- `limitations`: Must have ≥1 limitation
- `no_guarantee_disclaimer`: Must be true for high-risk pages
- `review_status`: Must be set if `requires_review === true`

---

### F.5 Example Disclaimer Copy Patterns

#### F.5.1 Short Disclaimer (Low-Risk Pages)

```html
<div class="governance-disclaimer short">
  <p>
    <strong>Data Sources:</strong> Internal analytics, industry benchmarks. 
    <strong>Last updated:</strong> January 25, 2026. 
    Results may vary based on individual circumstances.
  </p>
</div>
```

#### F.5.2 Standard Disclaimer (Medium-Risk Pages)

```html
<div class="governance-disclaimer standard">
  <h3>Data Sources & Methodology</h3>
  <p><strong>Data Sources:</strong></p>
  <ul>
    <li>Google Search Console (Internal analytics, accessed 2026-01-20)</li>
    <li>Industry Report 2024 (Third-party research, accessed 2026-01-15)</li>
  </ul>
  <p><strong>Last updated:</strong> January 25, 2026</p>
  <p><strong>Methodology:</strong> Data collected from 500+ client websites over 12 months. 
  <a href="/trust/our-methodology">View full methodology</a>.</p>
  <p><strong>Limitations:</strong> Benchmarks are based on aggregated data and may not reflect individual results. 
  Market conditions can change rapidly.</p>
  <p class="no-guarantee"><strong>No Guarantee:</strong> Results are not guaranteed and may vary.</p>
</div>
```

#### F.5.3 Comprehensive Disclaimer (High-Risk Pages)

```html
<div class="governance-disclaimer comprehensive">
  <h3>Data Sources & Methodology</h3>
  
  <h4>Data Sources</h4>
  <ol>
    <li>
      <strong>Google Search Console</strong> - 
      <a href="https://search.google.com/search-console" target="_blank" rel="noopener">search.google.com/search-console</a> 
      (Internal analytics, accessed 2026-01-20)
    </li>
    <li>
      <strong>Ahrefs Industry Report 2024</strong> - 
      <a href="https://ahrefs.com/research" target="_blank" rel="noopener">ahrefs.com/research</a> 
      (Third-party research, accessed 2026-01-15)
    </li>
    <li>
      <strong>Internal Client Database</strong> - 
      Proprietary data (Internal database, accessed 2026-01-25)
    </li>
  </ol>
  
  <p><strong>Last updated:</strong> January 25, 2026</p>
  
  <h4>Methodology</h4>
  <p>
    Data was collected from Google Search Console for 500+ client websites over a 12-month period 
    (January 2025 - January 2026). Organic traffic growth was calculated as the percentage change 
    in total organic sessions year-over-year. Only websites with consistent tracking and no major 
    site migrations were included. Industry benchmarks were derived from aggregated anonymized data 
    across all clients in each industry vertical.
    <a href="/trust/our-methodology">View full methodology</a>.
  </p>
  
  <h4>Limitations</h4>
  <ul>
    <li>Benchmarks are based on aggregated data and may not reflect individual results.</li>
    <li>Market conditions and industry trends can change rapidly.</li>
    <li>Results may vary based on industry, location, competition, and other factors.</li>
    <li>Data is provided for informational purposes only and accuracy is not guaranteed.</li>
  </ul>
  
  <p class="no-guarantee">
    <strong>No Guarantee:</strong> Results are not guaranteed and may vary based on individual circumstances. 
    Past performance does not guarantee future results.
  </p>
  
  <p class="compliance-reference">
    For information about our data ethics and privacy practices, see 
    <a href="/trust/data-ethics">Data Ethics</a> and 
    <a href="/trust/security-architecture">Security Architecture</a>.
  </p>
</div>
```

#### F.5.4 Pricing-Specific Disclaimer

```html
<div class="governance-disclaimer pricing">
  <h3>Pricing Information</h3>
  <p><strong>Data Sources:</strong> Internal pricing database, market analysis. 
  <strong>Last updated:</strong> January 25, 2026</p>
  <p><strong>Methodology:</strong> Pricing ranges are estimates based on project scope, industry, 
  and historical data. Actual pricing will be determined after consultation.
  <a href="/trust/our-methodology">View full methodology</a>.</p>
  <p><strong>Limitations:</strong></p>
  <ul>
    <li>Pricing ranges are estimates and may vary based on project scope, industry, and specific requirements.</li>
    <li>Actual pricing will be determined after consultation and project assessment.</li>
    <li>Prices are subject to change without notice.</li>
  </ul>
  <p class="no-guarantee">
    <strong>No Guarantee:</strong> Pricing estimates are not binding and actual costs may vary.
  </p>
</div>
```

#### F.5.5 AI Platform Claims Disclaimer

```html
<div class="governance-disclaimer ai-claims">
  <h3>AI Platform Information</h3>
  <p><strong>Data Sources:</strong> Public platform documentation, internal testing. 
  <strong>Last updated:</strong> January 25, 2026</p>
  <p><strong>Methodology:</strong> Claims are based on publicly available information and internal 
  testing as of January 2026. Platform capabilities are subject to change.
  <a href="/trust/our-methodology">View full methodology</a>.</p>
  <p><strong>Limitations:</strong></p>
  <ul>
    <li>AI platform capabilities and features are subject to change.</li>
    <li>Claims are based on publicly available information and testing as of January 2026.</li>
    <li>Actual performance may vary based on use case, content quality, and platform updates.</li>
  </ul>
  <p class="no-guarantee">
    <strong>No Guarantee:</strong> Platform features and performance are not guaranteed and may change.
  </p>
  <p class="compliance-reference">
    For information about our AI ethics practices, see 
    <a href="/trust/ai-ethics">AI Ethics</a>.
  </p>
</div>
```

---

### F.6 Monitoring Strategy

**Automated Monitoring:**

#### F.6.1 Missing Governance Blocks Detection

**Check:** Pages with high-risk content types but missing governance disclaimer block.

**Implementation:**
```javascript
function checkGovernanceCompliance(page) {
  const riskFactors = detectRiskFactors(page);
  const hasDisclaimer = page.blocks.includes('BLOCK-GOVERNANCE-DISCLAIMER');
  
  if (riskFactors.length > 0 && !hasDisclaimer) {
    return {
      status: 'non-compliant',
      riskFactors: riskFactors,
      action: 'flag_for_review'
    };
  }
  
  return { status: 'compliant' };
}

function detectRiskFactors(page) {
  const factors = [];
  
  // Check for pricing
  if (page.content.includes('$') || page.content.match(/\$\d+|\d+\s*(per|month|year)/i)) {
    factors.push('pricing');
  }
  
  // Check for market data
  if (page.content.match(/(benchmark|average|median|industry\s+(data|report))/i)) {
    factors.push('market_data');
  }
  
  // Check for competitor comparisons
  if (page.content.match(/(vs\.|versus|compared\s+to|competitor)/i)) {
    factors.push('competitor');
  }
  
  // Check for AI platform claims
  if (page.content.match(/(SGE|ChatGPT|Perplexity|Gemini|AI\s+(search|platform))/i)) {
    factors.push('ai_claims');
  }
  
  // Check for performance claims
  if (page.content.match(/(guarantee|increase|improve|ROI|results?)/i)) {
    factors.push('performance');
  }
  
  return factors;
}
```

#### F.6.2 Stale Data Detection

**Check:** Pages with `last_updated` > 90 days (warning) or > 180 days (error).

**Implementation:**
```javascript
function checkDataFreshness(page) {
  const lastUpdated = new Date(page.governance_disclaimer.last_updated);
  const daysSinceUpdate = (Date.now() - lastUpdated) / (1000 * 60 * 60 * 24);
  
  if (daysSinceUpdate > 180) {
    return {
      status: 'error',
      message: 'Data is stale (>180 days). Update required.',
      action: 'block_publishing'
    };
  } else if (daysSinceUpdate > 90) {
    return {
      status: 'warning',
      message: 'Data is stale (>90 days). Review recommended.',
      action: 'flag_for_review'
    };
  }
  
  return { status: 'current' };
}
```

#### F.6.3 Content Integrity Validation

**Check:** Validate data sources, methodology, limitations.

**Implementation:**
```javascript
function validateContentIntegrity(page) {
  const disclaimer = page.governance_disclaimer;
  const checks = [];
  
  // Check data sources
  if (!disclaimer.data_sources || disclaimer.data_sources.length === 0) {
    checks.push({
      check: 'data_sources',
      status: 'fail',
      message: 'At least one data source is required'
    });
  }
  
  // Check methodology
  if (!disclaimer.methodology_excerpt || disclaimer.methodology_excerpt.split(' ').length < 100) {
    checks.push({
      check: 'methodology_excerpt',
      status: 'fail',
      message: 'Methodology excerpt must be at least 100 words'
    });
  }
  
  // Check limitations
  if (!disclaimer.limitations || disclaimer.limitations.length === 0) {
    checks.push({
      check: 'limitations',
      status: 'fail',
      message: 'At least one limitation is required'
    });
  }
  
  // Check last updated
  const lastUpdated = new Date(disclaimer.last_updated);
  if (isNaN(lastUpdated) || lastUpdated > new Date()) {
    checks.push({
      check: 'last_updated',
      status: 'fail',
      message: 'Last updated must be a valid past date'
    });
  }
  
  const hasFailures = checks.some(c => c.status === 'fail');
  
  return {
    status: hasFailures ? 'invalid' : 'valid',
    checks: checks
  };
}
```

#### F.6.4 Review Status Monitoring

**Check:** High-risk pages without required review approval.

**Implementation:**
```javascript
function checkReviewStatus(page) {
  if (page.governance_disclaimer.requires_review) {
    if (page.governance_disclaimer.review_status !== 'approved') {
      return {
        status: 'blocked',
        message: 'High-risk page requires review approval before publishing',
        action: 'block_publishing'
      };
    }
  }
  
  return { status: 'approved' };
}
```

**Monitoring Dashboard Metrics:**
- **Compliance rate:** % of high-risk pages with governance disclaimers
- **Stale data rate:** % of pages with data >90 days old
- **Review backlog:** Number of pages pending review
- **Content integrity score:** % of pages passing all integrity checks
- **Average data freshness:** Average days since last update

**Alert Thresholds:**
- Compliance rate < 95% → Alert
- Stale data rate > 20% → Alert
- Review backlog > 10 pages → Alert
- Content integrity score < 90% → Alert

---

### F.7 Summary

**Key Requirements:**
1. **Data Source List:** Required for all pages with data/claims
2. **Last Updated:** Required, must be within 180 days
3. **Methodology Excerpt:** Required, min 100 words
4. **Limitations:** Required, min 1 limitation
5. **No-Guarantee Disclaimer:** Required for high-risk pages
6. **Compliance References:** Required if applicable (data ethics, AI ethics, etc.)
7. **Human Review:** Required for high-risk claims before publishing
8. **Content Integrity:** Automated checks prevent fabricated data

**Enforcement:**
- Missing blocks → Flag for review
- Stale data → Warning (>90 days) or block (>180 days)
- High-risk without approval → Block publishing
- Content integrity failures → Block publishing

**Monitoring:**
- Automated compliance checks
- Stale data detection
- Content integrity validation
- Review status tracking
- Dashboard metrics and alerts

---

## APPENDIX D: Changes from v1.0 → v1.1

### 1. Programmatic Quality Gates System
- **Replaced:** Word-count gating (`wordCount ≥ 2000`) as primary index gate for City×Industry×Service pages.
- **Added:** Programmatic Quality Gates with 2-of-3 rule (Local Data + Industry Logic + Proof), scoring threshold, hard-fail triggers, hard-pass triggers.
- **Impact:** City×Industry×Service pages now use quality-based indexing instead of word-count threshold.

### 2. Uniqueness Injection Points
- **Added:** Required uniqueness slots for programmatic templates:
  - **BLOCK-LOCAL-DATA-CARD:** Required for City×Service and City×Industry×Service.
  - **BLOCK-INDUSTRY-KPI-MAP:** Required for City×Industry×Service.
  - **BLOCK-PROOF-SLOT:** Required for City×Service and City×Industry×Service.
- **Impact:** Programmatic pages must include unique data blocks; missing blocks → auto noindex.

### 3. City×Industry Hub Canonical Logic
- **Added:** Explicit if/then canonical rules:
  - If unique navigational function → canonical self.
  - If redundant with City/Industry pages → canonical to strongest parent.
- **Impact:** Clear canonical logic for navigation pages.

### 4. Entity Graph Page Upgrade
- **Added:** Required Relationship Table section (explicit semantic triples: subject → predicate → object).
- **Added:** Required SameAs References section (authoritative external references).
- **Added:** Required Used In Pages ItemList (pages where entity appears).
- **Added:** Required Connected Entities ItemList (graph adjacency).
- **Impact:** Entity pages now explicitly define knowledge graph relationships.

### 5. Governance Disclaimers + Data Integrity Controls
- **Added:** BLOCK-GOVERNANCE-DISCLAIMER block for pages with pricing ranges, market data, competitor comparisons, datasets, AI platform claims.
- **Required fields:** Data sources, last updated timestamp, methodology excerpt, limitations, no-guarantee disclaimer.
- **Impact:** Pricing, Research, Tool, Comparison, AI/GEO Hub pages must include governance disclaimers.

### 6. Tools Template API-Ready Upgrade
- **Added:** Output Contract section with:
  - JSON output structure
  - Export formats (CSV/JSON/PDF)
  - Validation rules
  - Error handling spec
  - Caching notes
  - Rate limiting notes (if public)
- **Impact:** Tool pages now include API contract specifications.

### 7. Global CTA Governance System
- **Added:** Section 19 with CTA rule table by funnel stage (TOFU/MOFU/BOFU).
- **Enforcement:** Exactly 1 primary CTA per page; max 1 secondary CTA; CTA must match funnel position.
- **Impact:** All page types now have enforced CTA consistency.

### New Blocks Added
- **BLOCK-LOCAL-DATA-CARD:** Uniqueness injection for programmatic pages.
- **BLOCK-INDUSTRY-KPI-MAP:** Uniqueness injection for programmatic pages.
- **BLOCK-PROOF-SLOT:** Uniqueness injection for programmatic pages.
- **BLOCK-GOVERNANCE-DISCLAIMER:** Data integrity controls.

### Updated Sections
- Section 7a (City×Service): Added required uniqueness slots.
- Section 7b (City×Industry Hub): Added canonical logic rules.
- Section 7c (City×Industry×Service): Replaced word-count gating with Programmatic Quality Gates; added required uniqueness slots.
- Section 11 (Entity Graph Pages): Added Relationship Table, SameAs References, Used In Pages, Connected Entities.
- Section 13 (Tool Pages): Added Output Contract section.
- Section 16 (Pricing Pages): Added required BLOCK-GOVERNANCE-DISCLAIMER.
- Appendix C: Updated City×Industry×Service index gating rule.

---

**End of Page Template System v1.1. For URL patterns and scale assumptions, see WEBVELLO_SEO_URL_ARCHITECTURE and WEBVELLO_SEO_URL_ARCHITECTURE_SUMMARY.**
