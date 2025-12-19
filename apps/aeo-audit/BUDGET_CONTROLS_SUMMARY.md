# Budget Controls Implementation

## Created Files

### Backend
1. `lib/budget/tracking.ts` - Budget tracking and accounting system
2. `lib/budget/index.ts` - Budget exports

### Frontend
3. `components/BudgetIndicator.tsx` - UI component for displaying budget usage

### Updates
4. `prisma/schema.prisma` - Added budget accounting fields to Scan model
5. `src/config/index.ts` - Added budget configuration (MAX_RENDERS, MAX_LLM_CALLS, MAX_TOKENS_PER_CALL)
6. `lib/page-fetch/worker.ts` - Integrated budget tracking for pages fetched
7. `lib/page-render/worker.ts` - Integrated budget tracking for pages rendered
8. `lib/llm-eval/worker.ts` - Integrated budget tracking for LLM calls and token truncation
9. `app/scans/[scanId]/page.tsx` - Added BudgetIndicator to scan results page

## Database Schema Changes

### Scan Model Updates

```prisma
model Scan {
  // ... existing fields ...
  
  // Budget accounting
  pagesFetched Int     @default(0)
  pagesRendered Int    @default(0)
  llmCalls     Int     @default(0)
  estTokens    Int     @default(0) // Estimated tokens used
  budgetLimits Json?   // What limits were hit: { pages: true, renders: true, llmCalls: true, tokens: true }
  
  status      String   @default("pending") // pending, running, completed, failed, completed_with_limits
}
```

## Budget Limits Configuration

### Environment Variables

- `MAX_PAGES` (default: 200) - Maximum pages to fetch per scan
- `MAX_RENDERS` (default: 10) - Maximum pages to render with Playwright
- `MAX_LLM_CALLS` (default: 50) - Maximum LLM evaluation calls per scan
- `MAX_TOKENS_PER_CALL` (default: 10000) - Maximum tokens per LLM call (inputs truncated if exceeded)

## Budget Enforcement Points

### 1. Page Fetch (`lib/page-fetch/worker.ts`)

**Enforcement**:
- Before fetching: Checks `canContinueProcessing()` for page limit
- After creating page: Increments `pagesFetched` counter
- If limit exceeded: Returns error, marks limit hit, sets status to `completed_with_limits`

**Location**: Lines ~55-75 (budget check), ~243-246 (increment counter)

### 2. Page Render (`lib/page-render/worker.ts`)

**Enforcement**:
- Before rendering: Checks `canContinueProcessing()` for render limit
- Before rendering: Calls `incrementPagesRendered()` to check and increment
- If limit exceeded: Returns error, marks limit hit, sets status to `completed_with_limits`

**Location**: Lines ~104-130 (budget checks and increment)

### 3. LLM Evaluation (`lib/llm-eval/worker.ts`)

**Enforcement**:
- Before evaluation: Checks `canContinueProcessing()` for LLM call limit
- Before evaluation: Truncates extracts to `MAX_TOKENS_PER_CALL` using `truncateToTokenLimit()`
- Before evaluation: Estimates tokens and calls `incrementLlmCall()`
- If limit exceeded: Returns error, marks limit hit, sets status to `completed_with_limits`

**Location**: Lines ~50-90 (budget checks, truncation, increment)

## Budget Tracking Functions

### `incrementPagesFetched(scanId)`
- Increments `pagesFetched` counter
- Returns `false` if limit exceeded
- Marks `budgetLimits.pages = true` if limit hit

### `incrementPagesRendered(scanId)`
- Increments `pagesRendered` counter
- Returns `false` if limit exceeded
- Marks `budgetLimits.renders = true` if limit hit

### `incrementLlmCall(scanId, estimatedTokens)`
- Increments `llmCalls` counter
- Adds `estimatedTokens` to `estTokens` (capped at `MAX_TOKENS_PER_CALL`)
- Returns `false` if limit exceeded
- Marks `budgetLimits.llmCalls = true` if limit hit

### `canContinueProcessing(scanId)`
- Checks all budget limits
- Returns `{ canContinue: boolean, reason?: string }`
- Used before expensive operations

### `truncateToTokenLimit(text, maxTokens)`
- Truncates text deterministically to fit token limit
- Uses word boundary when possible
- Returns truncated text with "..." suffix

### `estimateTokens(text)`
- Estimates tokens (rough: 1 token ≈ 4 characters)
- Used for budget accounting

## UI Indicators

### BudgetIndicator Component

Displays:
- **Pages Fetched**: Progress bar showing usage vs limit
- **Pages Rendered**: Progress bar showing usage vs limit
- **LLM Calls**: Progress bar showing usage vs limit
- **Estimated Tokens**: Total tokens used, max per call
- **Limit Warnings**: Messages when limits are hit
- **Upgrade Message**: Guidance when scan completed with limits

**Color Coding**:
- Green: < 80% usage
- Amber: 80-100% usage
- Red: 100%+ usage (limit exceeded)

**Location**: `app/scans/[scanId]/page.tsx` - Displayed at top of scan results

## Scan Status

### `completed_with_limits`

When any budget limit is exceeded:
- Scan status set to `completed_with_limits`
- `budgetLimits` JSON field records which limits were hit
- UI shows warning message and upgrade guidance

## Token Truncation

### Deterministic Truncation

- Inputs are truncated to `MAX_TOKENS_PER_CALL` before LLM calls
- Truncation happens at word boundaries when possible
- Same input always produces same truncated output
- Truncated content marked with "..." suffix

**Location**: `lib/budget/tracking.ts` - `truncateToTokenLimit()` function

## Example Usage

### Environment Configuration

```bash
MAX_PAGES=200
MAX_RENDERS=10
MAX_LLM_CALLS=50
MAX_TOKENS_PER_CALL=10000
```

### Budget Accounting Flow

1. **Page Fetch**: Check limit → Fetch → Increment counter
2. **Page Render**: Check limit → Increment counter → Render
3. **LLM Call**: Check limit → Truncate inputs → Estimate tokens → Increment counters → Call LLM

### UI Display

The BudgetIndicator component shows:
- Current usage vs limits
- Progress bars with color coding
- Warnings when limits are hit
- Upgrade guidance when scan completed with limits

## Migration

After updating the schema, run:

```bash
npx prisma migrate dev --name add_budget_accounting
```

This will add the new fields to the Scan model.

## Testing

To test budget limits:

1. Set low limits in `.env`:
   ```bash
   MAX_PAGES=5
   MAX_RENDERS=2
   MAX_LLM_CALLS=3
   MAX_TOKENS_PER_CALL=1000
   ```

2. Run a scan and verify:
   - Counters increment correctly
   - Limits are enforced
   - Status changes to `completed_with_limits`
   - UI shows budget usage and warnings

