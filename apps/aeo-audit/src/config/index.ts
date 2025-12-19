/**
 * Centralized configuration system with Zod validation
 * Loads and validates environment variables with safe defaults
 */

import { z } from 'zod'

/**
 * Environment variable schema
 */
const envSchema = z.object({
  // Required environment variables
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  REDIS_URL: z.string().url('REDIS_URL must be a valid URL'),
  NEXT_PUBLIC_APP_URL: z.string().url('NEXT_PUBLIC_APP_URL must be a valid URL'),

  // Optional environment variables with defaults
  MAX_PAGES: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 200)),
  MAX_DEPTH: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 2)),
  USER_AGENT: z
    .string()
    .optional()
    .default(
      'AEO-Audit/1.0 (+https://github.com/your-org/aeo-audit)'
    ),
  EVIDENCE_MODE: z
    .enum(['full', 'extract-only'])
    .optional()
    .default('extract-only'),
  SITE_TYPE_OVERRIDE: z
    .enum(['corporate', 'ecommerce', 'blog', 'default'])
    .optional(),
  LLM_PROVIDER: z
    .enum(['mock', 'openai', 'anthropic', 'google'])
    .optional()
    .default('mock'),
  LLM_MODEL: z.string().optional().default('gpt-4'),
  MAX_RENDERS: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 10)),
  MAX_LLM_CALLS: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 50)),
  MAX_TOKENS_PER_CALL: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 10000)),
})

/**
 * Validated environment variables
 */
let validatedEnv: z.infer<typeof envSchema> | null = null

/**
 * Get validated environment variables
 * Throws if required variables are missing or invalid
 */
function getValidatedEnv(): z.infer<typeof envSchema> {
  if (validatedEnv) {
    return validatedEnv
  }

  try {
    validatedEnv = envSchema.parse(process.env)
    return validatedEnv
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingRequired = error.errors
        .filter((e) => e.code === 'invalid_type' && e.received === 'undefined')
        .map((e) => e.path.join('.'))
      
      if (missingRequired.length > 0) {
        throw new Error(
          `Missing required environment variables: ${missingRequired.join(', ')}`
        )
      }

      const invalidValues = error.errors
        .filter((e) => e.code !== 'invalid_type' || e.received !== 'undefined')
        .map((e) => `${e.path.join('.')}: ${e.message}`)

      if (invalidValues.length > 0) {
        throw new Error(
          `Invalid environment variables: ${invalidValues.join(', ')}`
        )
      }
    }
    throw error
  }
}

/**
 * Application configuration
 */
export const config = {
  // Database
  database: {
    url: () => getValidatedEnv().DATABASE_URL,
  },

  // Redis
  redis: {
    url: () => getValidatedEnv().REDIS_URL,
  },

  // Application
  app: {
    url: () => getValidatedEnv().NEXT_PUBLIC_APP_URL,
  },

  // Crawler settings
  crawler: {
    maxPages: () => getValidatedEnv().MAX_PAGES,
    maxDepth: () => getValidatedEnv().MAX_DEPTH,
    userAgent: () => getValidatedEnv().USER_AGENT,
  },

  // Evidence mode
  evidence: {
    mode: () => getValidatedEnv().EVIDENCE_MODE,
    isFullMode: () => getValidatedEnv().EVIDENCE_MODE === 'full',
    isExtractOnly: () => getValidatedEnv().EVIDENCE_MODE === 'extract-only',
  },

  // Site type
  siteType: {
    override: () => getValidatedEnv().SITE_TYPE_OVERRIDE,
    get: (defaultType: string = 'corporate') =>
      getValidatedEnv().SITE_TYPE_OVERRIDE || defaultType,
  },

  // LLM settings
  llm: {
    provider: () => getValidatedEnv().LLM_PROVIDER,
    model: () => getValidatedEnv().LLM_MODEL,
  },

  // Budget settings
  budget: {
    maxPages: () => getValidatedEnv().MAX_PAGES,
    maxRenders: () => getValidatedEnv().MAX_RENDERS,
    maxLlmCalls: () => getValidatedEnv().MAX_LLM_CALLS,
    maxTokensPerCall: () => getValidatedEnv().MAX_TOKENS_PER_CALL,
  },
} as const

/**
 * Validate configuration on import
 * This will throw if required env vars are missing
 */
try {
  getValidatedEnv()
} catch (error) {
  if (error instanceof Error) {
    console.error('Configuration validation failed:', error.message)
    if (process.env.NODE_ENV !== 'test') {
      // Only throw in non-test environments
      throw error
    }
  }
}

/**
 * Type-safe config access
 */
export type Config = typeof config

