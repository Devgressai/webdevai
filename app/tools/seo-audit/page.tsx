import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Free SEO Audit Tool | Website SEO Analysis & Optimization',
  description: 'Get a free comprehensive SEO audit of your website. Analyze technical SEO, performance, content, and get actionable recommendations to improve your search rankings.',
  alternates: {
    canonical: 'https://www.webvello.com/tools/seo-audit',
  },
}

// Redirect /tools/seo-audit to /seo-audit (existing page)
export default function ToolsSEOAuditPage() {
  redirect('/seo-audit')
}
