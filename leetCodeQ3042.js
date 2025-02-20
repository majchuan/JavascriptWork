/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let result = 0 ;

    for(let i = 0 ; i < words.length; i++){
        for(let j = i+1 ; j< words.length; j++){
            if(isPrefixAndSuffix(words[i], words[j])){
                result++;
            }
        }
    }

    return result;
};

const isPrefixAndSuffix = (str1, str2) =>{
    const n1 = str1.length;
    const n2 = str2.length;
    if(str2.slice(0,n1) == str1 && str2.slice(n2-n1,n2) == str1){
        return true;
    }
    return false;
}