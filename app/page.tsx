
import { Metadata } from 'next'
import { Hero } from '../components/sections/hero'
import { Button } from '../components/ui/button'
import { METRICS } from '@/lib/site-metrics'
import { ArrowRight, CheckCircle, Zap, Globe, Code, BarChart3, Users, Award, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
// import { OptimizedImageComponent as HeroImage } from '../components/ui/optimized-image' // Not needed for external Unsplash URLs
import { LazySection } from '../components/ui/lazy-section'
import { SchemaMarkup } from '../components/seo/schema-markup'
import { GoogleMyBusiness } from '../components/seo/google-my-business'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'AI-Powered SEO & Web Development | Web Vello',
  description: 'Get 300%+ organic traffic growth with professional SEO, web development & digital marketing. Trusted by 500+ businesses nationwide.',
  keywords: 'SEO services, web development, digital marketing, AI SEO, local SEO, web design',
  openGraph: {
    title: 'AI-Powered SEO & Web Development | Web Vello',
    description: 'Get 300%+ organic traffic growth with professional SEO, web development & digital marketing. Trusted by 500+ businesses.',
    url: 'https://webvello.com',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello - AI-Powered SEO & Web Development Services',
      },
    ],
  },
}

// Lazy load heavy components to reduce initial bundle
const Pricing = dynamic(() => import('../components/sections/pricing'), { 
  ssr: true,
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
})

const SocialProof = dynamic(() => import('../components/sections/social-proof'), { 
  ssr: false,
  loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded-lg" />
})

const services = [
  {
    name: "AI-Powered SEO",
    description: "Get 300%+ organic traffic growth in 6 months with our advanced AI SEO strategies that analyze millions of data points.",
    icon: Zap,
    href: "/services/ai-seo",
    features: ["AI keyword research", "Content optimization", "Performance tracking"],
    gradient: "from-blue-400 to-indigo-500",
    popular: true
  },
  {
    name: "Local SEO",
    description: "Dominate local search results and rank #1 in your market with geo-targeted strategies.",
    icon: Globe,
    href: "/services/local-seo",
    features: ["Google My Business", "Local citations", "Review management"],
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Web Development",
    description: "Custom websites that convert visitors into customers with conversion-focused design.",
    icon: Code,
    href: "/services/web-development",
    features: ["Mobile-first design", "SEO integration", "Performance optimization"],
    gradient: "from-indigo-400 to-blue-500"
  }
]

const stats = [
  { id: 1, name: METRICS.revenueLabel, value: METRICS.revenue, icon: TrendingUp },
  { id: 2, name: "Satisfied Business Clients", value: "500+", icon: Users },
  { id: 3, name: "Average ROI Delivered", value: "340%", icon: Award },
  { id: 4, name: "Organic Traffic Growth", value: "300%+", icon: BarChart3 }
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechStart Solutions",
    content: "Web Vello’s digital marketing services transformed our online presence completely. We went from 50 qualified leads per month to over 200, and our revenue increased by 150% in just 6 months with their SEO and web development expertise.",
    rating: 5,
    company: "TechStart Solutions"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "The AI-powered SEO strategies are incredible. We’re ranking for high-value keywords we never thought possible, and our organic search traffic has grown 400% year-over-year with their advanced SEO techniques.",
    rating: 5,
    company: "GrowthCo"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    role: "Founder, LegalTech Pro",
    content: "Professional, results-driven, and incredibly effective digital marketing agency. Web Vello helped us establish authority in our legal tech niche and attract high-value clients consistently through their SEO and web development services.",
    rating: 5,
    company: "LegalTech Pro"
  }
]

export default function HomePage() {
  // Server component: no client handlers to minimize JS shipped

  // Organization Schema for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://webvello.com",
    "logo": "https://webvello.com/logo.png",
    "description": "Professional AI-powered SEO, web development, and digital marketing services",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-737-888-5723",
      "contactType": "sales",
      "email": "hello@webvello.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/webvello",
      "https://twitter.com/webvello",
      "https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // LocalBusiness Schema for Google My Business integration
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://webvello.com#business",
    "name": "Web Vello",
    "image": "https://webvello.com/og-image.jpg",
    "description": "Professional AI-powered SEO, web development, and digital marketing services",
    "url": "https://webvello.com",
    "telephone": "+1-737-888-5723",
    "email": "hello@webvello.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "name": "Web Vello Location"
    },
    "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <SchemaMarkup schema={[organizationSchema, localBusinessSchema]} />
      <div className="min-h-screen">
        <Hero />
      
      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">How We Work</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Clear focus, senior expertise, measurable results, and transparent reporting—every engagement.
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            {/* Step 1 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-white">1</div>
              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Focus</h3>
                <p className="text-secondary-700">Digital marketing that drives revenue—AI SEO, Local SEO, website design, and development.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-white">2</div>
              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Expertise</h3>
                <p className="text-secondary-700">Certified senior team combining strategy, UX, engineering, and data science.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-white">3</div>
              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Results</h3>
                <p className="text-secondary-700">300%+ average traffic growth in 6 months with conversion lifts across key pages.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative text-center md:text-left">
              <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-white">4</div>
              <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Transparency</h3>
                <p className="text-secondary-700">Weekly progress, shared dashboards, and a reproducible playbook for compounding growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <LazySection>
        <SocialProof />
      </LazySection>

      {/* Services Section */}
      <LazySection>
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver measurable results for professional services firms.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-primary-600 font-medium text-sm">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </LazySection>

      {/* Unified Stats Section */}
      <section className="py-24 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our data-driven approach has delivered exceptional results for hundreds of professional services firms.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <LazySection>
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Why Choose Web Vello
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              As a leading digital marketing agency, we specialize in AI-powered SEO, local search optimization, and custom web development. Our data-driven approach delivers measurable results for businesses across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 - Local SEO Focus */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Local SEO & Google My Business
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Dominate local search results with proven strategies. We help businesses rank #1 in their local market through Google My Business optimization, local citations, and review management.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Google My Business optimization
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Local keyword research & targeting
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Local citation building
                </div>
              </div>
            </div>

            {/* Card 2 - AI SEO Focus */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                AI-Powered SEO & Content Strategy
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Leverage cutting-edge AI technology to identify hidden SEO opportunities. Our AI-powered approach analyzes millions of data points to create content strategies that drive 300%+ traffic growth.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  AI keyword research & analysis
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Content optimization & creation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Competitive analysis & strategy
                </div>
              </div>
            </div>

            {/* Card 3 - Web Development Focus */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Conversion-Focused Web Development
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Build websites that convert visitors into customers. We create fast, mobile-optimized sites with built-in SEO best practices, ensuring your website ranks well and drives measurable business results.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Mobile-first responsive design
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  SEO-optimized code structure
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Performance optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </LazySection>

      {/* Google My Business Section */}
      <LazySection>
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Find Us on Google
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Connect with us on Google Maps, read reviews from our satisfied clients, and get directions to our location.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <GoogleMyBusiness 
                profileUrl="https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk"
                businessName="Web Vello"
                rating={4.9}
                reviewCount={127}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* Final CTA Section */}
      <LazySection>
      <section className="py-24 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Over 500+ businesses trust us to create tailored marketing strategies that enhance credibility, foster client relationships, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                asChild
              >
                <Link href="/contact">Schedule a Strategy Call</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/70">
              No obligation • Free consultation included
            </p>
          </div>
        </div>
      </section>
      </LazySection>

      <LazySection>
        <Pricing />
      </LazySection>
    </div>
    </>
  )
}
