import { Button } from '../../../components/ui/button'
import { ArrowRight, Search, TrendingUp, BarChart3, Target, Zap, Globe, Users, FileText, Settings, CheckCircle, Shield, Award, Smartphone, ShoppingCart, Heart, Building2, Code, UserCheck, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { generatePageSchema } from '@/lib/clean-schema-generator'
import { BOFULeadForm } from '@/components/forms/bofu-lead-form'

export const metadata: Metadata = {
  title: 'Traditional SEO: Technical, On-Page & Link Building Experts | Webvello',
  description: 'Traditional SEO builds search visibility through technical optimization, on-page strategy, and authority building. Expert SEO services from Webvello.',
  keywords: ['traditional seo services', 'technical seo', 'on-page seo', 'seo optimization', 'seo foundation'],
  alternates: {
    canonical: 'https://www.webvello.com/services/seo',
  },
  openGraph: {
    title: 'Traditional SEO Services | Technical & On-Page Experts',
    description: 'Traditional SEO builds search visibility through technical optimization, on-page strategy, and authority building. Expert SEO services from Webvello.',
    url: 'https://www.webvello.com/services/seo',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/api/og?title=SEO%20Services&subtitle=Technical%2C%20On-Page%20%26%20Link%20Building&type=seo',
        width: 1200,
        height: 630,
        alt: 'SEO Services - Technical optimization with code preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traditional SEO: Technical, On-Page & Link Building | Webvello',
    description: 'Expert SEO services - technical optimization, on-page strategy, and authority building.',
    images: ['https://www.webvello.com/api/og?title=SEO%20Services&subtitle=Technical%20%26%20On-Page%20Optimization&type=seo'],
  }
}

const corePillars = [
  {
    icon: Settings,
    title: "Technical SEO",
    description: "The structural foundation that allows search engines to crawl, index, and understand your website efficiently.",
    elements: [
      "Site speed optimization and Core Web Vitals",
      "Mobile responsiveness and mobile-first indexing",
      "XML sitemaps and robots.txt configuration",
      "SSL certificates and HTTPS implementation",
      "Site architecture and URL structure",
      "Schema markup and structured data"
    ]
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Content-level optimization that makes individual pages relevant, valuable, and competitive for target keywords.",
    elements: [
      "Title tag optimization for click-through rates",
      "Meta description writing for engagement",
      "Header tag structure optimization",
      "Keyword research and strategic placement",
      "Content quality and relevance improvement",
      "Internal linking strategy"
    ]
  },
  {
    icon: Globe,
    title: "Off-Page SEO & Authority Building",
    description: "External signals that demonstrate credibility, trustworthiness, and industry authority to search engines.",
    elements: [
      "High-quality backlink acquisition",
      "Domain authority development",
      "Link building from authoritative sources",
      "Competitor backlink analysis",
      "Brand mention tracking",
      "Digital PR and media outreach"
    ]
  }
]

const seoProcess = [
  {
    step: "01",
    title: "Comprehensive SEO Audit",
    duration: "1-2 weeks",
    description: "We analyze your website's current state to identify opportunities and technical issues.",
    deliverable: "Complete SEO audit report with prioritized recommendations",
    items: [
      "Technical SEO health and crawlability",
      "Site speed and Core Web Vitals",
      "Mobile optimization and responsive design",
      "On-page optimization gaps",
      "Backlink profile and domain authority",
      "Competitive landscape analysis"
    ]
  },
  {
    step: "02",
    title: "Strategic Planning",
    duration: "1 week",
    description: "We develop a customized SEO strategy based on your business goals, target audience, and competitive position.",
    deliverable: "90-day SEO roadmap with clear objectives and timelines",
    items: [
      "Goal setting and KPI definition",
      "Keyword strategy and content planning",
      "Technical optimization roadmap",
      "Link building strategy development",
      "On-page optimization priorities",
      "Measurement and reporting setup"
    ]
  },
  {
    step: "03",
    title: "Implementation & Optimization",
    duration: "2-4 weeks",
    description: "We systematically implement technical fixes, on-page improvements, and begin authority-building campaigns.",
    deliverable: "Completed optimizations with before/after documentation",
    items: [
      "Technical SEO fixes (speed, mobile, crawling)",
      "On-page optimization (titles, meta, content)",
      "Schema markup implementation",
      "Internal linking improvements",
      "Content optimization and creation",
      "Initial link building outreach"
    ]
  },
  {
    step: "04",
    title: "Monitoring & Continuous Improvement",
    duration: "Ongoing",
    description: "SEO is not a one-time project—we continuously monitor performance and refine strategies based on data.",
    deliverable: "Monthly reports with insights, rankings, traffic trends, and next steps",
    items: [
      "Monthly performance reporting",
      "Ranking tracking and analysis",
      "Content performance optimization",
      "Link building campaign management",
      "Algorithm update adaptation",
      "Strategy refinement based on results"
    ]
  }
]

const results = [
  { icon: TrendingUp, metric: "Organic Traffic Growth", value: "200%+", description: "Average increase within 6 months" },
  { icon: Target, metric: "Keyword Rankings", value: "150%+", description: "More keywords on page one" },
  { icon: BarChart3, metric: "Click-Through Rate", value: "40%+", description: "Higher CTR from search results" },
  { icon: CheckCircle, metric: "Conversion Rate", value: "25%+", description: "Higher conversion from organic traffic" }
]

const industries = [
  { icon: ShoppingCart, name: "E-Commerce", description: "Product page optimization, category structure, schema markup, and conversion-focused strategies." },
  { icon: Heart, name: "Healthcare", description: "HIPAA-compliant optimization, medical content authority, local SEO for practices, and reputation management." },
  { icon: Shield, name: "Legal Services", description: "Competitive market strategies, local attorney SEO, content marketing, and legal directory optimization." },
  { icon: Building2, name: "Real Estate", description: "Local market optimization, property listing SEO, neighborhood pages, and lead generation strategies." },
  { icon: Code, name: "Technology & SaaS", description: "B2B SEO strategies, technical content optimization, software documentation, and industry thought leadership." },
  { icon: UserCheck, name: "Professional Services", description: "Service page optimization, local visibility, client case studies, and expertise demonstration." }
]

const faqs = [
  {
    question: "What is Traditional SEO?",
    answer: "Traditional SEO is the practice of optimizing websites to rank higher in search engine results through technical improvements, on-page optimization, and authority building. It includes site speed optimization, mobile responsiveness, keyword research, content optimization, internal linking, schema markup, and earning high-quality backlinks. Traditional SEO creates the foundational infrastructure that allows search engines to crawl, index, and rank your website effectively."
  },
  {
    question: "How is Traditional SEO different from AI SEO?",
    answer: "Traditional SEO focuses on manual optimization of technical elements, on-page content, and authority building using established best practices. AI SEO uses machine learning and artificial intelligence to automate analysis, predict content performance, and identify optimization opportunities faster. Traditional SEO is the foundation; AI SEO adds speed, automation, and predictive intelligence. Both work together—Traditional SEO ensures technical health while AI SEO accelerates optimization and identifies opportunities."
  },
  {
    question: "How long does Traditional SEO take to show results?",
    answer: "Most businesses see initial improvements in 60-90 days, with significant growth over 6-12 months. Traditional SEO is a compounding investment—rankings improve gradually as search engines recognize your site's authority, content quality, and technical excellence. Quick wins include technical fixes and on-page optimization, while authority building and competitive keyword rankings take 4-6 months. Sustainable results require consistent effort and strategic refinement."
  },
  {
    question: "Do I need Traditional SEO if I'm doing AI SEO or AEO?",
    answer: "Yes. Traditional SEO is the required foundation for AI SEO and Answer Engine Optimization to succeed. Without proper technical SEO (crawlability, site speed, mobile optimization), search engines cannot effectively index or rank your content—regardless of AI optimizations or answer-box formatting. Think of Traditional SEO as the infrastructure, AI SEO as the acceleration layer, and AEO as the featured snippet strategy. All three work together for maximum visibility."
  },
  {
    question: "What are the most important Traditional SEO ranking factors?",
    answer: "The most impactful factors are: (1) Technical health — crawlability, site speed, mobile optimization, and Core Web Vitals; (2) Content quality — relevance, depth, user value, and keyword optimization; (3) Backlinks — quality and relevance of external links pointing to your site; (4) User experience — engagement metrics, time on page, and bounce rate; (5) On-page optimization — title tags, meta descriptions, headers, and internal linking. All factors work together—optimizing one area improves overall performance."
  },
  {
    question: "Is Traditional SEO still effective in 2025?",
    answer: "Absolutely. Traditional SEO remains the foundation of all search visibility strategies. While AI and answer engines are changing how content is discovered, they still rely on traditional SEO fundamentals: crawlability, site speed, mobile optimization, quality content, and backlinks. Google's core algorithm still prioritizes technically sound, authoritative websites with valuable content. Traditional SEO has evolved to include Core Web Vitals, mobile-first indexing, and structured data—but the fundamentals remain essential."
  },
  {
    question: "How much does Traditional SEO cost?",
    answer: "Professional Traditional SEO services typically range from $2,500/month for small businesses to $10,000+/month for enterprises, depending on site size, competition level, and scope of work. One-time SEO audits range from $1,500-$5,000. Traditional SEO is a long-term investment—most businesses see ROI within 6-12 months as organic traffic and rankings improve. We offer customized packages based on your goals, budget, and competitive landscape."
  },
  {
    question: "Can I do Traditional SEO myself, or do I need an agency?",
    answer: "Basic SEO tasks (title optimization, meta descriptions, alt text) can be done in-house with the right knowledge. However, comprehensive Traditional SEO requires technical expertise (site speed optimization, schema markup, crawl management), link building relationships, competitive analysis tools, and ongoing algorithm knowledge. Most businesses benefit from agency expertise to avoid costly mistakes, achieve faster results, and focus internal teams on core business activities. We offer both full-service management and consulting for in-house teams."
  }
]

export default function TraditionalSEOPage() {
  const pageSchema = generatePageSchema({
    pageType: 'service',
    url: 'https://www.webvello.com/services/seo',
    title: 'Traditional SEO Services | Webvello',
    description: 'Traditional SEO builds search visibility through technical optimization, on-page strategy, and authority building. Expert SEO services from Webvello.',
    service: {
      name: 'Traditional SEO Services',
      description: 'Traditional SEO is the foundational practice of optimizing websites for search engines through technical improvements, on-page optimization, and authority building. We provide comprehensive SEO services including technical audits, on-page optimization, content strategy, and link building to improve search visibility and organic traffic.',
      type: 'Traditional SEO'
    },
    faqs: faqs,
    breadcrumbs: [
      { name: 'Home', url: 'https://www.webvello.com' },
      { name: 'Services', url: 'https://www.webvello.com/services' },
      { name: 'Traditional SEO', url: 'https://www.webvello.com/services/seo' }
    ]
  })

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema)
        }}
      />

      {/* Hero Section with Direct Answer */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Traditional SEO Services
            </h1>
            
            {/* Direct Answer Summary */}
            <div className="mt-6 text-xl leading-8 text-secondary-700 bg-white/80 rounded-xl p-6 shadow-sm">
              <p className="font-medium mb-4 text-secondary-900">
                What is Traditional SEO?
              </p>
              <p className="text-lg text-secondary-600">
                Traditional SEO is the foundational practice of optimizing websites for search engines through technical improvements, on-page optimization, and authority building. It focuses on making websites crawlable, indexable, and rankable by improving site structure, content quality, page speed, mobile responsiveness, and earning authoritative backlinks. Traditional SEO establishes the technical and content foundation that enables all other search strategies—including AI SEO and Answer Engine Optimization—to succeed.
              </p>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              What Traditional SEO Includes
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Traditional SEO encompasses three core pillars that work together to improve search visibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl bg-secondary-50 p-8 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mb-6">
                  <pillar.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {pillar.description}
                </p>

                <ul className="space-y-3">
                  {pillar.elements.map((element, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Traditional SEO is Essential */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              When Traditional SEO is Essential
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Traditional SEO is the required foundation for all search visibility strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">✓ Launching a New Website</h3>
              <p className="text-secondary-600">Proper technical setup, indexing configuration, and foundational optimization ensure search engines can discover and rank your site.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">✓ Fixing Technical Issues</h3>
              <p className="text-secondary-600">Crawl errors, slow page speeds, mobile usability problems, or indexing issues require traditional SEO expertise to diagnose and resolve.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">✓ Building Long-Term Authority</h3>
              <p className="text-secondary-600">Sustainable search visibility depends on earning authoritative backlinks, building domain authority, and establishing topical expertise.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">✓ Improving Site-Wide Performance</h3>
              <p className="text-secondary-600">Core Web Vitals, page speed, and mobile optimization impact every page on your site—traditional SEO addresses these systematically.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm md:col-span-2">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">✓ Supporting Advanced SEO Strategies</h3>
              <p className="text-secondary-600">AI SEO and Answer Engine Optimization (AEO) require a technically sound website foundation to deliver results. Traditional SEO creates that foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Traditional SEO Supports AI SEO and AEO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              How Traditional SEO Supports AI SEO and AEO
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Traditional SEO is not replaced by AI SEO or Answer Engine Optimization—it enables them
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Traditional SEO Creates the Foundation
              </h3>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ensures your website is crawlable and indexable by search engines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Establishes technical health (speed, mobile responsiveness, HTTPS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Builds domain authority through backlinks and content quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimizes site architecture for efficient crawling and user experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                AI SEO Adds Intelligence and Automation
              </h3>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Uses machine learning to identify high-opportunity keywords faster</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predicts content performance before publishing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automates competitive analysis and optimization recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accelerates traditional SEO tasks with data-driven insights</span>
                </li>
              </ul>
              <Link href="/services/ai-seo" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                Learn more about AI-Powered SEO Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                AEO Captures Featured Snippets
              </h3>
              <ul className="space-y-3 text-secondary-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Structures content to appear in position zero (answer boxes)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Optimizes for voice search and conversational queries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Formats information for quick, direct answers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Targets question-based keywords and featured snippets</span>
                </li>
              </ul>
              <Link href="/services/answer-engine-optimization" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                Learn more about Answer Engine Optimization (AEO)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-secondary-900">
              The Complete Strategy: Traditional SEO + AI SEO + AEO = Maximum search visibility across all result types
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Traditional SEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach to building sustainable search visibility
            </p>
          </div>

          <div className="space-y-12">
            {seoProcess.map((phase, index) => (
              <div key={phase.step} className="bg-white rounded-3xl p-8 shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600">{phase.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-secondary-900">
                        {phase.title}
                      </h3>
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-lg text-secondary-600 mb-6">
                      {phase.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {phase.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-600">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary-50 p-4 rounded-xl">
                      <p className="text-sm font-medium text-primary-900">
                        <strong>Deliverable:</strong> {phase.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Results You Can Expect
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Traditional SEO delivers sustainable, long-term growth when implemented correctly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <result.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-secondary-600">
              <strong>⏱️ Time to Results:</strong> Most clients see initial improvements in <strong>60-90 days</strong>, with compounding growth over <strong>6-12 months</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Traditional SEO Best Practices We Follow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 text-primary-600 mr-2" />
                White Hat Methods Only
              </h3>
              <p className="text-secondary-600">We use only Google-approved optimization techniques that build sustainable authority. No shortcuts, no penalties.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <Smartphone className="h-5 w-5 text-primary-600 mr-2" />
                Mobile-First Optimization
              </h3>
              <p className="text-secondary-600">Every optimization is tested and optimized for mobile devices, reflecting Google's mobile-first indexing approach.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <Zap className="h-5 w-5 text-primary-600 mr-2" />
                Core Web Vitals Focus
              </h3>
              <p className="text-secondary-600">We prioritize the metrics Google uses to measure page experience: LCP, FID, and CLS.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 text-primary-600 mr-2" />
                Content Quality Over Quantity
              </h3>
              <p className="text-secondary-600">We emphasize valuable, well-researched content that genuinely helps users rather than thin keyword-stuffed pages.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <Globe className="h-5 w-5 text-primary-600 mr-2" />
                Natural Link Building
              </h3>
              <p className="text-secondary-600">We earn backlinks through content quality, digital PR, and relationship building—not link schemes or paid directories.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                <BarChart3 className="h-5 w-5 text-primary-600 mr-2" />
                Data-Driven Decisions
              </h3>
              <p className="text-secondary-600">Every recommendation is backed by search data, competitive analysis, and performance metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our traditional SEO strategies are customized for industry-specific challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-secondary-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mr-4">
                    <industry.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{industry.name}</h3>
                </div>
                <p className="text-secondary-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-12 text-center">
              Frequently Asked Questions About Traditional SEO
            </h2>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-start">
                    <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Tools Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-12 text-center">
            SEO Resources & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link 
              href="/resources/what-is-local-seo" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">What is Local SEO?</h3>
              <p className="text-secondary-600 text-sm">Complete guide to local search optimization and Google Business Profile.</p>
            </Link>
            <Link 
              href="/resources/local-seo-cost" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local SEO Cost Guide</h3>
              <p className="text-secondary-600 text-sm">Understanding local SEO pricing and service tiers.</p>
            </Link>
            <Link 
              href="/resources/local-seo-checklist" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local SEO Checklist</h3>
              <p className="text-secondary-600 text-sm">Complete optimization checklist for 2024.</p>
            </Link>
            <Link 
              href="/compare/local-seo-vs-national-seo" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Local vs National SEO</h3>
              <p className="text-secondary-600 text-sm">Compare strategies and choose the right approach.</p>
            </Link>
            <Link 
              href="/tools/seo-audit" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Free SEO Audit Tool</h3>
              <p className="text-secondary-600 text-sm">Get a comprehensive SEO analysis of your website.</p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Contact Us</h3>
              <p className="text-secondary-600 text-sm">Get a custom SEO strategy for your business.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* BOFU Form Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Ready to Build Your SEO Foundation?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Let's implement proven Traditional SEO strategies that create sustainable organic growth. Get started with a free consultation and discover your optimization opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Comprehensive SEO Audit</h3>
                    <p className="text-secondary-600 text-sm">Complete analysis of your current SEO performance and opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Custom Strategy Development</h3>
                    <p className="text-secondary-600 text-sm">Tailored SEO roadmap based on your business goals and competitive landscape.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Ongoing Optimization</h3>
                    <p className="text-secondary-600 text-sm">Continuous improvement and monitoring to ensure sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BOFULeadForm 
                serviceInterest="seo"
                ctaTrackingId="seo-service-page-bofu"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
