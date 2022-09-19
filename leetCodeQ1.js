/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash_nums={};
    const result =[];
    for(let i= 0; i< nums.length ; i++){
        if(hash_nums[target - nums[i]] != null){
            return [hash_nums[target - nums[i]], i];
        }else{
            hash_nums[nums[i]] = i;
        }
    }
    
    return result;
};
const nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));

/*
*Check nums array, two of memeber sum equal to target number. 
*using two pointer approach to solve this issue.
*/

var isTwoSum= (nums, target)=>{
    let left  = 0 ;
    let right = nums.length -1 ;
    nums.sort((x,y) => x-y);

    while(left < right){
        if(nums[left] + nums[right] == target){
            return true;
        }

        if(nums[left] + nums[right] > target){
            right--;
        }else{
            left++;
        }
    }

    return false;
}

const nums1 =[7,3,11,15], target1 = 9;
console.log(isTwoSum(nums1,target1));