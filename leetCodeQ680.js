/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    for(let i = 0; i<s.length ; i++){
        let newStr = s.substring(0,i) + s.substring(i+1,s.length);
        let reverseStr = "";
        for(let j = newStr.length-1 ; j >=0 ; j--){
            reverseStr += newStr[j];
        }
        
        if(newStr=== reverseStr){
            return true;
        }
    }
    return false;
};

const s ="abcedba";
console.log(validPalindrome(s));

const validPalindrome2 = (s) =>{
    let low = 0;
    let high = s.length-1;
    while(low < high){
        if(s[low] != s[high]){
            return checkPalind(s,low+1,high) || checkPalind(s,low, high--);
        }

        low++;
        high--;
    }
    return true;
}

const checkPalind =(s,s1,s2) =>{
    while(s1<s2){
        if(s[s1] != s[s2]){
            return false;
        }
        s1++;
        s2++;
    }
}

console.log(validPalindrome2(s));
