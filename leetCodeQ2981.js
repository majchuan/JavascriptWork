/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const map_s = new Map();
    let temp = '';
    let maxLen = -1;

    for(let i = 0 ; i < s.length ; i++){
        for(let j = i ; j < s.length; j++){
            if(s[i] == s[j]){
                temp +=s[i];
                const value = (map_s.get(temp) || 0) + 1;
                map_s.set(temp, value);

                if(value >= 3){
                    maxLen = Math.max(maxLen, temp.length);
                } 
            }else{
                break;
            }
        }
        temp='';
    }

    return maxLen;
};


/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthBinarySearch = function(s) {
    let l = 1;
    let r = s.length;
    let max = -1;

    const hasSpecial = (s, windowLength) => {
        let l = 0;
        const map = new Map();

        for (let r = 0; r < s.length; r++) {
            if (r > 0 && s[r] !== s[r - 1]) {
                l = r;
            }

            if (r - l + 1 === windowLength) {
                map.set(s[r], (map.get(s[r]) || 0) + 1);

                if (map.get(s[r]) >= 3) {
                    return true;
                }

                l++;
            }
        }

        return false;
    }

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (hasSpecial(s, mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return r === 0 ? -1 : r; 
};

const s = 'aaaa';
console.log(maximumLengthBinarySearch(s));