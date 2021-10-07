/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const fin = [1,1];
    for(let i = 2; i <= n ; i++){
        fin[i] = fin[i-1] + fin[i-2];
    }

    return fin[n];
};

const n = 10 ;
console.log(climbStairs(n));
