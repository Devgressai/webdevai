import { Metadata } from 'next'
import { Button } from '../../components/ui/button'
import { ArrowRight, BookOpen, Video, FileText, Download, Calendar, User, Tag, Code } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Free Digital Marketing Resources & Guides | Web Vello',
  description: 'Access our library of free guides, tools, and insights on SEO, web development, local marketing, and more. Valuable knowledge to help your business grow.',
  keywords: [
    'digital marketing resources',
    'free SEO guides',
    'marketing tools',
    'SEO checklists',
    'web development guides',
    'local SEO resources',
    'marketing whitepapers',
    'business growth resources'
  ],
  openGraph: {
    title: 'Free Digital Marketing Resources & Guides | Web Vello',
    description: 'Access our library of free guides, tools, and insights on SEO, web development, and marketing. Valuable knowledge to help your business grow.',
    url: 'https://webvello.com/resources',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webvello.com/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Digital Marketing Resources - Web Vello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Digital Marketing Resources & Guides | Web Vello',
    description: 'Access our library of free guides, tools, and insights on SEO, web development, and marketing.',
    images: ['https://webvello.com/og-resources.jpg'],
  },
  alternates: {
    canonical: 'https://webvello.com/resources',
  },
}

const resources = [
  {
    title: "What is Local SEO?",
    type: "Guide",
    category: "Local SEO",
    href: "/resources/what-is-local-seo",
    description: "Complete guide to understanding local SEO, how it works, and why it matters for local businesses.",
    readTime: "10 min read",
    author: "Web Vello Team",
    date: "2024",
    featured: true,
    icon: BookOpen
  },
  {
    title: "Local SEO Cost Guide",
    type: "Guide",
    category: "Local SEO",
    href: "/resources/local-seo-cost",
    description: "Understanding local SEO pricing, service tiers, and what to expect when investing in local SEO.",
    readTime: "8 min read",
    author: "Web Vello Team",
    date: "2024",
    featured: true,
    icon: BookOpen
  },
  {
    title: "Local SEO Checklist",
    type: "Checklist",
    category: "Local SEO",
    href: "/resources/local-seo-checklist",
    description: "Complete optimization checklist for 2024. Step-by-step guide to improve your local search visibility.",
    readTime: "12 min read",
    author: "Web Vello Team",
    date: "2024",
    featured: false,
    icon: FileText
  },
  {
    title: "Complete Guide to Local SEO in 2024",
    type: "Guide",
    category: "Local SEO",
    description: "Everything you need to know about dominating local search results, from Google My Business optimization to review management.",
    readTime: "15 min read",
    author: "Emily Rodriguez",
    date: "March 2024",
    featured: false,
    icon: BookOpen
  },
  {
    title: "AI SEO: The Future of Search Optimization",
    type: "Whitepaper",
    category: "AI SEO",
    description: "Discover how artificial intelligence is revolutionizing SEO and how to implement AI-powered strategies for your business.",
    readTime: "25 min read",
    author: "Michael Chen",
    date: "February 2024",
    featured: true,
    icon: FileText
  },
  {
    title: "Web Design Principles for Higher Conversions",
    type: "Guide",
    category: "Web Development",
    description: "Learn the key design principles that turn visitors into customers and increase your conversion rates.",
    readTime: "12 min read",
    author: "David Kim",
    date: "January 2024",
    featured: false,
    icon: BookOpen
  },
  {
    title: "Digital Marketing ROI Calculator",
    type: "Tool",
    category: "Analytics",
    description: "Calculate the potential return on investment for your digital marketing campaigns with our comprehensive calculator.",
    readTime: "5 min read",
    author: "Sarah Johnson",
    date: "December 2023",
    featured: false,
    icon: Download
  },
  {
    title: "SEO Checklist for 2024",
    type: "Checklist",
    category: "SEO",
    description: "A comprehensive checklist covering all the essential SEO elements your website needs to rank well in 2024.",
    readTime: "8 min read",
    author: "Michael Chen",
    date: "November 2023",
    featured: false,
    icon: FileText
  },
  {
    title: "Local Business Marketing Strategies",
    type: "Guide",
    category: "Local SEO",
    description: "Proven strategies for local businesses to increase visibility, drive foot traffic, and grow their customer base.",
    readTime: "18 min read",
    author: "Emily Rodriguez",
    date: "October 2023",
    featured: false,
    icon: BookOpen
  }
]

const categories = [
  "All Resources",
  "Local SEO",
  "AI SEO", 
  "Web Development",
  "Analytics",
  "SEO",
  "Content Marketing"
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('page', { title: 'Resources' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Free{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Resources
              </span>{" "}
              to Grow Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Access our library of guides, tools, and insights that have helped hundreds of 
              businesses achieve digital marketing success. No strings attached—just valuable 
              knowledge to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  category === "All Resources"
                    ? "bg-primary-600 text-white"
                    : "bg-secondary-100 text-secondary-700 hover:bg-secondary-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Featured Resources
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our most popular and comprehensive resources that deliver immediate value 
              and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {resources.filter(r => r.featured).map((resource) => (
              <div
                key={resource.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift border border-secondary-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <resource.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {resource.title}
                </h3>
                
                <p className="text-secondary-600 mb-6">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500">
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      {resource.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {resource.date}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-secondary-500">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {resource.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800">
                    {resource.category}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.href || "/contact"}>
                      {resource.href ? "Read More" : "Download Now"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Grid */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              All Resources
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Browse our complete library of digital marketing resources, tools, and guides 
              to help you succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="group rounded-3xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                    <resource.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="inline-flex items-center rounded-full bg-secondary-100 px-2 py-1 text-xs font-medium text-secondary-700">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-secondary-600 mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-secondary-500">
                    <div className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {resource.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {resource.date}
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-secondary-500">
                    <BookOpen className="mr-1 h-3 w-3" />
                    {resource.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                    {resource.category}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={resource.href || "/contact"}>
                      {resource.href ? "Read More" : "Access"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-500 p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Get New Resources Delivered Weekly
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Stay ahead of the competition with our latest insights, guides, and tools. 
              Join thousands of marketers who get our weekly resource updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-secondary-900 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Resources to Services Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              From Knowledge to Action
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Our resources teach you the strategies, but our services implement them. 
              Discover which services can turn your newfound knowledge into measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Local SEO Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Local SEO Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Learn local SEO strategies from our guides, then implement them with our expert team.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> Complete Guide to Local SEO in 2024
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> Local SEO Campaigns
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/local-seo" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline text-sm"
                >
                  Local SEO Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/digital-marketing" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline text-sm"
                >
                  Digital Marketing Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* AI SEO Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI SEO Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Master AI-powered SEO strategies through our whitepapers, then execute them with our AI experts.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> AI SEO: The Future of Search Optimization
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> AI-Powered SEO Campaigns
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/ai-seo" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline text-sm"
                >
                  AI SEO Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/seo" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline text-sm"
                >
                  Technical SEO Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Web Development Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Learn web design principles for conversions, then build your optimized website with our developers.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> Web Design Principles for Higher Conversions
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> Custom Web Development
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

            {/* Analytics Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Analytics & ROI Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Calculate your marketing ROI with our tools, then optimize campaigns with our analytics experts.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> Digital Marketing ROI Calculator
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> Analytics & Optimization
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
                  href="/services/digital-marketing" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline text-sm"
                >
                  Marketing Analytics
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* SEO Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-indigo-600 transition-colors">
                SEO Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Master SEO fundamentals with our checklists, then implement them with our SEO specialists.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> SEO Checklist for 2024
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> Comprehensive SEO Campaigns
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/seo" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline text-sm"
                >
                  Traditional SEO
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/digital-marketing" 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline text-sm"
                >
                  Content Strategy Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Content Marketing Resources to Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <BookOpen className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Content Marketing Resources
              </h3>
              <p className="text-secondary-600 mb-4">
                Learn content marketing strategies, then create and distribute content with our content experts.
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Featured Resource:</span> Content Marketing Best Practices
                </div>
                <div className="text-sm text-secondary-600">
                  <span className="font-medium">Implementation Service:</span> Content Strategy & Creation
                </div>
              </div>
              <div className="flex space-x-3">
                <Link 
                  href="/services/digital-marketing" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline text-sm"
                >
                  Content Strategy Services
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services/social-media-design" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline text-sm"
                >
                  Social Media Design
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
            Need More Than Just Resources?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            While our resources are valuable, nothing beats working with our expert team 
            to implement strategies that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Strategy Session</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
