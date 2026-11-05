class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const count = Array.from(Array(26), () => 0);

        for(let i = 0; i < s.length; i+=1) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        }
        return count.every((value) => value === 0)
    }
}
