class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMap = new Map();
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for(let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if(strMap.has(key)) {
                strMap.set(key, [...strMap.get(key), s])
            } else {
                strMap.set(key, [s])
            }   
        }

        const res = [];
        for(const value of strMap.values()) 
            res.push(value);
        return res;
    }
}
