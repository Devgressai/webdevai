import { Button } from '../../../components/ui/button'
import { ArrowRight, Zap, Clock, Target, CheckCircle, Eye, TrendingUp, Users, Building2, BarChart3, DollarSign, Award, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rapid Web Design Services | Launch in Days | Web Vello',
  description: 'Need a conversion-ready website fast? Web Vello’s rapid web design sprints deliver polished, high-performing sites in days without sacrificing quality.',
  keywords: ['rapid web design', 'fast website launch', 'web design sprint', 'web vello rapid', 'quick website development'],
  alternates: {
    canonical: 'https://webvello.com/services/rapid-web-design',
  },
  openGraph: {
    title: 'Rapid Web Design | Web Vello',
    description: 'Launch a high-performing website in record time with Web Vello’s rapid design and development framework.',
    url: 'https://webvello.com/services/rapid-web-design',
    type: 'website',
  }
}

const features = [
  {
    title: "Lightning-Fast Delivery",
    description: "Get your website up and running in days, not weeks or months.",
    icon: Zap,
    benefits: ["Quick turnaround", "Rapid prototyping", "Fast iterations", "Quick market entry"]
  },
  {
    title: "Agile Development",
    description: "Flexible, iterative approach that adapts to your changing needs.",
    icon: Building2,
    benefits: ["Continuous feedback", "Quick adjustments", "Scalable solutions", "Future-proof design"]
  },
  {
    title: "Cost-Effective Solutions",
    description: "Professional results without the premium price tag of traditional development.",
    icon: DollarSign,
    benefits: ["Budget-friendly", "ROI focused", "Scalable pricing", "Transparent costs"]
  },
  {
    title: "Modern Technology Stack",
    description: "Built with cutting-edge tools for optimal performance and scalability.",
    icon: TrendingUp,
    benefits: ["Latest frameworks", "Mobile-first design", "SEO optimized", "Performance focused"]
  }
]

const process = [
  {
    step: "01",
    title: "Quick Discovery",
    description: "Rapid assessment of your needs and project scope in 24-48 hours."
  },
  {
    step: "02",
    title: "Fast Prototyping",
    description: "Quick wireframes and mockups to visualize your website concept."
  },
  {
    step: "03",
    title: "Rapid Development",
    description: "Efficient development using modern tools and proven frameworks."
  },
  {
    step: "04",
    title: "Quick Launch",
    description: "Fast deployment and immediate optimization for results."
  }
]

const results = [
  {
    metric: "5-10 Days",
    description: "Average project completion time"
  },
  {
    metric: "40%",
    description: "Cost savings vs traditional development"
  },
  {
    metric: "3x",
    description: "Faster time to market"
  },
  {
    metric: "95%",
    description: "Client satisfaction rate"
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

export default function RapidWebDesignPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Rapid Web Design", description: "Professional Rapid Web Design services", url: "https://webvello.com/services/rapid-web-design" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
              Rapid Web Design Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Get Your Website
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Up and Running in Days</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Need a website fast? Our rapid web design services deliver professional, 
              conversion-focused websites in days, not weeks. Perfect for businesses that need results now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Start Your Fast-Track Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See Rapid Results</Link>
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
              Why Choose Rapid Web Design?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Speed doesn’t mean sacrificing quality. Our rapid development process 
              delivers professional results quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mr-4">
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Rapid Development Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              A streamlined methodology that maximizes efficiency without compromising 
              on quality or results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
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
              Rapid Results That Speak for Themselves
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our rapid web design services consistently deliver fast results 
              without sacrificing quality or performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-600 via-orange-700 to-yellow-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Fast?
            </h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
              Don’t wait months for a website. Our rapid web design services 
              get you online quickly with professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start Your Fast-Track Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yellow-600">
                <Link href="/case-studies">View Rapid Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
