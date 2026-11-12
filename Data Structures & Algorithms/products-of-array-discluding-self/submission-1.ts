class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const prefix = new Array(n).fill(1);
        const suffix = new Array(n).fill(1);

        for(let i = 1; i < n; i+=1) {
            prefix[i] = prefix[i-1] * nums[i-1]
        }
        for(let i = n-2; i >= 0; i-=1) {
            suffix[i] = suffix[i+1] * nums[i+1]
        }

        const result = nums.map((_, idx) => prefix[idx]*suffix[idx]);
        return result;
    }
}
