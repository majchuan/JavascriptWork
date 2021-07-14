/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let cleanString = "";
    const regex =/[A-Za-z]/g
    
    for(let i =0; i< s.length; i++){
        if(s[i].match(regex)){
            cleanString += s[i].toLowerCase();;
        }
    }
    cleanString = cleanString.trim();
    let low = 0;
    let high = cleanString.length-1;
    if(cleanString ==""){
        return true;
    }
    if(cleanString.length < 2 && cleanString !="") {
        return false;
    }
    while(low < high){
        if(cleanString[low] != cleanString[high]){
            return false;
        }else{
            low++;
            high--;
        }
    }
    
    return true;
};

const s ="  ";
console.log(isPalindrome(s));