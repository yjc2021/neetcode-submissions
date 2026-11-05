class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numMap = {};
        for(const num of nums) {
            if(numMap[num] !== undefined) return true
            else numMap[num] = (numMap[num] ?? 0)+ 1
        }
        return false
    }
}
