/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    const s_1 = word1.join("");
    const s_2 = word2.join("");
    return s_1 === s_2 ;
};