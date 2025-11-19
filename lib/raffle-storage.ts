import fs from 'fs'
import path from 'path'

export interface RaffleEntry {
  id: string
  fullName: string
  email: string
  phone?: string
  businessName?: string
  websiteUrl?: string
  needs?: string
  budget?: string
  consent: boolean
  submittedAt: string
  ipAddress?: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const ENTRIES_FILE = path.join(DATA_DIR, 'raffle-entries.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Read all entries
export function getAllEntries(): RaffleEntry[] {
  ensureDataDir()
  
  if (!fs.existsSync(ENTRIES_FILE)) {
    return []
  }
  
  try {
    const data = fs.readFileSync(ENTRIES_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading raffle entries:', error)
    return []
  }
}

// Save a new entry
export function saveEntry(entry: Omit<RaffleEntry, 'id' | 'submittedAt'>): RaffleEntry {
  ensureDataDir()
  
  const entries = getAllEntries()
  const newEntry: RaffleEntry = {
    ...entry,
    id: `entry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    submittedAt: new Date().toISOString(),
  }
  
  entries.push(newEntry)
  
  try {
    fs.writeFileSync(ENTRIES_FILE, JSON.stringify(entries, null, 2))
  } catch (error) {
    console.error('Error saving raffle entry:', error)
    throw new Error('Failed to save entry')
  }
  
  return newEntry
}

// Delete an entry by ID
export function deleteEntry(id: string): boolean {
  const entries = getAllEntries()
  const filtered = entries.filter(entry => entry.id !== id)
  
  if (filtered.length === entries.length) {
    return false // Entry not found
  }
  
  try {
    fs.writeFileSync(ENTRIES_FILE, JSON.stringify(filtered, null, 2))
    return true
  } catch (error) {
    console.error('Error deleting raffle entry:', error)
    return false
  }
}

// Get entry count
export function getEntryCount(): number {
  return getAllEntries().length
}

// Export entries as CSV
export function exportAsCSV(): string {
  const entries = getAllEntries()
  
  if (entries.length === 0) {
    return 'No entries found'
  }
  
  const headers = [
    'ID',
    'Full Name',
    'Email',
    'Phone',
    'Business Name',
    'Website URL',
    'Needs',
    'Budget',
    'Consent',
    'Submitted At',
  ]
  
  const rows = entries.map(entry => [
    entry.id,
    entry.fullName,
    entry.email,
    entry.phone || '',
    entry.businessName || '',
    entry.websiteUrl || '',
    entry.needs || '',
    entry.budget || '',
    entry.consent ? 'Yes' : 'No',
    entry.submittedAt,
  ])
  
  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  
  return csv
}

// Get entries as JSON string
export function exportAsJSON(): string {
  return JSON.stringify(getAllEntries(), null, 2)
}

