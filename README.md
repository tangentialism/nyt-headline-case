# nyt-headline-case

A TypeScript library for converting text to New York Times style headline case, following the official NYT Manual of Style and Usage.

## Features

- ✅ Implements official NYT style guide rules for headline capitalization
- ✅ TypeScript support with full type definitions
- ✅ Zero dependencies
- ✅ Dual module support (ESM + CommonJS)
- ✅ Comprehensive test suite (127+ tests, 97% coverage)
- ✅ Lightweight (~2.5 KB)

## Installation

### Via Git URL (recommended for now)

```bash
npm install git+https://github.com/tangentialism/nyt-headline-case.git
```

### Via npm (when published)

```bash
npm install nyt-headline-case
```

## Usage

### Basic Usage

```typescript
import { toNYTHeadlineCase } from 'nyt-headline-case';

const headline = toNYTHeadlineCase('the quick brown fox jumps over a lazy dog');
// Result: "The Quick Brown Fox Jumps Over a Lazy Dog"
```

### CommonJS

```javascript
const { toNYTHeadlineCase } = require('nyt-headline-case');

const headline = toNYTHeadlineCase('breaking news: a new way forward');
// Result: "Breaking News: a New Way Forward"
```

### Real-World Examples

```typescript
// News headlines
toNYTHeadlineCase('president signs new bill into law')
// → "President Signs New Bill Into Law"

// Book titles
toNYTHeadlineCase('to kill a mockingbird')
// → "To Kill a Mockingbird"

// Article titles
toNYTHeadlineCase('how to be happy in 5 easy steps')
// → "How to Be Happy in 5 Easy Steps"

// With pronouns
toNYTHeadlineCase('where we go from here')
// → "Where We Go From Here"
```

## API Reference

### `toNYTHeadlineCase(text: string): string`

Converts a string to headline case following NYT style guide rules.

**Parameters:**
- `text` (string): The input string to convert

**Returns:**
- (string): The text formatted according to NYT headline capitalization rules

**Examples:**
```typescript
toNYTHeadlineCase('the end of the world')
// → "The End of the World"

toNYTHeadlineCase('what am i doing here')
// → "What Am I Doing Here"

toNYTHeadlineCase('tale of two cities')
// → "Tale of Two Cities"
```

### `NYT_HEADLINE_CONFIG`

Configuration object containing the NYT style guide rules. Exported for reference and potential customization.

**Properties:**
- `ALWAYS_CAPITALIZE`: Array of words that should always be capitalized
- `ALWAYS_LOWERCASE`: Array of words that should always be lowercase (unless first/last)
- `MIN_CAPITALIZE_LENGTH`: Minimum word length for automatic capitalization (4)
- `CAPITALIZE_POS`: Parts of speech that should be capitalized

**Example:**
```typescript
import { NYT_HEADLINE_CONFIG } from 'nyt-headline-case';

console.log(NYT_HEADLINE_CONFIG.ALWAYS_CAPITALIZE);
// → ['i', 'am', 'be', 'do', 'go', 'is', 'he', 'it', 'me', 'my', 'us', 'we', ...]

console.log(NYT_HEADLINE_CONFIG.ALWAYS_LOWERCASE);
// → ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', ...]
```

## NYT Style Guide Rules

This library implements the following NYT headline capitalization rules:

### 1. Always Capitalize

**First and last words** of the headline are always capitalized.

**All words of 4+ letters** are capitalized.

**Specific short words** (regardless of length):
- **Verbs**: am, be, do, go, is, was
- **Pronouns**: he, i, it, me, my, us, we
- **Adverbs**: no, nor, not, off, out, so, up, yet

### 2. Always Lowercase

**Unless they are the first or last word:**
- **Articles**: a, an, the
- **Conjunctions**: and, as, but, if, or
- **Prepositions**: at, by, en, for, in, of, on, to, via
- **Legal terms**: v., vs.

### 3. Word Length Rules

- **4+ letters**: Always capitalized
- **3 letters**: Capitalized (assumed to be nouns, verbs, adjectives)
- **1-2 letters**: Capitalized only if in the always-capitalize list

### Examples by Rule

```typescript
// First/last word always capitalized
toNYTHeadlineCase('a tale of two cities')
// → "A Tale of Two Cities"
// ('a' and 'of' capitalized only because of position)

// 4+ letter words capitalized
toNYTHeadlineCase('these words never fail')
// → "These Words Never Fail"

// Two-letter verbs and pronouns capitalized
toNYTHeadlineCase('we do what we can')
// → "We Do What We Can"

// Articles and prepositions lowercase
toNYTHeadlineCase('back to the future')
// → "Back to the Future"

// Infinitives
toNYTHeadlineCase('how to be successful')
// → "How to Be Successful"
// ('to' lowercase, 'Be' capitalized as verb)
```

## Known Limitations (v0.1.0)

The following NYT rules are not yet implemented and are planned for future versions:

- ❌ **Colon capitalization**: Word after colon should be capitalized
- ❌ **Dash capitalization**: Word after dash should be capitalized  
- ❌ **Hyphenated compounds**: Both parts should be capitalized (e.g., "Cease-Fire")
- ❌ **Phrasal verbs**: Particle capitalization (e.g., "Cared For")
- ❌ **Context-dependent words**: "for" as verb vs. preposition
- ❌ **Mixed case normalization**: "tHe QuIcK" → "The Quick"

For these cases, the library will apply the basic rules but may not match NYT style exactly.

## Development

### Setup

```bash
git clone https://github.com/tangentialism/nyt-headline-case.git
cd nyt-headline-case
npm install
```

### Scripts

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Build the library
npm run build

# Type check
npm run typecheck

# Development mode (watch + build)
npm run dev
```

### Testing

The library includes 127+ tests covering:
- Input validation and edge cases
- First/last word capitalization
- Always-capitalize word list
- Always-lowercase word list
- Word length rules (1-2, 3, 4+ letters)
- Punctuation preservation
- Whitespace handling
- Real-world examples
- Two-letter word handling (verbs, pronouns)

**Run tests:**
```bash
npm test
```

**Check coverage:**
```bash
npm run test:coverage
```

Current coverage: **97% statements, 96% branches, 100% functions, 100% lines**

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Discuss first**: Open an issue to discuss major changes
2. **Test-driven**: Write tests before implementation
3. **Coverage**: Maintain 90%+ test coverage
4. **Documentation**: Update README and code comments
5. **Commit style**: Use clear, descriptive commit messages

### Adding New Features

1. Add failing tests (TDD approach)
2. Implement the feature
3. Ensure all tests pass
4. Update documentation
5. Submit PR with description

## License

MIT License - see [LICENSE](LICENSE) file for details

## References

- [New York Times Manual of Style and Usage](https://www.nytimes.com/)
- [NYT Style Guide - Capitalization](https://www.nytimes.com/)

## Changelog

### v0.1.0 (Current)

- ✅ Initial release
- ✅ Core NYT headline case rules implemented
- ✅ Two-letter word fix (am, be, do, go, he, me, my, us, we)
- ✅ 127+ comprehensive tests
- ✅ 97% test coverage
- ✅ TypeScript strict mode
- ✅ Dual module support (ESM + CommonJS)

## Author

David Yee

## Acknowledgments

- Based on the official New York Times Manual of Style and Usage
- Inspired by the need for accurate headline capitalization in modern web applications

