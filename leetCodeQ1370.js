/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const result = new Array(26).fill(0);

    for(let c of s){
        const charCode = c.charCodeAt(0) - 97;
        result[charCode]++;
    }

    let res = "";
    while(s.length != res.length){
        for(let i = 0 ; i < result.length; i++){
            if(result[i]== 0) continue;
            res += appendCharToResult(i);
            result[i]--;
        }

        for(let i = result.length -1 ; i>= 0; i--){
            if(result[i] == 0) continue;
            res += appendCharToResult(i);
            result[i]--; 
        }
    }


    return res;
};

const appendCharToResult = (i) =>{
    return String.fromCharCode(i+97);
}

console.log(sortString("aaabbbcccbbbaaa"));
