/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    return findAllSubstr(s, 0 , 1, 0);
};

const findAllSubstr =(subStrs, start,end, counter)=>{
    
    if(start == subStrs.length && end == subStrs.length){
        return counter;
    }else{
        if(end == subStrs.length + 1){
            counter = findAllSubstr(subStrs,start+1,start+1, counter);
        }else{
            //console.log(subStrs.substring(start,end));
            if(subStrs.substring(start,end).length >0 && checkPalindromic(subStrs.substring(start,end))){
                counter++;
            }
            counter = findAllSubstr(subStrs,start, end+1, counter);
        }
    }
    return counter;
}

const checkPalindromic =(s)=>{
    let left = 0, right = s.length-1;
    while(left < right){
        if(s[left] != s[right]){
            return false ;
        }
        left++;
        right--;
    }

    return true;
}

const s = "abc" ; 
//console.log(countSubstrings(s));

/**
 * @param {string} s
 * @return {number}
 */
var countSubstringsFasterFunction = function(s) {
    let result =  0;

    for(let i = 0 ; i < s.length ; i++){
        result +=findPalindrom(s, i, i);
        result +=findPalindrom(s, i, i+1);
    }

    return result;
};

const findPalindrom = (s, left, right) =>{
    let counter = 0 ;
    while(left >= 0 && right < s.length){
        if(s[left] != s[right]) return counter;
        counter++;
        left--;
        right++;
    }

    return counter;
}

console.log(countSubstringsFastApproach("aaa"));