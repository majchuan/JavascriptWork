/**
 * @param {number[]} nums
 * @return {number}
 */
/*two pointer*/
 var removeDuplicates = function(nums) {
    let j=0; /*first pointer slow pointer*/
    for(let i=0;i<nums.length-1;i++){ // i is faster pointer.
        if(nums[i] != nums[i+1]){
            j++
            nums[j] = nums[i+1];
        }
    };
    return j+1;
};