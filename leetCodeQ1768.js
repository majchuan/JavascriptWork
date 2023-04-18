/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0; j = 0;
    let result ="";
    while(i < word1.length && j < word2.length){
        result += word1[i] + word2[j];
        i++;
        j++;
    }

    while( i < word1.length){
        result += word1.slice(i);
        break;
    }

    while(j < word2.length){
        result += word2.slice(j);
        break;
    }

    return result;
};