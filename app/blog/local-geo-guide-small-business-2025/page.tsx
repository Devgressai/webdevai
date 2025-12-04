import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, User, Calendar } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export const metadata: Metadata = {
  title: 'Local GEO for Small Business: Complete Guide to AI Search Visibility 2025',
  description: 'How small and local businesses can optimize for AI search engines like ChatGPT, Perplexity, and Google SGE. Practical strategies that work.',
  keywords: ['local geo', 'small business geo', 'local ai seo', 'chatgpt local business', 'ai search local business'],
  alternates: {
    canonical: 'https://www.webvello.com/blog/local-geo-guide-small-business-2025',
  },
  openGraph: {
    title: 'Local GEO for Small Business: Complete Guide 2025',
    description: 'How small and local businesses can optimize for AI search engines.',
    url: 'https://www.webvello.com/blog/local-geo-guide-small-business-2025',
    type: 'article',
    publishedTime: '2025-01-10',
  }
}

export default function LocalGEOGuidePage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>Local SEO & GEO</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Local GEO for Small Business: Complete Guide to AI Search Visibility
          </h1>
          
          <p className="text-xl text-white/70 mb-8">
            How local service businesses can get mentioned when customers ask AI 
            for recommendations in their city.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Web Vello Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>18 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="lead">
              When someone in your city asks ChatGPT "Who's the best plumber near me?" or tells 
              Perplexity "Find a good dentist in [your city]," does your business get mentioned?
            </p>

            <p>
              For most local businesses, the answer is no. But it doesn't have to be that way. 
              This guide shows you exactly how to optimize your local business for AI search—what 
              we call <strong>Local GEO</strong> (Generative Engine Optimization).
            </p>

            <h2>Why Local Businesses Need GEO</h2>

            <p>
              The way people find local businesses is changing. Instead of typing "plumber near me" 
              into Google, more people are asking AI assistants questions like:
            </p>

            <ul>
              <li>"Who's the best plumber in Denver for emergency repairs?"</li>
              <li>"Find me a family dentist in Austin that's good with kids"</li>
              <li>"What's a reliable HVAC company in Phoenix?"</li>
              <li>"Recommend a real estate agent in Seattle who specializes in first-time buyers"</li>
            </ul>

            <p>
              When AI systems answer these questions, they mention specific businesses. The businesses 
              that get mentioned win the customer. The ones that don't exist are invisible.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8 not-prose">
              <p className="text-rose-900 font-medium">
                <strong>The Opportunity:</strong> Most local businesses haven't optimized for AI search yet. 
                If you do it now, you can establish yourself as the go-to recommendation in your area 
                before your competitors catch on.
              </p>
            </div>

            <h2>How AI Search Handles Local Queries</h2>

            <p>
              Understanding how AI systems answer local questions helps you optimize for them:
            </p>

            <h3>1. Entity Recognition</h3>
            <p>
              AI systems identify "entities"—businesses, locations, services. For your business to be 
              mentioned, AI needs to recognize you as a distinct entity in your location and industry.
            </p>

            <h3>2. Information Extraction</h3>
            <p>
              AI pulls information from websites, directories, reviews, and other sources. The more 
              clearly your information is presented, the more likely AI will extract and use it.
            </p>

            <h3>3. Authority Assessment</h3>
            <p>
              AI systems try to recommend authoritative, trustworthy businesses. This is based on 
              factors like reviews, mentions on other sites, and comprehensive website content.
            </p>

            <h3>4. Relevance Matching</h3>
            <p>
              When someone asks a question, AI matches it to relevant information. Your content 
              needs to align with how people actually phrase local search queries.
            </p>

            <h2>Local GEO Strategy: Step by Step</h2>

            <h3>Step 1: Establish Your Business Entity</h3>
            
            <p>AI systems need to understand who you are. Make this crystal clear:</p>

            <ul>
              <li><strong>Business name</strong> - Use consistently everywhere</li>
              <li><strong>Location</strong> - Full address, service areas, neighborhoods</li>
              <li><strong>Services</strong> - Specific services you offer</li>
              <li><strong>Contact info</strong> - Phone, email, hours</li>
              <li><strong>Credentials</strong> - Licenses, certifications, years in business</li>
            </ul>

            <p>
              Add <strong>LocalBusiness schema markup</strong> to your website that includes all 
              this information in a format AI systems can easily process.
            </p>

            <h3>Step 2: Create Location-Specific Content</h3>

            <p>Don't just have a generic "Services" page. Create content for:</p>

            <ul>
              <li><strong>City pages</strong> - Dedicated pages for each city you serve</li>
              <li><strong>Neighborhood pages</strong> - If you serve specific areas within a city</li>
              <li><strong>Service + location pages</strong> - "Plumbing Services in [City]"</li>
            </ul>

            <p>
              Each page should include local context—not just keyword stuffing, but genuine 
              information about serving that area.
            </p>

            <h3>Step 3: Build Comprehensive FAQ Content</h3>

            <p>
              AI systems love FAQ content because it directly matches question-answer format. 
              Create FAQs that answer questions like:
            </p>

            <ul>
              <li>"What areas do you serve in [City]?"</li>
              <li>"How much does [service] cost in [City]?"</li>
              <li>"How quickly can you respond to emergencies in [Area]?"</li>
              <li>"What makes you different from other [industry] in [City]?"</li>
            </ul>

            <h3>Step 4: Leverage Reviews and Testimonials</h3>

            <p>
              AI systems consider reviews when making recommendations. Strategies:
            </p>

            <ul>
              <li>Actively collect Google reviews (still important for AI)</li>
              <li>Feature testimonials on your website with full names and context</li>
              <li>Include specific results and outcomes in testimonial content</li>
              <li>Respond to reviews (shows engagement)</li>
            </ul>

            <h3>Step 5: Consistent Information Across the Web</h3>

            <p>
              Your business information should be identical everywhere:
            </p>

            <ul>
              <li>Google Business Profile</li>
              <li>Yelp, industry directories</li>
              <li>Social media profiles</li>
              <li>Local business associations</li>
              <li>Chamber of Commerce</li>
            </ul>

            <p>
              Inconsistent information confuses AI systems and reduces your chances of being mentioned.
            </p>

            <h2>Content Templates for Local GEO</h2>

            <h3>City Service Page Template</h3>

            <div className="bg-slate-100 rounded-lg p-6 my-6 not-prose">
              <p className="font-bold mb-2">Page Title:</p>
              <p className="mb-4">[Service] in [City], [State] | [Your Business Name]</p>
              
              <p className="font-bold mb-2">H1:</p>
              <p className="mb-4">[Service] Services in [City]</p>
              
              <p className="font-bold mb-2">Key Sections:</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Introduction with local context</li>
                <li>Services offered in this area</li>
                <li>Service areas/neighborhoods covered</li>
                <li>Why choose us for [City]</li>
                <li>Local testimonials</li>
                <li>FAQ section with local questions</li>
                <li>Contact/CTA for that location</li>
              </ul>
            </div>

            <h3>FAQ Section Template</h3>

            <p>Include these question types on every location page:</p>

            <ul>
              <li><strong>Availability:</strong> "Do you offer [service] in [neighborhood]?"</li>
              <li><strong>Pricing:</strong> "How much does [service] cost in [City]?"</li>
              <li><strong>Timing:</strong> "How fast can you get to [Area] for emergencies?"</li>
              <li><strong>Comparison:</strong> "Why should I choose you over other [industry] in [City]?"</li>
              <li><strong>Process:</strong> "What's the process for [service] in [City]?"</li>
            </ul>

            <h2>Technical Implementation</h2>

            <h3>LocalBusiness Schema</h3>
            
            <p>Add this schema to your website (customize for your business):</p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "description": "Brief description of your business",
  "url": "https://yourbusiness.com",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Your City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXXX",
    "longitude": "-XX.XXXXX"
  },
  "areaServed": [
    {"@type": "City", "name": "Your City"},
    {"@type": "City", "name": "Nearby City"}
  ],
  "serviceType": ["Service 1", "Service 2"],
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}`}
              </pre>
            </div>

            <h3>FAQPage Schema</h3>

            <p>Add FAQ schema to pages with FAQ sections:</p>

            <div className="bg-slate-900 rounded-lg p-6 my-6 not-prose overflow-x-auto">
              <pre className="text-sm text-slate-100">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Do you offer plumbing in [City]?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we provide full plumbing services..."
    }
  }]
}`}
              </pre>
            </div>

            <h2>Common Local GEO Mistakes</h2>

            <ul>
              <li><strong>Generic location pages</strong> - Copy-paste content with just city names swapped</li>
              <li><strong>Ignoring neighborhoods</strong> - Not optimizing for specific areas people search for</li>
              <li><strong>Missing schema</strong> - No structured data for AI to easily process</li>
              <li><strong>Inconsistent NAP</strong> - Different name/address/phone across the web</li>
              <li><strong>No local content</strong> - Generic pages without local context or relevance</li>
              <li><strong>Neglecting reviews</strong> - Not actively collecting and featuring reviews</li>
            </ul>

            <h2>Measuring Local GEO Success</h2>

            <p>Track these metrics:</p>

            <ul>
              <li><strong>Manual AI testing</strong> - Ask ChatGPT/Perplexity local queries and track mentions</li>
              <li><strong>Branded searches</strong> - Increases when people discover you through AI</li>
              <li><strong>Direct traffic</strong> - People typing your URL after AI exposure</li>
              <li><strong>Phone calls mentioning AI</strong> - Ask new customers how they found you</li>
              <li><strong>Local ranking improvements</strong> - GEO work often improves traditional local SEO too</li>
            </ul>

            <h2>Getting Started Today</h2>

            <p>Here's your action plan:</p>

            <ol>
              <li><strong>This week:</strong> Add LocalBusiness schema to your homepage</li>
              <li><strong>This month:</strong> Create or optimize city/service landing pages</li>
              <li><strong>Next month:</strong> Build FAQ sections with local questions</li>
              <li><strong>Ongoing:</strong> Collect reviews and maintain consistent business info</li>
            </ol>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with Local GEO?
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Get a free audit to see how visible your local business is in AI search 
                and what opportunities exist in your market.
              </p>
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free Local GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <h2>Conclusion</h2>
            
            <p>
              Local GEO is an emerging opportunity for small businesses. Most of your competitors 
              haven't optimized for AI search yet, which means the businesses that act now will 
              establish themselves as the go-to recommendations in their area.
            </p>

            <p>
              The strategies in this guide don't require technical expertise or big budgets. 
              They require understanding how AI systems work and creating content that makes 
              it easy for them to recommend you.
            </p>

            <p>
              Start with the basics—schema markup, location pages, FAQs—and build from there. 
              Every improvement increases your chances of being the business AI mentions when 
              local customers ask for recommendations.
            </p>

          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/geo-optimization-complete-guide-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">GEO Optimization: The Complete 2025 Guide</h3>
                <p className="text-slate-600 text-sm">Everything you need to know about optimizing for AI search.</p>
              </Link>
              <Link href="/blog/what-is-generative-engine-optimization-geo-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">What Is GEO? Generative Engine Optimization Explained</h3>
                <p className="text-slate-600 text-sm">A beginner-friendly introduction to GEO.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

