/**
 * Governance Disclaimer React Component
 * 
 * Renders governance disclaimer block with data sources, methodology, limitations, etc.
 * XSS-safe rendering with proper escaping.
 */

import React from 'react'
import { GovernanceDisclaimer } from '../disclaimer'
import { escapeHtml, normalizeDisclaimerText } from '../content-integrity'
import { checkStaleness } from '../disclaimer'

interface GovernanceDisclaimerProps {
  disclaimer: GovernanceDisclaimer
  variant?: 'short' | 'standard' | 'comprehensive'
  className?: string
}

/**
 * Governance Disclaimer Component
 * Renders disclaimer block based on variant
 */
export function GovernanceDisclaimerComponent({
  disclaimer,
  variant = 'standard',
  className = ''
}: GovernanceDisclaimerProps) {
  const staleness = checkStaleness(disclaimer.lastUpdated)
  const lastUpdatedDate = new Date(disclaimer.lastUpdated)
  const lastUpdatedFormatted = lastUpdatedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Determine staleness indicator
  const stalenessIndicator = staleness.staleLevel === 'current' ? '●' : 
                            staleness.staleLevel === 'warning' ? '⚠' : '❌'
  const stalenessColor = staleness.staleLevel === 'current' ? 'green' : 
                         staleness.staleLevel === 'warning' ? 'orange' : 'red'
  
  // Short variant (low-risk pages)
  if (variant === 'short') {
    const sourcesText = disclaimer.sources.length > 0
      ? disclaimer.sources.map(s => escapeHtml(s.name)).join(', ')
      : 'Internal data'
    
    return (
      <div className={`governance-disclaimer short ${className}`}>
        <p className="text-sm text-gray-600">
          <strong>Data Sources:</strong> {sourcesText}.{' '}
          <strong>Last updated:</strong> {lastUpdatedFormatted}.{' '}
          Results may vary based on individual circumstances.
        </p>
      </div>
    )
  }
  
  // Standard variant (medium-risk pages)
  if (variant === 'standard') {
    return (
      <div className={`governance-disclaimer standard ${className}`}>
        <h3 className="text-lg font-semibold mb-4">Data Sources & Methodology</h3>
        
        {disclaimer.sources.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold mb-2">Data Sources:</p>
            <ul className="list-disc list-inside space-y-1">
              {disclaimer.sources.map((source, index) => (
                <li key={index} className="text-sm">
                  {escapeHtml(source.name)}
                  {source.url && (
                    <>
                      {' - '}
                      <a
                        href={escapeHtml(source.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {escapeHtml(source.url)}
                      </a>
                    </>
                  )}
                  {source.access_date && (
                    <> (accessed {new Date(source.access_date).toLocaleDateString()})</>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="mb-4">
          <strong>Last updated:</strong> {lastUpdatedFormatted}{' '}
          <span style={{ color: stalenessColor }}>{stalenessIndicator}</span>
        </p>
        
        {disclaimer.methodologySummary && (
          <div className="mb-4">
            <p className="font-semibold mb-2">Methodology:</p>
            <p className="text-sm">
              {normalizeDisclaimerText(disclaimer.methodologySummary)}
              {disclaimer.methodologyUrl && (
                <>
                  {' '}
                  <a
                    href={escapeHtml(disclaimer.methodologyUrl)}
                    className="text-blue-600 hover:underline"
                  >
                    View full methodology
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        )}
        
        {disclaimer.limitations.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold mb-2">Limitations:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {disclaimer.limitations.map((limitation, index) => (
                <li key={index}>{normalizeDisclaimerText(limitation)}</li>
              ))}
            </ul>
          </div>
        )}
        
        <p className="text-sm font-semibold text-gray-700">
          <strong>No Guarantee:</strong> Results are not guaranteed and may vary based on individual circumstances.
        </p>
      </div>
    )
  }
  
  // Comprehensive variant (high-risk pages)
  return (
    <div className={`governance-disclaimer comprehensive ${className}`}>
      <h3 className="text-xl font-bold mb-6">Data Sources & Methodology</h3>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">Data Sources</h4>
        <ol className="list-decimal list-inside space-y-2">
          {disclaimer.sources.map((source, index) => (
            <li key={index} className="text-sm">
              <strong>{escapeHtml(source.name)}</strong>
              {source.url && (
                <>
                  {' - '}
                  <a
                    href={escapeHtml(source.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {escapeHtml(source.url)}
                  </a>
                </>
              )}
              {source.type && (
                <> ({escapeHtml(source.type.replace('_', ' '))})</>
              )}
              {source.access_date && (
                <> (accessed {new Date(source.access_date).toLocaleDateString()})</>
              )}
            </li>
          ))}
        </ol>
      </div>
      
      <div className="mb-6">
        <p className="font-semibold mb-2">Last updated:</p>
        <p className="text-sm">
          {lastUpdatedFormatted}{' '}
          <span style={{ color: stalenessColor }}>{stalenessIndicator}</span>
          {' '}
          <span className="text-gray-500">
            ({staleness.daysSinceUpdate} days ago)
          </span>
        </p>
      </div>
      
      {disclaimer.methodologySummary && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Methodology</h4>
          <p className="text-sm leading-relaxed">
            {normalizeDisclaimerText(disclaimer.methodologySummary)}
          </p>
          {disclaimer.methodologyUrl && (
            <p className="mt-2">
              <a
                href={escapeHtml(disclaimer.methodologyUrl)}
                className="text-blue-600 hover:underline"
              >
                View full methodology
              </a>
            </p>
          )}
        </div>
      )}
      
      {disclaimer.limitations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Limitations & Disclaimer</h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {disclaimer.limitations.map((limitation, index) => (
              <li key={index} className="leading-relaxed">
                {normalizeDisclaimerText(limitation)}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold text-yellow-900 mb-2">No Guarantee</p>
        <p className="text-sm text-yellow-800">
          Results are not guaranteed and may vary based on individual circumstances. 
          Past performance does not guarantee future results.
        </p>
      </div>
      
      {disclaimer.complianceRefs && disclaimer.complianceRefs.length > 0 && (
        <div className="text-sm text-gray-600">
          <p className="font-semibold mb-2">Compliance & Ethics</p>
          <p>
            For information about our data ethics and privacy practices, see{' '}
            {disclaimer.complianceRefs.map((ref, index) => (
              <React.Fragment key={index}>
                {index > 0 && ', '}
                <a
                  href={`/trust/${ref}`}
                  className="text-blue-600 hover:underline"
                >
                  {escapeHtml(ref.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}
                </a>
              </React.Fragment>
            ))}
            .
          </p>
        </div>
      )}
    </div>
  )
}
