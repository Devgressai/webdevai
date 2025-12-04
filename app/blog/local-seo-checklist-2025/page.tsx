import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User, Calendar, CheckCircle, Square, MapPin, Star, Building2 } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export const metadata: Metadata = {
  title: 'Local SEO Checklist 2025: Complete Guide for Local Businesses',
  description: 'The complete local SEO checklist for 2025. Google Business Profile, local citations, reviews, and everything you need to rank locally.',
  keywords: ['local seo checklist', 'local seo guide 2025', 'google business profile optimization', 'local search optimization'],
  alternates: {
    canonical: 'https://www.webvello.com/blog/local-seo-checklist-2025',
  },
  openGraph: {
    title: 'Local SEO Checklist 2025',
    description: 'Complete local SEO checklist for local businesses.',
    url: 'https://www.webvello.com/blog/local-seo-checklist-2025',
    type: 'article',
    publishedTime: '2025-01-27',
  }
}

export default function LocalSEOChecklistPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>Local SEO</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Local SEO Checklist 2025: Complete Guide for Local Businesses
          </h1>
          
          <p className="text-xl text-white/70 mb-8">
            Everything you need to rank in local search results. From Google Business Profile 
            to local citations, this checklist covers it all.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Web Vello Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 27, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">46%</p>
              <p className="text-sm text-slate-600">of Google searches have local intent</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <Star className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">88%</p>
              <p className="text-sm text-slate-600">of consumers trust online reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <Building2 className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">78%</p>
              <p className="text-sm text-slate-600">of local mobile searches lead to purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="lead">
              Local SEO is essential for any business that serves customers in a specific 
              geographic area. This comprehensive checklist covers everything you need to 
              optimize for local search in 2025.
            </p>

            <h2>Google Business Profile Optimization</h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">GBP Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Claim and verify your Google Business Profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Complete all business information fields</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Choose primary and secondary categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add high-quality photos (exterior, interior, team, products)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Write a compelling business description with keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add all services with descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Set accurate business hours (including holidays)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Enable messaging and Q&A</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Post weekly updates (offers, events, news)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add products or services menu</span>
                </li>
              </ul>
            </div>

            <h2>NAP Consistency</h2>

            <p>
              NAP (Name, Address, Phone) consistency is critical for local SEO. Your business 
              information must be identical everywhere it appears online.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">NAP Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Document your official NAP format</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add NAP to website header/footer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Include NAP on Contact page</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Audit existing citations for consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fix any inconsistencies found</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Use schema markup for structured NAP</span>
                </li>
              </ul>
            </div>

            <h2>Local Citations</h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Citation Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Submit to major data aggregators (Data Axle, Factual, Neustar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Claim Yelp, Bing Places, Apple Maps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Submit to industry-specific directories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Claim local/regional directories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Join local Chamber of Commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Submit to BBB (if applicable)</span>
                </li>
              </ul>
            </div>

            <h2>Review Strategy</h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Review Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Create a review generation process</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Set up review request emails/SMS</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Respond to all reviews (positive and negative)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Flag and report fake reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Diversify review platforms (Google, Yelp, industry-specific)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add review schema markup to website</span>
                </li>
              </ul>
            </div>

            <h2>On-Page Local SEO</h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">On-Page Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Include city/location in title tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Add location to meta descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Create location-specific landing pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Embed Google Map on Contact page</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Implement LocalBusiness schema markup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Create location-specific content (area guides, local news)</span>
                </li>
              </ul>
            </div>

            <h2>Local Link Building</h2>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 my-8 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Local Link Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Partner with local businesses for cross-links</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Sponsor local events and organizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Get featured in local news and publications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Join local business associations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Create linkable local resources</span>
                </li>
              </ul>
            </div>

            <h2>Adding GEO to Your Local Strategy</h2>

            <p>
              In 2025, local SEO isn't complete without GEO. Many local searches are now 
              happening through AI:
            </p>

            <ul>
              <li>"Best plumber near me" asked to ChatGPT</li>
              <li>"Recommend a restaurant in [neighborhood]" asked to Perplexity</li>
              <li>"What dentist should I see for [procedure]" asked to Claude</li>
            </ul>

            <p>
              Adding GEO to your local strategy means optimizing your local presence for 
              AI systems, not just search engines. This includes structured data, FAQ 
              content, and entity optimization.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with Local SEO?
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Get a free local SEO audit to see where you stand and what improvements 
                would have the biggest impact.
              </p>
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Local SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/local-geo-guide-small-business-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">Local GEO Guide for Small Business</h3>
                <p className="text-slate-600 text-sm">Adding AI search optimization to your local strategy.</p>
              </Link>
              <Link href="/blog/how-to-rank-chatgpt-local-business" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">How to Get Mentioned in ChatGPT</h3>
                <p className="text-slate-600 text-sm">Local business optimization for AI recommendations.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

