/**
 * Rubric loader with Zod validation
 * Loads and validates rubric configuration from JSON files
 */

import { z } from 'zod'
import rubricData from '../../config/rubric/rubric.json'
import issuesData from '../../config/rubric/issues.json'
import fixesData from '../../config/rubric/fixes.json'

// Zod schemas for validation

const CheckSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  weight: z.number().min(0).max(1),
  issue_code: z.string(),
})

const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  weight: z.number().min(0).max(1),
  checks: z.array(CheckSchema),
})

const PillarSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  weight: z.number().min(0).max(1),
  categories: z.array(CategorySchema),
})

const RubricSchema = z.object({
  version: z.string(),
  name: z.string(),
  description: z.string(),
  pillars: z.array(PillarSchema),
})

const IssueSchema = z.object({
  issue_code: z.string(),
  title: z.string(),
  description: z.string(),
  severity: z.enum(['low', 'medium', 'high', 'critical']),
  category: z.string(),
  pillar: z.string(),
})

const IssuesSchema = z.object({
  version: z.string(),
  issues: z.array(IssueSchema),
})

const FixStepSchema = z.object({
  step_number: z.number(),
  title: z.string(),
  description: z.string(),
})

const CodeExampleSchema = z.object({
  language: z.string(),
  code: z.string(),
})

const FixTemplateSchema = z.object({
  fix_template_id: z.string(),
  issue_codes: z.array(z.string()),
  title: z.string(),
  description: z.string(),
  priority: z.enum(['low', 'medium', 'high']),
  steps: z.array(FixStepSchema),
  code_example: CodeExampleSchema.optional(),
})

const FixesSchema = z.object({
  version: z.string(),
  fix_templates: z.array(FixTemplateSchema),
})

// Type exports
export type Check = z.infer<typeof CheckSchema>
export type Category = z.infer<typeof CategorySchema>
export type Pillar = z.infer<typeof PillarSchema>
export type Rubric = z.infer<typeof RubricSchema>
export type Issue = z.infer<typeof IssueSchema>
export type FixTemplate = z.infer<typeof FixTemplateSchema>

// Validate and load data
let validatedRubric: Rubric
let validatedIssues: z.infer<typeof IssuesSchema>
let validatedFixes: z.infer<typeof FixesSchema>

try {
  validatedRubric = RubricSchema.parse(rubricData)
  validatedIssues = IssuesSchema.parse(issuesData)
  validatedFixes = FixesSchema.parse(fixesData)
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('Rubric validation error:', error.errors)
    throw new Error(`Rubric validation failed: ${error.message}`)
  }
  throw error
}

// Issue catalog (indexed by issue_code)
const issueCatalog = new Map<string, Issue>()
for (const issue of validatedIssues.issues) {
  issueCatalog.set(issue.issue_code, issue)
}

// Fix templates catalog (indexed by fix_template_id)
const fixCatalog = new Map<string, FixTemplate>()
for (const fix of validatedFixes.fix_templates) {
  fixCatalog.set(fix.fix_template_id, fix)
}

// Fix templates by issue_code (reverse index)
const fixesByIssueCode = new Map<string, FixTemplate[]>()
for (const fix of validatedFixes.fix_templates) {
  for (const issueCode of fix.issue_codes) {
    if (!fixesByIssueCode.has(issueCode)) {
      fixesByIssueCode.set(issueCode, [])
    }
    fixesByIssueCode.get(issueCode)!.push(fix)
  }
}

/**
 * Get rubric data
 */
export function getRubric(): Rubric {
  return validatedRubric
}

/**
 * Get all pillars
 */
export function getPillars(): Pillar[] {
  return validatedRubric.pillars
}

/**
 * Get pillar by ID
 */
export function getPillar(pillarId: string): Pillar | undefined {
  return validatedRubric.pillars.find((p) => p.id === pillarId)
}

/**
 * Get categories for a pillar
 */
export function getCategories(pillarId: string): Category[] {
  const pillar = getPillar(pillarId)
  return pillar?.categories || []
}

/**
 * Get category by ID (searches across all pillars)
 */
export function getCategory(categoryId: string): Category | undefined {
  for (const pillar of validatedRubric.pillars) {
    const category = pillar.categories.find((c) => c.id === categoryId)
    if (category) return category
  }
  return undefined
}

/**
 * Get checks for a category
 */
export function getChecks(categoryId: string): Check[] {
  const category = getCategory(categoryId)
  return category?.checks || []
}

/**
 * Get check by ID (searches across all categories)
 */
export function getCheck(checkId: string): Check | undefined {
  for (const pillar of validatedRubric.pillars) {
    for (const category of pillar.categories) {
      const check = category.checks.find((c) => c.id === checkId)
      if (check) return check
    }
  }
  return undefined
}

/**
 * Get check by issue code
 */
export function getCheckByIssueCode(issueCode: string): Check | undefined {
  for (const pillar of validatedRubric.pillars) {
    for (const category of pillar.categories) {
      const check = category.checks.find((c) => c.issue_code === issueCode)
      if (check) return check
    }
  }
  return undefined
}

/**
 * Get issue by issue_code
 */
export function getIssue(issueCode: string): Issue | undefined {
  return issueCatalog.get(issueCode)
}

/**
 * Get all issues
 */
export function getAllIssues(): Issue[] {
  return Array.from(issueCatalog.values())
}

/**
 * Get issues by pillar
 */
export function getIssuesByPillar(pillarId: string): Issue[] {
  return Array.from(issueCatalog.values()).filter(
    (issue) => issue.pillar === pillarId
  )
}

/**
 * Get issues by category
 */
export function getIssuesByCategory(categoryId: string): Issue[] {
  return Array.from(issueCatalog.values()).filter(
    (issue) => issue.category === categoryId
  )
}

/**
 * Get fix template by fix_template_id
 */
export function getFixTemplate(fixTemplateId: string): FixTemplate | undefined {
  return fixCatalog.get(fixTemplateId)
}

/**
 * Get all fix templates
 */
export function getAllFixTemplates(): FixTemplate[] {
  return Array.from(fixCatalog.values())
}

/**
 * Get fix templates for an issue code
 */
export function getFixTemplatesForIssue(issueCode: string): FixTemplate[] {
  return fixesByIssueCode.get(issueCode) || []
}

/**
 * Get fix templates by priority
 */
export function getFixTemplatesByPriority(
  priority: 'low' | 'medium' | 'high'
): FixTemplate[] {
  return Array.from(fixCatalog.values()).filter(
    (fix) => fix.priority === priority
  )
}

/**
 * Validate rubric structure at runtime
 * Returns validation result
 */
export function validateRubric(): {
  valid: boolean
  errors: z.ZodError['errors']
} {
  try {
    RubricSchema.parse(rubricData)
    IssuesSchema.parse(issuesData)
    FixesSchema.parse(fixesData)
    return { valid: true, errors: [] }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, errors: error.errors }
    }
    throw error
  }
}

/**
 * Get rubric version
 */
export function getRubricVersion(): string {
  return validatedRubric.version
}

/**
 * Get issues version
 */
export function getIssuesVersion(): string {
  return validatedIssues.version
}

/**
 * Get fixes version
 */
export function getFixesVersion(): string {
  return validatedFixes.version
}

