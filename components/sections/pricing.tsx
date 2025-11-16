import { Button } from '../ui/button'
import { CheckCircle, Star, ArrowRight, Target } from 'lucide-react'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses ready to grow',
      features: [
        'Local SEO optimization',
        'Google My Business setup',
        'Monthly reporting',
        'Basic website optimization',
        'Email support'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses with bigger goals',
      features: [
        'Everything in Starter',
        'Advanced SEO strategy',
        'Content marketing',
        'Social media management',
        'Conversion optimization',
        'Priority support'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      price: '$12,000',
      period: '/month',
      description: 'Complete digital transformation for established businesses',
      features: [
        'Everything in Professional',
        'Custom development',
        'Advanced analytics',
        'Dedicated account manager',
        'White-label solutions',
        '24/7 support'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ]

  const additionalServices = [
    {
      name: 'Website Development',
      description: 'Custom websites that convert visitors into customers',
      price: 'Starting at $3,500'
    },
    {
      name: 'E-commerce Solutions',
      description: 'Online stores that drive sales and growth',
      price: 'Starting at $5,000'
    },
    {
      name: 'AI-Powered SEO',
      description: 'Advanced SEO using artificial intelligence',
      price: 'Starting at $2,000'
    },
    {
      name: 'Conversion Optimization',
      description: 'Turn more visitors into paying customers',
      price: 'Starting at $1,500'
    }
  ]

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients see initial improvements within 30-60 days, with significant results typically appearing in 3-6 months. Local SEO can show faster results.'
    },
    {
      question: 'Can I cancel or change my plan?',
      answer: 'Yes, you can modify or cancel your plan at any time. We offer flexible month-to-month contracts with no long-term commitments.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our Enterprise plan includes custom development, and we can create tailored solutions for businesses with unique needs.'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transparent Pricing That Drives Results
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business goals. All plans include our proven methodology 
            and dedicated support to help you achieve measurable growth.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-20 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500 lg:scale-105 lg:-mt-4' : 'hover:ring-blue-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                    <Star className="mr-1.5 h-4 w-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Header Section */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 min-h-[2.5rem]">{plan.description}</p>
                
                {/* Price Section - Better Aligned */}
                <div className="mt-6 mb-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
                    <span className="text-lg text-gray-600 font-medium">{plan.period}</span>
                  </div>
                </div>
              </div>

              {/* Features List - Flex grow to push button down */}
              <ul className="flex-grow space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Always at bottom */}
              <div className="mt-auto pt-4">
                <Button
                  size="lg"
                  className={`w-full font-semibold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  asChild
                >
                  <a href={plan.href}>
                    {plan.name === 'Professional' ? (
                      <>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-lg text-gray-600">
              Need something specific? We offer specialized services to complement your main plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all hover:border-blue-200 flex flex-col"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <a href="/contact">
                      Learn More
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free strategy session and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Get FREE Strategy Session (Worth $500)
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="/case-studies">
                  See 300%+ Results
                </a>
              </Button>
            </div>
            
            {/* Urgency & Scarcity */}
            <div className="mt-6 text-center">
              <p className="text-sm text-blue-100 mb-2">
                <Target className="inline mr-1 h-4 w-4" />
                <span className="font-semibold">Limited Time:</span> Free strategy session (normally $500)
              </p>
              <p className="text-xs text-blue-200">
                Only 3 spots available this week • 500+ businesses trust us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
export { Pricing }