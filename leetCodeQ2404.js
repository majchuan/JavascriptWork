/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const hash_nums = {};
    for(let num of nums)
    {
        if(num % 2 == 0){
            if(hash_nums[num] != null){
                hash_nums[num]++;
            }else{
                hash_nums[num]=1;
            }
        }
    }

   
    const result = Object.keys(hash_nums);
    
    if(result.length == 0) return -1;
    result.sort((a,b) =>{
        if(hash_nums[a] == hash_nums[b]){
            return a - b ;
        }else{
            return hash_nums[b] - hash_nums[a];
        }
    })

    return result[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEvenFastApproach = function(nums) {
    const hash_nums ={};
    let result =  -1;
    let maxFreq = 0 ;
    for(let num of nums){
        var freq =0;
        if(num % 2 == 0){
            if(hash_nums[num] != null){
                hash_nums[num] +=1;
                freq = hash_nums[num];
            }else{
                hash_nums[num] = 1 ;
                freq= hash_nums[num];
            }


            if(freq > maxFreq || (freq == maxFreq && result > num )){
                result = num ; 
                maxFreq = freq;
            }
        }
    }

    return result;
};
