import { Metadata } from 'next'
import { Hero } from '../components/sections/hero'
import { Button } from '../components/ui/button'
import { ArrowRight, Zap, Globe, Code, CheckCircle, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { LazySection } from '../components/ui/lazy-section'
import { SchemaMarkup } from '../components/seo/schema-markup'
import { GoogleMyBusiness } from '../components/seo/google-my-business'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Web Vello — SEO & Web Development That Grows Your Business',
  description: 'We help businesses grow online with SEO and web development. 340% average ROI. Trusted by 500+ companies.',
  openGraph: {
    title: 'Web Vello — SEO & Web Development',
    description: 'We help businesses grow online with SEO and web development.',
    url: 'https://www.webvello.com',
    siteName: 'Web Vello',
    type: 'website',
  },
}

const Pricing = dynamic(() => import('../components/sections/pricing'), { 
  ssr: true,
  loading: () => <div className="h-96 bg-white" />
})

const SocialProof = dynamic(() => import('../components/sections/social-proof'), { 
  ssr: false,
  loading: () => <div className="h-48 bg-slate-50" />
})

const services = [
  {
    name: "AI-Powered SEO",
    description: "We use AI to find opportunities your competitors miss. Get more organic traffic with data-driven strategies.",
    icon: Zap,
    href: "/services/ai-seo",
    stat: "300%",
    statLabel: "avg traffic increase"
  },
  {
    name: "Local SEO",
    description: "Dominate local search. When customers near you search, they find you first.",
    icon: Globe,
    href: "/services/local-seo",
    stat: "#1",
    statLabel: "local rankings"
  },
  {
    name: "Web Development",
    description: "Beautiful, blazing-fast websites built to convert visitors into customers.",
    icon: Code,
    href: "/services/web-development",
    stat: "2.5x",
    statLabel: "more conversions"
  }
]

const process = [
  { step: "01", title: "Discovery", desc: "We audit your business, competitors, and market to find your biggest opportunities." },
  { step: "02", title: "Strategy", desc: "You get a custom roadmap with clear milestones and expected results." },
  { step: "03", title: "Execution", desc: "Our team implements while you track progress with weekly updates." },
  { step: "04", title: "Growth", desc: "We optimize continuously to maximize your return on investment." },
]

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Vello",
    "url": "https://www.webvello.com",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
  }

  return (
    <>
      <SchemaMarkup schema={[organizationSchema]} />
      <div className="min-h-screen bg-white">
        <Hero />
      
        {/* Services */}
        <section className="py-28 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-rose-500 font-semibold mb-3">What we do</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
                Everything you need to grow online
              </h2>
              <p className="text-xl text-slate-600">
                Focused services that drive real, measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="group">
                  <div className="h-full p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">{service.stat}</span>
                      <span className="text-slate-500 text-sm">{service.statLabel}</span>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <span className="text-slate-700 font-medium flex items-center group-hover:text-rose-500 transition-colors">
                        Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats section with gradient */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Results that speak</h2>
              <p className="text-xl text-white/60">Real numbers from real client partnerships</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-2">$2.4M+</p>
                <p className="text-white/50">Revenue generated</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-2">500+</p>
                <p className="text-white/50">Happy clients</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-2">340%</p>
                <p className="text-white/50">Average ROI</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-2">5.0</p>
                <p className="text-white/50">Star rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <LazySection>
          <SocialProof />
        </LazySection>

        {/* Process */}
        <section className="py-28 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-rose-500 font-semibold mb-3">How we work</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  A proven process for growth
                </h2>
                <p className="text-xl text-slate-600 mb-10">
                  We&apos;ve refined our approach over 500+ projects to deliver consistent, measurable results.
                </p>
                
                <div className="space-y-8">
                  {process.map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-3xl p-10 h-fit">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">Why clients choose us</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Senior team only</p>
                      <p className="text-slate-600">No juniors, no handoffs. Work with experienced pros.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Full transparency</p>
                      <p className="text-slate-600">Weekly updates, shared dashboards, no surprises.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">No long contracts</p>
                      <p className="text-slate-600">Month-to-month. We earn your business every month.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Results-focused</p>
                      <p className="text-slate-600">We measure success by your growth, not our activity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <LazySection>
          <section className="py-28 bg-slate-50">
            <div className="mx-auto max-w-6xl px-6">
              <div className="text-center mb-16">
                <p className="text-rose-500 font-semibold mb-3">Reviews</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  See what clients say
                </h2>
                <p className="text-xl text-slate-600">Real reviews from Google</p>
              </div>
              <div className="max-w-lg mx-auto">
                <GoogleMyBusiness 
                  profileUrl="https://www.google.com/maps/place/?q=place_id:ChIJu2PDWQAfm4ARz5y6qVtIYPk"
                  businessName="Web Vello"
                  rating={5.0}
                />
              </div>
            </div>
          </section>
        </LazySection>

        {/* Final CTA */}
        <section className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-rose-500/20 via-orange-500/10 to-transparent rounded-full blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-xl text-white/60 mb-10">
              Get a free personalized growth plan for your website. No commitment, no pressure—just actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-rose-500/25"
                asChild
              >
                <Link href="/contact">
                  Get Your Free Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="h-14 px-8 border-white/20 text-white hover:bg-white/10 font-semibold text-base rounded-xl"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <p className="mt-8 text-white/40 text-sm">
              Free analysis · No credit card · Response within 24 hours
            </p>
          </div>
        </section>

        <LazySection>
          <Pricing />
        </LazySection>
      </div>
    </>
  )
}
