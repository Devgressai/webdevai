# Rubric Loader

## Overview

The rubric loader module provides typed access to the AEO Readiness Rubric configuration. It validates JSON structure at runtime using Zod and provides convenient accessors for pillars, categories, checks, issues, and fix templates.

## Structure

The rubric system consists of three JSON files:

1. **`rubric.json`**: Defines the rubric structure (pillars, categories, checks)
2. **`issues.json`**: Defines issue catalog (issue codes, titles, descriptions, severity)
3. **`fixes.json`**: Defines fix templates (fix steps, code examples)

## Validation

All JSON files are validated at module load time using Zod schemas:

- **Rubric Schema**: Validates pillars, categories, checks structure
- **Issues Schema**: Validates issue catalog structure
- **Fixes Schema**: Validates fix templates structure

If validation fails, the module throws an error with detailed validation messages.

## Usage

### Basic Access

```typescript
import {
  getRubric,
  getPillars,
  getPillar,
  getCategories,
  getCategory,
  getChecks,
  getCheck,
} from '@/lib/rubric'

// Get entire rubric
const rubric = getRubric()

// Get all pillars
const pillars = getPillars()

// Get specific pillar
const structuredDataPillar = getPillar('structured_data')

// Get categories for a pillar
const categories = getCategories('structured_data')

// Get specific category
const schemaPresence = getCategory('schema_presence')

// Get checks for a category
const checks = getChecks('schema_presence')

// Get specific check
const hasJsonLdCheck = getCheck('has_jsonld')
```

### Issue Lookup

```typescript
import {
  getIssue,
  getAllIssues,
  getIssuesByPillar,
  getIssuesByCategory,
} from '@/lib/rubric'

// Get issue by code
const issue = getIssue('MISSING_JSONLD')
// Returns: { issue_code, title, description, severity, category, pillar }

// Get all issues
const allIssues = getAllIssues()

// Get issues by pillar
const structuredDataIssues = getIssuesByPillar('structured_data')

// Get issues by category
const schemaIssues = getIssuesByCategory('schema_presence')
```

### Fix Template Lookup

```typescript
import {
  getFixTemplate,
  getAllFixTemplates,
  getFixTemplatesForIssue,
  getFixTemplatesByPriority,
} from '@/lib/rubric'

// Get fix template by ID
const fixTemplate = getFixTemplate('add_jsonld_block')
// Returns: { fix_template_id, issue_codes, title, description, priority, steps, code_example }

// Get all fix templates
const allFixes = getAllFixTemplates()

// Get fixes for an issue
const fixes = getFixTemplatesForIssue('MISSING_JSONLD')

// Get fixes by priority
const highPriorityFixes = getFixTemplatesByPriority('high')
```

### Check by Issue Code

```typescript
import { getCheckByIssueCode } from '@/lib/rubric'

// Get check that corresponds to an issue
const check = getCheckByIssueCode('MISSING_JSONLD')
// Returns: { id, name, description, weight, issue_code }
```

## Type Safety

All functions return typed objects:

```typescript
import type {
  Pillar,
  Category,
  Check,
  Issue,
  FixTemplate,
} from '@/lib/rubric'

const pillar: Pillar = getPillar('structured_data')!
const issue: Issue = getIssue('MISSING_JSONLD')!
const fix: FixTemplate = getFixTemplate('add_jsonld_block')!
```

## Validation

### Runtime Validation

Validation occurs at module load time. If validation fails, the application will not start.

```typescript
import { validateRubric } from '@/lib/rubric'

const result = validateRubric()
if (!result.valid) {
  console.error('Validation errors:', result.errors)
}
```

### Validation Rules

**Rubric Schema**:
- `version`: string
- `name`: string
- `description`: string
- `pillars`: array of Pillar objects
  - Each pillar has: `id`, `name`, `description`, `weight` (0-1), `categories`
  - Each category has: `id`, `name`, `description`, `weight` (0-1), `checks`
  - Each check has: `id`, `name`, `description`, `weight` (0-1), `issue_code`

**Issues Schema**:
- `version`: string
- `issues`: array of Issue objects
  - Each issue has: `issue_code`, `title`, `description`, `severity` (low/medium/high/critical), `category`, `pillar`

**Fixes Schema**:
- `version`: string
- `fix_templates`: array of FixTemplate objects
  - Each fix has: `fix_template_id`, `issue_codes` (array), `title`, `description`, `priority` (low/medium/high), `steps`, `code_example` (optional)
  - Each step has: `step_number`, `title`, `description`

## Data Structure

### Rubric Hierarchy

```
Rubric
└── Pillars (4)
    └── Categories (varies)
        └── Checks (varies)
            └── issue_code → Issue
                └── Fix Templates (via issue_code)
```

### Indexes

The loader creates several indexes for fast lookup:

1. **Issue Catalog**: `Map<issue_code, Issue>`
2. **Fix Catalog**: `Map<fix_template_id, FixTemplate>`
3. **Fixes by Issue Code**: `Map<issue_code, FixTemplate[]>`

## Version Information

```typescript
import {
  getRubricVersion,
  getIssuesVersion,
  getFixesVersion,
} from '@/lib/rubric'

const rubricVersion = getRubricVersion() // "1.0.0"
const issuesVersion = getIssuesVersion() // "1.0.0"
const fixesVersion = getFixesVersion()   // "1.0.0"
```

## Error Handling

If JSON files are invalid or missing:

1. **At module load**: Validation errors are thrown immediately
2. **At runtime**: Lookup functions return `undefined` if not found

```typescript
const issue = getIssue('INVALID_CODE')
if (!issue) {
  console.error('Issue not found')
}
```

## Extending the Rubric

To add new checks, issues, or fixes:

1. Edit the appropriate JSON file in `config/rubric/`
2. Ensure structure matches Zod schemas
3. Restart the application (validation runs at module load)

## No Hardcoding

The rubric is **never hardcoded** in the codebase. All rubric data comes from JSON files, ensuring:
- Easy updates without code changes
- Version control of rubric changes
- Separation of configuration from logic
- Runtime validation of structure

