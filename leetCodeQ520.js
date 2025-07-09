/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase() == word) {
        return true;
    }

    if(word.toLocaleLowerCase() == word){
        return true;
    }

    if(word[0].toUpperCase() == word[0] && word.slice(1,word.length).toLowerCase() == word.slice(1,word.length)){
        return true;
    }

    return false;
};