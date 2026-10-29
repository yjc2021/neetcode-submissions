class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const concatArray = [];
        for (let i = 0; i < 2; i+=1)
            for (let num of nums)
                concatArray.push(num)
        return concatArray
    }
}
