class PriorityQueue_<T> {
    private heap = [];
    constructor(private compare: (a:T, b:T) => boolean) {}

    top() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    push(item: T) {
        this.heap.push(item);
        this.bubbleUp();
    }
    pop(): T | undefined {
        if(this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    private bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            let p = Math.floor((i-1)/2)
            if(!this.compare(this.heap[i], this.heap[p])) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    private bubbleDown() {
        let i = 0;
        while(true) {
            let l = i*2 + 1;
            let r = i*2 + 2;
            let best = i;

            if(l < this.heap.length && this.compare(this.heap[l], this.heap[best])) best = l;
            if(r < this.heap.length && this.compare(this.heap[r], this.heap[best])) best = r;
            if(best === i) break;

            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const pq = new PriorityQueue_<[number, number]>((a, b) => a[0] > b[0]);
        const numMap = {};
        for (const num of nums) {
            numMap[num] = (numMap[num] || 0) + 1;
        }
        for(const key in numMap) {
            pq.push([numMap[key], Number(key)])
            // if(pq.size() > k) pq.pop();
        }      
        const res = [];
        while(pq.size() && k > 0) {
            res.push(pq.pop()[1]); 
            k-=1;
        }

        return res;
    }
}

