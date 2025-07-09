/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");

    if(s.length !== pattern.length) return false;

    const wordToChar = {};
    const charToWord = {};

    for(let i = 0; i < pattern.length; i++) {
        wordToChar[s[i]] = pattern[i];
        charToWord[pattern[i]] = s[i];
    };


    for(let i = 0; i < pattern.length; i++)  {
        if(charToWord[pattern[i]] !== s[i] || wordToChar[s[i]] !== pattern[i]) {
            return false;
        }
    }

    return true;
};

var wordPatternSlow = function(pattern, s) {
    const hash_pattern = {};
    const hash_s ={};
    const arr = s.split(" ");

    if(pattern.length != arr.length) return false;
    console.log(arr);
    for(let i = 0 ; i < pattern.length; i++){
        hash_pattern[pattern[i]] != null ? hash_pattern[pattern[i]].push(i) : hash_pattern[pattern[i]] = [i];
        if(arr[i] == 'constructor') arr[i] = 'constructor_';
        hash_s[arr[i]] != null ? hash_s[arr[i]].push(i) : hash_s[arr[i]] = [i];
    }

    let left1 = 0 ;
    let left2 = 0 ;

    while(left1 < pattern.length && left2 < s.length){
        
        if(hash_pattern[pattern[left1]].length != hash_s[arr[left2]].length) return false;
        
        const result1 = hash_pattern[pattern[left1]];
        const result2 = hash_s[arr[left2]];
           
        for(let i = 0 ; i< result1.length ; i++){
         
            if(result1[i] != result2[i]) return false;
        }

        left1++;
        left2++;
    }

    return true;
};

const pattern = "abba", s ="dog constructor constructor dog";

console.log(wordPattern(pattern, s));