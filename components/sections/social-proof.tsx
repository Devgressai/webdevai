import { Star, Quote, CheckCircle } from 'lucide-react'



const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'Web Vello transformed our online presence completely. We went from 50 leads per month to over 200, and our revenue increased by 150% in just 6 months.',
    rating: 5,
    results: ['150% revenue increase', '300% more leads', '6 month timeline']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'The AI-powered SEO strategies are incredible. We\'re ranking for keywords we never thought possible, and our organic traffic has grown 400% year-over-year.',
    rating: 5,
    results: ['400% traffic growth', 'Top keyword rankings', 'Year-over-year success']
  },
  {
    name: 'Jennifer Chen',
    role: 'Founder',
    company: 'LegalTech Pro',
    content: 'Professional, results-driven, and incredibly effective. Web Vello helped us establish authority in our niche and attract high-value clients consistently.',
    rating: 5,
    results: ['Authority established', 'High-value clients', 'Consistent results']
  }
]

function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-secondary-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-soft border border-secondary-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-gray-400 ml-auto" />
                </div>
                
                <p className="text-secondary-700 mb-4 italic">
                  “{testimonial.content}”
                </p>
                
                <div className="mb-4">
                  <p className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {testimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-secondary-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SocialProof
export { SocialProof }
