/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const stack = [];
    for(let i = 0 ; i < nums.length; i++){
        if(stack.length == 0 || nums[stack[stack.length-1]] > nums[i]){
            stack.push(i);
        }
    }

    console.log(stack);

    let maxWidth = 0 ;
    for(let i = nums.length -1 ; i >=0 ; i--){
        while(stack.length > 0 && nums[stack[stack.length-1]] <= nums[i]){
            maxWidth = Math.max(maxWidth , i - stack.pop())
        }
    }

    return maxWidth;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRampSort = function(nums) {
    const indexNums = nums.map((element ,index) => [element, index]);

    indexNums.sort((a,b) => a[0] - b[0]);

    let maxWidth = 0 ;
    let minIndex = indexNums[0][1];

    for(let i = 1 ; i < indexNums.length ; i++){
        let currentIndex = indexNums[i][1];

        maxWidth = Math.max(maxWidth , currentIndex - minIndex);

        minIndex = Math.min(minIndex, currentIndex);
    }

    return maxWidth;
};
