/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    const hash_nums = new Map();
    
    if(nums.length % k != 0) return false;

    for(let num of nums){
        hash_nums.set(num, (hash_nums.get(num) || 0) + 1);
    }

    nums.sort((a,b) => a - b);

    for(let num of nums){
        if(hash_nums.get(num) > 0){
            for(let i = 0 ; i < k ; i++){
                let currNum = num + i;
                if(hash_nums.has(currNum) == false || hash_nums.get(currNum) == 0){
                    return false;
                }

                hash_nums.set(currNum, hash_nums.get(currNum) - 1 );
            }
        }
    }

    return true;
};