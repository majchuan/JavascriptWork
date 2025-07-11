/**
 * @param {number} n
 * @return {number}
 */
/*
*Recursive
*/
 var numSquares = function(n) {
    let result = n , num = 2;
    while( num * num <= n){
        let x = Math.floor(n / (num * num)) , y = n % (num*num);

        result = Math.min(result, x + numSquares(y));

        num++;
    }

    return result;
};

/*
*Dyanmic programing.
*/
var numSquaresDP = function(n) {
    const dp = new Array(n+1).fill(Infinity);
    dp[0] = 0;

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
        }
    }
    return dp[n] 
};

console.log(numSquaresDP(13));
