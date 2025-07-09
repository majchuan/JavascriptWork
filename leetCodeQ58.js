/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ");
    return words.pop().length;
};


const s="   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));