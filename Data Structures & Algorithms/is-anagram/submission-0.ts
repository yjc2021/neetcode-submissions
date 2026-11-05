class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hashMap = {};
        for(let c of s)
            hashMap[c] = (hashMap[c] ?? 0) + 1
        for(let c of t) {
            if(hashMap[c] === undefined) return false
            hashMap[c] -= 1
        }
        for(let key in hashMap) {
            if(hashMap[key] !== 0) return false
        }        
        return true;
    }
}
