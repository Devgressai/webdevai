/**
 * Precomputed overlap scores for City×Industry hub pages
 * 
 * This file is generated at build time by the overlap computation script.
 * See overlap-computation.md for computation methodology.
 */

import { OverlapStore } from './canonical-rules'

export const overlapStore: OverlapStore = {
  "/new-york-ny/industry/healthcare": {
    cityOverlap: 0.35,
    industryOverlap: 0.28,
    downstreamPages: 8,
    computedAt: "2026-01-25T10:00:00Z"
  },
  "/los-angeles-ca/industry/real-estate": {
    cityOverlap: 0.85,
    industryOverlap: 0.42,
    downstreamPages: 5,
    computedAt: "2026-01-25T10:00:00Z"
  },
  "/chicago-il/industry/legal": {
    cityOverlap: 0.45,
    industryOverlap: 0.88,
    downstreamPages: 6,
    computedAt: "2026-01-25T10:00:00Z"
  },
  "/miami-fl/industry/restaurants": {
    cityOverlap: 0.82,
    industryOverlap: 0.79,
    downstreamPages: 4,
    computedAt: "2026-01-25T10:00:00Z"
  },
  "/boston-ma/industry/healthcare": {
    cityOverlap: 0.30,
    industryOverlap: 0.25,
    downstreamPages: 1,
    computedAt: "2026-01-25T10:00:00Z"
  },
  "/portland-or/industry/aerospace": {
    cityOverlap: 0.15,
    industryOverlap: 0.12,
    downstreamPages: 0,
    computedAt: "2026-01-25T10:00:00Z"
  }
}
