/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    for(let i = 0 ; i < words.length; i++){
        if(checkPalindromic(words[i]) == true){
            return words[i];
        }
    }
    return "";
};

const checkPalindromic = (word) => {
    let left = 0 ;
    let right = word.length -1 ;
    
    while(left < right){
        if(word[left] == word[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    
    return true;
}

const words= ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(words));