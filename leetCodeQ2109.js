/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let left = 0 ;
    let right = 0 ;
    let result = "";

    while(left < s.length){
        if(left == spaces[right]){
            result+=" " + s[left];
            right++;
        }else{
            result += s[left];
        }
        left++;
    }

    return result;
};