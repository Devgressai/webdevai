import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { ArrowRight, Building2, Utensils, Heart, Scale, Car, ShoppingBag, Briefcase, Home, Users } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Industry-Specific Digital Marketing Solutions | Web Vello',
  description: 'Specialized digital marketing strategies for healthcare, restaurants, legal services, automotive, retail, and more. Industry-specific solutions that deliver measurable results.',
  keywords: [
    'industry-specific marketing',
    'healthcare digital marketing',
    'restaurant marketing',
    'legal marketing services',
    'automotive marketing',
    'retail marketing',
    'professional services marketing',
    'real estate marketing',
    'home services marketing'
  ],
  openGraph: {
    title: 'Industry-Specific Digital Marketing Solutions | Web Vello',
    description: 'Specialized digital marketing strategies for healthcare, restaurants, legal services, and more. Industry-specific solutions that deliver measurable results.',
    url: 'https://webvello.com/industries',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry-Specific Digital Marketing Solutions - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry-Specific Digital Marketing Solutions | Web Vello',
    description: 'Specialized digital marketing strategies for healthcare, restaurants, legal services, and more.',
    images: ['https://webvello.com/og-industries.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/industries',
  },
}

const industries = [
  {
    name: "Healthcare & Medical",
    icon: Heart,
    description: "Dominate local search in competitive healthcare markets with HIPAA-compliant strategies that drive patient inquiries.",
    challenges: ["High competition", "Local search dominance", "Review management", "HIPAA compliance"],
    solutions: ["Local SEO optimization", "Patient review generation", "Healthcare content strategy", "Google My Business management"],
    results: ["200%+ increase in patient inquiries", "Top 3 local pack positions", "150+ positive reviews", "25% market share growth"],
    featured: true
  },
  {
    name: "Restaurants & Food Service",
    icon: Utensils,
    description: "Drive foot traffic and increase orders with local SEO strategies designed specifically for the food service industry.",
    challenges: ["Seasonal fluctuations", "Local competition", "Review management", "Menu optimization"],
    solutions: ["Local SEO campaigns", "Review generation", "Menu optimization", "Social media integration"],
    results: ["300%+ increase in foot traffic", "Top local search rankings", "200+ positive reviews", "40% revenue growth"],
    featured: true
  },
  {
    name: "Legal Services",
    icon: Scale,
    description: "Establish authority and generate qualified leads in competitive legal markets through strategic digital marketing.",
    challenges: ["High competition", "Trust building", "Lead qualification", "Authority establishment"],
    solutions: ["Content marketing", "Local SEO", "Lead generation", "Authority building"],
    results: ["150%+ increase in qualified leads", "Top search rankings", "Improved conversion rates", "Market authority"],
    featured: false
  },
  {
    name: "Automotive",
    icon: Car,
    description: "Drive showroom traffic and increase service appointments with targeted local SEO and digital marketing.",
    challenges: ["Local competition", "Service vs. sales", "Review management", "Local search visibility"],
    solutions: ["Local SEO optimization", "Review generation", "Service marketing", "Local content strategy"],
    results: ["250%+ increase in showroom visits", "Top local rankings", "Improved service bookings", "Higher conversion rates"],
    featured: false
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description: "Increase online sales and drive in-store traffic with comprehensive digital marketing strategies.",
    challenges: ["Online competition", "Local vs. online", "Conversion optimization", "Inventory management"],
    solutions: ["E-commerce SEO", "Local SEO", "Conversion optimization", "Content marketing"],
    results: ["200%+ increase in online sales", "Improved local visibility", "Higher conversion rates", "Increased foot traffic"],
    featured: false
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Generate qualified leads and establish market authority in competitive professional service markets.",
    challenges: ["Lead generation", "Authority building", "Competitive markets", "Trust establishment"],
    solutions: ["Content marketing", "SEO optimization", "Lead generation", "Authority building"],
    results: ["180%+ increase in qualified leads", "Improved search rankings", "Market authority", "Higher conversion rates"],
    featured: false
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Generate leads and dominate local markets with real estate-specific digital marketing strategies.",
    challenges: ["Local competition", "Lead generation", "Market fluctuations", "Trust building"],
    solutions: ["Local SEO", "Content marketing", "Lead generation", "Market analysis"],
    results: ["220%+ increase in qualified leads", "Top local rankings", "Market dominance", "Improved conversion rates"],
    featured: false
  },
  {
    name: "Home Services",
    icon: Building2,
    description: "Drive service calls and increase bookings with local SEO strategies designed for home service businesses.",
    challenges: ["Local competition", "Seasonal demand", "Review management", "Service area optimization"],
    solutions: ["Local SEO", "Review generation", "Service area marketing", "Content strategy"],
    results: ["280%+ increase in service calls", "Top local rankings", "Expanded service areas", "Higher booking rates"],
    featured: false
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('/industries', { title: 'Industries' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Industry-Specific{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Every industry has unique challenges and opportunities. We’ve developed specialized 
              digital marketing strategies that work specifically for your business type and market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Featured Industries
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              These industries represent our deepest expertise and most successful client results. 
              We understand your unique challenges and have proven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.filter(i => i.featured).map((industry) => (
              <div
                key={industry.name}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift border-2 border-primary-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100">
                    <industry.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {industry.name}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center text-sm text-secondary-600">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center text-sm text-secondary-600">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Typical Results:</h4>
                  <ul className="space-y-2">
                    {industry.results.map((result) => (
                      <li key={result} className="flex items-center text-sm text-secondary-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="w-full">
                  <Link href="/contact">
                    Get Industry-Specific Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Industries Grid */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              All Industries We Serve
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              While we have deep expertise in featured industries, we’ve successfully helped 
              businesses across all sectors achieve remarkable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.filter(i => !i.featured).map((industry) => (
              <div
                key={industry.name}
                className="group rounded-3xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mb-6">
                  <industry.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {industry.name}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Key Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.slice(0, 3).map((solution) => (
                      <span
                        key={solution}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Generic digital marketing strategies don’t work in competitive industries. 
                We’ve spent years understanding the unique challenges, regulations, and 
                opportunities in each sector we serve.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Industry-Specific Keywords</div>
                    <div className="text-sm text-secondary-600">We know the exact terms your customers use to find your services</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Regulatory Compliance</div>
                    <div className="text-sm text-secondary-600">We understand the rules and regulations that affect your industry</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Competitive Intelligence</div>
                    <div className="text-sm text-secondary-600">We know your competitors and how to outperform them</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">15+</div>
              <div className="text-xl text-primary-700 mb-2">Years of Industry Experience</div>
              <div className="text-lg text-primary-600">Across 8+ major industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Industry-Specific Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Every industry requires different digital marketing approaches. Discover which services 
              are most effective for your specific business type and market challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Healthcare & Medical Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 mr-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Healthcare & Medical</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                HIPAA-compliant digital marketing that drives patient inquiries and builds trust.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Local SEO</span>
                  <Link href="/services/local-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Content Strategy</span>
                  <Link href="/services/content-strategy" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Review Management</span>
                  <Link href="/services/review-management" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Healthcare Strategy</Link>
              </Button>
            </div>

            {/* Restaurant & Food Service */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 mr-4">
                  <Utensils className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Restaurants & Food</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                Local SEO and social media strategies that drive foot traffic and increase orders.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Local SEO</span>
                  <Link href="/services/local-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Social Media Marketing</span>
                  <Link href="/services/social-media-marketing" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Review Generation</span>
                  <Link href="/services/review-management" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Restaurant Strategy</Link>
              </Button>
            </div>

            {/* Legal Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mr-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Legal Services</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                Authority-building content marketing and lead generation for competitive legal markets.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Content Strategy</span>
                  <Link href="/services/content-strategy" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Traditional SEO</span>
                  <Link href="/services/seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Lead Generation</span>
                  <Link href="/services/cro-lead-generation" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Legal Strategy</Link>
              </Button>
            </div>

            {/* Automotive */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 mr-4">
                  <Car className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Automotive</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                Local SEO and service marketing that drives showroom traffic and service appointments.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Local SEO</span>
                  <Link href="/services/local-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Service Marketing</span>
                  <Link href="/services/service-marketing" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Review Management</span>
                  <Link href="/services/review-management" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Automotive Strategy</Link>
              </Button>
            </div>

            {/* Retail & E-commerce */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mr-4">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Retail & E-commerce</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                E-commerce optimization and conversion strategies for online and offline retail success.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">E-commerce SEO</span>
                  <Link href="/services/ecommerce-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Conversion Optimization</span>
                  <Link href="/services/cro-lead-generation" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Web Development</span>
                  <Link href="/services/web-development" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Retail Strategy</Link>
              </Button>
            </div>

            {/* Professional Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mr-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">Professional Services</h3>
              </div>
              <p className="text-secondary-600 mb-6">
                Authority building and lead generation for competitive professional service markets.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Content Marketing</span>
                  <Link href="/services/content-strategy" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">AI-Powered SEO</span>
                  <Link href="/services/ai-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Lead Generation</span>
                  <Link href="/services/cro-lead-generation" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Get Professional Strategy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Industry-Specific Results?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Don’t settle for generic digital marketing. Get strategies designed specifically 
            for your industry and market challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Industry Strategy</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/case-studies">View Industry Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
