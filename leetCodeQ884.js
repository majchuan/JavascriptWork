/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const hash_s1 = new Map();
    const hash_s2 = new Map();
    const s1_arr = s1.split(' ');
    const s2_arr = s2.split(' ');
    const result = [];
    for(let s of s1_arr){
        if(hash_s1.has(s)){
            hash_s1.set(s, hash_s1.get(s)+1);
        }else{
            hash_s1.set(s,1);
        }
    }
    
    for(let s of s2_arr){
        if(hash_s2.has(s)){
            hash_s2.set(s, hash_s1.get(s)+1);
        }else{
            hash_s1.set(s,1);
        }
    }

    for(let s of s1_arr){
        if(hash_s2.has(s) == false && hash_s1.get(s) == 1){
            result.push(s);
        }
    }

    for(let s of s2_arr){
        if(hash_s1.has(s) == false && hash_s2.get(s)==1){
            result.push(s);
        }
    }

    return result;
};













//test