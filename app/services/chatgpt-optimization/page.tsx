import { Button } from '../../../components/ui/button'
import { ArrowRight, MessageSquare, Brain, Target, TrendingUp, CheckCircle, Eye, BarChart3, Zap, Users, Shield, Cpu, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../../lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Optimization Services | Prompt Engineering & Automation | Web Vello',
  description: 'Maximize ChatGPT ROI. Web Vello engineers prompts, workflows, and QA systems that produce on-brand, high-quality AI output for content, support, and operations.',
  keywords: ['chatgpt optimization', 'prompt engineering services', 'chatgpt automation', 'web vello chatgpt', 'chatgpt workflow design'],
  alternates: {
    canonical: 'https://webvello.com/services/chatgpt-optimization',
  },
  openGraph: {
    title: 'ChatGPT Optimization | Web Vello',
    description: 'Partner with Web Vello to optimize prompts, integrate ChatGPT into workflows, and maintain consistent, accurate AI output.',
    url: 'https://webvello.com/services/chatgpt-optimization',
    type: 'website',
  }
}

const features = [
  {
    title: "Prompt Engineering Excellence",
    description: "Expertly crafted prompts that maximize ChatGPT’s capabilities and output quality.",
    icon: Brain,
    benefits: ["Optimized prompts", "Better responses", "Consistent output", "Professional results"]
  },
  {
    title: "Workflow Integration",
    description: "Seamlessly integrate ChatGPT into your existing business processes and workflows.",
    icon: Zap,
    benefits: ["Process automation", "Efficiency gains", "Cost reduction", "Scalable operations"]
  },
  {
    title: "Content Optimization",
    description: "Use ChatGPT to enhance content creation, editing, and optimization across all channels.",
    icon: MessageSquare,
    benefits: ["Content scaling", "Quality improvement", "SEO optimization", "Brand consistency"]
  },
  {
    title: "Performance Analytics",
    description: "Track and optimize ChatGPT performance for maximum ROI and business impact.",
    icon: TrendingUp,
    benefits: ["Usage tracking", "ROI measurement", "Continuous improvement", "Cost optimization"]
  }
]

const services = [
  {
    title: "Prompt Engineering",
    description: "Custom prompt development for specific business use cases and objectives.",
    icon: Brain,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Workflow Automation",
    description: "Integrate ChatGPT into business processes for maximum efficiency gains.",
    icon: Zap,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Content Creation",
    description: "AI-powered content generation that maintains your brand voice and quality standards.",
    icon: MessageSquare,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Performance Optimization",
    description: "Continuous improvement of ChatGPT implementations for better results.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600"
  }
]

const results = [
  {
    metric: "400%+",
    description: "Average increase in content production"
  },
  {
    metric: "70%",
    description: "Reduction in content creation time"
  },
  {
    metric: "3x",
    description: "Faster workflow completion"
  },
  {
    metric: "250%+",
    description: "ROI improvement"
  }
]

export default function ChatGPTOptimizationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              ChatGPT Optimization Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Unlock ChatGPT’s Full
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Business Potential</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Transform your business operations with expertly optimized ChatGPT implementations. 
              Our optimization services don’t just improve ChatGPT usage—they maximize ROI and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Optimize Your ChatGPT Usage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View ChatGPT Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our ChatGPT Optimization Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We don’t just help you use ChatGPT—we help you use it strategically to 
              transform your business operations and maximize your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                </div>
                <p className="text-secondary-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
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

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive ChatGPT Optimization Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From prompt engineering to workflow integration, we provide end-to-end 
              ChatGPT optimization that maximizes your business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={cn(
                    "h-12 w-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r",
                    service.color
                  )}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Real Results from ChatGPT Optimization
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our ChatGPT optimization services consistently deliver measurable improvements 
              in efficiency, productivity, and business ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your ChatGPT Usage?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Don’t settle for basic ChatGPT usage. Our optimization services will 
              transform how you use AI to drive business growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start Optimization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/case-studies">View ChatGPT Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
