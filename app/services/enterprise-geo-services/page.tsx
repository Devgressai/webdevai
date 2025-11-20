import { Button } from '../../../components/ui/button'
import { ArrowRight, Globe, MapPin, Users, BarChart3, Target, Building2, TrendingUp, Code, FileText, ShoppingBag, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise GEO Services | Location Intelligence & Expansion Strategy | Web Vello',
  description: 'Use data-driven location intelligence to expand faster. Web Vello’s enterprise GEO team analyzes markets, territories, and site selection with AI-backed insights.',
  keywords: ['enterprise geo services', 'location intelligence consulting', 'market expansion strategy', 'web vello geo', 'site selection analytics'],
  alternates: {
    canonical: 'https://www.webvello.com/services/enterprise-geo-services',
  },
  openGraph: {
    title: 'Enterprise GEO Services | Web Vello',
    description: 'Plan expansions with confidence using Web Vello’s AI-powered location intelligence and market analysis services.',
    url: 'https://www.webvello.com/services/enterprise-geo-services',
    type: 'website',
  }
}

export default function EnterpriseGEOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                Location Intelligence
              </span>{" "}
              Powered by AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Optimize your enterprise’s geographic presence with AI-powered location intelligence 
              that drives market expansion and customer acquisition at scale.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/case-studies" className="text-sm font-semibold leading-6 text-secondary-900">
                View Case Studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Location Intelligence for Enterprise Growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our enterprise GEO services help large organizations optimize their geographic strategy 
              and market presence using advanced AI and data analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-teal-100 mb-6">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Market Expansion</h3>
              <p className="text-secondary-600">
                Identify optimal locations for expansion using AI-powered market analysis and demographics.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Location Optimization</h3>
              <p className="text-secondary-600">
                Optimize existing locations and identify opportunities for improvement and growth.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Customer Segmentation</h3>
              <p className="text-secondary-600">
                Segment customers by geographic location for targeted marketing and service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Analytics</h3>
              <p className="text-secondary-600">
                Track and analyze location performance with comprehensive geographic analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Competitive Intelligence</h3>
              <p className="text-secondary-600">
                Monitor competitor locations and market positioning across different geographic areas.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Multi-location Management</h3>
              <p className="text-secondary-600">
                Manage and optimize multiple locations with centralized geographic intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Optimize Your Geographic Strategy?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Let our enterprise GEO experts help you expand and optimize your market presence.
          </p>
          <Button size="lg" variant="secondary" className="text-teal-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
