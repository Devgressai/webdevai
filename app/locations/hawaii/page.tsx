import type { Metadata } from 'next'
import HawaiiClient from './HawaiiClient'

export const metadata: Metadata = {
  title: 'Hawaii Web Development & SEO | WebVello',
  description: 'WebVello provides web development, SEO, and growth services across Hawaii.',
}

export default function HawaiiPage() {
  return <HawaiiClient />
}
