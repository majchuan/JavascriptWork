/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.sortNums = nums.sort((x,y) => y-x).slice();
    this.k = k;
    console.log(this.sortNums);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.sortNums.length == 0){
        this.sortNums.push(val);
        return this.sortNums[this.k-1];
    }

    for(let i  = 0 ; i < this.sortNums.length ; i++){
        //if(this.sortNums[i]== val) break;
        if(this.sortNums[i] <= val){
            this.sortNums.splice(i,0,val);
            break;
        }
    }
    if(this.sortNums[this.sortNums.length-1] > val){
        this.sortNums.push(val);
    }
    //console.log(this.sortNums)
    return this.sortNums[this.k-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */