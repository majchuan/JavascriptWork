/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    const hash_nums ={}
    const result =[];
    for(let i = 1 ; i <= nums.length; i++){
        if(hash_nums[nums[i-1]]==1){
            result.unshift(nums[i-1]);
        }else{
            hash_nums[nums[i-1]] = 1;
        }
    }

    for(let i =1 ; i <= nums.length; i++){
        if(hash_nums[i] == null){
            result.push(i);
        }
    }
    return result;
};

const nums =[1,5,3,2,2,7,6,4,8,9];
console.log(findErrorNums(nums));