/**
 * Lead Capture Types
 */

export interface LeadSubmission {
  name: string
  email: string
  company?: string
  website?: string
  message: string
  serviceInterest: string
  city?: string
  ctaTrackingId?: string
  // Honeypot field (should be empty)
  _honeypot?: string
}

export interface StoredLead extends LeadSubmission {
  id: string
  submittedAt: string
  ipAddress?: string
  userAgent?: string
  source?: string
}

export interface LeadProvider {
  send(lead: StoredLead): Promise<{ success: boolean; error?: string }>
}

export interface LeadStorage {
  save(lead: StoredLead): Promise<StoredLead>
}
