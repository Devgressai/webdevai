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
  title: 'GEO Services: Get Cited by ChatGPT & AI Search | Webvello',
  description: 'Get cited by ChatGPT, Perplexity & Google AI. Webvello's GEO services have helped 500+ businesses dominate AI search in 2024. Free audit shows your AI visibility now.',
  keywords: ['generative engine optimization', 'geo services', 'ai search optimization', 'web vello geo', 'ai overview optimization'],
  alternates: {
    canonical: 'https://www.webvello.com/services/generative-engine-optimization',
  },
  openGraph: {
    title: 'Generative Engine Optimization | Web Vello',
    description: 'Ensure your brand appears in AI-powered SERPs with Web Vello’s GEO strategy for structured data, intent modeling, and conversational relevance.',
    url: 'https://www.webvello.com/services/generative-engine-optimization',
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
  },
  {
    title: "Denver Plumbing Company",
    industry: "Local Services",
    challenge: "Not appearing in AI responses when users asked about emergency plumbing services in Denver",
    solution: "Optimized service pages with structured fact blocks, clear pricing ranges, and step-by-step problem-solving content with local entity optimization",
    results: [
      { metric: "AI Response Appearance", before: "0%", after: "73%", improvement: "New" },
      { metric: "Qualified Leads", before: "Baseline", after: "+34%", improvement: "34% increase" },
      { metric: "Brand Citations", before: "0/month", after: "45/month", improvement: "New" }
    ]
  },
  {
    title: "Project Management SaaS",
    industry: "Software & Technology",
    challenge: "Competitors consistently appeared in AI tool recommendations when users compared project management solutions",
    solution: "Restructured documentation and blog content using entity optimization and comparison tables, created comprehensive use-case scenarios",
    results: [
      { metric: "AI Recommendation Rate", before: "12%", after: "60%", improvement: "400%" },
      { metric: "Organic Trial Signups", before: "Baseline", after: "+127%", improvement: "127% increase" },
      { metric: "Brand Mentions in AI", before: "2/month", after: "10/month", improvement: "400%" }
    ]
  },
  {
    title: "Phoenix HVAC Company",
    industry: "Local Services",
    challenge: "Not appearing in local AI searches despite good Google Maps rankings",
    solution: "Created neighborhood-specific pages for Scottsdale, Tempe, Mesa, and Chandler with local climate data and service area details",
    results: [
      { metric: "Local AI Visibility", before: "0%", after: "68%", improvement: "New" },
      { metric: "Service Calls from AI", before: "Baseline", after: "+43%", improvement: "43% increase" },
      { metric: "Neighborhood Queries", before: "0", after: "12", improvement: "New coverage" }
    ]
  },
  {
    title: "Marketing Automation Platform",
    industry: "B2B SaaS",
    challenge: "Low visibility in AI-generated responses comparing marketing automation tools",
    solution: "Created 47 interconnected content pieces covering email marketing, automation workflows, CRM integration, and analytics with GEO-optimized structure",
    results: [
      { metric: "AI Response Appearance", before: "15%", after: "82%", improvement: "447%" },
      { metric: "Demo Requests", before: "Baseline", after: "+156%", improvement: "156% increase" },
      { metric: "Content Authority Score", before: "45%", after: "89%", improvement: "98%" }
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
    answer: "Generative Engine Optimization (GEO) is the practice of optimizing your website and content specifically for AI-powered search engines and generative AI platforms like ChatGPT, Claude, Perplexity, and Google SGE. While traditional SEO focuses on keyword optimization and backlinks to rank URLs in search results, GEO optimizes for AI understanding, semantic search, and machine learning algorithms. The key difference: SEO targets link clicks; GEO targets information extraction and brand attribution within AI-generated answers. Both are essential in 2025, as they serve different but complementary purposes in the modern search ecosystem."
  },
  {
    question: "How long does it take to see results from GEO optimization?",
    answer: "Initial results typically appear within 4-8 weeks of implementing GEO strategies. You'll start seeing your content referenced in AI responses for niche, long-tail queries first. Broader visibility for competitive terms usually takes 3-6 months as you build topical authority. Full market impact with consistent AI visibility across your industry typically requires 6-12 months of sustained GEO effort. The timeline varies based on your industry competitiveness, current content quality, and implementation thoroughness. Technical updates may show faster results, while content optimization and AI algorithm recognition may take longer to develop."
  },
  {
    question: "What are the key differences between optimizing for traditional search engines vs. AI-powered search?",
    answer: "Traditional search engines rely heavily on keyword matching, backlinks, and technical factors, while AI-powered search focuses on understanding content meaning, context, and user intent. AI optimization requires more emphasis on natural language processing, semantic content structure, comprehensive schema markup, and creating content that AI systems can easily understand. The goal shifts from keyword optimization to meaning and context optimization. AI systems extract and synthesize information from multiple sources, so your content must be structured for easy extraction with clear entities, definitions, and factual information."
  },
  {
    question: "How do you measure the success of GEO campaigns?",
    answer: "We measure GEO success through multiple metrics: (1) Citation Frequency – how often AI systems mention or cite your brand/content; (2) Branded Search Volume – increases in people searching for your brand after AI exposure; (3) Direct Traffic – visitors who arrive directly after discovering you through AI; (4) Query Coverage – number of relevant queries where you appear in AI responses; (5) Attribution Quality – whether AI systems cite you as an authority or recommend your solutions. We also track technical metrics like Core Web Vitals, schema markup implementation, and AI crawler accessibility. Use tools like ChatGPT, Claude, and Perplexity to manually test queries, and monitor Google Analytics for traffic pattern changes."
  },
  {
    question: "Can GEO optimization work for all types of businesses and industries?",
    answer: "Yes, GEO optimization principles apply to all businesses and industries. Small businesses often benefit more from GEO than large enterprises because GEO levels the playing field—AI systems don't inherently favor big brands; they favor clear, authoritative, well-structured content. Local service businesses, niche product companies, specialized B2B providers, e-commerce platforms, and content-heavy websites all benefit from GEO, but require different approaches. We customize our strategies to align with your specific business needs, industry requirements, and target audience."
  },
  {
    question: "How often should we update our GEO strategy?",
    answer: "GEO requires regular updates due to the rapid evolution of AI algorithms and search technologies. We recommend monthly strategy reviews and quarterly comprehensive audits. However, the frequency depends on your industry dynamics, AI algorithm changes, and business goals. High-tech industries may benefit from weekly optimizations, while more stable markets might need monthly updates. We continuously monitor AI algorithm changes and recommend updates accordingly. Content should be regularly updated with recent data and dates to maintain authority, as AI systems prioritize current information."
  },
  {
    question: "Which AI platforms should I optimize for?",
    answer: "Focus on these primary platforms in 2025: ChatGPT (OpenAI), Claude (Anthropic), Perplexity AI, Google SGE (Search Generative Experience), and Gemini (Google). While each has unique characteristics, content optimized for one generally performs well across all due to shared principles: clear structure, entity optimization, authoritative information, and semantic clarity. Start with general GEO best practices rather than platform-specific tactics, as the AI search landscape evolves rapidly. The goal is creating content that works across all AI platforms."
  },
  {
    question: "Do I need technical expertise to implement GEO?",
    answer: "Basic GEO implementation requires no coding skills. Content restructuring, adding clear headings, creating fact blocks, and writing comprehensive answers can be done by anyone who manages website content. Many businesses see 40-60% improvement in AI visibility from content-only optimizations before touching any technical elements. Advanced GEO (schema markup implementation, technical entity optimization, structured data) benefits from developer involvement but isn't mandatory for initial results. We provide both DIY guidance and full-service implementation options."
  },
  {
    question: "What content types work best for GEO?",
    answer: "AI systems favor these content types: (1) Comprehensive guides that thoroughly cover topics; (2) Comparison content with structured tables and pros/cons; (3) Step-by-step tutorials with numbered instructions; (4) FAQ pages with direct question-answer pairs; (5) Data-rich resources with statistics and research findings; (6) Definition and glossary pages; (7) Use-case and scenario-based content; (8) Problem-solution frameworks. The common thread: clear structure, specific information, and formats that make extraction easy for AI systems. Content should be both human-readable and AI-extractable."
  },
  {
    question: "How much does professional GEO optimization cost?",
    answer: "Professional GEO services range from $5,000-$15,000 for comprehensive site optimization, with enterprise strategies ranging $15,000-$50,000+. Monthly GEO maintenance and content optimization typically costs $1,000-$5,000 depending on scope. DIY implementation is possible with no financial cost (time investment only). Many agencies offer GEO audits for $2,000-$5,000 that identify optimization opportunities and provide actionable recommendations. ROI typically exceeds investment within 6-12 months through increased visibility, qualified leads, and market share gains. We offer flexible pricing packages to fit different business needs and budgets."
  },
  {
    question: "Will GEO replace traditional SEO?",
    answer: "No, GEO will not replace SEO; they work together synergistically. Traditional SEO remains important for website discovery, organic traffic, and ranking in conventional search results. GEO adds a new layer of optimization focused on AI extraction and citations. Think of them as complementary strategies: SEO gets your website found; GEO gets your information referenced. The most successful digital strategies in 2025 integrate both, ensuring visibility across traditional search engines and AI answer platforms. Businesses using integrated GEO + SEO approaches report 2-3x better results than single-strategy approaches."
  },
  {
    question: "What industries benefit most from GEO?",
    answer: "All industries benefit from GEO, but these see particularly strong results: (1) Professional services (legal, accounting, consulting) where AI provides recommendations; (2) Healthcare and medical practices where users research symptoms and treatments; (3) Software and technology companies where buyers compare solutions; (4) Local services (plumbing, HVAC, contractors) where users seek immediate help; (5) E-commerce brands competing for product recommendations; (6) B2B service providers where decision-makers research vendors. Any business that relies on being discovered during the research phase benefits significantly from GEO implementation."
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
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <span className="font-semibold">1.2B+</span> monthly AI users
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <span className="font-semibold">64%</span> prefer AI over Google
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <span className="font-semibold">84%</span> of queries show SGE
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                <span className="font-semibold">59%</span> zero-click searches
              </div>
            </div>
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
              <p className="text-lg text-secondary-600 mb-6">
                When someone asks ChatGPT "What's the best CRM for small businesses?" or asks Perplexity 
                "How do I optimize my website speed?", the AI system pulls from its training data and 
                real-time web sources to construct an answer. The businesses and websites that get mentioned 
                in that answer win the visibility and trust. Those that don't exist in a void.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-lg mb-3 text-secondary-900">The Search Landscape Has Transformed:</h4>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>1.2+ billion monthly users</strong> actively use ChatGPT, Claude, Perplexity, and similar AI search tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>64% of users under 35</strong> now prefer asking AI chatbots over traditional Google searches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Google's SGE</strong> now appears in 84% of commercial queries, pushing traditional results down</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Zero-click searches reached 59%</strong> in 2024, meaning users get answers without visiting websites</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>B2B buyers conduct 83%</strong> of their research using AI tools before contacting vendors</span>
                  </li>
                </ul>
              </div>
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

      {/* GEO vs SEO Comparison Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              GEO vs SEO: Understanding the Differences
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Both GEO and SEO are essential, but they serve different purposes in the modern search ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">Traditional SEO</th>
                    <th className="text-left p-4 font-semibold">GEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Primary Goal</td>
                    <td className="p-4 text-secondary-600">Rank URLs in search results</td>
                    <td className="p-4 text-secondary-600">Appear in AI-generated answers</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Target Platform</td>
                    <td className="p-4 text-secondary-600">Google, Bing search engines</td>
                    <td className="p-4 text-secondary-600">ChatGPT, Claude, Perplexity, SGE</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Success Metric</td>
                    <td className="p-4 text-secondary-600">Search ranking position</td>
                    <td className="p-4 text-secondary-600">Citation frequency in AI responses</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Content Focus</td>
                    <td className="p-4 text-secondary-600">Keywords and backlinks</td>
                    <td className="p-4 text-secondary-600">Entities and structured information</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">User Interaction</td>
                    <td className="p-4 text-secondary-600">Click-through to website</td>
                    <td className="p-4 text-secondary-600">Information extraction + attribution</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Optimization Approach</td>
                    <td className="p-4 text-secondary-600">Technical + on-page + off-page</td>
                    <td className="p-4 text-secondary-600">Semantic + structural + entity-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
            <p className="text-secondary-700">
              <strong>Key Insight:</strong> The most successful digital strategies in 2025 integrate both GEO and SEO. 
              SEO gets your website found; GEO gets your information referenced. Businesses using integrated approaches 
              report 2-3x better results than single-strategy approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Framework Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              GEO Implementation Framework
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach to implementing GEO across your digital properties
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="text-left p-4 font-semibold">Phase</th>
                    <th className="text-left p-4 font-semibold">Focus Area</th>
                    <th className="text-left p-4 font-semibold">Timeline</th>
                    <th className="text-left p-4 font-semibold">Expected Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Phase 1</td>
                    <td className="p-4 text-secondary-600">Entity & Schema Optimization</td>
                    <td className="p-4 text-secondary-600">Week 1-2</td>
                    <td className="p-4 text-secondary-600">Foundation for AI understanding</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Phase 2</td>
                    <td className="p-4 text-secondary-600">Content Structure Audit & Reform</td>
                    <td className="p-4 text-secondary-600">Week 3-4</td>
                    <td className="p-4 text-secondary-600">Improved extraction rates</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Phase 3</td>
                    <td className="p-4 text-secondary-600">Topical Cluster Development</td>
                    <td className="p-4 text-secondary-600">Week 5-8</td>
                    <td className="p-4 text-secondary-600">Topical authority establishment</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Phase 4</td>
                    <td className="p-4 text-secondary-600">AI Answer Monitoring & Iteration</td>
                    <td className="p-4 text-secondary-600">Week 9-12</td>
                    <td className="p-4 text-secondary-600">Visibility in AI responses</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-secondary-900">Phase 5</td>
                    <td className="p-4 text-secondary-600">Ongoing Optimization & Expansion</td>
                    <td className="p-4 text-secondary-600">Continuous</td>
                    <td className="p-4 text-secondary-600">Market share growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">10-Step GEO Implementation Checklist</h3>
              <ol className="space-y-2 text-secondary-700">
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">1.</span>
                  <span>Audit current content for entity clarity and semantic structure</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">2.</span>
                  <span>Implement schema markup (Organization, LocalBusiness, Article, FAQPage)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">3.</span>
                  <span>Restructure key pages with clear H1-H2-H3 hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">4.</span>
                  <span>Add fact blocks, comparison tables, and definition sections</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">5.</span>
                  <span>Create comprehensive FAQ sections answering micro-intent queries</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">6.</span>
                  <span>Develop topical clusters around your core business themes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">7.</span>
                  <span>Optimize internal linking to show topical relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">8.</span>
                  <span>Add author expertise indicators and about/credentials pages</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">9.</span>
                  <span>Test AI responses by querying ChatGPT, Claude, and Perplexity</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">10.</span>
                  <span>Monitor, measure, and iterate based on AI visibility results</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Pricing & Timeline Reference</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Pricing Ranges:</h4>
                  <ul className="space-y-1 text-sm text-secondary-700">
                    <li>• GEO Audit Services: $2,000 - $5,000</li>
                    <li>• Professional GEO Optimization: $5,000 - $15,000</li>
                    <li>• Enterprise GEO Strategy: $15,000 - $50,000+</li>
                    <li>• Ongoing GEO Maintenance: $1,000 - $5,000/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Implementation Timelines:</h4>
                  <ul className="space-y-1 text-sm text-secondary-700">
                    <li>• Basic Content Restructuring: 2-4 weeks</li>
                    <li>• Full Site GEO Optimization: 6-12 weeks</li>
                    <li>• First AI Visibility Results: 4-8 weeks</li>
                    <li>• Full Market Impact: 6-12 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO by Location Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              GEO Services by Location
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We provide remote GEO services nationwide. Explore location-specific strategies and market insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/geo-new-york" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-indigo-600">New York, NY</h3>
              <p className="text-secondary-600 text-sm">Financial services, legal firms, and professional markets in all five boroughs</p>
            </Link>
            
            <Link href="/services/geo-chicago" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-cyan-600">Chicago, IL</h3>
              <p className="text-secondary-600 text-sm">B2B manufacturing, trading firms, and Midwest business hub</p>
            </Link>
            
            <Link href="/services/geo-los-angeles" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-purple-600">Los Angeles, CA</h3>
              <p className="text-secondary-600 text-sm">Entertainment, tech, creative industries, and e-commerce brands</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/locations" className="text-primary-600 hover:text-primary-700 font-semibold underline">
              View All 37+ Cities We Serve →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Learn More About GEO
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Explore our comprehensive guides and resources on Generative Engine Optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/what-is-generative-engine-optimization-geo-2025" className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-indigo-600">What Is GEO? Complete 2025 Guide</h3>
              <p className="text-secondary-600 text-sm">Comprehensive guide to Generative Engine Optimization for businesses</p>
            </Link>
            <Link href="/blog/new-marketing-stack-geo-seo-ai-automation-2025" className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-emerald-600">The New Marketing Stack: GEO + SEO + AI</h3>
              <p className="text-secondary-600 text-sm">Learn how to integrate GEO, SEO, and AI automation for maximum growth</p>
            </Link>
            <Link href="/blog/best-practices-ai-ready-website-content-2025" className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-violet-600">AI-Ready Content Best Practices</h3>
              <p className="text-secondary-600 text-sm">Best practices for creating content optimized for AI systems</p>
            </Link>
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
