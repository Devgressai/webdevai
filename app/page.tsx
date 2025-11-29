import { Metadata } from 'next'
import { Hero } from '../components/sections/hero'
import { Button } from '../components/ui/button'
import { METRICS } from '@/lib/site-metrics'
import { ArrowRight, CheckCircle, Zap, Globe, Code, BarChart3, Users, Award, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
    url: 'https://www.webvello.com',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.webvello.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Vello - AI-Powered SEO & Web Development Services',
        type: 'image/jpeg',
      },
    ],
  },
  icons: {
    icon: 'https://www.webvello.com/favicon.ico',
    apple: 'https://www.webvello.com/apple-touch-icon.png',
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

export default function HomePage() {
  // Server component: no client handlers to minimize JS shipped

  // Organization Schema for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.webvello.com/logo.png",
      "width": 2048,
      "height": 2048
    },
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
    "@id": "https://www.webvello.com#business",
    "name": "Web Vello",
    "image": "https://www.webvello.com/og-image.jpg",
    "description": "Professional AI-powered SEO, web development, and digital marketing services",
    "url": "https://www.webvello.com",
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-team-collaboration.webp"
            alt="Team collaboration and professional workspace background"
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">How We Work</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Clear focus, senior expertise, measurable results, and transparent reporting—every engagement.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line - Desktop only */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="group relative">
                <div className="flex flex-col items-center md:items-start h-full">
                  <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 mb-6">
                    1
                  </div>
                  <div className="flex-1 w-full bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Focus</h3>
                    <p className="text-base text-secondary-600 leading-relaxed">Digital marketing that drives revenue—AI SEO, Local SEO, website design, and development.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="group relative">
                <div className="flex flex-col items-center md:items-start h-full">
                  <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 mb-6">
                    2
                  </div>
                  <div className="flex-1 w-full bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Expertise</h3>
                    <p className="text-base text-secondary-600 leading-relaxed">Certified senior team combining strategy, UX, engineering, and data science.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="group relative">
                <div className="flex flex-col items-center md:items-start h-full">
                  <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 mb-6">
                    3
                  </div>
                  <div className="flex-1 w-full bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Results</h3>
                    <p className="text-base text-secondary-600 leading-relaxed">300%+ average traffic growth in 6 months with conversion lifts across key pages.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="group relative">
                <div className="flex flex-col items-center md:items-start h-full">
                  <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform duration-300 mb-6">
                    4
                  </div>
                  <div className="flex-1 w-full bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Transparency</h3>
                    <p className="text-base text-secondary-600 leading-relaxed">Weekly progress, shared dashboards, and a reproducible playbook for compounding growth.</p>
                  </div>
                </div>
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-analytics.webp"
            alt="Data analytics and performance metrics dashboard background"
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-50/90"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
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
                  <p className="text-base text-secondary-600 mb-6 leading-relaxed">
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-night-orbit.webp"
            alt="Modern technology and digital innovation background"
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary-600/85"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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

      {/* Why Choose Us Section - Focus on Benefits & Differentiators */}
      <LazySection>
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-office.webp"
            alt="Modern professional office workspace background"
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
              Why Choose Web Vello
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge AI technology with proven strategies, delivering measurable results that drive real business growth—not just vanity metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 - Proven Results */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Proven Track Record
              </h3>
              <p className="text-base text-secondary-600 mb-6 leading-relaxed">
                We've helped 500+ businesses achieve 300%+ organic traffic growth in just 6 months. Our data-driven approach delivers measurable ROI, not empty promises.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  340% average ROI delivered
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Transparent reporting & dashboards
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Real results, not vanity metrics
                </div>
              </div>
            </div>

            {/* Card 2 - Senior Expertise */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Senior Team Expertise
              </h3>
              <p className="text-base text-secondary-600 mb-6 leading-relaxed">
                Work directly with certified senior specialists—no junior staff, no account handoffs. Our team combines strategy, UX, engineering, and data science expertise.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Certified senior professionals
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Direct access to experts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Cross-functional expertise
                </div>
              </div>
            </div>

            {/* Card 3 - Transparent Process */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Transparent & Accountable
              </h3>
              <p className="text-base text-secondary-600 mb-6 leading-relaxed">
                Weekly progress updates, shared dashboards, and a reproducible playbook. You always know what we're doing and why—no black boxes, no surprises.
              </p>
              <div className="space-y-2 text-sm text-secondary-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Weekly progress reports
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Shared dashboards & analytics
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                  Clear, actionable strategy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </LazySection>

      {/* Google My Business Section */}
      <LazySection>
        <section className="relative py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-data-analysis.webp"
              alt="Data analysis and business intelligence visualization background"
              fill
              className="object-cover"
              quality={75}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gray-50/90"></div>
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Find Us on Google
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Connect with us on Google Maps and get directions to our location.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <GoogleMyBusiness 
                profileUrl="https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk"
                businessName="Web Vello"
                rating={5.0}
              />
            </div>
          </div>
        </section>
      </LazySection>

      {/* Final CTA Section */}
      <LazySection>
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-night-orbit.webp"
            alt="Technology and digital transformation background for call-to-action section"
            fill
            className="object-cover"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/85 to-primary-900/90"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              Rated 5.0 by 500+ Clients
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to 3X Your Traffic & Leads?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 500+ businesses that have transformed their online presence. Get a free strategy session and see exactly how we&apos;ll grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                asChild
              >
                <Link href="/case-studies">See Our Results →</Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Response within 24hrs
              </span>
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
