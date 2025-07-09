/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let result = 0;
    let start = 0 ;

    for(let i = 0 ; i < s.length ; i++){
        if( s[i] != s[start]){
            let appear = i - start ;
            while(appear > 0){
                result += appear;
                appear--;
            }

            start = i;
        }

        if(s[start] != 1) start++;
    }

    let appear = s.length - start ;
    while(appear >0){
        result += appear;
        appear--;
    }

    return result % (Math.pow(10,9) + 7);
};


/**
 * @param {string} s
 * @return {number}
 */
var numSubFastFunction = function(s) {
    let count = 0;
    let mod = 1e9 + 7;
    let result = 0;

    for( let i = 0; i< s.length; i++ ) {
        if( s[i] === "1") {
            count++;
            result = ( result + count ) % mod;
        } else {
            count = 0;
        }
    }
    
    return result;
};
