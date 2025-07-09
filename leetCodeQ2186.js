/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);
    for (i = 0; i < s.length; i++){
        count1[s.charCodeAt(i) - 97]++;
    }
    for (i = 0; i < t.length; i++){
        count2[t.charCodeAt(i) - 97]++;
    }
    let total = 0;
    for (i = 0; i < 26; i++){
        total += Math.abs(count1[i] - count2[i]);
    }
    return total;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minStepsTwoHashTables = function(s, t) {
    const hash_s ={};
    const hash_t ={};
    let steps = 0;

    for(let c of s){
        hash_s[c] ? hash_s[c]++ : hash_s[c] =1  ;
    }

    for(let c of t){
        hash_t[c] ? hash_t[c]++ : hash_t[c] = 1 ;
    }

    for(let c of s){
        if(hash_t[c] >0){
            hash_t[c]--;
        }
    }

    for(let key in hash_t){
        steps+=hash_t[key];
    }

    for(let c of t){
        if(hash_s[c] >0){
            hash_s[c]--;
        }
    }

    for(let key in hash_s){
        steps+=hash_s[key]
    }
    return steps;
};