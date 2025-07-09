/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const hash_arr = new Map();

    for(let i = 0 ; i < arr.length; i++){
        if(hash_arr.has(arr[i])){
            hash_arr.get(arr[i]).push(i);
        }else{
            hash_arr.set(arr[i],[i]);
        }
    }

    const hash_keys = [...hash_arr.keys()];
    hash_keys.sort((a,b) => a - b);
    let rank = 1 ;
    for(let key of hash_keys){
        for(let index of hash_arr.get(key)){
            arr[index] = rank;
        }
        rank++;
    }

    return arr;

};