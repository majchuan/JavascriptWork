/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const hash_words = new Set(allowed);
    let counter = 0 ;
    for(let word of words){
        let isConsistent = true;
        for(let i = 0 ; i < word.length ; i++){
            if(!hash_words.has(word[i])){
                isConsistent = false;
                break;
            }
        }

        if(isConsistent){
            counter++;
        }   
    }

    return counter;
};
