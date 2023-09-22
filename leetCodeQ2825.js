/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let left = 0 ;
    let right = 0 ;

    while(right < str1.length){
        if(str1[right] == str2[left] || ((str1.charCodeAt(right) - 97 + 1) % 26) == ((str2.charCodeAt(left) - 97) % 26)){
            left++;
            right++;
        }else{
            right++;
        }

        if(left == str2.length) return true;
    }

    return false;
};