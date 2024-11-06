/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let swap = false;

    const n = nums.length;

    do{
        swap = false;
        for(let i = 0 ; i < n -1 ; i++){
            if(nums[i] > nums[i+1] && setBits(nums[i]) == setBits(nums[i+1])){
                [nums[i],nums[i+1]] = [nums[i+1],nums[i]];
                swap=true;
            }
        }

    }while(swap);

    for(let i = 0 ; i < n ; i++){
        if(nums[i] > nums[i+1]) return false;
    }

    return true;
};

const setBits = (num) =>{
    return num.toString(2).split('0').join('').length;
}
