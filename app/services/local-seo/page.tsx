import { Button } from '../../../components/ui/button'
import { ArrowRight, Globe, MapPin, Star, Users, TrendingUp, Target, CheckCircle, Phone, Mail, Zap, Code, ShoppingBag, FileText } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Breadcrumb, generateBreadcrumbs } from '../../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Local SEO Services | Rank #1 in Your Market',
  description: 'Dominate local search & get more customers with expert local SEO. Google My Business optimization, citations, reviews & geo-targeted strategies.',
  keywords: ['local seo agency', 'google business profile optimization', 'local citations', 'review management services', 'local seo campaigns'],
  alternates: {
    canonical: 'https://www.webvello.com/services/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services | Web Vello',
    description: 'Increase calls, foot traffic, and revenue with a proven local SEO playbook driven by data, reviews, and conversion-focused landing pages.',
    url: 'https://www.webvello.com/services/local-seo',
    type: 'website',
  
    images: [
      {
        url: 'https://www.webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello Services',
      },
    ],}
}

const features = [
  {
    title: "Google My Business Optimization",
    description: "Complete setup and optimization of your Google Business Profile for maximum local visibility.",
    icon: MapPin,
    benefits: ["Local pack visibility", "Increased click-through rates", "Better local rankings", "Customer trust building"]
  },
  {
    title: "Local Citation Management",
    description: "Build and maintain consistent business listings across all major directories and platforms.",
    icon: Globe,
    benefits: ["Improved local authority", "Better search rankings", "Increased visibility", "Brand consistency"]
  },
  {
    title: "Review Management & Generation",
    description: "Generate positive reviews and manage your online reputation across all platforms.",
    icon: Star,
    benefits: ["Higher conversion rates", "Better local rankings", "Customer trust", "Competitive advantage"]
  },
  {
    title: "Local Content Strategy",
    description: "Create location-specific content that resonates with your local audience and search engines.",
    icon: Target,
    benefits: ["Local keyword targeting", "Better user engagement", "Higher local rankings", "Community connection"]
  }
]

const process = [
  {
    step: "01",
    title: "Local SEO Audit",
    description: "Comprehensive analysis of your current local presence, competitors, and opportunities.",
    duration: "1 week"
  },
  {
    step: "02",
    title: "Google My Business Setup",
    description: "Complete optimization of your business profile with proper categories, descriptions, and media.",
    duration: "1-2 weeks"
  },
  {
    step: "03",
    title: "Citation Building",
    description: "Establish presence across local directories, industry sites, and relevant platforms.",
    duration: "2-3 weeks"
  },
  {
    step: "04",
    title: "Content & Review Strategy",
    description: "Implement local content strategy and review generation system.",
    duration: "Ongoing"
  }
]

const localServices = [
  "Restaurants & Food Service",
  "Healthcare & Medical",
  "Legal Services",
  "Home Services",
  "Automotive",
  "Retail & Shopping",
  "Professional Services",
  "Real Estate"
]

const results = [
  { metric: "Local Visibility", value: "95%+", description: "Appear in local search results" },
  { metric: "Foot Traffic", value: "200%+", description: "Increase in store visits" },
  { metric: "Phone Calls", value: "300%+", description: "More local inquiries" },
  { metric: "Local Rankings", value: "Top 3", description: "Average local pack position" }
]

export default function LocalSeOPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Local SEO',
            provider: { '@type': 'Organization', name: 'Web Vello', url: 'https://www.webvello.com', logo: { '@type': 'ImageObject', url: 'https://www.webvello.com/logo.png', width: 2048, height: 2048 } },
            areaServed: 'US',
            audience: { '@type': 'BusinessAudience', audienceType: 'B2B' },
            brand: { '@type': 'Brand', name: 'Web Vello' }
          })
        }}
      />
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('/services/local-seo', { title: 'Local/GEO SEO' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/20 mb-8">
              <Globe className="mr-2 h-4 w-4" />
              Local/GEO SEO
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Dominate{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Local Search Results
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Get found by customers in your area with targeted local SEO strategies that drive foot traffic, 
              phone calls, and local business growth. While your competitors struggle with basic listings, 
              we’ll help you dominate the local pack and capture every customer searching for your services.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Local SEO Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">View Local SEO Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Local SEO Services That Drive Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Comprehensive local search optimization designed to get your business found by customers in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {feature.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm text-secondary-600">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary-600 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Local SEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology that systematically improves your local search presence and drives real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-600 mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-secondary-600 mb-4">
                  {step.description}
                </p>

                <div className="flex items-center justify-center text-sm text-primary-600">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Local SEO strategies tailored to your specific industry and business type.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {localServices.map((service) => (
              <div key={service} className="text-center p-6 rounded-2xl bg-secondary-50 hover:bg-secondary-100 transition-colors">
                <div className="text-lg font-semibold text-secondary-900">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Local SEO Results That Matter
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See the real impact of local SEO on business growth and customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-500">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Related Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Local SEO works best when combined with our other digital marketing services. 
              Create a comprehensive local presence that dominates your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Combine local SEO with AI optimization for unbeatable search performance.
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Traditional SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Traditional SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Build national authority while dominating local search results.
              </p>
              <Link 
                href="/services/seo" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development
              </h3>
              <p className="text-secondary-600 mb-4">
                Local-optimized websites that convert local visitors into customers.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                CRO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Convert local traffic into paying customers with conversion optimization.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Review Management */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 group-hover:bg-yellow-200 transition-colors mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-yellow-600 transition-colors">
                Review Management
              </h3>
              <p className="text-secondary-600 mb-4">
                Build trust and improve local rankings with strategic review generation.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Industry-Specific SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Industry Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Local SEO strategies tailored to your specific industry and market.
              </p>
              <Link 
                href="/industries" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get found by customers in your area and start driving more local business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Local SEO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
