/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const result = new Array(26).fill(0);

    if(s.length != t.length) return false ;
    
    for(let i = 0 ; i < s.length ; i++){
        result[s.charCodeAt(i) - 97]++;
        result[t.charCodeAt(i) - 97]--;
    }

    for(let i = 0 ; i < result.length; i++){
        if(result[i] != 0) return false;
    }

    return true;
};