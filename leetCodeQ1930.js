/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const palindromesSet = new Set(s);
    let result = 0 ;

    for(let char of palindromesSet){
        const firstIndex = s.indexOf(char);
        const lastIndex = s.lastIndexOf(char);

        result += new Set(s.slice(firstIndex+1, lastIndex)).size;

    }

    return result;
};