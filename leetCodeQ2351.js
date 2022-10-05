/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    const hash_s ={};
    for(let i = 0; i < s.length; i++){
     
        if(hash_s[s[i]]){
            return s[i];
        }else{
            hash_s[s[i]] = 1;
        }
        
    }
    
    return "";
};