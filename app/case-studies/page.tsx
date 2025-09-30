import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { ArrowRight, TrendingUp, Globe, Code, Users, Star, Calendar, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Case Studies | Real Results from Web Vello Clients',
  description: 'See how we've helped businesses achieve 300%+ traffic growth, dominate local search, and increase revenue with our SEO and web development services.',
  keywords: 'SEO case studies, web development success stories, digital marketing results, client testimonials',
  openGraph: {
    title: 'Case Studies | Web Vello Client Success Stories',
    description: 'Real results from businesses that partnered with Web Vello for SEO and web development.',
    url: 'https://webvello.com/case-studies',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

const caseStudies = [
  {
    title: "Local Restaurant Chain: From Page 3 to Top 3 in 6 Months",
    client: "Fresh Bites Restaurant Group",
    industry: "Food & Beverage",
    summary: "Transformed a struggling local restaurant chain into the dominant local search presence, driving 200%+ increase in foot traffic and phone calls.",
    results: [
      { metric: "Local Rankings", before: "Page 3", after: "Top 3", improvement: "900%+" },
      { metric: "Foot Traffic", before: "50 visits/week", after: "150+ visits/week", improvement: "200%+" },
      { metric: "Phone Calls", before: "10 calls/week", after: "35+ calls/week", improvement: "250%+" },
      { metric: "Revenue Impact", before: "$15K/month", after: "$45K/month", improvement: "200%+" }
    ],
    services: ["Local SEO", "Google My Business", "Review Management"],
    duration: "6 months",
    budget: "$5,000/month",
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    title: "E-commerce Startup: 300% Organic Traffic Growth with AI SEO",
    client: "TechGear Pro",
    industry: "E-commerce",
    summary: "Revolutionized search rankings using AI-powered SEO strategies, resulting in explosive organic growth and market dominance.",
    results: [
      { metric: "Organic Traffic", before: "5K/month", after: "20K+/month", improvement: "300%+" },
      { metric: "Keyword Rankings", before: "15 on page 1", after: "85 on page 1", improvement: "467%+" },
      { metric: "Conversions", before: "150/month", after: "600+/month", improvement: "300%+" },
      { metric: "Revenue Growth", before: "$25K/month", after: "$100K+/month", improvement: "300%+" }
    ],
    services: ["AI-Powered SEO", "Content Strategy", "Technical SEO"],
    duration: "8 months",
    budget: "$8,000/month",
    image: "/api/placeholder/400/300",
    featured: true
  },
  {
    title: "Healthcare Practice: Dominating Local Search in Competitive Market",
    client: "Advanced Care Medical",
    industry: "Healthcare",
    summary: "Established market leadership in a highly competitive healthcare market through strategic local SEO and content marketing.",
    results: [
      { metric: "Local Pack Position", before: "Not visible", after: "#1 position", improvement: "100%" },
      { metric: "Patient Inquiries", before: "20/month", after: "80+/month", improvement: "300%+" },
      { metric: "Online Reviews", before: "12 reviews", after: "150+ reviews", improvement: "1,150%+" },
      { metric: "Market Share", before: "5%", after: "25%", improvement: "400%+" }
    ],
    services: ["Local SEO", "Content Marketing", "Review Generation"],
    duration: "12 months",
    budget: "$6,000/month",
    image: "/api/placeholder/400/300",
    featured: false
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('page', { title: 'Case Studies' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Real{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Results
              </span>{" "}
              from Real Clients
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Don’t just take our word for it. See the actual results we’ve delivered for businesses 
              across industries. These aren’t case studies—they’re success stories with real numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Success Stories That Inspire
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Every case study represents a business transformation that exceeded expectations. 
              These results speak for themselves.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden shadow-soft ring-1 ring-secondary-900/5 ${
                  study.featured ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary-100 to-primary-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-primary-600 mb-2">
                          {study.results[0].improvement}
                        </div>
                        <div className="text-lg text-primary-700">Improvement</div>
                      </div>
                    </div>
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-sm font-semibold text-white">
                          <Star className="mr-1 h-4 w-4" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-4">
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          {study.client}
                        </div>
                        <div className="flex items-center">
                          <Globe className="mr-2 h-4 w-4" />
                          {study.industry}
                        </div>
                      </div>
                      <p className="text-secondary-600">
                        {study.summary}
                      </p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-secondary-50 rounded-lg">
                          <div className="text-sm text-secondary-600 mb-1">{result.metric}</div>
                          <div className="text-lg font-bold text-primary-600">{result.improvement}</div>
                        </div>
                      ))}
                    </div>

                    {/* Services & Details */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-secondary-600 mb-6">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Duration: {study.duration}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="mr-2 h-4 w-4" />
                        Investment: {study.budget}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Get Similar Results
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services That Deliver Results Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Services That Deliver Results
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Every case study above was powered by specific services. Discover which services 
              can deliver similar results for your business and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local SEO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Local SEO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Dominate local search results and drive foot traffic to your business.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> Restaurant chain achieved Top 3 local rankings
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 200%+ increase in local visibility
                </div>
              </div>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI-Powered SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Revolutionary SEO strategies that deliver explosive organic growth.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> E-commerce startup achieved 300% traffic growth
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 200-400% increase in organic traffic
                </div>
              </div>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Content Marketing */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Content Strategy
              </h3>
              <p className="text-secondary-600 mb-4">
                Strategic content that builds authority and drives qualified leads.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> Healthcare practice achieved market leadership
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 150-300% increase in qualified leads
                </div>
              </div>
              <Link 
                href="/services/content-strategy" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
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
                Build trust and credibility through strategic review generation and management.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> Healthcare practice gained 150+ positive reviews
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 500-1000% increase in online reviews
                </div>
              </div>
              <Link 
                href="/services/review-management" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Technical SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Technical SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Foundation-level SEO optimization that ensures search engines can find and rank your content.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> E-commerce site achieved 85 page 1 rankings
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 100-300% improvement in search visibility
                </div>
              </div>
              <Link 
                href="/services/technical-seo" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Google My Business */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                Google My Business
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your local business presence and dominate Google’s local search results.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Results:</span> Restaurant chain achieved Top 3 local pack
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Typical Impact:</span> 200-500% increase in local visibility
                </div>
              </div>
              <Link 
                href="/services/google-my-business" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            These results aren’t outliers—they’re what we deliver consistently for our clients. 
            Let’s make your business the next case study.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Strategy Session</Link>
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
