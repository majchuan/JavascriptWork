/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    for(let i = 0 ; i < s.length; i++){
        for(let j = s.length -1 ; j >=0 ; j--){
            if(checkPalindrome(s, i, j)){
                const palindromeStr = s.slice(i,j+1);
                if(result.length < palindromeStr.length){
                    result = palindromeStr;
                }
            }
        }
    }

    return result;
};


const checkPalindrome=(s, i, j) =>{
    while(i < j){
        if(s[i] != s[j]) return false;
        i++;
        j--;
    }

    return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeFasterFunction = function(s) {
    const checkPalindrome=(i, j)=>{
       let left = i
       let right = j - 1
       while(left<right){
           if(s[left]!=s[right]) return false
           left += 1
           right -= 1
       }
       return true
   }

   for(let length=s.length;length>0;length--){

       for(let start=0;start<s.length-length+1;start++){

           if(checkPalindrome(start, start+length))return s.substring(start,start+length);
           
       }
   }
   return ""
   
};