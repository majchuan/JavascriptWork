/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceWithMemoApproach = function(text1, text2) {
    const memo = new Map();
    return dfs(text1, text2, 0,0, memo);
};

const dfs=(text1, text2, index1, index2, memo)=>{
    if(index1 >= text1.length || index2 >= text2.length) return 0;

    const key = index1+"|"+index2;

    if(memo.has(key)) return memo.get(key);

    let result = 0 ;

    if(text1[index1] == text2[index2]){
        result = dfs(text1, text2, index1+1, index2+1,memo) + 1;
    }else{
        result = Math.max(dfs(text1, text2, index1, index2+1, memo), dfs(text1, text2, index1+1, index2, memo));
    }

    memo.set(key, result);

    return result;
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceTopToBottomApproach = function(text1, text2) {
    const textLength1= text1.length;
    const textLength2= text2.length;

    const dp = new Array(textLength1+1).fill(0).map(() => new Array(textLength2+1).fill(0));

    for(let i = 1 ; i <= textLength1; i++){
        for(let j = 1 ; j <= textLength2; j++){
            if(text1[i-1] == text2[j-1]){
                // If characters match, take diagonal value and add 1
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                // If characters do not match, take the maximum value from 
                // the left (dp[i][j-1]) or above (dp[i-1][j])
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    return dp[textLength1][textLength2];
};
