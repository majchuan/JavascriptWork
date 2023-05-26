/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const dp = new Array(piles.length+1);
    for(let i = 0 ; i < piles.length+1; i++){
        dp[i]= new Array(piles.length+1).fill(0);
    }
    const result = dfs(piles, 0, piles.length -1, 0 ,dp);
    return result > 0 ;
};

const dfs=(piles, start ,end, p, dp) =>{
    if(start > end){
        return 0;
    }
    
    if(dp[start][end] != 0){
        return dp[start][end];
    }

    if(p == 0){
        let aliceFront =dfs(piles, start + 1 ,end, 1, dp) + piles[start];
        let aliceEnd = dfs(piles, start, end -1 , 1, dp) + piles[end];
        dp[start][end] = Math.max(aliceFront, aliceEnd);
        return Math.max(aliceFront, aliceEnd);
    }else{
        let bobFront = dfs(piles, start+1, end , 0, dp) - piles[start];
        let bobEnd = dfs(piles, start, end -1 , 0, dp) - piles[start];
        dp[start][end] = Math.max(bobFront, bobEnd);
        return Math.max(bobFront, bobEnd);
    }


}