/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    const result =[];
    
    for(let i = 0 ; i < words.length ; i++){
        let isPatternMatched = true;
        let isWordMatched = true;
        const hash_pattern ={};
        const hash_word={};
        for(let j = 0 ; j < words[i].length; j++){
            //console.log(words[i][j],pattern[j]);   
            if(hash_pattern[words[i][j]] != null && hash_pattern[words[i][j]] != pattern[j]){
                isPatternMatched = false;
                break;
            }
            
            if(hash_word[pattern[j]] != null && hash_word[pattern[j]] != words[i][j]){
                isWordMatched = false;
                break;
            }
            hash_pattern[words[i][j]] = pattern[j];
            hash_word[pattern[j]] = words[i][j];
        }
        //console.log(hash_pattern, hash_word);
        if(isPatternMatched && isWordMatched){
            result.push(words[i]);
        }
        
        
    }
    
    return result;
};