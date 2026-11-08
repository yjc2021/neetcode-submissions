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
        this.cache = new Map();
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
        if(this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node)
            this.insert(node)
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }            
        const newNode = new Node_(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.capacity) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
