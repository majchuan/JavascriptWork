/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    const hash_s ={};
    for(let w of s){
        hash_s[w] ? hash_s[w]++ : hash_s[w] =1;
    }
    
    const sortHash_s = Object.keys(hash_s).sort((x,y) => hash_s[y] - hash_s[x]); 

    let result ="";
    for(let sortedKey of sortHash_s){
        let val = hash_s[sortedKey];
        for(let i = 0 ; i< val ; i++){
            result += sortedKey;
        }
    }
    
    return result;
};