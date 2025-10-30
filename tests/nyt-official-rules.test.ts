/**
 * Tests based on the official NYT Style Guide rules for headline capitalization
 * 
 * Reference: NYT Manual of Style and Usage
 * 
 * These tests document the official rules and will help identify gaps
 * in the current implementation.
 */

import { describe, it, expect } from 'vitest';
import { toNYTHeadlineCase } from '../src/index.js';

describe('NYT Official Rules - Baseline Capitalization', () => {
  describe('Word Categories (4+ letters)', () => {
    it('should capitalize nouns of 4+ letters', () => {
      expect(toNYTHeadlineCase('the house stands tall')).toBe('The House Stands Tall');
    });

    it('should capitalize adjectives of 4+ letters', () => {
      expect(toNYTHeadlineCase('the quick brown fox')).toBe('The Quick Brown Fox');
    });

    it('should capitalize verbs of 4+ letters', () => {
      expect(toNYTHeadlineCase('they jump over fences')).toBe('They Jump Over Fences');
    });

    it('should capitalize adverbs of 4+ letters', () => {
      expect(toNYTHeadlineCase('she runs very quickly')).toBe('She Runs Very Quickly');
    });

    it('should capitalize pronouns of 4+ letters', () => {
      expect(toNYTHeadlineCase('they know that this matters')).toBe('They Know That This Matters');
    });

    it('should capitalize all words of 4+ letters regardless of part of speech', () => {
      expect(toNYTHeadlineCase('with from into onto')).toBe('With From Into Onto');
    });
  });

  describe('Required Capitalize List', () => {
    it('should capitalize "Be" (verb)', () => {
      expect(toNYTHeadlineCase('to be or not to be')).toBe('To Be or Not to Be');
    });

    it('should capitalize "Is" (verb)', () => {
      expect(toNYTHeadlineCase('what is the answer')).toBe('What Is the Answer');
    });

    it('should capitalize "It" (pronoun)', () => {
      expect(toNYTHeadlineCase('how it works today')).toBe('How It Works Today');
    });

    it('should capitalize "No" (adverb)', () => {
      expect(toNYTHeadlineCase('there is no time')).toBe('There Is No Time');
    });

    it('should capitalize "Nor" (conjunction)', () => {
      expect(toNYTHeadlineCase('neither rain nor snow')).toBe('Neither Rain Nor Snow');
    });

    it('should capitalize "Not" (adverb)', () => {
      expect(toNYTHeadlineCase('this is not the end')).toBe('This Is Not the End');
    });

    it('should capitalize "Off"', () => {
      expect(toNYTHeadlineCase('turn it off now')).toBe('Turn It Off Now');
    });

    it('should capitalize "Out"', () => {
      expect(toNYTHeadlineCase('check it out here')).toBe('Check It Out Here');
    });

    it('should capitalize "So" (adverb/conjunction)', () => {
      expect(toNYTHeadlineCase('this is so important')).toBe('This Is So Important');
    });

    it('should capitalize "Up"', () => {
      expect(toNYTHeadlineCase('sign up for updates')).toBe('Sign Up for Updates');
    });

    it('should capitalize "Was" (verb)', () => {
      expect(toNYTHeadlineCase('it was the best')).toBe('It Was the Best');
    });

    it('should capitalize "Yet" (adverb)', () => {
      expect(toNYTHeadlineCase('not finished yet')).toBe('Not Finished Yet');
    });
  });

  describe('Required Lowercase List', () => {
    it('should lowercase "a" (article)', () => {
      expect(toNYTHeadlineCase('this is a test')).toBe('This Is a Test');
    });

    it('should lowercase "an" (article)', () => {
      expect(toNYTHeadlineCase('this is an example')).toBe('This Is an Example');
    });

    it('should lowercase "and" (conjunction)', () => {
      expect(toNYTHeadlineCase('you and me forever')).toBe('You and Me Forever');
    });

    it('should lowercase "as" (preposition/conjunction)', () => {
      expect(toNYTHeadlineCase('known as the best')).toBe('Known as the Best');
    });

    it('should lowercase "at" (preposition)', () => {
      expect(toNYTHeadlineCase('look at this now')).toBe('Look at This Now');
    });

    it('should lowercase "but" (conjunction)', () => {
      expect(toNYTHeadlineCase('small but mighty')).toBe('Small but Mighty');
    });

    it('should lowercase "by" (preposition)', () => {
      expect(toNYTHeadlineCase('written by the author')).toBe('Written by the Author');
    });

    it('should lowercase "en" in "en Route"', () => {
      expect(toNYTHeadlineCase('troops en route today')).toBe('Troops en Route Today');
    });

    it('should lowercase "for" (preposition)', () => {
      expect(toNYTHeadlineCase('made for you today')).toBe('Made for You Today');
    });

    it('should lowercase "if" (conjunction)', () => {
      expect(toNYTHeadlineCase('only if necessary')).toBe('Only if Necessary');
    });

    it('should lowercase "in" (preposition)', () => {
      expect(toNYTHeadlineCase('lost in translation')).toBe('Lost in Translation');
    });

    it('should lowercase "of" (preposition)', () => {
      expect(toNYTHeadlineCase('tale of two cities')).toBe('Tale of Two Cities');
    });

    it('should lowercase "on" (preposition)', () => {
      expect(toNYTHeadlineCase('based on true events')).toBe('Based on True Events');
    });

    it('should lowercase "or" (conjunction)', () => {
      expect(toNYTHeadlineCase('now or never decides')).toBe('Now or Never Decides');
    });

    it('should lowercase "the" (article)', () => {
      expect(toNYTHeadlineCase('over the rainbow now')).toBe('Over the Rainbow Now');
    });

    it('should lowercase "to" (preposition)', () => {
      expect(toNYTHeadlineCase('back to the future')).toBe('Back to the Future');
    });

    it('should lowercase "v." in legal contexts', () => {
      expect(toNYTHeadlineCase('smith v. jones decided')).toBe('Smith v. Jones Decided');
    });

    it('should lowercase "vs."', () => {
      expect(toNYTHeadlineCase('cats vs. dogs debate')).toBe('Cats vs. Dogs Debate');
    });

    it('should lowercase "via"', () => {
      expect(toNYTHeadlineCase('sent via email today')).toBe('Sent via Email Today');
    });
  });

  describe('Infinitives', () => {
    it('should handle "to Be" - capitalize Be', () => {
      expect(toNYTHeadlineCase('how to be happy')).toBe('How to Be Happy');
    });

    it('should handle "to Do" - capitalize Do', () => {
      expect(toNYTHeadlineCase('what to do next')).toBe('What to Do Next');
    });

    it('should handle "to Go" - capitalize Go', () => {
      expect(toNYTHeadlineCase('where to go today')).toBe('Where to Go Today');
    });

    it('should handle infinitive with 4+ letter verb', () => {
      expect(toNYTHeadlineCase('how to learn quickly')).toBe('How to Learn Quickly');
    });

    it('should handle infinitive at start', () => {
      expect(toNYTHeadlineCase('to be or not')).toBe('To Be or Not');
    });
  });

  describe('Position Rules', () => {
    it('should always capitalize first word', () => {
      expect(toNYTHeadlineCase('a tale of cities')).toBe('A Tale of Cities');
    });

    it('should always capitalize last word', () => {
      expect(toNYTHeadlineCase('what is this for')).toBe('What Is This For');
    });

    it('should capitalize first word even if normally lowercase', () => {
      expect(toNYTHeadlineCase('and so it begins')).toBe('And So It Begins');
    });

    it('should capitalize last word even if normally lowercase', () => {
      expect(toNYTHeadlineCase('the end is the')).toBe('The End Is The');
    });
  });

  describe('Prepositions as Adverbs', () => {
    it('should capitalize preposition used as adverb - "Drops In"', () => {
      expect(toNYTHeadlineCase('mayor drops in')).toBe('Mayor Drops In');
    });

    it('should capitalize preposition used as adverb - "Drones On"', () => {
      expect(toNYTHeadlineCase('meeting drones on')).toBe('Meeting Drones On');
    });

    it('should capitalize phrasal verb particle - "Cared For"', () => {
      expect(toNYTHeadlineCase('cared for by mother')).toBe('Cared For by Mother');
    });

    it('should capitalize phrasal verb particle - "Attended To"', () => {
      expect(toNYTHeadlineCase('attended to in emergency')).toBe('Attended To in Emergency');
    });

    it('should lowercase "on" in "Call on" when followed by object', () => {
      expect(toNYTHeadlineCase('mayor calls on president')).toBe('Mayor Calls on President');
    });

    it('should lowercase "for" in "Call for" when followed by object', () => {
      expect(toNYTHeadlineCase('senator calls for action')).toBe('Senator Calls for Action');
    });

    it('should lowercase "on" in "Wait on" when followed by object', () => {
      expect(toNYTHeadlineCase('they wait on tables')).toBe('They Wait on Tables');
    });

    it('should capitalize "On" when particle not preposition', () => {
      expect(toNYTHeadlineCase('customers were waited on')).toBe('Customers Were Waited On');
    });

    it('should capitalize "for" when it means supports/advocates', () => {
      expect(toNYTHeadlineCase('mayor for health plan')).toBe('Mayor For Health Plan');
    });
  });

  describe('Punctuation - Colon Rules', () => {
    it('should capitalize word after colon in headline', () => {
      expect(toNYTHeadlineCase('breaking news: storm approaches')).toBe('Breaking News: Storm Approaches');
    });

    it('should capitalize even lowercase word after colon', () => {
      expect(toNYTHeadlineCase('the answer: a new way')).toBe('The Answer: A New Way');
    });

    it('should capitalize word after colon even if article', () => {
      expect(toNYTHeadlineCase('question: the real issue')).toBe('Question: The Real Issue');
    });
  });

  describe('Punctuation - Dash Rules', () => {
    it('should capitalize word directly after dash', () => {
      expect(toNYTHeadlineCase('breaking news - storm approaching')).toBe('Breaking News - Storm Approaching');
    });

    it('should capitalize even lowercase word after dash', () => {
      expect(toNYTHeadlineCase('the plan - a new approach')).toBe('The Plan - A New Approach');
    });

    it('should capitalize article after dash', () => {
      expect(toNYTHeadlineCase('update - the latest news')).toBe('Update - The Latest News');
    });
  });

  describe('Hyphenated Compounds - General Rule', () => {
    it('should capitalize both parts of hyphenated compound - "Cease-Fire"', () => {
      expect(toNYTHeadlineCase('cease-fire declared today')).toBe('Cease-Fire Declared Today');
    });

    it('should capitalize both parts - "Able-Bodied"', () => {
      expect(toNYTHeadlineCase('able-bodied workers needed')).toBe('Able-Bodied Workers Needed');
    });

    it('should capitalize both parts - "Sit-In"', () => {
      expect(toNYTHeadlineCase('students hold sit-in')).toBe('Students Hold Sit-In');
    });

    it('should capitalize both parts - "Make-Believe"', () => {
      expect(toNYTHeadlineCase('world of make-believe')).toBe('World of Make-Believe');
    });

    it('should capitalize both parts - "One-Fifth"', () => {
      expect(toNYTHeadlineCase('one-fifth of students')).toBe('One-Fifth of Students');
    });
  });

  describe('Hyphenated Compounds - Short Prefix (2-3 letters)', () => {
    it('should lowercase after hyphen for doubled vowels - "Co-op"', () => {
      expect(toNYTHeadlineCase('join the co-op')).toBe('Join the Co-op');
    });

    it('should lowercase after hyphen - "Re-entry"', () => {
      expect(toNYTHeadlineCase('shuttle re-entry successful')).toBe('Shuttle Re-entry Successful');
    });

    it('should lowercase after hyphen - "Pre-empt"', () => {
      expect(toNYTHeadlineCase('move to pre-empt')).toBe('Move to Pre-empt');
    });

    it('should capitalize after hyphen - "Re-Sign" (exception)', () => {
      expect(toNYTHeadlineCase('player to re-sign')).toBe('Player to Re-Sign');
    });

    it('should capitalize after hyphen - "Co-Author" (exception)', () => {
      expect(toNYTHeadlineCase('will co-author book')).toBe('Will Co-Author Book');
    });
  });

  describe('Hyphenated Compounds - Long Prefix (4+ letters)', () => {
    it('should capitalize after hyphen - "Anti-Intellectual"', () => {
      expect(toNYTHeadlineCase('anti-intellectual movement grows')).toBe('Anti-Intellectual Movement Grows');
    });

    it('should capitalize after hyphen - "Post-Mortem"', () => {
      expect(toNYTHeadlineCase('post-mortem examination required')).toBe('Post-Mortem Examination Required');
    });

    it('should capitalize with "Post-" prefix', () => {
      expect(toNYTHeadlineCase('post-war economy grows')).toBe('Post-War Economy Grows');
    });

    it('should capitalize with "Anti-" prefix', () => {
      expect(toNYTHeadlineCase('anti-american sentiment rises')).toBe('Anti-American Sentiment Rises');
    });

    it('should capitalize with "Over-" prefix', () => {
      expect(toNYTHeadlineCase('over-the-counter sales grow')).toBe('Over-the-Counter Sales Grow');
    });
  });

  describe('Money Formatting', () => {
    it('should handle millions - "$7 Million"', () => {
      expect(toNYTHeadlineCase('company raises $7 million')).toBe('Company Raises $7 Million');
    });

    it('should handle billions - "$34 Billion"', () => {
      expect(toNYTHeadlineCase('budget hits $34 billion')).toBe('Budget Hits $34 Billion');
    });

    it('should capitalize monetary unit words', () => {
      expect(toNYTHeadlineCase('costs $50 thousand')).toBe('Costs $50 Thousand');
    });
  });

  describe('Complex Real-World Examples', () => {
    it('should handle headline with colon and articles', () => {
      expect(toNYTHeadlineCase('breaking news: the storm of the century')).toBe('Breaking News: The Storm of the Century');
    });

    it('should handle infinitive with preposition', () => {
      expect(toNYTHeadlineCase('how to be at peace')).toBe('How to Be at Peace');
    });

    it('should handle phrasal verb at end', () => {
      expect(toNYTHeadlineCase('what she signed up for')).toBe('What She Signed Up For');
    });

    it('should handle multiple hyphens', () => {
      expect(toNYTHeadlineCase('state-of-the-art anti-missile system')).toBe('State-of-the-Art Anti-Missile System');
    });

    it('should handle mixed prepositions and articles', () => {
      expect(toNYTHeadlineCase('tale of a city in the modern age')).toBe('Tale of a City in the Modern Age');
    });
  });
});

