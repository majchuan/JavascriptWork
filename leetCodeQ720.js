/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    console.log(words);
    const hash_words ={};
    let result ="";

    for(let i = 0 ; i < words.length; i++){
        hash_words[words[i]] = i ;
    }

    for(let word of words){
        let subWord = "";
        let isBuildUp = true;
        for(let i = 0; i < word.length; i++){
            subWord += word[i];
            if(hash_words[subWord] == null){
                isBuildUp = false;
                break;
            }
        }

        if(isBuildUp && subWord.length > result.length ){
            result = subWord;
        }
    }

    return result;
};