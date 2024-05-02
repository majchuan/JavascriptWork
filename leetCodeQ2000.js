/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let reverseWords="";
    let index=0;
    for(let w of word){
        reverseWords = w + reverseWords;
        if(w == ch){
            return reverseWords + word.slice(index+1);
        }
        index++;
    }
    return word;
};
