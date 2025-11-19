import fs from 'fs'
import path from 'path'

export type LeadType = 'raffle' | 'contact'

export interface RaffleEntry {
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

export interface ContactLead {
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

export type Lead = RaffleEntry | ContactLead

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'leads.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Read all leads
export function getAllLeads(): Lead[] {
  ensureDataDir()
  
  if (!fs.existsSync(LEADS_FILE)) {
    return []
  }
  
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading leads:', error)
    return []
  }
}

// Get leads by type
export function getLeadsByType(type: LeadType): Lead[] {
  return getAllLeads().filter(lead => lead.type === type)
}

// Save a raffle entry
export function saveRaffleEntry(entry: Omit<RaffleEntry, 'id' | 'type' | 'submittedAt'>): RaffleEntry {
  try {
    ensureDataDir()
  } catch (error) {
    console.error('Error creating data directory:', error)
    throw new Error('Failed to create data directory. Please check file permissions.')
  }
  
  let leads: Lead[]
  try {
    leads = getAllLeads()
  } catch (error) {
    console.error('Error reading existing leads:', error)
    leads = [] // Start with empty array if read fails
  }
  
  const newEntry: RaffleEntry = {
    ...entry,
    type: 'raffle',
    id: `raffle-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    submittedAt: new Date().toISOString(),
  }
  
  leads.push(newEntry)
  
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
  } catch (error: any) {
    console.error('Error saving raffle entry to file:', error)
    const errorMessage = error.code === 'EACCES' 
      ? 'Permission denied. Please check file permissions.'
      : error.code === 'ENOSPC'
      ? 'No space left on device.'
      : `Failed to save entry: ${error.message || 'Unknown error'}`
    throw new Error(errorMessage)
  }
  
  return newEntry
}

// Save a contact lead
export function saveContactLead(lead: Omit<ContactLead, 'id' | 'type' | 'submittedAt'>): ContactLead {
  ensureDataDir()
  
  const leads = getAllLeads()
  const newLead: ContactLead = {
    ...lead,
    type: 'contact',
    id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    submittedAt: new Date().toISOString(),
  }
  
  leads.push(newLead)
  
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
  } catch (error) {
    console.error('Error saving contact lead:', error)
    throw new Error('Failed to save lead')
  }
  
  return newLead
}

// Delete a lead by ID
export function deleteLead(id: string): boolean {
  const leads = getAllLeads()
  const filtered = leads.filter(lead => lead.id !== id)
  
  if (filtered.length === leads.length) {
    return false // Lead not found
  }
  
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(filtered, null, 2))
    return true
  } catch (error) {
    console.error('Error deleting lead:', error)
    return false
  }
}

// Get lead count
export function getLeadCount(): number {
  return getAllLeads().length
}

// Get lead count by type
export function getLeadCountByType(type: LeadType): number {
  return getLeadsByType(type).length
}

// Export leads as CSV
export function exportAsCSV(type?: LeadType): string {
  const leads = type ? getLeadsByType(type) : getAllLeads()
  
  if (leads.length === 0) {
    return 'No leads found'
  }
  
  // Common headers
  const headers = ['ID', 'Type', 'Name', 'Email', 'Phone', 'Submitted At']
  
  // Add type-specific headers
  const raffleHeaders = ['Has Website', 'Site Name', 'Website URL', 'Consent']
  const contactHeaders = ['Company', 'Service', 'Budget', 'Urgency', 'Message']
  
  // Build CSV rows
  const rows = leads.map(lead => {
    const baseRow = [
      lead.id,
      lead.type,
      lead.type === 'raffle' ? lead.firstName : lead.name,
      lead.email,
      lead.type === 'raffle' ? lead.phone : (lead.phone || ''),
      lead.submittedAt,
    ]
    
    if (lead.type === 'raffle') {
      return [
        ...baseRow,
        lead.hasCurrentSite ? 'Yes' : 'No',
        lead.siteName || '',
        lead.websiteUrl || '',
        lead.consent ? 'Yes' : 'No',
      ]
    } else {
      return [
        ...baseRow,
        lead.company || '',
        lead.service || '',
        lead.budget || '',
        lead.urgency || '',
        (lead.message || '').replace(/"/g, '""').replace(/\n/g, ' '),
      ]
    }
  })
  
  // Determine headers based on type
  let finalHeaders = headers
  if (!type) {
    // Mixed export - use all headers
    finalHeaders = [...headers, ...raffleHeaders, ...contactHeaders]
  } else if (type === 'raffle') {
    finalHeaders = [...headers, ...raffleHeaders]
  } else {
    finalHeaders = [...headers, ...contactHeaders]
  }
  
  const csv = [finalHeaders, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  
  return csv
}

// Get leads as JSON string
export function exportAsJSON(type?: LeadType): string {
  const leads = type ? getLeadsByType(type) : getAllLeads()
  return JSON.stringify(leads, null, 2)
}

