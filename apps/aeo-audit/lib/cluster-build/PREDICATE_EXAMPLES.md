# Cluster Predicate Rules - Examples

## Overview

Cluster predicates identify page templates and characteristics. Each predicate is a boolean that helps classify pages into meaningful clusters.

## Predicate Examples

### 1. `isHomepage`

**Purpose**: Identifies homepage/landing pages

**Rules**:
- URL is exactly `/`, `/home`, or `/index`
- Canonical URL ends with `/`, `/home`, or `/index`

**Examples**:

```typescript
// Example 1: Root URL
url: "https://example.com/"
canonical: "https://example.com/"
isHomepage: true

// Example 2: Home path
url: "https://example.com/home"
canonical: "https://example.com/home"
isHomepage: true

// Example 3: Index path
url: "https://example.com/index"
canonical: "https://example.com/index"
isHomepage: true

// Example 4: Not homepage (has path)
url: "https://example.com/about"
canonical: "https://example.com/about"
isHomepage: false
```

### 2. `isServiceTemplate`

**Purpose**: Identifies service/product pages

**Rules**:
- URL contains `/service` or `/services`
- URL pattern has numeric segments (IDs) AND contains `/service`
- JSON-LD types include `Service` or `Offering`

**Examples**:

```typescript
// Example 1: Service path
url: "https://example.com/services/web-design"
isServiceTemplate: true

// Example 2: Service with ID
url: "https://example.com/service/123"
urlPattern: "/service/{id}"
isServiceTemplate: true

// Example 3: Service schema
url: "https://example.com/offerings/seo"
jsonLdTypes: ["Service", "Offering"]
isServiceTemplate: true

// Example 4: Not a service
url: "https://example.com/blog/post"
isServiceTemplate: false
```

### 3. `isLocationTemplate`

**Purpose**: Identifies location/city/state pages

**Rules**:
- URL contains `/location`, `/locations`, `/city`, `/cities`, `/state`, `/states`
- URL pattern has numeric segments AND contains `/location` or `/city`
- JSON-LD types include `LocalBusiness` or `Place`

**Examples**:

```typescript
// Example 1: Location path
url: "https://example.com/locations/new-york"
isLocationTemplate: true

// Example 2: City path
url: "https://example.com/cities/seattle"
isLocationTemplate: true

// Example 3: State path
url: "https://example.com/states/california"
isLocationTemplate: true

// Example 4: Location with ID
url: "https://example.com/location/456"
urlPattern: "/location/{id}"
isLocationTemplate: true

// Example 5: LocalBusiness schema
url: "https://example.com/office/seattle"
jsonLdTypes: ["LocalBusiness", "Place"]
isLocationTemplate: true

// Example 6: Not a location
url: "https://example.com/services/seo"
isLocationTemplate: false
```

### 4. `isBlogTemplate`

**Purpose**: Identifies blog/article pages

**Rules**:
- URL contains `/blog`, `/post`, `/article`, `/news`
- URL pattern has numeric or UUID segments (common for blog posts)
- JSON-LD types include `Article`, `BlogPosting`, or `NewsArticle`

**Examples**:

```typescript
// Example 1: Blog path
url: "https://example.com/blog/my-post"
isBlogTemplate: true

// Example 2: Post path
url: "https://example.com/posts/2024/seo-tips"
isBlogTemplate: true

// Example 3: Article path
url: "https://example.com/articles/how-to-seo"
isBlogTemplate: true

// Example 4: Blog with numeric ID
url: "https://example.com/blog/123"
urlPattern: "/blog/{id}"
isBlogTemplate: true

// Example 5: Blog with UUID
url: "https://example.com/post/a1b2c3d4-e5f6-7890-abcd-ef1234567890"
urlPattern: "/post/{uuid}"
isBlogTemplate: true

// Example 6: Article schema
url: "https://example.com/content/seo-guide"
jsonLdTypes: ["Article", "BlogPosting"]
isBlogTemplate: true

// Example 7: Not a blog
url: "https://example.com/services/seo"
isBlogTemplate: false
```

### 5. `isPolicyTemplate`

**Purpose**: Identifies policy/legal pages

**Rules**:
- URL contains `/policy`, `/policies`, `/privacy`, `/terms`, `/legal`, `/cookie`, `/gdpr`

**Examples**:

```typescript
// Example 1: Privacy policy
url: "https://example.com/privacy-policy"
isPolicyTemplate: true

// Example 2: Terms of service
url: "https://example.com/terms"
isPolicyTemplate: true

// Example 3: Cookie policy
url: "https://example.com/cookie-policy"
isPolicyTemplate: true

// Example 4: GDPR
url: "https://example.com/gdpr"
isPolicyTemplate: true

// Example 5: Legal
url: "https://example.com/legal/terms"
isPolicyTemplate: true

// Example 6: Not a policy
url: "https://example.com/services/seo"
isPolicyTemplate: false
```

### 6. `hasFaqSection`

**Purpose**: Identifies pages with FAQ sections

**Rules**:
- JSON-LD types include `FAQ` or `Question`
- Headings (H1, H2, H3) contain "FAQ", "Frequently Asked", or "Questions"

**Examples**:

```typescript
// Example 1: FAQ schema
url: "https://example.com/faq"
jsonLdTypes: ["FAQPage", "Question"]
hasFaqSection: true

// Example 2: FAQ heading
url: "https://example.com/help"
headings: {
  h1: ["Help Center"],
  h2: ["Frequently Asked Questions"]
}
hasFaqSection: true

// Example 3: Questions heading
url: "https://example.com/support"
headings: {
  h2: ["Common Questions"]
}
hasFaqSection: true

// Example 4: Question schema
url: "https://example.com/service/seo"
jsonLdTypes: ["Service", "Question"]
hasFaqSection: true

// Example 5: No FAQ
url: "https://example.com/services/seo"
headings: { h1: ["SEO Services"] }
jsonLdTypes: ["Service"]
hasFaqSection: false
```

## Combined Predicate Examples

Pages can have multiple predicates:

```typescript
// Homepage with FAQ
url: "https://example.com/"
isHomepage: true
hasFaqSection: true
isServiceTemplate: false
isLocationTemplate: false
isBlogTemplate: false
isPolicyTemplate: false

// Service page with FAQ
url: "https://example.com/services/seo"
isServiceTemplate: true
hasFaqSection: true
isHomepage: false

// Location service page
url: "https://example.com/locations/seattle/services"
isLocationTemplate: true
isServiceTemplate: true
isHomepage: false
```

## Predicate Logic

### Evaluation Order

1. Check URL patterns first (fastest)
2. Check URL path segments
3. Check JSON-LD types (if available)
4. Check headings (if available)

### Multiple Matches

A page can match multiple predicates:
- `isServiceTemplate: true` AND `hasFaqSection: true`
- `isLocationTemplate: true` AND `isServiceTemplate: true`

### Cluster Naming

Cluster names are generated from predicates (priority order):
1. `isHomepage` → "Homepage"
2. `isServiceTemplate` → "Service Template"
3. `isLocationTemplate` → "Location Template"
4. `isBlogTemplate` → "Blog Template"
5. `isPolicyTemplate` → "Policy Template"
6. Fallback → "Template: {url_pattern}"

## Customization

Predicates can be extended by:
1. Adding new URL patterns
2. Adding new JSON-LD type checks
3. Adding new heading pattern checks
4. Adding custom logic in `computePredicates()`

## Testing Predicates

```typescript
import { computePredicates } from '@/lib/cluster-build/predicates'

const predicates = computePredicates(
  "https://example.com/services/seo",
  {
    jsonLdTypes: ["Service"],
    headings: {
      h1: ["SEO Services"],
      h2: ["Frequently Asked Questions"]
    }
  }
)

console.log(predicates)
// {
//   isHomepage: false,
//   isServiceTemplate: true,
//   isLocationTemplate: false,
//   isBlogTemplate: false,
//   isPolicyTemplate: false,
//   hasFaqSection: true
// }
```

