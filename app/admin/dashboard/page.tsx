'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Trash2, Download, LogOut, RefreshCw } from 'lucide-react'

type LeadType = 'all' | 'raffle' | 'contact'

interface RaffleEntry {
  id: string
  type: 'raffle'
  firstName: string
  email: string
  phone: string
  hasCurrentSite: boolean
  siteName?: string
  websiteUrl?: string
  consent: boolean
  submittedAt: string
  ipAddress?: string
}

interface ContactLead {
  id: string
  type: 'contact'
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  urgency?: string
  message?: string
  submittedAt: string
  ipAddress?: string
}

type Lead = RaffleEntry | ContactLead

export default function AdminDashboard() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [filterType, setFilterType] = useState<LeadType>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState({ total: 0, raffle: 0, contact: 0 })

  useEffect(() => {
    checkAuthAndLoadLeads()
  }, [])

  const checkAuthAndLoadLeads = async () => {
    try {
      const authCheck = await fetch('/api/auth/check')
      const authData = await authCheck.json()

      if (!authData.authenticated) {
        router.push('/admin/login')
        return
      }

      await loadLeads()
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/admin/login')
    }
  }

  const loadLeads = async (type?: LeadType) => {
    setIsLoading(true)
    setError('')

    try {
      const url = type && type !== 'all' 
        ? `/api/raffle/entries?type=${type}`
        : '/api/raffle/entries'
      
      const response = await fetch(url)
      const result = await response.json()

      if (result.success) {
        setLeads(result.leads || [])
        
        // Load stats
        const allResponse = await fetch('/api/raffle/entries')
        const allResult = await allResponse.json()
        if (allResult.success) {
          const allLeads = allResult.leads || []
          setStats({
            total: allLeads.length,
            raffle: allLeads.filter((l: Lead) => l.type === 'raffle').length,
            contact: allLeads.filter((l: Lead) => l.type === 'contact').length,
          })
        }
      } else {
        if (response.status === 401) {
          router.push('/admin/login')
        } else {
          setError('Failed to load leads')
        }
      }
    } catch (error) {
      setError('Failed to load leads. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilterChange = (type: LeadType) => {
    setFilterType(type)
    loadLeads(type)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) {
      return
    }

    try {
      const response = await fetch(`/api/raffle/entries?id=${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        setLeads(leads.filter(lead => lead.id !== id))
        loadLeads(filterType) // Reload to update stats
      } else {
        if (response.status === 401) {
          router.push('/admin/login')
        } else {
          alert('Failed to delete lead')
        }
      }
    } catch (error) {
      alert('Failed to delete lead. Please try again.')
    }
  }

  const handleExport = async (format: 'csv' | 'json', type?: LeadType) => {
    setIsExporting(true)

    try {
      const typeParam = type && type !== 'all' ? `&type=${type}` : ''
      const response = await fetch(`/api/raffle/export?format=${format}${typeParam}`)
      
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      const typeLabel = type && type !== 'all' ? type : 'all-leads'
      a.download = `${typeLabel}-${new Date().toISOString().split('T')[0]}.${format}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      alert('Failed to export leads. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const filteredLeads = filterType === 'all' 
    ? leads 
    : leads.filter(lead => lead.type === filterType)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600">Loading leads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">
                Leads Dashboard
              </h1>
              <p className="text-sm text-secondary-600 mt-1">
                Manage raffle entries and contact form leads
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => loadLeads(filterType)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button
                onClick={() => handleExport('csv', filterType)}
                variant="outline"
                size="sm"
                disabled={isExporting || filteredLeads.length === 0}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
              <Button
                onClick={() => handleExport('json', filterType)}
                variant="outline"
                size="sm"
                disabled={isExporting || filteredLeads.length === 0}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export JSON
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-secondary-900">{stats.total}</div>
              <div className="text-sm text-secondary-600">Total Leads</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary-600">{stats.raffle}</div>
              <div className="text-sm text-secondary-600">Raffle Entries</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">{stats.contact}</div>
              <div className="text-sm text-secondary-600">Contact Leads</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 border-b border-gray-200">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                filterType === 'all'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-secondary-600 hover:text-secondary-900'
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => handleFilterChange('raffle')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                filterType === 'raffle'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Raffle ({stats.raffle})
            </button>
            <button
              onClick={() => handleFilterChange('contact')}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                filterType === 'contact'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-secondary-600 hover:text-secondary-900'
              }`}
            >
              Contact ({stats.contact})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {filteredLeads.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <p className="text-lg text-secondary-600">
              No {filterType === 'all' ? 'leads' : filterType === 'raffle' ? 'raffle entries' : 'contact leads'} yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {lead.type === 'raffle' ? lead.firstName : lead.name}
                      </h3>
                      <span className="text-sm text-secondary-500">
                        {lead.email}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        lead.type === 'raffle'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {lead.type === 'raffle' ? 'Raffle' : 'Contact'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {lead.phone && (
                        <div>
                          <span className="font-medium text-secondary-700">Phone:</span>{' '}
                          <span className="text-secondary-600">{lead.phone}</span>
                        </div>
                      )}
                      {lead.type === 'raffle' && (
                        <div>
                          <span className="font-medium text-secondary-700">Has Website:</span>{' '}
                          <span className="text-secondary-600">{lead.hasCurrentSite ? 'Yes' : 'No'}</span>
                        </div>
                      )}
                      {lead.type === 'raffle' && lead.siteName && (
                        <div>
                          <span className="font-medium text-secondary-700">Site Name:</span>{' '}
                          <span className="text-secondary-600">{lead.siteName}</span>
                        </div>
                      )}
                      {lead.type === 'raffle' && lead.websiteUrl && (
                        <div>
                          <span className="font-medium text-secondary-700">Website URL:</span>{' '}
                          <a
                            href={lead.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline"
                          >
                            {lead.websiteUrl}
                          </a>
                        </div>
                      )}
                      {lead.type === 'contact' && lead.company && (
                        <div>
                          <span className="font-medium text-secondary-700">Company:</span>{' '}
                          <span className="text-secondary-600">{lead.company}</span>
                        </div>
                      )}
                      {lead.type === 'contact' && lead.service && (
                        <div>
                          <span className="font-medium text-secondary-700">Service:</span>{' '}
                          <span className="text-secondary-600">{lead.service}</span>
                        </div>
                      )}
                      {lead.type === 'contact' && lead.budget && (
                        <div>
                          <span className="font-medium text-secondary-700">Budget:</span>{' '}
                          <span className="text-secondary-600">{lead.budget}</span>
                        </div>
                      )}
                      {lead.type === 'contact' && lead.urgency && (
                        <div>
                          <span className="font-medium text-secondary-700">Urgency:</span>{' '}
                          <span className="text-secondary-600">{lead.urgency}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-secondary-700">Submitted:</span>{' '}
                        <span className="text-secondary-600">{formatDate(lead.submittedAt)}</span>
                      </div>
                      {lead.ipAddress && (
                        <div>
                          <span className="font-medium text-secondary-700">IP:</span>{' '}
                          <span className="text-secondary-600 text-xs">{lead.ipAddress}</span>
                        </div>
                      )}
                    </div>


                    {lead.type === 'contact' && lead.message && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm">
                          <span className="font-medium text-secondary-700">Message:</span>{' '}
                          <span className="text-secondary-600 whitespace-pre-wrap">{lead.message}</span>
                        </p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center gap-4 text-xs text-secondary-500">
                      <span>ID: {lead.id}</span>
                      {lead.type === 'raffle' && (
                        <span>Consent: {lead.consent ? 'Yes' : 'No'}</span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleDelete(lead.id)}
                    variant="outline"
                    size="sm"
                    className="ml-4 text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
