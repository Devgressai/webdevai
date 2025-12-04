import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User, Calendar } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export const metadata: Metadata = {
  title: 'Schema Markup for GEO: Complete Guide to Structured Data for AI Search (2025)',
  description: 'How to use schema markup to improve AI search visibility. Complete guide to structured data optimization for ChatGPT, Perplexity, and Google SGE.',
  keywords: ['schema markup geo', 'structured data ai search', 'schema markup chatgpt', 'schema for ai seo', 'structured data optimization'],
  alternates: {
    canonical: 'https://www.webvello.com/blog/schema-markup-geo-guide-2025',
  },
  openGraph: {
    title: 'Schema Markup for GEO: Structured Data for AI Search',
    description: 'Complete guide to schema markup for AI search visibility.',
    url: 'https://www.webvello.com/blog/schema-markup-geo-guide-2025',
    type: 'article',
    publishedTime: '2025-01-14',
  }
}

export default function SchemaMarkupGEOGuidePage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>Technical SEO & GEO</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Schema Markup for GEO: Complete Guide to Structured Data for AI Search
          </h1>
          
          <p className="text-xl text-white/70 mb-8">
            How to use schema markup to improve your visibility in AI search results—ChatGPT, 
            Perplexity, and Google AI Overviews.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Web Vello Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 14, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>20 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="lead">
              Schema markup (structured data) has always been important for SEO. But with AI 
              search, it's become critical. Structured data helps AI systems understand your 
              content, and content they understand is content they cite.
            </p>

            <h2>Why Schema Matters More for GEO</h2>

            <p>
              AI systems process information differently than traditional search crawlers. They need to:
            </p>

            <ul>
              <li><strong>Understand entities</strong> - Who or what is this business/product/person?</li>
              <li><strong>Extract facts</strong> - What are the specific details (prices, locations, features)?</li>
              <li><strong>Establish relationships</strong> - How does this relate to other entities?</li>
              <li><strong>Verify authority</strong> - Is this a trustworthy source on this topic?</li>
            </ul>

            <p>
              Schema markup provides this information in a structured, machine-readable format that 
              AI systems can easily process. Without schema, AI has to infer these things from 
              unstructured content—which is less reliable.
            </p>

            <h2>Essential Schema Types for GEO</h2>

            <h3>1. Organization Schema</h3>

            <p>
              Every business website needs Organization schema. This establishes your business 
              as a recognized entity.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "description": "Clear description of what your company does",
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 25
  },
  "sameAs": [
    "https://linkedin.com/company/yourcompany",
    "https://twitter.com/yourcompany",
    "https://facebook.com/yourcompany"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
}`}
              </pre>
            </div>

            <h3>2. LocalBusiness Schema</h3>

            <p>
              For local businesses, LocalBusiness schema is essential. It tells AI systems exactly 
              where you operate and what services you provide.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://yourwebsite.com/image.jpg",
  "url": "https://yourwebsite.com",
  "telephone": "+1-555-123-4567",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Your City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Your City"
    },
    {
      "@type": "City", 
      "name": "Nearby City"
    }
  ],
  "serviceType": ["Service 1", "Service 2", "Service 3"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
}`}
              </pre>
            </div>

            <h3>3. FAQPage Schema</h3>

            <p>
              FAQ schema is one of the most powerful for GEO because it directly maps questions 
              to answers—exactly what AI systems need.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does [service] cost in [city]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of [service] in [city] typically ranges from $X to $Y depending on factors like..."
      }
    },
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer [list of services] to clients in [areas served]..."
      }
    }
  ]
}`}
              </pre>
            </div>

            <h3>4. Service Schema</h3>

            <p>
              For service businesses, Service schema describes what you offer in a structured way.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "GEO Services",
  "description": "Generative Engine Optimization services to improve AI search visibility",
  "provider": {
    "@type": "Organization",
    "name": "Your Company"
  },
  "serviceType": "GEO Optimization",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GEO Audit",
          "description": "Comprehensive AI visibility audit"
        }
      }
    ]
  }
}`}
              </pre>
            </div>

            <h3>5. Article Schema</h3>

            <p>
              For blog posts and content, Article schema helps AI understand your content and 
              its authorship.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "description": "Brief description of the article",
  "image": "https://yoursite.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yoursite.com/about/author"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Company",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.png"
    }
  },
  "datePublished": "2025-01-14",
  "dateModified": "2025-01-14"
}`}
              </pre>
            </div>

            <h3>6. HowTo Schema</h3>

            <p>
              For instructional content, HowTo schema structures step-by-step information 
              perfectly for AI extraction.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [accomplish task]",
  "description": "Step-by-step guide to...",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1 Title",
      "text": "Detailed instructions for step 1"
    },
    {
      "@type": "HowToStep",
      "name": "Step 2 Title",
      "text": "Detailed instructions for step 2"
    }
  ]
}`}
              </pre>
            </div>

            <h2>Implementation Best Practices</h2>

            <h3>1. Be Comprehensive</h3>
            <p>
              Include as many relevant properties as possible. AI systems use more data to 
              build better understanding. Don't just add minimal schema—be thorough.
            </p>

            <h3>2. Be Accurate</h3>
            <p>
              Schema data must match visible content. Google and AI systems will notice 
              discrepancies. Inaccurate schema can hurt your visibility.
            </p>

            <h3>3. Use JSON-LD Format</h3>
            <p>
              JSON-LD is the recommended format for schema markup. It's easiest to implement 
              and maintain, and it's what Google recommends.
            </p>

            <h3>4. Test Your Implementation</h3>
            <p>
              Use these tools to validate your schema:
            </p>
            <ul>
              <li>Google Rich Results Test</li>
              <li>Schema.org Validator</li>
              <li>Google Search Console</li>
            </ul>

            <h3>5. Nest Schema Appropriately</h3>
            <p>
              Use nested schema to show relationships. For example, a LocalBusiness can have 
              multiple Service items, each with their own properties.
            </p>

            <h2>Schema for Different Business Types</h2>

            <h3>E-commerce</h3>
            <ul>
              <li>Product schema with pricing, availability, reviews</li>
              <li>AggregateOffer for price ranges</li>
              <li>Review and AggregateRating</li>
              <li>Organization for brand</li>
            </ul>

            <h3>Local Services</h3>
            <ul>
              <li>LocalBusiness (or more specific type like Plumber, Attorney)</li>
              <li>Service for each service type</li>
              <li>FAQPage for common questions</li>
              <li>GeoCoordinates and areaServed</li>
            </ul>

            <h3>SaaS / Software</h3>
            <ul>
              <li>SoftwareApplication</li>
              <li>Organization</li>
              <li>FAQPage</li>
              <li>Article for documentation/blog</li>
            </ul>

            <h3>Professional Services</h3>
            <ul>
              <li>ProfessionalService</li>
              <li>Person for attorneys, doctors, etc.</li>
              <li>Service for specific practice areas</li>
              <li>EducationalOrganization for credentials</li>
            </ul>

            <h2>Common Schema Mistakes</h2>

            <ul>
              <li><strong>Missing schema entirely</strong> - Many sites have no schema at all</li>
              <li><strong>Incomplete properties</strong> - Adding minimal properties instead of comprehensive data</li>
              <li><strong>Inaccurate information</strong> - Schema that doesn't match visible content</li>
              <li><strong>Wrong schema type</strong> - Using generic Organization when LocalBusiness is more appropriate</li>
              <li><strong>No FAQ schema</strong> - Missing opportunity for Q&A structured data</li>
              <li><strong>Outdated information</strong> - Schema with old hours, prices, or services</li>
            </ul>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with Schema for GEO?
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Get a free audit of your schema markup and AI search visibility. 
                We'll identify what's missing and what opportunities exist.
              </p>
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Schema Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <h2>Conclusion</h2>
            
            <p>
              Schema markup is foundational for GEO. It's how you tell AI systems exactly what 
              your business is, what you do, and where you operate—in a language they understand.
            </p>

            <p>
              Start with the essentials: Organization or LocalBusiness, FAQPage, and Service. 
              Then expand based on your content types. The more structured data AI systems have 
              about your business, the more likely they are to recommend you.
            </p>

          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/geo-optimization-complete-guide-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">GEO Optimization: The Complete 2025 Guide</h3>
                <p className="text-slate-600 text-sm">Everything about optimizing for AI search platforms.</p>
              </Link>
              <Link href="/blog/google-sge-ai-overviews-optimization-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">How to Optimize for Google AI Overviews</h3>
                <p className="text-slate-600 text-sm">Guide to getting featured in Google SGE.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

