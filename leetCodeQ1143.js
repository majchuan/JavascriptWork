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

