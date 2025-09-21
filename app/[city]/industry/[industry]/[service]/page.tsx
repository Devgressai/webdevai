import type { Metadata } from 'next'
import { getCity, citySlugs } from '../../../../../lib/cities'
import { getIndustry, industrySlugs } from '../../../../../lib/industries'
import { getService, serviceSlugs } from '../../../../../lib/services'
import { Button } from '../../../../../components/ui/button'
import { fetchCisDoc } from '../../../../../lib/cis-content'
import { PortableText } from '@portabletext/react'
import { getStaticCisDoc } from '../../../../../lib/cis-static'
import { ensureMinimumWords, generateSeoPadding } from '../../../../../lib/seo-content'

interface Params {
  city: string
  industry: string
  service: string
}

export async function generateStaticParams() {
  const allowedServices: string[] = ['web-development', 'seo', 'website-design']
  const params: Params[] = []
  for (const city of citySlugs) {
    for (const industry of industrySlugs) {
      for (const service of allowedServices) {
        params.push({ city, industry, service })
      }
    }
  }
  return params
}

export const revalidate = 86400 // 1 day ISR

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const city = getCity(params.city)
  const industry = getIndustry(params.industry)
  const service = getService(params.service)

  if (!city || !industry || !service) return { title: 'Page Not Found' }

  const title = `${service.name} in ${city.fullName} for ${industry.name} Companies`
  const description = `Expert ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} companies in ${city.fullName}. Drive growth with conversion-focused, SEO-optimized strategies tailored to ${industry.name} organizations in ${city.name}.`

  return {
    title,
    description,
    keywords: [
      service.name,
      city.name,
      city.state,
      industry.name,
      'digital marketing',
      'SEO',
      'web development',
      'lead generation'
    ],
    alternates: { canonical: `https://webvello.com/${params.city}/industry/${params.industry}/${params.service}` },
    openGraph: {
      title,
      description,
      url: `https://webvello.com/${params.city}/industry/${params.industry}/${params.service}`,
      siteName: 'Web Vello',
      type: 'website'
    },
    robots: { index: false, follow: true }
  }
}

export default async function CityIndustryServicePage({ params }: { params: Params }) {
  const city = getCity(params.city)
  const industry = getIndustry(params.industry)
  const service = getService(params.service)
  const staticDoc = getStaticCisDoc(params.city, params.industry, params.service)
  const cms = await fetchCisDoc(params.city, params.industry, params.service)

  if (!city || !industry || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </div>
      </div>
    )
  }

  // If CMS content exists and is published/in-review, prefer CMS content
  if (cms && cms.status && cms.status !== 'draft') {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{cms.title}</h1>
            {cms.hero && <p className="text-lg text-white/90 max-w-3xl mx-auto">{cms.hero}</p>}
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Portable Text renderer can be added to render cms.content */}
            {cms.content && cms.content.length > 0 && (
              <PortableText value={cms.content} />
            )}
            {cms.faqs && cms.faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {cms.faqs.map((f, i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-4 border">
                      <h3 className="font-semibold mb-2">{f.question}</h3>
                      <p className="text-gray-700">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Ensure minimum word count with structured SEO padding */}
            {(() => {
              const cmsWordCount = Array.isArray(cms.content)
                ? cms.content.reduce((sum: number, block: any) => {
                    const text = Array.isArray(block?.children)
                      ? block.children.map((c: any) => c?.text ?? '').join(' ')
                      : ''
                    const count = text.split(/\s+/).filter(Boolean).length
                    return sum + count
                  }, 0)
                : 0
              const padding = generateSeoPadding(
                city.name,
                city.fullName,
                industry.name,
                service.name,
                cmsWordCount,
                4000
              )
              return padding.length > 0 ? (
                <div className="space-y-6">
                  {padding.map((p, i) => (
                    <p key={i} className="text-gray-800 leading-relaxed">{p}</p>
                  ))}
                </div>
              ) : null
            })()}
          </div>
        </section>
      </div>
    )
  }

  if (staticDoc) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{staticDoc.title}</h1>
            {staticDoc.hero && <p className="text-lg text-white/90 max-w-3xl mx-auto">{staticDoc.hero}</p>}
          </div>
        </section>
        {(() => {
          const padded = ensureMinimumWords(
            staticDoc.sections,
            city.name,
            city.fullName,
            industry.name,
            service.name,
            4000
          )
          return (
            <section className="py-12 px-6">
              <div className="max-w-5xl mx-auto space-y-6">
                {padded.map((s, i) => (
                  <p key={i} className="text-gray-800 leading-relaxed">{s}</p>
                ))}
              </div>
            </section>
          )
        })()}
        {(staticDoc.faqs && staticDoc.faqs.length > 0) && (
          <section className="py-12 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {staticDoc.faqs.map((f, i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-4 border">
                    <h3 className="font-semibold mb-2">{f.question}</h3>
                    <p className="text-gray-700">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Organization + Service breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": city.name,
                "item": `https://webvello.com/${params.city}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": `Industry: ${industry.name}`,
                "item": `https://webvello.com/${params.city}/industry/${params.industry}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": service.name,
                "item": `https://webvello.com/${params.city}/industry/${params.industry}/${params.service}`
              }
            ]
          })
        }}
      />
      <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {service.name} in {city.fullName} for {industry.name} Companies
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Conversion-focused, SEO-optimized {service.name.toLowerCase()} tailored to the {industry.name.toLowerCase()} sector in {city.name}.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Executive Summary</h2>
          <p>
            We specialize in {service.name.toLowerCase()} for {industry.name.toLowerCase()} organizations in {city.fullName}. Our approach aligns
            compliance, brand trust, and demand generation to drive measurable outcomes.
          </p>
        </div>
      </section>

      {/* Localized FAQs */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">FAQs – {service.name} in {city.name}</h2>
          <div className="space-y-4">
            {[
              {
                q: `How is ${service.name.toLowerCase()} different for ${industry.name.toLowerCase()} companies in ${city.name}?`,
                a: `We tailor UX, messaging, and local SEO to ${city.name} customers while addressing ${industry.name.toLowerCase()} specifics like regulations, product catalogs, and decision cycles.`
              },
              {
                q: 'How long does a project take?',
                a: 'Most engagements run 4–8 weeks depending on scope. We share a detailed timeline after discovery.'
              },
              {
                q: 'Will this help organic rankings?',
                a: 'Yes. We implement technical SEO, structured data, and content strategy aligned to local intent, improving visibility and conversions.'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 border">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Top Challenges in {industry.name}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Competitive search landscape in {city.name} with national players</li>
              <li>Regulatory and compliance considerations</li>
              <li>Complex buyer journeys and long sales cycles</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Opportunities in {city.name}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Local SEO and geo-intent capture</li>
              <li>Thought leadership and content authority</li>
              <li>Conversion optimization on high-intent pages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How Our {service.name} Addresses {industry.name} Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Technical SEO and structured data for complex products',
              'Compliance-friendly content workflows',
              'Lead gen funnels tailored to industry personas',
              'Performance and Core Web Vitals optimization',
              'Analytics, attribution, and ROI reporting',
              'Content system built for topical authority'
            ].map((item, i) => (
              <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Results for {industry.name} in {city.name}</h2>
          <p className="mb-6 text-gray-700">300%+ organic traffic growth and 2x conversion rates within 6 months.</p>
          <Button className="bg-primary-600 hover:bg-primary-700">View Case Studies</Button>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free {service.name} Plan for {industry.name} in {city.name}</h2>
          <p className="text-lg text-gray-700 mb-6">We’ll outline quick wins, growth roadmap, and projected ROI.</p>
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700">Get My Plan</Button>
        </div>
      </section>
    </div>
  )
}


