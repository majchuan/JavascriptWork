/**
 * @param {string} word
 * @return {number}
 */

var addMinimum = function(word) {
    const w = ["a","b","c"]
    let result = 0;
    let currentIndex = 0;
    while (currentIndex < word.length) {
        for (let i = 0; i < 3; i++) {
            if (word.charAt(currentIndex) == w[i]) {
                currentIndex++;
            } else {
                result += 1;
            }
        }
    }
    return result;
};



const word = "aaaaab";
console.log(addMinimum(word));