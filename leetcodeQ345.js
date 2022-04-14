/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const sArr = s.split("");
    const vowels=["a","e","i","o","u"];
    let left = 0 ;
    let right =sArr.length -1;
    while(left < right){
        if(vowels.includes(sArr[left]) && vowels.includes(sArr[right])){
            const temp = sArr[right];
            sArr[right]= sArr[left];
            sArr[left] = temp;
            left++;
            right--;
        }
        
        if(vowels.includes(sArr[left]) && vowels.includes(sArr[right]) == false){
            right--;
        }
        
        if(vowels.includes(sArr[left]) == false && vowels.includes(sArr[right])){
            left++;
        }
        if(vowels.includes(sArr[left]) == false && vowels.includes(sArr[right]) == false){
            left++;
            right--;
        }
        console.log(sArr);
    }
    
    return sArr.join("");
};

const s = "leetcode";
console.log(reverseVowels(s));
