import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react'
import { getBlogPosts, getBlogCategories } from '../../lib/get-blog-posts'

export const metadata: Metadata = {
  title: 'Web Vello Blog | Digital Marketing & Web Development Insights',
  description: 'Stay updated with the latest trends in web development, digital marketing, and AI consulting. Expert insights, tips, and strategies for business growth.',
  keywords: 'web development blog, digital marketing insights, SEO tips, AI consulting, business growth strategies',
  openGraph: {
    title: 'Web Vello Blog | Digital Marketing & Web Development Insights',
    description: 'Expert insights on web development, digital marketing, and AI consulting. Stay ahead with the latest trends and strategies.',
    url: 'https://www.webvello.com/blog',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const categories = await getBlogCategories()
  
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Web Vello <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with expert insights on web development, digital marketing, and AI consulting. 
            Discover strategies that drive real business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              Weekly Updates
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 text-blue-600 mr-2" />
              Expert Insights
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 text-blue-600 mr-2" />
              Industry Trends
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Featured Article</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">Article</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Web Development Company Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Shopify Web Development Company
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a leading Shopify web development company, Web Vello helps businesses build powerful, 
              scalable e-commerce solutions that drive sales and enhance customer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Shopify Development</h3>
              <p className="text-gray-600">
                Tailored Shopify stores that reflect your brand and meet your specific business needs.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopify Plus Solutions</h3>
              <p className="text-gray-600">
                Enterprise-level Shopify Plus development for high-volume businesses and complex requirements.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous maintenance, updates, and optimization to keep your Shopify store performing at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Web Vello
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on web development, digital marketing, and AI consulting delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
