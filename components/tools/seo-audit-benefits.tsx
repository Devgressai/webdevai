import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { 
  Search, 
  TrendingUp, 
  Target, 
  Eye, 
  Smartphone, 
  Zap,
  BarChart3,
  CheckCircle
} from 'lucide-react'

const benefits = [
  {
    icon: Search,
    title: "Comprehensive SEO Analysis",
    description: "Get a complete audit of your website’s SEO health including meta tags, headings, content structure, and technical SEO factors."
  },
  {
    icon: TrendingUp,
    title: "Ranking Factor Analysis",
    description: "Identify which SEO factors are helping or hurting your search rankings and get specific recommendations for improvement."
  },
  {
    icon: Target,
    title: "Keyword Optimization",
    description: "Analyze your keyword usage, density, and placement to ensure you’re targeting the right terms for maximum visibility."
  },
  {
    icon: Eye,
    title: "Content Quality Assessment",
    description: "Evaluate your content for readability, relevance, and SEO best practices to improve user engagement and search rankings."
  },
  {
    icon: Smartphone,
    title: "Mobile SEO Check",
    description: "Ensure your website is optimized for mobile devices and follows Google’s mobile-first indexing requirements."
  },
  {
    icon: Zap,
    title: "Technical SEO Audit",
    description: "Check for technical issues like broken links, slow loading times, and crawlability problems that affect search rankings."
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Get detailed metrics on your website’s search performance and identify opportunities for growth and improvement."
  },
  {
    icon: CheckCircle,
    title: "Actionable Recommendations",
    description: "Receive specific, implementable suggestions to improve your SEO and boost your search engine rankings."
  }
]

export function SEOAuditBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Why SEO Audits Matter
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            A comprehensive SEO audit is the first step to improving your search rankings and driving more organic traffic. 
            Our free tool helps you identify issues and opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-secondary-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              The Impact of SEO Optimization
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              SEO optimization has a direct impact on your website’s visibility, traffic, and business success. 
              Here’s what proper SEO can do for your business:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">93%</div>
              <div className="text-sm text-secondary-600">of online experiences begin with a search engine</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">75%</div>
              <div className="text-sm text-secondary-600">of users never scroll past the first page of search results</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-sm text-secondary-600">more traffic for websites on the first page vs. second page</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
              <div className="text-sm text-secondary-600">of marketers say SEO generates more leads than any other marketing activity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

