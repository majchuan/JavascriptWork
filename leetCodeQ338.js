/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [0];

    for(let i = 1 ; i <= n ; i++){
        if( i % 2 == 0){
            result.push(result[Math.floor(i/2)]);
        }else{
            result.push(result[Math.floor(i/2)] + 1);
        }
    }

    return result;
};