'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Trash2, Download, LogOut, RefreshCw, CheckSquare, Square } from 'lucide-react'

type LeadType = 'contact'

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

type Lead = ContactLead

export default function AdminDashboard() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [filterType, setFilterType] = useState<LeadType>('contact')
  const [isLoading, setIsLoading] = useState(true)
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState('')
  const [stats, setStats] = useState({ total: 0, contact: 0 })
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [isDeleting, setIsDeleting] = useState(false)

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

  const loadLeads = async () => {
    setIsLoading(true)
    setError('')

    try {
      // Load contact leads from the contact API
      const response = await fetch('/api/contact/leads')
      
      if (!response.ok) {
        if (response.status === 401) {
          router.push('/admin/login')
          return
        }
        setError('Failed to load leads')
        return
      }

      const leads = await response.json()
      setLeads(leads || [])
      setStats({
        total: leads?.length || 0,
        contact: leads?.length || 0,
      })
    } catch (error) {
      setError('Failed to load leads. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Filter removed - only showing contact leads now

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) {
      return
    }

    try {
      const response = await fetch(`/api/contact/leads?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        if (response.status === 401) {
          router.push('/admin/login')
        } else {
          alert('Failed to delete lead')
        }
        return
      }

      setLeads(leads.filter(lead => lead.id !== id))
      setSelectedIds(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
      loadLeads() // Reload to update stats
    } catch (error) {
      alert('Failed to delete lead. Please try again.')
    }
  }

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return

    const count = selectedIds.size
    if (!confirm(`Are you sure you want to delete ${count} ${count === 1 ? 'entry' : 'entries'}? This action cannot be undone.`)) {
      return
    }

    setIsDeleting(true)
    setError('')

    try {
      const deletePromises = Array.from(selectedIds).map(id =>
        fetch(`/api/contact/leads?id=${id}`, { method: 'DELETE' })
      )

      const results = await Promise.all(deletePromises)
      const failed = results.filter(r => !r.ok)

      if (failed.length > 0) {
        setError(`Failed to delete ${failed.length} ${failed.length === 1 ? 'entry' : 'entries'}`)
      } else {
        setSelectedIds(new Set())
        await loadLeads() // Reload to update stats
      }
    } catch (error) {
      setError('Failed to delete entries. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleSelectAll = () => {
    if (selectedIds.size === filteredLeads.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(filteredLeads.map(lead => lead.id)))
    }
  }

  const handleToggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const handleExport = async (format: 'csv' | 'json') => {
    setIsExporting(true)

    try {
      const response = await fetch(`/api/contact/export?format=${format}`)
      
      if (response.status === 401) {
        router.push('/admin/login')
        return
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `contact-leads-${new Date().toISOString().split('T')[0]}.${format}`
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

  const filteredLeads = leads

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
                Manage contact form leads
              </p>
            </div>
            <div className="flex items-center gap-3">
              {selectedIds.size > 0 && (
                <Button
                  onClick={handleBulkDelete}
                  variant="outline"
                  size="sm"
                  disabled={isDeleting}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Selected ({selectedIds.size})
                </Button>
              )}
              <Button
                onClick={() => loadLeads()}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button
                onClick={() => handleExport('csv')}
                variant="outline"
                size="sm"
                disabled={isExporting || filteredLeads.length === 0}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
              <Button
                onClick={() => handleExport('json')}
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
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">{stats.contact}</div>
              <div className="text-sm text-secondary-600">Contact Leads</div>
            </div>
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
              No contact leads yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Select All Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
              <button
                onClick={handleSelectAll}
                className="flex items-center gap-2 text-sm font-medium text-secondary-700 hover:text-secondary-900"
              >
                {selectedIds.size === filteredLeads.length ? (
                  <CheckSquare className="w-5 h-5 text-primary-600" />
                ) : (
                  <Square className="w-5 h-5 text-secondary-400" />
                )}
                <span>
                  {selectedIds.size === filteredLeads.length
                    ? 'Deselect All'
                    : `Select All (${filteredLeads.length} ${filteredLeads.length === 1 ? 'entry' : 'entries'})`}
                </span>
              </button>
              {selectedIds.size > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-secondary-600">
                    {selectedIds.size} {selectedIds.size === 1 ? 'entry' : 'entries'} selected
                  </span>
                  <Button
                    onClick={handleBulkDelete}
                    variant="outline"
                    size="sm"
                    disabled={isDeleting}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Selected
                  </Button>
                </div>
              )}
            </div>

            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className={`bg-white rounded-xl shadow-sm border p-6 ${
                  selectedIds.has(lead.id) ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <button
                      onClick={() => handleToggleSelect(lead.id)}
                      className="mt-1"
                    >
                      {selectedIds.has(lead.id) ? (
                        <CheckSquare className="w-5 h-5 text-primary-600" />
                      ) : (
                        <Square className="w-5 h-5 text-secondary-400 hover:text-secondary-600" />
                      )}
                    </button>
                    <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {lead.name}
                      </h3>
                      <span className="text-sm text-secondary-500">
                        {lead.email}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">
                        Contact
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {lead.phone && (
                        <div>
                          <span className="font-medium text-secondary-700">Phone:</span>{' '}
                          <span className="text-secondary-600">{lead.phone}</span>
                        </div>
                      )}
                      {lead.company && (
                        <div>
                          <span className="font-medium text-secondary-700">Company:</span>{' '}
                          <span className="text-secondary-600">{lead.company}</span>
                        </div>
                      )}
                      {lead.service && (
                        <div>
                          <span className="font-medium text-secondary-700">Service:</span>{' '}
                          <span className="text-secondary-600">{lead.service}</span>
                        </div>
                      )}
                      {lead.budget && (
                        <div>
                          <span className="font-medium text-secondary-700">Budget:</span>{' '}
                          <span className="text-secondary-600">{lead.budget}</span>
                        </div>
                      )}
                      {lead.urgency && (
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

                    {lead.message && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm">
                          <span className="font-medium text-secondary-700">Message:</span>{' '}
                          <span className="text-secondary-600 whitespace-pre-wrap">{lead.message}</span>
                        </p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center gap-4 text-xs text-secondary-500">
                      <span>ID: {lead.id}</span>
                    </div>
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
