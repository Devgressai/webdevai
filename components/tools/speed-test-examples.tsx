import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Zap,
  Clock,
  TrendingUp
} from 'lucide-react'

const examples = [
  {
    website: "E-commerce Store",
    url: "example-store.com",
    score: 85,
    status: "good",
    improvements: [
      "Optimized product images",
      "Implemented lazy loading",
      "Minified CSS and JavaScript"
    ],
    results: "40% faster load times, 25% increase in conversions"
  },
  {
    website: "Corporate Website",
    url: "company-website.com",
    score: 72,
    status: "needs-improvement",
    improvements: [
      "Compressed images",
      "Enabled browser caching",
      "Removed unused CSS"
    ],
    results: "2.3s faster load times, improved user engagement"
  },
  {
    website: "Blog Platform",
    url: "blog-example.com",
    score: 91,
    status: "excellent",
    improvements: [
      "CDN implementation",
      "Database optimization",
      "Caching strategies"
    ],
    results: "60% improvement in Core Web Vitals, better SEO rankings"
  }
]

const commonIssues = [
  {
    issue: "Large Image Files",
    impact: "High",
    solution: "Compress and optimize images using WebP format",
    savings: "1-3 seconds"
  },
  {
    issue: "Render-Blocking Resources",
    impact: "High",
    solution: "Defer non-critical CSS and JavaScript",
    savings: "0.5-2 seconds"
  },
  {
    issue: "Unoptimized Code",
    impact: "Medium",
    solution: "Minify CSS, JavaScript, and HTML files",
    savings: "0.2-1 second"
  },
  {
    issue: "No Caching",
    impact: "Medium",
    solution: "Implement browser and server-side caching",
    savings: "0.5-1.5 seconds"
  },
  {
    issue: "Too Many HTTP Requests",
    impact: "Medium",
    solution: "Combine files and use CSS sprites",
    savings: "0.3-1 second"
  },
  {
    issue: "Unused CSS",
    impact: "Low",
    solution: "Remove unused CSS rules and styles",
    savings: "0.1-0.5 seconds"
  }
]

export function SpeedTestExamples() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'needs-improvement':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800'
      case 'good':
        return 'bg-blue-100 text-blue-800'
      case 'needs-improvement':
        return 'bg-yellow-100 text-yellow-800'
      case 'poor':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Real Speed Optimization Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            See how businesses have improved their website performance and achieved 
            measurable results with speed optimization.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-lg font-semibold text-secondary-900">
                      {example.website}
                    </CardTitle>
                    <CardDescription className="text-sm text-secondary-500">
                      {example.url}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {example.score}
                    </div>
                    <Badge className={getStatusColor(example.status)}>
                      {example.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary-500" />
                      Optimizations Applied
                    </h4>
                    <ul className="space-y-1">
                      {example.improvements.map((improvement, idx) => (
                        <li key={idx} className="text-sm text-secondary-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Results Achieved
                    </h4>
                    <p className="text-sm text-green-700">
                      {example.results}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Issues and Solutions */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Common Speed Issues & Solutions
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Here are the most common website speed issues we find and the solutions 
              that can help improve your site’s performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((item, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-secondary-900">
                    {item.issue}
                  </h4>
                  <Badge className={getImpactColor(item.impact)}>
                    {item.impact} Impact
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-secondary-700 mb-1">Solution:</h5>
                    <p className="text-sm text-secondary-600">
                      {item.solution}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary-500" />
                    <span className="text-primary-600 font-medium">
                      Potential savings: {item.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Tips */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Quick Speed Optimization Tips
            </h3>
            <p className="text-primary-100 max-w-3xl mx-auto">
              Start improving your website speed today with these actionable tips 
              that can make an immediate difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Optimize Images</h4>
              <p className="text-sm text-primary-100">
                Compress images and use modern formats like WebP
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Enable Caching</h4>
              <p className="text-sm text-primary-100">
                Set up browser and server-side caching
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Minify Code</h4>
              <p className="text-sm text-primary-100">
                Remove unnecessary characters from CSS/JS
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Use CDN</h4>
              <p className="text-sm text-primary-100">
                Serve content from locations closer to users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
