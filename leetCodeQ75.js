/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    /*
    let swap = true;
    while(swap){
        swap = false ;
        for(let i = 0 ; i< nums.length-1 ; i++){
            if(nums[i] > nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                swap = true ;
            }
        }
    }*/
    return mergeSort(nums);
};


const mergeSort=(nums) =>{
    
    if(nums.length ==1){
        return nums;
    }else{
        let midIndex = Math.floor(nums.length /2);
        let leftNums = mergeSort(nums.slice(0,midIndex));
        let rightNums = mergeSort(nums.slice(midIndex, nums.length));
        
        let leftIndex = 0 , rightIndex =0 ;
        let mergeNums =[];
        while(leftNums.length > leftIndex && rightNums.length > rightIndex){
            if(leftNums[leftIndex] < rightNums[rightIndex]){
                mergeNums.push(leftNums[leftIndex]);
                leftIndex++;
            }else{
                mergeNums.push(rightNums[rightIndex]);
                rightIndex++;
            }
        }
        
        while(leftNums.length > leftIndex){
            mergeNums = [...mergeNums,...(leftNums.slice(leftIndex, leftNums.length))];
            leftIndex++;
        }
        
        while(rightNums.length > rightIndex){
            mergeNums =[...mergeNums, ...(rightNums.slice(rightIndex, rightNums.length))];
            rightIndex++;
        }
        
        return mergeNums;
    }
}

const nums=[2,0,2,1,1,0]

console.log(sortColors(nums));