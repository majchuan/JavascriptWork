/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const hash_word ={};

    for(let i = 0 ; i < word.length ; i++){
        if(hash_word[word[i]] != null && word[i] >= 'a' && word[i] <='z'){
            hash_word[word[i]] = i;
        }else if(hash_word[word[i]] == null ){
            hash_word[word[i]] = i ;
        }
    }

    let count = 0;
    const wordSet = new Set(word);
    for(let w of wordSet){
        if(w >='a' && w <= 'z' && hash_word[w] < hash_word[w.toUpperCase()]){
            count++;
        }
    }

    return count;
};