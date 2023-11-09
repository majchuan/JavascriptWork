/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let result = 0;
    let start = 0 ;

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] != s[start]){
            let appear = i - start ;
            while(appear > 0){
                result += appear;
                appear--;
            }

            start = i;
        }
    }

    let appear = s.length - start ;
    while(appear >0){
        result += appear;
        appear--;
    }

    return result % (Math.pow(10,9) + 7);
};