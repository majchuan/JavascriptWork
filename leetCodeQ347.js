/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
*Quick Sort
*/
var topKFrequentQuickSort = function(nums, k) {
    const map = new Map();
    for(let n of nums) map.set(n, (map.get(n) || 0) + 1);

    const keys = [...map.keys()], finalIdx = keys.length - k;
    
    let start = 0, end = keys.length-1;
    
    while(start <= end) {
        const pivot = Math.floor(Math.random() * (end - start + 1)) + start;
        const pivotIdx = pivotHelper(pivot, start, end);
        
        if(pivotIdx === finalIdx) return keys.slice(finalIdx);
        if(pivotIdx < finalIdx) start = pivotIdx + 1;
        else end = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        // move pivot away to the end
        swap(pivot, end);
        let swapIdx = start;
        
        for(let i = start; i < end; i++) {
            if(map.get(keys[i]) < map.get(keys[end])) {
                swap(swapIdx, i); swapIdx++;
            }
        }
        swap(swapIdx, end);
        return swapIdx;
    }
    
    function swap(i, j) {
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
* Merge sort
*
*/
var topKFrequentMergeSort = function(nums, k) {
    const hash_nums = new Map();
    for(let num of nums){
        if(hash_nums.has(num)){
            hash_nums.set(num, hash_nums.get(num)+1);
        }else{
            hash_nums.set(num,1);
        }
    }
    const keys = [...hash_nums.keys()];
    return mergeSort(keys, hash_nums).slice(keys.length - k);
 
};

const mergeSort = (nums, hash_nums) =>{
    
    let start = 0 ; 
    let end = nums.length -1;
    let mid = Math.floor((start + end)/2);

    if(nums.length == 1) return nums;

    const leftNums = mergeSort(nums.slice(0,mid+1) , hash_nums);
    const rightNums = mergeSort(nums.slice(mid+1), hash_nums);

    const mergeSortNums = [];
    let left = 0;
    let right = 0;
    while(left < leftNums.length && right < rightNums.length){
        if( hash_nums.get(leftNums[left]) < hash_nums.get(rightNums[right])){
            mergeSortNums.push(leftNums[left]);
            left++;
        }else{
            mergeSortNums.push(rightNums[right]);
            right++;
        }
    }

    while(left < leftNums.length){
        mergeSortNums.push(leftNums[left]);
        left++;
    }

    while(right < rightNums.length){
        mergeSortNums.push(rightNums[right]);
        right++;
    }

    return mergeSortNums;
}