# Two-Letter Word Analysis

## Problem Statement
The current implementation incorrectly handles two-letter words. Some two-letter words should be capitalized (verbs, pronouns, adverbs) while others should be lowercase (articles, prepositions, conjunctions).

## NYT Official Rules for Two-Letter Words

### CAPITALIZE (Must be in ALWAYS_CAPITALIZE list):
- **Be** - verb (infinitive/present tense)
- **Is** - verb ✅ (already in list)
- **It** - pronoun ✅ (already in list)
- **No** - adverb ✅ (already in list)
- **So** - adverb/conjunction ✅ (already in list)
- **Up** - adverb/preposition ✅ (already in list)

### LOWERCASE (Must be in ALWAYS_LOWERCASE list):
- **a** - article ✅ (already in list)
- **an** - article ✅ (already in list - wait, "an" is 2 letters!)
- **as** - preposition/conjunction ✅ (already in list)
- **at** - preposition ✅ (already in list)
- **by** - preposition ✅ (already in list)
- **en** - preposition (as in "en Route") ✅ (already in list)
- **if** - conjunction ✅ (already in list)
- **in** - preposition ✅ (already in list)
- **of** - preposition ✅ (already in list)
- **on** - preposition ✅ (already in list)
- **or** - conjunction ✅ (already in list)
- **to** - preposition ✅ (already in list)

## Current Implementation Issues

### Missing from ALWAYS_CAPITALIZE:
1. ❌ **"be"** - Currently not in the capitalize list
   - Test: "to be or not to be" → Currently: "To be or Not to Be" 
   - Expected: "To Be or Not to Be"

### Incorrectly Handled (Default Rule Problem):
The current Rule 6 says: "Very short words (1-2 letters) that aren't in either list, default to lowercase"

This causes problems with two-letter words that SHOULD be capitalized but aren't in the lists:

2. ❌ **"me"** - pronoun (should be capitalized per NYT rules: "capitalize pronouns")
   - Current: "tell me more" → "Tell me More" (lowercase)
   - Expected: "Tell Me More" (capitalize)
   - Note: BUT in middle position, prepositions can be lowercase
   - Conflict: Is "me" a pronoun (capitalize) or treated like a preposition?

3. ❌ **"we"** - pronoun (should be capitalized per NYT rules: "capitalize pronouns")
   - Current: "where we go" → "Where we Go" (lowercase)
   - Expected: "Where We Go" (capitalize)

4. ❌ **"he"** - pronoun (should be capitalized)
   - Current: defaults to lowercase
   - Expected: capitalize

5. ❌ **"us"** - pronoun (should be capitalized)
   - Current: defaults to lowercase
   - Expected: capitalize

## NYT Rule Interpretation Challenge

The NYT rule states: "capitalize nouns, adjectives, adverbs, pronouns and verbs"

For **two-letter words specifically**, the rule gives an explicit list:

**Capitalize**: Be, Is, It, No, Nor (3 letters), Not (3 letters), Off (3 letters), Out (3 letters), So, Up, Was, Yet (3 letters)

Two-letter words in capitalize list:
- Be, Is, It, No, So, Up

**Lowercase**: a, an, and (3), as, at, but (3), by, en, for (3), if, in, of, on, or, the (3), to, v., vs., via (3)

Two-letter words in lowercase list:
- a, as, at, by, en, if, in, of, on, or, to

## Other Two-Letter Words Not Explicitly Listed

According to NYT: "capitalize nouns, adjectives, adverbs, pronouns and verbs"

### Pronouns (2 letters) - Should Capitalize:
- **he** - personal pronoun → CAPITALIZE
- **me** - personal pronoun → CAPITALIZE  
- **we** - personal pronoun → CAPITALIZE
- **us** - personal pronoun → CAPITALIZE
- **my** - possessive pronoun → CAPITALIZE

### Verbs (2 letters) - Should Capitalize:
- **am** - verb (to be) → CAPITALIZE
- **do** - verb → CAPITALIZE
- **go** - verb → CAPITALIZE
- **be** - verb (infinitive) → CAPITALIZE ⭐ MISSING!

### Adverbs (2 letters) - Should Capitalize:
- **so** - adverb ✅ (already in list)
- **no** - adverb ✅ (already in list)  
- **up** - can be adverb ✅ (already in list)

### Articles (2 letters) - Should Lowercase:
- **an** - article ✅ (already in list)

### Prepositions (2 letters) - Should Lowercase:
- **to**, **of**, **in**, **on**, **at**, **by**, **as** ✅ (all in list)

### Conjunctions (2 letters) - Should Lowercase:
- **or**, **if**, **as** ✅ (all in list)

## Decision Matrix for Two-Letter Words

| Word | Part of Speech | Rule | Current Behavior | Needs Fix? |
|------|---------------|------|------------------|------------|
| be | verb | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| am | verb | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| do | verb | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| go | verb | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| is | verb | CAPITALIZE | ✅ Correct | ✅ Already in list |
| it | pronoun | CAPITALIZE | ✅ Correct | ✅ Already in list |
| he | pronoun | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| me | pronoun | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| we | pronoun | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| us | pronoun | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| my | pronoun | CAPITALIZE | lowercase (Rule 6) | ✅ YES - Add to ALWAYS_CAPITALIZE |
| no | adverb | CAPITALIZE | ✅ Correct | ✅ Already in list |
| so | adverb | CAPITALIZE | ✅ Correct | ✅ Already in list |
| up | adverb/prep | CAPITALIZE | ✅ Correct | ✅ Already in list |
| a | article | lowercase | ✅ Correct | ✅ Already in list |
| an | article | lowercase | ✅ Correct | ✅ Already in list |
| to | preposition | lowercase | ✅ Correct | ✅ Already in list |
| of | preposition | lowercase | ✅ Correct | ✅ Already in list |
| in | preposition | lowercase | ✅ Correct | ✅ Already in list |
| on | preposition | lowercase | ✅ Correct | ✅ Already in list |
| at | preposition | lowercase | ✅ Correct | ✅ Already in list |
| by | preposition | lowercase | ✅ Correct | ✅ Already in list |
| as | preposition | lowercase | ✅ Correct | ✅ Already in list |
| or | conjunction | lowercase | ✅ Correct | ✅ Already in list |
| if | conjunction | lowercase | ✅ Correct | ✅ Already in list |
| en | preposition | lowercase | ✅ Correct | ✅ Already in list |

## Proposed Fix

### Add to ALWAYS_CAPITALIZE list:
```typescript
ALWAYS_CAPITALIZE: [
  // Existing
  'i', 'is', 'it', 'no', 'nor', 'not', 'off', 'out', 'so', 'up', 'yet',
  // NEW: Two-letter verbs
  'am', 'be', 'do', 'go',
  // NEW: Two-letter pronouns  
  'he', 'me', 'my', 'us', 'we',
  // Note: 'was' is 3 letters, already should be capitalized by Rule 5
]
```

### Total additions needed: 9 words
- Verbs: am, be, do, go (4 words)
- Pronouns: he, me, my, us, we (5 words)

## Edge Cases to Consider

1. **"to be"** - infinitive: Both words should follow rules
   - "to" = preposition (lowercase)
   - "be" = verb (CAPITALIZE)
   - Result: "to Be" ✅

2. **"me" at end of headline**:
   - "you and me" → "You and Me" (last word always caps)
   - Currently works due to Rule 1

3. **Context-dependent words**:
   - Some words like "up", "in", "on" can be prepositions OR adverbs
   - NYT says capitalize when used as adverbs (e.g., "Drops In", "Drones On")
   - Current implementation can't detect this (would need NLP)
   - For v0.1.0: Keep "up", "in", "on" in CAPITALIZE list as simpler approach

## Implementation Priority for v0.1.0

**HIGH PRIORITY** (Core two-letter word fix):
1. ✅ Add "be", "am", "do", "go" to ALWAYS_CAPITALIZE
2. ✅ Add "he", "me", "we", "us", "my" to ALWAYS_CAPITALIZE
3. ✅ Verify all existing tests still pass
4. ✅ Add specific tests for these words

**FUTURE** (Advanced context detection - post v0.1.0):
- Detect phrasal verbs to capitalize particles
- Detect infinitives for special handling
- Detect prepositions vs. adverbs by context

## Success Criteria

After fix, these should work:
- ✅ "to be or not to be" → "To Be or Not to Be"
- ✅ "you and me" → "You and Me"  
- ✅ "where we go" → "Where We Go"
- ✅ "tell me more" → "Tell Me More"
- ✅ "what am I" → "What Am I"
- ✅ "let us go" → "Let Us Go"
- ✅ "how do we know" → "How Do We Know"

