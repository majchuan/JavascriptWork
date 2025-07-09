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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonicFastApproach = function(nums) {
    let index = 1 ;
    let decrease = false ;
    let increase = false;
    if(nums.length == 1) return true ; 
    
    if(nums[index-1] >= nums[index]){
        while(index < nums.length){
            if(nums[index-1] < nums[index]){
                decrease = false;
                break;
            }
            index++;
            decrease = true;
        }
    }

    index = 1 ;
    if(nums[index-1] <= nums[index]){
        while(index < nums.length){
            if(nums[index-1] > nums[index]){
                increase = false;
                break;
            }
            index++;
            increase = true;
        }
    }

    return increase || decrease ; 

};