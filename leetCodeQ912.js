/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //return mergeSortArray(nums);
    //return bubbleSortArray(nums);
    return selectionSortArray(nums);
};
//heap sort 

//bianry tree sort

//Insertion sort
const insertionSortArray = (nums) =>{

}
//Selection sort
const selectionSortArray = (nums) =>{
    for(let i =0 ; i< nums.length ; i++){
        let minIndex = i ;
        for(let j = i+1 ; j <nums.length ; j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }

    return nums;
}
//Quick sort

//bubble sort
const bubbleSortArray =(nums) =>{
    let swap = true ;
    while(swap){
        swap = false;
        for(let i=0 ; i< nums.length-1; i++){
            if(nums[i] > nums[i+1]){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                swap = true;
            }
        }
    }

    return nums;
}
//merge sort
const mergeSortArray = (nums) =>{
    let midIndex = Math.floor(nums.length /2);

    if(nums.length ==1){
        return nums;
    }

    let mergeLeftNums = mergeSortArray(nums.slice(0, midIndex));
    let mergeRightNums = mergeSortArray(nums.slice(midIndex, nums.length));

    let mergeSortNums = [], i =0, j =0;
    while(i < mergeLeftNums.length && j < mergeRightNums.length){
        if(mergeLeftNums[i] < mergeRightNums[j]){
            mergeSortNums.push(mergeLeftNums[i]);
            i++;
        }else {
            mergeSortNums.push(mergeRightNums[j]);
            j++;
        }
    }

    if( i< mergeLeftNums.length){
        mergeSortNums = [...mergeSortNums, ...mergeLeftNums.slice(i,mergeLeftNums.length)];
    }

    if(j< mergeRightNums.length){
        mergeSortNums =[...mergeSortNums, ...mergeRightNums.slice(j,mergeRightNums.length)];
    }

    return mergeSortNums;

}



const nums = [5,1,1,2,0,0,9,15,3,4,7,6];
console.log(sortArray(nums));