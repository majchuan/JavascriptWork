/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = {
        "a" : 0,
        "e" : 0,
        "i" : 0,
        "o" : 0,
        "u" : 0
    }

    let left = 0, right = 0;
    let maxVowelLetters = Number.MIN_SAFE_INTEGER;
    while(right < s.length){
        if(vowels[s[right]] != null){
            vowels[s[right]]++;
        }
        if( right-left + 1  == k ){
            let vowelLettersCount = vowels["a"] + vowels["e"] + vowels["i"] + vowels["o"] + vowels["u"];
            maxVowelLetters = Math.max(maxVowelLetters, vowelLettersCount);
            if(vowels[s[left]] && vowels[s[left]] > 0){
                vowels[s[left]]--;
            }
            left++;
        }

        right++;
    }

    return maxVowelLetters;
};