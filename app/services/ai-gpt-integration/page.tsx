import { Button } from '../../../components/ui/button'
import { ArrowRight, Layers, Zap, Database, Shield, Users, BarChart3, Globe, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & GPT Integration Services | Connect Models to Your Stack | Web Vello',
  description: 'Integrate GPT and AI capabilities into your products and workflows. Web Vello architects secure, scalable integrations with custom prompts, APIs, and data pipelines.',
  keywords: ['gpt integration services', 'ai integration agency', 'chatgpt api integration', 'web vello gpt', 'ai system integration'],
  alternates: {
    canonical: 'https://webvello.com/services/ai-gpt-integration',
  },
  openGraph: {
    title: 'AI & GPT Integration | Web Vello',
    description: 'Web Vello connects GPT and AI systems to your applications with secure infrastructure, data governance, and UX best practices.',
    url: 'https://webvello.com/services/ai-gpt-integration',
    type: 'website',
  }
}

// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];

export default function AIGPTIntegrationPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Ai Gpt Integration", description: "Professional Ai Gpt Integration services", url: "https://webvello.com/services/ai-gpt-integration" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Seamless{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                AI Integration
              </span>{" "}
              for Your Systems
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Integrate cutting-edge AI and GPT technology into your existing business systems 
              without disrupting operations or requiring complete overhauls.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/case-studies" className="text-sm font-semibold leading-6 text-secondary-900">
                View Case Studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Integration That Just Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our AI integration services ensure seamless connectivity between your existing systems 
              and the latest AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 mb-6">
                <Layers className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">API Integration</h3>
              <p className="text-secondary-600">
                Connect AI services to your existing applications through secure, scalable APIs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Data Pipeline Integration</h3>
              <p className="text-secondary-600">
                Seamlessly integrate AI processing into your existing data workflows and pipelines.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Real-time Processing</h3>
              <p className="text-secondary-600">
                Enable real-time AI processing and decision-making within your applications.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Security & Compliance</h3>
              <p className="text-secondary-600">
                Maintain your existing security standards while adding AI capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">User Experience</h3>
              <p className="text-secondary-600">
                Enhance user interfaces with AI-powered features and intelligent interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Analytics Integration</h3>
              <p className="text-secondary-600">
                Integrate AI insights with your existing analytics and reporting systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Integrate AI?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Let our integration experts seamlessly connect AI to your existing systems.
          </p>
          <Button size="lg" variant="secondary" className="text-indigo-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
