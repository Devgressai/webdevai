import { Button } from '../../../components/ui/button'
import { ArrowRight, Palette, Monitor, TrendingUp, CheckCircle, Eye, Target, BarChart3, Zap, Users, Clock, Award, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Redesign Services | Modernize & Improve Conversions | Web Vello',
  description: 'Refresh your outdated website with Web Vello’s redesign team. We preserve SEO equity, improve performance, and launch conversion-focused experiences.',
  keywords: ['website redesign agency', 'website refresh services', 'web vello redesign', 'conversion focused redesign', 'modernize website'],
  alternates: {
    canonical: 'https://webvello.com/services/website-redesign',
  },
  openGraph: {
    title: 'Website Redesign Services | Web Vello',
    description: 'Partner with Web Vello to transform your site into a high-performing, modern experience that accelerates growth.',
    url: 'https://webvello.com/services/website-redesign',
    type: 'website',
  }
}

const features = [
  {
    title: "Performance Optimization",
    description: "Transform slow, outdated websites into lightning-fast, modern experiences.",
    icon: Zap,
    benefits: ["Faster loading times", "Better user experience", "Improved SEO rankings", "Higher conversion rates"]
  },
  {
    title: "Modern Design Updates",
    description: "Contemporary design that aligns with current trends and user expectations.",
    icon: Palette,
    benefits: ["Fresh visual appeal", "Better brand alignment", "Improved user engagement", "Mobile-first design"]
  },
  {
    title: "Conversion Optimization",
    description: "Strategic redesign focused on turning visitors into customers.",
    icon: TrendingUp,
    benefits: ["Optimized CTAs", "Better user flow", "A/B testing", "ROI improvement"]
  },
  {
    title: "SEO Enhancement",
    description: "Technical improvements that boost search engine visibility and rankings.",
    icon: Target,
    benefits: ["Better crawlability", "Improved page speed", "Mobile optimization", "Structured data"]
  }
]

const process = [
  {
    step: "01",
    title: "Current Site Analysis",
    description: "Comprehensive audit of your existing website’s performance and opportunities."
  },
  {
    step: "02",
    title: "Redesign Strategy",
    description: "Develop a strategic plan that addresses your specific business goals and user needs."
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Create and implement the new design while preserving valuable existing content and SEO."
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Carefully launch the redesigned site and continuously optimize for better results."
  }
]

const results = [
  {
    metric: "250%+",
    description: "Average improvement in conversion rates"
  },
  {
    metric: "3.5x",
    description: "Faster page load times"
  },
  {
    metric: "40%",
    description: "Increase in user engagement"
  },
  {
    metric: "60%",
    description: "Improvement in mobile performance"
  }
]

export default function WebsiteRedesignPage() {
  return (
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
              <Palette className="w-4 h-4 mr-2" />
              Website Redesign Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Transform Your Website From
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Outdated to Outstanding</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Don’t let an outdated website hold your business back. Our strategic redesign services 
              modernize your online presence while preserving your SEO value and improving performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Start Your Redesign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Redesign Results</Link>
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
              Why Choose Our Website Redesign Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We don’t just make your website look better—we make it perform better, 
              converting more visitors into customers while improving your search rankings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mr-4">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Our Strategic Redesign Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              A proven methodology that ensures your website redesign delivers measurable 
              improvements while maintaining your existing SEO value and business momentum.
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

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Real Results from Our Website Redesigns
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our strategic redesigns consistently deliver measurable improvements 
              in performance, user experience, and business metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
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
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Don’t let an outdated website cost you customers and revenue. 
              Let us redesign your website for better performance and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/contact">
                  Start Your Redesign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                <Link href="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
