/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const s_hash= {} ;
    for(let str of s){
        s_hash[str] ? s_hash[str]++ : s_hash[str] = 1 ;
    }

    let sortedKeys = Object.keys(s_hash).sort((a,b) => s_hash[b] - s_hash[a]);
    let maxValue = s_hash[sortedKeys[0]];
    let restValueSum = 0;
    for(let i = 1 ; i< sortedKeys.length ; i++){
        restValueSum += s_hash[sortedKeys[i]];
    }

    if(maxValue - restValueSum > 1) {
        return "";
    }else{
        let result =[];
        let position = 0;
        for(let i = 0 ; i < sortedKeys.length ; i++){
            let hash_key =sortedKeys[i];
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