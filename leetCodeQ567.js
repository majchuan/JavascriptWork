/**
 * @param {string} s1
 * @param {string} s2
 * @returns{boolean}
 */

var checkInclusion = function(s1, s2){
    const hash_s={};
    for(let s of s1){
        hash_s[s] ? hash_s[s]++ : hash_s[s]=1;
    }

    let left = 0, right = 0, count = s1.length;

    while(right < s2.length){
        if(hash_s[s2[right]] >=1){
            count--;
        }

        hash_s[s2[right]]--;
        right++;

        if(right - left == s1.length){
            if(count == 0){
                return true;
            }

            if(hash_s[s2[left]] >=0){
                count++;
            }

            hash_s[s2[left]]++;
            left++;
        }
    }

    return false;
}