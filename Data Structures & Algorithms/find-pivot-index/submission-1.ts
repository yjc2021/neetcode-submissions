class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const len = nums.length;
        const prefixSum = Array.from({length: len+1}, () => 0);
        for(let i = 0; i < len; i+=1) {
            prefixSum[i+1] = prefixSum[i] + nums[i];
        }

        for(let pivot = 0; pivot < len; pivot+=1) {
            const leftSum = prefixSum[pivot];
            const rightSum = pivot === len ? 0 : prefixSum[len] - prefixSum[pivot+1]
            if (leftSum === rightSum) return pivot;
        }
        return -1;
    }
}
