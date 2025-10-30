# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-10-30

### Added
- Initial release of nyt-headline-case library
- Core NYT headline capitalization rules implementation
- Two-letter word capitalization fix (am, be, do, go, he, me, my, us, we)
- Comprehensive test suite with 127+ tests
- 97% test coverage (statements: 97.14%, branches: 95.83%, functions: 100%, lines: 100%)
- TypeScript strict mode support
- Dual module support (ESM + CommonJS)
- Full TypeScript type definitions
- Comprehensive README documentation
- API documentation with usage examples

### Rules Implemented
- First and last word capitalization
- 4+ letter word capitalization
- Always-capitalize word list (verbs, pronouns, adverbs)
- Always-lowercase word list (articles, conjunctions, prepositions)
- Word length-based rules (3-letter, 1-2 letter handling)
- Punctuation preservation
- Whitespace handling

### Known Limitations
- Colon capitalization not yet implemented
- Dash capitalization not yet implemented
- Hyphenated compound capitalization not yet implemented
- Phrasal verb detection not yet implemented
- Context-dependent word handling not yet implemented
- Mixed case input normalization not yet implemented

[0.1.0]: https://github.com/tangentialism/nyt-headline-case/releases/tag/v0.1.0

