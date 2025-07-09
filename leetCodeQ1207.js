/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash_num = new Map();
    for(let num of arr){
        if(hash_num.has(num)){
            hash_num.set(num, hash_num.get(num)+1);
        }else{
            hash_num.set(num,1);
        }
    }

    const set = new Set(hash_num.values());
    return set.size == hash_num.size;
};