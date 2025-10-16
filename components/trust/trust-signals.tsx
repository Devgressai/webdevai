'use client'

import { useState, useEffect } from 'react'

interface TrustSignal {
  id: string
  type: 'statistic' | 'achievement' | 'certification' | 'award'
  title: string
  value: string
  description: string
  icon: string
  verified: boolean
}

interface SecurityFeature {
  id: string
  name: string
  description: string
  icon: string
  status: 'active' | 'pending' | 'inactive'
}

// Trust Statistics Component
export function TrustStatistics() {
  const [statistics, setStatistics] = useState<TrustSignal[]>([])

  useEffect(() => {
    const mockStats: TrustSignal[] = [
      {
        id: '1',
        type: 'statistic',
        title: 'Projects Completed',
        value: '500+',
        description: 'Successful SEO projects delivered',
        icon: 'projects',
        verified: true
      },
      {
        id: '2',
        type: 'statistic',
        title: 'Client Satisfaction',
        value: '98%',
        description: 'Client satisfaction rate',
        icon: 'satisfaction',
        verified: true
      },
      {
        id: '3',
        type: 'statistic',
        title: 'Years Experience',
        value: '8+',
        description: 'Years in SEO industry',
        icon: 'experience',
        verified: true
      },
      {
        id: '4',
        type: 'statistic',
        title: 'Team Members',
        value: '25+',
        description: 'Expert SEO professionals',
        icon: 'team',
        verified: true
      },
      {
        id: '5',
        type: 'achievement',
        title: 'Google Partner',
        value: 'Certified',
        description: 'Google Partner certification',
        icon: 'google-partner',
        verified: true
      },
      {
        id: '6',
        type: 'achievement',
        title: 'BBB Rating',
        value: 'A+',
        description: 'Better Business Bureau rating',
        icon: 'bbb',
        verified: true
      }
    ]
    setStatistics(mockStats)
  }, [])

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'projects':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      case 'satisfaction':
        return (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'experience':
        return (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'team':
        return (
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case 'google-partner':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          </svg>
        )
      case 'bbb':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        )
      default:
        return <div className="w-8 h-8 bg-gray-400 rounded"></div>
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Trust Web Vello?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex justify-center mb-4">
              {getIcon(stat.icon)}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{stat.description}</p>
            {stat.verified && (
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-green-600 font-medium">Verified</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Security Features Component
export function SecurityFeatures() {
  const [features, setFeatures] = useState<SecurityFeature[]>([])

  useEffect(() => {
    const mockFeatures: SecurityFeature[] = [
      {
        id: '1',
        name: 'SSL Encryption',
        description: '256-bit SSL encryption for all data transmission',
        icon: 'ssl',
        status: 'active'
      },
      {
        id: '2',
        name: 'GDPR Compliance',
        description: 'Full GDPR compliance for data protection',
        icon: 'gdpr',
        status: 'active'
      },
      {
        id: '3',
        name: 'Data Backup',
        description: 'Daily automated backups of all client data',
        icon: 'backup',
        status: 'active'
      },
      {
        id: '4',
        name: 'Secure Servers',
        description: 'Enterprise-grade secure hosting infrastructure',
        icon: 'servers',
        status: 'active'
      },
      {
        id: '5',
        name: 'Privacy Policy',
        description: 'Comprehensive privacy policy and data handling',
        icon: 'privacy',
        status: 'active'
      },
      {
        id: '6',
        name: 'Two-Factor Auth',
        description: 'Two-factor authentication for all accounts',
        icon: '2fa',
        status: 'active'
      }
    ]
    setFeatures(mockFeatures)
  }, [])

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ssl':
        return (
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case 'gdpr':
        return (
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 'backup':
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        )
      case 'servers':
        return (
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        )
      case 'privacy':
        return (
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case '2fa':
        return (
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      default:
        return <div className="w-6 h-6 bg-gray-400 rounded"></div>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100'
      case 'inactive':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Security & Privacy</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {getIcon(feature.icon)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Money Back Guarantee Component
export function MoneyBackGuarantee() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">30-Day Money Back Guarantee</h3>
        <p className="text-lg mb-6 opacity-90">
          Not satisfied with our SEO services? Get your money back within 30 days, no questions asked.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Money Back</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">30</div>
            <div className="text-sm opacity-90">Days Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">0</div>
            <div className="text-sm opacity-90">Questions Asked</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Live Chat Support Component
export function LiveChatSupport() {
  const [isOnline, setIsOnline] = useState(true)
  const [responseTime, setResponseTime] = useState('2 min')

  useEffect(() => {
    // Simulate online status
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1) // 90% chance of being online
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Live Chat Support</h3>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        
        <p className="text-gray-600 mb-4">
          {isOnline 
            ? `Get instant help from our SEO experts. Average response time: ${responseTime}`
            : 'Our team is currently offline. Leave a message and we\'ll get back to you soon.'
          }
        </p>
        
        <button
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            isOnline
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isOnline}
        >
          {isOnline ? 'Start Chat' : 'Leave Message'}
        </button>
      </div>
    </div>
  )
}
