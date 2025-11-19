import { client } from './sanity.client'

export interface RaffleEntryData {
  firstName: string
  email: string
  phone: string
  hasCurrentSite: boolean
  siteName?: string
  websiteUrl?: string
  consent: boolean
  ipAddress?: string
}

export interface RaffleEntry extends RaffleEntryData {
  _id: string
  _type: 'raffleEntry'
  _createdAt: string
  submittedAt: string
  status: 'new' | 'contacted' | 'winner' | 'not-selected'
  notes?: string
}

/**
 * Save a new raffle entry to Sanity
 */
export async function saveRaffleEntryToSanity(data: RaffleEntryData): Promise<RaffleEntry> {
  const doc = {
    _type: 'raffleEntry',
    firstName: data.firstName,
    email: data.email,
    phone: data.phone,
    hasCurrentSite: data.hasCurrentSite,
    siteName: data.siteName || undefined,
    websiteUrl: data.websiteUrl || undefined,
    consent: data.consent,
    ipAddress: data.ipAddress || undefined,
    submittedAt: new Date().toISOString(),
    status: 'new',
  }

  const result = await client.create(doc)
  return result as RaffleEntry
}

/**
 * Get all raffle entries
 */
export async function getAllRaffleEntries(): Promise<RaffleEntry[]> {
  const query = `*[_type == "raffleEntry"] | order(submittedAt desc)`
  return client.fetch(query)
}

/**
 * Get raffle entries by status
 */
export async function getRaffleEntriesByStatus(status: string): Promise<RaffleEntry[]> {
  const query = `*[_type == "raffleEntry" && status == $status] | order(submittedAt desc)`
  return client.fetch(query, { status })
}

/**
 * Update raffle entry status
 */
export async function updateRaffleEntryStatus(
  entryId: string,
  status: 'new' | 'contacted' | 'winner' | 'not-selected'
): Promise<void> {
  await client.patch(entryId).set({ status }).commit()
}

/**
 * Add notes to a raffle entry
 */
export async function addRaffleEntryNotes(entryId: string, notes: string): Promise<void> {
  await client.patch(entryId).set({ notes }).commit()
}

/**
 * Get raffle entry count
 */
export async function getRaffleEntryCount(): Promise<number> {
  const query = `count(*[_type == "raffleEntry"])`
  return client.fetch(query)
}

/**
 * Check if email already entered
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  const query = `count(*[_type == "raffleEntry" && email == $email]) > 0`
  return client.fetch(query, { email: email.toLowerCase() })
}

