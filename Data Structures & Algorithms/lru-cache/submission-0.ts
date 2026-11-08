class Node_ {
    key: number;
    value: number;
    prev: Node_;
    next: Node_;
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = this.next = null;
    }
}
class LRUCache {
    capacity: number;
    cache;
    left: Node_;
    right: Node_;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = {};
        this.left = new Node_(0,0);
        this.right = new Node_(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    //remove node from list
    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next
        next.prev = prev;
    }

    // insert node at right
    insert(node){
        const prev = this.right.prev;
        const next = this.right;
        prev.next = next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.cache[key]) {
            this.remove(this.cache[key])
            this.insert(this.cache[key])
            return this.cache[key].value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache[key]) {
            this.remove(this.cache[key]);
        }            
        this.cache[key] = new Node_(key, value);
        this.insert(this.cache[key]);

        if(Object.keys(this.cache).length > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            delete this.cache[lru.key]
        }
    }
}
