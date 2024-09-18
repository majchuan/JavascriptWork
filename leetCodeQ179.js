/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumberMergeSort = function(nums) {
    const sortedNums = mergeSort(nums, 0 , nums.length-1);
    let largestNum = "";
    for(let num of sortedNums){
        largestNum += num.toString();
    }

    return largestNum.charAt(0) == '0' ? "0" : largestNum;
};

const mergeSort = (nums, left ,right) =>{
    if(left >= right) return [nums[left]];
    
    let mid = Math.floor((left+right)/2);

    const leftHalf = mergeSort(nums,left, mid);
    const rightHalf = mergeSort(nums, mid+1, right);

    return merge(leftHalf, rightHalf);
}

const merge = (leftHalf, rightHalf) =>{
    const sortedNums = [];
    let leftIndex = 0 , rightIndex = 0;

    while(leftIndex < leftHalf.length && rightIndex < rightHalf.length){
        if(compare(leftHalf[leftIndex], rightHalf[rightIndex])){
            sortedNums.push(leftHalf[leftIndex]);
            leftIndex++;
        }else{
            sortedNums.push(rightHalf[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < leftHalf.length){
        sortedNums.push(leftHalf[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightHalf.length){
        sortedNums.push(rightHalf[rightIndex]);
        rightIndex++;
    }

    return sortedNums;
}

const compare = (firstNum, secondNum) =>{
    let s1 = firstNum.toString() + secondNum.toString();
    let s2 = secondNum.toString() + firstNum.toString();

    //console.log(s1,s2);

    return s1 > s2 ;
}


/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumberFasterApproach = function(nums) {
    // Convert all numbers to strings
    const numsStr = nums.map(String);
    
    // Custom comparator function
    const compare = (a, b) => {
        // Compare the two possible concatenated results
        if (a + b > b + a) {
            return -1;
        } else if (a + b < b + a) {
            return 1;
        } else {
            return 0;
        }
    };
    
    // Sort the array using the custom comparator
    numsStr.sort(compare);
    
    // Handle edge case where the largest number is "0"
    if (numsStr[0] === '0') {
        return '0';
    }
    
    // Join the sorted numbers into a single string
    return numsStr.join('');
};