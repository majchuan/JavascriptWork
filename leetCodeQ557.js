/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.split(" ");
    const result = [];
    for(let w of sArr){
        result.push(w.split("").reverse().join(""));
    }

    return result.join(" ");
};