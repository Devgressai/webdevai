import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'
import { Search, Database, GitBranch, Code, Network, Shield, Zap, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Search Optimization (AEO/GEO) | Webvello',
  description: 'AI Search Optimization is the systems practice of making a brand and its content discoverable across Google and AI-powered search (ChatGPT, Perplexity, AI Overviews). Webvello builds entity-first, index-governed architectures that improve visibility in both traditional search and AI-generated answers.',
  keywords: 'AI search optimization, AEO, GEO, answer engine optimization, generative engine optimization, ChatGPT optimization, Perplexity optimization, AI overviews, entity SEO, index governance',
  openGraph: {
    title: 'AI Search Optimization (AEO/GEO) | Webvello',
    description: 'AI Search Optimization is the systems practice of making a brand and its content discoverable across Google and AI-powered search platforms. Webvello builds entity-first, index-governed architectures.',
    url: 'https://webvello.com/ai-search-optimization',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-ai-search-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Search Optimization - Webvello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search Optimization (AEO/GEO) | Webvello',
    description: 'AI Search Optimization is the systems practice of making a brand and its content discoverable across Google and AI-powered search platforms.',
    images: ['https://webvello.com/og-ai-search-optimization.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/ai-search-optimization',
  },
}

const faqs = [
  {
    question: 'What is AI Search Optimization?',
    answer: 'AI Search Optimization is the systems practice of making a brand and its content discoverable across both traditional search engines (Google) and AI-powered search platforms (ChatGPT, Perplexity, Google AI Overviews). It combines entity SEO, index governance, semantic architecture, and structured data to improve visibility in both search results and AI-generated answers. Unlike traditional SEO, AI Search Optimization emphasizes entity clarity, retrieval-friendly content, and trust signals that AI systems use when selecting sources.'
  },
  {
    question: 'Is AI Search Optimization the same as SEO?',
    answer: 'AI Search Optimization extends beyond traditional SEO. While SEO focuses primarily on ranking in Google search results, AI Search Optimization addresses both traditional search and AI-powered platforms that generate answers directly. It requires entity-first architecture, structured data for machine understanding, and content designed for retrieval and citation. Traditional SEO tactics like keyword density and link building remain relevant, but AI Search Optimization adds layers of entity signals, semantic structure, and index governance.'
  },
  {
    question: 'What is the difference between AEO and GEO?',
    answer: 'Answer Engine Optimization (AEO) focuses on optimizing for featured snippets and zero-click search results in traditional search engines. Generative Engine Optimization (GEO) targets AI-powered platforms like ChatGPT, Perplexity, and Google AI Overviews that generate original answers rather than displaying search results. Both are components of AI Search Optimization, but GEO requires stronger entity signals, citation-friendly content, and trust indicators that AI systems use when selecting sources to reference or cite.'
  },
  {
    question: 'How do AI systems decide what to cite or reference?',
    answer: 'AI systems evaluate sources based on entity authority, content quality, structured data signals, and trust indicators. They prioritize sources with clear entity definitions, semantic structure, and reliable information architecture. Performance metrics (page speed, security), internal linking graphs, and citation-friendly formats (definitions, FAQs, summaries) also influence citation decisions. AI systems are more likely to cite sources that demonstrate expertise, provide clear answers, and maintain consistent entity signals across their content.'
  },
  {
    question: 'What are the most important trust signals for AI search?',
    answer: 'The most important trust signals for AI search include entity clarity (clear Organization/Person/Brand definitions), semantic architecture (topic clusters and internal linking graphs), structured data (JSON-LD schema markup), performance and security (fast, secure websites), and content designed for retrieval (definitions, FAQs, summaries). AI systems also value consistent entity signals, authoritative backlinks, and content that demonstrates expertise in a specific domain.'
  },
  {
    question: 'Does schema help AI search?',
    answer: 'Yes, structured data (schema markup) helps AI search systems understand entity relationships, content types, and semantic hierarchies. JSON-LD schema provides machine-readable contracts that AI systems use to parse and understand content. Schema helps establish entity authority, clarify relationships between concepts, and signal content structure. However, schema alone is insufficient—it must be combined with entity-first architecture, quality content, and proper index governance to maximize AI search visibility.'
  },
  {
    question: 'How does index governance affect AI visibility?',
    answer: 'Index governance—strategic control of what gets indexed and how—directly affects AI visibility because AI systems primarily crawl and analyze indexed content. Proper index governance ensures that high-quality, entity-focused pages are indexed while low-value or duplicate content is excluded. This improves the signal-to-noise ratio for AI systems, making it easier for them to identify authoritative sources. Index governance also includes canonical strategies, robots.txt directives, and meta tag management that guide both search engines and AI crawlers.'
  }
]

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.webvello.com/ai-search-optimization#webpage",
  "url": "https://www.webvello.com/ai-search-optimization",
  "name": "AI Search Optimization",
  "about": {
    "@type": "Thing",
    "name": "AI Search Optimization",
    "description": "The systems practice of making a brand and its content discoverable across Google and AI-powered search platforms"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.webvello.com/#organization",
    "name": "Webvello"
  },
  "mainEntity": {
    "@type": "Thing",
    "name": "AI Search Optimization",
    "description": "AI Search Optimization is the systems practice of making a brand and its content discoverable across both traditional search engines (Google) and AI-powered search platforms (ChatGPT, Perplexity, Google AI Overviews)."
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

export default function AISearchOptimizationPage() {
  const breadcrumbs = generateBreadcrumbs('/ai-search-optimization', { title: 'AI Search Optimization' })

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
              AI Search Optimization
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Systems practice for discoverability across Google and AI-powered search platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="text-xl font-semibold text-secondary-900 mb-4">
              AI Search Optimization is the systems practice of making a brand and its content discoverable across both traditional search engines (Google) and AI-powered search platforms (ChatGPT, Perplexity, Google AI Overviews).
            </p>
            <p className="mb-4">
              It combines entity SEO, index governance, semantic architecture, and structured data to improve visibility in both search results and AI-generated answers. AI Search Optimization addresses the shift from traditional search result pages to AI systems that generate direct answers, retrieve sources, and cite content.
            </p>
            <p>
              This practice encompasses both <strong>Answer Engine Optimization (AEO)</strong>—optimizing for featured snippets and zero-click results in traditional search—and <strong>Generative Engine Optimization (GEO)</strong>—optimizing for AI platforms that generate original answers. Both require entity-first architecture, trust signals, and content designed for retrieval and citation.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI Search Changed SEO */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Why AI Search Changed SEO
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              The emergence of AI overviews, answer engines, and AI-powered search platforms has fundamentally changed how content is discovered and cited. Traditional SEO focused on ranking in search result pages, but AI systems generate answers directly, retrieve sources, and cite content—requiring different optimization strategies.
            </p>
            <p className="mb-4">
              AI systems prioritize <strong>entity trust</strong> and <strong>structured signals</strong> when selecting sources. They evaluate entity authority, semantic structure, and content quality more systematically than traditional search algorithms. This shift requires brands to establish clear entity definitions, build semantic architectures, and create content that AI systems can easily retrieve, understand, and cite.
            </p>
            <p>
              The citation model in AI search means that being discoverable requires not just ranking, but being selected as a trusted source. This emphasizes entity clarity, performance metrics, security signals, and content designed for retrieval rather than just keyword optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Core System Components */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Core System Components
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Network className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Entity Clarity</h3>
                <p className="text-secondary-700">Organization, Person, and Brand signals that establish clear entity definitions for AI systems and search engines. Entity clarity helps AI systems understand who you are, what you do, and why you're authoritative.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <GitBranch className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Semantic Architecture</h3>
                <p className="text-secondary-700">Topic clusters, internal linking graphs, and content hierarchies that create machine-readable relationships between concepts. Semantic architecture helps AI systems understand context and entity relationships.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Index Governance</h3>
                <p className="text-secondary-700">Strategic control of what should and shouldn't be indexed, including robots.txt directives, canonical URLs, and meta tag management. Index governance ensures high-quality content is discoverable while excluding low-value pages.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Code className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Programmatic Scalability</h3>
                <p className="text-secondary-700">Systematic page generation and content architecture that scales across large sites. Programmatic SEO enables consistent entity signals and semantic structure at scale.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Database className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Structured Data</h3>
                <p className="text-secondary-700">Schema markup (JSON-LD) that serves as machine contracts for AI systems and search engines. Structured data clarifies entity relationships, content types, and semantic hierarchies.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Performance + Security</h3>
                <p className="text-secondary-700">Fast, secure websites that signal quality and trustworthiness to both search engines and AI systems. Performance and security metrics influence citation decisions in AI search.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-primary-600 mt-1" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Content Designed for Retrieval</h3>
                <p className="text-secondary-700">Definitions, FAQs, summaries, and citation-friendly formats that AI systems can easily retrieve, parse, and cite. Content designed for retrieval improves visibility in AI-generated answers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webvello Approach */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Webvello Approach
          </h2>
          <div className="prose prose-lg max-w-none text-secondary-700">
            <p className="mb-4">
              Webvello approaches AI Search Optimization as an engineering process, not a marketing campaign. Our methodology includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 mb-4">
              <li><strong>Entity Mapping:</strong> Define clear entity signals (Organization, Person, Brand) and establish entity authority through structured data, internal linking, and consistent messaging across all touchpoints.</li>
              <li><strong>Architecture + Internal Linking Graph:</strong> Build semantic architectures with topic clusters, internal linking graphs, and content hierarchies that create machine-readable relationships between concepts and entities.</li>
              <li><strong>Index Governance + Canonical Strategy:</strong> Implement strategic index governance with robots.txt directives, canonical URLs, and meta tag management to ensure high-quality content is discoverable while excluding low-value pages.</li>
              <li><strong>Structured Data Layer:</strong> Deploy comprehensive JSON-LD schema markup that serves as machine contracts for AI systems, clarifying entity relationships, content types, and semantic hierarchies.</li>
              <li><strong>Measurement & Iteration:</strong> Track visibility in both traditional search and AI platforms, measure citation rates, and iterate on entity signals, content structure, and index governance based on performance data.</li>
            </ol>
            <p>
              This systems-first approach emphasizes infrastructure engineering, entity architecture, and algorithmic analysis over traditional marketing tactics like content creation and link building.
            </p>
          </div>
        </div>
      </section>

      {/* Related Authority Hubs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Related Authority Hubs
          </h2>
          <p className="text-lg text-secondary-700 mb-6">
            Explore related concepts and systems:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/entity-seo" 
              className="block p-4 bg-secondary-50 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Entity SEO</h3>
              <p className="text-sm text-secondary-600">Establishing clear entity signals for AI systems and search engines through structured data and semantic architecture.</p>
            </Link>
            <Link 
              href="/index-governance" 
              className="block p-4 bg-secondary-50 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Index Governance</h3>
              <p className="text-sm text-secondary-600">Strategic control of indexation and crawl directives for optimal search visibility.</p>
            </Link>
            <Link 
              href="/programmatic-seo" 
              className="block p-4 bg-secondary-50 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Programmatic SEO</h3>
              <p className="text-sm text-secondary-600">Systematic, scalable page generation and content architecture for large-scale visibility.</p>
            </Link>
            <Link 
              href="/about" 
              className="block p-4 bg-secondary-50 rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">About Webvello</h3>
              <p className="text-sm text-secondary-600">Learn about Webvello's approach to AI Search Optimization and Index Engineering.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
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
