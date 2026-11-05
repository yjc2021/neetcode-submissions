class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i = 0, j = nums.length-1;
        const sortedNums = nums.map((num, idx) => [num, idx]).sort((a,b) => a[0] - b[0]);

        while(i < j) {
            const sum = sortedNums[i][0] + sortedNums[j][0]
            if (sum === target) return [Math.min(sortedNums[i][1], sortedNums[j][1]), Math.max(sortedNums[i][1], sortedNums[j][1])]
            else if(sum < target) i += 1;
            else j -= 1;
        }
        return [];
    }
}
