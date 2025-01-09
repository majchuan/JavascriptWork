/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    const n = pref.length;
    let result = 0;

    for(let word of words){
        if(word.slice(0,n) == pref){
            result++;
        }
    }

    return result;
};