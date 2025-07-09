/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPatternFastApproach = function(s) { 
    let sub = ""; 
    for (let i = 0; i < Math.floor(s.length / 2); i++) { 
      sub += s[i]; 
      if (sub.repeat(s.length / sub.length) === s) return true; 
    } 
    return false; 
};

var repeatedSubstringPattern = function(s) {
    let pattern = "";
    let isRepeated = true;
    for(let i = 0 ; i < Math.ceil(s.length / 2);){
        pattern += s[i];
        if(pattern == s.slice(i+1, i + 1 + pattern.length)){
            isRepeated = true;
            let left = i + 1 + pattern.length;
            while(left < s.length){
                if(pattern != s.slice(left, left + pattern.length) || s.slice(left, left + pattern.length) == null ){
                    isRepeated = false;
                    break;
                }
                left = left + pattern.length;
            }
            
            if(isRepeated) return isRepeated;

        }else{
            isRepeated = false;
        }
        i++;
    }

    return isRepeated;
};