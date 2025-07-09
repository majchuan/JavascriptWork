/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const hash_s = new Map();
    let result = 1;
    for(let i = 0 ; i < s.length; i++){
        if(hash_s.has(s[i])){
            result++;
            hash_s.clear();
        }

        hash_s.set(s[i], 1);
    }

    return result;
};