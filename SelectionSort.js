/*
*Selection sort:
The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) 
from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted. 
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order)
from the unsorted subarray is picked and moved to the sorted subarray. 
Following example explains the above steps: 
*/

const regularArray =[10,9,8,7,1,2,3,5,4,6]

const sortedArray = (regularArray) =>{
    let temp = -1 ;
    let minimumIndex = -1 ;
    for(let i = 0; i< regularArray.length ; i++){
        for(let j = i+1; j < regularArray.length ; j++){
            if(regularArray[i] > regularArray[j] && (regularArray[i] - regularArray[j] > temp)){
                temp = regularArray[i] - regularArray[j] ;
                minimumIndex = j ;
            }
        }
        //swap value
        if(temp != -1 && minimumIndex != -1){
            temp = regularArray[minimumIndex];
            regularArray[minimumIndex] = regularArray[i];
            regularArray[i] = temp;
            temp = -1;
            minimumIndex = -1; 
        }
    }

    return regularArray;
}

console.log(sortedArray(regularArray)); 

//Better solution

const sortedArrayBetter = (regularArray) =>{
    let  minimumIndex =  -1;
    for(let i= 0; i < regularArray.length ; i++){
        minimumIndex = i ;
        for(let j=i+1; j < regularArray.length ;j++){
            if(regularArray[j] <  regularArray[minimumIndex]){
                minimumIndex = j;
            }
        }
        //swap
        let temp = regularArray[minimumIndex];
        regularArray[minimumIndex] = regularArray[i];
        regularArray[i] = temp;
    }

    return regularArray;
}

console.log("Better Solution",sortedArrayBetter(regularArray));