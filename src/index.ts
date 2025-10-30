/**
 * NYT Style Guide Headline Capitalization Utility
 * 
 * This utility implements the New York Times style guide rules for headline capitalization,
 * following the official NYT editorial standards for consistent headline formatting.
 * 
 * @see NYT Style Guide (to be implemented based on provided guidelines)
 */

/**
 * Converts a string to headline case following NYT style guide rules
 * 
 * @param text - The input string to convert to headline case
 * @returns The text formatted according to NYT headline capitalization rules
 * 
 * @example
 * ```typescript
 * const headline = toNYTHeadlineCase("the quick brown fox jumps over a lazy dog");
 * // Returns: "The Quick Brown Fox Jumps Over a Lazy Dog"
 * ```
 */
export function toNYTHeadlineCase(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }
  
  // Clean and split the text into words, preserving spaces and punctuation
  const words = text.trim().split(/(\s+)/);
  
  // Filter out empty strings and get only actual words for processing
  const actualWords = words.filter(word => word.trim() && !/^\s+$/.test(word));
  
  // Track the current word index properly
  let currentWordIndex = -1;
  
  const processedWords = words.map((segment) => {
    // If this segment is just whitespace, return as-is
    if (/^\s+$/.test(segment)) {
      return segment;
    }
    
    // If this segment is empty, return as-is
    if (!segment.trim()) {
      return segment;
    }
    
    // Increment word index for each actual word we process
    currentWordIndex++;
    const isFirstWord = currentWordIndex === 0;
    const isLastWord = currentWordIndex === actualWords.length - 1;
    
    return processWord(segment, isFirstWord, isLastWord);
  });
  
  return processedWords.join('');
}

/**
 * Processes a single word according to NYT headline case rules
 */
function processWord(word: string, isFirstWord: boolean, isLastWord: boolean): string {
  const cleanWord = word.toLowerCase();
  // Extract just the alphabetic part of the word for rule checking
  const alphabeticWord = cleanWord.replace(/^[^a-z]*|[^a-z]*$/g, '');
  const { ALWAYS_CAPITALIZE, ALWAYS_LOWERCASE, MIN_CAPITALIZE_LENGTH } = NYT_HEADLINE_CONFIG;
  
  // Rule 1: Always capitalize first and last words
  if (isFirstWord || isLastWord) {
    return capitalizeWord(word);
  }
  
  // Rule 2: Check against always-capitalize list
  if (ALWAYS_CAPITALIZE.includes(alphabeticWord)) {
    return capitalizeWord(word);
  }
  
  // Rule 3: Check against always-lowercase list
  if (ALWAYS_LOWERCASE.includes(alphabeticWord)) {
    // Preserve punctuation but keep the alphabetic part lowercase
    return word.replace(/[a-zA-Z]+/, alphabeticWord);
  }
  
  // Rule 4: Capitalize words of 4+ letters (general rule for nouns, adjectives, adverbs, pronouns, verbs)
  if (alphabeticWord.length >= MIN_CAPITALIZE_LENGTH) {
    return capitalizeWord(word);
  }
  
  // Rule 5: For words under 4 letters that aren't in the lowercase list, capitalize them
  // (NYT rule: capitalize nouns, adjectives, adverbs, pronouns, verbs - we assume 3-letter words are likely these)
  if (alphabeticWord.length >= 3) {
    return capitalizeWord(word);
  }
  
  // Rule 6: Very short words (1-2 letters) that aren't in either list, default to lowercase
  return word.replace(/[a-zA-Z]+/, alphabeticWord);
}

/**
 * Capitalizes the first letter of a word while preserving punctuation
 */
function capitalizeWord(word: string): string {
  if (!word) return word;
  
  // Find the first alphabetic character and capitalize it
  return word.replace(/[a-zA-Z]/, (match) => match.toUpperCase());
}

/**
 * Configuration object for NYT headline case rules
 * Based on the official NYT Style Guide
 */
export const NYT_HEADLINE_CONFIG = {
  // Words that should always be capitalized (regardless of length)
  ALWAYS_CAPITALIZE: [
    // Single letter pronouns
    'i',
    // Two-letter verbs
    'am', 'be', 'do', 'go', 'is',
    // Two-letter pronouns
    'he', 'it', 'me', 'my', 'us', 'we',
    // Two/three-letter adverbs and other words
    'no', 'nor', 'not', 'off', 'out', 'so', 'up', 'was', 'yet'
  ] as string[],
  
  // Words that should always be lowercase (unless first/last word or after dash/colon)
  ALWAYS_LOWERCASE: [
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in', 'of', 'on', 'or', 'the', 'to', 'v.', 'vs.', 'via'
  ] as string[],
  
  // Minimum length for automatic capitalization (4+ letters get capitalized)
  MIN_CAPITALIZE_LENGTH: 4,
  
  // Parts of speech that should be capitalized (will be used in future implementation)
  CAPITALIZE_POS: ['noun', 'adjective', 'adverb', 'pronoun', 'verb'] as string[]
};

export default toNYTHeadlineCase;
