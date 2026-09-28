import { twoSum } from './solution';

const testData = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
  { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
  { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },
  { nums: [1, 2, 1], target: 2, expected: [0, 2] },
  { nums: [1000000000, -1000000000, 5], target: 0, expected: [0, 1] },
];

describe('twoSum', () => {
  testData.forEach(({ nums, target, expected }) => {
    it(`returns [${expected}] for nums [${nums}] and target ${target}`, () => {
      const inputNums = [...nums];
      const inputTarget = target;

      const result = twoSum(inputNums, inputTarget);

      expect(result).toEqual(expected);
    });
  });
});
