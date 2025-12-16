import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, ShoppingCart, Package, CreditCard, Truck, Star, BarChart, Tag, Users } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for E-commerce | AI Search Optimization for Online Stores | Web Vello',
  description: 'Get your e-commerce products found in ChatGPT, Perplexity, and Google SGE. GEO optimization for online stores, D2C brands, and product discovery.',
  keywords: ['geo ecommerce', 'ai seo online store', 'ecommerce chatgpt optimization', 'product geo optimization', 'ai search ecommerce'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-ecommerce',
  },
  openGraph: {
    title: 'GEO for E-commerce | AI Search for Online Stores | Web Vello',
    description: 'Get your e-commerce products found in AI search results.',
    url: 'https://www.webvello.com/services/geo-ecommerce',
    type: 'website',
  }
}

const ecommerceTypes = [
  { icon: ShoppingCart, name: "Online Stores", description: "Shopify, WooCommerce, custom e-commerce sites" },
  { icon: Package, name: "D2C Brands", description: "Direct-to-consumer brands and products" },
  { icon: Tag, name: "Marketplace Sellers", description: "Amazon, Etsy, eBay sellers with their own sites" },
  { icon: CreditCard, name: "Subscription Services", description: "Subscription boxes and recurring services" },
  { icon: Star, name: "Luxury & Specialty", description: "High-end and specialty product retailers" },
  { icon: Truck, name: "Wholesale & B2B", description: "B2B e-commerce and wholesale distributors" },
  { icon: BarChart, name: "SaaS E-commerce Tools", description: "E-commerce software and tools" },
  { icon: Users, name: "Dropshipping", description: "Dropshipping stores and operations" }
]

const whyGeoMatters = [
  {
    query: "\"What's the best [product] for [use case]?\"",
    impact: "AI product recommendations carry high trust and drive purchases directly"
  },
  {
    query: "\"Compare [product A] vs [product B]\"",
    impact: "Product comparison queries in AI often lead to immediate purchase decisions"
  },
  {
    query: "\"Where can I buy [product]?\"",
    impact: "Purchase-intent queries increasingly go to AI instead of Google Shopping"
  },
  {
    query: "\"Best [product category] under $X\"",
    impact: "Budget-conscious shoppers ask AI for filtered recommendations"
  }
]

const services = [
  {
    title: "Product Entity Optimization",
    description: "AI systems need to understand your products as distinct entities with clear attributes, use cases, and differentiators.",
    features: ["Product schema markup", "Attribute optimization", "Category positioning", "Use case content"]
  },
  {
    title: "Category & Comparison Content",
    description: "When users ask AI to compare products or recommend the 'best' in a category, you want to be included.",
    features: ["Best-of category pages", "Comparison content", "Buying guides", "Use case targeting"]
  },
  {
    title: "Review & Social Proof Integration",
    description: "AI systems factor in reviews and reputation. We help you leverage your customer reviews for AI visibility.",
    features: ["Review aggregation", "Testimonial optimization", "Rating schema", "Social proof content"]
  },
  {
    title: "Product FAQ Optimization",
    description: "Product-related questions are huge for e-commerce GEO. We optimize FAQ content for AI extraction.",
    features: ["Product FAQs", "Shipping & return FAQs", "Comparison FAQs", "Use case FAQs"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for e-commerce?",
    answer: "When someone asks ChatGPT 'what's the best wireless headphones under $200' or asks Perplexity 'compare Allbirds vs On Running,' AI systems recommend specific products. If your products aren't optimized, you're invisible to these high-intent shoppers."
  },
  {
    question: "How does GEO differ for e-commerce vs. other businesses?",
    answer: "E-commerce GEO focuses heavily on product-level optimization: product schema, attributes, comparisons, and reviews. It's more granular than service-business GEO because each product needs individual optimization."
  },
  {
    question: "Can GEO help with product discovery?",
    answer: "Absolutely. GEO is powerful for product discovery—users asking AI for recommendations in categories where you compete. 'Best [product] for [use case]' queries are a goldmine for e-commerce GEO."
  },
  {
    question: "How do you handle large product catalogs?",
    answer: "We prioritize optimization based on product importance, margin, and competitive opportunity. We start with hero products and top categories, then expand systematically. We also create scalable templates for consistent product optimization."
  },
  {
    question: "What about competitors on Amazon?",
    answer: "GEO helps differentiate your brand site from Amazon. When AI recommends buying 'directly from [Your Brand]' instead of Amazon, you win higher margins and customer relationships. We optimize for brand preference queries."
  },
  {
    question: "How do you measure e-commerce GEO success?",
    answer: "We track AI mentions for target products, monitor competitor comparison queries, and measure downstream metrics: branded search increases, direct traffic growth, and conversion attribution from customers who mention AI discovery."
  }
]

export default function GEOEcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <ShoppingCart className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for E-commerce</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Products
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "what's the best wireless earbuds" or asks Perplexity 
              "compare Nike vs Adidas running shoes"—your products should be in that answer.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free E-commerce GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why E-commerce Needs GEO
            </h2>
            <p className="text-xl text-slate-600">
              Product discovery is shifting to AI. Shoppers ask AI for recommendations instead of 
              browsing search results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGeoMatters.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <p className="text-lg font-bold text-slate-900 mb-3">{item.query}</p>
                <p className="text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              E-commerce Types We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of e-commerce businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ecommerceTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <type.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our E-commerce GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your products recommended by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              FAQs for E-commerce GEO
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get more sales from AI search?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your e-commerce store. See exactly how visible your 
            products are when shoppers ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free E-commerce GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-slate-600 text-sm mb-4 text-center">Related Services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/generative-engine-optimization" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Generative Engine Optimization
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/content-marketing" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Content Strategy for Discovery
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/" className="text-slate-700 hover:text-slate-900 text-sm underline">
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

