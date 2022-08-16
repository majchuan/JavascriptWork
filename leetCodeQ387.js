/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let set = new Set();
    
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i], i + 1) == -1 && !set.has(s[i])) {
            return i;
        }
        set.add(s[i]);
    }
    
    return -1;
};

var firstUniqCharSlowApproach = function(s) {
    const hash_s ={};
    for(let i = 0 ; i < s.length ; i++){
        if(hash_s[s[i]] != null){
            hash_s[s[i]].push(i);
        }else{
            hash_s[s[i]] = [];
            hash_s[s[i]].push(i);
        }
    }
    for(let key in hash_s){
        if(hash_s[key].length == 1){
            return hash_s[key][0];
        }
    }
    return -1;
};

/*
Given a stream of characters, find the first non-repeating character from the stream. 
You need to tell the first non-repeating character in O(1) time at any moment.
*/
