/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result =[];
    nums.sort((x,y) => x - y);

    for(let i = 0 ; i < nums.length -2 ; i++){
        let left = i +1;
        let right = nums.length -1;

        if( i > 0 && nums[i] == nums[i -1] ) continue;
        while(left < right){
            if(nums[left] + nums[right] == -nums[i]){
                result.push([nums[i],nums[left],nums[right]]);
                //if the next number is same, move the left point up to next postion.
                while(nums[left] == nums[left+1]){
                    left++;
                }

                while(nums[right] == nums[right-1]){
                    right--;
                }

                left++;
                right--;
            }

            if(nums[left] + nums[right] >-nums[i]){
                right--;
            }

            if(nums[left] + nums[right] < -nums[i]){
                left++;
            }
        }
    }

    return result;
};


const nums =[-2,0,0,2,2];

console.log(threeSum(nums));