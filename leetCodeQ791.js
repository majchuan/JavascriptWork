/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let answer = "";
    let freq = {};

    for(let char of s){
        freq[char] ? freq[char]++ : freq[char] = 1 ;
    }

    for(let o of order){
        if(freq[o] != null){
            for(let i = 0 ; i < freq[o]; i++){
                answer += o; 
            }
            delete freq[o];
        }
    }

    for(let key in freq){
        for(let i = 0 ; i < freq[key] ; i++){
            answer += key;
        }
    }
    
    return answer;
};