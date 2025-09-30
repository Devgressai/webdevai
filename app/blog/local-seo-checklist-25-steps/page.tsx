import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ArrowRight, Calendar, User, Clock, CheckCircle, ExternalLink, MapPin, Search, Star, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local SEO Checklist: 25 Steps to Dominate Local Search in 2024 | Web Vello',
  description: 'Complete local SEO checklist with 25 actionable steps to dominate local search results. Boost your local visibility and attract more customers.',
  keywords: 'local SEO checklist, local search optimization, Google My Business, local SEO tips, local marketing, local search ranking',
  openGraph: {
    title: 'Local SEO Checklist: 25 Steps to Dominate Local Search in 2024',
    description: 'Complete local SEO checklist with 25 actionable steps to dominate local search results. Boost your local visibility and attract more customers.',
    url: 'https://webvello.com/blog/local-seo-checklist-25-steps',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-01-29T00:00:00.000Z',
    authors: ['Web Vello Team'],
    tags: ['Local SEO', 'Google My Business', 'Local Marketing', 'Search Optimization'],
  },
}

export default function BlogPost() {
  const checklistItems = [
    {
      category: 'Google My Business Optimization',
      items: [
        {
          title: 'Claim and verify your Google My Business listing',
          description: 'Ensure you have complete control over your business information',
          priority: 'High',
          time: '15 minutes'
        },
        {
          title: 'Complete all business information fields',
          description: 'Fill out every available field including hours, phone, website, and description',
          priority: 'High',
          time: '30 minutes'
        },
        {
          title: 'Add high-quality photos (minimum 10)',
          description: 'Include exterior, interior, team, and product/service photos',
          priority: 'High',
          time: '1 hour'
        },
        {
          title: 'Set accurate business hours',
          description: 'Include regular hours, holiday hours, and special hours',
          priority: 'Medium',
          time: '10 minutes'
        },
        {
          title: 'Choose the correct business category',
          description: 'Select the most specific category that describes your business',
          priority: 'High',
          time: '5 minutes'
        }
      ]
    },
    {
      category: 'Local Citations and Directories',
      items: [
        {
          title: 'Submit to Yelp',
          description: 'Create and optimize your Yelp business listing',
          priority: 'High',
          time: '20 minutes'
        },
        {
          title: 'List on Yellow Pages',
          description: 'Submit your business to online Yellow Pages directories',
          priority: 'Medium',
          time: '15 minutes'
        },
        {
          title: 'Register with Better Business Bureau',
          description: 'Create a BBB profile for credibility and local authority',
          priority: 'Medium',
          time: '30 minutes'
        },
        {
          title: 'Submit to local chamber of commerce',
          description: 'Join your local chamber and get listed in their directory',
          priority: 'High',
          time: '45 minutes'
        },
        {
          title: 'List on industry-specific directories',
          description: 'Find and submit to directories relevant to your industry',
          priority: 'Medium',
          time: '1 hour'
        }
      ]
    },
    {
      category: 'Website Local SEO',
      items: [
        {
          title: 'Add location pages for each service area',
          description: 'Create dedicated pages for each city you serve',
          priority: 'High',
          time: '2 hours'
        },
        {
          title: 'Include NAP (Name, Address, Phone) on every page',
          description: 'Ensure consistent business information across your website',
          priority: 'High',
          time: '30 minutes'
        },
        {
          title: 'Add local schema markup',
          description: 'Implement structured data to help search engines understand your business',
          priority: 'Medium',
          time: '1 hour'
        },
        {
          title: 'Create location-specific content',
          description: 'Write content that mentions local landmarks, events, and communities',
          priority: 'High',
          time: '3 hours'
        },
        {
          title: 'Optimize for local keywords',
          description: 'Target keywords like "service + city" throughout your content',
          priority: 'High',
          time: '2 hours'
        }
      ]
    },
    {
      category: 'Reviews and Reputation',
      items: [
        {
          title: 'Set up review monitoring system',
          description: 'Use tools to track reviews across all platforms',
          priority: 'High',
          time: '30 minutes'
        },
        {
          title: 'Encourage customer reviews',
          description: 'Ask satisfied customers to leave reviews on Google and other platforms',
          priority: 'High',
          time: 'Ongoing'
        },
        {
          title: 'Respond to all reviews professionally',
          description: 'Reply to both positive and negative reviews promptly',
          priority: 'High',
          time: 'Ongoing'
        },
        {
          title: 'Create review generation process',
          description: 'Develop a systematic approach to collecting reviews',
          priority: 'Medium',
          time: '1 hour'
        },
        {
          title: 'Monitor and address negative reviews',
          description: 'Address complaints quickly and professionally',
          priority: 'High',
          time: 'Ongoing'
        }
      ]
    },
    {
      category: 'Local Link Building',
      items: [
        {
          title: 'Partner with local businesses',
          description: 'Build relationships and earn links from local partners',
          priority: 'Medium',
          time: 'Ongoing'
        },
        {
          title: 'Sponsor local events',
          description: 'Get mentioned and linked from event websites',
          priority: 'Medium',
          time: 'Ongoing'
        },
        {
          title: 'Submit to local business associations',
          description: 'Join relevant local groups and get listed on their websites',
          priority: 'Medium',
          time: '1 hour'
        },
        {
          title: 'Create local content partnerships',
          description: 'Collaborate with local bloggers and influencers',
          priority: 'Low',
          time: 'Ongoing'
        },
        {
          title: 'Submit to local media',
          description: 'Get featured in local newspapers, magazines, and websites',
          priority: 'Low',
          time: 'Ongoing'
        }
      ]
    }
  ]

  const quickWins = [
    'Claim your Google My Business listing',
    'Add your business to Yelp',
    'Include NAP on every page',
    'Upload 10+ photos to GMB',
    'Set up review monitoring'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">Local SEO Checklist</span>
          </div>
        </nav>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
              Local SEO
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              January 29, 2024
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Web Vello Team
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              15 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Local SEO Checklist: 25 Steps to Dominate Local Search in 2024
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete local SEO checklist with 25 actionable steps to dominate local search results. 
            Boost your local visibility, attract more customers, and outrank your competition.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="h-64 bg-gradient-to-br from-green-100 to-blue-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <span className="text-green-600 font-semibold text-lg">Local SEO Domination</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Local SEO is crucial for businesses that serve specific geographic areas. With 46% of all Google 
            searches having local intent, optimizing for local search can make or break your business. This 
            comprehensive checklist will guide you through every essential step to dominate local search results.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Whether you're a small business owner or managing multiple locations, this 25-step local SEO 
            checklist will help you improve your local search visibility, attract more customers, and 
            increase your revenue from local searches.
          </p>

          {/* Quick Wins Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="h-8 w-8 text-green-600 mr-3" />
              Quick Wins (Start Here)
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              These 5 steps can be completed in under 2 hours and will immediately improve your local search visibility:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickWins.map((win, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{win}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Checklist */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Local SEO Checklist</h2>
          
          {checklistItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg mr-3">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm mr-3">
                          {categoryIndex + 1}.{itemIndex + 1}
                        </span>
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.priority === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : item.priority === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item.priority}
                        </span>
                        <span className="text-sm text-gray-500">{item.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Local SEO Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Local SEO Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Free Tools:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Google My Business</li>
                  <li>• Google Search Console</li>
                  <li>• Google Analytics</li>
                  <li>• Google Trends</li>
                  <li>• Yelp for Business</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Paid Tools:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• BrightLocal</li>
                  <li>• Whitespark</li>
                  <li>• Moz Local</li>
                  <li>• SEMrush</li>
                  <li>• Ahrefs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Measuring Success */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Measuring Local SEO Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Rankings</h3>
              <p className="text-sm text-gray-600">Track your position for local keywords</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Visibility</h3>
              <p className="text-sm text-gray-600">Monitor local pack appearances</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Calls & Leads</h3>
              <p className="text-sm text-gray-600">Track phone calls and form submissions</p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-16 p-8 bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Local SEO is a marathon, not a sprint. It takes consistent effort and optimization to see results. 
              Our team at Web Vello specializes in local SEO and can help you implement this checklist efficiently 
              while you focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Your Local SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/local-seo">
                <Button variant="outline" size="lg">
                  View Local SEO Services
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/google-my-business-optimization-guide" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Google My Business Optimization: Complete Guide
                </h4>
                <p className="text-gray-600 text-sm">
                  Master Google My Business with this comprehensive optimization guide.
                </p>
              </div>
            </Link>
            <Link href="/blog/ai-powered-seo-machine-learning" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI-Powered SEO: How Machine Learning is Revolutionizing Search
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover how AI is transforming SEO strategies and search optimization.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
