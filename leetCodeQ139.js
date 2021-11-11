/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const hash_s = {};
    return checkWordDic(s, wordDict, hash_s);
};
const checkWordDic =(s, wordDict, hash_s) =>{    
    if(hash_s[s] != null){
        return hash_s[s] ; 
    }else if (s==""){
        return true ;
    }
    
    
    for(let i = 0; i < s.length ; i++){
        const test1 = s.slice(i);
        const testt2 = s.slice(0,i);
        if(wordDict.includes(s.slice(i)) && checkWordDic(s.slice(0,i),wordDict, hash_s)){
            hash_s[s] = true;
            return hash_s[s];
        }
    }
    hash_s[s] = false;
    return hash_s[s];
    
}

const  s = "leetcode", wordDict = ["leet","code"];
console.log(wordBreak(s,wordDict));