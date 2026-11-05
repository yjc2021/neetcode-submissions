class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set(nums);
        if(numSet.size === nums.length) return false
        return true
    }
}
