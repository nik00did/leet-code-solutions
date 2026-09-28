// https://leetcode.com/problems/two-sum/description/

/*You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

export function twoSum(nums: number[], target: number): number[] | void {
    const numKeys: { [key: string]: number } = {}

    for (let i = 0; i < nums.length; i++ ) {
        const currentNumber = nums[i]
        const lookingNumber = target - currentNumber
        const hasLookingNumber = `${lookingNumber}` in numKeys

        if (hasLookingNumber) {
            return [numKeys[`${lookingNumber}`], i]
        }

        numKeys[`${currentNumber}`] = i
    }
}