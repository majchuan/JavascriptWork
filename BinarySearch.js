/*
*Binary Search is searching technique which works on Divide and Conquer approach. 
It used to search any element in a sorted array.
As compared to linear, binary search is much faster with Time Complexity of O(logN) 
whereas linear search algorithm works in O(N) time complexity.
*/

const sortedArray = [1,3,5,7,8,9]
const item = 8 ;
 
const findIndexValue = (sortedArray, start,end, item) => {
    const midIndex = Math.floor( (start + end +1)/2);

    if(sortedArray[midIndex] == item) return midIndex;

    if(sortedArray[midIndex] > item) {
        //search left
        return findIndexValue(sortedArray, 0, midIndex-1,item);
    }else{
        //search right
        return findIndexValue(sortedArray, midIndex, sortedArray.length-1 ,item);
    }
}

console.log(findIndexValue(sortedArray,0, sortedArray.length -1 ,item));

/*
*use binary search to sorted the array 
*/

const regularArray = [5,7,3,1,8,6,9,2,4]

const sortedArrayByBinarySearch = (regularArray, startIndex, endIndex) =>{
    const midIndex = Math.floor((startIndex+endIndex+1)/2);
    const left = startIndex ;
    const right = endIndex ;  
    while(startIndex < endIndex){
        while(regularArray[startIndex] < regularArray[midIndex] ){
            startIndex++;
        }

        while(regularArray[endIndex] > regularArray[midIndex] ){
            endIndex--;
        }

        if(startIndex < endIndex){
            let temp = regularArray[endIndex];
            regularArray[endIndex] = regularArray[startIndex];
            regularArray[startIndex] = temp;
        }

    }

    if(left+1 < startIndex ){
        sortedArrayByBinarySearch(regularArray, 0 , midIndex);
    }
    if(startIndex + 1 < right){
        sortedArrayByBinarySearch(regularArray, startIndex+1, right);
    }
    
    return regularArray ;
}

console.log(sortedArrayByBinarySearch(regularArray, 0 , regularArray.length -1));