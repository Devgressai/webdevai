import { Button } from '../../../components/ui/button'
import { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Building2, Calculator, Calendar, UserCheck, MessageSquare, 
  Phone, Mail, MapPin, FileText, UserPlus, Brain, Cpu, Network, 
  Database, Code, Bot, Sparkles, Layers, MessageCircle, HelpCircle, 
  BookOpen, FileQuestion 
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Answer Engine Optimization (AEO) Services | Web Vello',
  description: 'Capture visibility in AI assistants and answer engines. Web Vello structures content to deliver precise, authoritative answers across conversational search.',
  keywords: ['answer engine optimization', 'aeo services', 'ai assistant optimization', 'web vello aeo', 'conversational seo'],
  alternates: {
    canonical: 'https://webvello.com/services/answer-engine-optimization',
  },
  openGraph: {
    title: 'Answer Engine Optimization | Web Vello',
    description: 'Optimize content for AI answers and assistants with Web Vello’s structured response strategies and question-based content.',
    url: 'https://webvello.com/services/answer-engine-optimization',
    type: 'website',
  }
}

const features = [
  {
    icon: MessageCircle,
    title: "Question-Based Optimization",
    description: "Optimize your content to directly answer user questions and queries."
  },
  {
    icon: Search,
    title: "Featured Snippet Targeting",
    description: "Strategically position your content to capture featured snippets and answer boxes."
  },
  {
    icon: HelpCircle,
    title: "User Intent Optimization",
    description: "Align your content with specific user search intent and question patterns."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Answer Creation",
    description: "Create content that provides complete, authoritative answers to user questions."
  },
  {
    icon: Lightbulb,
    title: "Knowledge Graph Optimization",
    description: "Optimize for Google’s Knowledge Graph and other answer engine features."
  },
  {
    icon: Target,
    title: "Voice Search Optimization",
    description: "Optimize content for voice search queries and digital assistants."
  }
]

const optimizationAreas = [
  {
    title: "Question-Based Content Strategy",
    description: "Develop content strategies that directly address user questions and search queries with comprehensive answers.",
    features: ["Question research", "Answer optimization", "FAQ creation", "How-to content", "Problem-solution content", "Educational content"]
  },
  {
    title: "Featured Snippet Optimization",
    description: "Optimize your content to capture featured snippets, answer boxes, and other answer engine features.",
    features: ["Snippet targeting", "Content formatting", "Answer structure", "Competitive analysis", "Snippet monitoring", "Optimization testing"]
  },
  {
    title: "User Intent Alignment",
    description: "Ensure your content perfectly matches the specific intent behind user questions and search queries.",
    features: ["Intent analysis", "Query mapping", "Content alignment", "User journey optimization", "Conversion optimization", "Satisfaction metrics"]
  },
  {
    title: "Answer Engine Technical SEO",
    description: "Implement technical optimizations that help answer engines discover and understand your content.",
    features: ["Schema markup", "Structured data", "Technical optimization", "Performance optimization", "Mobile optimization", "Accessibility"]
  }
]

const process = [
  {
    step: "01",
    title: "Answer Engine Audit",
    description: "Comprehensive analysis of your current answer engine optimization status and identification of opportunities.",
    duration: "1-2 weeks",
    deliverables: ["AEO audit report", "Question opportunity analysis", "Competitive research", "Technical assessment"]
  },
  {
    step: "02",
    title: "Question Strategy Development",
    description: "Data-driven strategy development focusing on high-impact question-based optimization opportunities.",
    duration: "1 week",
    deliverables: ["Question strategy roadmap", "Content priority matrix", "Success metrics", "Implementation timeline"]
  },
  {
    step: "03",
    title: "Content Creation & Optimization",
    description: "Strategic creation and optimization of content that directly answers user questions.",
    duration: "2-3 weeks",
    deliverables: ["Question-based content", "Featured snippet optimization", "Schema implementation", "Performance monitoring"]
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "Continuous optimization based on answer engine performance and user satisfaction insights.",
    duration: "Ongoing",
    deliverables: ["Performance reports", "Optimization recommendations", "Scalability planning", "ROI tracking"]
  }
]

const results = [
  { metric: "Featured Snippet Capture", value: "267%", description: "Increase in featured snippet appearances" },
  { metric: "Answer Engine Visibility", value: "189%", description: "Improvement in answer engine results" },
  { metric: "User Satisfaction", value: "156%", description: "Higher than industry average" },
  { metric: "Search Engine Rankings", value: "134%", description: "Improvement in question-based searches" }
]

const caseStudies = [
  {
    title: "Educational Technology Platform",
    industry: "EdTech",
    challenge: "Low visibility in answer engine results and poor featured snippet performance",
    solution: "Implemented comprehensive AEO strategy including question-based content creation, featured snippet optimization, and technical answer engine readiness",
    results: [
      { metric: "Featured Snippets", before: "5/month", after: "23/month", improvement: "360%" },
      { metric: "Answer Engine Visibility", before: "18%", after: "67%", improvement: "272%" },
      { metric: "User Engagement", before: "2.3 min", after: "5.8 min", improvement: "152%" }
    ]
  },
  {
    title: "Healthcare Information Website",
    industry: "Healthcare",
    challenge: "Poor performance in health-related question searches and low answer engine recognition",
    solution: "Question-based content strategy, health schema markup implementation, and comprehensive answer optimization",
    results: [
      { metric: "Health Question Rankings", before: "Position 28", after: "Position 9", improvement: "68%" },
      { metric: "Answer Engine Recognition", before: "23%", after: "71%", improvement: "209%" },
      { metric: "Featured Snippet Rate", before: "2/month", after: "15/month", improvement: "650%" }
    ]
  }
]

const answerEngineStrategies = [
  {
    title: "Question Research & Analysis",
    description: "Identify the most valuable questions your target audience is asking and optimize your content accordingly.",
    tactics: ["Question research tools", "Search query analysis", "Competitive question research", "User intent mapping", "Question clustering", "Opportunity prioritization"]
  },
  {
    title: "Featured Snippet Optimization",
    description: "Strategically optimize your content to capture featured snippets and answer boxes in search results.",
    tactics: ["Snippet targeting", "Content formatting", "Answer structure", "Competitive analysis", "Snippet monitoring", "A/B testing"]
  },
  {
    title: "Answer-Focused Content Creation",
    description: "Create content that directly and comprehensively answers user questions with clear, authoritative responses.",
    tactics: ["Answer-first content", "Comprehensive coverage", "Clear formatting", "Visual aids", "Step-by-step guides", "Expert insights"]
  },
  {
    title: "Technical Answer Engine SEO",
    description: "Implement technical optimizations that help answer engines discover and understand your content.",
    tactics: ["Schema markup", "Structured data", "Technical optimization", "Performance optimization", "Mobile optimization", "Accessibility"]
  }
]

const tools = [
  "Google Search Console", "Google Analytics 4", "Answer the Public", "AlsoAsked", "SEMrush", "Ahrefs", "Moz", "Answer the Public", "People Also Ask", "Google Trends", "Schema.org", "Structured Data Testing Tool", "Rich Results Test", "PageSpeed Insights", "Core Web Vitals", "Mobile-Friendly Test"
]

const faqs = [
  {
    question: "What is Answer Engine Optimization (AEO) and how does it differ from traditional SEO?",
    answer: "Answer Engine Optimization (AEO) is the practice of optimizing your content specifically for answer engines, featured snippets, and question-based search queries. While traditional SEO focuses on general search engine optimization, AEO specifically targets the growing trend of users asking questions and expecting direct answers. This includes optimizing content structure, implementing question-based content strategies, targeting featured snippets, and ensuring your content directly answers user queries with comprehensive, authoritative responses."
  },
  {
    question: "How long does it take to see results from AEO optimization?",
    answer: "AEO optimization typically shows initial results within 2-4 weeks, with significant improvements appearing within 3-6 months. The timeline depends on your current answer engine optimization status, the complexity of your question-based content, and the specific optimizations implemented. Featured snippet optimization may show faster results, while comprehensive answer engine recognition may take longer to develop. We provide regular progress reports and can often identify early positive trends."
  },
  {
    question: "What are the key differences between optimizing for traditional search vs. answer engines?",
    answer: "Traditional search optimization focuses on keyword matching, backlinks, and general search engine factors, while answer engine optimization focuses on directly answering user questions, capturing featured snippets, and providing comprehensive answers. AEO requires more emphasis on question-based content creation, answer structure, user intent alignment, and technical optimizations that help answer engines understand and recommend your content. The goal shifts from general visibility to becoming the go-to source for specific answers."
  },
  {
    question: "How do you measure the success of AEO campaigns?",
    answer: "We measure AEO success through multiple metrics including featured snippet capture rates, answer engine visibility, user satisfaction scores, question-based search rankings, and overall search engine performance for question queries. We also track technical metrics like schema markup implementation, structured data optimization, and answer engine accessibility. Our comprehensive reporting provides both high-level business metrics and detailed technical insights."
  },
  {
    question: "Can AEO optimization work for all types of businesses and industries?",
    answer: "Yes, AEO optimization principles apply to all businesses and industries, but the specific strategies and content approaches vary based on your industry, target audience, and the types of questions your audience asks. B2B companies, e-commerce platforms, service businesses, and educational websites all benefit from AEO, but require different approaches. We customize our strategies to align with your specific business needs and question patterns."
  },
  {
    question: "How often should we update our AEO strategy?",
    answer: "AEO requires regular updates due to evolving user question patterns, search engine algorithm changes, and competitive landscape shifts. We recommend monthly strategy reviews and quarterly comprehensive audits. However, the frequency depends on your industry dynamics, question volume, and business goals. High-question industries may benefit from weekly optimizations, while more stable markets might need monthly updates. We continuously monitor question trends and recommend updates accordingly."
  }
]

export default function AnswerEngineOptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Answer Engine{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Optimization (AEO)
              </span>{" "}
              That Captures Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Optimize your content to become the go-to source for answers. Our AEO strategies ensure your 
              content captures featured snippets, dominates answer engine results, and directly answers 
              the questions your audience is asking.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free AEO Audit
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

      {/* What is AEO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                What is Answer Engine Optimization (AEO)?
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Answer Engine Optimization (AEO) is the specialized practice of optimizing your content 
                specifically for answer engines, featured snippets, and question-based search queries. 
                As search behavior evolves toward asking questions rather than typing keywords, AEO 
                ensures your content is perfectly positioned to capture these valuable search opportunities.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                AEO involves creating content that directly answers user questions, optimizing for 
                featured snippets and answer boxes, implementing question-based content strategies, 
                and ensuring your content is easily discoverable by answer engines. This approach 
                is essential as search engines increasingly prioritize providing direct answers to 
                user queries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Capture featured snippets and answer boxes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Dominate answer engine results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Directly answer user questions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-secondary-600">Improve user satisfaction and engagement</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Why AEO Matters Now</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-secondary-900">Question-Based Search Growth</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Search className="h-5 w-5 text-indigo-600" />
                  <span className="font-medium text-secondary-900">Featured Snippet Dominance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <HelpCircle className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-secondary-900">Direct Answer Expectations</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Building2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-secondary-900">Competitive Advantage</span>
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
              Why Choose Our AEO Services?
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We combine cutting-edge answer engine technology with proven optimization principles to create 
              content strategies that capture questions and dominate answer results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
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
              Comprehensive AEO Optimization Areas
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We optimize every critical aspect of your content for answer engines and question-based search.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizationAreas.map((area) => (
              <div key={area.title} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{area.title}</h3>
                <p className="text-secondary-600 mb-6">{area.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Answer Engine Strategies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Advanced Answer Engine Strategies
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Discover proven strategies that go beyond basic optimization to create 
              comprehensive answer engine domination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {answerEngineStrategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">{strategy.title}</h3>
                <p className="text-secondary-600 mb-6">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {strategy.tactics.map((tactic) => (
                    <div key={tactic} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-secondary-700">{tactic}</span>
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
              Our Proven AEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that ensures measurable improvements in your answer engine 
              visibility and featured snippet capture rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-blue-600 font-medium mb-3">
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
              Our AEO strategies consistently deliver exceptional results that directly impact 
              your answer engine visibility and featured snippet performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
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
              See how our AEO strategies have transformed businesses and delivered 
              measurable improvements in answer engine performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-medium">{study.industry}</p>
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
                          <span className="text-blue-600 font-semibold">{result.after}</span>
                          <span className="text-blue-600 text-xs">({result.improvement})</span>
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
              data-driven AEO optimization results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div key={tool} className="text-center">
                <div className="h-20 w-20 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-soft flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
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
              Get answers to the most common questions about our Answer Engine Optimization services.
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Answer Engine Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s optimize your content to capture featured snippets and become the go-to source 
            for answers. Get started with a free AEO audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free AEO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
