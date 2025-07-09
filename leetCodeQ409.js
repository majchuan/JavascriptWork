/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    hash_s = {};
    for(let str of s){
        hash_s[str] ? hash_s[str]++ : hash_s[str] =1;
    }
    
    let evenCounter = 0;
    let oddCounter = 0;
    for(let key in hash_s){
        if(hash_s[key] % 2 == 0){
            evenCounter += hash_s[key]; 
        }else if(hash_s[key] != 1 && (hash_s[key] -1) % 2 == 0 ){
            evenCounter += hash_s[key] -1;
            oddCounter +=1;
        }else{
            oddCounter += hash_s[key];
        }
    }
    
    return oddCounter > 0 ? evenCounter+1 : evenCounter;
    
};


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeVersion2 = function(s) {
    const hash_s = {};
    let isOdd = false;
    let evenCounter = 0;
    for(let letter of s){
        hash_s[letter] ? hash_s[letter]++ : hash_s[letter] = 1;
    }

    for(let key in hash_s){
        if(hash_s[key] % 2 == 0){
            evenCounter += hash_s[key];
        }else{
            isOdd = true;
            evenCounter += hash_s[key] -1;
        }
    }

    if(isOdd) evenCounter++;

    return evenCounter;

};