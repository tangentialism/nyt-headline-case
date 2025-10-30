/**
 * Test suite for two-letter word capitalization
 * 
 * Following TDD approach: These tests document the expected behavior
 * for two-letter words according to NYT style guide.
 * 
 * Many of these will FAIL with the current implementation and should
 * PASS after implementing the fix in Step 10.
 */

import { describe, it, expect } from 'vitest';
import { toNYTHeadlineCase } from '../src/index.js';

describe('Two-Letter Word Capitalization - TDD', () => {
  describe('Two-Letter Verbs (Should Capitalize)', () => {
    it('should capitalize "be" - infinitive', () => {
      expect(toNYTHeadlineCase('to be or not')).toBe('To Be or Not');
    });

    it('should capitalize "be" in middle position', () => {
      expect(toNYTHeadlineCase('will be done')).toBe('Will Be Done');
    });

    it('should capitalize "am" - first person singular', () => {
      expect(toNYTHeadlineCase('what am i doing')).toBe('What Am I Doing');
    });

    it('should capitalize "am" in middle position', () => {
      expect(toNYTHeadlineCase('i am here')).toBe('I Am Here');
    });

    it('should capitalize "do" - verb', () => {
      expect(toNYTHeadlineCase('how do we start')).toBe('How Do We Start');
    });

    it('should capitalize "do" in middle position', () => {
      expect(toNYTHeadlineCase('they do know')).toBe('They Do Know');
    });

    it('should capitalize "go" - verb', () => {
      expect(toNYTHeadlineCase('where do we go')).toBe('Where Do We Go');
    });

    it('should capitalize "go" in middle position', () => {
      expect(toNYTHeadlineCase('we go forward')).toBe('We Go Forward');
    });
  });

  describe('Two-Letter Pronouns (Should Capitalize)', () => {
    it('should capitalize "he" - personal pronoun', () => {
      expect(toNYTHeadlineCase('where does he go')).toBe('Where Does He Go');
    });

    it('should capitalize "he" in middle position', () => {
      expect(toNYTHeadlineCase('when he arrives')).toBe('When He Arrives');
    });

    it('should capitalize "me" - personal pronoun', () => {
      expect(toNYTHeadlineCase('tell me more')).toBe('Tell Me More');
    });

    it('should capitalize "me" in middle position', () => {
      expect(toNYTHeadlineCase('show me the way')).toBe('Show Me the Way');
    });

    it('should capitalize "we" - personal pronoun', () => {
      expect(toNYTHeadlineCase('where we go')).toBe('Where We Go');
    });

    it('should capitalize "we" in middle position', () => {
      expect(toNYTHeadlineCase('when we arrive')).toBe('When We Arrive');
    });

    it('should capitalize "us" - personal pronoun', () => {
      expect(toNYTHeadlineCase('let us go')).toBe('Let Us Go');
    });

    it('should capitalize "us" in middle position', () => {
      expect(toNYTHeadlineCase('tell us more')).toBe('Tell Us More');
    });

    it('should capitalize "my" - possessive pronoun', () => {
      expect(toNYTHeadlineCase('this is my day')).toBe('This Is My Day');
    });

    it('should capitalize "my" in middle position', () => {
      expect(toNYTHeadlineCase('where is my book')).toBe('Where Is My Book');
    });
  });

  describe('Classic Phrases with Two-Letter Words', () => {
    it('should handle "to be or not to be"', () => {
      expect(toNYTHeadlineCase('to be or not to be')).toBe('To Be or Not to Be');
    });

    it('should handle "you and me"', () => {
      expect(toNYTHeadlineCase('you and me forever')).toBe('You and Me Forever');
    });

    it('should handle "let us go"', () => {
      expect(toNYTHeadlineCase('let us go forward')).toBe('Let Us Go Forward');
    });

    it('should handle "here we go"', () => {
      expect(toNYTHeadlineCase('here we go again')).toBe('Here We Go Again');
    });

    it('should handle "what am i"', () => {
      expect(toNYTHeadlineCase('what am i doing')).toBe('What Am I Doing');
    });

    it('should handle "he said"', () => {
      expect(toNYTHeadlineCase('he said no')).toBe('He Said No');
    });
  });

  describe('Mixed Two-Letter Words', () => {
    it('should handle multiple two-letter pronouns', () => {
      expect(toNYTHeadlineCase('when he told us')).toBe('When He Told Us');
    });

    it('should handle two-letter verbs and pronouns together', () => {
      expect(toNYTHeadlineCase('we do what we can')).toBe('We Do What We Can');
    });

    it('should handle "me and my"', () => {
      expect(toNYTHeadlineCase('me and my friend')).toBe('Me and My Friend');
    });

    it('should handle sentence with be, we, and me', () => {
      expect(toNYTHeadlineCase('will we be with me')).toBe('Will We Be With Me');
    });
  });

  describe('Two-Letter Words at Different Positions', () => {
    it('should capitalize two-letter verb at start', () => {
      expect(toNYTHeadlineCase('be kind to others')).toBe('Be Kind to Others');
    });

    it('should capitalize two-letter pronoun at start', () => {
      expect(toNYTHeadlineCase('we are the ones')).toBe('We Are the Ones');
    });

    it('should capitalize two-letter verb at end', () => {
      expect(toNYTHeadlineCase('what will it be')).toBe('What Will It Be');
    });

    it('should capitalize two-letter pronoun at end', () => {
      expect(toNYTHeadlineCase('the one is me')).toBe('The One Is Me');
    });
  });

  describe('Regression Tests - Ensure Existing Behavior Preserved', () => {
    it('should still lowercase "to" (preposition)', () => {
      expect(toNYTHeadlineCase('back to the future')).toBe('Back to the Future');
    });

    it('should still lowercase "of" (preposition)', () => {
      expect(toNYTHeadlineCase('tale of two cities')).toBe('Tale of Two Cities');
    });

    it('should still lowercase "in" (preposition)', () => {
      expect(toNYTHeadlineCase('lost in translation')).toBe('Lost in Translation');
    });

    it('should still lowercase "on" (preposition)', () => {
      expect(toNYTHeadlineCase('based on facts')).toBe('Based on Facts');
    });

    it('should still lowercase "at" (preposition)', () => {
      expect(toNYTHeadlineCase('look at this')).toBe('Look at This');
    });

    it('should still lowercase "by" (preposition)', () => {
      expect(toNYTHeadlineCase('written by author')).toBe('Written by Author');
    });

    it('should still lowercase "as" (preposition)', () => {
      expect(toNYTHeadlineCase('known as best')).toBe('Known as Best');
    });

    it('should still lowercase "or" (conjunction)', () => {
      expect(toNYTHeadlineCase('now or never')).toBe('Now or Never');
    });

    it('should still lowercase "if" (conjunction)', () => {
      expect(toNYTHeadlineCase('only if necessary')).toBe('Only if Necessary');
    });

    it('should still capitalize "is" (existing behavior)', () => {
      expect(toNYTHeadlineCase('what is this')).toBe('What Is This');
    });

    it('should still capitalize "it" (existing behavior)', () => {
      expect(toNYTHeadlineCase('how it works')).toBe('How It Works');
    });

    it('should still capitalize "no" (existing behavior)', () => {
      expect(toNYTHeadlineCase('there is no way')).toBe('There Is No Way');
    });

    it('should still capitalize "so" (existing behavior)', () => {
      expect(toNYTHeadlineCase('this is so good')).toBe('This Is So Good');
    });

    it('should still capitalize "up" (existing behavior)', () => {
      expect(toNYTHeadlineCase('sign up now')).toBe('Sign Up Now');
    });
  });
});

