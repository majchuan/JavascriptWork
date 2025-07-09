/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b) => a[1]-b[1]);
    console.log(pairs);
    const curr = [pairs[0]];
    for(let i = 0 ; i < pairs.length; i++){
        if(curr[curr.length-1][1] < pairs[i][0]){
            curr.push(pairs[i]);
        }
    }
    return curr.length;
};

/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChainDP = (pairs) => {
    let n = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    return dp[n - 1];
};


/**
 * @param {number[][]} pairs
 * @return {number}
 */
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChainSlowFunction= function(pairs) {
    pairs.sort((a,b) => a[0]-b[0]);
    let maxChainNum = 0;
    let curr= new Array(pairs.length).fill(1);
    for(let i = 1 ; i < pairs.length; i++){
        findMaxChain(pairs, i , curr);
    }
    return curr[pairs.length -1];
};

const findMaxChain =(pairs, startIndex, curr) =>{

    for(let i = 0; i < pairs.length; i++){
        if(pairs[i][1] < pairs[startIndex][0] ){
            curr[startIndex] = Math.max(curr[startIndex], curr[i]+1);
        }
    }

}