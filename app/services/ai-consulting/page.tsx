import { Button } from '../../../components/ui/button'
import { ArrowRight, Brain, Zap, Target, TrendingUp, CheckCircle, Users, BarChart3, Building2, Globe, Cpu, Network, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting Services | Strategy, Roadmaps & Implementation | Web Vello',
  description: 'Translate AI into business outcomes. Web Vello’s AI consultants build roadmaps, select tech, and guide implementations that deliver measurable ROI.',
  keywords: ['ai consulting services', 'ai strategy firm', 'ai roadmap development', 'web vello ai', 'enterprise ai consulting'],
  alternates: {
    canonical: 'https://webvello.com/services/ai-consulting',
  },
  openGraph: {
    title: 'AI Consulting Services | Web Vello',
    description: 'Work with Web Vello’s AI consultants to prioritize use cases, select platforms, and successfully deploy AI across your organization.',
    url: 'https://webvello.com/services/ai-consulting',
    type: 'website',
  }
}

const services = [
  {
    title: "AI Strategy Development",
    description: "Comprehensive AI roadmap aligned with your business objectives and industry requirements.",
    icon: Target,
    benefits: ["Custom AI roadmap", "ROI analysis", "Implementation timeline", "Risk assessment"]
  },
  {
    title: "AI Technology Selection",
    description: "Expert guidance on choosing the right AI tools and platforms for your specific needs.",
    icon: Cpu,
    benefits: ["Technology evaluation", "Vendor assessment", "Cost-benefit analysis", "Scalability planning"]
  },
  {
    title: "AI Implementation Support",
    description: "Hands-on assistance with AI system deployment and integration into existing workflows.",
    icon: Building2,
    benefits: ["System integration", "Training programs", "Change management", "Ongoing support"]
  },
  {
    title: "AI Performance Optimization",
    description: "Continuous improvement of AI systems to maximize efficiency and business impact.",
    icon: TrendingUp,
    benefits: ["Performance monitoring", "Model optimization", "Data quality improvement", "ROI tracking"]
  }
]

const industries = [
  "Healthcare & Pharmaceuticals",
  "Financial Services",
  "Manufacturing & Logistics",
  "Retail & E-commerce",
  "Professional Services",
  "Technology & Software"
]

const process = [
  {
    step: "01",
    title: "AI Readiness Assessment",
    description: "Evaluate your organization’s current AI capabilities and identify opportunities."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a comprehensive AI strategy aligned with your business goals."
  },
  {
    step: "03",
    title: "Technology Selection",
    description: "Choose the right AI tools and platforms for your specific use cases."
  },
  {
    step: "04",
    title: "Implementation & Training",
    description: "Deploy AI solutions and train your team for maximum adoption."
  }
]

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

export default function AIConsultingPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Ai Consulting", description: "Professional Ai Consulting services", url: "https://webvello.com/services/ai-consulting" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Brain className="w-4 h-4 mr-2" />
              AI Consulting Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Strategic AI Consulting That
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Transforms Your Business</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Navigate the AI revolution with expert guidance. Our strategic consulting helps you identify, 
              implement, and optimize AI solutions that drive real business value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View AI Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive AI Consulting Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From strategy to implementation, we provide end-to-end AI consulting to help you leverage 
              artificial intelligence for business growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-secondary-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our AI consulting expertise spans across diverse industries, helping organizations 
              of all sizes leverage artificial intelligence for competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-secondary-900">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our AI Consulting Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              A systematic approach that ensures your AI initiatives are strategic, 
              well-planned, and deliver measurable business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Let our AI consulting experts help you navigate the artificial intelligence landscape 
              and implement solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  Schedule AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link href="/case-studies">View AI Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
