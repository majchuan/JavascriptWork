/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    const hash_s ={};
    const result = [];
    let wordLength = 0;
    for(let w of words){
        wordLength = w.length;
        hash_s[w] ? hash_s[w]++ : hash_s[w]=1;
    }
    
    let totalLength = wordLength * words.length ;
    
    
    let i = 0;
    while(i+totalLength <= s.length){
        let subStr = s.slice(i, i+ totalLength);
        let isMatch = true;
        //console.log(subStr);
        
        const subStrMap = {};
        for(let j = 0; j < subStr.length;){
            subStrMap[subStr.slice(j,j+wordLength)] ? subStrMap[subStr.slice(j, j+wordLength)]++ : subStrMap[subStr.slice(j,j+wordLength)] = 1 ;
            j = j+ wordLength;
        }
        
        for(let key in subStrMap){
            //console.log(key)
            if(hash_s[key] == null || subStrMap[key] != hash_s[key]){
                //console.log(key);
                isMatch = false;
                break;
            }
        }
        
        if(isMatch){
            result.push(i);
        }
        
        i++;
        
    }
        
    return result;
};