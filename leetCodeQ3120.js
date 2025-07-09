/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const set = new Set(word)
    let ans = 0
    for (let c of set) {
        if (c >= 'a' && c <= 'z' && set.has(c.toUpperCase())) ans++
    }
    return ans
};