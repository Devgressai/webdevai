# Rubric Validation Summary

## Validation Approach

The rubric loader uses **Zod** for runtime validation of all JSON configuration files. Validation occurs at module load time, ensuring invalid configurations are caught immediately.

## Validation Schemas

### 1. Rubric Schema

Validates `config/rubric/rubric.json`:

```typescript
{
  version: string
  name: string
  description: string
  pillars: Array<{
    id: string
    name: string
    description: string
    weight: number (0-1)
    categories: Array<{
      id: string
      name: string
      description: string
      weight: number (0-1)
      checks: Array<{
        id: string
        name: string
        description: string
        weight: number (0-1)
        issue_code: string
      }>
    }>
  }>
}
```

**Validation Rules**:
- ✅ All weights must be between 0 and 1
- ✅ All IDs must be strings
- ✅ All descriptions must be strings
- ✅ Checks must have `issue_code` that references an issue

### 2. Issues Schema

Validates `config/rubric/issues.json`:

```typescript
{
  version: string
  issues: Array<{
    issue_code: string
    title: string
    description: string
    severity: "low" | "medium" | "high" | "critical"
    category: string
    pillar: string
  }>
}
```

**Validation Rules**:
- ✅ `severity` must be one of: `low`, `medium`, `high`, `critical`
- ✅ `issue_code` must be unique
- ✅ `category` and `pillar` must reference valid IDs from rubric

### 3. Fixes Schema

Validates `config/rubric/fixes.json`:

```typescript
{
  version: string
  fix_templates: Array<{
    fix_template_id: string
    issue_codes: string[]
    title: string
    description: string
    priority: "low" | "medium" | "high"
    steps: Array<{
      step_number: number
      title: string
      description: string
    }>
    code_example?: {
      language: string
      code: string
    }
  }>
}
```

**Validation Rules**:
- ✅ `priority` must be one of: `low`, `medium`, `high`
- ✅ `fix_template_id` must be unique
- ✅ `issue_codes` must reference valid issue codes
- ✅ `code_example` is optional

## Validation Execution

### When Validation Runs

1. **Module Load Time**: Validation occurs when the loader module is first imported
2. **Immediate Failure**: If validation fails, an error is thrown and the application cannot start
3. **Single Validation**: Validation runs once per application lifecycle

### Validation Errors

If validation fails, you'll see:

```
Error: Rubric validation failed: [Zod error details]
```

Zod provides detailed error messages including:
- Which field failed validation
- Expected vs actual value
- Path to the invalid field

## Validation Coverage

### ✅ Validated

- **Structure**: All required fields present
- **Types**: All values match expected types
- **Enums**: Severity and priority values are valid
- **Ranges**: Weights are between 0 and 1
- **Arrays**: All array elements match schema

### ⚠️ Not Validated (by design)

- **Cross-references**: Issue codes in checks don't validate against issues catalog (runtime lookup handles missing)
- **Weight sums**: Category weights don't need to sum to 1.0 (flexible weighting)
- **Uniqueness**: Duplicate IDs not checked (would require additional validation)

## Example Validation Errors

### Missing Required Field

```json
{
  "version": "1.0.0",
  "name": "AEO Rubric"
  // Missing "description"
}
```

**Error**: `Required at "description"`

### Invalid Type

```json
{
  "weight": "0.5"  // Should be number, not string
}
```

**Error**: `Expected number, received string`

### Invalid Enum Value

```json
{
  "severity": "very_high"  // Not a valid enum value
}
```

**Error**: `Invalid enum value. Expected 'low' | 'medium' | 'high' | 'critical', received 'very_high'`

### Out of Range

```json
{
  "weight": 1.5  // Should be between 0 and 1
}
```

**Error**: `Number must be less than or equal to 1`

## Testing Validation

### Manual Validation

```typescript
import { validateRubric } from '@/lib/rubric'

const result = validateRubric()
if (!result.valid) {
  console.error('Validation errors:', result.errors)
  // Handle errors
}
```

### Expected Behavior

- ✅ **Valid JSON**: Returns `{ valid: true, errors: [] }`
- ❌ **Invalid JSON**: Returns `{ valid: false, errors: [...] }`

## Validation Best Practices

1. **Validate Early**: Validation at module load catches errors before runtime
2. **Clear Errors**: Zod provides detailed error messages for debugging
3. **Type Safety**: TypeScript types match Zod schemas for compile-time safety
4. **No Hardcoding**: All rubric data comes from JSON, validated at runtime

## Schema Evolution

When updating rubric structure:

1. **Update JSON files** with new structure
2. **Update Zod schemas** to match new structure
3. **Update TypeScript types** (auto-inferred from Zod)
4. **Test validation** with `validateRubric()`

## Current Validation Status

✅ **All three JSON files validated successfully**

- `rubric.json`: ✅ Valid
- `issues.json`: ✅ Valid
- `fixes.json`: ✅ Valid

All schemas pass validation with current data structure.

