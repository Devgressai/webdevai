/**
 * Central export for all location configurations
 */

export * from './types'
export { konaConfig } from './kona'
export { honoluluConfig } from './honolulu'

// Location registry for easy lookup
import { LocationPageConfig } from './types'
import { konaConfig } from './kona'
import { honoluluConfig } from './honolulu'

export const locationConfigs: Record<string, LocationPageConfig> = {
  kona: konaConfig,
  honolulu: honoluluConfig,
}

// Helper to get config by slug
export function getLocationConfig(slug: string): LocationPageConfig | null {
  return locationConfigs[slug] || null
}

