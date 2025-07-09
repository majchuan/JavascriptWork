/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 *Two pointers approach.
 */
var sortArrayByParity = function(nums) {
    let left = 0 , right = nums.length -1;

    while(left < right){
        if(nums[right] % 2 == 0){
            let temp = nums[right];
            nums[right]= nums[left];
            nums[left] = temp;
            left++;
        }else{
            right--;
        }
    }

    return nums;
};

var sortArrayByParityWithBuiltInFunction = function(nums) {
    const evenNums =[];
    const oddNums=[];
    nums.sort((a,b) => a- b);

    for(let num of nums){
        if(num % 2 == 0){
            evenNums.push(num);
        }else{
            oddNums.push(num);
        }
    }

    return [...evenNums,...oddNums];
};