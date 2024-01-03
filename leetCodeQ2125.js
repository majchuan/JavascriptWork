/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prev = 0 ;
    let result = 0 ;

    for(let s of bank){
        let count = 0 ;
        for(let i = 0 ; i < s.length ; i++){
            if(s[i] == '1'){
                count++;
            }
        }
        if(count > 0 ){
            result += prev * count ;
            prev = count;
        }
    }

    return result;
};