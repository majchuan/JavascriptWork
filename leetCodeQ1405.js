/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const hash_s = {
        "a" : a,
        "b" : b,
        "c" : c
    };

   
    let result ="";
    while(hash_s["a"] || hash_s["b"] || hash_s["c"]){
        let sortedKeys = Object.keys(hash_s).sort((a,b) => hash_s[b] - hash_s[a]);
        if(result.length > 0 && result[result.length -1] == sortedKeys[0]){
            if(hash_s[sortedKeys[1]] == 0) return result;
            hash_s[sortedKeys[1]]--;
            result += sortedKeys[1];
        }

        if(hash_s[sortedKeys[0]] < 2){
            hash_s[sortedKeys[0]]--;
            result += sortedKeys[0];
        }else{
            hash_s[sortedKeys[0]] -=2;
            result += sortedKeys[0];
            result += sortedKeys[0];
        }
    }

    return result;
};
