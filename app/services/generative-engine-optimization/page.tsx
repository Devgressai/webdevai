import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin, FileText, UserPlus, Brain, Cpu, Network, 
  Database, Code, Bot, Sparkles, Layers 
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Services | Web Vello',
  description: 'Prepare your brand for AI-driven search. Web Vello’s GEO program optimizes content for AI engines, chat results, and multimodal generative experiences.',
  keywords: ['generative engine optimization', 'geo services', 'ai search optimization', 'web vello geo', 'ai overview optimization'],
  alternates: {
    canonical: 'https://webvello.com/services/generative-engine-optimization',
  },
  openGraph: {
    title: 'Generative Engine Optimization | Web Vello',
    description: 'Ensure your brand appears in AI-powered SERPs with Web Vello’s GEO strategy for structured data, intent modeling, and conversational relevance.',
    url: 'https://webvello.com/services/generative-engine-optimization',
    type: 'website',
  }
}

const features = [
  {
    icon: Brain,
    title: "AI Content Optimization",
    description: "Optimize your content for AI-powered search engines and generative AI platforms."
  },
  {
    icon: Cpu,
    title: "Machine Learning Integration",
    description: "Leverage advanced ML algorithms to improve your search engine visibility."
  },
  {
    icon: Network,
    title: "Semantic Search Optimization",
    description: "Optimize for meaning-based search rather than just keyword matching."
  },
  {
    icon: Database,
    title: "Structured Data Enhancement",
    description: "Implement comprehensive schema markup for better AI understanding."
  },
  {
    icon: Code,
    title: "Technical SEO for AI",
    description: "Ensure your website is technically optimized for AI crawlers and algorithms."
  },
  {
    icon: Bot,
    title: "AI-Friendly Content",
    description: "Create content that AI systems can easily understand and recommend."
  }
]

const optimizationAreas = [
  {
    title: "Content AI Optimization",
    description: "Optimize your content to be easily understood and recommended by AI systems and generative search engines.",
    features: ["Natural language processing", "Semantic content structure", "AI-friendly formatting", "Context optimization", "Entity recognition", "Topic clustering"]
  },
  {
    title: "Technical AI Readiness",
    description: "Ensure your website is technically optimized for AI crawlers and machine learning algorithms.",
    features: ["Schema markup implementation", "Structured data optimization", "AI crawler accessibility", "Performance optimization", "Mobile-first indexing", "Core Web Vitals"]
  },
  {
    title: "AI Search Engine Optimization",
    description: "Optimize specifically for AI-powered search engines and generative search platforms.",
    features: ["AI algorithm understanding", "Search intent optimization", "Featured snippet optimization", "Voice search optimization", "Local AI search", "Multimodal search"]
  },
  {
    title: "AI Content Strategy",
    description: "Develop content strategies that align with how AI systems discover and recommend content.",
    features: ["AI content mapping", "Topic authority building", "Content freshness optimization", "AI engagement signals", "Cross-platform optimization", "AI content scoring"]
  }
]

const process = [
  {
    step: "01",
    title: "AI Readiness Assessment",
    description: "Comprehensive analysis of your current AI optimization status and identification of improvement opportunities.",
    duration: "1-2 weeks",
    deliverables: ["AI optimization audit", "Technical assessment", "Content analysis", "Competitive research"]
  },
  {
    step: "02",
    title: "AI Strategy Development",
    description: "Data-driven strategy development focusing on AI-specific optimization opportunities.",
    duration: "1 week",
    deliverables: ["AI optimization roadmap", "Priority matrix", "Success metrics", "Implementation timeline"]
  },
  {
    step: "03",
    title: "Implementation & Testing",
    description: "Strategic implementation of AI optimizations with continuous monitoring and testing.",
    duration: "2-3 weeks",
    deliverables: ["Technical updates", "Content optimization", "Schema implementation", "Performance monitoring"]
  },
  {
    step: "04",
    title: "AI Optimization & Scaling",
    description: "Continuous optimization based on AI algorithm changes and performance insights.",
    duration: "Ongoing",
    deliverables: ["Performance reports", "AI algorithm updates", "Optimization recommendations", "ROI tracking"]
  }
]

const results = [
  { metric: "AI Search Visibility", value: "189%", description: "Increase in AI-powered search results" },
  { metric: "Featured Snippet Rate", value: "156%", description: "Higher than industry average" },
  { metric: "AI Content Recognition", value: "234%", description: "Improvement in AI understanding" },
  { metric: "Search Engine Rankings", value: "89%", description: "Improvement in AI-powered searches" }
]

const caseStudies = [
  {
    title: "E-commerce Technology Platform",
    industry: "SaaS Technology",
    challenge: "Poor visibility in AI-powered search results and low featured snippet rates",
    solution: "Implemented comprehensive GEO strategy including content AI optimization, structured data enhancement, and technical AI readiness",
    results: [
      { metric: "AI Search Visibility", before: "12%", after: "34%", improvement: "183%" },
      { metric: "Featured Snippets", before: "3/month", after: "18/month", improvement: "500%" },
      { metric: "AI Content Recognition", before: "45%", after: "89%", improvement: "98%" }
    ]
  },
  {
    title: "Healthcare Information Website",
    industry: "Healthcare Information",
    challenge: "Low AI search engine rankings and poor content discovery by AI systems",
    solution: "Content strategy optimization for AI understanding, semantic search optimization, and technical AI readiness implementation",
    results: [
      { metric: "AI Search Rankings", before: "Position 23", after: "Position 7", improvement: "70%" },
      { metric: "AI Content Discovery", before: "28%", after: "67%", improvement: "139%" },
      { metric: "Voice Search Rankings", before: "Position 31", after: "Position 12", improvement: "61%" }
    ]
  }
]

const aiTechnologies = [
  {
    title: "Natural Language Processing",
    description: "Optimize your content for AI systems that understand natural language and context.",
    applications: ["Content optimization", "Search intent matching", "Semantic understanding", "Context optimization"]
  },
  {
    title: "Machine Learning Algorithms",
    description: "Leverage ML algorithms to improve your search engine visibility and AI recognition.",
    applications: ["Ranking optimization", "Content scoring", "User behavior analysis", "Performance prediction"]
  },
  {
    title: "Semantic Search Technology",
    description: "Optimize for meaning-based search rather than traditional keyword matching.",
    applications: ["Topic clustering", "Entity recognition", "Context optimization", "Related content optimization"]
  },
  {
    title: "AI Content Generation",
    description: "Create AI-friendly content that systems can easily understand and recommend.",
    applications: ["Content creation", "Optimization guidelines", "AI content scoring", "Performance monitoring"]
  }
]

const tools = [
  "Google Search Console", "Google Analytics 4", "Schema.org", "Structured Data Testing Tool", "Rich Results Test", "PageSpeed Insights", "Core Web Vitals", "Mobile-Friendly Test", "Search Console API", "Google Trends", "Semrush", "Ahrefs", "Moz", "Screaming Frog", "GTmetrix", "WebPageTest"
]

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?",
    answer: "Generative Engine Optimization (GEO) is the practice of optimizing your website and content specifically for AI-powered search engines and generative AI platforms. While traditional SEO focuses on keyword optimization and backlinks, GEO optimizes for AI understanding, semantic search, and machine learning algorithms. This includes optimizing content structure, implementing comprehensive schema markup, ensuring technical AI readiness, and creating content that AI systems can easily understand and recommend."
  },
  {
    question: "How long does it take to see results from GEO optimization?",
    answer: "GEO optimization typically shows initial results within 3-6 weeks, with significant improvements appearing within 3-6 months. The timeline depends on your current AI optimization status, the complexity of your website, and the specific optimizations implemented. Technical updates may show faster results, while content optimization and AI algorithm recognition may take longer to develop. We provide regular progress reports and can often identify early positive trends."
  },
  {
    question: "What are the key differences between optimizing for traditional search engines vs. AI-powered search?",
    answer: "Traditional search engines rely heavily on keyword matching, backlinks, and technical factors, while AI-powered search focuses on understanding content meaning, context, and user intent. AI optimization requires more emphasis on natural language processing, semantic content structure, comprehensive schema markup, and creating content that AI systems can easily understand. The goal shifts from keyword optimization to meaning and context optimization."
  },
  {
    question: "How do you measure the success of GEO campaigns?",
    answer: "We measure GEO success through multiple metrics including AI search visibility, featured snippet rates, AI content recognition scores, voice search rankings, and overall search engine performance in AI-powered results. We also track technical metrics like Core Web Vitals, schema markup implementation, and AI crawler accessibility. Our comprehensive reporting provides both high-level business metrics and detailed technical insights."
  },
  {
    question: "Can GEO optimization work for all types of businesses and industries?",
    answer: "Yes, GEO optimization principles apply to all businesses and industries, but the specific strategies and optimizations vary based on your industry, target audience, and content type. B2B companies, e-commerce platforms, and content-heavy websites all benefit from GEO, but require different approaches. We customize our strategies to align with your specific business needs and industry requirements."
  },
  {
    question: "How often should we update our GEO strategy?",
    answer: "GEO requires regular updates due to the rapid evolution of AI algorithms and search technologies. We recommend monthly strategy reviews and quarterly comprehensive audits. However, the frequency depends on your industry dynamics, AI algorithm changes, and business goals. High-tech industries may benefit from weekly optimizations, while more stable markets might need monthly updates. We continuously monitor AI algorithm changes and recommend updates accordingly."
  }
]

export default function GenerativeEngineOptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Generative Engine{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Optimization (GEO)
              </span>{" "}
              for AI-Powered Search
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Optimize your website for the future of search. Our GEO strategies ensure your content 
              is perfectly positioned for AI-powered search engines, generative AI platforms, and 
              machine learning algorithms that are reshaping digital discovery.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free GEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Success Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Generative Engine Optimization (GEO)?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Generative Engine Optimization (GEO) is the next evolution of search engine optimization, 
                specifically designed for AI-powered search engines and generative AI platforms. Unlike 
                traditional SEO that focuses on keyword optimization and backlinks, GEO optimizes your 
                content and website for artificial intelligence systems that understand meaning, context, 
                and user intent.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                GEO involves optimizing your content structure, implementing comprehensive schema markup, 
                ensuring technical AI readiness, and creating content that AI systems can easily understand, 
                process, and recommend. This approach is essential as search engines increasingly rely on 
                machine learning algorithms and AI-powered content discovery.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Optimize for AI-powered search engines and algorithms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Improve semantic search and AI content recognition</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Enhance featured snippet and voice search performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Future-proof your search engine optimization strategy</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why GEO Matters Now</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-secondary-900">AI-Powered Search Dominance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Cpu className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-secondary-900">Machine Learning Algorithms</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Network className="h-5 w-5 text-pink-600" />
                  <span className="font-medium text-secondary-900">Semantic Search Evolution</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Future-Proof Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our GEO Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge AI technology with proven optimization principles to create 
              search strategies that are ready for the future of search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive GEO Optimization Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We optimize every critical aspect of your website for AI-powered search engines 
              and machine learning algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizationAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{area.title}</h3>
                <p className="text-secondary-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced AI Technologies We Leverage
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover the cutting-edge AI technologies that power our GEO optimization strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiTechnologies.map((tech) => (
              <div key={tech.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{tech.title}</h3>
                <p className="text-secondary-600 mb-6">{tech.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {tech.applications.map((app) => (
                    <div key={app} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm text-secondary-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Proven GEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures measurable improvements in your AI search visibility 
              and AI content recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-indigo-600 font-medium mb-3">
                  {step.duration}
                </div>
                <div className="text-xs text-secondary-500">
                  {step.deliverables.join(", ")}
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
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our GEO strategies consistently deliver exceptional results that directly impact 
              your AI search visibility and content recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Real Results from Real Businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See how our GEO strategies have transformed businesses and delivered 
              measurable improvements in AI search performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-indigo-600 font-medium">{study.industry}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Challenge:</h4>
                  <p className="text-secondary-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">Solution:</h4>
                  <p className="text-secondary-600 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result.metric} className="flex justify-between items-center text-sm">
                        <span className="text-secondary-600">{result.metric}:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 line-through">{result.before}</span>
                          <ArrowRight className="h-3 w-3 text-secondary-400" />
                          <span className="text-indigo-600 font-semibold">{result.after}</span>
                          <span className="text-indigo-600 text-xs">({result.improvement})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Tools & Technology
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We leverage industry-leading tools and cutting-edge technology to deliver 
              data-driven GEO optimization results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-sm font-medium text-secondary-900">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our Generative Engine Optimization services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize for the Future of Search?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let’s optimize your website for AI-powered search engines and ensure you’re 
            ready for the future of digital discovery. Get started with a free GEO audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free GEO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
