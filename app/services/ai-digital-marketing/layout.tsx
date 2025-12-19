import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Digital Marketing Services | Intelligent Campaign Automation | Web Vello',
  description: "Automate, personalize, and optimize every marketing touchpoint with Web Vello's AI digital marketing team. Predictive analytics, AI content, and smart targeting powered by experts.",
  keywords: ['ai digital marketing', 'marketing automation agency', 'predictive marketing', 'ai-driven campaigns', 'web vello ai marketing'],
  alternates: {
    canonical: 'https://www.webvello.com/services/ai-digital-marketing',
  },
  openGraph: {
    title: 'AI Digital Marketing Services | Web Vello',
    description: 'Web Vello combines AI innovation with senior strategists to deliver multi-channel campaigns that continuously learn and scale.',
    url: 'https://www.webvello.com/services/ai-digital-marketing',
    type: 'website',
  }
}

export default function AIDigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}




