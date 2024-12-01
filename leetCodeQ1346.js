/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const hash_arr = new Map();

    for(let i = 0 ; i < arr.length; i++){
        hash_arr.set(arr[i], hash_arr.get(arr[i]) || i);
    }

    for(let i = 0 ; i < arr.length; i++){
        if(hash_arr.has(arr[i]*2) && hash_arr.get(arr[i]*2) != i ){
            return true;
        }
    }

    return false;
};