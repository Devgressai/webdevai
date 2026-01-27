import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, FileText, AlertCircle } from 'lucide-react'
// Note: trackCTA removed - server components can't use onClick handlers

export const metadata: Metadata = {
  title: 'Local SEO Checklist: Complete Optimization Guide 2024 | Web Vello',
  description: 'Complete local SEO checklist for 2024. Step-by-step guide to optimize your Google Business Profile, build citations, generate reviews, and improve local rankings.',
  keywords: ['local seo checklist', 'local seo optimization', 'google business profile checklist', 'local seo guide', 'seo checklist 2024'],
  alternates: {
    canonical: 'https://www.webvello.com/resources/local-seo-checklist',
  },
  openGraph: {
    title: 'Local SEO Checklist: Complete Optimization Guide 2024',
    description: 'Complete local SEO checklist for 2024. Step-by-step guide to optimize your local search presence.',
    url: 'https://www.webvello.com/resources/local-seo-checklist',
    type: 'article',
  },
}

const checklistItems = [
  {
    category: 'Google Business Profile',
    items: [
      'Complete business information (name, address, phone)',
      'Accurate business category selection',
      'High-quality business photos (logo, interior, exterior)',
      'Business hours and special hours for holidays',
      'Business description with relevant keywords',
      'Products and services listed',
      'Regular posts and updates',
      'Q&A section management',
    ]
  },
  {
    category: 'Local Citations',
    items: [
      'Consistent NAP (Name, Address, Phone) across all platforms',
      'Listings on major directories (Yelp, Bing, Apple Maps)',
      'Industry-specific directory listings',
      'Local chamber of commerce listings',
      'Better Business Bureau profile',
      'Social media profile optimization',
    ]
  },
  {
    category: 'Reviews & Reputation',
    items: [
      'Review generation strategy in place',
      'Responding to all reviews (positive and negative)',
      'Review monitoring across platforms',
      'Review request process for customers',
    ]
  },
  {
    category: 'Website Optimization',
    items: [
      'Location pages for each service area',
      'Local keywords in title tags and meta descriptions',
      'Schema markup for local business',
      'Mobile-responsive design',
      'Fast page load times',
      'Contact information on every page',
    ]
  },
  {
    category: 'Content & Engagement',
    items: [
      'Local content creation (blog posts, guides)',
      'Local landing pages for service areas',
      'Customer testimonials and case studies',
      'Regular content updates',
    ]
  }
]

export default function LocalSEOChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Local SEO Checklist</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Local SEO Checklist: Complete Optimization Guide 2024
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Use this comprehensive checklist to ensure your local SEO is fully optimized. Follow these steps to improve your local search visibility and attract more customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {checklistItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

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
            <h2 className="text-2xl font-bold mb-4">Need Help With Your Local SEO?</h2>
            <p className="text-blue-100 mb-6">
              Get a free SEO audit to see which items on this checklist you're missing and how to fix them.
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
