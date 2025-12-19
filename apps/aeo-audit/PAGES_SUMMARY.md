# Methodology & Limitations Pages

## Created Files

### Pages
1. `app/methodology/page.tsx` - Methodology page explaining what is measured
2. `app/limitations/page.tsx` - Limitations page explaining what is NOT measured

### Utilities
3. `lib/utils/versioning.ts` - Versioning utilities for rubric version and prompt hash

### Updates
4. `components/ShellLayout.tsx` - Added navigation links for Methodology and Limitations
5. `app/layout.tsx` - Updated to use versioning utility for rubric version

## Routes

- `/methodology` - Methodology page
- `/limitations` - Limitations page

Both pages are accessible via the left navigation sidebar in the audit tool.

## Content Overview

### Methodology Page (`/methodology`)

Explains what the audit measures:

1. **Crawlability & Indexability**
   - Robots.txt compliance
   - Sitemap presence and validity
   - HTTP status codes
   - Redirect chains
   - Crawl budget efficiency

2. **Structured Data & Schema Markup**
   - JSON-LD, microdata, RDFa
   - Organization schema
   - BreadcrumbList, FAQPage, Product schema
   - Schema validity

3. **Answer Readiness**
   - FAQ sections
   - Clear headings (H1-H3)
   - Sufficient word count
   - List formatting
   - Content organization

4. **Entity Clarity**
   - Canonical URLs
   - Meta descriptions
   - Title tags
   - Structured data for entity identification

5. **Measurement & Evidence**
   - Deterministic checks
   - Evidence capture with redaction
   - Scoring methodology

Also includes:
- Evidence capture & redaction process
- Scoring methodology (0-5 scale, weighted averages)
- Versioning & reproducibility (rubric version, prompt hash)
- Data sources (HTML, sitemaps, robots.txt, structured data)

### Limitations Page (`/limitations`)

Explains what the audit does NOT measure:

1. **Search Engine Rankings**
   - No ranking predictions or guarantees
   - Rankings depend on many factors beyond technical optimization

2. **Proprietary AI Ranking Systems**
   - No claims about specific AI system behavior
   - Proprietary algorithms are not publicly disclosed

3. **Content Quality or Relevance**
   - Measures structure, not quality
   - Content quality requires human evaluation

4. **User Experience (UX)**
   - Does not measure UX factors
   - Requires separate evaluation

5. **Business Metrics**
   - Does not measure traffic, conversions, revenue, ROI
   - Technical optimization is one factor among many

6. **Real-Time Performance**
   - Captures a snapshot at a point in time
   - Does not monitor real-time performance

Also includes:
- What we cannot guarantee (ranking improvements, traffic increases, etc.)
- Technical limitations (static analysis, sampling, rate limiting, etc.)
- Scope limitations (social media, email, paid ads, etc.)
- Interpretation guidelines
- Version information

## Versioning

Both pages display:
- **Rubric Version**: Retrieved from `getRubricVersionString()` (from rubric.json)
- **Prompt Hash**: Retrieved from `getPromptHash()` (SHA256 hash of prompt template)

## Design

- Uses consistent styling with the rest of the audit tool
- Dark theme (slate-950 background, slate-50 text)
- Rounded borders and cards for sections
- Clean, readable typography
- Procurement-friendly language (factual, no marketing claims)

## Navigation

The pages are accessible via:
- Left navigation sidebar: "Methodology" and "Limitations" links
- Direct URL: `/methodology` and `/limitations`

## Content Principles

- **Original**: All content is original, not copied from competitors
- **Factual**: Based on actual audit capabilities and limitations
- **Procurement-friendly**: Suitable for procurement and compliance reviews
- **Transparent**: Clear about what is and isn't measured
- **Versioned**: Includes rubric version and prompt hash for reproducibility

