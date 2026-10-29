class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const concatArray = [...nums, ...nums]
        return concatArray
    }
}
