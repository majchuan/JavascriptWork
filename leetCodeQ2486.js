/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let left = 0 , right =  0;

    while(left < s.length){
        if(s[left] == t[right]){
            right++;
        }
        left++;
    }

    return t.length - right;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharactersSecondApproach = function(s, t) {
    let left = 0;
    let right = 0;

    while(left < s.length){
        while(s[left] == t[right] && left < s.length){
            left++;
            right++;
        }
        left++;
    }

    return t.length - right;
};
