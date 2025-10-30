# NYT Headline Case Library - Implementation Plan

## Project Overview
Creating a reusable TypeScript library that converts text to NYT-style headline casing. This library will be extracted from the DailyKinaApp project and made available as a standalone package.

## Project Details
- **Package Name**: `nyt-headline-case`
- **Repository**: `tangentialism/nyt-headline-case` (GitHub)
- **Distribution**: Git URL (npm link during development)
- **Package Manager**: npm
- **Build Tool**: tsup (ESM + CommonJS output)
- **Testing**: Vitest with 90% coverage threshold
- **TypeScript**: Strict mode, ES2022 target
- **Initial Version**: 0.1.0

## Development Methodology
- **Test-first for new features**: All improvements after initial migration use TDD
- **Current state testing**: Existing functionality gets comprehensive tests first
- **Step-by-step**: Confirm understanding at each phase
- **Document as we go**: Keep this plan updated with progress

---

## 📋 Phase 1: Project Foundation

### ✅ Step 1: Create GitHub Repository
**Status**: In Progress  
**Tasks**:
- [ ] Create repo `tangentialism/nyt-headline-case` using `gh` CLI
- [ ] Initialize git repository locally
- [ ] Add .gitignore for Node.js/TypeScript
- [ ] Initial commit with structure

### Step 2: Initialize npm Project
**Status**: Pending  
**Tasks**:
- [ ] Run `npm init` with appropriate configuration
- [ ] Set package.json metadata (name, version, description, author)
- [ ] Configure package.json `type: "module"`
- [ ] Set main entry points (main, module, types, exports)
- [ ] Add basic scripts (build, test, dev)

### Step 3: Set Up Build Tooling (tsup)
**Status**: Pending  
**Tasks**:
- [ ] Install tsup as dev dependency
- [ ] Create `tsup.config.ts` for ESM + CommonJS output
- [ ] Configure TypeScript (`tsconfig.json`) with strict mode, ES2022 target
- [ ] Configure declaration file generation (.d.ts)
- [ ] Test build process produces correct outputs

### Step 4: Configure Vitest
**Status**: Pending  
**Tasks**:
- [ ] Install vitest and @vitest/coverage-v8
- [ ] Create `vitest.config.ts` 
- [ ] Set coverage threshold to 90%
- [ ] Add test scripts to package.json
- [ ] Create basic test structure in `/tests` directory

---

## 📋 Phase 2: Code Migration & Initial Tests

### Step 5: Copy Current Implementation
**Status**: Pending  
**Tasks**:
- [ ] Copy `headlineCase.ts` from DailyKinaApp to `/src/index.ts`
- [ ] Verify TypeScript compiles with new configuration
- [ ] Ensure all types are properly exported
- [ ] Document current known issues (especially two-letter words)

### Step 6: Write Comprehensive Test Suite
**Status**: Pending  
**Goal**: Achieve 90% coverage of current functionality  
**Test Categories**:
- [ ] Basic functionality tests (simple sentences)
- [ ] First/last word capitalization
- [ ] Always-capitalize word list
- [ ] Always-lowercase word list
- [ ] 4+ letter word capitalization
- [ ] 3-letter word handling
- [ ] 1-2 letter word handling
- [ ] Punctuation preservation
- [ ] Whitespace handling
- [ ] Edge cases (empty strings, null, special chars)
- [ ] Word boundary detection

### Step 7: Validate Current Implementation
**Status**: Pending  
**Tasks**:
- [ ] Run full test suite
- [ ] Verify 90%+ coverage achieved
- [ ] Document any failing tests (expected failures for known issues)
- [ ] Commit working test suite

---

## 📋 Phase 3: Two-Letter Word Analysis & Fix

### Step 8: Analyze Two-Letter Word Problem
**Status**: Pending  
**Current Issue**: Two-letter words are being incorrectly lowercased  
**Tasks**:
- [ ] Document NYT style guide rules for two-letter words
- [ ] List all two-letter words that should be capitalized
- [ ] List all two-letter words that should be lowercased
- [ ] Compare with current implementation
- [ ] Create decision matrix for two-letter word handling
- [ ] Document findings in this plan or separate doc

**Known Two-Letter Words to Review**:
- Articles: a, an (lowercase)
- Prepositions: at, by, in, of, on, to (lowercase)
- Conjunctions: as, if, or (lowercase)
- Verbs: am, are, be, do, go, is, it (likely capitalize)
- Pronouns: he, me, we, us (likely capitalize)
- Adverbs: no, so, up (likely capitalize per current config)

### Step 9: Write Failing Tests (TDD)
**Status**: Pending  
**Tasks**:
- [ ] Create test suite specifically for two-letter words
- [ ] Write tests for all identified two-letter word cases
- [ ] Include tests for two-letter words at start/end of headline
- [ ] Include tests for two-letter words in middle positions
- [ ] Verify tests fail with current implementation
- [ ] Document expected vs actual behavior

### Step 10: Implement Two-Letter Word Fix
**Status**: Pending  
**Tasks**:
- [ ] Update `ALWAYS_CAPITALIZE` list based on analysis
- [ ] Update `ALWAYS_LOWERCASE` list based on analysis
- [ ] Adjust logic in `processWord()` if needed
- [ ] Run full test suite (old + new tests)
- [ ] Verify 90%+ coverage maintained
- [ ] Commit working implementation

---

## 📋 Phase 4: Polish & Documentation

### Step 11: Add Comprehensive README
**Status**: Pending  
**Tasks**:
- [ ] Create README.md with project description
- [ ] Add installation instructions (git URL method)
- [ ] Add usage examples with before/after
- [ ] Document API (`toNYTHeadlineCase` function)
- [ ] Document NYT style guide rules implemented
- [ ] Add link to NYT style guide reference
- [ ] Add troubleshooting section
- [ ] Add contributing guidelines
- [ ] Add license information (choose license)

### Step 12: Verify Full Test Coverage
**Status**: Pending  
**Tasks**:
- [ ] Run coverage report
- [ ] Identify any uncovered lines
- [ ] Add tests for edge cases not yet covered
- [ ] Verify 90%+ coverage threshold met
- [ ] Review test quality (not just coverage %)

### Step 13: Final Build Validation
**Status**: Pending  
**Tasks**:
- [ ] Run full build process
- [ ] Verify dist output structure (ESM + CommonJS)
- [ ] Test that types are correctly generated
- [ ] Run linter (if configured)
- [ ] Final test suite run
- [ ] Update CHANGELOG.md with v0.1.0 notes
- [ ] Commit all final changes
- [ ] Create git tag v0.1.0
- [ ] Push to GitHub with tags

---

## 📋 Phase 5: Integration Back to DailyKinaApp

### Step 14: Update DailyKinaApp Project
**Status**: Pending  
**Tasks**:
- [ ] Add library to package.json as git dependency
- [ ] Update import path in App.tsx
- [ ] Remove old headlineCase.ts file
- [ ] Run npm install
- [ ] Test that webapp still works correctly
- [ ] Run webapp build process
- [ ] Commit integration changes
- [ ] Update webapp documentation

---

## 🎯 Success Criteria
- ✅ Library builds successfully to ESM + CommonJS
- ✅ 90%+ test coverage achieved
- ✅ Two-letter word issue resolved
- ✅ Comprehensive documentation in README
- ✅ Successfully integrated back into DailyKinaApp
- ✅ All tests passing in both projects

---

## 📝 Notes & Decisions

### Technical Alignment with DailyKinaApp
- **TypeScript**: ES2022 target, strict mode enabled
- **Module System**: ESNext/ESM
- **Testing**: Vitest (matches project ecosystem)

### Known Issues to Address
1. **Two-letter words**: Primary focus for Phase 3
   - Current behavior may not match NYT style guide
   - Need systematic analysis and fix

### Future Enhancements (Post v0.1.0)
- Hyphen handling (capitalize after hyphens in compound words)
- Colon handling (capitalize first word after colons)
- Em-dash handling (capitalize after em-dashes)
- Acronym detection and preservation
- Proper noun handling
- Configurable rules (allow customization)
- Multiple style guide support (AP, Chicago, etc.)

---

## 📚 References
- [NYT Style Guide](https://www.nytimes.com/) - Official reference
- [tsup Documentation](https://tsup.egoist.dev/)
- [Vitest Documentation](https://vitest.dev/)

---

**Last Updated**: October 30, 2025  
**Current Phase**: Phase 1, Step 1  
**Status**: In Progress

