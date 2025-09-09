/*
  Seeding script: creates the first N City×Industry×Service pages as draft docs in Sanity.
  Usage: ts-node scripts/seed-cis-pages.ts or add an npm script.
*/

import 'dotenv/config'
import { createClient } from '@sanity/client'
import { citySlugs, getCity } from '../lib/cities'
import { industrySlugs, getIndustry } from '../lib/industries'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const allowedServices = ['web-development', 'seo', 'website-design'] as const

function makeTitle(cityName: string, industryName: string, serviceName: string) {
  const serviceTitle = serviceName === 'seo' ? 'SEO Services' : serviceName === 'web-development' ? 'Web Development' : 'Website Design'
  return `${serviceTitle} in ${cityName} for ${industryName} Companies`
}

async function run(limit = 200) {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Missing SANITY_API_TOKEN in env; seeding requires a write token.')
    process.exit(1)
  }

  const docs: any[] = []
  outer: for (const city of citySlugs) {
    const c = getCity(city)
    if (!c) continue
    for (const industry of industrySlugs) {
      const i = getIndustry(industry)
      if (!i) continue
      for (const service of allowedServices) {
        const title = makeTitle(c.fullName || c.name, i.name, service)
        docs.push({
          _type: 'cisPage',
          title,
          service,
          status: 'draft',
          // References will be set post-creation via transactions for simplicity
          cityRefSlug: city,
          industryRefSlug: industry,
        })
        if (docs.length >= limit) break outer
      }
    }
  }

  // Create docs
  const tx = client.transaction()
  for (const doc of docs) {
    tx.createIfNotExists({ _type: 'cisPage', ...doc })
  }
  const created = await tx.commit()

  console.log(`Seeded ${created?.results?.length || 0} cisPage drafts.`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})


