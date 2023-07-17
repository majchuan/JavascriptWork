/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const hash_arr={};
    let length = 1 ;

    for(let num of arr){
        if(hash_arr[num - difference]){
            hash_arr[num] = hash_arr[num-difference] + 1;
        }else{
            hash_arr[num] = 1 ;
        }

        length = Math.max(length, hash_arr[num]);
    }

    return length;
};