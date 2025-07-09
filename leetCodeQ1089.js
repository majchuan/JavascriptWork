/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let left = 0; left < arr.length; left++) {
       if (arr[left] === 0) {
           for (let right = arr.length - 1; right >= left + 1; right--) {
               arr[right] = arr[right - 1];
           }
           left++;
       }
   }
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros1 = function(arr) {

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == 0 && i < arr.length -1){
            let right = arr.length -1;
            while(right > i+1){
                arr[right] = arr[right-1];
                right--;
            }
            arr[i+1] = 0 ;
            i++;
        }
    }
};