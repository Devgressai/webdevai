import type { Metadata } from 'next'
import HawaiiClient from './HawaiiClient'
import { Breadcrumbs, generateLocationBreadcrumbs } from '../../../components/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'Hawaii Web Development & SEO | WebVello',
  description: 'WebVello provides web development, SEO, and growth services across Hawaii.',
}

export default function HawaiiPage() {
  const breadcrumbs = generateLocationBreadcrumbs(['hawaii'])
  
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <HawaiiClient />
    </>
  )
}
