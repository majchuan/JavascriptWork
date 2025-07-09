/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0 ;
    let maxLength = 0
    const hash_s = {};
    while(right < s.length){
        if(hash_s[s[right]] == null){
            hash_s[s[right]] = s[right];
            right++;
        }else{
            if(right - left > maxLength){
                maxLength = right - left;
            }
            if(hash_s[s[left]]){
                delete hash_s[s[left]];
            }
            
            left++;
        }
    }
    
    if(right - left > maxLength){
        maxLength = right - left;   
    }
    
    return maxLength;
};