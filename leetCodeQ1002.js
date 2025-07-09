/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const minFreq = new Array(26).fill(Number.MAX_SAFE_INTEGER);
    const result = [];

    for(let word of words){
        const freq = new Array(26).fill(0);
        for(let char of word){
            freq[char.charCodeAt(0) - 97]++;
        }

        for(let i = 0 ; i < 26 ; i++){
            minFreq[i] = Math.min(minFreq[i], freq[i]);
        }
    }

    for(let i = 0 ; i < 26 ; i++){
        while(minFreq[i] > 0){
            result.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }

    return result;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonCharsFastApproach = function(words) {
    let arr=[];

    let firstIndex = words[0];

    firstIndex.split('').forEach((item, index) => {
        if (words.every(word => word.includes(item))) {
            arr.push(item);
            words = words.map(word => word.replace(item, ''));
        }
    });

    return arr;
};

const words = ["bella", "label", "roller"];
console.log(commonCharsFastApproach(words));