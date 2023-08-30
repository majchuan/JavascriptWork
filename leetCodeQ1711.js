/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    const hash_d = {} ; 
    const n = deliciousness.length ;

    let result = 0 ;
    for(let i = 0 ; i < n ; i++){
        for(let j = 21 ; j >= 0 ; j--){

            const square = 2**j ;
            
            if(square - deliciousness[i] < 0 ) break;

            if(hash_d[square - deliciousness[i]]){
                result += hash_d[square - deliciousness[i]];
            }
        }
        hash_d[deliciousness[i]] ? hash_d[deliciousness[i]]++ : hash_d[deliciousness[i]] = 1 ;
    }

   // console.log(hash_d);

    return result % 1000000007;
};