class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for(const c of s) {
            if(stack.length === 0) {stack.push(c); continue;}
            const top = stack.at(-1);
            if((top === '(' && c === ')' )|| (top === '{' && c === '}') || (top === '[' && c === ']')) stack.pop();
            else stack.push(c); 
        }

        return stack.length === 0;
    }
}
