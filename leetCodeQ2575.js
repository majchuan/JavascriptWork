/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
    let num = 0;
    const result = new Array(word.length).fill(0);

    for(let i = 0 ; i < word.length; i++){
        num = num * 10 + parseInt(word[i]);
        if(num % m == 0){
            result[i] = 1;
        }
        num = num % m ;
    }

    return result;
};