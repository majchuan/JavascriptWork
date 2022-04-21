
/**
 * @param {string} word
 * @return {number}
 */
/*
If s[i] is vowel, there are (i + 1) * (N - i) substrings 
that contain s[i] where i + 1 and N - i are the number of possible left and right end points of the substrings, respectively.
*/
var countVowels = function(word) {
    let totalVowels = 0;
    for(let i =0 ; i < word.length ; i++){
        if(isVowels(word[i])){
            totalVowels += (i+1) *(word.length - i);
        }
    }
    return totalVowels;
};

 var countVowelsSlow = function(word) {
    let numberOfVowels = 0 ;
    let totalVowels = 0;
    for(let i =0 ; i < word.length ; i++){
        let subStr ="";
        for(let j = i ; j < word.length; j++){
            if(isVowels(word[j])){
                numberOfVowels++;
            }
            subStr += word[j];
            //console.log(subStr, numberOfVowels);
            totalVowels += numberOfVowels;
        }
        numberOfVowels = 0 ;
    }
    return totalVowels;
};

const isVowels=(w) =>{
    //console.log(w, w =="a" || w =="e" || w=="i" || w=="o" || w =="u");
    return w =="a" || w =="e" || w=="i" || w=="o" || w =="u" ;
}
