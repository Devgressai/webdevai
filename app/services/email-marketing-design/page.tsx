import { Button } from '../../../components/ui/button'
import { ArrowRight, Mail, Target, TrendingUp, CheckCircle, Eye, BarChart3, Zap, Users, Shield, MessageSquare, Send, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../../lib/utils'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Design Services | Conversion-Focused Campaigns | Web Vello',
  description: 'Increase open rates and revenue with Web Vello’s email marketing design studio. We craft on-brand, high-converting templates backed by testing and automation strategy.',
  keywords: ['email marketing design', 'email campaign design', 'responsive email templates', 'web vello email marketing', 'email conversion design'],
  alternates: {
    canonical: 'https://webvello.com/services/email-marketing-design',
  },
  openGraph: {
    title: 'Email Marketing Design Services | Web Vello',
    description: 'Partner with Web Vello to design on-brand, conversion-driven email campaigns that nurture and close customers.',
    url: 'https://webvello.com/services/email-marketing-design',
    type: 'website',
  }
}

const features = [
  {
    title: "Conversion-Focused Design",
    description: "Every email element is strategically designed to drive clicks, opens, and conversions.",
    icon: Target,
    benefits: ["Strategic CTAs", "Compelling visuals", "Clear messaging", "Mobile optimization"]
  },
  {
    title: "A/B Testing & Optimization",
    description: "Data-driven design improvements that maximize email performance and ROI.",
    icon: TrendingUp,
    benefits: ["Subject line testing", "Design variations", "Performance tracking", "Continuous improvement"]
  },
  {
    title: "Brand Consistency",
    description: "Maintain your brand identity across all email communications.",
    icon: Shield,
    benefits: ["Visual consistency", "Brand guidelines", "Professional appearance", "Trust building"]
  },
  {
    title: "Mobile-First Design",
    description: "Emails that look and perform perfectly on all devices and email clients.",
    icon: Mail,
    benefits: ["Mobile-optimized", "Cross-client compatibility", "Responsive design", "Better engagement"]
  }
]

const services = [
  {
    title: "Email Template Design",
    description: "Professional, conversion-focused email templates for all your campaigns.",
    icon: Mail,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "A/B Testing Strategy",
    description: "Comprehensive testing plans to optimize every aspect of your emails.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Performance Analytics",
    description: "Detailed reporting and insights to improve your email marketing ROI.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Campaign Optimization",
    description: "Continuous improvement of your email campaigns for better results.",
    icon: Zap,
    color: "from-purple-500 to-indigo-600"
  }
]

const results = [
  {
    metric: "400%+",
    description: "Average increase in click-through rates"
  },
  {
    metric: "60%",
    description: "Improvement in open rates"
  },
  {
    metric: "3x",
    description: "Increase in email conversions"
  },
  {
    metric: "250%+",
    description: "ROI improvement"
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

export default function EmailMarketingDesignPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Email Marketing Design", description: "Professional Email Marketing Design services", url: "https://webvello.com/services/email-marketing-design" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Mail className="w-4 h-4 mr-2" />
              Email Marketing Design & Testing
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Email Marketing That
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> Converts and Drives Revenue</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Transform your email marketing with conversion-focused design and data-driven testing. 
              Our emails don’t just get opened—they get clicked, convert, and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Design Your Email Campaigns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Email Results</Link>
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
              Why Choose Our Email Marketing Design Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We create email campaigns that don’t just look professional—they perform, 
              engaging subscribers and driving measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center mr-4">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Email Marketing Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From design to testing to optimization, we provide end-to-end email marketing 
              services that maximize your ROI and drive business growth.
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
              Real Results from Our Email Marketing Designs
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our email marketing campaigns consistently deliver measurable improvements 
              in open rates, click-through rates, and conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-pink-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
              Stop sending emails that get ignored. Our conversion-focused designs 
              and testing strategies will maximize your email marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contact">
                  Design Your Campaigns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <Link href="/case-studies">View Email Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
