/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const hash_nums={};
    let count = 0;

    for(let num of nums){
        let diff = num - rev(num);
        if(hash_nums[diff] != null){
            count += hash_nums[diff];
            hash_nums[diff]++;
        }else{
            hash_nums[diff] =1;
        }
    }

    return count % (1e9 + 7);
};

const rev = (num) =>{
    return parseInt(num.toString().split('').reverse().join(''));
}