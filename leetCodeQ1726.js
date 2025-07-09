/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const hash_nums = new Map();
    let counter = 0 ;

    for(let i = 0 ; i < nums.length; i++){
        for(let j = i +1; j < nums.length ; j++){
            hash_nums.set(nums[i]*nums[j] , (hash_nums.get(nums[i]*nums[j]) || 0) + 1 );
        }
    }

    for(let [key ,value] of hash_nums){
        const pairsOfEqualProduct = (value - 1) * value /2
        counter += 8 * pairsOfEqualProduct;
    }

    return counter;
};
