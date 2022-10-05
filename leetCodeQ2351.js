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

const sortString = (s) =>{
    const letters = new Array(26).fill(0);
    let result ="";
    for(let i = 0 ; i < s.length; i++){
        letters[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < 26; i++){
        for(let j = 0 ; j < letters[i]; j++){
            result += String.fromCharCode(i + 'a'.charCodeAt(0));
        }
    }

    return result;
}

const s = "bbccdefbbaa";
console.log(sortString(s)) ; 
