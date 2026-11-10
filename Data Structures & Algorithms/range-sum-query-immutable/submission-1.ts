class NumArray {
    nums: number[];
    sumTable;
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.nums = nums;
        this.sumTable = Array(nums.length + 1).fill(0)
        this.initializeSumTable();
    }

    initializeSumTable() {
        for (let i = 0; i < this.nums.length + 1; i+=1) {
            this.sumTable[i + 1] = this.sumTable[i] + this.nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.sumTable[right + 1] - this.sumTable[left];
    }
}
