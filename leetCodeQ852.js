/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0 ; 
    let right = arr.length -1 ;

    while(left < right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] > arr[mid+1] && arr[mid-1] < arr[mid]){
            return mid;
        }

        if(arr[mid] > arr[mid+1] && arr[mid-1] > arr[mid]){
            right = mid;
        }

        if(arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1]){
            left = mid;
        }
    }

    return -1;
    
};