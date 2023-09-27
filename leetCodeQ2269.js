/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    const numStr = num.toString();
    const n = numStr.length;
    let str ='', count = 0;

    for(let i = 0 ; i < n ; i++){
        str += numStr[i];
        if( i >= k-1){
            if(parseInt(str) != 0 && num % parseInt(str) == 0){
                count++;
            }

            str = str.slice(1);
        }
    }

    return count;
};