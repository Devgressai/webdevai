import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Search, 
  Smartphone, 
  DollarSign,
  Clock,
  Target
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: "Core Web Vitals Analysis",
    description: "Get detailed insights into Google’s Core Web Vitals metrics including LCP, FID, and CLS to understand your site’s user experience."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Identify specific opportunities to improve your website speed and get actionable recommendations for better performance."
  },
  {
    icon: Users,
    title: "User Experience Impact",
    description: "Understand how page speed affects user engagement, bounce rates, and conversion rates on your website."
  },
  {
    icon: Search,
    title: "SEO Benefits",
    description: "Page speed is a ranking factor. Faster sites rank higher in search results and get more organic traffic."
  },
  {
    icon: Smartphone,
    title: "Mobile Performance",
    description: "Test both mobile and desktop performance to ensure your site works well across all devices and screen sizes."
  },
  {
    icon: DollarSign,
    title: "Revenue Impact",
    description: "Faster websites convert better. Every second of load time improvement can increase conversions by 7%."
  }
]

export function SpeedTestBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Why Website Speed Matters
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            Website speed directly impacts user experience, search rankings, and business success. 
            Our free speed test tool helps you understand and improve your site’s performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              The Impact of Website Speed
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Research shows that website speed has a direct correlation with user behavior, 
              search rankings, and business metrics. Here’s what the data tells us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">53%</div>
              <div className="text-sm text-secondary-600">of users abandon sites that take longer than 3 seconds to load</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">7%</div>
              <div className="text-sm text-secondary-600">increase in conversions for every 1 second improvement in load time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">16%</div>
              <div className="text-sm text-secondary-600">decrease in customer satisfaction for every 1 second delay</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1.9s</div>
              <div className="text-sm text-secondary-600">average load time for top-performing websites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
