import { Button } from '../../../components/ui/button'
import { ArrowRight, Zap, Brain, Target, TrendingUp, CheckCircle, Eye, BarChart3, Users, Shield, MessageSquare, Globe, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../../lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Digital Marketing Services | Intelligent Campaign Automation | Web Vello',
  description: 'Automate, personalize, and optimize every marketing touchpoint with Web Vello’s AI digital marketing team. Predictive analytics, AI content, and smart targeting powered by experts.',
  keywords: ['ai digital marketing', 'marketing automation agency', 'predictive marketing', 'ai-driven campaigns', 'web vello ai marketing'],
  alternates: {
    canonical: 'https://www.webvello.com/services/ai-digital-marketing',
  },
  openGraph: {
    title: 'AI Digital Marketing Services | Web Vello',
    description: 'Web Vello combines AI innovation with senior strategists to deliver multi-channel campaigns that continuously learn and scale.',
    url: 'https://www.webvello.com/services/ai-digital-marketing',
    type: 'website',
  }
}

const features = [
  {
    title: "AI-Powered Content Creation",
    description: "Generate high-quality, engaging content at scale using advanced AI algorithms.",
    icon: Brain,
    benefits: ["Automated content", "SEO optimization", "Brand consistency", "Scalable production"]
  },
  {
    title: "Predictive Analytics",
    description: "Use AI to predict customer behavior and optimize marketing campaigns in real-time.",
    icon: TrendingUp,
    benefits: ["Behavior prediction", "Real-time optimization", "ROI forecasting", "Customer insights"]
  },
  {
    title: "Personalization at Scale",
    description: "Deliver personalized experiences to every customer using AI-driven segmentation.",
    icon: Target,
    benefits: ["Dynamic content", "Behavioral targeting", "Customer segmentation", "Conversion optimization"]
  },
  {
    title: "Automated Campaign Management",
    description: "AI systems that manage and optimize your marketing campaigns automatically.",
    icon: Zap,
    benefits: ["Auto-optimization", "Performance monitoring", "Budget allocation", "Continuous improvement"]
  }
]

const services = [
  {
    title: "AI Content Marketing",
    description: "Automated content creation and optimization for better engagement and SEO.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "AI-Powered PPC",
    description: "Intelligent ad management and optimization for maximum ROI.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "AI Email Marketing",
    description: "Smart email campaigns that adapt to customer behavior and preferences.",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "AI Social Media",
    description: "Automated social media management with intelligent content optimization.",
    icon: Users,
    color: "from-pink-500 to-rose-600"
  }
]

const results = [
  {
    metric: "500%+",
    description: "Average increase in content production"
  },
  {
    metric: "300%",
    description: "Improvement in campaign ROI"
  },
  {
    metric: "4x",
    description: "Faster campaign optimization"
  },
  {
    metric: "200%+",
    description: "Increase in customer engagement"
  }
]

export default function AIDigitalMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-cyan-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              AI Digital Marketing Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              AI-Powered Marketing That
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Outperforms Traditional Methods</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Transform your digital marketing with AI-powered strategies that deliver unprecedented results. 
              Our AI systems don’t just automate—they learn, adapt, and continuously improve your marketing performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Start Your AI Marketing Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View AI Results</Link>
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
              Why Choose AI-Powered Digital Marketing?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              AI doesn’t just make marketing easier—it makes it smarter, more efficient, 
              and more effective than traditional methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mr-4">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive AI Digital Marketing Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From content creation to campaign optimization, our AI-powered services 
              cover every aspect of modern digital marketing.
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
              Real Results from AI-Powered Marketing
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our AI marketing systems consistently deliver measurable improvements 
              in efficiency, ROI, and overall marketing performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI Marketing?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Don’t get left behind. Our AI-powered marketing services will transform 
              your digital marketing and deliver results that traditional methods can’t match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start AI Marketing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/case-studies">View AI Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
