/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const length = needle.length;
    
    for(let i = 0; i < haystack.length; i++){
        if(haystack.substring(i,i+length) == needle){
            return i;
        }
    }
    
    return - 1;
};

/*
*Two pointer 
*/
var strStrTwoPointer = function(haystack, needle) {
    let i = 0, j =0;
    let checkLength = 0 ;
    while(i < haystack.length){
        while(haystack[j] == needle[checkLength]){
            j++;
            checkLength++;
            if(checkLength == needle.length) return i;

        }

        i++;
        j=i;
        checkLength = 0;
    }

    return -1;
};
