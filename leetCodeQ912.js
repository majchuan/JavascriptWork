/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //return mergeSortArray(nums);
    //return bubbleSortArray(nums);
    //return selectionSortArray(nums);
    //return insertionSortArray(nums);
    return quickSortArray(nums, 0, nums.length-1);
};
//heap sort 
//This will be add later.
//bianry tree sort

//Insertion sort
const insertionSortArray = (nums) =>{
    let key = 0 ;
    for(let i = 1 ; i < nums.length ; i++){
        key = nums[i];
        let j = i -1;
        while(j>=0 && nums[j] > key){
            nums[j+1] = nums[j];
            j--
        }
        nums[j+1]= key ;
    }
    return nums;
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
const quickSortArray=(nums, low ,high) =>{

    const partitioin=(nums,low,high) =>{
        const pivot = nums[high];
        let i = low -1 ;
        for(let j = low ; j< high ; j++){
            if(nums[j] < pivot){
                i++;
                swap(nums,i,j);
            }
        }
        swap(nums,i+1,high);
        return i+1;
    }

    const swap=(nums,i,j) =>{
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    if(low < high){
        let pi = partitioin(nums ,low , high);
        quickSortArray(nums, low ,pi-1);
        quickSortArray(nums, pi+1, high);
    }

    return nums;
}
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
