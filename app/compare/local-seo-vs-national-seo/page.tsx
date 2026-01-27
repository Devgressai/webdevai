import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Globe, CheckCircle, FileText, AlertCircle } from 'lucide-react'
// Note: trackCTA removed - server components can't use onClick handlers

export const metadata: Metadata = {
  title: 'Local SEO vs National SEO: Which Do You Need? | Web Vello',
  description: 'Compare local SEO vs national SEO strategies. Understand the differences, when to use each approach, and how to choose the right strategy for your business.',
  keywords: ['local seo vs national seo', 'local vs national seo', 'local seo comparison', 'national seo strategy', 'seo strategy comparison'],
  alternates: {
    canonical: 'https://www.webvello.com/compare/local-seo-vs-national-seo',
  },
  openGraph: {
    title: 'Local SEO vs National SEO: Which Do You Need?',
    description: 'Compare local SEO vs national SEO strategies. Understand the differences and choose the right approach for your business.',
    url: 'https://www.webvello.com/compare/local-seo-vs-national-seo',
    type: 'article',
  },
}

const comparisonPoints = [
  {
    aspect: 'Target Audience',
    local: 'Customers in specific geographic areas (city, region)',
    national: 'Customers across the entire country or multiple regions'
  },
  {
    aspect: 'Keywords',
    local: 'Location-based keywords ("plumber in [city]")',
    national: 'Broad, non-location keywords ("best plumber")'
  },
  {
    aspect: 'Google Business Profile',
    local: 'Essential - primary ranking factor',
    national: 'Not applicable for most businesses'
  },
  {
    aspect: 'Citations',
    local: 'Critical - local directory listings matter',
    national: 'Less critical - focus on high-authority sites'
  },
  {
    aspect: 'Content Strategy',
    local: 'Location-specific content, local landing pages',
    national: 'Broad industry content, thought leadership'
  },
  {
    aspect: 'Link Building',
    local: 'Local directories, chamber of commerce, local media',
    national: 'Industry publications, national media, high-DA sites'
  }
]

export default function LocalVSNationalSEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-blue-600">Compare</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Local SEO vs National SEO</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local SEO vs National SEO: Which Strategy Do You Need?
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Understanding the difference between local and national SEO helps you choose the right strategy for your business goals and target market.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                        Local SEO
                      </div>
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-green-600 mr-2" />
                        National SEO
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 p-4 font-medium text-gray-900">{point.aspect}</td>
                      <td className="border border-gray-300 p-4 text-gray-700">{point.local}</td>
                      <td className="border border-gray-300 p-4 text-gray-700">{point.national}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Local SEO</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Service Area Businesses:</strong>
                  <span className="text-gray-700"> Plumbers, electricians, restaurants, retail stores that serve customers in specific locations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Single or Multi-Location Businesses:</strong>
                  <span className="text-gray-700"> Businesses with physical locations or defined service areas.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">High Local Competition:</strong>
                  <span className="text-gray-700"> When competing for "near me" searches and local market share.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use National SEO</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">E-Commerce Businesses:</strong>
                  <span className="text-gray-700"> Online stores that ship nationwide and don't rely on local foot traffic.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">SaaS and Digital Services:</strong>
                  <span className="text-gray-700"> Software companies, digital agencies, and online service providers.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Content and Media:</strong>
                  <span className="text-gray-700"> Blogs, news sites, and content publishers targeting broad audiences.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
              Can You Use Both?
            </h3>
            <p className="text-gray-700">
              Yes! Many businesses benefit from a hybrid approach. For example, a law firm might use local SEO to rank for "divorce lawyer in [city]" while also using national SEO to rank for "divorce law guide" and build thought leadership. The key is understanding which strategy to prioritize based on your primary revenue sources.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/resources/what-is-local-seo" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">What is Local SEO?</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/resources/local-seo-cost" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">Local SEO Cost Guide</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/services/seo" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">SEO Services</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
              <Link 
                href="/tools/seo-audit" 
                className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">Free SEO Audit Tool</span>
                <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
              </Link>
            </div>
          </div>

          {/* MOFU CTA */}
          <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Not Sure Which Strategy You Need?</h2>
            <p className="text-blue-100 mb-6">
              Get a free SEO audit to understand your current visibility and determine whether local or national SEO (or both) is right for your business.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <Link href="/tools/seo-audit">Get Free SEO Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
