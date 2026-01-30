import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import { Shield, GitBranch, Database, Code, Network, CheckCircle, Search, FileText, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Index Governance | Strategic Index Control for AI Search — Webvello',
  description: 'Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems. Webvello builds index governance architectures using canonical strategy, structured data, routing control, and programmatic SEO systems.',
  keywords: 'index governance, canonical URLs, robots.txt, sitemap architecture, index control, duplicate content, content quality, programmatic SEO, AI search indexing',
  openGraph: {
    title: 'Index Governance | Strategic Index Control for AI Search — Webvello',
    description: 'Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems.',
    url: 'https://webvello.com/index-governance',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-index-governance.jpg',
        width: 1200,
        height: 630,
        alt: 'Index Governance - Webvello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Index Governance | Strategic Index Control for AI Search — Webvello',
    description: 'Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems.',
    images: ['https://webvello.com/og-index-governance.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/index-governance',
  },
}

const faqs = [
  {
    question: 'What is index governance?',
    answer: 'Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems. It involves strategic use of canonical URLs, robots directives, sitemap architecture, route-level index control, and content quality thresholds to ensure that high-value, authoritative content is discoverable while low-value or duplicate content is excluded. Index governance optimizes the signal-to-noise ratio for both traditional search engines and AI systems.'
  },
  {
    question: 'How is index governance different from technical SEO?',
    answer: 'Technical SEO focuses on making content crawlable, indexable, and technically optimized for search engines. Index governance is a subset of technical SEO that specifically focuses on strategic control of what gets indexed and how. While technical SEO ensures pages can be indexed, index governance determines which pages should be indexed, which should be canonicalized, and which should be excluded to optimize overall site authority and AI visibility.'
  },
  {
    question: 'Does AI search use the same index as Google?',
    answer: 'AI search systems like ChatGPT, Perplexity, and Google AI Overviews primarily use indexed web content, but they may also use proprietary training data and real-time retrieval. Most AI systems crawl and index content similar to traditional search engines, meaning index governance affects AI visibility. However, AI systems may also use additional signals like entity authority, citation patterns, and trust indicators when selecting sources.'
  },
  {
    question: 'What happens if too many pages are indexed?',
    answer: 'Over-indexing dilutes site authority by including low-value, duplicate, or thin content in the index. This reduces the signal-to-noise ratio, making it harder for search engines and AI systems to identify authoritative content. Over-indexing can also lead to crawl budget waste, where search engines spend time crawling low-value pages instead of high-value content. Strategic index governance ensures only high-quality, unique content is indexed.'
  },
  {
    question: 'How do sitemaps affect AI discovery?',
    answer: 'Sitemaps signal to search engines and AI crawlers which pages should be prioritized for indexing. Well-structured sitemaps with proper segmentation (core pages, service pages, blog posts) help search engines and AI systems understand site architecture and prioritize high-value content. However, sitemaps are signals, not directives—index governance also requires canonical URLs, robots directives, and content quality controls to ensure proper indexing.'
  },
  {
    question: 'Is index governance important for programmatic SEO?',
    answer: 'Index governance is critical for programmatic SEO because programmatic systems generate large volumes of pages. Without governance, programmatic SEO can create thousands of low-value or duplicate pages that dilute site authority. Index governance ensures programmatic pages meet quality thresholds, use proper canonicalization, and are strategically indexed based on their value and uniqueness. Governance enables programmatic SEO to scale without compromising site authority.'
  },
  {
    question: 'Can pages be intentionally excluded from AI systems?',
    answer: 'Pages can be excluded from AI systems using robots.txt directives, meta noindex tags, and structured data controls. However, AI systems may still access excluded content if it is publicly accessible. The most effective approach is to use robots.txt for broad exclusions and meta noindex for specific pages, combined with canonical URLs to consolidate signals. Some AI systems respect robots.txt, while others may use different crawling policies.'
  },
  {
    question: 'How do canonical URLs affect AI trust?',
    answer: 'Canonical URLs establish the single source of truth for content, reducing duplicate signals and consolidating authority. When AI systems encounter multiple URLs with similar content, canonical URLs help them identify the authoritative version. This improves trust by ensuring AI systems reference the correct, authoritative page rather than duplicates or variations. Canonical URLs also help AI systems understand content relationships and entity definitions.'
  }
]

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.webvello.com/index-governance#webpage",
  "url": "https://www.webvello.com/index-governance",
  "name": "Index Governance",
  "about": {
    "@type": "Thing",
    "name": "Index Governance",
    "description": "The systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization",
    "name": "Webvello"
  },
  "mainEntity": {
    "@type": "Thing",
    "name": "Index Governance",
    "description": "Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems."
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function IndexGovernancePage() {
  const breadcrumbs = generateBreadcrumbs('/index-governance', { title: 'Index Governance' })

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={breadcrumbs} 
            className="mb-8"
          />
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Index Governance
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Strategic control of what content is indexed, trusted, and surfaced across search engines and AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="text-xl font-semibold text-secondary-900 mb-4">
              Index governance is the systems discipline of controlling what content is indexed, trusted, and surfaced across search engines and AI systems.
            </p>
            <p className="mb-4">
              It involves strategic use of canonical URLs, robots directives, sitemap architecture, route-level index control, and content quality thresholds to ensure that high-value, authoritative content is discoverable while low-value or duplicate content is excluded. Index governance operates at multiple layers—routing, canonicalization, sitemap structure, and content quality—to optimize the signal-to-noise ratio for both traditional search engines and AI systems.
            </p>
            <p>
              This discipline recognizes that not all content should be indexed, and that strategic exclusion is as important as strategic inclusion. Index governance ensures that search engines and AI systems encounter a coherent, authoritative content architecture rather than a diluted index with duplicate signals, thin content, or low-value pages that reduce overall site trust and visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why Index Governance Matters in AI Search */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Why Index Governance Matters in AI Search
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              AI retrieval depends on indexed, trusted sources. When AI systems generate answers, they retrieve information from indexed web content. <strong>Poor indexing</strong>—where high-value content is not indexed or is buried among low-value pages—results in <strong>AI invisibility</strong>. AI systems cannot cite or reference content that is not properly indexed and discoverable.
            </p>
            <p className="mb-4">
              Conversely, <strong>over-indexing</strong>—where too many low-value, duplicate, or thin pages are indexed—creates <strong>dilution and noise</strong>. This reduces the signal-to-noise ratio, making it harder for AI systems to identify authoritative content. Over-indexing can also lead to crawl budget waste, where search engines and AI crawlers spend time processing low-value pages instead of high-value content.
            </p>
            <p>
              Index governance optimizes this balance by ensuring that only high-quality, unique, authoritative content is indexed. This improves AI visibility by making it easier for AI systems to identify, trust, and cite authoritative sources. Strategic index governance is essential for AI search optimization because it directly affects retrieval, citations, and trust weighting.
            </p>
          </div>
        </div>
      </section>

      {/* Core Governance Controls */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Core Governance Controls
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Canonical URL Strategy</h3>
                <p className="text-secondary-700">Establishing single source of truth URLs for content to prevent duplicate indexing and consolidate authority signals. Canonical URLs help search engines and AI systems identify the authoritative version of content.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Robots/Index Directives</h3>
                <p className="text-secondary-700">Using robots.txt and meta robots tags to control crawling and indexing at the site and page level. Robots directives provide broad control, while meta tags offer page-specific control.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Database className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Sitemap Architecture and Segmentation</h3>
                <p className="text-secondary-700">Structuring sitemaps with proper segmentation (core pages, service pages, blog posts) to signal priority and help search engines and AI systems understand site architecture and content hierarchy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Settings className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Route-Level Index Control</h3>
                <p className="text-secondary-700">Implementing index control at the routing layer to govern which route patterns are indexable and which should be excluded. Route-level control enables systematic governance across programmatic page generation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Code className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Parameter Handling</h3>
                <p className="text-secondary-700">Controlling how URL parameters affect indexing to prevent duplicate content from parameter variations. Parameter handling ensures that only canonical parameter combinations are indexed.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Duplicate Suppression</h3>
                <p className="text-secondary-700">Identifying and suppressing duplicate content through canonicalization, redirects, or exclusion to prevent duplicate signals from diluting site authority and confusing search engines and AI systems.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Content Quality Thresholds</h3>
                <p className="text-secondary-700">Establishing quality thresholds that determine whether content meets indexing standards. Content quality thresholds ensure that only valuable, unique, and authoritative content is indexed.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <GitBranch className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Programmatic Page Gating</h3>
                <p className="text-secondary-700">Controlling indexation of programmatically generated pages based on quality metrics, uniqueness, and value. Programmatic gating ensures that only high-quality programmatic pages are indexed.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Network className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Internal Linking Flow Control</h3>
                <p className="text-secondary-700">Controlling internal linking to ensure that indexable pages receive appropriate link equity while excluded pages do not dilute authority signals. Internal linking flow control optimizes crawl distribution and authority flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Index Governance as a System */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Index Governance as a System
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Index governance operates as a layered architecture:
            </p>
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li><strong>Routing Layer:</strong> Route-level index control determines which route patterns are indexable and which should be excluded. This layer provides systematic governance across programmatic page generation and dynamic routing systems.</li>
              <li><strong>Index Control Layer:</strong> Robots directives, meta robots tags, and programmatic gating control what gets crawled and indexed. This layer provides both broad (robots.txt) and granular (meta tags, programmatic logic) control over indexing.</li>
              <li><strong>Canonical Layer:</strong> Canonical URLs establish single source of truth for content, preventing duplicate indexing and consolidating authority signals. This layer ensures that search engines and AI systems reference authoritative content versions.</li>
              <li><strong>Sitemap Layer:</strong> Sitemap architecture and segmentation signal priority and help search engines and AI systems understand site structure. This layer guides crawling and indexing priorities.</li>
              <li><strong>Content Quality Layer:</strong> Quality thresholds determine whether content meets indexing standards. This layer ensures that only valuable, unique, and authoritative content is indexed, preventing dilution from low-value pages.</li>
              <li><strong>Trust + Authority Layer:</strong> Internal linking flow control and duplicate suppression optimize authority distribution and prevent signal dilution. This layer ensures that indexable pages receive appropriate link equity and trust signals.</li>
            </ol>
            <p>
              These layers work together to create a coherent index governance system that optimizes signal-to-noise ratio, improves AI visibility, and ensures that search engines and AI systems encounter authoritative, well-structured content architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship to AI Search Optimization */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Relationship to AI Search Optimization
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Index governance directly affects AI search optimization in several ways:
            </p>
            <div className="space-y-4">
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI Retrieval</h3>
                <p className="text-secondary-700">AI systems retrieve information from indexed content. Index governance ensures that high-value, authoritative content is indexed and discoverable, making it available for AI retrieval. Poor index governance can result in AI systems missing authoritative content or encountering diluted signals that reduce trust.</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Citations</h3>
                <p className="text-secondary-700">AI systems cite indexed sources when generating answers. Index governance ensures that canonical, authoritative pages are indexed, making them available for citation. Proper canonicalization and duplicate suppression ensure that AI systems cite the correct, authoritative version of content.</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Trust Weighting</h3>
                <p className="text-secondary-700">AI systems evaluate trust based on content quality, authority signals, and consistency. Index governance improves trust weighting by ensuring that only high-quality, authoritative content is indexed, reducing noise and improving signal clarity. Strategic exclusion of low-value content improves overall site trust signals.</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Entity Recognition</h3>
                <p className="text-secondary-700">Index governance supports entity recognition by ensuring that canonical entity pages (About, Founder, service hubs) are indexed and discoverable. Proper indexation of entity-defining content helps AI systems identify, understand, and reference entities accurately.</p>
              </div>
            </div>
            <p className="mt-4">
              Index governance is a foundational component of AI search optimization because it directly controls what content is available for AI retrieval, citation, and trust evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Authority Hubs */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Related Authority Hubs
          </h2>
          <p className="text-lg text-secondary-700 mb-6">
            Explore related concepts and systems:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/ai-search-optimization" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI Search Optimization</h3>
              <p className="text-sm text-secondary-600">Systems practice for discoverability across Google and AI-powered search platforms.</p>
            </Link>
            <Link 
              href="/entity-seo" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Entity SEO</h3>
              <p className="text-sm text-secondary-600">Establishing clear entity signals for AI systems and search engines through structured data and semantic architecture.</p>
            </Link>
            <Link 
              href="/programmatic-seo" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Programmatic SEO</h3>
              <p className="text-sm text-secondary-600">Systematic, scalable page generation and content architecture for large-scale visibility.</p>
            </Link>
            <Link 
              href="/about" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">About Webvello</h3>
              <p className="text-sm text-secondary-600">Learn about Webvello's approach to AI Search Optimization and Index Engineering.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary-50 p-6 rounded-lg shadow-sm border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
