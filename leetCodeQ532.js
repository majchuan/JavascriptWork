/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    const hash_nums = {};
    const hash_unique_pair={};
    for(let num of nums){
        if(hash_nums[k+num] != null){
            if(hash_unique_pair[(k+num).toString()+num.toString()] == null){
                console.log("test");
                hash_unique_pair[(k+num).toString()+num.toString()] = [hash_nums[k+num],num];
            }
        }
        
        if(hash_nums[num-k] !=null ){
            if(hash_unique_pair[num.toString()+(num-k).toString()] == null){
                hash_unique_pair[num.toString()+(num-k).toString()] = [num,hash_nums[num-k]];
            }
        }
        
        if(hash_nums[num] == null){
            hash_nums[num] = num;
        }
        
    }
    
    for(let unique in hash_unique_pair){
        console.log("key,value", unique, hash_unique_pair[unique])
    }
    return Object.keys(hash_unique_pair).length;
};

const nums=[0,0,0], k = 0;
console.log(findPairs(nums,k));

