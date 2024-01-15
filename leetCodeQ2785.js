/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = ['a','e','i','o','u'];
    const str = s.split('');
    const sortedVowels =[];
    const vowelsIndex =[];

    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i]) || vowels.includes(str[i].toLowerCase())){
            sortedVowels.push(str[i]);
            vowelsIndex.push(i);
        }
    }

    sortedVowels.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    for(let i = 0 ; i < sortedVowels.length ; i++){
        str[vowelsIndex[i]] = sortedVowels[i];
    }

    return str.join('') ;
    
};