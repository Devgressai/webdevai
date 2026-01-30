import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import { Search, Database, GitBranch, Code, Network, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Webvello | AI Search Optimization, Entity SEO & Index Engineering',
  description: 'Webvello is an AI Search Optimization and Index Engineering company founded in 2024. We build discoverability systems for Google and AI search (ChatGPT, Perplexity, AI Overviews) using entity SEO, index governance, programmatic SEO, and modern web infrastructure.',
  keywords: 'Webvello, AI search optimization, entity SEO, index engineering, programmatic SEO, generative engine optimization, answer engine optimization, knowledge graphs, semantic architecture',
  openGraph: {
    title: 'About Webvello | AI Search Optimization, Entity SEO & Index Engineering',
    description: 'Webvello is an AI Search Optimization and Index Engineering company founded in 2024. We build discoverability systems for Google and AI search platforms.',
    url: 'https://webvello.com/about',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Webvello - AI Search Optimization & Index Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Webvello | AI Search Optimization, Entity SEO & Index Engineering',
    description: 'Webvello is an AI Search Optimization and Index Engineering company founded in 2024. We build discoverability systems for Google and AI search platforms.',
    images: ['https://webvello.com/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/about',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.webvello.com/#organization",
  "name": "Webvello",
  "alternateName": "Web Vello",
  "url": "https://www.webvello.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.webvello.com/logo.png",
    "width": 2048,
    "height": 2048
  },
  "description": "Webvello is an AI Search Optimization and Index Engineering company specializing in building discoverability systems for traditional search, AI-powered platforms (ChatGPT, Perplexity), and knowledge graphs. Founded by George Shvaya with background in information security and systems engineering.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "@id": "https://www.webvello.com/founder#person",
    "name": "George Shvaya",
    "url": "https://www.webvello.com/founder"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-530-553-8883",
    "contactType": "sales",
    "email": "hello@webvello.com",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/webvello"
  ],
  "knowsAbout": [
    "AI search optimization",
    "entity SEO",
    "index governance",
    "programmatic SEO",
    "generative engine optimization",
    "answer engine optimization",
    "knowledge graphs",
    "semantic architecture",
    "technical SEO",
    "web performance",
    "web security"
  ]
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('/about', { title: 'About' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Webvello — AI Search Optimization & Index Engineering
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Technical systems company building discoverability architectures for traditional search, AI-powered platforms, and knowledge graphs.
            </p>
          </div>
        </div>
      </section>

      {/* What Webvello Is */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            What Webvello Is
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="text-xl font-semibold text-secondary-900 mb-4">
              Webvello is an AI Search Optimization and Index Engineering company.
            </p>
            <p className="mb-4">
              We combine <strong>AI Search Optimization</strong>—building discoverability across all search modes—with <strong>Index Engineering</strong>—strategic control of indexation, crawl directives, and semantic architecture.
            </p>
            <p className="mb-4">
              Webvello is <strong>not a generic SEO agency</strong>. We are a specialized technical systems company focused on AI-era search visibility, entity authority, and knowledge graph integration.
            </p>
            <p>
              Founded in 2024 by George Shvaya, Webvello operates as a remote-first technical consultancy with expertise in information security, systems engineering, and search infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            What We Build
          </h2>
          <p className="text-lg text-secondary-700 mb-6">
            Webvello builds discoverability systems for three primary platforms:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Google</h3>
              </div>
              <p className="text-secondary-600">
                Traditional search engine optimization with technical SEO, content architecture, and authority building.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">AI Search</h3>
              </div>
              <p className="text-secondary-600">
                AI-powered search experiences including ChatGPT, Perplexity, Google AI Overviews, and similar platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Knowledge Graphs</h3>
              </div>
              <p className="text-secondary-600">
                Entity relationships, structured data, and semantic architecture for knowledge graph systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Core Capabilities
          </h2>
          <p className="text-lg text-secondary-700 mb-6">
            Webvello's service taxonomy:
          </p>
          <ul className="space-y-4 text-secondary-700">
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">AI Search Optimization:</span>
              <span>Building discoverability across all search modes—traditional search engines and AI-powered platforms.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">Entity SEO:</span>
              <span>Establishing clear entity signals for AI systems and search engines through structured data and semantic architecture.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">Generative Engine Optimization (GEO):</span>
              <span>Optimizing for AI-generated responses in ChatGPT, Perplexity, and AI Overviews.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">Answer Engine Optimization (AEO):</span>
              <span>Structuring content for featured snippets and zero-click search results.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">Index Governance:</span>
              <span>Strategic control of indexation policies, crawl directives, and robots.txt management.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">Programmatic SEO:</span>
              <span>Systematic, scalable page generation and content architecture for large-scale visibility.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-secondary-900 mr-2">React/Next.js Web Development:</span>
              <span>Performance-first websites built with modern React frameworks, optimized for search and AI discovery.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Systems Approach */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Systems Approach
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Webvello's methodology emphasizes:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Entity-first architecture:</strong> Designing information structures that align with how AI systems and knowledge graphs process entities and relationships.</li>
              <li><strong>Semantic structure:</strong> Using structured data, JSON-LD, and semantic HTML to create machine-readable content hierarchies.</li>
              <li><strong>Index governance controls:</strong> Strategic use of robots.txt, meta directives, and canonical URLs to control what gets indexed and how.</li>
              <li><strong>Performance + security as trust signals:</strong> Fast, secure websites that signal quality to both search engines and AI systems.</li>
            </ul>
            <p>
              This systems-oriented approach distinguishes Webvello from traditional marketing agencies that focus primarily on content creation and link building.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Founder
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Webvello was founded in 2024 by <Link href="/founder" className="text-primary-600 hover:text-primary-700 font-medium">George Shvaya</Link>, a technical founder with background in IT networking, information security, and cybersecurity engineering.
            </p>
            <p>
              This technical foundation informs Webvello's systems-oriented approach to search and AI discovery, emphasizing infrastructure engineering, entity architecture, and algorithmic analysis over traditional marketing tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Authority Links */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Core Service Pages
          </h2>
          <p className="text-lg text-secondary-700 mb-6">
            Explore Webvello's core capabilities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/ai-search-optimization" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI Search Optimization</h3>
              <p className="text-sm text-secondary-600">Discoverability systems for AI-powered search platforms.</p>
            </Link>
            <Link 
              href="/entity-seo" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Entity SEO</h3>
              <p className="text-sm text-secondary-600">Entity signals and authority for AI systems and search engines.</p>
            </Link>
            <Link 
              href="/index-governance" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Index Governance</h3>
              <p className="text-sm text-secondary-600">Strategic control of indexation and crawl directives.</p>
            </Link>
            <Link 
              href="/programmatic-seo" 
              className="block p-4 bg-white rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Programmatic SEO</h3>
              <p className="text-sm text-secondary-600">Systematic, scalable page generation and content architecture.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
