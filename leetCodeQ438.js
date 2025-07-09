/*
*438.Find All Anagrams in a String
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagramsSlideWindows = function(s, p) {
    const hash_p ={};
    const result = [];
    for(let s of p){
        hash_p[s] ? hash_p[s]++ : hash_p[s] = 1;
    }
    
    let left = 0, right = 0 , count = p.length;
    
    while(right < s.length){
        if(hash_p[s[right]] >=1){
            count--;
        }
        
        hash_p[s[right]]--;
        
        right++;
        
        if(right - left == p.length){
            if(count == 0){
                result.push(left);
            }
            
            if(hash_p[s[left]] >=0){
                count++;
            }
            
            hash_p[s[left]]++;
            left++;
        }
    }
    
    return result;
    
};

const findAnagrams = (s,p) =>{
    let pLength = p.length;
    let targetStr = {};
    for(let i= 0; i < p.length ; i++){
        targetStr[p[i]] ? targetStr[p[i]]++ : targetStr[p[i]]=1 ;
    }
    const anagrams = [];
    for(let i =0 ; i <= s.length - pLength; i++){
        const substring = s.substring(i, i+pLength);
        if(isAllContains(substring, targetStr)){
            anagrams.push(i);
        }

    }

    return anagrams;
}

const isAllContains = (destStr,targetStr) =>{
    testStr = {};
    for(let i=0; i< destStr.length ; i++){
        testStr[destStr[i]] ? testStr[destStr[i]]++ : testStr[destStr[i]]=1;
    }
    let keyLength = Object.keys(testStr).length;
    for(let item in testStr){
        if(targetStr[item] != testStr[item]){
            return false;
        }
    }

    return true;
}

const s="cbaebabacd";
const p="abc";
console.log(findAnagrams(s,p));