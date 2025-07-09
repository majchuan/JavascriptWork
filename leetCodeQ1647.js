/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let res=0
    let arr = new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++
    }
    
    arr.sort((a,b)=>b-a)

  for(let i=1; i<26; i++){
        while(arr[i] && arr[i] >= arr[i-1]){
            arr[i]--
            res++
        }
    }
    
    return res
};


/**
 * @param {string} s
 * @return {number}
 */
var minDeletionsSlowApproach = function(s) {
    const hash_s = {};
    for(let i = 0 ; i < s.length; i++){
        hash_s[s[i]] ? hash_s[s[i]]++ : hash_s[s[i]] = 1;
    }

    let keys = Object.keys(hash_s).sort((a,b) => hash_s[b] - hash_s[a]);

    if(keys.length == 1) return 0 ;

    let count = 0 ;
    let isNotUnique = true;
    while(isNotUnique){
        for(let i = 0 ; i < keys.length-1 ; i++){
            if(hash_s[keys[i]] == 0) continue;
            if(hash_s[keys[i]] == hash_s[keys[i+1]]){
                isNotUnique = true;
                hash_s[keys[i+1]]--; 
                count++;
                keys.sort((a,b) => hash_s[b] - hash_s[a]);
                break;
            }else{
                isNotUnique = false;
            }
        }
    }

    return count;
};

var minDeletionsImproveFromFastestApproach = function(s) {
    const hash_s = {};
    for(let i = 0 ; i < s.length; i++){
        hash_s[s[i]] ? hash_s[s[i]]++ : hash_s[s[i]] = 1;
    }

    let keys = Object.keys(hash_s).sort((a,b) => hash_s[b] - hash_s[a]);

    if(keys.length == 1) return 0 ;

    let count = 0 ;
    for(let i = 1; i < keys.length; i++){
        while(hash_s[keys[i]] >= hash_s[keys[i-1]] && hash_s[keys[i]] != 0){
            hash_s[keys[i]]--;
            count++;
        }
    }

    return count;
};
const s ="bbcebab";
console.log(minDeletions(s));