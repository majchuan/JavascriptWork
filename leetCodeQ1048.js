/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length);

    return dfs(words, 0, "", new Map());
};

const dfs=(words, index, word, visited) =>{
    if(index == words.length){
        return 0;
    }

    let key = index.toString() + word ; 

    if(visited.has(key) ) return visited.get(key);

    let maxLength = 1 ;
    if(checkPred(word,words[index])){
        maxLength = Math.max( dfs(words, index + 1, words[index], visited) + 1 , dfs(words, index+1 , word, visited));
    }else{
        maxLength = dfs(words, index + 1 , word, visited);
    }

    visited.set(key, maxLength); 

    return visited.get(key);
}

const checkPred = (preWord, currWord) =>{
    let left = 0; right = 0 ; 

    if(preWord.length == 0) return true;

    if(currWord.length - preWord.length != 1) return false ; 

    while(right < currWord.length){
        if(preWord[left] == currWord[right]){
            left++;
        }
        right++;
    }

    return left == preWord.length;
}

const words = ["a","b","ba","bca","bda","bdca"];
console.log(longestStrChain(words));