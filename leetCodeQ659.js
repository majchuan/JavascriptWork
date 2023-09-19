/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const hash_nums = {};
    
    for(let num of nums){
        hash_nums[num] ? hash_nums[num]++ : hash_nums[num]=1;
    }

    const keys = Object.keys(hash_nums);

    let result = [];
    let count =  0;

    let flag = true;

    while(flag){
        for(let i = count ; i < keys.length ; i++){
            if(hash_nums[keys[i]] > 0){
                hash_nums[keys[i]]--;
                
                result.push(keys[i]);

                if(hash_nums[keys[i]]==0){
                    count++;
                }

                if(hash_nums[keys[i]] >= hash_nums[keys[i+1]]){
                    break;
                }

                if(keys[i+1] - keys[i] != 1 && i != keys.length -1){
                    break;
                }
            }
        }

        if(result.length < 3){
            return false;
        }

        result = [];

        if(count == keys.length){
            flag = false;
        }
    }

    return true;
};