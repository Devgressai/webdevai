import { Metadata } from 'next'
import { Pricing } from '../../components/sections/pricing'
import { Breadcrumb, generateBreadcrumbs } from '../../components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Pricing | Transparent SEO & Web Development Packages',
  description: 'Affordable SEO, web development, and digital marketing packages starting at $2,500. Transparent pricing with no hidden fees. Custom solutions available.',
  keywords: 'SEO pricing, web development cost, digital marketing packages, affordable SEO services',
  openGraph: {
    title: 'Pricing | Web Vello Services',
    description: 'Transparent pricing for professional SEO and web development services.',
    url: 'https://webvello.com/pricing',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('page', { title: 'Pricing' })} 
            className="mb-8"
          />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Transparent{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Pricing
              </span>{" "}
              That Drives Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Choose the plan that fits your business needs. All plans include our proven methodology 
              and dedicated support to ensure your success. No hidden fees, no surprises—just results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />
    </div>
  )
}
