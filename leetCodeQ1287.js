/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const hash_counter ={};
    const target = arr.length / 4 ; 

    for(let num of arr){
        if(hash_counter[num] != null){
            hash_counter[num]++;
        }else{
            hash_counter[num] = 1 ;
        }
        if(hash_counter[num] > target) return num ;
    }

    return -1;
};