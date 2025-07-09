/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const hash_nums={};
    let count = 0;

    for(let num of nums){
        //let diff = num - rev(num);
        let diff = num  - reverseNumber(num);
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

const reverseNumber = (num) =>{
    let reverseNum = 0 ;

    while(num > 0 ){
        reverseNum = reverseNum * 10 + num % 10 ;
        num = Math.floor(num / 10);
    }

    return reverseNum;
}