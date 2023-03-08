/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const hash_arr={};
    for(let str of arr){
        hash_arr[str] ? hash_arr[str]++ : hash_arr[str] =1;
    }
    const keys = Object.keys(hash_arr);
    let count = 0;
    for(let key of keys ){
        if(hash_arr[key] == 1){
            count++;
            if(count == k){
                return key;
            }
        }
    }

    return "";
};