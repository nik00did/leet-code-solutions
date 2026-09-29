import { romanToInt } from './solution';

const testData = [
  { s: 'I', expected: 1 },
  { s: 'V', expected: 5 },
  { s: 'X', expected: 10 },
  { s: 'L', expected: 50 },
  { s: 'C', expected: 100 },
  { s: 'D', expected: 500 },
  { s: 'M', expected: 1000 },
  { s: 'III', expected: 3 },
  { s: 'LVIII', expected: 58 },
  { s: 'IV', expected: 4 },
  { s: 'IX', expected: 9 },
  { s: 'XL', expected: 40 },
  { s: 'XC', expected: 90 },
  { s: 'CD', expected: 400 },
  { s: 'CM', expected: 900 },
  { s: 'MCMXCIV', expected: 1994 },
  { s: 'MMMCMXCIX', expected: 3999 },
];

describe('romanToInt', () => {
  testData.forEach(({ s, expected }) => {
    it(`returns ${expected} for ${s}`, () => {
      const input = s;

      const result = romanToInt(input);

      expect(result).toBe(expected);
    });
  });
});
