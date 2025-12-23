import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProofStripProps {
  /** Anchor ID for the results section */
  resultsAnchor?: string
  /** Link text for viewing success stories */
  linkText?: string
}

export function ProofStrip({
  resultsAnchor = '#results',
  linkText = 'View Success Stories',
}: ProofStripProps) {
  return (
    <section className="bg-white border-b border-gray-100 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Proof Points */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 flex-1">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                500%
              </div>
              <div className="text-xs sm:text-sm text-secondary-600">
                Increase in Featured Snippets
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                73%
              </div>
              <div className="text-xs sm:text-sm text-secondary-600">
                AI Response Appearance Rate
              </div>
            </div>
            
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">
                400%
              </div>
              <div className="text-xs sm:text-sm text-secondary-600">
                AI Recommendation Rate
              </div>
            </div>
          </div>

          {/* Link and Disclaimer */}
          <div className="flex flex-col items-center sm:items-end gap-2 sm:gap-1.5">
            <Link
              href={resultsAnchor}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1 group"
            >
              {linkText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-xs text-secondary-500 text-center sm:text-right">
              Representative results; some details anonymized due to NDAs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

