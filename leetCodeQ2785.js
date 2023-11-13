/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ['a','e','i','o','u'];
    const str = s.split('');
    const hash_vowels =[];
    const vowelsIndex =[];

    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i]) || vowels.includes(str[i].toLowerCase())){
            hash_vowels.push(str[i]);
            vowelsIndex.push(i);
        }
    }

    hash_vowels.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    for(let i = 0 ; i < hash_vowels.length ; i++){
        str[vowelsIndex[i]] = hash_vowels[i];
    }

    return str.join('') ;
    
};