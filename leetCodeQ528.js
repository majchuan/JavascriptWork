/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.map = new Map();
    this.sum = 0;
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i];
        this.map.set(this.sum, i);
    }
    this.keys = [...this.map.keys()].sort((a, b) => a - b);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const r = parseInt(Math.random() * this.sum);
    for (const key of this.keys) {
        if (r < key) {
            return this.map.get(key);
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const w =[1,3,1];
const w1= [3,14,1,7]

const obj = new Solution(w1);
const param_1 = obj.pickIndex();
const param_2 = obj.pickIndex();
const param_3 = obj.pickIndex();
const param_4 = obj.pickIndex();
const param_5 = obj.pickIndex();
console.log(param_1, param_2, param_3, param_4, param_5);

/*
Quick solution
*/
/**
 * @param {number[]} w
 */
var QuickSolution = function(weights) {
    let sum = 0;
    for (const w of weights) {
        sum += w;
    }
    
    this.p = [];
    let start = 0;
    for (const w of weights) {
        start += (w / sum);
        this.p.push(start);
    }
    // this.p.pop();
    // this.p.push(1);
    // [0.3, 1]
};

/**
 * @return {number}
 */
QuickSolution.prototype.pickIndex = function() {
    const dice = Math.random();
    if (this.p.length === 0) return -1;
    if (this.p.length === 1) return 0;
    if (dice < this.p[0]) return 0;
    
    
    let start = 0;
    let end = this.p.length - 1;
    
    while (start + 1 < end) {
        const mid = Math.floor((start + end) / 2);
        
        if (dice >= this.p[mid]) {
            start = mid + 1;
        } else if (dice < this.p[mid - 1]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    
    if (dice < this.p[start]) {
        return start;
    }
    return end;
};
