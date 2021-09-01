/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const nums_sort = nums.slice().sort((x,y) => x-y);
    if(nums_sort.join() == nums.join() || nums.slice().reverse().join() == nums_sort.join()){
        return true;
    }else{
        return false;
    }
};