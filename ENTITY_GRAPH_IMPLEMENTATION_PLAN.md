# Entity Graph v1.1 Implementation Plan

**Status:** ❌ Not Implemented  
**Priority:** CRITICAL  
**Estimated Effort:** 25-35 hours (MVP: 7-10 hours)

---

## Quick Status

| Feature | Status | Files Missing |
|---------|--------|---------------|
| Entity Routes | ❌ | `app/entity/**` |
| Entity Registry | ❌ | `lib/entities/entity-registry.ts` |
| Relationship Table | ❌ | `lib/entities/relationship-table.ts` |
| SameAs Validation | ❌ | `lib/entities/sameas-validation.ts` |
| Used In Pages | ❌ | `lib/entities/used-in-pages.ts` |
| Connected Entities | ❌ | `lib/entities/connected-entities.ts` |
| Entity Schema | ⚠️ | `lib/entities/entity-schema.ts` |

**Overall:** 0% Complete

---

## Implementation Order

### Phase 1: Foundation (7-10 hours)
1. **Entity Registry** (2-3h)
   - `lib/entities/types.ts`
   - `lib/entities/entity-registry.json`
   - `lib/entities/registry-loader.ts`

2. **Entity Routes** (2-3h)
   - `app/entity/page.tsx`
   - `app/entity/[slug]/page.tsx`
   - `app/entity/[type]/[slug]/page.tsx`

3. **Relationship Table** (3-4h)
   - `lib/entities/predicates.ts`
   - `lib/entities/relationship-table.ts`

### Phase 2: Core Features (10-13 hours)
4. **SameAs Validation** (2-3h)
   - `lib/entities/sameas-validation.ts`
   - `lib/entities/sameas-renderer.ts`

5. **Used In Pages** (4-5h)
   - `lib/entities/page-index.ts`
   - `lib/entities/relevance-scoring.ts`
   - `lib/entities/used-in-pages.ts`

6. **Connected Entities** (4-5h)
   - `lib/entities/co-occurrence.ts`
   - `lib/entities/relationship-strength.ts`
   - `lib/entities/connected-entities.ts`

### Phase 3: Enhancement (2-3 hours)
7. **Entity Schema** (2-3h)
   - `lib/entities/entity-schema.ts`

---

## Files to Create

### Core System
- `lib/entities/types.ts` - Type definitions
- `lib/entities/entity-registry.json` - Registry data
- `lib/entities/registry-loader.ts` - Registry loading
- `lib/entities/index.ts` - Main exports

### Relationship Table
- `lib/entities/predicates.ts` - Allowed predicates
- `lib/entities/relationship-table.ts` - Triple generation

### SameAs
- `lib/entities/sameas-validation.ts` - Validation
- `lib/entities/sameas-renderer.ts` - Rendering

### Used In Pages
- `lib/entities/page-index.ts` - Page index
- `lib/entities/relevance-scoring.ts` - Scoring
- `lib/entities/used-in-pages.ts` - Generation

### Connected Entities
- `lib/entities/co-occurrence.ts` - Co-occurrence
- `lib/entities/relationship-strength.ts` - Strength
- `lib/entities/connected-entities.ts` - Generation

### Entity Schema
- `lib/entities/entity-schema.ts` - Schema generation

### Routes
- `app/entity/page.tsx` - Hub
- `app/entity/[slug]/page.tsx` - Webvello entity
- `app/entity/[type]/[slug]/page.tsx` - All entities

### Tests
- `lib/entities/__tests__/entity-graph-smoke.test.ts` ✅ (Created)

**Total:** 18 files to create

---

## Reference Documents

- **Full Verification Report:** `ENTITY_GRAPH_VERIFICATION_REPORT.md`
- **Template Specification:** `WEBVELLO_PAGE_TEMPLATE_SYSTEM.md` Section 11
- **Smoke Tests:** `lib/entities/__tests__/entity-graph-smoke.test.ts`

---

## Quick Start

1. Read `ENTITY_GRAPH_VERIFICATION_REPORT.md` for full details
2. Start with Entity Registry (foundation)
3. Create basic entity routes
4. Implement Relationship Table
5. Add remaining features incrementally
6. Update smoke tests as you implement
