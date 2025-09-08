import { Metadata } from 'next'
import { SEOAuditTool } from '@/components/tools/seo-audit-tool'
import { SEOAuditBenefits } from '@/components/tools/seo-audit-benefits'
import { SEOAuditExamples } from '@/components/tools/seo-audit-examples'

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool - Website Analysis & Optimization | Web Vello',
  description: 'Get a comprehensive free SEO audit of your website. Analyze meta tags, page speed, mobile optimization, and more. Get actionable recommendations to improve your search rankings.',
  keywords: 'free SEO audit, website analysis, SEO checker, SEO tool, website optimization, search engine optimization',
  openGraph: {
    title: 'Free SEO Audit Tool - Website Analysis & Optimization | Web Vello',
    description: 'Get a comprehensive free SEO audit of your website. Analyze meta tags, page speed, mobile optimization, and more.',
    type: 'website',
  },
  alternates: {
    canonical: '/seo-audit',
  },
}

export default function SEOAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              🔍 FREE SEO ANALYSIS TOOL
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Free SEO Audit Tool - 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                Analyze Your Website
              </span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Get a comprehensive SEO analysis of your website in seconds. Our free SEO audit tool checks 
              meta tags, page speed, mobile optimization, and more. Get actionable recommendations to 
              improve your search rankings and drive more organic traffic.
            </p>
            
            {/* SEO Audit Tool Component */}
            <SEOAuditTool />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <SEOAuditBenefits />

      {/* Examples Section */}
      <SEOAuditExamples />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Implementing SEO Recommendations?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our SEO experts can help you implement the recommendations from your audit and 
            create a comprehensive SEO strategy that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              Get Free SEO Consultation
            </a>
            <a 
              href="/services/seo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View SEO Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
