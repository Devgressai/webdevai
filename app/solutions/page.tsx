import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { ArrowRight, TrendingUp, Globe, Code, Users, Star, Target, Zap, BarChart3, Building2, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Business Solutions That Deliver Results | Web Vello',
  description: 'Proven solutions for website ROI, lead generation, Google visibility, conversion optimization, and more. Transform your business challenges into measurable growth.',
  keywords: [
    'business solutions',
    'website ROI optimization',
    'lead generation solutions',
    'Google visibility',
    'conversion optimization',
    'traffic recovery',
    'agency growth',
    'digital marketing solutions'
  ],
  openGraph: {
    title: 'Business Solutions That Deliver Results | Web Vello',
    description: 'Proven solutions for website ROI, lead generation, Google visibility, and conversion optimization. Transform challenges into growth.',
    url: 'https://webvello.com/solutions',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Solutions - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Solutions That Deliver Results | Web Vello',
    description: 'Proven solutions for website ROI, lead generation, Google visibility, and conversion optimization.',
    images: ['https://webvello.com/og-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/solutions',
  },
}

const solutions = [
  {
    title: "Website ROI Optimization",
    icon: Target,
    description: "Transform your website from a cost center into a revenue-generating machine with proven conversion optimization strategies.",
    problem: "Low website conversion rates and poor ROI",
    solution: "Data-driven CRO and lead generation optimization",
    results: ["200%+ increase in conversion rates", "300%+ improvement in lead quality", "150%+ boost in website revenue"],
    services: ["CRO Services", "Web Development", "UI/UX Design"],
    color: "blue",
    featured: true
  },
  {
    title: "Website Lead Generation",
    icon: Users,
    description: "Turn your website into a 24/7 lead generation machine that captures and nurtures qualified prospects automatically.",
    problem: "Website not generating enough qualified leads",
    solution: "Strategic lead capture and nurturing systems",
    results: ["400%+ increase in lead generation", "250%+ improvement in lead quality", "180%+ boost in sales pipeline"],
    services: ["CRO Services", "Content Strategy", "Email Marketing"],
    color: "green",
    featured: true
  },
  {
    title: "Google Visibility & Rankings",
    icon: Globe,
    description: "Dominate search results and capture organic traffic with AI-powered SEO strategies that outperform competitors.",
    problem: "Poor search rankings and low organic traffic",
    solution: "Advanced SEO and content optimization",
    results: ["300%+ increase in organic traffic", "500%+ improvement in keyword rankings", "200%+ boost in search visibility"],
    services: ["AI-Powered SEO", "Content Strategy", "Technical SEO"],
    color: "purple",
    featured: true
  },
  {
    title: "Website Conversion Optimization",
    icon: TrendingUp,
    description: "Optimize every element of your website to guide visitors through the perfect conversion funnel.",
    problem: "High traffic but low conversion rates",
    solution: "Comprehensive conversion rate optimization",
    results: ["250%+ increase in conversion rates", "180%+ improvement in user engagement", "300%+ boost in revenue per visitor"],
    services: ["CRO Services", "UI/UX Design", "Web Development"],
    color: "orange",
    featured: false
  },
  {
    title: "Agency Results & Growth",
    icon: Building2,
    description: "Scale your agency with proven systems, processes, and strategies that deliver consistent client results.",
    problem: "Inconsistent client results and slow agency growth",
    solution: "Systematic agency optimization and scaling",
    results: ["200%+ increase in client retention", "300%+ improvement in client results", "150%+ boost in agency revenue"],
    services: ["Agency Consulting", "Process Optimization", "Client Success Systems"],
    color: "indigo",
    featured: false
  },
  {
    title: "Declining Traffic Recovery",
    icon: BarChart3,
    description: "Reverse declining traffic trends and restore your website’s search performance with emergency SEO recovery strategies.",
    problem: "Traffic declining and rankings dropping",
    solution: "Emergency SEO recovery and traffic restoration",
    results: ["150%+ traffic recovery", "200%+ ranking restoration", "180%+ improvement in search performance"],
    services: ["Technical SEO", "AI-Powered SEO", "Content Strategy"],
    color: "red",
    featured: false
  }
]

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600",
  indigo: "bg-indigo-100 text-indigo-600",
  red: "bg-red-100 text-red-600"
}

// Map solution titles to actual page slugs
function getSolutionSlug(title: string): string {
  const slugMap: { [key: string]: string } = {
    "Website ROI Optimization": "/solutions/website-roi",
    "Website Lead Generation": "/solutions/website-leads",
    "Google Visibility & Rankings": "/solutions/google-visibility",
    "Website Conversion Optimization": "/solutions/website-conversion",
    "Agency Results & Growth": "/solutions/agency-results",
    "Declining Traffic Recovery": "/solutions/declining-traffic"
  }
  return slugMap[title] || `/solutions/${title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}`
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Home', href: '/', canonical: 'https://www.webvello.com/' },
              { label: 'Solutions', href: '/solutions', canonical: 'https://www.webvello.com/solutions' }
            ]} />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Business{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              That Deliver Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Every business challenge has a proven solution. We’ve helped hundreds of companies 
              overcome their digital marketing obstacles and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Featured Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our most requested and successful solutions that have transformed businesses 
              across industries and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.filter(s => s.featured).map((solution) => (
              <div
                key={solution.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift border-2 border-primary-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${colorClasses[solution.color as keyof typeof colorClasses]}`}>
                    <solution.icon className="h-8 w-8" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">The Problem:</h4>
                  <p className="text-secondary-600 text-sm mb-3">{solution.problem}</p>
                  <h4 className="font-semibold text-secondary-900 mb-3">Our Solution:</h4>
                  <p className="text-secondary-600 text-sm">{solution.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Typical Results:</h4>
                  <ul className="space-y-2">
                    {solution.results.map((result) => (
                      <li key={result} className="flex items-center text-sm text-secondary-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Services That Deliver:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link href={getSolutionSlug(solution.title)}>
                    Get This Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              All Business Solutions
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              While we have deep expertise in featured solutions, we’ve successfully solved 
              digital marketing challenges across all business types and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.filter(s => !s.featured).map((solution) => (
              <div
                key={solution.title}
                className="group rounded-3xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 mb-6">
                  <solution.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" asChild className="w-full">
                  <Link href={getSolutionSlug(solution.title)}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions to Services Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Solutions Powered by Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Every solution is delivered through our specialized services. Discover which services 
              can solve your specific business challenges and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                SEO Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Dominate search results and drive organic traffic with our comprehensive SEO services.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Poor rankings, low traffic, declining visibility
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> AI SEO, Local SEO, Technical SEO
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/ai-seo" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline text-sm"
                >
                  AI SEO
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/local-seo" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline text-sm"
                >
                  Local SEO
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Conversion Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Conversion Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Transform visitors into customers with conversion optimization and lead generation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Low conversion rates, poor lead quality, weak ROI
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> CRO Services, Lead Generation, Email Marketing
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/cro-lead-generation" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline text-sm"
                >
                  CRO Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/email-marketing-design" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline text-sm"
                >
                  Email Marketing
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Web Development Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Build conversion-optimized websites that drive results and deliver exceptional user experiences.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Poor website performance, low conversions, outdated design
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> Web Development, UI/UX Design, E-commerce
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/web-development" 
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline text-sm"
                >
                  Web Development
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/ui-ux-design" 
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline text-sm"
                >
                  UI/UX Design
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Content Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Content Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Create compelling content that builds authority, drives traffic, and converts visitors.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Poor content quality, low engagement, weak authority
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> Content Strategy, Blog Management, Social Media
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/content-strategy" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline text-sm"
                >
                  Content Strategy
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/social-media-marketing" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline text-sm"
                >
                  Social Media
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Analytics Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-4">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Analytics Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Data-driven insights that optimize campaigns and maximize marketing ROI.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Poor campaign performance, low ROI, unclear data
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> Analytics Consulting, CRO, Performance Marketing
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/analytics-consulting" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline text-sm"
                >
                  Analytics Consulting
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/cro-lead-generation" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline text-sm"
                >
                  CRO Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Agency Solutions */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Agency Solutions
              </h3>
              <p className="text-secondary-600 mb-4">
                Scale your agency with proven systems and processes that deliver consistent client results.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Solves:</span> Inconsistent results, slow growth, poor processes
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Services:</span> Agency Consulting, Process Optimization, Training
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/agency-consulting" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline text-sm"
                >
                  Agency Consulting
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/process-optimization" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline text-sm"
                >
                  Process Optimization
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Solve Your Business Challenges?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Every solution starts with understanding your unique challenges. Let’s identify 
            the right services to solve your specific problems and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Solution Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
