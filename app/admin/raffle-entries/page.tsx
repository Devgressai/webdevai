'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, ExternalLink, Loader2 } from 'lucide-react'

interface RaffleEntry {
  _id: string
  firstName: string
  email: string
  phone: string
  hasCurrentSite: boolean
  siteName?: string
  websiteUrl?: string
  consent: boolean
  ipAddress?: string
  submittedAt: string
  status: 'new' | 'contacted' | 'winner' | 'not-selected'
  notes?: string
}

export default function RaffleEntriesAdmin() {
  const [entries, setEntries] = useState<RaffleEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/raffle/entries')
      if (!response.ok) throw new Error('Failed to fetch entries')
      const data = await response.json()
      setEntries(data.entries || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching entries:', err)
      setError('Failed to load entries')
    } finally {
      setLoading(false)
    }
  }

  const exportCSV = async () => {
    try {
      const response = await fetch('/api/raffle/export?format=csv')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `raffle-entries-${new Date().toISOString().split('T')[0]}.csv`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error('Error exporting CSV:', err)
      alert('Failed to export CSV')
    }
  }

  const exportJSON = async () => {
    try {
      const response = await fetch('/api/raffle/export?format=json')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `raffle-entries-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error('Error exporting JSON:', err)
      alert('Failed to export JSON')
    }
  }

  const filteredEntries = entries.filter(entry => {
    if (filter === 'all') return true
    return entry.status === filter
  })

  const stats = {
    total: entries.length,
    new: entries.filter(e => e.status === 'new').length,
    contacted: entries.filter(e => e.status === 'contacted').length,
    winner: entries.filter(e => e.status === 'winner').length,
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-600" />
          <p className="text-gray-600">Loading raffle entries...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🎉 Raffle Entries</h1>
          <p className="text-gray-600">Manage and export all raffle entries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Entries</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
            <div className="text-sm text-gray-600">New</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-green-600">{stats.winner}</div>
            <div className="text-sm text-gray-600">Winner</div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow mb-8 p-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'default' : 'outline'}>
                All ({stats.total})
              </Button>
              <Button onClick={() => setFilter('new')} variant={filter === 'new' ? 'default' : 'outline'}>
                New ({stats.new})
              </Button>
              <Button onClick={() => setFilter('contacted')} variant={filter === 'contacted' ? 'default' : 'outline'}>
                Contacted ({stats.contacted})
              </Button>
              <Button onClick={() => setFilter('winner')} variant={filter === 'winner' ? 'default' : 'outline'}>
                Winner ({stats.winner})
              </Button>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportCSV} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button onClick={exportJSON} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
              <Button onClick={fetchEntries} variant="outline">
                Refresh
              </Button>
              <Button asChild>
                <a href="/studio/structure/raffleEntry" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in Sanity Studio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Entries Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Website
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No entries found
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((entry) => (
                    <tr key={entry._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{entry.firstName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{entry.email}</div>
                        <div className="text-sm text-gray-500">{entry.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        {entry.hasCurrentSite ? (
                          <div>
                            <div className="text-sm text-gray-900">{entry.siteName}</div>
                            {entry.websiteUrl && (
                              <a
                                href={entry.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-800"
                              >
                                {entry.websiteUrl}
                              </a>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">No website</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            entry.status === 'winner'
                              ? 'bg-green-100 text-green-800'
                              : entry.status === 'contacted'
                              ? 'bg-yellow-100 text-yellow-800'
                              : entry.status === 'new'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(entry.submittedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            All entries are stored in Sanity CMS. You can edit statuses and add notes directly in the{' '}
            <a href="/studio/structure/raffleEntry" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Sanity Studio
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

