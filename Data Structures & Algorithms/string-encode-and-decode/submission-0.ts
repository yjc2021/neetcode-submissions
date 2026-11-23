class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length === 0) return '';
        const res = [];
        for(const str of strs) {
            res.push(String(str.length), '#', str)
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str.length === 0) return [];
        const res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j+=1;
            }
            const size = parseInt(str.substring(i, j));
            i = j+1;
            j = i+size;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
