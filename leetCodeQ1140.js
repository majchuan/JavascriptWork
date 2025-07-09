/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    // Create a 2D array to store the maximum number of stones Alice can get
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        dp[i].fill(0);
    }
    
    // Calculate the suffix sums for efficient calculation of remaining piles
    const suffixSum = new Array(n + 1);
    suffixSum[n] = 0;
    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    // Recursive function to calculate the maximum number of stones Alice can get
    const dfs = (i, M) => {
        // Base case: If all piles have been taken, return 0
        if (i >= n) {
            return 0;
        }
        
        // If the current state has already been calculated, return the stored result
        if (dp[i][M] > 0) {
            return dp[i][M];
        }
        
        let maxStones = 0;
        
        // Try all possible choices of X for the current turn
        for (let x = 1; x <= 2 * M; x++) {
            // Calculate the remaining piles after taking X stones
            const remaining = n - i - x;
            
            // Calculate the maximum number of stones the other player can get in the next turn
            const otherPlayerStones = dfs(i + x, Math.max(M, x));
            
            // Calculate the maximum number of stones Alice can get in the current turn
            const aliceStones = suffixSum[i] - otherPlayerStones;
            
            // Update the maximum number of stones Alice can get
            maxStones = Math.max(maxStones, aliceStones);
        }
        
        // Store the result in the dp array
        dp[i][M] = maxStones;
        
        return maxStones;
    };

    // Start the recursive function from the beginning of the array with M = 1
    return dfs(0,1);
};