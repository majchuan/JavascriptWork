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
