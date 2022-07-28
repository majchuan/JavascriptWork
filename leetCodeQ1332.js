/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    if(s === '') {
        return 0
    }
    if(s === [...s].reverse().join('')) {
        return 1
    }
    return 2
    
};