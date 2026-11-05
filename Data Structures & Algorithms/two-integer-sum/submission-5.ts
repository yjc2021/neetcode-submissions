class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = {}
        for(let i = 0; i < nums.length; i+=1) {
            numsMap[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i+=1) {
            const dif = target - nums[i];
            if(numsMap[dif] && numsMap[dif] !== i) return [Math.min(numsMap[dif], i), Math.max(numsMap[dif], i)]
        }

    }
}
