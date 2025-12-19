/**
 * Configuration for cluster_build job
 */

export interface ClusterBuildConfig {
  // Profile band thresholds
  wordCountBands: {
    low: number    // 0 - low
    medium: number // low - medium
    high: number   // medium - high
    // high+ is unlimited
  }
  headingCountBands: {
    low: number
    medium: number
    high: number
  }
}

export const DEFAULT_CONFIG: ClusterBuildConfig = {
  wordCountBands: {
    low: 300,      // 0-300: low
    medium: 1000, // 300-1000: medium
    high: 3000,   // 1000-3000: high, 3000+: very_high
  },
  headingCountBands: {
    low: 3,        // 0-3: low
    medium: 8,    // 3-8: medium
    high: 15,     // 8-15: high, 15+: very_high
  },
}

/**
 * Get config from environment or use defaults
 */
export function getConfig(): ClusterBuildConfig {
  return {
    wordCountBands: {
      low: parseInt(process.env.CLUSTER_WORD_COUNT_LOW || '300', 10),
      medium: parseInt(process.env.CLUSTER_WORD_COUNT_MEDIUM || '1000', 10),
      high: parseInt(process.env.CLUSTER_WORD_COUNT_HIGH || '3000', 10),
    },
    headingCountBands: {
      low: parseInt(process.env.CLUSTER_HEADING_COUNT_LOW || '3', 10),
      medium: parseInt(process.env.CLUSTER_HEADING_COUNT_MEDIUM || '8', 10),
      high: parseInt(process.env.CLUSTER_HEADING_COUNT_HIGH || '15', 10),
    },
  }
}

