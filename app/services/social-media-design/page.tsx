import { Button } from '../../../components/ui/button'
import { ArrowRight, Users, Palette, TrendingUp, CheckCircle, Eye, Target, BarChart3, Zap, Share2, Heart, MessageCircle, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../../lib/utils'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Design Services | Scroll-Stopping Creative | Web Vello',
  description: 'Stand out in every feed. Web Vello’s social media designers craft platform-specific creative that increases engagement, followers, and conversions.',
  keywords: ['social media design agency', 'social content design', 'instagram design services', 'web vello social media', 'social creative studio'],
  alternates: {
    canonical: 'https://webvello.com/services/social-media-design',
  },
  openGraph: {
    title: 'Social Media Design Services | Web Vello',
    description: 'Boost engagement with eye-catching, on-brand social media graphics produced by Web Vello’s creative team.',
    url: 'https://webvello.com/services/social-media-design',
    type: 'website',
  }
}

const features = [
  {
    title: "Platform-Specific Design",
    description: "Custom graphics optimized for each social media platform’s unique requirements.",
    icon: Share2,
    benefits: ["Instagram-optimized", "Facebook-friendly", "LinkedIn professional", "Twitter engaging"]
  },
  {
    title: "Brand Consistency",
    description: "Maintain your brand identity across all social media touchpoints.",
    icon: Palette,
    benefits: ["Visual consistency", "Brand guidelines", "Color harmony", "Typography unity"]
  },
  {
    title: "Engagement Optimization",
    description: "Design elements that maximize likes, shares, and comments.",
    icon: Heart,
    benefits: ["High engagement", "Shareable content", "Viral potential", "Community building"]
  },
  {
    title: "Conversion-Focused",
    description: "Social media graphics that drive traffic and convert followers to customers.",
    icon: Target,
    benefits: ["Click-through rates", "Lead generation", "Sales conversion", "ROI tracking"]
  }
]

const services = [
  {
    title: "Social Media Graphics",
    description: "Custom graphics for posts, stories, and ads across all platforms.",
    icon: Palette,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Profile Optimization",
    description: "Professional profile designs that make strong first impressions.",
    icon: Users,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Campaign Visuals",
    description: "Cohesive visual campaigns that tell your brand story.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Content Templates",
    description: "Reusable templates for consistent, professional content creation.",
    icon: Zap,
    color: "from-purple-500 to-indigo-600"
  }
]

const results = [
  {
    metric: "300%+",
    description: "Average increase in engagement"
  },
  {
    metric: "5x",
    description: "More social media reach"
  },
  {
    metric: "200%+",
    description: "Improvement in click-through rates"
  },
  {
    metric: "4x",
    description: "Increase in brand awareness"
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

export default function SocialMediaDesignPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Social Media Design", description: "Professional Social Media Design services", url: "https://webvello.com/services/social-media-design" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Social Media Design Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Social Media Graphics That
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"> Stop the Scroll</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Transform your social media presence with eye-catching, conversion-focused graphics. 
              Our designs don’t just look good—they drive engagement, build your brand, and convert followers to customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Get Your Social Media Graphics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Our Work</Link>
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
              Why Choose Our Social Media Design Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We create social media graphics that don’t just look professional—they perform, 
              engaging your audience and driving real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center mr-4">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Social Media Design Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From individual graphics to complete campaigns, we provide all the visual 
              elements you need to dominate social media.
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
              Real Results from Our Social Media Designs
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our social media graphics consistently deliver measurable improvements 
              in engagement, reach, and conversion rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-pink-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-600 via-rose-700 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-8">
              Stop blending in and start standing out. Our social media designs 
              will transform your online presence and drive real engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Link href="/contact">
                  Get Your Graphics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-pink-600">
                <Link href="/case-studies">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
