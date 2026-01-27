# Programmatic Uniqueness Injection Points Specification

**Version:** 1.0  
**Classification:** Enterprise-Grade AI-Native Growth Platform  
**Audience:** Programmatic SEO engineers, CMS engineers, Data engineers, Automation engineers  
**Status:** Production-ready implementation specification

---

## OVERVIEW

**Purpose:** Define required uniqueness injection blocks for programmatic pages to ensure indexability and quality. Missing any required block → auto noindex,follow.

**Scope:** City×Service and City×Industry×Service templates.

**Index Control Logic:**
```
if (missing LOCAL_DATA_CARD || missing INDUSTRY_KPI_MAP || missing PROOF_SLOT) {
  indexable = false;
  robots = "noindex,follow";
} else {
  indexable = eligible_for_quality_gates_scoring();
}
```

---

## 1. LOCAL DATA CARD

**Block ID:** `BLOCK-LOCAL-DATA-CARD`  
**Required For:** City×Service, City×Industry×Service  
**Purpose:** Inject measurable local market data to create unique, valuable content per city+service combination.

### 1.1 Block Specification

| Attribute | Spec |
|-----------|------|
| **Purpose** | Local market intelligence: SERP features, competitor landscape, review environment, demand indicators |
| **Required** | Yes (missing → noindex) |
| **Data Sources** | SERP API, Review aggregator API, Market research API, CMS `local_data` field |
| **Refresh Frequency** | Monthly (SERP), Weekly (reviews), Quarterly (market data) |
| **Cache Duration** | 7 days (SERP), 1 day (reviews), 30 days (market) |
| **Validation** | All required fields must have non-null values |

### 1.2 Required Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `city` | string | ✓ | City slug (from `cityDataSlugs`) | `"new-york-ny"` |
| `state` | string | ✓ | State abbreviation | `"NY"` |
| `service` | string | ✓ | Service slug | `"seo"` |
| `serp_data` | object | ✓ | SERP feature observations | See 1.3 |
| `market_data` | object | ✓ | Market demand indicators | See 1.3 |
| `review_data` | object | ✓ | Review count/sentiment ranges | See 1.3 |
| `competitor_data` | object | ✓ | Competitor category clustering | See 1.3 |
| `ranking_environment` | object | ✓ | Local ranking environment notes | See 1.3 |
| `last_updated` | ISO8601 | ✓ | Last data refresh timestamp | `"2026-01-25T10:00:00Z"` |
| `data_sources` | array | ✓ | Source URLs/APIs used | `["serp_api", "google_business_api"]` |

### 1.3 JSON Shape

```json
{
  "block_type": "LOCAL_DATA_CARD",
  "city": "new-york-ny",
  "state": "NY",
  "service": "seo",
  "serp_data": {
    "avg_competitor_count": 45,
    "local_pack_presence": true,
    "local_pack_competitors": 3,
    "organic_results_above_fold": 10,
    "serp_features": {
      "local_pack": true,
      "people_also_ask": true,
      "related_searches": true,
      "knowledge_panel": false,
      "video_results": true,
      "image_results": true
    },
    "top_3_difficulty": "high",
    "avg_domain_authority_top_10": 65,
    "serp_volatility": "medium",
    "last_serp_check": "2026-01-25T08:00:00Z"
  },
  "market_data": {
    "market_size": "large",
    "estimated_local_businesses": 1250,
    "growth_rate": "positive",
    "key_players": [
      {
        "name": "Local SEO Agency A",
        "domain": "localseoagencya.com",
        "estimated_share": "15%"
      },
      {
        "name": "NYC Digital Marketing",
        "domain": "nycdigital.com",
        "estimated_share": "12%"
      }
    ],
    "market_maturity": "mature",
    "barriers_to_entry": "high",
    "last_market_check": "2026-01-20T00:00:00Z"
  },
  "review_data": {
    "avg_rating_range": {
      "min": 4.2,
      "max": 4.8,
      "median": 4.5
    },
    "review_count_range": {
      "min": 15,
      "max": 250,
      "median": 85
    },
    "review_velocity": "high",
    "sentiment_distribution": {
      "positive": 0.75,
      "neutral": 0.15,
      "negative": 0.10
    },
    "common_review_themes": [
      "response time",
      "results",
      "communication",
      "pricing"
    ],
    "last_review_check": "2026-01-25T06:00:00Z"
  },
  "competitor_data": {
    "competitor_categories": [
      {
        "category": "Enterprise Agencies",
        "count": 8,
        "avg_rating": 4.6,
        "avg_review_count": 120
      },
      {
        "category": "Boutique Specialists",
        "count": 15,
        "avg_rating": 4.4,
        "avg_review_count": 45
      },
      {
        "category": "Full-Service Marketing",
        "count": 12,
        "avg_rating": 4.3,
        "avg_review_count": 95
      }
    ],
    "competitor_clustering": "fragmented",
    "market_concentration": "low",
    "last_competitor_check": "2026-01-22T00:00:00Z"
  },
  "ranking_environment": {
    "local_seo_importance": "critical",
    "google_business_optimization": "high",
    "review_importance": "very_high",
    "citation_consistency": "important",
    "local_content_signals": "important",
    "notable_ranking_factors": [
      "Google Business Profile optimization",
      "Review quantity and quality",
      "Local citations",
      "Local content relevance"
    ],
    "ranking_difficulty": "high",
    "time_to_rank_estimate": "3-6 months"
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "SERP API",
      "url": "https://api.serpdata.com",
      "type": "serp_analysis"
    },
    {
      "name": "Google Business API",
      "url": "https://developers.google.com/my-business",
      "type": "review_data"
    },
    {
      "name": "Market Research Database",
      "url": "internal://market-research",
      "type": "market_intelligence"
    }
  ]
}
```

### 1.4 Example Payloads

#### Example 1: New York, NY × SEO

```json
{
  "block_type": "LOCAL_DATA_CARD",
  "city": "new-york-ny",
  "state": "NY",
  "service": "seo",
  "serp_data": {
    "avg_competitor_count": 85,
    "local_pack_presence": true,
    "local_pack_competitors": 3,
    "organic_results_above_fold": 10,
    "serp_features": {
      "local_pack": true,
      "people_also_ask": true,
      "related_searches": true,
      "knowledge_panel": true,
      "video_results": true,
      "image_results": true
    },
    "top_3_difficulty": "very_high",
    "avg_domain_authority_top_10": 72,
    "serp_volatility": "high",
    "last_serp_check": "2026-01-25T08:00:00Z"
  },
  "market_data": {
    "market_size": "very_large",
    "estimated_local_businesses": 2500,
    "growth_rate": "positive",
    "key_players": [
      {
        "name": "NYC SEO Experts",
        "domain": "nycseoexperts.com",
        "estimated_share": "18%"
      },
      {
        "name": "Manhattan Digital",
        "domain": "manhattandigital.com",
        "estimated_share": "15%"
      }
    ],
    "market_maturity": "very_mature",
    "barriers_to_entry": "very_high",
    "last_market_check": "2026-01-20T00:00:00Z"
  },
  "review_data": {
    "avg_rating_range": {
      "min": 4.3,
      "max": 4.9,
      "median": 4.6
    },
    "review_count_range": {
      "min": 25,
      "max": 450,
      "median": 150
    },
    "review_velocity": "very_high",
    "sentiment_distribution": {
      "positive": 0.78,
      "neutral": 0.14,
      "negative": 0.08
    },
    "common_review_themes": [
      "ROI results",
      "expertise",
      "communication",
      "transparency"
    ],
    "last_review_check": "2026-01-25T06:00:00Z"
  },
  "competitor_data": {
    "competitor_categories": [
      {
        "category": "Enterprise SEO Agencies",
        "count": 12,
        "avg_rating": 4.7,
        "avg_review_count": 200
      },
      {
        "category": "Boutique SEO Specialists",
        "count": 25,
        "avg_rating": 4.5,
        "avg_review_count": 75
      },
      {
        "category": "Full-Service Digital Agencies",
        "count": 18,
        "avg_rating": 4.4,
        "avg_review_count": 140
      }
    ],
    "competitor_clustering": "fragmented",
    "market_concentration": "low",
    "last_competitor_check": "2026-01-22T00:00:00Z"
  },
  "ranking_environment": {
    "local_seo_importance": "critical",
    "google_business_optimization": "very_high",
    "review_importance": "critical",
    "citation_consistency": "critical",
    "local_content_signals": "very_important",
    "notable_ranking_factors": [
      "Google Business Profile optimization",
      "Review quantity and quality",
      "Local citations and NAP consistency",
      "Local content relevance",
      "Domain authority",
      "Backlink profile"
    ],
    "ranking_difficulty": "very_high",
    "time_to_rank_estimate": "4-8 months"
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "SERP API",
      "url": "https://api.serpdata.com",
      "type": "serp_analysis"
    },
    {
      "name": "Google Business API",
      "url": "https://developers.google.com/my-business",
      "type": "review_data"
    }
  ]
}
```

#### Example 2: Austin, TX × Website Design

```json
{
  "block_type": "LOCAL_DATA_CARD",
  "city": "austin-tx",
  "state": "TX",
  "service": "website-design",
  "serp_data": {
    "avg_competitor_count": 35,
    "local_pack_presence": true,
    "local_pack_competitors": 3,
    "organic_results_above_fold": 10,
    "serp_features": {
      "local_pack": true,
      "people_also_ask": true,
      "related_searches": true,
      "knowledge_panel": false,
      "video_results": true,
      "image_results": true
    },
    "top_3_difficulty": "medium",
    "avg_domain_authority_top_10": 58,
    "serp_volatility": "medium",
    "last_serp_check": "2026-01-25T08:00:00Z"
  },
  "market_data": {
    "market_size": "large",
    "estimated_local_businesses": 850,
    "growth_rate": "strongly_positive",
    "key_players": [
      {
        "name": "Austin Web Design Co",
        "domain": "austinwebdesign.com",
        "estimated_share": "12%"
      },
      {
        "name": "Texas Creative Studio",
        "domain": "texascreative.com",
        "estimated_share": "10%"
      }
    ],
    "market_maturity": "growing",
    "barriers_to_entry": "medium",
    "last_market_check": "2026-01-20T00:00:00Z"
  },
  "review_data": {
    "avg_rating_range": {
      "min": 4.1,
      "max": 4.7,
      "median": 4.4
    },
    "review_count_range": {
      "min": 10,
      "max": 180,
      "median": 55
    },
    "review_velocity": "medium",
    "sentiment_distribution": {
      "positive": 0.72,
      "neutral": 0.18,
      "negative": 0.10
    },
    "common_review_themes": [
      "design quality",
      "timeline",
      "communication",
      "value"
    ],
    "last_review_check": "2026-01-25T06:00:00Z"
  },
  "competitor_data": {
    "competitor_categories": [
      {
        "category": "Full-Service Web Agencies",
        "count": 10,
        "avg_rating": 4.5,
        "avg_review_count": 90
      },
      {
        "category": "Boutique Design Studios",
        "count": 18,
        "avg_rating": 4.3,
        "avg_review_count": 40
      },
      {
        "category": "Freelance Collectives",
        "count": 7,
        "avg_rating": 4.2,
        "avg_review_count": 25
      }
    ],
    "competitor_clustering": "moderate",
    "market_concentration": "medium",
    "last_competitor_check": "2026-01-22T00:00:00Z"
  },
  "ranking_environment": {
    "local_seo_importance": "high",
    "google_business_optimization": "high",
    "review_importance": "high",
    "citation_consistency": "important",
    "local_content_signals": "important",
    "notable_ranking_factors": [
      "Google Business Profile optimization",
      "Portfolio showcase",
      "Review quantity and quality",
      "Local citations"
    ],
    "ranking_difficulty": "medium",
    "time_to_rank_estimate": "2-4 months"
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "SERP API",
      "url": "https://api.serpdata.com",
      "type": "serp_analysis"
    },
    {
      "name": "Google Business API",
      "url": "https://developers.google.com/my-business",
      "type": "review_data"
    }
  ]
}
```

### 1.5 Rendering Rules + UI Placement

**Placement:** After BLOCK-LOCAL-RELEVANCE, before BLOCK-PROOF-SLOT.

**UI Component:** Card layout with sections:
- **SERP Insights** (collapsible)
- **Market Overview** (visible)
- **Review Environment** (visible)
- **Competitor Landscape** (collapsible)
- **Ranking Environment** (visible)

**Rendering Logic:**
- If `serp_data.top_3_difficulty === "very_high"` → Show warning badge
- If `review_data.review_velocity === "very_high"` → Highlight review importance
- If `market_data.barriers_to_entry === "very_high"` → Show market maturity indicator
- Display `last_updated` timestamp with "Data updated" prefix
- Link to `data_sources` in footer

**Responsive:** Stack on mobile; 2-column grid on desktop.

### 1.6 Schema Effects

**Schema Types:**
- **Dataset** (for market data, review data)
- **FAQPage** (if ranking environment includes Q&A format)
- **ItemList** (for competitor categories, key players)

**Structured Data:**
```json
{
  "@type": "Dataset",
  "name": "Local Market Data: {{City}}, {{State}} - {{Service}}",
  "description": "SERP, market, review, and competitor data for {{City}} {{Service}} market",
  "datePublished": "{{last_updated}}",
  "dateModified": "{{last_updated}}",
  "creator": {
    "@type": "Organization",
    "name": "WebVello"
  },
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "{{data_sources[0].url}}"
  }
}
```

---

## 2. INDUSTRY KPI MAP

**Block ID:** `BLOCK-INDUSTRY-KPI-MAP`  
**Required For:** City×Industry×Service  
**Purpose:** Inject industry-specific KPIs, constraints, compliance notes, and buyer journey differences to create unique, valuable content per industry+service combination.

### 2.1 Block Specification

| Attribute | Spec |
|-----------|------|
| **Purpose** | Industry-specific intelligence: KPIs, constraints, compliance, buyer journey |
| **Required** | Yes (missing → noindex) |
| **Data Sources** | Industry research API, Compliance database, CMS `industry_kpi` field |
| **Refresh Frequency** | Quarterly (KPIs), Monthly (compliance), Annually (buyer journey) |
| **Cache Duration** | 30 days |
| **Validation** | Must have ≥ 5 KPIs; industry slug must exist in `industrySlugs` |

### 2.2 Required Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `industry` | string | ✓ | Industry slug (from `industrySlugs`) | `"healthcare"` |
| `service` | string | ✓ | Service slug | `"seo"` |
| `kpis` | array | ✓ | Industry KPIs (min 5, max 10) | See 2.3 |
| `constraints` | array | ✓ | Industry constraints | See 2.3 |
| `compliance` | array | Optional | Compliance requirements | See 2.3 |
| `buyer_journey` | object | ✓ | Buyer journey differences | See 2.3 |
| `last_updated` | ISO8601 | ✓ | Last data refresh timestamp | `"2026-01-25T10:00:00Z"` |
| `data_sources` | array | ✓ | Source URLs/APIs used | `["industry_research_api", "compliance_db"]` |

### 2.3 JSON Shape

```json
{
  "block_type": "INDUSTRY_KPI_MAP",
  "industry": "healthcare",
  "service": "seo",
  "kpis": [
    {
      "metric": "Patient Acquisition Cost (PAC)",
      "benchmark": "$150-$300 per patient",
      "context": "Varies by specialty; primary care lower, specialists higher",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Time to First Appointment",
      "benchmark": "7-14 days average",
      "context": "Urgent care: same day; specialists: 2-4 weeks",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Online Review Impact",
      "benchmark": "73% of patients use reviews to choose providers",
      "context": "Higher than most industries",
      "relevance": "very_high",
      "source": "patient_survey_data"
    },
    {
      "metric": "HIPAA Compliance Requirement",
      "benchmark": "100% compliance mandatory",
      "context": "Non-negotiable; affects all digital marketing",
      "relevance": "critical",
      "source": "compliance_database"
    },
    {
      "metric": "Local Search Dominance",
      "benchmark": "85% of searches include location",
      "context": "Higher than national average",
      "relevance": "very_high",
      "source": "search_behavior_study"
    },
    {
      "metric": "Conversion Rate (Inquiry to Appointment)",
      "benchmark": "15-25%",
      "context": "Varies by specialty and urgency",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Average Appointment Value",
      "benchmark": "$200-$500 per appointment",
      "context": "Primary care lower; specialists higher",
      "relevance": "medium",
      "source": "industry_research"
    },
    {
      "metric": "Seasonal Demand Fluctuations",
      "benchmark": "Flu season: +40% demand",
      "context": "Predictable seasonal patterns",
      "relevance": "medium",
      "source": "industry_research"
    }
  ],
  "constraints": [
    {
      "type": "regulatory",
      "description": "HIPAA compliance required for all patient data handling",
      "impact": "high",
      "affects": ["content_marketing", "lead_capture", "analytics"],
      "source": "compliance_database"
    },
    {
      "type": "ethical",
      "description": "Cannot make medical claims or guarantees",
      "impact": "high",
      "affects": ["advertising", "content", "messaging"],
      "source": "compliance_database"
    },
    {
      "type": "operational",
      "description": "Long sales cycles (3-6 months typical)",
      "impact": "medium",
      "affects": ["lead_nurturing", "conversion_tracking"],
      "source": "industry_research"
    },
    {
      "type": "seasonal",
      "description": "Flu season and new year drive appointment demand",
      "impact": "medium",
      "affects": ["campaign_timing", "budget_allocation"],
      "source": "industry_research"
    }
  ],
  "compliance": [
    {
      "regulation": "HIPAA",
      "requirement": "All patient data must be encrypted and access-controlled",
      "link": "https://www.hhs.gov/hipaa",
      "affects": ["lead_forms", "analytics", "crm_integration"],
      "last_verified": "2026-01-15T00:00:00Z"
    },
    {
      "regulation": "FDA Advertising Guidelines",
      "requirement": "No unsubstantiated medical claims",
      "link": "https://www.fda.gov/regulatory-information",
      "affects": ["advertising", "content", "messaging"],
      "last_verified": "2026-01-10T00:00:00Z"
    }
  ],
  "buyer_journey": {
    "awareness_stage": {
      "duration": "2-4 weeks",
      "key_activities": [
        "Symptom research",
        "Provider search",
        "Review reading",
        "Insurance verification"
      ],
      "content_needs": [
        "Educational content about conditions",
        "Provider credentials",
        "Insurance acceptance",
        "Location and hours"
      ]
    },
    "consideration_stage": {
      "duration": "1-3 weeks",
      "key_activities": [
        "Provider comparison",
        "Review deep-dive",
        "Insurance coverage check",
        "Appointment availability check"
      ],
      "content_needs": [
        "Provider bios",
        "Specialty information",
        "Patient testimonials",
        "Office location and amenities"
      ]
    },
    "decision_stage": {
      "duration": "1-2 weeks",
      "key_activities": [
        "Appointment booking",
        "Insurance pre-authorization",
        "First visit preparation"
      ],
      "content_needs": [
        "Online booking system",
        "New patient forms",
        "What to expect guides",
        "Insurance information"
      ]
    },
    "differences_from_standard": [
      "Longer consideration phase due to health decisions",
      "Insurance verification critical at awareness stage",
      "Review importance higher than most industries",
      "Trust signals (credentials, experience) more important"
    ]
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "Industry Research API",
      "url": "internal://industry-research",
      "type": "kpi_data"
    },
    {
      "name": "Compliance Database",
      "url": "internal://compliance-db",
      "type": "regulatory_data"
    }
  ]
}
```

### 2.4 Industry → KPI Taxonomy Mapping

| Industry | KPI Set ID | KPI Count | Key Focus Areas |
|----------|------------|-----------|----------------|
| `healthcare` | `kpi_healthcare` | 8 | Patient acquisition, HIPAA, reviews, local search |
| `technology` | `kpi_technology` | 7 | Lead quality, sales cycle, technical content |
| `finance` | `kpi_finance` | 9 | Compliance, trust, lead qualification, security |
| `manufacturing` | `kpi_manufacturing` | 6 | B2B sales cycle, technical specs, lead gen |
| `realestate` | `kpi_realestate` | 7 | Lead volume, conversion, local search, listings |
| `retail` | `kpi_retail` | 8 | Conversion rate, seasonality, e-commerce, reviews |
| `education` | `kpi_education` | 6 | Enrollment, seasonality, content marketing |
| `tourism` | `kpi_tourism` | 7 | Seasonality, booking windows, visual content |
| `aerospace` | `kpi_aerospace` | 5 | Long sales cycle, technical content, compliance |
| `energy` | `kpi_energy` | 6 | B2B focus, compliance, technical content |
| `government` | `kpi_government` | 7 | Compliance, accessibility, transparency |
| `logistics` | `kpi_logistics` | 6 | B2B, operational metrics, local search |
| `automotive` | `kpi_automotive` | 7 | Local search, reviews, service vs sales |
| `entertainment` | `kpi_entertainment` | 6 | Audience growth, engagement, visual content |
| `fashion` | `kpi_fashion` | 7 | Visual content, seasonality, e-commerce |
| `agriculture` | `kpi_agriculture` | 5 | B2B, seasonality, technical content |

**Taxonomy Lookup:**
```javascript
const industryKpiMap = {
  "healthcare": "kpi_healthcare",
  "technology": "kpi_technology",
  "finance": "kpi_finance",
  // ... all industries
};

function getKpiSet(industry) {
  return industryKpiMap[industry] || "kpi_default";
}
```

### 2.5 Example Payloads

#### Example 1: Healthcare × SEO

```json
{
  "block_type": "INDUSTRY_KPI_MAP",
  "industry": "healthcare",
  "service": "seo",
  "kpis": [
    {
      "metric": "Patient Acquisition Cost (PAC)",
      "benchmark": "$150-$300 per patient",
      "context": "Varies by specialty; primary care lower, specialists higher",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Online Review Impact",
      "benchmark": "73% of patients use reviews to choose providers",
      "context": "Higher than most industries",
      "relevance": "very_high",
      "source": "patient_survey_data"
    },
    {
      "metric": "HIPAA Compliance Requirement",
      "benchmark": "100% compliance mandatory",
      "context": "Non-negotiable; affects all digital marketing",
      "relevance": "critical",
      "source": "compliance_database"
    },
    {
      "metric": "Local Search Dominance",
      "benchmark": "85% of searches include location",
      "context": "Higher than national average",
      "relevance": "very_high",
      "source": "search_behavior_study"
    },
    {
      "metric": "Conversion Rate (Inquiry to Appointment)",
      "benchmark": "15-25%",
      "context": "Varies by specialty and urgency",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Time to First Appointment",
      "benchmark": "7-14 days average",
      "context": "Urgent care: same day; specialists: 2-4 weeks",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Average Appointment Value",
      "benchmark": "$200-$500 per appointment",
      "context": "Primary care lower; specialists higher",
      "relevance": "medium",
      "source": "industry_research"
    },
    {
      "metric": "Seasonal Demand Fluctuations",
      "benchmark": "Flu season: +40% demand",
      "context": "Predictable seasonal patterns",
      "relevance": "medium",
      "source": "industry_research"
    }
  ],
  "constraints": [
    {
      "type": "regulatory",
      "description": "HIPAA compliance required for all patient data handling",
      "impact": "high",
      "affects": ["content_marketing", "lead_capture", "analytics"],
      "source": "compliance_database"
    },
    {
      "type": "ethical",
      "description": "Cannot make medical claims or guarantees",
      "impact": "high",
      "affects": ["advertising", "content", "messaging"],
      "source": "compliance_database"
    }
  ],
  "compliance": [
    {
      "regulation": "HIPAA",
      "requirement": "All patient data must be encrypted and access-controlled",
      "link": "https://www.hhs.gov/hipaa",
      "affects": ["lead_forms", "analytics", "crm_integration"],
      "last_verified": "2026-01-15T00:00:00Z"
    }
  ],
  "buyer_journey": {
    "awareness_stage": {
      "duration": "2-4 weeks",
      "key_activities": ["Symptom research", "Provider search", "Review reading"],
      "content_needs": ["Educational content", "Provider credentials", "Insurance acceptance"]
    },
    "consideration_stage": {
      "duration": "1-3 weeks",
      "key_activities": ["Provider comparison", "Review deep-dive", "Insurance coverage check"],
      "content_needs": ["Provider bios", "Specialty information", "Patient testimonials"]
    },
    "decision_stage": {
      "duration": "1-2 weeks",
      "key_activities": ["Appointment booking", "Insurance pre-authorization"],
      "content_needs": ["Online booking system", "New patient forms", "What to expect guides"]
    },
    "differences_from_standard": [
      "Longer consideration phase due to health decisions",
      "Insurance verification critical at awareness stage",
      "Review importance higher than most industries"
    ]
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "Industry Research API",
      "url": "internal://industry-research",
      "type": "kpi_data"
    },
    {
      "name": "Compliance Database",
      "url": "internal://compliance-db",
      "type": "regulatory_data"
    }
  ]
}
```

#### Example 2: Technology × Web Development

```json
{
  "block_type": "INDUSTRY_KPI_MAP",
  "industry": "technology",
  "service": "web-development",
  "kpis": [
    {
      "metric": "Lead Quality Score",
      "benchmark": "60-75% qualified leads",
      "context": "Higher than average due to technical nature",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Sales Cycle Length",
      "benchmark": "3-6 months average",
      "context": "Longer for enterprise; shorter for SMB",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Technical Content Engagement",
      "benchmark": "40% higher engagement than generic content",
      "context": "Technical audiences prefer detailed content",
      "relevance": "very_high",
      "source": "content_analytics"
    },
    {
      "metric": "Average Project Value",
      "benchmark": "$25K-$150K",
      "context": "Wide range; enterprise higher, startups lower",
      "relevance": "high",
      "source": "industry_research"
    },
    {
      "metric": "Decision Maker Involvement",
      "benchmark": "3-5 stakeholders typically involved",
      "context": "CTO, CMO, CFO often all involved",
      "relevance": "medium",
      "source": "industry_research"
    },
    {
      "metric": "Portfolio/Showcase Importance",
      "benchmark": "85% review portfolio before contact",
      "context": "Higher than most industries",
      "relevance": "very_high",
      "source": "industry_research"
    },
    {
      "metric": "Technology Stack Preferences",
      "benchmark": "React/Next.js most requested",
      "context": "Modern stack preferred",
      "relevance": "medium",
      "source": "industry_research"
    }
  ],
  "constraints": [
    {
      "type": "technical",
      "description": "Must demonstrate modern technology expertise",
      "impact": "high",
      "affects": ["portfolio", "content", "case_studies"],
      "source": "industry_research"
    },
    {
      "type": "operational",
      "description": "Long sales cycles require extended nurturing",
      "impact": "medium",
      "affects": ["content_marketing", "lead_nurturing"],
      "source": "industry_research"
    }
  ],
  "compliance": [],
  "buyer_journey": {
    "awareness_stage": {
      "duration": "4-8 weeks",
      "key_activities": [
        "Technology research",
        "Portfolio review",
        "Case study analysis",
        "Technical capability assessment"
      ],
      "content_needs": [
        "Technical blog posts",
        "Portfolio showcase",
        "Case studies with technical details",
        "Technology stack information"
      ]
    },
    "consideration_stage": {
      "duration": "6-12 weeks",
      "key_activities": [
        "Vendor comparison",
        "Technical evaluation",
        "Reference checks",
        "Proposal review"
      ],
      "content_needs": [
        "Detailed case studies",
        "Technical documentation",
        "Team expertise",
        "Process methodology"
      ]
    },
    "decision_stage": {
      "duration": "2-4 weeks",
      "key_activities": [
        "Contract negotiation",
        "Final technical review",
        "Stakeholder approval"
      ],
      "content_needs": [
        "Pricing transparency",
        "Project timeline",
        "Team assignment",
        "Support and maintenance"
      ]
    },
    "differences_from_standard": [
      "Longer sales cycle (3-6 months vs 1-3 months)",
      "Multiple decision makers (3-5 vs 1-2)",
      "Technical portfolio critical",
      "Content depth more important than volume"
    ]
  },
  "last_updated": "2026-01-25T10:00:00Z",
  "data_sources": [
    {
      "name": "Industry Research API",
      "url": "internal://industry-research",
      "type": "kpi_data"
    }
  ]
}
```

### 2.6 Rendering Rules + UI Placement

**Placement:** After BLOCK-INDUSTRY-RELEVANCE, before BLOCK-PROOF-SLOT.

**UI Component:** Accordion/collapsible sections:
- **Industry KPIs** (visible, expandable cards)
- **Constraints & Compliance** (collapsible)
- **Buyer Journey Differences** (visible, tabbed interface)

**Rendering Logic:**
- Display KPIs as cards with metric, benchmark, context
- Highlight `relevance: "critical"` or `relevance: "very_high"` KPIs
- Show compliance badges if compliance array present
- Display buyer journey as timeline with stage tabs
- Show `last_updated` timestamp
- Link to compliance regulations if present

**Responsive:** Stack on mobile; 2-column grid for KPIs on desktop.

### 2.7 Schema Effects

**Schema Types:**
- **Dataset** (for KPI data)
- **ItemList** (for KPIs, constraints, compliance)
- **FAQPage** (if buyer journey formatted as Q&A)

**Structured Data:**
```json
{
  "@type": "Dataset",
  "name": "Industry KPI Data: {{Industry}} - {{Service}}",
  "description": "Industry-specific KPIs, constraints, and buyer journey data",
  "datePublished": "{{last_updated}}",
  "dateModified": "{{last_updated}}",
  "creator": {
    "@type": "Organization",
    "name": "WebVello"
  }
}
```

---

## 3. PROOF SLOT

**Block ID:** `BLOCK-PROOF-SLOT`  
**Required For:** City×Service, City×Industry×Service  
**Purpose:** Inject proof (case study, aggregate metrics, or team proof) to demonstrate credibility and results.

### 3.1 Block Specification

| Attribute | Spec |
|-----------|------|
| **Purpose** | Proof of results: case study, aggregate metrics, or team proof with attribution |
| **Required** | Yes (missing → noindex) |
| **Data Sources** | `/case-studies/*`, `/proof/*`, Analytics API, Team database, CMS `proof_slot` field |
| **Refresh Frequency** | Real-time (case studies), Monthly (aggregate), Quarterly (team proof) |
| **Cache Duration** | 1 day (case studies), 7 days (aggregate), 30 days (team proof) |
| **Validation** | Must have exactly one proof type (case_study OR aggregate OR team) |

### 3.2 Required Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | enum | ✓ | `case_study` \| `aggregate` \| `team` | `"case_study"` |
| `case_study_ref` | object | Conditional | Case study reference (if type = case_study) | See 3.3 |
| `aggregate_metrics` | array | Conditional | Aggregate proof metrics (if type = aggregate) | See 3.3 |
| `team_proof` | array | Conditional | Team proof with attribution (if type = team) | See 3.3 |
| `attribution_required` | boolean | ✓ | Whether attribution is required | `true` |
| `last_updated` | ISO8601 | ✓ | Last proof update timestamp | `"2026-01-25T10:00:00Z"` |

### 3.3 JSON Shape

#### Type: case_study

```json
{
  "block_type": "PROOF_SLOT",
  "type": "case_study",
  "case_study_ref": {
    "case_study_slug": "healthcare-seo-new-york-medical-group",
    "case_study_url": "/case-studies/healthcare-seo-new-york-medical-group",
    "client_name": "New York Medical Group",
    "industry": "healthcare",
    "city": "new-york-ny",
    "service": "seo",
    "outcome_summary": "250% increase in organic traffic, 180% increase in patient inquiries",
    "key_metrics": [
      {
        "metric": "Organic Traffic Growth",
        "value": "250%",
        "timeframe": "12 months"
      },
      {
        "metric": "Patient Inquiry Growth",
        "value": "180%",
        "timeframe": "12 months"
      },
      {
        "metric": "Local Pack Ranking",
        "value": "#1",
        "timeframe": "6 months"
      }
    ],
    "testimonial": {
      "quote": "WebVello transformed our online presence and patient acquisition.",
      "attribution": "Dr. Sarah Johnson, Medical Director",
      "client_verified": true
    },
    "case_study_verified": true,
    "case_study_date": "2025-11-15"
  },
  "attribution_required": true,
  "last_updated": "2026-01-25T10:00:00Z"
}
```

#### Type: aggregate

```json
{
  "block_type": "PROOF_SLOT",
  "type": "aggregate",
  "aggregate_metrics": [
    {
      "metric": "Average Traffic Growth",
      "value": "185%",
      "sample_size": 24,
      "timeframe": "12 months",
      "filter": {
        "city": "new-york-ny",
        "service": "seo",
        "industry": "healthcare"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z"
    },
    {
      "metric": "Average Lead Growth",
      "value": "220%",
      "sample_size": 24,
      "timeframe": "12 months",
      "filter": {
        "city": "new-york-ny",
        "service": "seo",
        "industry": "healthcare"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z"
    },
    {
      "metric": "Average Local Pack Appearance Rate",
      "value": "85%",
      "sample_size": 24,
      "timeframe": "6 months",
      "filter": {
        "city": "new-york-ny",
        "service": "seo",
        "industry": "healthcare"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z"
    }
  ],
  "aggregate_source": "/proof/results",
  "aggregate_methodology": "Aggregated from 24 healthcare SEO clients in New York, NY over 12-month period",
  "attribution_required": false,
  "last_updated": "2026-01-25T10:00:00Z"
}
```

#### Type: team

```json
{
  "block_type": "PROOF_SLOT",
  "type": "team",
  "team_proof": [
    {
      "member": {
        "name": "John Smith",
        "title": "Senior SEO Strategist",
        "entity_url": "/entity/person/john-smith",
        "credentials": [
          "Google Analytics Certified",
          "15 years healthcare SEO experience"
        ]
      },
      "credential": "15 years healthcare SEO experience in New York market",
      "attribution": {
        "type": "sister_company",
        "company_name": "Previous Agency Name",
        "transparency_note": "John previously led healthcare SEO at [Previous Agency] before joining WebVello",
        "verification_status": "verified"
      },
      "relevance": {
        "city": "new-york-ny",
        "industry": "healthcare",
        "service": "seo"
      }
    },
    {
      "member": {
        "name": "Jane Doe",
        "title": "Healthcare Marketing Specialist",
        "entity_url": "/entity/person/jane-doe",
        "credentials": [
          "HIPAA Certified",
          "10 years healthcare marketing"
        ]
      },
      "credential": "10 years healthcare marketing experience, HIPAA certified",
      "attribution": {
        "type": "direct_experience",
        "company_name": "WebVello",
        "transparency_note": "Jane has worked on 50+ healthcare SEO projects at WebVello",
        "verification_status": "verified"
      },
      "relevance": {
        "city": "new-york-ny",
        "industry": "healthcare",
        "service": "seo"
      }
    }
  ],
  "attribution_required": true,
  "transparency_disclaimer": "Team proof includes experience from previous roles and current WebVello projects. All attributions verified.",
  "last_updated": "2026-01-25T10:00:00Z"
}
```

### 3.4 Proof Validity Rules

**Case Study Validity:**
- `case_study_slug` must exist in `/case-studies/*`
- `case_study_verified` must be `true`
- Case study must have tags matching `city`, `service`, and optionally `industry`
- Case study must have ≥ 2 key metrics
- Case study date must be within last 3 years

**Aggregate Proof Validity:**
- `sample_size` must be ≥ 10
- All metrics must have `source: "analytics_aggregate"`
- Filter must match page context (city, service, industry if applicable)
- `last_calculated` must be within last 30 days
- Must link to `/proof/results` or `/proof/industry-results` or `/proof/city-results`

**Team Proof Validity:**
- All team members must exist in team database
- `attribution_required: true` → all attributions must be present
- `transparency_disclaimer` required if `type: "sister_company"`
- Team member must have relevance matching page context
- `verification_status` must be `"verified"`

**Priority Order (if multiple available):**
1. Case study (preferred)
2. Aggregate proof (if no case study)
3. Team proof (if no case study or aggregate)

### 3.5 Example Payloads

#### Example 1: New York, NY × SEO × Healthcare (Case Study)

```json
{
  "block_type": "PROOF_SLOT",
  "type": "case_study",
  "case_study_ref": {
    "case_study_slug": "healthcare-seo-new-york-medical-group",
    "case_study_url": "/case-studies/healthcare-seo-new-york-medical-group",
    "client_name": "New York Medical Group",
    "industry": "healthcare",
    "city": "new-york-ny",
    "service": "seo",
    "outcome_summary": "250% increase in organic traffic, 180% increase in patient inquiries, #1 local pack ranking",
    "key_metrics": [
      {
        "metric": "Organic Traffic Growth",
        "value": "250%",
        "timeframe": "12 months",
        "baseline": "2,500 monthly visitors",
        "current": "8,750 monthly visitors"
      },
      {
        "metric": "Patient Inquiry Growth",
        "value": "180%",
        "timeframe": "12 months",
        "baseline": "50 inquiries/month",
        "current": "140 inquiries/month"
      },
      {
        "metric": "Local Pack Ranking",
        "value": "#1",
        "timeframe": "6 months",
        "baseline": "Not in top 3",
        "current": "#1 position"
      },
      {
        "metric": "Review Growth",
        "value": "150%",
        "timeframe": "12 months",
        "baseline": "40 reviews",
        "current": "100 reviews"
      }
    ],
    "testimonial": {
      "quote": "WebVello transformed our online presence and patient acquisition. Their healthcare SEO expertise and HIPAA-compliant approach made all the difference.",
      "attribution": "Dr. Sarah Johnson, Medical Director, New York Medical Group",
      "client_verified": true,
      "testimonial_date": "2025-11-15"
    },
    "case_study_verified": true,
    "case_study_date": "2025-11-15",
    "services_used": ["seo", "local-seo", "content-marketing"]
  },
  "attribution_required": true,
  "last_updated": "2026-01-25T10:00:00Z"
}
```

#### Example 2: Austin, TX × Website Design (Aggregate)

```json
{
  "block_type": "PROOF_SLOT",
  "type": "aggregate",
  "aggregate_metrics": [
    {
      "metric": "Average Conversion Rate Improvement",
      "value": "145%",
      "sample_size": 18,
      "timeframe": "12 months",
      "filter": {
        "city": "austin-tx",
        "service": "website-design"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z",
      "baseline_avg": "2.1%",
      "current_avg": "5.15%"
    },
    {
      "metric": "Average Page Load Time Improvement",
      "value": "65% faster",
      "sample_size": 18,
      "timeframe": "6 months",
      "filter": {
        "city": "austin-tx",
        "service": "website-design"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z",
      "baseline_avg": "4.2s",
      "current_avg": "1.47s"
    },
    {
      "metric": "Average Mobile Score Improvement",
      "value": "42 points",
      "sample_size": 18,
      "timeframe": "6 months",
      "filter": {
        "city": "austin-tx",
        "service": "website-design"
      },
      "source": "analytics_aggregate",
      "last_calculated": "2026-01-25T00:00:00Z",
      "baseline_avg": "58",
      "current_avg": "100"
    }
  ],
  "aggregate_source": "/proof/city-results",
  "aggregate_methodology": "Aggregated from 18 website design projects in Austin, TX over 12-month period. Metrics calculated from Google Analytics and PageSpeed Insights data.",
  "attribution_required": false,
  "last_updated": "2026-01-25T10:00:00Z"
}
```

#### Example 3: Technology × Web Development (Team Proof)

```json
{
  "block_type": "PROOF_SLOT",
  "type": "team",
  "team_proof": [
    {
      "member": {
        "name": "Alex Chen",
        "title": "Lead Web Developer",
        "entity_url": "/entity/person/alex-chen",
        "credentials": [
          "15 years web development experience",
          "React/Next.js specialist",
          "50+ technology company projects"
        ]
      },
      "credential": "15 years web development experience, specializing in technology companies",
      "attribution": {
        "type": "direct_experience",
        "company_name": "WebVello",
        "transparency_note": "Alex has led web development for 50+ technology company projects at WebVello, including SaaS platforms, fintech applications, and developer tools.",
        "verification_status": "verified"
      },
      "relevance": {
        "industry": "technology",
        "service": "web-development"
      },
      "proof_points": [
        "Built 50+ technology company websites",
        "Expert in React, Next.js, TypeScript",
        "Specializes in SaaS and fintech applications"
      ]
    },
    {
      "member": {
        "name": "Maria Rodriguez",
        "title": "Senior UX Designer",
        "entity_url": "/entity/person/maria-rodriguez",
        "credentials": [
          "12 years UX design experience",
          "Technology product specialist",
          "Award-winning design portfolio"
        ]
      },
      "credential": "12 years UX design experience, specializing in technology products",
      "attribution": {
        "type": "sister_company",
        "company_name": "Previous Design Agency",
        "transparency_note": "Maria previously led UX design for technology products at [Previous Design Agency] before joining WebVello. She has worked on 30+ technology company projects at WebVello.",
        "verification_status": "verified"
      },
      "relevance": {
        "industry": "technology",
        "service": "web-development"
      },
      "proof_points": [
        "30+ technology company projects at WebVello",
        "Previous experience at technology-focused design agency",
        "Award-winning portfolio in technology product design"
      ]
    }
  ],
  "attribution_required": true,
  "transparency_disclaimer": "Team proof includes experience from previous roles and current WebVello projects. All attributions verified. Sister company attributions disclosed for transparency.",
  "last_updated": "2026-01-25T10:00:00Z"
}
```

### 3.6 Rendering Rules + UI Placement

**Placement:** After BLOCK-LOCAL-DATA-CARD (City×Service) or after BLOCK-INDUSTRY-KPI-MAP (City×Industry×Service), before BLOCK-PROCESS.

**UI Component by Type:**

**Case Study:**
- Card layout with client name, outcome summary
- Key metrics as stat cards (2-4 metrics)
- Testimonial quote with attribution
- "Read Full Case Study" CTA → case study URL
- Client verification badge if `client_verified: true`

**Aggregate:**
- Stat cards for each metric (3-5 metrics)
- Sample size and timeframe displayed
- "View All Results" link → aggregate source URL
- Methodology note displayed

**Team Proof:**
- Team member cards with photo, name, title
- Credentials listed
- Attribution with transparency note
- Relevance indicators (city/industry/service badges)
- "Meet the Team" link → team page or entity pages

**Rendering Logic:**
- If `type: "case_study"` → Render case study card
- If `type: "aggregate"` → Render aggregate metrics
- If `type: "team"` → Render team proof cards
- Show `last_updated` timestamp
- If `attribution_required: true` and missing attribution → Show warning

**Responsive:** Stack on mobile; 2-3 column grid on desktop.

### 3.7 Schema Effects

**Schema Types:**
- **Review** (for case study testimonials)
- **Organization** (for client in case study)
- **ItemList** (for aggregate metrics, team proof)
- **Person** (for team proof members)

**Structured Data:**

**Case Study:**
```json
{
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "{{testimonial.attribution}}"
  },
  "reviewBody": "{{testimonial.quote}}",
  "itemReviewed": {
    "@type": "Service",
    "name": "{{service}}"
  }
}
```

**Aggregate:**
```json
{
  "@type": "ItemList",
  "name": "Aggregate Results: {{City}} {{Service}}",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "{{metric}}",
      "description": "{{value}} over {{timeframe}}"
    }
  ]
}
```

---

## 4. CMS FIELD MAPPING

### 4.1 City×Service Template

| CMS Field Path | Block | JSON Path | Required | Validation |
|----------------|-------|-----------|----------|------------|
| `local_data_card.city` | LOCAL_DATA_CARD | `city` | ✓ | Must exist in `cityDataSlugs` |
| `local_data_card.service` | LOCAL_DATA_CARD | `service` | ✓ | Must exist in `TIER1_SERVICES` |
| `local_data_card.serp_data` | LOCAL_DATA_CARD | `serp_data` | ✓ | Object with required fields |
| `local_data_card.market_data` | LOCAL_DATA_CARD | `market_data` | ✓ | Object with required fields |
| `local_data_card.review_data` | LOCAL_DATA_CARD | `review_data` | ✓ | Object with required fields |
| `local_data_card.competitor_data` | LOCAL_DATA_CARD | `competitor_data` | ✓ | Object with required fields |
| `local_data_card.ranking_environment` | LOCAL_DATA_CARD | `ranking_environment` | ✓ | Object with required fields |
| `proof_slot.type` | PROOF_SLOT | `type` | ✓ | Enum: `case_study` \| `aggregate` \| `team` |
| `proof_slot.case_study_ref` | PROOF_SLOT | `case_study_ref` | Conditional | Required if `type === "case_study"` |
| `proof_slot.aggregate_metrics` | PROOF_SLOT | `aggregate_metrics` | Conditional | Required if `type === "aggregate"` |
| `proof_slot.team_proof` | PROOF_SLOT | `team_proof` | Conditional | Required if `type === "team"` |

### 4.2 City×Industry×Service Template

| CMS Field Path | Block | JSON Path | Required | Validation |
|----------------|-------|-----------|----------|------------|
| `local_data_card.*` | LOCAL_DATA_CARD | (same as City×Service) | ✓ | (same as City×Service) |
| `industry_kpi_map.industry` | INDUSTRY_KPI_MAP | `industry` | ✓ | Must exist in `industrySlugs` |
| `industry_kpi_map.service` | INDUSTRY_KPI_MAP | `service` | ✓ | Must exist in service taxonomy |
| `industry_kpi_map.kpis` | INDUSTRY_KPI_MAP | `kpis` | ✓ | Array, min 5, max 10 |
| `industry_kpi_map.constraints` | INDUSTRY_KPI_MAP | `constraints` | ✓ | Array, min 1 |
| `industry_kpi_map.compliance` | INDUSTRY_KPI_MAP | `compliance` | Optional | Array if industry has compliance |
| `industry_kpi_map.buyer_journey` | INDUSTRY_KPI_MAP | `buyer_journey` | ✓ | Object with required stages |
| `proof_slot.*` | PROOF_SLOT | (same as City×Service) | ✓ | (same as City×Service) |

---

## 5. INDEX CONTROL LOGIC

### 5.1 Validation Function

```javascript
function validateUniquenessInjection(pageType, blocks) {
  const required = {
    "city_service": ["LOCAL_DATA_CARD", "PROOF_SLOT"],
    "city_industry_service": ["LOCAL_DATA_CARD", "INDUSTRY_KPI_MAP", "PROOF_SLOT"]
  };
  
  const requiredBlocks = required[pageType] || [];
  const missing = requiredBlocks.filter(block => !blocks[block]);
  
  if (missing.length > 0) {
    return {
      indexable: false,
      robots: "noindex,follow",
      reason: `Missing required uniqueness blocks: ${missing.join(", ")}`
    };
  }
  
  // Validate block content
  const validationErrors = [];
  
  if (blocks.LOCAL_DATA_CARD) {
    const localErrors = validateLocalDataCard(blocks.LOCAL_DATA_CARD);
    if (localErrors.length > 0) validationErrors.push(...localErrors);
  }
  
  if (blocks.INDUSTRY_KPI_MAP) {
    const kpiErrors = validateIndustryKpiMap(blocks.INDUSTRY_KPI_MAP);
    if (kpiErrors.length > 0) validationErrors.push(...kpiErrors);
  }
  
  if (blocks.PROOF_SLOT) {
    const proofErrors = validateProofSlot(blocks.PROOF_SLOT);
    if (proofErrors.length > 0) validationErrors.push(...proofErrors);
  }
  
  if (validationErrors.length > 0) {
    return {
      indexable: false,
      robots: "noindex,follow",
      reason: `Validation errors: ${validationErrors.join("; ")}`
    };
  }
  
  return {
    indexable: true,
    eligible_for_quality_gates: true,
    robots: "index,follow"
  };
}
```

### 5.2 Block Validation Functions

```javascript
function validateLocalDataCard(block) {
  const errors = [];
  if (!block.city || !block.state || !block.service) {
    errors.push("Missing city, state, or service");
  }
  if (!block.serp_data || !block.serp_data.avg_competitor_count) {
    errors.push("Missing SERP data");
  }
  if (!block.market_data || !block.market_data.market_size) {
    errors.push("Missing market data");
  }
  if (!block.review_data || !block.review_data.avg_rating_range) {
    errors.push("Missing review data");
  }
  if (!block.competitor_data || !block.competitor_data.competitor_categories) {
    errors.push("Missing competitor data");
  }
  if (!block.ranking_environment || !block.ranking_environment.local_seo_importance) {
    errors.push("Missing ranking environment");
  }
  if (!block.last_updated) {
    errors.push("Missing last_updated timestamp");
  }
  if (!block.data_sources || block.data_sources.length === 0) {
    errors.push("Missing data sources");
  }
  return errors;
}

function validateIndustryKpiMap(block) {
  const errors = [];
  if (!block.industry || !block.service) {
    errors.push("Missing industry or service");
  }
  if (!block.kpis || block.kpis.length < 5) {
    errors.push("Must have at least 5 KPIs");
  }
  if (block.kpis && block.kpis.length > 10) {
    errors.push("Must have at most 10 KPIs");
  }
  if (!block.constraints || block.constraints.length === 0) {
    errors.push("Must have at least 1 constraint");
  }
  if (!block.buyer_journey) {
    errors.push("Missing buyer journey");
  }
  if (!block.last_updated) {
    errors.push("Missing last_updated timestamp");
  }
  return errors;
}

function validateProofSlot(block) {
  const errors = [];
  if (!block.type || !["case_study", "aggregate", "team"].includes(block.type)) {
    errors.push("Invalid or missing proof type");
  }
  if (block.type === "case_study" && !block.case_study_ref) {
    errors.push("Missing case_study_ref for case_study type");
  }
  if (block.type === "aggregate" && (!block.aggregate_metrics || block.aggregate_metrics.length === 0)) {
    errors.push("Missing aggregate_metrics for aggregate type");
  }
  if (block.type === "team" && (!block.team_proof || block.team_proof.length === 0)) {
    errors.push("Missing team_proof for team type");
  }
  if (block.type === "case_study" && block.case_study_ref && !block.case_study_ref.case_study_verified) {
    errors.push("Case study must be verified");
  }
  if (block.type === "aggregate" && block.aggregate_metrics) {
    const lowSample = block.aggregate_metrics.find(m => m.sample_size < 10);
    if (lowSample) {
      errors.push("Aggregate metrics must have sample_size >= 10");
    }
  }
  if (block.attribution_required && block.type === "team") {
    const missingAttribution = block.team_proof?.find(tp => !tp.attribution);
    if (missingAttribution) {
      errors.push("Team proof requires attribution when attribution_required is true");
    }
  }
  return errors;
}
```

---

## 6. AUTOMATION RULES

### 6.1 Data Fetching Automation

**LOCAL_DATA_CARD:**
```javascript
async function fetchLocalDataCard(city, service) {
  const [serpData, marketData, reviewData, competitorData] = await Promise.all([
    fetchSerpData(city, service),
    fetchMarketData(city, service),
    fetchReviewData(city, service),
    fetchCompetitorData(city, service)
  ]);
  
  return {
    block_type: "LOCAL_DATA_CARD",
    city,
    service,
    serp_data: serpData,
    market_data: marketData,
    review_data: reviewData,
    competitor_data: competitorData,
    ranking_environment: generateRankingEnvironment(serpData, reviewData),
    last_updated: new Date().toISOString(),
    data_sources: getDataSources()
  };
}
```

**INDUSTRY_KPI_MAP:**
```javascript
async function fetchIndustryKpiMap(industry, service) {
  const kpiSet = getKpiSet(industry); // From taxonomy mapping
  const [kpis, constraints, compliance, buyerJourney] = await Promise.all([
    fetchKPIs(kpiSet, service),
    fetchConstraints(industry, service),
    fetchCompliance(industry),
    fetchBuyerJourney(industry, service)
  ]);
  
  return {
    block_type: "INDUSTRY_KPI_MAP",
    industry,
    service,
    kpis: kpis.slice(0, 10), // Max 10
    constraints,
    compliance: compliance || [],
    buyer_journey: buyerJourney,
    last_updated: new Date().toISOString(),
    data_sources: getDataSources()
  };
}
```

**PROOF_SLOT:**
```javascript
async function fetchProofSlot(city, service, industry = null) {
  // Priority: case study > aggregate > team
  const caseStudy = await findCaseStudy(city, service, industry);
  if (caseStudy) {
    return {
      block_type: "PROOF_SLOT",
      type: "case_study",
      case_study_ref: caseStudy,
      attribution_required: true,
      last_updated: new Date().toISOString()
    };
  }
  
  const aggregate = await fetchAggregateProof(city, service, industry);
  if (aggregate && aggregate.aggregate_metrics.length > 0) {
    return {
      block_type: "PROOF_SLOT",
      type: "aggregate",
      aggregate_metrics: aggregate.aggregate_metrics,
      aggregate_source: aggregate.source,
      aggregate_methodology: aggregate.methodology,
      attribution_required: false,
      last_updated: new Date().toISOString()
    };
  }
  
  const teamProof = await fetchTeamProof(city, service, industry);
  if (teamProof && teamProof.length > 0) {
    return {
      block_type: "PROOF_SLOT",
      type: "team",
      team_proof: teamProof,
      attribution_required: true,
      transparency_disclaimer: "Team proof includes experience from previous roles and current WebVello projects. All attributions verified.",
      last_updated: new Date().toISOString()
    };
  }
  
  return null; // No proof available → will trigger noindex
}
```

### 6.2 Cache Management

**Cache Keys:**
- `local_data_card:{city}:{service}` → TTL 7 days
- `industry_kpi_map:{industry}:{service}` → TTL 30 days
- `proof_slot:{city}:{service}:{industry?}` → TTL 1 day (case study), 7 days (aggregate), 30 days (team)

**Cache Invalidation:**
- On case study publish/update
- On proof page update
- On team member update
- On scheduled refresh (monthly/weekly/quarterly)

---

## 7. ERROR HANDLING

### 7.1 Missing Data Scenarios

**Scenario 1: SERP API unavailable**
- Fallback: Use cached data if available (< 30 days old)
- If no cache: Mark LOCAL_DATA_CARD as incomplete → noindex

**Scenario 2: No case study available**
- Fallback: Use aggregate proof
- If no aggregate: Use team proof
- If no team proof: Mark PROOF_SLOT as missing → noindex

**Scenario 3: Industry KPI data unavailable**
- Fallback: Use default KPI set for industry
- If no default: Mark INDUSTRY_KPI_MAP as incomplete → noindex

### 7.2 Data Quality Checks

**SERP Data Quality:**
- `avg_competitor_count` must be > 0
- `serp_features` must have at least 1 feature
- `last_serp_check` must be within last 30 days

**Review Data Quality:**
- `avg_rating_range.min` must be ≥ 0 and ≤ 5
- `avg_rating_range.max` must be ≥ `avg_rating_range.min`
- `review_count_range.min` must be ≥ 0

**KPI Data Quality:**
- Each KPI must have `metric`, `benchmark`, `context`
- `relevance` must be one of: `low`, `medium`, `high`, `very_high`, `critical`

**Proof Data Quality:**
- Case study slug must resolve to existing case study
- Aggregate metrics must have `sample_size >= 10`
- Team proof attributions must be verified

---

## 8. RENDERING TEMPLATES

### 8.1 LOCAL_DATA_CARD Component

```tsx
<LocalDataCard data={localDataCard}>
  <Section title="SERP Insights" collapsible>
    <Stat label="Competitors" value={serpData.avg_competitor_count} />
    <Badge difficulty={serpData.top_3_difficulty} />
    <FeatureList features={serpData.serp_features} />
  </Section>
  
  <Section title="Market Overview">
    <Stat label="Market Size" value={marketData.market_size} />
    <Stat label="Local Businesses" value={marketData.estimated_local_businesses} />
    <PlayerList players={marketData.key_players} />
  </Section>
  
  <Section title="Review Environment">
    <RatingRange range={reviewData.avg_rating_range} />
    <ReviewCountRange range={reviewData.review_count_range} />
    <ThemeList themes={reviewData.common_review_themes} />
  </Section>
  
  <Section title="Competitor Landscape" collapsible>
    <CategoryList categories={competitorData.competitor_categories} />
  </Section>
  
  <Section title="Ranking Environment">
    <FactorList factors={rankingEnvironment.notable_ranking_factors} />
    <DifficultyBadge difficulty={rankingEnvironment.ranking_difficulty} />
  </Section>
  
  <Footer>
    <Timestamp>Data updated: {lastUpdated}</Timestamp>
    <SourceLinks sources={dataSources} />
  </Footer>
</LocalDataCard>
```

### 8.2 INDUSTRY_KPI_MAP Component

```tsx
<IndustryKpiMap data={industryKpiMap}>
  <Section title="Industry KPIs">
    <KpiGrid>
      {kpis.map(kpi => (
        <KpiCard
          key={kpi.metric}
          metric={kpi.metric}
          benchmark={kpi.benchmark}
          context={kpi.context}
          relevance={kpi.relevance}
        />
      ))}
    </KpiGrid>
  </Section>
  
  <Section title="Constraints & Compliance" collapsible>
    <ConstraintList constraints={constraints} />
    {compliance.length > 0 && (
      <ComplianceList compliance={compliance} />
    )}
  </Section>
  
  <Section title="Buyer Journey Differences">
    <JourneyTabs>
      <Tab stage="awareness" data={buyerJourney.awareness_stage} />
      <Tab stage="consideration" data={buyerJourney.consideration_stage} />
      <Tab stage="decision" data={buyerJourney.decision_stage} />
    </JourneyTabs>
    <DifferencesList differences={buyerJourney.differences_from_standard} />
  </Section>
  
  <Footer>
    <Timestamp>Data updated: {lastUpdated}</Timestamp>
    <SourceLinks sources={dataSources} />
  </Footer>
</IndustryKpiMap>
```

### 8.3 PROOF_SLOT Component

```tsx
{proofSlot.type === "case_study" && (
  <CaseStudyProof data={proofSlot.case_study_ref}>
    <Header>
      <ClientName>{caseStudyRef.client_name}</ClientName>
      <OutcomeSummary>{caseStudyRef.outcome_summary}</OutcomeSummary>
    </Header>
    
    <MetricsGrid>
      {caseStudyRef.key_metrics.map(metric => (
        <MetricCard
          key={metric.metric}
          label={metric.metric}
          value={metric.value}
          timeframe={metric.timeframe}
        />
      ))}
    </MetricsGrid>
    
    {caseStudyRef.testimonial && (
      <Testimonial
        quote={testimonial.quote}
        attribution={testimonial.attribution}
        verified={testimonial.client_verified}
      />
    )}
    
    <CTA href={caseStudyRef.case_study_url}>
      Read Full Case Study
    </CTA>
  </CaseStudyProof>
)}

{proofSlot.type === "aggregate" && (
  <AggregateProof data={proofSlot.aggregate_metrics}>
    <Header>
      <Title>Aggregate Results</Title>
      <Methodology>{aggregate_methodology}</Methodology>
    </Header>
    
    <MetricsGrid>
      {aggregate_metrics.map(metric => (
        <MetricCard
          key={metric.metric}
          label={metric.metric}
          value={metric.value}
          sampleSize={metric.sample_size}
          timeframe={metric.timeframe}
        />
      ))}
    </MetricsGrid>
    
    <CTA href={aggregate_source}>
      View All Results
    </CTA>
  </AggregateProof>
)}

{proofSlot.type === "team" && (
  <TeamProof data={proofSlot.team_proof}>
    <Header>
      <Title>Team Expertise</Title>
      {transparency_disclaimer && (
        <Disclaimer>{transparency_disclaimer}</Disclaimer>
      )}
    </Header>
    
    <TeamGrid>
      {team_proof.map(member => (
        <TeamCard
          key={member.member.name}
          name={member.member.name}
          title={member.member.title}
          credentials={member.member.credentials}
          attribution={member.attribution}
          relevance={member.relevance}
        />
      ))}
    </TeamGrid>
    
    <CTA href="/about#team">
      Meet the Team
    </CTA>
  </TeamProof>
)}
```

---

## 9. SCHEMA MARKUP PER BLOCK

### 9.1 LOCAL_DATA_CARD Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Local Market Data: {{City}}, {{State}} - {{Service}}",
  "description": "SERP, market, review, and competitor data for {{City}} {{Service}} market",
  "datePublished": "{{last_updated}}",
  "dateModified": "{{last_updated}}",
  "creator": {
    "@type": "Organization",
    "name": "WebVello",
    "url": "https://www.webvello.com"
  },
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "{{data_sources[0].url}}"
  },
  "keywords": "{{city}}, {{state}}, {{service}}, local market data, SERP analysis"
}
```

### 9.2 INDUSTRY_KPI_MAP Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Industry KPI Data: {{Industry}} - {{Service}}",
  "description": "Industry-specific KPIs, constraints, compliance, and buyer journey data",
  "datePublished": "{{last_updated}}",
  "dateModified": "{{last_updated}}",
  "creator": {
    "@type": "Organization",
    "name": "WebVello",
    "url": "https://www.webvello.com"
  },
  "keywords": "{{industry}}, {{service}}, industry KPIs, buyer journey"
}
```

### 9.3 PROOF_SLOT Schema

**Case Study:**
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "{{testimonial.attribution}}"
  },
  "reviewBody": "{{testimonial.quote}}",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "itemReviewed": {
    "@type": "Service",
    "name": "{{service}}",
    "provider": {
      "@type": "Organization",
      "name": "WebVello"
    }
  }
}
```

**Aggregate:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Aggregate Results: {{City}} {{Service}}",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "{{metric}}",
      "description": "{{value}} over {{timeframe}} (sample size: {{sample_size}})"
    }
  ]
}
```

---

## 10. IMPLEMENTATION CHECKLIST

### 10.1 Development Tasks

- [ ] Create `BLOCK-LOCAL-DATA-CARD` component
- [ ] Create `BLOCK-INDUSTRY-KPI-MAP` component
- [ ] Create `BLOCK-PROOF-SLOT` component (3 variants)
- [ ] Implement validation functions
- [ ] Implement index control logic
- [ ] Set up data fetching automation
- [ ] Set up cache management
- [ ] Implement CMS field mapping
- [ ] Add schema markup
- [ ] Add error handling
- [ ] Add refresh scheduling

### 10.2 Data Integration Tasks

- [ ] Integrate SERP API
- [ ] Integrate Review aggregator API
- [ ] Integrate Market research API
- [ ] Set up Industry KPI taxonomy
- [ ] Set up Compliance database
- [ ] Set up Case study tagging system
- [ ] Set up Team database
- [ ] Set up Analytics aggregation

### 10.3 Quality Assurance

- [ ] Test validation with missing blocks → noindex
- [ ] Test validation with invalid data → noindex
- [ ] Test validation with all blocks present → eligible for quality gates
- [ ] Test rendering for all 3 proof types
- [ ] Test schema markup validation
- [ ] Test cache invalidation
- [ ] Test error handling scenarios
- [ ] Test responsive design

---

**End of Uniqueness Injection Points Specification. For template architecture, see WEBVELLO_PAGE_TEMPLATE_SYSTEM v1.1.**
