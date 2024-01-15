/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const hash_w1 = {};
    const hash_w2 = {};

    for(let i = 0 ; i < word1.length ; i++){
        hash_w1[word1[i]] ? hash_w1[word1[i]]++ : hash_w1[word1[i]] = 1;
    }
    for(let i = 0 ; i < word2.length ; i++){
        hash_w2[word2[i]] ? hash_w2[word2[i]]++ : hash_w2[word2[i]] = 1; 
    }

    const word1Keys = Object.keys(hash_w1).sort();
    const word2Keys = Object.keys(hash_w2).sort();
    const word1Counts = Object.values(hash_w1).sort();
    const word2Counts = Object.values(hash_w2).sort();

    for(let i =  0 ; i < word1Keys.length ; i++){
        if(word1Keys[i] != word2Keys[i] || word1Counts[i] != word2Counts[i]){
            return false;
        }
    }

    return true;
};