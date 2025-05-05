/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const cache = new Array(n + 1).fill(0).map(() => Array(4).fill(-1));
    const mod = 10 ** 9 + 7;

    //state 0
    // * * * *
    // * * * *

    //state 1
    // * * * 
    // * * * *

    //state 2
    // * * * *
    // * * * 

    const dp = (cur, state) => {
        if (cur === 0 && state === 0) return 1;
        if (cur === 1 && state === 0) return 1;
        if (cur === 2) {
            if (state === 0) {
                return 2;
            } else {
                return 1;
            }
        }
        if (cache[cur][state] !== -1) return cache[cur][state];

        let res = 0;
        if (state === 0) {
            res = dp(cur - 1, 1) + dp(cur - 1, 2) + dp(cur - 2, 0) + dp(cur - 1, 0);
        } else if (state === 1) {
            res = dp(cur - 2, 0) + dp(cur - 1, 2);
        } else if (state === 2) {
            res = dp(cur - 2, 0) + dp(cur - 1, 1);
        }
        res = res % mod;

        cache[cur][state] = res;

        return res;
    }
    
    return dp(n,0);
};

console.log(numTilings(3));
console.log(numTilings(5));