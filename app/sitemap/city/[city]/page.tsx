import Link from 'next/link'
import { citySlugs } from '@/lib/cities'
import { industrySlugs } from '@/lib/industries'

export async function generateStaticParams() {
  return citySlugs.map((city) => ({ city }))
}

export const dynamicParams = false

export default function CitySitemap({ params }: { params: { city: string } }) {
  const { city } = params
  const services = ['web-development', 'seo', 'website-design']

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Sitemap – {city}</h1>
      <ul className="space-y-2">
        {industrySlugs.flatMap((industry) =>
          services.map((service) => (
            <li key={`${industry}-${service}`}>
              <Link className="text-primary-600 hover:underline" href={`/${city}/industry/${industry}/${service}`}>
                /{city}/industry/{industry}/{service}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}


