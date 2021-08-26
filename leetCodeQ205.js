/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/
var isIsomorphic = function(s, t) {
    const hash_s ={};
    const hash_t ={};
    for(let i = 0 ; i < s.length ; i++){
        if(hash_s[s[i]] && hash_s[s[i]] != t[i]){
            return false;
        }else{
            hash_s[s[i]]=t[i];
        }
    }
    for(let i = 0 ; i < s.length ; i++){
        if(hash_t[t[i]] && hash_t[t[i]] != s[i]){
            return false;
        }else{
            hash_t[t[i]]=s[i];
        }
    }
    return true
};

const s = "egg", t = "add";
const s1="badc", t1="baba";
console.log(isIsomorphic(s1,t1));