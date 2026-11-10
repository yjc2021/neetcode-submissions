class NumMatrix {
    cache: number[][];
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        this.cache = Array.from({length: ROWS + 1}, () => Array(COLS+1).fill(0));
        
        for(let i = 0; i < ROWS; i+=1) {
            let psum = 0;
            for(let j = 0; j < COLS; j+=1) {
                psum += matrix[i][j];
                const above = this.cache[i][j+1];
                this.cache[i+1][j+1] = above + psum;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        row1 += 1;
        col1 += 1;
        row2 += 1;
        col2 += 1;
        const totalArea = this.cache[row2][col2]
        const leftArea = this.cache[row2][col1-1]
        const topArea = this.cache[row1-1][col2]
        const duplicateArea = this.cache[row1-1][col1-1];
        return totalArea - leftArea - topArea + duplicateArea;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
