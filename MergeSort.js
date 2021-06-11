/*
*Merge sort uses the concept of divide-and-conquer to sort the given list of elements. 
It breaks down the problem into smaller subproblems until they become simple enough to solve directly.

Here are the steps Merge Sort takes:

Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
Continue dividing the subarrays in the same manner until you are left with only single element arrays.
Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
Repeat step 3 unit with end up with a single sorted array.

*/

const regularArray = [10,9,1,5,6,8,2,4,3,7,0]

const mergeSort = (regularArray) =>{
    const midIndex = Math.floor(regularArray.length /2)
    
    if(regularArray.length == 1){
        return regularArray;
    }else{
        //left merge
        const leftSortArray =mergeSort(regularArray.slice(0,midIndex));
        //right merge
        const rightSortArray = mergeSort(regularArray.slice(midIndex,regularArray.length));

        let leftIndex = 0 ;
        let rightIndex = 0 ;
        let mergeSortArray =[];
        while(leftSortArray.length > leftIndex && rightSortArray.length > rightIndex){
            if(leftSortArray[leftIndex] > rightSortArray[rightIndex] ){
                mergeSortArray.push(rightSortArray[rightIndex]);
                rightIndex++;
            }else{
                mergeSortArray.push(leftSortArray[leftIndex]);
                leftIndex++;
            }
        }

        if(leftSortArray.length > leftIndex){
            mergeSortArray =[...mergeSortArray,...(leftSortArray.slice(leftIndex, leftSortArray.length))];
        }

        if(rightSortArray.length > rightIndex){
            mergeSortArray = [...mergeSortArray,...(rightSortArray.slice(rightIndex, rightSortArray.length))]
        }

        return mergeSortArray;
    }
}

console.log(mergeSort(regularArray));

/*
*Better solution
*/

const mergeSortBetter = (regularArray) =>{
    const midIndex = regularArray.length / 2 ;
    if(regularArray.length == 1){
        return regularArray;
    }else{
        return mergeBetter(mergeSortBetter(regularArray.slice(0,midIndex)), mergeSortBetter(regularArray.slice(midIndex,regularArray.length)));
    }
}

const mergeBetter = (leftArray, rightArray) =>{
    let mergeArray =[];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] > rightArray[0]){
            mergeArray.push(rightArray.shift());
        }else{
            mergeArray.push(leftArray.shift());
        }
    }

    return [...mergeArray,...leftArray,...rightArray];
}

console.log(mergeSortBetter(regularArray));