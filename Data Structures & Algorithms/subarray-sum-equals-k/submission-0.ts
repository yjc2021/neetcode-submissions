class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let res = 0, currentSum = 0;
        const prefixSumMap = new Map();
        prefixSumMap.set(0,1);

        for(let num of nums) {
            currentSum += num;
            let diff = currentSum - k;
            res += prefixSumMap.get(diff) || 0;
            prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

        }
        return res;
    }
}
