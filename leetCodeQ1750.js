/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0 ;
    let right = s.length -1;

    while(left < right && s[left] == s[right]){
        const curr = s[left];

        while(left <= right && s[left] == curr ){
            left++;
        }

        while(left <= right && s[right] == curr){
            right--;
        }
    }

    return right - left + 1 ;
};


/**
 * @param {string} s
 * @return {number}
 */
var minimumLengthSecondApproach = function(s) {
    let left = 0 ;
    let right = s.length -1;

    while(left < right){
        if(s[left] != s[right]) return right - left + 1;

        if(s[left] == s[right] && s[left] != s[left+1] && s[right] != s[right-1]){
            left++;
            right--;
        }else{
            while(s[left] == s[left+1]){
                left++;
            }

            while(s[right] == s[right-1]){
                right--;
            }
        }
    }

    return (right - left + 1) < 0 ? 0 : right - left + 1 ;
};