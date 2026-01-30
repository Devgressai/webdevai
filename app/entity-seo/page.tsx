import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import { Database, Network, GitBranch, Code, Shield, Link as LinkIcon, CheckCircle, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entity SEO | Knowledge Graph & Entity Signals for AI Search — Webvello',
  description: 'Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect a brand, person, or organization within knowledge graphs. Webvello builds entity-first architectures using structured data, semantic linking, and index governance.',
  keywords: 'entity SEO, knowledge graph, entity signals, structured data, organization schema, person schema, sameAs, entity authority, semantic SEO, AI search',
  openGraph: {
    title: 'Entity SEO | Knowledge Graph & Entity Signals for AI Search — Webvello',
    description: 'Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect entities within knowledge graphs.',
    url: 'https://webvello.com/entity-seo',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-entity-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'Entity SEO - Webvello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entity SEO | Knowledge Graph & Entity Signals for AI Search — Webvello',
    description: 'Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect entities within knowledge graphs.',
    images: ['https://webvello.com/og-entity-seo.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/entity-seo',
  },
}

const faqs = [
  {
    question: 'What is Entity SEO?',
    answer: 'Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect a brand, person, or organization within knowledge graphs. It involves using structured data, semantic linking, consistent identity information, and canonical entity pages to create stable entity definitions that AI systems and search engines can reference and cite.'
  },
  {
    question: 'What is an "entity" in Google Search?',
    answer: 'In Google Search, an entity is a distinct, identifiable thing—such as a person, organization, brand, place, or concept—that can be uniquely identified and understood by search systems. Entities are the building blocks of knowledge graphs, which map relationships between entities. Google uses entities to understand context, disambiguate queries, and generate AI answers that reference specific entities.'
  },
  {
    question: 'How is Entity SEO different from keyword SEO?',
    answer: 'Keyword SEO focuses on matching search queries to content through keyword optimization, while Entity SEO focuses on establishing clear entity definitions that search engines and AI systems can identify and trust. Entity SEO emphasizes structured data, semantic relationships, and consistent identity signals rather than keyword density. It creates machine-readable entity signals that enable knowledge graph integration and AI citations.'
  },
  {
    question: 'Does schema automatically create authority?',
    answer: 'Schema markup alone does not automatically create authority. Schema provides machine-readable signals that help search engines and AI systems understand entity definitions and relationships, but authority is built through consistent entity signals across multiple sources, quality content, external corroboration (profiles, citations), and trust indicators. Schema is a necessary component of Entity SEO, but it must be combined with semantic architecture, internal linking, and content quality.'
  },
  {
    question: 'What is the role of knowledge graphs in AI search?',
    answer: 'Knowledge graphs map relationships between entities and serve as the foundation for AI search systems. When AI systems generate answers, they retrieve information from knowledge graphs that connect entities, facts, and relationships. Entity SEO helps establish entities within knowledge graphs, making them discoverable and citable by AI systems. Strong entity signals improve the likelihood that an entity will be included in knowledge graphs and referenced in AI-generated answers.'
  },
  {
    question: 'What are "sameAs" links and why do they matter?',
    answer: 'SameAs links connect an entity across multiple platforms (LinkedIn, GitHub, Wikipedia, etc.) using the schema.org sameAs property. They help search engines and AI systems verify entity identity by linking official profiles and establishing that multiple URLs represent the same entity. SameAs links reduce ambiguity, strengthen entity signals, and help build authority by showing consistent identity across platforms.'
  },
  {
    question: 'How long does entity recognition take?',
    answer: 'Entity recognition timeframes vary based on entity complexity, existing online presence, and signal strength. Simple entities with clear definitions, consistent signals, and external corroboration may be recognized within weeks or months. Complex entities or those with ambiguous signals may take longer. Consistent entity signals, quality content, and external profiles accelerate recognition. There is no fixed timeline, but systematic Entity SEO practices improve recognition speed.'
  },
  {
    question: 'What pages should exist for entity clarity?',
    answer: 'Key pages for entity clarity include an About page that defines the organization, a Founder/Person page for key individuals, service or product pages that establish expertise, and hub pages that create semantic relationships. These pages should use structured data (Organization, Person, Brand schemas), maintain consistent identity information, and link internally to create a clear entity graph. Canonical entity pages serve as the single source of truth for entity definitions.'
  }
]

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.webvello.com/entity-seo#webpage",
  "url": "https://www.webvello.com/entity-seo",
  "name": "Entity SEO",
  "about": {
    "@type": "Thing",
    "name": "Entity SEO",
    "description": "The practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect entities within knowledge graphs"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization",
    "name": "Webvello"
  },
  "mainEntity": {
    "@type": "Thing",
    "name": "Entity SEO",
    "description": "Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect a brand, person, or organization within knowledge graphs."
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

export default function EntitySEOPage() {
  const breadcrumbs = generateBreadcrumbs('/entity-seo', { title: 'Entity SEO' })

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
              Entity SEO
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Establishing clear, machine-readable entity signals for knowledge graphs and AI search systems.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="text-xl font-semibold text-secondary-900 mb-4">
              Entity SEO is the practice of establishing clear, machine-readable entity signals so search engines and AI systems can identify, trust, and connect a brand, person, or organization within knowledge graphs.
            </p>
            <p className="mb-4">
              Entities—distinct, identifiable things like organizations, people, brands, places, or concepts—form the building blocks of knowledge graphs. Entity SEO ensures these entities are clearly defined, consistently represented, and properly connected to enable accurate disambiguation, knowledge graph integration, and AI citations.
            </p>
            <p>
              This practice uses structured data (Organization, Person, Brand schemas), semantic linking, consistent identity information, and canonical entity pages to create stable entity definitions. When AI systems retrieve and synthesize information, they rely on these entity signals to identify sources, establish trust, and generate accurate citations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Entities Matter in AI Search */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Why Entities Matter in AI Search
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              AI systems retrieve and synthesize information from multiple sources, requiring stable entity identifiers to accurately connect facts, relationships, and citations. Unlike traditional search that matches keywords to content, AI search systems need to understand <strong>what</strong> entities are, <strong>how</strong> they relate to each other, and <strong>why</strong> they should be trusted.
            </p>
            <p className="mb-4">
              When AI systems generate answers, they evaluate entities based on <strong>citations</strong> (can this entity be verified?), <strong>trust</strong> (is this entity authoritative?), and <strong>authority</strong> (does this entity have consistent signals across sources?). Entity SEO establishes these signals systematically.
            </p>
            <p>
              Consistency across sources is critical. AI systems cross-reference entity information from multiple platforms, knowledge graphs, and websites. When entity signals are consistent—same name, same relationships, same identity information—AI systems can confidently identify, trust, and cite entities. Inconsistent or ambiguous entity signals reduce trust and citation likelihood.
            </p>
          </div>
        </div>
      </section>

      {/* Core Entity Signals */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Core Entity Signals
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Consistent NAP/Identity Information</h3>
                <p className="text-secondary-700">Name, Address, Phone (NAP) and other identity information must be consistent across all platforms, directories, and web properties. Consistency helps search engines and AI systems verify entity identity and reduces ambiguity.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Network className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Organization + Person Relationships</h3>
                <p className="text-secondary-700">Clear relationships between organizations and people (founder, employee, brand affiliation) establish entity hierarchies and authority. These relationships should be defined in structured data and content.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <LinkIcon className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">SameAs Profiles</h3>
                <p className="text-secondary-700">SameAs links connect entities across platforms (LinkedIn, GitHub, Wikipedia, etc.) using schema.org sameAs properties. They verify entity identity and strengthen signals by showing consistent presence across multiple sources.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Database className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Structured Data</h3>
                <p className="text-secondary-700">JSON-LD schema markup (Organization, Person, WebSite, Brand) provides machine-readable entity definitions. Structured data serves as contracts that search engines and AI systems use to understand entity identity and relationships.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <GitBranch className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Semantic Internal Linking</h3>
                <p className="text-secondary-700">Topic clusters and internal linking graphs create semantic relationships between entities and concepts. Internal linking helps search engines and AI systems understand entity context and authority within a domain.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Canonical Consistency</h3>
                <p className="text-secondary-700">Single source of truth URLs (canonical entity pages) prevent duplicate entity signals and ensure search engines and AI systems reference the authoritative entity definition. Canonical consistency reduces ambiguity and strengthens entity authority.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Code className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Content Patterns That Define Entities</h3>
                <p className="text-secondary-700">Definitions, About pages, Founder pages, and hub pages that explicitly define entities help search engines and AI systems understand entity identity, expertise, and relationships. These content patterns serve as human-readable entity definitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Entity Architecture */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Practical Entity Architecture
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Entity SEO implementation follows a technical sequence:
            </p>
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li><strong>Entity Inventory and Disambiguation Map:</strong> Identify all entities (organizations, people, brands) and create a disambiguation map that defines each entity clearly, distinguishes similar entities, and establishes naming conventions. This map serves as the foundation for consistent entity signals.</li>
              <li><strong>Canonical Entity Pages:</strong> Create authoritative entity pages (e.g., /about for organizations, /founder for key people) that serve as the single source of truth for entity definitions. These pages should use structured data, maintain consistent identity information, and link internally to establish entity relationships.</li>
              <li><strong>Schema Graph Layer:</strong> Deploy comprehensive JSON-LD schema markup (Organization, Person, WebSite, Brand) that creates a machine-readable entity graph. The schema layer should define entity relationships, sameAs links, and identity information consistently across all pages.</li>
              <li><strong>Internal Authority Hubs and Linking Graph:</strong> Build internal linking structures that connect entities to related concepts, services, and content. Topic clusters and hub pages create semantic relationships that help search engines and AI systems understand entity context and authority.</li>
              <li><strong>External Corroboration:</strong> Establish consistent entity presence across external platforms (LinkedIn, GitHub, Wikipedia, directories) and link these profiles using sameAs properties. External corroboration strengthens entity signals by showing consistent identity across multiple sources.</li>
            </ol>
            <p>
              This technical sequence ensures entity signals are consistent, machine-readable, and verifiable across both internal and external sources.
            </p>
          </div>
        </div>
      </section>

      {/* How Entity SEO Connects to Webvello Systems */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            How Entity SEO Connects to Webvello Systems
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Entity SEO is a foundational component of Webvello's systems approach:
            </p>
            <div className="space-y-4">
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI Search Optimization</h3>
                <p className="text-secondary-700">Entity SEO establishes the entity signals that AI systems use when retrieving and citing sources. Clear entity definitions, structured data, and consistent identity information enable AI systems to identify, trust, and reference entities in generated answers.</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Index Governance</h3>
                <p className="text-secondary-700">Index governance ensures canonical entity pages are indexed while duplicate or low-value entity signals are excluded. Strategic indexation of entity pages improves signal-to-noise ratio and strengthens entity authority by ensuring search engines and AI systems reference authoritative entity definitions.</p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Programmatic SEO</h3>
                <p className="text-secondary-700">Programmatic SEO enables consistent entity signals at scale across large sites. Systematic page generation ensures entity definitions, structured data, and semantic relationships are maintained consistently, creating a coherent entity graph that search engines and AI systems can navigate and understand.</p>
              </div>
            </div>
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
              href="/index-governance" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Index Governance</h3>
              <p className="text-sm text-secondary-600">Strategic control of indexation and crawl directives for optimal search visibility.</p>
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
            <Link 
              href="/founder" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Founder</h3>
              <p className="text-sm text-secondary-600">George Shvaya — Founder & Systems Architect, Webvello.</p>
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
