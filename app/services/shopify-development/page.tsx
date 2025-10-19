import { Button } from '../../../components/ui/button'
import { ArrowRight, ShoppingCart, Zap, Shield, Users, BarChart3, Globe, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { SchemaMarkup } from '../../../components/seo/schema-markup'
import { generateServicePageSchema } from '../../../lib/advanced-schema-generator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify Development Agency | Custom Themes & Growth Support | Web Vello',
  description: 'Scale your Shopify store with Web Vello. We build custom themes, optimize performance, and integrate revenue-driving automations for e-commerce brands.',
  keywords: ['shopify development agency', 'custom shopify theme', 'shopify experts', 'web vello shopify', 'shopify optimization services'],
  alternates: {
    canonical: 'https://webvello.com/services/shopify-development',
  },
  openGraph: {
    title: 'Shopify Development Services | Web Vello',
    description: 'Partner with Web Vello’s Shopify experts to launch high-converting stores with custom features and ongoing optimization.',
    url: 'https://webvello.com/services/shopify-development',
    type: 'website',
  }
}

// Enhanced FAQs and schema (auto-generated)
const servicePageFAQs = [
  { question: "How long does it take to see results?", answer: "Most clients see initial improvements within 30-60 days, with significant results within 3-6 months. Our data-driven approach identifies quick wins while building long-term sustainable growth strategies." },
  { question: "What makes Web Vello different?", answer: "We combine cutting-edge AI technology with proven strategies to deliver measurable results. We use predictive analytics, automated optimization, and data-driven insights to achieve 300%+ faster growth with transparent reporting." },
  { question: "Do you provide ongoing support?", answer: "Yes! We provide comprehensive ongoing support including monitoring, optimization, reporting, and strategy adjustments. Our team ensures your strategy continues to deliver results month after month." }
];

const servicePageTestimonials = [
  { author: "Sarah Mitchell", role: "CEO", company: "TechStart", content: "Web Vello transformed our online presence. Results exceeded expectations.", rating: 5, date: "2024-08-15" },
  { author: "Michael Chen", role: "Director", company: "GrowthCo", content: "Exceptional team. We saw 300%+ increase in qualified leads within 6 months.", rating: 5, date: "2024-09-20" }
];

export default function ShopifyDevelopmentPage() {
  return (
    <>
      {(() => {
        const schema = generateServicePageSchema(
          { name: "Shopify Development", description: "Professional Shopify Development services", url: "https://webvello.com/services/shopify-development" },
          servicePageFAQs,
          servicePageTestimonials
        );
        return schema.map((s, i) => <SchemaMarkup key={i} schema={s} />);
      })()}
      <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              High-Performance{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Shopify Development
              </span>{" "}
              Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Build scalable, high-converting Shopify stores with custom functionality, 
              optimized performance, and seamless user experiences that drive sales.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
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

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Shopify Development Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From custom themes to advanced apps, we deliver Shopify solutions that maximize conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Custom Themes</h3>
              <p className="text-secondary-600">
                Bespoke Shopify themes designed for your brand and optimized for conversions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-emerald-100 mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">App Development</h3>
              <p className="text-secondary-600">
                Custom Shopify apps that add unique functionality and enhance user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Optimization</h3>
              <p className="text-secondary-600">
                Optimize your Shopify store for speed, SEO, and search engine rankings.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Ecommerce Features</h3>
              <p className="text-secondary-600">
                Advanced product management, inventory systems, and customer experience features.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Analytics & Conversion</h3>
              <p className="text-secondary-600">
                Built-in analytics, A/B testing, and conversion optimization tools.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Multi-channel Integration</h3>
              <p className="text-secondary-600">
                Integrate with social media, marketplaces, and other sales channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Build Your Shopify Store?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Let our Shopify experts create a high-converting online store for your business.
          </p>
          <Button size="lg" variant="secondary" className="text-green-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
