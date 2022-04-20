/**
 * @param {string} word
 * @return {number}
 */
 var countVowelSubstrings = function(word) {
    const hash_words = new Map();
    let total = 0;
    for(let i = 0 ; i < word.length ; i++){
        hash_words.clear();
        for(let j = i ; j < word.length && isVowel(word[j]); j++){
            hash_words.set(word[j], hash_words.get(word[j]) ? 0 : hash_words.get(word[j])+1 );
            if(hash_words.size == 5){
                total++;
            }
        }
    }
    
    return total;
};
            
const isVowel =(w) =>{
    return w=="a" || w=="e" || w=="i" || w=="o" || w == "u";            
}

const word = "cuaieuouac";
console.log(countVowelSubstrings(word));