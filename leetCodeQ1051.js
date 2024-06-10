/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let counter = 0 ;
    const mergeHeights = mergeSort(heights);
 
    for(let i = 0 ; i < heights.length; i++){
        if(heights[i] != mergeHeights[i]){
            counter++;
        }
    }

    return counter;
};

const mergeSort=(heights)=>{
    let start = 0 ;
    let end = heights.length -1;

    let mid = Math.floor((start + end)/2);

    if(heights.length <= 1){
        return heights;
    }
    const leftHeights = mergeSort(heights.slice(0,mid+1));
    const rightHeights = mergeSort(heights.slice(mid+1));
    
    let left = 0 ;
    let right = 0 ;
    const mergeSorted = [];
    while(left < leftHeights.length && right < rightHeights.length){
        if(leftHeights[left] <= rightHeights[right]){
            mergeSorted.push(leftHeights[left]);
            left++;
        }else{
            mergeSorted.push(rightHeights[right]);
            right++;
        }
    }

    while(left < leftHeights.length){
        mergeSorted.push(leftHeights[left]);
        left++;
    }

    while(right < rightHeights.length){
        mergeSorted.push(rightHeights[right]);
        right++;
    }
    return mergeSorted;
}
