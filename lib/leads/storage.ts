/**
 * Lead Storage
 * 
 * Stores leads to local JSON file in dev, or in-memory in production.
 * Provides interface for future HubSpot/Sanity integration.
 */

import fs from 'fs'
import path from 'path'
import type { StoredLead, LeadStorage } from './types'

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'leads.json')

// In-memory storage for production (when file system may not be available)
const inMemoryLeads: StoredLead[] = []

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    } catch (error) {
      console.warn('⚠️  Could not create data directory, using in-memory storage:', error)
    }
  }
}

/**
 * File-based storage (dev/local)
 */
class FileStorage implements LeadStorage {
  async save(lead: StoredLead): Promise<StoredLead> {
    ensureDataDir()
    
    let leads: StoredLead[] = []
    
    // Read existing leads
    if (fs.existsSync(LEADS_FILE)) {
      try {
        const data = fs.readFileSync(LEADS_FILE, 'utf-8')
        leads = JSON.parse(data)
      } catch (error) {
        console.error('Error reading leads file:', error)
        leads = []
      }
    }
    
    // Add new lead
    leads.push(lead)
    
    // Write back to file
    try {
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
    } catch (error) {
      console.error('Error writing leads file:', error)
      throw new Error('Failed to save lead to file')
    }
    
    return lead
  }
}

/**
 * In-memory storage (production fallback)
 */
class MemoryStorage implements LeadStorage {
  async save(lead: StoredLead): Promise<StoredLead> {
    inMemoryLeads.push(lead)
    
    // Log to console as backup
    console.log('💾 Lead stored in memory:', {
      id: lead.id,
      email: lead.email,
      name: lead.name,
      serviceInterest: lead.serviceInterest,
      submittedAt: lead.submittedAt
    })
    
    return lead
  }
}

/**
 * Get the active storage provider
 */
export function getStorageProvider(): LeadStorage {
  const useFileStorage = process.env.NODE_ENV === 'development' || process.env.USE_FILE_STORAGE === 'true'
  
  if (useFileStorage) {
    try {
      // Test if we can write to the data directory
      ensureDataDir()
      return new FileStorage()
    } catch (error) {
      console.warn('⚠️  File storage not available, falling back to memory storage')
      return new MemoryStorage()
    }
  }
  
  return new MemoryStorage()
}

/**
 * Get all stored leads (for admin/debugging)
 */
export function getAllStoredLeads(): StoredLead[] {
  if (fs.existsSync(LEADS_FILE)) {
    try {
      const data = fs.readFileSync(LEADS_FILE, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading leads:', error)
    }
  }
  
  return inMemoryLeads
}
