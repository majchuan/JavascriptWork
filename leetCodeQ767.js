/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
    const s_hash= {} ;
    for(let str of s){
        s_hash[str] ? s_hash[str]++ : s_hash[str] = 1 ;
    }
    
    let maxValue = 0 ;
    let maxKey = ""
    for(let key in s_hash ){
        if(maxValue < s_hash[key]) {
            maxKey = key;
            maxValue = s_hash[key]; 
        }
    }
    
    let restValueSum = 0 ;
    
    for(let key in s_hash){
        if(key != maxKey){
            restValueSum += s_hash[key];
        }
    }
    
    if(maxValue - restValueSum > 1) {
        return "";
    }else{
        let result =[];
        let position = 0;
        let sorted = Object.keys(s_hash).sort((a,b) => s_hash[b] - s_hash[a]);
        for(let i = 0 ; i < sorted.length ; i++){
            let hash_key =sorted[i];
            let hash_value = s_hash[hash_key];
            for(let i =0 ; i < hash_value ; i++){
                if(position >= s.length ) position = 1
                result[position] = hash_key;
                position +=2;
            }
        }
        return result.join("");   
    }
};

const  s = "aaab" ;
console.log(reorganizeString(s));