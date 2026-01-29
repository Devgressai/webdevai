# WebVello Information Architecture (IA) Design

**Date:** 2025-01-24  
**Status:** Proposed (Implementation Ready)  
**Framework:** Next.js 14 App Router

---

## 1. Top Navigation Structure

### Desktop Navigation (components/layout/header.tsx)

#### Primary Navigation Items (Left to Right)

1. **Services** (Dropdown)
   - **Href:** `/services`
   - **Description:** "All Services"
   - **Children:**
     - **Design & Creative**
       - Website Design → `/services/website-design` (Popular)
       - Website Redesign → `/services/website-redesign`
       - Rapid Web Design → `/services/rapid-web-design`
       - UI/UX Design → `/services/ui-ux-design`
       - E-commerce Design → `/services/ecommerce-design`
       - Social Media Design → `/services/social-media-design`
       - Email Marketing Design → `/services/email-marketing-design`
       - App Design & Development → `/services/app-design-development`
     - **AI & Marketing**
       - AI Consulting → `/services/ai-consulting` (Popular)
       - AI SEO → `/services/ai-seo`
       - AI Digital Marketing → `/services/ai-digital-marketing`
       - Generative Engine Optimization → `/services/generative-engine-optimization`
       - Answer Engine Optimization → `/services/answer-engine-optimization`
       - Local SEO → `/services/local-seo`
       - Digital Marketing → `/services/digital-marketing`
       - ChatGPT Optimization → `/services/chatgpt-optimization`
       - AI GPT Integration → `/services/ai-gpt-integration`
       - AI Agent Development → `/services/ai-agent-development`
       - Enterprise GEO Services → `/services/enterprise-geo-services`
     - **Development & Technical**
       - Web Development → `/services/web-development` (Popular)
       - WordPress Development → `/services/wordpress-development`
       - Shopify Development → `/services/shopify-development`
       - Software Development → `/services/software-development`
       - Software Design & Development → `/services/software-design-development`
       - SEO Services → `/services/seo`
     - **Conversion Optimization**
       - CRO E-commerce → `/services/cro-ecommerce`
       - CRO Lead Generation → `/services/cro-lead-generation`
     - **View All Services** → `/services` (Footer link)

2. **Locations** (Dropdown)
   - **Href:** `/locations`
   - **Description:** "Cities We Serve"
   - **Children:**
     - **Top Cities** (Top 12 by population/priority)
       - New York, NY → `/new-york-ny`
       - Los Angeles, CA → `/los-angeles-ca`
       - Chicago, IL → `/chicago-il`
       - Houston, TX → `/houston-tx`
       - Phoenix, AZ → `/phoenix-az`
       - Philadelphia, PA → `/philadelphia-pa`
       - San Antonio, TX → `/san-antonio-tx`
       - San Diego, CA → `/san-diego-ca`
       - Dallas, TX → `/dallas-tx`
       - San Jose, CA → `/san-jose-ca`
       - Austin, TX → `/austin-tx`
       - Seattle, WA → `/seattle-wa`
     - **By State** (Link to state pages)
       - California → `/services/california`
       - Texas → `/services/texas`
       - New York → `/services/new-york`
       - Florida → `/services/florida`
       - Illinois → `/services/illinois`
       - **View All States** → `/locations` (with state filter)
     - **Special Locations**
       - Hawaii → `/locations/hawaii`
       - **View All Cities** → `/locations`

3. **Industries** (Dropdown)
   - **Href:** `/industries`
   - **Description:** "Solutions by Industry"
   - **Children:**
     - Finance → `/industries/finance` (if exists, else `/industries` with filter)
     - Technology → `/industries/technology`
     - Healthcare → `/industries/healthcare`
     - Manufacturing → `/industries/manufacturing`
     - Real Estate → `/industries/realestate`
     - Retail → `/industries/retail`
     - Education → `/industries/education`
     - Tourism → `/industries/tourism`
     - Aerospace → `/industries/aerospace`
     - Energy → `/industries/energy`
     - Government → `/industries/government`
     - Logistics → `/industries/logistics`
     - Automotive → `/industries/automotive`
     - Entertainment → `/industries/entertainment`
     - Fashion → `/industries/fashion`
     - Agriculture → `/industries/agriculture`
     - **View All Industries** → `/industries`

4. **Solutions** (Dropdown)
   - **Href:** `/solutions`
   - **Description:** "Problem Solvers"
   - **Children:**
     - Website Not Driving Leads → `/solutions/website-leads`
     - Declining Website Traffic → `/solutions/declining-traffic`
     - Website Not Converting → `/solutions/website-conversion`
     - Website Not Driving ROI → `/solutions/website-roi`
     - Not Showing Up on Google → `/solutions/google-visibility`
     - Agency Not Driving Results → `/solutions/agency-results`
     - **View All Solutions** → `/solutions`

5. **Resources** (Dropdown)
   - **Href:** `/resources`
   - **Description:** "Guides & Tools"
   - **Children:**
     - **Tools**
       - SEO Audit → `/seo-audit`
       - Website Speed Test → `/website-speed-test`
       - Enhanced Demo → `/enhanced-demo`
       - **View All Tools** → `/tools` (proposed new hub)
     - **Guides**
       - What is Local SEO → `/resources/what-is-local-seo`
       - Local SEO Checklist → `/resources/local-seo-checklist`
       - Local SEO Cost → `/resources/local-seo-cost`
       - **View All Resources** → `/resources`
     - **Blog** → `/blog`

6. **About** (Dropdown)
   - **Href:** `/about`
   - **Description:** "Learn More"
   - **Children:**
     - About Us → `/about`
     - Case Studies → `/case-studies`
     - Industries → `/industries`
     - Pricing → `/pricing`
     - Resources → `/resources`

7. **Blog** (Direct Link)
   - **Href:** `/blog`

8. **Contact** (CTA Button)
   - **Href:** `/contact`
   - **Label:** "Get Started"

### Mobile Navigation (components/layout/mobile-header.tsx)

**Structure:** Collapsible accordion menu with same hierarchy as desktop, optimized for touch.

**Top-Level Items:**
1. Services (expandable)
2. Locations (expandable)
3. Industries (expandable)
4. Solutions (expandable)
5. Resources (expandable)
6. About (expandable)
7. Blog (direct link)
8. Contact (CTA button)

**Implementation Note:** Mobile menu should use the same data structure as desktop navigation for consistency.

---

## 2. Footer Structure

### Footer Layout (components/layout/footer.tsx)

**Grid:** 5 columns on desktop (md:grid-cols-5), stacked on mobile

#### Column 1-2: Company Info (md:col-span-2)
- **Company Name:** Web Vello
- **Description:** Professional digital marketing services that drive real results. From AI-powered SEO to custom web development, we help businesses dominate their markets.
- **Social Links:**
  - Facebook → `https://www.facebook.com/people/Webvello/61583979327301/`
  - LinkedIn → `https://www.linkedin.com/company/webvello`
  - Email → `mailto:info@webvello.com`
  - Phone → `tel:+15305538883`
  - Website → `https://www.webvello.com`

#### Column 3: Services
- **Header:** "Services"
- **Links:**
  - Website Design → `/services/website-design`
  - Web Development → `/services/web-development`
  - AI Consulting → `/services/ai-consulting`
  - SEO Services → `/services/seo`
  - Local SEO → `/services/local-seo`
  - **View All Services** → `/services`

#### Column 4: Resources
- **Header:** "Resources"
- **Links:**
  - Blog → `/blog`
  - Case Studies → `/case-studies`
  - SEO Audit → `/seo-audit`
  - Website Speed Test → `/website-speed-test`
  - Resources Hub → `/resources`
  - **View All Tools** → `/tools` (proposed)

#### Column 5: Legal
- **Header:** "Legal"
- **Links:**
  - Privacy Policy → `/privacy`
  - Terms of Service → `/terms`
  - Accessibility → `/accessibility`
  - HTML Sitemap → `/sitemap`

#### Bottom Section: Top Cities + Locations Link

**Header:** "Top Cities"

**Implementation:** Dynamically generate from `lib/cities.ts` (citySlugs), sorted by:
1. Population (if available)
2. Alphabetical by state, then city name

**Display Logic:**
- Show top 20 cities in a 2-column grid
- Format: `{City Name}, {State}` → `/{city-slug}`
- Example: `New York, NY` → `/new-york-ny`

**Cities to Display (Top 20 from citySlugs):**
1. New York, NY → `/new-york-ny`
2. Los Angeles, CA → `/los-angeles-ca`
3. Chicago, IL → `/chicago-il`
4. Houston, TX → `/houston-tx`
5. Phoenix, AZ → `/phoenix-az`
6. Philadelphia, PA → `/philadelphia-pa`
7. San Antonio, TX → `/san-antonio-tx`
8. San Diego, CA → `/san-diego-ca`
9. Dallas, TX → `/dallas-tx`
10. San Jose, CA → `/san-jose-ca`
11. Austin, TX → `/austin-tx`
12. Jacksonville, FL → `/jacksonville-fl`
13. Fort Worth, TX → `/fort-worth-tx`
14. Columbus, OH → `/columbus-oh`
15. Indianapolis, IN → `/indianapolis-in`
16. Charlotte, NC → `/charlotte-nc`
17. San Francisco, CA → `/san-francisco-ca`
18. Seattle, WA → `/seattle-wa`
19. Denver, CO → `/denver-co`
20. Washington, DC → `/washington-dc`

**Below Cities List:**
- **Link:** "View All 109+ Locations" → `/locations`
- **Text:** "Nationwide coverage available"

#### Bottom Bar (Legal Links)
- Copyright: "© 2025 Web Vello. All rights reserved."
- Links: Privacy Policy, Terms of Service, HTML Sitemap, Contact

---

## 3. Pillar Map

### Canonical Pillars and Hubs

#### Pillar 1: Services (`/services`)
**Type:** Primary Revenue Pillar  
**Purpose:** Hub for all service offerings  
**URL Pattern:** `/services` (hub) + `/services/[service]` (leaves)

**Structure:**
- **Hub Page:** `/services`
  - Links to all service categories
  - Links to top services
  - Links to GEO services hub (`/services/geo-services`)
  - Links to state pages (grouped by state)
- **Service Categories:**
  - Design & Creative (`/services/website-design`, etc.)
  - AI & Marketing (`/services/ai-consulting`, etc.)
  - Development & Technical (`/services/web-development`, etc.)
  - Conversion Optimization (`/services/cro-ecommerce`, etc.)
- **Special Service Pages:**
  - GEO Services (`/services/geo-services`)
  - GEO City Pages (`/services/geo-{city}`) - 95+ pages
  - GEO Industry Pages (`/services/geo-{industry}`) - 15 pages
  - State Pages (`/services/{state}`) - 50 pages
  - City-Specific Services (`/services/{city}-{service}`) - 20+ static pages

**Internal Linking:**
- All service pages link back to `/services`
- Service pages link to related services
- Service pages link to top cities (8-10 cities)
- Service pages link to relevant resources

---

#### Pillar 2: Locations (`/locations`)
**Type:** Geographic Authority Pillar  
**Purpose:** Hub for city and location-based content  
**URL Pattern:** `/locations` (hub) + `/{city}` (city hubs) + `/{city}/[service]` (city×service)

**Structure:**
- **Hub Page:** `/locations`
  - Links to all 109 cities (grouped by state)
  - Links to state pages (`/services/{state}`)
  - Links to Hawaii sub-hub (`/locations/hawaii`)
  - Links to services (`/services`)
- **City Hubs:** `/{city}` (109 cities)
  - Links to Tier 1 city×service pages (8 services)
  - Links to city×industry hubs (`/{city}/industry/{industry}`)
  - Links to state page (`/services/{state}`)
  - Links to GEO page (`/services/geo-{city}`) if exists
- **City×Service Pages:** `/{city}/[service]` (872 Tier 1 pages)
  - Links back to city hub (`/{city}`)
  - Links to service page (`/services/[service]`)
  - Links to related city×service pages
- **City×Industry Hubs:** `/{city}/industry/[industry]` (1,635 pages, noindex)
  - Links to city×industry×service pages
  - Links back to city hub
- **City×Industry×Service:** `/{city}/industry/[industry]/[service]` (4,905 pages)
  - Links back to city×industry hub
  - Links to city hub
  - Links to service page

**Special Locations:**
- **Hawaii Sub-Hub:** `/locations/hawaii`
  - Links to `/locations/hawaii/honolulu`
  - Links to `/locations/hawaii/kona`
  - Links to `/locations` (parent)

**Internal Linking:**
- City hubs link to Tier 1 services (8 services)
- City hubs link to state page
- City hubs link to nearby cities (same state, 3-5 cities)
- State pages link to cities in that state
- City×Service pages link to city hub and service page

---

#### Pillar 3: Industries (`/industries`)
**Type:** Vertical Authority Pillar  
**Purpose:** Hub for industry-specific solutions  
**URL Pattern:** `/industries` (hub) + industry-specific pages

**Structure:**
- **Hub Page:** `/industries`
  - Links to all 15 industries
  - Links to relevant services
  - Links to city×industry pages (top cities per industry)
- **Industry Pages:** (15 industries)
  - Finance, Technology, Healthcare, Manufacturing, Real Estate, Retail, Education, Tourism, Aerospace, Energy, Government, Logistics, Automotive, Entertainment, Fashion, Agriculture
- **City×Industry Pages:** `/{city}/industry/[industry]` (1,635 pages, noindex)
  - Navigation hubs linking to city×industry×service pages

**Internal Linking:**
- Industry hub links to all industries
- Industry pages link to relevant services
- Industry pages link to top cities for that industry
- City×industry pages link to industry hub

---

#### Hub 4: Solutions (`/solutions`)
**Type:** Problem-Solution Hub  
**Purpose:** Address common business problems  
**URL Pattern:** `/solutions` (hub) + `/solutions/[slug]` (6 solution pages)

**Structure:**
- **Hub Page:** `/solutions`
  - Links to all 6 solution pages
  - Links to relevant services
  - Links to case studies
- **Solution Pages:**
  - Website Not Driving Leads → `/solutions/website-leads`
  - Declining Website Traffic → `/solutions/declining-traffic`
  - Website Not Converting → `/solutions/website-conversion`
  - Website Not Driving ROI → `/solutions/website-roi`
  - Not Showing Up on Google → `/solutions/google-visibility`
  - Agency Not Driving Results → `/solutions/agency-results`

**Internal Linking:**
- Solution pages link back to `/solutions`
- Solution pages link to relevant services
- Solution pages link to case studies
- Solution pages link to resources

---

#### Hub 5: Resources (`/resources`)
**Type:** Educational Hub  
**Purpose:** Guides, tools, and educational content  
**URL Pattern:** `/resources` (hub) + `/resources/[slug]` (resource pages) + `/blog/[slug]` (blog posts)

**Structure:**
- **Hub Page:** `/resources`
  - Links to resource pages
  - Links to blog posts
  - Links to tools
- **Resource Pages:**
  - What is Local SEO → `/resources/what-is-local-seo`
  - Local SEO Checklist → `/resources/local-seo-checklist`
  - Local SEO Cost → `/resources/local-seo-cost`
- **Blog:** `/blog` (hub) + `/blog/[slug]` (54 posts)
  - Blog index links to all posts
  - Blog posts link to relevant services, cities, industries

**Internal Linking:**
- Resource pages link back to `/resources`
- Resource pages link to relevant services
- Blog posts link to relevant services, cities, industries
- Resources link to tools

---

#### Hub 6: Tools (`/tools`) - **PROPOSED NEW HUB**
**Type:** Utility Hub  
**Purpose:** Free tools and audits  
**URL Pattern:** `/tools` (hub) + individual tool pages

**Structure:**
- **Hub Page:** `/tools` (NEW - needs to be created)
  - Links to all tools
  - Description of each tool
- **Tool Pages:**
  - SEO Audit → `/seo-audit`
  - Website Speed Test → `/website-speed-test`
  - Enhanced Demo → `/enhanced-demo`

**Internal Linking:**
- Tool pages link back to `/tools`
- Tool pages link to relevant services
- Tool pages link to resources

**Implementation Note:** Create `/app/tools/page.tsx` as a hub page listing all tools.

---

## 4. Internal Linking Policy by Page Type

### City Hub Pages (`/{city}`)

**Minimum Required Links:**

1. **Tier 1 Services Section** (Required)
   - Link to all 8 Tier 1 city×service pages:
     - `/{city}/website-design`
     - `/{city}/web-development`
     - `/{city}/seo`
     - `/{city}/local-seo`
     - `/{city}/digital-marketing`
     - `/{city}/ai-seo`
     - `/{city}/ai-consulting`
     - `/{city}/ui-ux-design`
   - Section title: "Our Services in {City Name}"
   - Format: Grid or list with service icons

2. **State Page Link** (Required)
   - Link to `/services/{state}` (e.g., `/services/california` for Los Angeles)
   - Text: "View {State} Services" or "Services in {State}"

3. **Industries Section** (Recommended)
   - Link to top 3-5 city×industry hubs: `/{city}/industry/{industry}`
   - Section title: "Industries We Serve in {City Name}"

4. **Nearby Cities** (Recommended)
   - Link to 3-5 cities in the same state
   - Section title: "Also Serving"

5. **GEO Page Link** (If exists)
   - Link to `/services/geo-{city}` if page exists
   - Text: "GEO Services in {City Name}"

6. **Breadcrumb** (Required)
   - Home → Locations → {State} → {City}

**Optional Links:**
- Link to `/locations` hub
- Link to relevant blog posts
- Link to case studies

---

### Service Pages (`/services/[service]`)

**Minimum Required Links:**

1. **Back to Services Hub** (Required)
   - Link to `/services`
   - Text: "View All Services" or "← Back to Services"

2. **Top Cities Section** (Required)
   - Link to 8-10 top city×service pages: `/{city}/[service]`
   - Cities: New York, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, San Jose
   - Section title: "Available in {City Count}+ Cities"

3. **Related Services** (Recommended)
   - Link to 3-5 related services
   - Example: SEO page links to Local SEO, AI SEO, Digital Marketing

4. **Resources Section** (Recommended)
   - Link to relevant resource pages
   - Link to relevant blog posts
   - Link to case studies

5. **Breadcrumb** (Required)
   - Home → Services → {Service Name}

**Optional Links:**
- Link to industry-specific service pages
- Link to state pages
- Link to tools (if relevant)

---

### Locations Hub (`/locations`)

**Minimum Required Links:**

1. **Cities by State** (Required)
   - Link to all 109 cities, grouped by state
   - Format: State header → list of cities
   - Each city links to `/{city}`

2. **State Pages** (Required)
   - Link to all 50 state pages: `/services/{state}`
   - Section: "Services by State"

3. **Services Link** (Required)
   - Link to `/services`
   - Text: "View All Services"

4. **Solutions Link** (Recommended)
   - Link to `/solutions`
   - Text: "Common Solutions"

5. **Special Locations** (Required)
   - Link to `/locations/hawaii`
   - Link to Hawaii cities

**Optional Links:**
- Link to blog posts about locations
- Link to case studies by location

---

### Industries Hub (`/industries`)

**Minimum Required Links:**

1. **All Industries** (Required)
   - Link to all 15 industries
   - Format: Grid or list with industry icons

2. **Relevant Services** (Required)
   - Link to services relevant to each industry
   - Example: Healthcare → Medical Website Design, Healthcare SEO

3. **Top Cities by Industry** (Recommended)
   - Link to top 5-10 cities for each industry
   - Example: Technology → San Francisco, San Jose, Austin, Seattle

4. **City×Industry Pages** (Recommended)
   - Link to city×industry hubs for top cities
   - Format: `/{city}/industry/{industry}`

**Optional Links:**
- Link to case studies by industry
- Link to blog posts about industries
- Link to resources

---

### Solutions Hub (`/solutions`)

**Minimum Required Links:**

1. **All Solutions** (Required)
   - Link to all 6 solution pages

2. **Relevant Services** (Required)
   - Link to services that solve each problem
   - Example: "Not Showing Up on Google" → SEO, Local SEO, AI SEO

3. **Case Studies** (Recommended)
   - Link to relevant case studies

4. **Resources** (Recommended)
   - Link to relevant resource pages

---

### Resources Hub (`/resources`)

**Minimum Required Links:**

1. **Resource Pages** (Required)
   - Link to all resource pages

2. **Blog Posts** (Required)
   - Link to blog index (`/blog`)
   - Link to featured/recent blog posts

3. **Tools** (Required)
   - Link to `/tools` (proposed) or individual tools
   - Link to SEO Audit, Website Speed Test, Enhanced Demo

4. **Related Services** (Recommended)
   - Link to services mentioned in resources

---

### Tools Hub (`/tools`) - **PROPOSED**

**Minimum Required Links:**

1. **All Tools** (Required)
   - Link to SEO Audit (`/seo-audit`)
   - Link to Website Speed Test (`/website-speed-test`)
   - Link to Enhanced Demo (`/enhanced-demo`)

2. **Related Services** (Required)
   - Link to services that use these tools
   - Example: SEO Audit → SEO Services, Local SEO

3. **Resources** (Recommended)
   - Link to `/resources`
   - Link to relevant blog posts

---

### Blog Posts (`/blog/[slug]`)

**Minimum Required Links:**

1. **Back to Blog** (Required)
   - Link to `/blog`
   - Text: "← Back to Blog"

2. **Related Services** (Recommended)
   - Link to 2-3 services mentioned in the post

3. **Related Cities** (If applicable)
   - Link to 2-3 cities mentioned in the post

4. **Related Industries** (If applicable)
   - Link to 1-2 industries mentioned in the post

5. **Related Blog Posts** (Recommended)
   - Link to 2-3 related blog posts

**Optional Links:**
- Link to case studies
- Link to resources
- Link to tools

---

## 5. Implementation Notes

### Data Sources

- **Cities:** Import from `lib/cities.ts` → `citySlugs` (109 cities)
- **Tier 1 Services:** Import from `lib/seo/index-policy.ts` → `TIER1_SERVICES` (8 services)
- **Industries:** Import from `lib/industries.ts` → `industrySlugs` (15 industries)
- **Top Cities:** Sort `citySlugs` by population (if available) or use hardcoded top 20

### Component Updates Required

1. **Header Component** (`components/layout/header.tsx`)
   - Add "Locations" dropdown with top cities and state links
   - Add "Resources" dropdown with tools and guides
   - Update "Services" dropdown structure
   - Keep existing "About" and "Blog" links

2. **Footer Component** (`components/layout/footer.tsx`)
   - Replace hardcoded 36 cities with dynamic list from `citySlugs` (top 20)
   - Add "Resources" column
   - Add "Legal" column
   - Update "Services" column links
   - Add "View All 109+ Locations" link

3. **Mobile Header** (`components/layout/mobile-header.tsx`)
   - Mirror desktop navigation structure
   - Add Locations, Resources dropdowns
   - Keep existing structure for consistency

### New Pages to Create

1. **Tools Hub** (`/app/tools/page.tsx`)
   - List all tools (SEO Audit, Website Speed Test, Enhanced Demo)
   - Link to each tool page
   - Link to related services and resources

### URL Patterns (No Changes)

- Keep all existing URL patterns
- No redirects required
- No URL structure changes

---

## 6. SEO Governance Integration

### Index Policy Compliance

All internal linking must respect `lib/seo/index-policy.ts`:

- **City×Service Pages:** Only link to Tier 1 services (8 services)
- **City×Industry Hubs:** Link to these pages (noindex but follow for link equity)
- **City×Industry×Service:** Link to these pages if they pass quality gates

### Canonical Strategy

- All pages use explicit canonical tags (via `getSeoDirectives()`)
- No circular canonicals
- City pages are primary (GEO pages canonicalize to city pages if duplicate)

---

**End of Information Architecture Document**
