/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const nums = s.split('');
    nums.sort((a,b) => a - b);
    if(nums.length == 1) return s;
    let secondLast = nums.length - 2;
    let length = Math.floor(nums.length / 2) ; 

    for(let i = 0 ; i < length ; i++){
        const temp = nums[i];
        nums[i] = nums[secondLast - i];
        nums[secondLast-i] = temp;
    }

    return nums.join('');
};