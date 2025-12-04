import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import { Button } from '../../components/ui/button'

export const metadata: Metadata = {
  title: 'Blog | GEO, SEO & Web Development Insights | Web Vello',
  description: 'Expert insights on GEO (Generative Engine Optimization), SEO, AI search, web development, and digital marketing. Stay ahead with actionable strategies.',
  keywords: ['geo blog', 'seo blog', 'ai search blog', 'web development blog', 'digital marketing insights'],
  alternates: {
    canonical: 'https://www.webvello.com/blog',
  },
  openGraph: {
    title: 'Blog | GEO, SEO & Web Development Insights',
    description: 'Expert insights on GEO, SEO, and web development.',
    url: 'https://www.webvello.com/blog',
    type: 'website',
  }
}

const featuredPosts = [
  {
    title: "GEO Optimization: Complete Guide for 2025",
    description: "Everything you need to know about optimizing for AI search platforms like ChatGPT, Perplexity, and Google SGE.",
    href: "/blog/geo-optimization-complete-guide-2025",
    category: "GEO",
    date: "January 10, 2025",
    readTime: "18 min read",
    featured: true
  },
  {
    title: "ChatGPT SEO: Complete Guide to Getting Recommended",
    description: "Learn how to optimize your business to be recommended by ChatGPT. Practical strategies for ChatGPT visibility.",
    href: "/blog/chatgpt-seo-guide-business-2025",
    category: "AI Optimization",
    date: "January 22, 2025",
    readTime: "14 min read",
    featured: true
  },
  {
    title: "AI Search Statistics 2025",
    description: "The essential statistics on AI search adoption, ChatGPT usage, and why GEO matters for your business.",
    href: "/blog/ai-search-statistics-2025",
    category: "Industry Data",
    date: "January 18, 2025",
    readTime: "8 min read",
    featured: true
  }
]

const allPosts = [
  {
    title: "GEO vs SEO: Key Differences and Why You Need Both",
    description: "Understand the differences between GEO and traditional SEO. Learn why you need both strategies.",
    href: "/blog/geo-vs-seo-differences-2025",
    category: "Strategy",
    date: "January 16, 2025",
    readTime: "10 min read"
  },
  {
    title: "Why Your Business Needs GEO in 2025",
    description: "The case for investing in GEO now. Understand the opportunity cost of waiting.",
    href: "/blog/why-your-business-needs-geo-2025",
    category: "Strategy",
    date: "January 20, 2025",
    readTime: "9 min read"
  },
  {
    title: "How to Rank Local Business in ChatGPT",
    description: "Step-by-step guide to getting your local business recommended by ChatGPT.",
    href: "/blog/how-to-rank-chatgpt-local-business",
    category: "Local GEO",
    date: "January 14, 2025",
    readTime: "12 min read"
  },
  {
    title: "Perplexity AI Business Visibility Guide",
    description: "How to get your business visible in Perplexity AI search results.",
    href: "/blog/perplexity-ai-business-visibility",
    category: "AI Optimization",
    date: "January 15, 2025",
    readTime: "11 min read"
  },
  {
    title: "Google SGE AI Overviews Optimization",
    description: "How to optimize for Google's AI Overviews and SGE experience.",
    href: "/blog/google-sge-ai-overviews-optimization-2025",
    category: "SEO",
    date: "January 17, 2025",
    readTime: "10 min read"
  },
  {
    title: "Schema Markup for GEO: Complete Guide",
    description: "Essential schema markup for AI search visibility and GEO optimization.",
    href: "/blog/schema-markup-geo-guide-2025",
    category: "Technical",
    date: "January 19, 2025",
    readTime: "13 min read"
  },
  {
    title: "Local GEO Guide for Small Business",
    description: "A practical guide to local GEO for small business owners.",
    href: "/blog/local-geo-guide-small-business-2025",
    category: "Local GEO",
    date: "January 12, 2025",
    readTime: "15 min read"
  }
]

const categories = [
  { name: "GEO", count: 4 },
  { name: "AI Optimization", count: 3 },
  { name: "Strategy", count: 2 },
  { name: "Local GEO", count: 2 },
  { name: "SEO", count: 2 },
  { name: "Technical", count: 1 },
  { name: "Industry Data", count: 1 }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              GEO, SEO & Web{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Development
              </span>{' '}
              Insights
            </h1>
            <p className="text-xl text-white/70">
              Expert strategies for AI search visibility, traditional SEO, and modern web development. 
              Actionable insights to grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Featured Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-rose-50 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-rose-500 text-sm font-medium">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts + Categories */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-10">All Articles</h2>
              
              <div className="space-y-6">
                {allPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group block bg-white rounded-xl p-6 border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-rose-500 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm">
                          {post.description}
                        </p>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Categories</h3>
                
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-700 hover:text-rose-500 cursor-pointer transition-colors">
                        {category.name}
                      </span>
                      <span className="text-slate-400">{category.count}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Card */}
                <div className="mt-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                  <h4 className="font-bold mb-2">Free GEO Audit</h4>
                  <p className="text-white/70 text-sm mb-4">
                    See how visible your business is in AI search.
                  </p>
                  <Button
                    className="w-full h-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-sm rounded-lg"
                    asChild
                  >
                    <Link href="/contact">
                      Get Free Audit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on GEO & AI Search
          </h2>
          <p className="text-white/70 mb-8">
            Get weekly insights on AI search optimization, SEO strategies, and web development best practices.
          </p>
          <Button
            className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
