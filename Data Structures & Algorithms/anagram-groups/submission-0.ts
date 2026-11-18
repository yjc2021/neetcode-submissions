class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMap = new Map();
        for (let i = 0; i < strs.length; i+=1) {
            const lowerCasedStr = strs[i].toLowerCase();
            const sortedStr = [...lowerCasedStr].sort().join('');
            if(strMap.has(sortedStr)) {
                strMap.set(sortedStr, [...strMap.get(sortedStr), i]);
            } else {
                strMap.set(sortedStr, [i]);
            }
        }

        const result = [];
        for(const value of strMap.values()) {
            result.push(value.map((idx) => strs[idx]));
        }
        return result;
    }
}
