/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const hash_words1 = {};
    const hash_words2 = {};
    let count = 0;
    for(let word of words1){
        hash_words1[word] ? hash_words1[word]++ : hash_words1[word] = 1;
    }

    for(let word of words2){
        hash_words2[word] ? hash_words2[word]++ : hash_words2[word] = 1 ;
    }

    const keys1 = Object.keys(hash_words1);
    const keys2 = Object.keys(hash_words2);

    if(keys1.lenght >= keys2.length){
        for(let key of keys2){
            if(hash_words1[key] != null && hash_words1[key] == 1 && hash_words2[key] == 1){
                count++;
            }
        }
    }else{
        for(let key of keys1){
            if(hash_words2[key] != null && hash_words2[key] ==1 && hash_words1[key] ==1){
                count++;
            }
        }
    }

    return count;
};