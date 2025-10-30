import { describe, it, expect } from 'vitest';
import { toNYTHeadlineCase, NYT_HEADLINE_CONFIG } from '../src/index.js';

describe('toNYTHeadlineCase', () => {
  describe('Input Validation & Edge Cases', () => {
    it('should handle empty string', () => {
      expect(toNYTHeadlineCase('')).toBe('');
    });

    it('should handle null input', () => {
      // @ts-expect-error Testing invalid input
      expect(toNYTHeadlineCase(null)).toBe('');
    });

    it('should handle undefined input', () => {
      // @ts-expect-error Testing invalid input
      expect(toNYTHeadlineCase(undefined)).toBe('');
    });

    it('should handle non-string input', () => {
      // @ts-expect-error Testing invalid input
      expect(toNYTHeadlineCase(123)).toBe('');
    });

    it('should handle string with only whitespace', () => {
      expect(toNYTHeadlineCase('   ')).toBe('');
    });

    it('should handle single word', () => {
      expect(toNYTHeadlineCase('hello')).toBe('Hello');
    });

    it('should handle single lowercase letter', () => {
      expect(toNYTHeadlineCase('a')).toBe('A');
    });

    it('should handle single uppercase letter', () => {
      expect(toNYTHeadlineCase('A')).toBe('A');
    });
  });

  describe('First and Last Word Capitalization', () => {
    it('should capitalize first word', () => {
      expect(toNYTHeadlineCase('the quick brown fox')).toBe('The Quick Brown Fox');
    });

    it('should capitalize last word', () => {
      expect(toNYTHeadlineCase('jump over the')).toBe('Jump Over The');
    });

    it('should capitalize first word even if normally lowercase', () => {
      expect(toNYTHeadlineCase('a tale of two cities')).toBe('A Tale of Two Cities');
    });

    it('should capitalize last word even if normally lowercase', () => {
      expect(toNYTHeadlineCase('what is this for')).toBe('What Is This For');
    });

    it('should capitalize both first and last in two-word headline', () => {
      expect(toNYTHeadlineCase('the end')).toBe('The End');
    });
  });

  describe('Always-Capitalize Words', () => {
    it('should capitalize "is"', () => {
      expect(toNYTHeadlineCase('this is great')).toBe('This Is Great');
    });

    it('should capitalize "it"', () => {
      expect(toNYTHeadlineCase('how it works')).toBe('How It Works');
    });

    it('should capitalize "no"', () => {
      expect(toNYTHeadlineCase('there is no way')).toBe('There Is No Way');
    });

    it('should capitalize "not"', () => {
      expect(toNYTHeadlineCase('this is not right')).toBe('This Is Not Right');
    });

    it('should capitalize "off"', () => {
      expect(toNYTHeadlineCase('turn it off now')).toBe('Turn It Off Now');
    });

    it('should capitalize "out"', () => {
      expect(toNYTHeadlineCase('check it out today')).toBe('Check It Out Today');
    });

    it('should capitalize "so"', () => {
      expect(toNYTHeadlineCase('this is so good')).toBe('This Is So Good');
    });

    it('should capitalize "up"', () => {
      expect(toNYTHeadlineCase('sign up now')).toBe('Sign Up Now');
    });

    it('should capitalize "yet"', () => {
      expect(toNYTHeadlineCase('not done yet')).toBe('Not Done Yet');
    });

    it('should capitalize "nor"', () => {
      expect(toNYTHeadlineCase('neither here nor there')).toBe('Neither Here Nor There');
    });

    it('should capitalize "i" (pronoun)', () => {
      expect(toNYTHeadlineCase('when i grow up')).toBe('When I Grow Up');
    });
  });

  describe('Always-Lowercase Words', () => {
    it('should lowercase "a" in middle position', () => {
      expect(toNYTHeadlineCase('this is a test')).toBe('This Is a Test');
    });

    it('should lowercase "an" in middle position', () => {
      expect(toNYTHeadlineCase('this is an example')).toBe('This Is an Example');
    });

    it('should lowercase "and" in middle position', () => {
      expect(toNYTHeadlineCase('you and me')).toBe('You and Me');
    });

    it('should lowercase "as" in middle position', () => {
      expect(toNYTHeadlineCase('known as the best')).toBe('Known as the Best');
    });

    it('should lowercase "at" in middle position', () => {
      expect(toNYTHeadlineCase('look at this')).toBe('Look at This');
    });

    it('should lowercase "but" in middle position', () => {
      expect(toNYTHeadlineCase('small but mighty')).toBe('Small but Mighty');
    });

    it('should lowercase "by" in middle position', () => {
      expect(toNYTHeadlineCase('created by design')).toBe('Created by Design');
    });

    it('should lowercase "for" in middle position', () => {
      expect(toNYTHeadlineCase('made for you')).toBe('Made for You');
    });

    it('should lowercase "if" in middle position', () => {
      expect(toNYTHeadlineCase('only if necessary')).toBe('Only if Necessary');
    });

    it('should lowercase "in" in middle position', () => {
      expect(toNYTHeadlineCase('lost in translation')).toBe('Lost in Translation');
    });

    it('should lowercase "of" in middle position', () => {
      expect(toNYTHeadlineCase('end of days')).toBe('End of Days');
    });

    it('should lowercase "on" in middle position', () => {
      expect(toNYTHeadlineCase('based on facts')).toBe('Based on Facts');
    });

    it('should lowercase "or" in middle position', () => {
      expect(toNYTHeadlineCase('now or never')).toBe('Now or Never');
    });

    it('should lowercase "the" in middle position', () => {
      expect(toNYTHeadlineCase('over the rainbow')).toBe('Over the Rainbow');
    });

    it('should lowercase "to" in middle position', () => {
      expect(toNYTHeadlineCase('back to school')).toBe('Back to School');
    });

    it('should lowercase "via" in middle position', () => {
      expect(toNYTHeadlineCase('sent via email')).toBe('Sent via Email');
    });

    it('should lowercase "v." in middle position', () => {
      expect(toNYTHeadlineCase('smith v. jones case')).toBe('Smith v. Jones Case');
    });

    it('should lowercase "vs." in middle position', () => {
      expect(toNYTHeadlineCase('cats vs. dogs debate')).toBe('Cats vs. Dogs Debate');
    });
  });

  describe('4+ Letter Words', () => {
    it('should capitalize 4-letter words', () => {
      expect(toNYTHeadlineCase('this word must stay')).toBe('This Word Must Stay');
    });

    it('should capitalize 5-letter words', () => {
      expect(toNYTHeadlineCase('these words never fail')).toBe('These Words Never Fail');
    });

    it('should capitalize long words', () => {
      expect(toNYTHeadlineCase('extraordinary accomplishment today')).toBe('Extraordinary Accomplishment Today');
    });
  });

  describe('3-Letter Words', () => {
    it('should capitalize 3-letter words not in lowercase list', () => {
      expect(toNYTHeadlineCase('the dog ran')).toBe('The Dog Ran');
    });

    it('should capitalize 3-letter verbs', () => {
      expect(toNYTHeadlineCase('we can try')).toBe('We Can Try');
    });

    it('should capitalize 3-letter nouns', () => {
      expect(toNYTHeadlineCase('the cat sat')).toBe('The Cat Sat');
    });
  });

  describe('1-2 Letter Words', () => {
    it('should lowercase 2-letter words not in capitalize list', () => {
      expect(toNYTHeadlineCase('go to the park')).toBe('Go to the Park');
    });

    it('should lowercase single-letter article "a"', () => {
      expect(toNYTHeadlineCase('take a break')).toBe('Take a Break');
    });

    it('should capitalize "i" (pronoun)', () => {
      expect(toNYTHeadlineCase('what i believe')).toBe('What I Believe');
    });

    it('should lowercase "me" in middle position', () => {
      expect(toNYTHeadlineCase('tell me more')).toBe('Tell me More');
    });

    it('should lowercase "we" in middle position', () => {
      expect(toNYTHeadlineCase('where we go')).toBe('Where we Go');
    });

    it('should capitalize "is" (always-capitalize list)', () => {
      expect(toNYTHeadlineCase('what is this')).toBe('What Is This');
    });

    it('should capitalize "it" (always-capitalize list)', () => {
      expect(toNYTHeadlineCase('how it goes')).toBe('How It Goes');
    });
  });

  describe('Punctuation Preservation', () => {
    it('should preserve punctuation at end of words', () => {
      expect(toNYTHeadlineCase('hello, world')).toBe('Hello, World');
    });

    it('should handle comma-separated words', () => {
      // Current behavior: comma doesn't trigger capitalization
      // "we" is treated as middle word (2-letter, not in capitalize list)
      expect(toNYTHeadlineCase('yes, we can')).toBe('Yes, we Can');
    });

    it('should handle multiple punctuation marks', () => {
      expect(toNYTHeadlineCase('wait... what?')).toBe('Wait... What?');
    });

    it('should handle exclamation marks', () => {
      expect(toNYTHeadlineCase('wow! amazing!')).toBe('Wow! Amazing!');
    });

    it('should handle question marks', () => {
      expect(toNYTHeadlineCase('what? where?')).toBe('What? Where?');
    });

    it('should handle apostrophes', () => {
      expect(toNYTHeadlineCase("it's a wonderful day")).toBe("It's a Wonderful Day");
    });

    it('should handle hyphens in words', () => {
      expect(toNYTHeadlineCase('state-of-the-art design')).toBe('State-of-the-art Design');
    });

    it('should handle parentheses', () => {
      // Current behavior: word in parentheses gets capitalized as standalone word
      expect(toNYTHeadlineCase('hello (world) today')).toBe('Hello (World) Today');
    });

    it('should handle quotes', () => {
      // Current behavior: first word after quote is capitalized
      expect(toNYTHeadlineCase('"hello world" says it all')).toBe('"Hello World" Says It All');
    });
  });

  describe('Whitespace Handling', () => {
    it('should preserve single spaces', () => {
      expect(toNYTHeadlineCase('hello world')).toBe('Hello World');
    });

    it('should preserve multiple spaces', () => {
      expect(toNYTHeadlineCase('hello  world')).toBe('Hello  World');
    });

    it('should trim leading whitespace', () => {
      expect(toNYTHeadlineCase('  hello world')).toBe('Hello World');
    });

    it('should trim trailing whitespace', () => {
      expect(toNYTHeadlineCase('hello world  ')).toBe('Hello World');
    });

    it('should handle tabs', () => {
      expect(toNYTHeadlineCase('hello\tworld')).toBe('Hello\tWorld');
    });
  });

  describe('Real-World Examples', () => {
    it('should handle classic book title', () => {
      expect(toNYTHeadlineCase('to kill a mockingbird')).toBe('To Kill a Mockingbird');
    });

    it('should handle news headline', () => {
      expect(toNYTHeadlineCase('president signs new bill into law')).toBe('President Signs New Bill Into Law');
    });

    it('should handle article title', () => {
      expect(toNYTHeadlineCase('the best way to learn javascript')).toBe('The Best Way to Learn Javascript');
    });

    it('should handle complex headline', () => {
      expect(toNYTHeadlineCase('how to build a website in 5 days or less')).toBe('How to Build a Website in 5 Days or Less');
    });

    it('should handle mixed case input', () => {
      // Current behavior: only capitalizes first letter, doesn't normalize rest
      expect(toNYTHeadlineCase('tHe QuIcK bRoWn FoX')).toBe('THe QuIcK BRoWn FoX');
    });

    it('should handle all caps input', () => {
      // Current behavior: only capitalizes first letter, doesn't normalize rest
      expect(toNYTHeadlineCase('BREAKING NEWS TODAY')).toBe('BREAKING NEWS TODAY');
    });

    it('should handle sentence with multiple lowercase words', () => {
      expect(toNYTHeadlineCase('a tale of love and loss in the city')).toBe('A Tale of Love and Loss in the City');
    });
  });

  describe('Configuration Export', () => {
    it('should export NYT_HEADLINE_CONFIG', () => {
      expect(NYT_HEADLINE_CONFIG).toBeDefined();
    });

    it('should have ALWAYS_CAPITALIZE array', () => {
      expect(Array.isArray(NYT_HEADLINE_CONFIG.ALWAYS_CAPITALIZE)).toBe(true);
      expect(NYT_HEADLINE_CONFIG.ALWAYS_CAPITALIZE.length).toBeGreaterThan(0);
    });

    it('should have ALWAYS_LOWERCASE array', () => {
      expect(Array.isArray(NYT_HEADLINE_CONFIG.ALWAYS_LOWERCASE)).toBe(true);
      expect(NYT_HEADLINE_CONFIG.ALWAYS_LOWERCASE.length).toBeGreaterThan(0);
    });

    it('should have MIN_CAPITALIZE_LENGTH set to 4', () => {
      expect(NYT_HEADLINE_CONFIG.MIN_CAPITALIZE_LENGTH).toBe(4);
    });

    it('should have CAPITALIZE_POS array', () => {
      expect(Array.isArray(NYT_HEADLINE_CONFIG.CAPITALIZE_POS)).toBe(true);
    });
  });
});
