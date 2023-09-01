/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
/*
* DP Approach
*/
var minTaps = function(n, ranges) {
    const dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0 ;
    for(let i = 0 ; i <=n ; i++){
        let tapStart = Math.max(0, i - ranges[i]);
        let tapEnd = Math.min(n, i + ranges[i]);

        for(let j = tapStart ; j <= tapEnd ; j++){
            dp[tapEnd] = Math.min(dp[tapEnd], dp[j] + 1);
        }
    }

    if(dp[n] == Number.MAX_SAFE_INTEGER){
        return -1;
    }

    return dp[n];
};

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
/*
* Greedy Approach
*/
var minTapsGreedyApproach = function(n, ranges) {
    let maxReach = new Array(n+1).fill(Number.MIN_SAFE_INTEGER);

    for(let i = 0 ; i <= n ; i++){
        let tapStart = Math.max(0 , i - ranges[i]);
        let tapEnd = Math.min(n, i + ranges[i]);

        maxReach[tapStart] = Math.max(maxReach[tapStart], tapEnd)
    }

    console.log(maxReach);

    let taps = 0 ;
    let currEnd = 0 ;
    let nextEnd = 0 ;

    for(let i = 0 ; i <= n ; i++){
        if (i > nextEnd) {
            return -1;
        }

        // Increment taps when moving to a new tap
        if (i > currEnd) {
            taps++;
            // Move to the rightmost position that can be reached
            currEnd = nextEnd;
        }

            // Update the next rightmost position that can be reached
        nextEnd = Math.max(nextEnd, maxReach[i]);
    }

    return taps;
};
