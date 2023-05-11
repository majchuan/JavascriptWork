/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    const dp = new Array(n1+1).fill().map(x => new Array(n2+1).fill(0));

    console.log(dp);

    for(let i = 1 ; i <= n1; i++ ){
        for(let j =1 ; j <= n2; j++){
            if(nums1[i-1] == nums2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max( dp[i][j-1], dp[i-1][j] );
            }
        }
    }

    return dp[n1][n2];
};

var maxUncrossedLinesRecursiveDP = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;

    const dp = new Array(n1+1).fill(0).map(x => new Array(n2+1).fill(-1));
    //console.log(dp);
    return dfs(n1,n2, nums1, nums2, dp);
};

const dfs=(i, j, nums1, nums2, dp) =>{
    if(i <= 0 || j <= 0){
        return 0;
    }

    if(dp[i][j] != -1){
        return dp[i][j];
    }

    if(nums1[i-1] == nums2[j-1]){
        dp[i][j] = 1 + dfs(i-1,j-1,nums1,nums2,dp);
    }else{
        dp[i][j] = Math.max(dfs(i,j-1, nums1, nums2,dp), dfs(i-1,j,nums1, nums2, dp));
    }

    return dp[i][j];
}

const  nums1 = [1,4,2], nums2 = [1,2,4]
console.log(maxUncrossedLines(nums1,nums2));
