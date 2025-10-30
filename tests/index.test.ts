import { describe, it, expect } from 'vitest';
import { toNYTHeadlineCase } from '../src/index.js';

describe('toNYTHeadlineCase', () => {
  it('should be defined', () => {
    expect(toNYTHeadlineCase).toBeDefined();
  });

  it('should accept a string parameter', () => {
    const result = toNYTHeadlineCase('test');
    expect(typeof result).toBe('string');
  });

  it('should return a string', () => {
    const result = toNYTHeadlineCase('hello world');
    expect(typeof result).toBe('string');
  });
});

