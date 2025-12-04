import { Button } from '../../../components/ui/button'
import { ArrowRight, CheckCircle, Utensils, Coffee, Pizza, Wine, ChefHat, Truck, Store, Star } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO for Restaurants | AI Search Optimization for Food Service | Web Vello',
  description: 'Get your restaurant found in ChatGPT, Perplexity, and Google SGE. GEO optimization for restaurants, cafes, and food service businesses.',
  keywords: ['geo restaurants', 'ai seo restaurants', 'restaurant chatgpt optimization', 'food service geo', 'restaurant ai search'],
  alternates: {
    canonical: 'https://www.webvello.com/services/geo-restaurants',
  },
  openGraph: {
    title: 'GEO for Restaurants | AI Search for Food Service | Web Vello',
    description: 'Get your restaurant found in AI search results.',
    url: 'https://www.webvello.com/services/geo-restaurants',
    type: 'website',
  }
}

const restaurantTypes = [
  { icon: Utensils, name: "Full Service", description: "Fine dining and casual restaurants" },
  { icon: Coffee, name: "Cafes & Bakeries", description: "Coffee shops, bakeries, dessert spots" },
  { icon: Pizza, name: "Quick Service", description: "Fast casual and quick service restaurants" },
  { icon: Wine, name: "Bars & Lounges", description: "Bars, wine bars, cocktail lounges" },
  { icon: ChefHat, name: "Special Cuisine", description: "Specialty and ethnic restaurants" },
  { icon: Truck, name: "Food Trucks", description: "Food trucks and mobile vendors" },
  { icon: Store, name: "Multi-Location", description: "Restaurant groups and chains" },
  { icon: Star, name: "Catering", description: "Catering and event services" }
]

const whyGeoMatters = [
  {
    query: "\"Best Thai restaurant in [neighborhood]\"",
    impact: "Diners ask AI for specific cuisine recommendations, trusting AI to curate quality"
  },
  {
    query: "\"Where should I take clients for dinner in [city]?\"",
    impact: "Business diners ask AI for impressive restaurant recommendations"
  },
  {
    query: "\"Restaurants with outdoor seating in [area]\"",
    impact: "AI handles specific amenity queries that regular search doesn't answer well"
  },
  {
    query: "\"Best brunch spot near me\"",
    impact: "Occasion-based queries where AI recommends specific restaurants"
  }
]

const services = [
  {
    title: "Restaurant Entity Optimization",
    description: "AI systems need to understand your restaurant as a distinct dining entity with clear cuisine, atmosphere, and service style.",
    features: ["Restaurant schema markup", "Menu integration", "Cuisine positioning", "Atmosphere description"]
  },
  {
    title: "Experience Content Creation",
    description: "Create content that captures what makes dining at your restaurant special—the story AI can tell about you.",
    features: ["Dining experience content", "Chef/kitchen story", "Specialty dishes", "Occasion targeting"]
  },
  {
    title: "Review & Rating Integration",
    description: "AI systems heavily weight reviews for restaurant recommendations. We optimize your review presence.",
    features: ["Review aggregation", "Response management", "Rating optimization", "Review schema"]
  },
  {
    title: "Local & Occasion Targeting",
    description: "Dominate AI recommendations for your neighborhood and the occasions you serve best.",
    features: ["Neighborhood positioning", "Occasion content", "Time-based targeting", "Event capability"]
  }
]

const faqs = [
  {
    question: "Why is GEO important for restaurants?",
    answer: "When someone asks ChatGPT 'where should I eat tonight in [neighborhood]' or asks Perplexity 'best Italian restaurant for a date in [city],' AI recommends specific restaurants. If you're not optimized, you're missing reservations and covers."
  },
  {
    question: "How is restaurant GEO different from other industries?",
    answer: "Restaurant GEO is heavily weighted toward reviews, specific attributes (cuisine, price range, atmosphere), and occasion matching. We focus on getting you recommended for the right occasions and queries."
  },
  {
    question: "Can GEO help with specific occasions like date nights or business dinners?",
    answer: "Absolutely. Occasion targeting is one of the most valuable aspects of restaurant GEO. We optimize for queries like 'romantic restaurant in [area]' or 'restaurant for a business dinner downtown.'"
  },
  {
    question: "How do you incorporate our menu?",
    answer: "We implement menu schema markup and create content around signature dishes. This helps AI recommend you for specific dish queries like 'best lobster roll in [city]' or 'where to get authentic tacos.'"
  },
  {
    question: "What about multi-location restaurants?",
    answer: "For multi-location restaurants, we optimize both the brand entity and individual locations. Each location gets specific neighborhood targeting while building overall brand authority."
  },
  {
    question: "How do you measure restaurant GEO success?",
    answer: "We track AI mentions for target cuisine/occasion/location queries, monitor competitor visibility, and work with you to track attribution from customers who mention finding you through AI."
  }
]

export default function GEORestaurantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
              <Utensils className="w-4 h-4 text-rose-400" />
              <span className="text-white/80 text-sm">GEO for Restaurants</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Get Your{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Restaurant
              </span>{' '}
              Recommended by AI
            </h1>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              When someone asks ChatGPT "where should I eat tonight" or asks Perplexity 
              "best restaurant for a special occasion"—you should be the recommendation.
            </p>
            
            <Button
              className="h-14 px-8 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold rounded-xl"
              asChild
            >
              <Link href="/contact">
                Get Free Restaurant GEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Restaurants Need GEO
            </h2>
            <p className="text-xl text-slate-600">
              Diners are asking AI where to eat. AI recommendations drive reservations and covers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyGeoMatters.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8">
                <p className="text-lg font-bold text-slate-900 mb-3">{item.query}</p>
                <p className="text-slate-600">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Restaurant Types We Optimize
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We help all types of food service businesses get found in AI search.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {restaurantTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl p-6 text-center border border-slate-200">
                <type.icon className="w-10 h-10 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Restaurant GEO Package
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to get your restaurant recommended by AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              FAQs for Restaurant GEO
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to fill more seats from AI?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Get a free GEO audit for your restaurant. See exactly how visible you are 
            when diners ask AI for recommendations.
          </p>
          <Button
            className="h-14 px-10 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              Get Your Free Restaurant GEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

