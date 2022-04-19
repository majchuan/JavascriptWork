/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let left =0;
    let right = arr.length - k ;
    
    if(arr[0] > x) return arr.slice(0,k);
    if(arr[arr.length-1] < x) {
        return arr.slice(arr.length -k , arr.length);
    }
    
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(x - arr[mid] > arr[mid+k] -x){
            left = mid+1;
        }else{
            right = mid;
        }
    }
    
    return arr.slice(left, left+k);
    
};

const arr=[1,2,3,4,5], k =4, x=3;
console.log(findClosestElements(arr,k,x));