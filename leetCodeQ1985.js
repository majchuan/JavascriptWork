/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    const integerNum = nums.map(x => BigInt(x));
    integerNum.sort((a,b) =>{
        if(a > b) {
            return -1;
        } else if (a < b){
            return 1;
        } else {
            return 0;
        }
    });

    return integerNum[k-1].toString();
};