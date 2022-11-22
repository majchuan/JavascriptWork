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

        result = Math.min(result, x + numSquares(y))

        num++;
    }

    return result;
};

/*
*Dyanmic programing.
*/
var numSquaresDP = function(n) {
    dp = new Array(n);

    for(let i = 1 ; i <= n ; i++){
        dp[i] = Number.MAX_SAFE_INTEGER; 
    }
    dp[0] = 0;
    for(let i = 0; i <= n ; i++){
        for(let j = 1 ; i+j*j <=n ; j++){
            dp[i+j*j] = Math.min(dp[i+ j*j], dp[i] + 1 );
            console.log(i+j*j, dp[i+j*j]);
        }
    }
    console.log(dp);
    return dp[n];
};

console.log(numSquaresDP(13));
