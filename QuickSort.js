/*
*
Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition 
and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets. 
So, here are the steps how Quick sort works in simple words.

First select an element which is to be called as pivot element.
Next, compare all array elements with the selected pivot element and arrange them in such a way that, 
    elements less than the pivot element are to it's left and greater than pivot is to it's right.
Finally, perform the same operations on left and right side elements to the pivot element.
*/

const regularArray =[10,9,1,5,6,8,2,4,3,7,0]

const quickSort =(regularArray, left , right) =>{
    let index = 0;
    if(regularArray.length > 1){
        index = partionElement(regularArray, left, right);
        if(left < index){
            quickSort(regularArray, 0 , index);
        }

        if(index + 1 < right){
            quickSort(regularArray, index+1, right);
        }
    }

    return regularArray; 
}

const partionElement = (regularArray,left,right)=>{
    let leftIndex = 0 ;
    let rightIndex = regularArray.length -1 ;
    const index = Math.floor( (left+right) /2) ;
    while(leftIndex < rightIndex){
        while(regularArray[leftIndex] < regularArray[index]){
            leftIndex++;
        }

        while(regularArray[rightIndex] > regularArray[index]){
            rightIndex--;
        }

        if(leftIndex < rightIndex){
            let temp = regularArray[rightIndex];
            regularArray[rightIndex] = regularArray[leftIndex];
            regularArray[leftIndex] = temp ;
        }
    }

    return leftIndex ;
}

//console.log(quickSort(regularArray,0,regularArray.length-1));

/*
*Quick sort by partion last element 
*/

const quickSortPartitionLastElement = (nums, low, high) =>{

    if(low < high){
        const pi = paritionLastElement(nums, low ,high);
        quickSortPartitionLastElement(nums, low ,pi-1);
        quickSortPartitionLastElement(nums, pi+1 ,high);
    }

    return nums;
}

const paritionLastElement =(nums, low ,high) =>{
    const pivot = nums[high];
    let i = low -1 ;

    for(let j = low; j < high ; j++){
        if(nums[j] < pivot){
            i++;
            swap(nums,i,j);
        }
    }
    swap(nums, i+1 , high);
    return i+1;
}

const swap =(nums, low, high) =>{
    const temp = nums[low];
    nums[low] = nums[high];
    nums[high] = temp;
}

const nums1 =[6,5,4,3,2,1];
console.log(quickSortPartitionLastElement(nums1,0, nums1.length-1));