import { client } from './sanity.client'

export interface CisDoc {
  _id: string
  title: string
  metaTitle?: string
  metaDescription?: string
  hero?: string
  content?: any[]
  faqs?: { question: string; answer: string }[]
  service: string
  city?: { slug: { current: string }; name: string; fullName?: string }
  industry?: { slug: { current: string }; name: string }
  status?: string
}

export async function fetchCisDoc(citySlug: string, industrySlug: string, service: string): Promise<CisDoc | null> {
  const query = `*[_type == "cisPage" && service == $service && references(*[_type=="city" && slug.current==$city].[_id][0]) && references(*[_type=="industry" && slug.current==$industry].[_id][0])] | order(_updatedAt desc)[0]{
    _id, title, metaTitle, metaDescription, hero, content, faqs, service,
    "city": city->{name, fullName, slug},
    "industry": industry->{name, slug},
    status
  }`
  const params = { city: citySlug, industry: industrySlug, service }
  const doc = await client.fetch<CisDoc | null>(query, params)
  return doc || null
}


