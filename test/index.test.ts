// test/stringUtils.test.ts

import { capitalizeFirstLetter, reverseString } from '../index';

describe('capitalizeFirstLetter function', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should return empty string if input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});

describe('reverseString function', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
  });

  it('should return the same string if input is one character', () => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('b')).toBe('b');
  });
});
