# Critical Governance Fixes Required

## IMMEDIATE FIXES (Before Production)

### 1. City×Industry×Service Page Integration
**File:** `app/[city]/industry/[industry]/[service]/page.tsx`  
**Issue:** Not passing blocks to `getSeoDirectives()`  
**Fix:** See PATCH 1 in GOVERNANCE_AUDIT_REPORT.md  
**Priority:** 🔴 **CRITICAL**

### 2. City×Service Page Integration
**File:** `app/[city]/[service]/page.tsx`  
**Issue:** Not using `getSeoDirectives()`, missing robots meta  
**Fix:** See PATCH 2 in GOVERNANCE_AUDIT_REPORT.md  
**Priority:** 🔴 **CRITICAL**

### 3. Sitemap Block Handling
**File:** `app/sitemap.ts`  
**Issue:** Passes empty blocks (correct behavior, but needs comment clarification)  
**Fix:** See PATCH 3 in GOVERNANCE_AUDIT_REPORT.md  
**Priority:** 🟡 **MEDIUM**

## HARDENING APPLIED

✅ Governance monitoring system created  
✅ CI validation script created  
✅ Overlap score validation added  
✅ Canonical target validation added  
✅ Enhanced logging for missing blocks  
✅ Defensive guards for hard-pass on excluded routes

## STILL REQUIRED

### 4. CTA Governance Implementation
**Status:** Documented but not implemented  
**Priority:** 🟠 **HIGH**  
**Files Needed:**
- `lib/cta/funnel-stages.ts`
- `lib/cta/validation.ts`
- `lib/cta/patterns.ts`
- `lib/cta/tracking.ts`
- `ci/validate-ctas.js`

### 5. Governance Disclaimers Implementation
**Status:** Documented but not implemented  
**Priority:** 🟠 **HIGH**  
**Files Needed:**
- `lib/governance/disclaimer.ts`
- `lib/governance/content-integrity.ts`
- `lib/governance/review-workflow.ts`

### 6. Entity Graph Implementation Verification
**Status:** Needs verification  
**Priority:** 🟡 **MEDIUM**  
**Action:** Verify entity pages implement relationship table, SameAs, Used In Pages, Connected Entities

## TESTING CHECKLIST

- [ ] Run `node ci/validate-index-governance.js` - should pass
- [ ] Verify City×Industry hubs are noindex
- [ ] Verify programmatic pages pass blocks
- [ ] Verify sitemap excludes noindex pages
- [ ] Verify canonical decisions are deterministic
- [ ] Verify monitoring captures violations
- [ ] Verify CI fails on governance violations
