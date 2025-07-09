/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.hash_nums={};
    for(let i = 0; i < nums.length; i++){
        if(this.hash_nums[nums[i]]){
            this.hash_nums[nums[i]].push(i);
        }else{
            this.hash_nums[nums[i]]=[i];
        }
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexes = this.hash_nums[target];
    let randomIndex = Math.floor(Math.random() * indexes.length);

    return indexes[randomIndex];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */