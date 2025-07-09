/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
/*
* 
If we expand to another vowel, 
we know that this new substring is also valid. 
If the new character is a consonant, 
consonantCount exceeds k and we no longer have a valid substring. 
Thus, we can continue expanding our end boundary to find new substrings 
until we encounter a consonant. Precisely, 
if the next consonant is at index nextConsonantIndex, 
then we have a total of nextConsonantIndex - end new valid substrings. 
Instead of manually iterating to find the next consonant each time, 
we can precompute an array nextConsonant,
where nextConsonant[i] stores the index of the next consonant after index i. 
With this, we can quickly determine how many new valid substrings 
can be formed from any valid window.
*/
var countOfSubstrings = function(word, k) {
    let result = 0 ;
    let start = 0 ;
    let end = 0 ;
    let consonantCount = 0;

    const hash_words = new Map();

    const nextConsonant = new Array(word.length);

    let nextConsonantIndex = word.length;

    for(let i = word.length - 1; i >= 0 ; i--){
        nextConsonant[i] = nextConsonantIndex;
        if(isVowel(word[i]) == false){
            nextConsonantIndex = i ;
        }
    }

    while(end < word.length){
        if(isVowel(word[end])){
            hash_words.set(word[end], (hash_words.get(word[end]) || 0) + 1 );
        }else{
            consonantCount++;
        }

        while(consonantCount > k){
            if(isVowel(word[start])){
                hash_words.set(word[start], hash_words.get(word[start]) - 1);

                if(hash_words.get(word[start]) == 0){
                    hash_words.delete(word[start]);
                }
            }else{
                consonantCount--;
            }

            start++;
        }

        while(start < word.length && checkVowel(hash_words) && consonantCount == k){

            result += nextConsonant[end] - end ; 
            if(isVowel(word[start])){
                hash_words.set(word[start], hash_words.get(word[start]) - 1);

                if(hash_words.get(word[start]) == 0){
                    hash_words.delete(word[start]);
                }
            }else{
                consonantCount--;
            }

            start++;
        }

        end++;
    }

    return result;
};

const isVowel = (c) =>{
    return c == 'a' || c =='e' || c=='i' || c =='o' || c == 'u';
}

const checkVowel = (hash_words) =>{
    const vowel = ['a', 'e', 'i', 'o','u'];
    for(let i = 0 ; i < 5; i++){
        if(hash_words.has(vowel[i]) < 1){
            return false;
        }
    }

    return true;
}