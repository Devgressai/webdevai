import { Button } from '../../../components/ui/button'
import { ArrowRight, ShoppingCart, CreditCard, TrendingUp, CheckCircle, Eye, Target, BarChart3, Zap, Users, Shield, Truck, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../../lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Design Services | Conversion-First Storefronts | Web Vello',
  description: 'Web Vello designs beautiful, conversion-optimized e-commerce experiences. From product pages to checkout, every detail is engineered to boost revenue.',
  keywords: ['ecommerce design agency', 'shopify design services', 'conversion focused ecommerce design', 'web vello ecommerce', 'online store design'],
  alternates: {
    canonical: 'https://www.webvello.com/services/ecommerce-design',
  },
  openGraph: {
    title: 'E-commerce Design Services | Web Vello',
    description: 'Partner with Web Vello to craft persuasive e-commerce experiences that increase conversions and lifetime value.',
    url: 'https://www.webvello.com/services/ecommerce-design',
    type: 'website',
  }
}

const features = [
  {
    title: "Conversion-Optimized Design",
    description: "Every design element is strategically placed to maximize sales and minimize cart abandonment.",
    icon: Target,
    benefits: ["Strategic CTAs", "Optimized product pages", "Streamlined checkout", "Reduced cart abandonment"]
  },
  {
    title: "Mobile-First Ecommerce",
    description: "Responsive design that ensures seamless shopping experiences on all devices.",
    icon: ShoppingCart,
    benefits: ["Mobile-optimized", "Touch-friendly", "Fast loading", "Cross-device consistency"]
  },
  {
    title: "User Experience Excellence",
    description: "Intuitive navigation and seamless user flows that guide customers to purchase.",
    icon: Eye,
    benefits: ["Easy navigation", "Clear product hierarchy", "Quick search", "Smooth checkout"]
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading times that keep customers engaged and improve conversion rates.",
    icon: Zap,
    benefits: ["Fast page loads", "Optimized images", "Efficient code", "Better SEO rankings"]
  }
]

const services = [
  {
    title: "Product Page Design",
    description: "High-converting product pages with compelling visuals and persuasive copy.",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Shopping Cart & Checkout",
    description: "Streamlined checkout process that reduces friction and increases conversions.",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Category & Collection Pages",
    description: "Organized product browsing that helps customers find what they need quickly.",
    icon: Users,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Mobile Ecommerce",
    description: "Mobile-optimized shopping experiences that drive mobile sales.",
    icon: Truck,
    color: "from-orange-500 to-red-600"
  }
]

const results = [
  {
    metric: "350%+",
    description: "Average increase in conversion rates"
  },
  {
    metric: "60%",
    description: "Reduction in cart abandonment"
  },
  {
    metric: "4x",
    description: "Faster page load times"
  },
  {
    metric: "200%+",
    description: "Improvement in mobile sales"
  }
]

export default function EcommerceDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ecommerce Website Design
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Ecommerce Websites That
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Convert Visitors to Customers</span>
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Transform your online store with conversion-focused ecommerce design. Our designs don’t just look good—they 
              drive sales, reduce cart abandonment, and maximize your revenue potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow">
                <Link href="/contact">
                  Design Your Ecommerce Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Ecommerce Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Our Ecommerce Design Services?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We specialize in creating ecommerce experiences that don’t just look professional—they perform, 
              converting browsers into buyers and maximizing your online revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                </div>
                <p className="text-secondary-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-secondary-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Ecommerce Design Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From product pages to checkout optimization, we design every element of your 
              ecommerce experience for maximum conversions and sales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={cn(
                    "h-12 w-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r",
                    service.color
                  )}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">{service.title}</h3>
                </div>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
              Real Results from Our Ecommerce Designs
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Our ecommerce websites consistently deliver measurable improvements 
              in conversion rates, sales, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{result.metric}</div>
                <p className="text-secondary-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Online Sales?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Don’t let poor design cost you customers and revenue. Our ecommerce designs 
              are built to convert and maximize your online business potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/contact">
                  Design Your Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/case-studies">View Ecommerce Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
