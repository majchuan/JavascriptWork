/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    const hash_nums = {};
    const result = new Set();
    for(let num of nums){
        if(hash_nums[num] != null ){
            hash_nums[num]++;
            if(hash_nums[num] > (nums.length/3)){
                result.add(num);
            }
        }else{
            hash_nums[num] = 1;
            if(hash_nums[num] > (nums.length/3)){
                result.add(num);
            }
        }
    }
    
    return [...result];
};

const nums=[2,2];
console.log(majorityElement(nums));
