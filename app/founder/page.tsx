import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import { Code, Network, Shield, Database, Search, GitBranch, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'George Shvaya | Founder of Webvello — AI Search Systems & Index Engineering',
  description: 'Founder of Webvello. Background in IT networking, cybersecurity, and information security. Builds AI search systems, index governance frameworks, and entity-based visibility architectures for modern search and AI discovery.',
  keywords: 'George Shvaya, Webvello founder, AI search systems, index engineering, cybersecurity, entity SEO, programmatic SEO, index governance, knowledge graphs',
  openGraph: {
    title: 'George Shvaya | Founder of Webvello — AI Search Systems & Index Engineering',
    description: 'Founder of Webvello. Background in IT networking, cybersecurity, and information security. Builds AI search systems, index governance frameworks, and entity-based visibility architectures.',
    url: 'https://webvello.com/founder',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://webvello.com/og-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'George Shvaya — Founder of Webvello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Shvaya | Founder of Webvello — AI Search Systems & Index Engineering',
    description: 'Founder of Webvello. Background in IT networking, cybersecurity, and information security. Builds AI search systems, index governance frameworks, and entity-based visibility architectures.',
    images: ['https://webvello.com/og-founder.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/founder',
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "George Shvaya",
  "jobTitle": "Founder & CEO",
  "affiliation": {
    "@type": "Organization",
    "name": "Webvello",
    "url": "https://webvello.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Western Governors University",
    "department": "Cybersecurity & Information Assurance"
  },
  "knowsAbout": [
    "AI search systems",
    "cybersecurity",
    "information security",
    "programmatic SEO",
    "index governance",
    "entity SEO",
    "knowledge graphs",
    "semantic web",
    "IT networking",
    "infrastructure engineering"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/georgewebvello/"
  ]
}

export default function FounderPage() {
  const breadcrumbs = generateBreadcrumbs('/founder', { title: 'Founder' })

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
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
              George Shvaya — Founder & Systems Architect, Webvello
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Technical founder focused on AI search systems, index engineering, and entity-based visibility architectures for modern search and AI discovery platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-secondary-700">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <Image
                  src="/images/george-shvaya.jpg"
                  alt="George Shvaya"
                  width={80}
                  height={80}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-xl font-semibold text-secondary-900 mb-0">
                    George Shvaya
                  </p>
                  <p className="text-sm text-secondary-600 mt-1 mb-0">
                    Founder & CEO, Webvello
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/georgewebvello/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium transition-colors text-sm whitespace-nowrap flex-shrink-0"
              >
                <Linkedin className="h-4 w-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <p className="mb-4">
              <strong>Domain Focus:</strong> AI search systems, index engineering, infrastructure architecture for search and AI discovery platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Background Section */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Technical Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Network className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">IT Networking</h3>
              </div>
              <p className="text-secondary-600">
                Infrastructure engineering and network architecture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Information Security</h3>
              </div>
              <p className="text-secondary-600">
                Security architecture and information assurance systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Cybersecurity Engineering</h3>
              </div>
              <p className="text-secondary-600">
                Systems-level security engineering and threat modeling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-semibold text-secondary-900">Education</h3>
              </div>
              <p className="text-secondary-600">
                Western Governors University — Cybersecurity & Information Assurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Focus Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Systems Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <Search className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">AI Search Optimization</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Building discoverability systems for AI-powered search platforms including ChatGPT, Perplexity, and Google AI Overviews.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <Database className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Entity SEO</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Establishing clear entity signals for AI systems and search engines through structured data and semantic architecture.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <GitBranch className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Index Governance</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Strategic control of indexation policies and crawl directives for optimal search visibility.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <Code className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Programmatic SEO</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Systematic, scalable page generation and content architecture for large-scale visibility.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <Network className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Semantic Architecture</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Designing information architectures that align with how AI systems and knowledge graphs process and understand content.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-200">
              <div className="flex items-center mb-3">
                <Database className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-secondary-900">Knowledge Graph Systems</h3>
              </div>
              <p className="text-sm text-secondary-600">
                Engineering entity relationships and structured data for integration with knowledge graph systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Engineering Orientation Section */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Research & Engineering Orientation
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Systems-oriented approach to search and AI discovery, emphasizing technical research, algorithmic analysis, and infrastructure engineering.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Technical researcher focused on AI/search trust models and ranking systems</li>
              <li>Systems thinker analyzing search infrastructure and discovery mechanisms</li>
              <li>Algorithmic analysis of search engine behavior and AI response generation</li>
              <li>Engineering approach to index governance and entity authority</li>
            </ul>
            <p>
              This technical orientation drives Webvello's focus on building discoverability systems rather than traditional marketing campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship to Webvello Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Relationship to Webvello
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700 mb-6">
            <p className="mb-4">
              As founder and systems architect, George Shvaya established Webvello as a specialized technical company focused on AI-era search visibility, rather than a generic marketing agency.
            </p>
            <p>
              Webvello builds discoverability systems for traditional search engines (Google) and AI-powered search platforms (ChatGPT, Perplexity, Google AI Overviews, knowledge graphs).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Link 
              href="/about" 
              className="block p-4 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">About Webvello</h3>
              <p className="text-sm text-secondary-600">Learn about the company's mission and approach to AI search systems.</p>
            </Link>
            <Link 
              href="/services/ai-search-optimization" 
              className="block p-4 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">AI Search Optimization</h3>
              <p className="text-sm text-secondary-600">Discoverability systems for AI-powered search platforms.</p>
            </Link>
            <Link 
              href="/services/entity-seo" 
              className="block p-4 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Entity SEO</h3>
              <p className="text-sm text-secondary-600">Entity signals and authority for AI systems and search engines.</p>
            </Link>
            <Link 
              href="/services/index-governance" 
              className="block p-4 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Index Governance</h3>
              <p className="text-sm text-secondary-600">Strategic control of indexation and crawl directives.</p>
            </Link>
            <Link 
              href="/services/programmatic-seo" 
              className="block p-4 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
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
