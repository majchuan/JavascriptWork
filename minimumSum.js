/*
*Given an array of integers , perform some number k of opertions ,each operation consisis of removing any element from the array,
*dividing it and inserting the flooring of that result back into the array.
*Minimize the sum of element in the final array.
Example:
Input: N = 4, a[] = {20, 7, 5, 4}, K = 3 
Output: 17 
Explanation: 
Operation 1: {20, 7, 5, 4} -> {10, 7, 5, 4} 
Operation 2: {10, 7, 5, 4} -> {5, 7, 5, 4} 
Operation 3: {5, 7, 5, 4} -> {5, 3, 5, 4} 
No further operation can be performed. Therefore, sum of the array = 17.

Input: N = 4, a[] = {10, 4, 6, 16}, K = 2 
Output: 23
*/

const miniMumSum =(a,n,k) =>{
    let heap =[...a];
    heap.sort((a,b) => a-b);

    while(heap.length > 0 && k > 0){
        let maxVal = heap.pop();
        heap.push(Math.floor(maxVal/2));
        k--;
        heap.sort((a,b) => a-b);
    }

    return heap.reduce((a,b) => a+b,0);
}

const n = 4 , k = 3, a =[20,7,5,4];
const n1 = 4, k1 =2, a1 =[10,4,6,16];
console.log(miniMumSum(a1,n1,k1));