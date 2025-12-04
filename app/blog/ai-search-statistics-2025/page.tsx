import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User, Calendar, TrendingUp, Users, Search, MessageSquare } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export const metadata: Metadata = {
  title: 'AI Search Statistics 2025: ChatGPT, Perplexity & Google SGE Data',
  description: 'The latest statistics on AI search adoption, ChatGPT usage, Perplexity growth, and Google SGE impact. Essential data for understanding the AI search landscape.',
  keywords: ['ai search statistics', 'chatgpt usage statistics', 'perplexity ai stats', 'google sge statistics', 'ai search market data 2025'],
  alternates: {
    canonical: 'https://www.webvello.com/blog/ai-search-statistics-2025',
  },
  openGraph: {
    title: 'AI Search Statistics 2025: The Data You Need to Know',
    description: 'Essential statistics on AI search adoption and impact.',
    url: 'https://www.webvello.com/blog/ai-search-statistics-2025',
    type: 'article',
    publishedTime: '2025-01-18',
  }
}

export default function AISearchStatisticsPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <header className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span>Industry Data</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            AI Search Statistics 2025: ChatGPT, Perplexity & Google SGE Data
          </h1>
          
          <p className="text-xl text-white/70 mb-8">
            The essential statistics you need to understand the AI search landscape and 
            why GEO matters for your business.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Web Vello Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Key Stats */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <Users className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">1.2B+</p>
              <p className="text-sm text-slate-600">Monthly AI search users</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <TrendingUp className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">64%</p>
              <p className="text-sm text-slate-600">Under-35s prefer AI search</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <Search className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">84%</p>
              <p className="text-sm text-slate-600">Queries show Google SGE</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <MessageSquare className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-1">59%</p>
              <p className="text-sm text-slate-600">Zero-click searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="lead">
              AI search is no longer emerging technology—it's mainstream. These statistics 
              illustrate the scale of the shift and why businesses need to optimize for AI 
              visibility now.
            </p>

            <h2>AI Search Adoption Statistics</h2>

            <h3>Overall Usage</h3>
            <ul>
              <li><strong>1.2+ billion monthly users</strong> actively use AI search tools (ChatGPT, Claude, Perplexity, etc.)</li>
              <li><strong>200 million weekly active users</strong> for ChatGPT alone</li>
              <li><strong>100+ million monthly visits</strong> to Perplexity AI</li>
              <li><strong>40% year-over-year growth</strong> in AI search query volume</li>
            </ul>

            <h3>User Preferences</h3>
            <ul>
              <li><strong>64% of users under 35</strong> prefer asking AI over traditional Google search</li>
              <li><strong>52% of B2B buyers</strong> use AI tools during their research process</li>
              <li><strong>83% of B2B buyers</strong> complete most of their research before contacting vendors</li>
              <li><strong>47% of consumers</strong> have used AI to research products before purchasing</li>
            </ul>

            <h2>Google SGE / AI Overviews Statistics</h2>

            <ul>
              <li><strong>84% of commercial queries</strong> now show AI Overviews in Google results</li>
              <li><strong>Average AI Overview length:</strong> 4-6 paragraphs with 2-5 source citations</li>
              <li><strong>40% reduction</strong> in clicks to organic position #1 when AI Overview appears</li>
              <li><strong>Position of first organic result:</strong> Often pushed 1,500+ pixels below fold</li>
            </ul>

            <h2>Zero-Click Search Statistics</h2>

            <ul>
              <li><strong>59% of Google searches</strong> result in zero clicks (user gets answer without clicking)</li>
              <li><strong>65% of Google searches</strong> on mobile end without a click</li>
              <li><strong>AI answers accelerate this trend</strong> by providing more comprehensive answers directly</li>
            </ul>

            <h2>ChatGPT Statistics</h2>

            <ul>
              <li><strong>200 million weekly active users</strong> as of January 2025</li>
              <li><strong>1 billion+ messages per day</strong> processed</li>
              <li><strong>92% of Fortune 500 companies</strong> use ChatGPT in some capacity</li>
              <li><strong>Average session length:</strong> 8+ minutes (high engagement)</li>
            </ul>

            <h2>Perplexity AI Statistics</h2>

            <ul>
              <li><strong>100+ million monthly visits</strong></li>
              <li><strong>15 million daily queries</strong></li>
              <li><strong>Fastest-growing AI search platform</strong> in 2024</li>
              <li><strong>Professional/research users</strong> are primary demographic</li>
            </ul>

            <h2>Business Impact Statistics</h2>

            <h3>For Companies Optimizing for AI</h3>
            <ul>
              <li><strong>2-3x better results</strong> for businesses using integrated GEO+SEO strategies</li>
              <li><strong>189% average increase</strong> in AI search visibility after GEO implementation</li>
              <li><strong>40-60% improvement</strong> from content-only GEO optimizations</li>
              <li><strong>4-8 weeks</strong> typical time to initial AI visibility improvements</li>
            </ul>

            <h3>Consumer Behavior</h3>
            <ul>
              <li><strong>73% of users trust AI recommendations</strong> as much or more than traditional search</li>
              <li><strong>68% more likely to purchase</strong> from brands recommended by AI</li>
              <li><strong>Higher conversion rates</strong> from AI-referred traffic (users come with more intent)</li>
            </ul>

            <h2>What These Statistics Mean for Your Business</h2>

            <h3>The Opportunity</h3>
            <p>
              Most businesses haven't optimized for AI search yet. Early movers who invest in GEO now 
              can establish themselves as the go-to recommendations in their category before 
              competition catches up.
            </p>

            <h3>The Risk</h3>
            <p>
              Businesses that ignore AI search are becoming invisible to a massive and growing 
              audience. As AI search adoption accelerates, this visibility gap will only widen.
            </p>

            <h3>The Timeline</h3>
            <p>
              AI search is mainstream now, not a future trend to watch. The statistics show 
              billions of users already using these platforms. The time to act is immediate.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 my-12 not-prose text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Capture AI Search Traffic?
              </h3>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Get a free GEO audit to see how visible your business is in AI search 
                and what opportunities exist.
              </p>
              <Button
                className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Free GEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <h2>Sources & Methodology</h2>
            <p>
              Statistics compiled from publicly available data including OpenAI announcements, 
              SimilarWeb traffic data, industry research reports, and internal analysis. 
              All statistics are approximate and represent best available data as of January 2025.
            </p>

          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/geo-optimization-complete-guide-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">GEO Optimization: Complete Guide</h3>
                <p className="text-slate-600 text-sm">How to optimize for AI search platforms.</p>
              </Link>
              <Link href="/blog/geo-vs-seo-differences-2025" className="group p-6 rounded-xl border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-500">GEO vs SEO: Key Differences</h3>
                <p className="text-slate-600 text-sm">Why you need both strategies.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

