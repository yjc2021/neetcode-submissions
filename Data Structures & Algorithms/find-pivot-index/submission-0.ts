class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const len = nums.length;
        const prefixSum = Array.from({length: len}, () => 0);
        for(let i = 0; i < len; i+=1) {
            if(i === 0) prefixSum[i] = nums[i];
            else prefixSum[i] = prefixSum[i-1] + nums[i];
        }

        for(let pivot = 0; pivot < len; pivot+=1) {
            const leftSum = pivot === 0 ? 0 : prefixSum[pivot-1];
            const rightSum = pivot === len ? 0 : prefixSum[len-1] - prefixSum[pivot]
            if (leftSum === rightSum) return pivot;
        }
        return -1;
    }
}
