import fs from 'fs'
import path from 'path'

export type LeadType = 'contact' | 'growth_plan'

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

export interface GrowthPlanLead {
  id: string
  type: 'growth_plan'
  name: string
  email: string
  website: string
  phone?: string
  goal: string
  budget?: string
  consent?: boolean
  submittedAt: string
  ipAddress?: string
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
}

export type Lead = ContactLead | GrowthPlanLead

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
  
  // Headers
  const headers = ['ID', 'Type', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Urgency', 'Message', 'Submitted At']
  
  // Build CSV rows
  const rows = leads.map(lead => [
    lead.id,
    lead.type,
    lead.name,
    lead.email,
    lead.phone || '',
    lead.company || '',
    lead.service || '',
    lead.budget || '',
    lead.urgency || '',
    (lead.message || '').replace(/"/g, '""').replace(/\n/g, ' '),
    lead.submittedAt,
  ])
  
  const finalHeaders = headers
  
  const csv = [finalHeaders, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  
  return csv
}

// Save a growth plan lead
export function saveGrowthPlanLead(lead: Omit<GrowthPlanLead, 'id' | 'type' | 'submittedAt'>): GrowthPlanLead {
  ensureDataDir()
  
  const leads = getAllLeads()
  const newLead: GrowthPlanLead = {
    ...lead,
    type: 'growth_plan',
    id: `growth-plan-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    submittedAt: new Date().toISOString(),
  }
  
  leads.push(newLead)
  
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
  } catch (error) {
    console.error('Error saving growth plan lead:', error)
    throw new Error('Failed to save lead')
  }
  
  return newLead
}

// Get leads as JSON string
export function exportAsJSON(type?: LeadType): string {
  const leads = type ? getLeadsByType(type) : getAllLeads()
  return JSON.stringify(leads, null, 2)
}

