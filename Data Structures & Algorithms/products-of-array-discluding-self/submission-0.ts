class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product=1;
        let zeroCount = 0;
        for(let num of nums) {
            if (num !== 0) product*=num;
            else zeroCount+=1;
        }

        if(zeroCount > 1) return new Array(nums.length).fill(0);
        const result = new Array(nums.length);
        for (let i=0; i < nums.length; i+=1) {
            if(zeroCount > 0) result[i] = nums[i] === 0 ? product : 0;
            else result[i] = product / nums[i]
        }
        return result;
    }
}
