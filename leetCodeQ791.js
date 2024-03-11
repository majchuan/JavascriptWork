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


/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortStringSlowApproach = function(order, s) {
    const orderS = [] ;
    const hash_s ={};
    s=s.split('').sort().join('');
    for(let i = 0 ; i< s.length ; i++){
        if(hash_s[s[i]] == null){
            hash_s[s[i]] = [];
            hash_s[s[i]].push(i);
        }else{
            hash_s[s[i]].push(i);
        }
    }
    for(let i =0 ; i < order.length ; i++){
        if(s.includes(order[i])){
            orderS[i] = findAllString(order[i],hash_s);
        }
    }
    let output = orderS.join('');
    for(let item in hash_s){
        for(let i = 0; i < hash_s[item].length ; i++){
            output += item;
        }
    }
    return output;
};

const findAllString = (repeaterS , hash_s) =>{
    const length = hash_s[repeaterS].length;
    let sumS = "";
    for(let i= 0 ; i< length; i++){
        sumS +=repeaterS;
    }
    delete hash_s[repeaterS];
    return sumS;
    
}