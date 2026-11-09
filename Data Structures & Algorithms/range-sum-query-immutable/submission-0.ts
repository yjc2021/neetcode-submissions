class NumArray {
    nums: number[];
    sumTable;
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.nums = nums;
        this.sumTable = Array(nums.length).fill(0)
        this.initializeSumTable();
    }

    initializeSumTable() {
        for (let i = 0; i < this.nums.length; i+=1) {
            if(i === 0) {
                this.sumTable[0] = this.nums[0];
                continue;
            }
            this.sumTable[i] = this.sumTable[i-1] + this.nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        if (left == 0) return this.sumTable[right];
        return this.sumTable[right] - this.sumTable[left-1];
    }
}
