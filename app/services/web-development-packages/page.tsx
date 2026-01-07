import { Button } from '../../../components/ui/button'
import { ArrowRight, Check, X, Zap, Rocket, Building2, Code, Globe, BarChart3, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Packages | Custom Website Pricing | Web Vello',
  description: 'Transparent web development packages for businesses of all sizes. From starter sites to enterprise platforms, get a website built for conversions and SEO.',
  keywords: ['web development packages', 'website pricing', 'web design packages', 'custom website cost', 'business website packages', 'ecommerce website packages'],
  alternates: {
    canonical: 'https://www.webvello.com/services/web-development-packages',
  },
  openGraph: {
    title: 'Web Development Packages | Custom Website Pricing | Web Vello',
    description: 'Transparent web development packages for businesses. Get a website built for conversions and SEO.',
    url: 'https://www.webvello.com/services/web-development-packages',
    type: 'website',
  }
}

const packages = [
  {
    name: "Starter",
    price: "$3,500",
    description: "Perfect for small businesses and startups getting online",
    timeline: "2-3 weeks",
    ideal: "Local businesses, solo practitioners, startups",
    features: [
      { name: "Custom design (5 pages)", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Contact form", included: true },
      { name: "Google Analytics", included: true },
      { name: "SSL certificate", included: true },
      { name: "CMS (content management)", included: true },
      { name: "Blog functionality", included: false },
      { name: "E-commerce", included: false },
      { name: "Custom integrations", included: false },
      { name: "Advanced animations", included: false },
      { name: "Ongoing maintenance", included: false }
    ]
  },
  {
    name: "Professional",
    price: "$8,500",
    description: "For growing businesses that need more functionality",
    timeline: "4-6 weeks",
    ideal: "Growing SMBs, professional services, multi-location businesses",
    popular: true,
    features: [
      { name: "Custom design (10+ pages)", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Full SEO optimization", included: true },
      { name: "Contact form + lead capture", included: true },
      { name: "Google Analytics + Search Console", included: true },
      { name: "SSL certificate", included: true },
      { name: "CMS (content management)", included: true },
      { name: "Blog functionality", included: true },
      { name: "E-commerce (up to 50 products)", included: true },
      { name: "Custom integrations (CRM, etc.)", included: true },
      { name: "Advanced animations", included: true },
      { name: "3 months maintenance", included: true }
    ]
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "Custom solutions for established companies with complex needs",
    timeline: "8-12 weeks",
    ideal: "Established companies, high-traffic sites, complex requirements",
    features: [
      { name: "Custom design (unlimited pages)", included: true },
      { name: "Mobile responsive", included: true },
      { name: "Enterprise SEO strategy", included: true },
      { name: "Advanced forms + automation", included: true },
      { name: "Full analytics suite", included: true },
      { name: "SSL + security hardening", included: true },
      { name: "Headless CMS / custom CMS", included: true },
      { name: "Advanced blog/content system", included: true },
      { name: "Full e-commerce (unlimited)", included: true },
      { name: "Custom integrations + API", included: true },
      { name: "Custom animations + interactions", included: true },
      { name: "12 months maintenance + support", included: true }
    ]
  }
]

const addOns = [
  { name: "Monthly SEO", price: "From $1,500/mo", description: "Ongoing SEO optimization and content" },
  { name: "GEO Optimization", price: "From $2,500/mo", description: "AI search visibility optimization" },
  { name: "Content Writing", price: "$150/page", description: "Professional SEO-optimized copy" },
  { name: "E-commerce Setup", price: "From $2,000", description: "Product setup, payments, shipping" },
  { name: "Custom Development", price: "$150/hour", description: "Custom features and integrations" },
  { name: "Maintenance Plan", price: "From $300/mo", description: "Updates, backups, security" }
]

const process = [
  { step: "1", title: "Discovery Call", description: "We learn about your business, goals, and requirements. Free, no obligation." },
  { step: "2", title: "Proposal", description: "Detailed scope, timeline, and fixed price. No surprises." },
  { step: "3", title: "Design", description: "We design your site. You review and provide feedback until it's perfect." },
  { step: "4", title: "Development", description: "We build your site with clean code, fast performance, and SEO baked in." },
  { step: "5", title: "Launch", description: "Thorough testing, training for your team, and seamless launch." },
  { step: "6", title: "Support", description: "Ongoing support and maintenance to keep your site running smoothly." }
]

const faqs = [
  {
    question: "What's included in the price?",
    answer: "Each package includes design, development, basic SEO setup, responsive design, and a content management system. We don't charge hidden fees for things like SSL certificates, hosting setup, or basic training. The price you see is the price you pay."
  },
  {
    question: "How long does a website project take?",
    answer: "Starter projects typically take 2-3 weeks. Professional sites take 4-6 weeks. Enterprise projects take 8-12 weeks or more depending on complexity. These timelines assume timely feedback and content from your team. We'll give you a specific timeline in your proposal."
  },
  {
    question: "Do I need to provide content?",
    answer: "You can provide your own content, or we can write it for you. Content writing is available as an add-on service at $150/page. We highly recommend professional copywriting for best conversion and SEO results."
  },
  {
    question: "What about hosting and domain?",
    answer: "We can host your site on our managed platform (included in maintenance plans) or help you set up hosting with providers like Vercel, Netlify, or AWS. Domain registration is separate—we'll help you set it up but the domain is yours."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. Standard terms are 50% upfront and 50% at launch. For larger projects, we can arrange milestone-based payments. We accept credit cards, ACH, and wire transfers."
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor text/image changes are free for 30 days after launch. After that, changes are billed hourly or covered under a maintenance plan. We recommend maintenance plans for ongoing peace of mind."
  },
  {
    question: "Will my website be optimized for search engines?",
    answer: "Yes. Every site we build includes technical SEO best practices: fast loading, mobile-friendly, proper meta tags, schema markup, and clean code. For ongoing SEO campaigns to rank higher, that's a separate service."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. Website redesigns use the same packages. We'll preserve your SEO equity while modernizing the design and improving performance. We handle 301 redirects and migration carefully."
  }
]

export default function WebDevelopmentPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Web Development{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Packages
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Transparent pricing. No hidden fees. Websites built for conversions, 
              speed, and search engine visibility. Choose the package that fits your business.
            </p>
            
            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                <span>Fixed pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                <span>SEO included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                <span>Mobile-first</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-rose-400" />
                <span>Fast turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white ring-4 ring-rose-500 scale-105' 
                    : 'bg-white border border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.popular ? 'text-white/60' : 'text-slate-500'}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.price}
                  </span>
                </div>
                
                <div className={`text-sm mb-6 ${pkg.popular ? 'text-white/70' : 'text-slate-600'}`}>
                  <p className="mb-1"><strong>Timeline:</strong> {pkg.timeline}</p>
                  <p><strong>Ideal for:</strong> {pkg.ideal}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-rose-400' : 'text-rose-500'}`} />
                      ) : (
                        <X className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-white/30' : 'text-slate-300'}`} />
                      )}
                      <span className={feature.included ? '' : (pkg.popular ? 'text-white/50' : 'text-slate-600')}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 font-semibold rounded-xl ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 mt-8">
            Need something custom? <Link href="/contact" className="text-rose-500 font-semibold hover:underline">Let's talk</Link>
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-slate-600">
              Enhance your website with additional services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">{addon.name}</h3>
                <p className="text-rose-500 font-semibold mb-2">{addon.price}</p>
                <p className="text-sm text-slate-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Every Project Includes
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Standard features included with every website we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Clean Code</h3>
              <p className="text-sm text-slate-600">Hand-crafted, maintainable code. No bloated templates or page builders.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Fast Loading</h3>
              <p className="text-sm text-slate-600">Optimized for Core Web Vitals. Sub-2 second load times.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">SEO Ready</h3>
              <p className="text-sm text-slate-600">Technical SEO baked in. Meta tags, schema, sitemap, robots.txt.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Secure</h3>
              <p className="text-sm text-slate-600">SSL certificate, security headers, and best practices included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              How we build your website from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
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
            Ready to get started?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss your project. Free consultation, no obligation. 
            We'll help you choose the right package for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl"
              asChild
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

