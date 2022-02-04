/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = {}
    nums.sort((x,y) => x-y);
    for(let i =0 ; i < nums.length; i++){
        for(let j = i+1 ; j <nums.length ; j++){
            let left = j+1;
            let right = nums.length -1;
            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum == target){
                    result[nums[i].toString() + nums[j].toString()+ 
                    nums[left].toString() + nums[right].toString()] = [nums[i] ,nums[j] , nums[left] , nums[right]];
                    left++;
                    right--;
                }

                if(sum > target){
                    right--;
                }

                if(sum < target){
                    left++;
                }
            }
        }
    }

    return Object.values(result);
};

const nums =  [1,0,-1,0,-2,2], target = 0;
const nums1 =[2,2,2,2,2], target1 = 8
console.log(fourSum(nums,target));