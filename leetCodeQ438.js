/*
*438.Find All Anagrams in a String
*/
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