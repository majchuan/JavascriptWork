/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const freq = new Array(26).fill(0);
    let repeat = '';
    for(let i=0; i< s.length; i++){
        freq[s[i].charCodeAt(0) - 97]++;
    }

    let index = 25;
    while(index >= 0){
        if(freq[index] == 0){
            index--;
            continue;
        }

        let currLimit = Math.min(freq[index], repeatLimit);
        repeat += String.fromCharCode(97 + index).repeat(currLimit);
        freq[index] -= currLimit;

        if(freq[index] > 0){
            let smallerIndex = index - 1;
            while(smallerIndex >= 0 && freq[smallerIndex] ==0){
                smallerIndex--;
            }
            if(smallerIndex < 0){
                break;
            }

            repeat += String.fromCharCode(97 + smallerIndex);
            freq[smallerIndex]--;
        }
    }

    return repeat;
};
