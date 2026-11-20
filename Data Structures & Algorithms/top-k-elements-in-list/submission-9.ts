class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap = {};
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (const num of nums) {
            numMap[num] = (numMap[num] || 0) + 1;
        }
        for(const num in numMap) {
            freq[numMap[num]].push(parseInt(num))
        }

        const res = [];
        for(let i = freq.length - 1; i > 0; i-=1) {
            for(const num of freq[i]) {
                res.push(num);
                if(res.length === k) return res;
            }
        }
    }
}

