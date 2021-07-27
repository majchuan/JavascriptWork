/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    if(s.split('').sort().join('') == t.split('').sort().join('')) return 0 ;
    hash_s ={};
    hash_t ={};
    hash_w ={};
    
    for(let str of s){
        hash_s[str] ? hash_s[str]++ : hash_s[str] = 1;
    }
    
    for(let str of t){
        hash_t[str] ? hash_t[str]++ : hash_t[str] = 1;
    }

    let counter = 0;
    for(let key in hash_t){
        if(!hash_s[key] || hash_s[key] < hash_t[key]){
            if(hash_s[key]){
                counter+= hash_t[key] - hash_s[key];
            }else{
                counter+= hash_t[key];
            }
        }
    }
    
    return counter;
    
};

const s = "bab" , t="aba";
const s1= "gctcxyuluxjuxnsvmomavutrrfb", t1="qijrjrhqqjxjtprybrzpyfyqtzf";
console.log(minSteps(s1,t1));