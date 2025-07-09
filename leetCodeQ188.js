/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    
    if (prices.length == 0) return 0; 
    
    let profits = new Array(prices.length).fill(0);
    
    for(let i =0 ; i < k ; i++){
        let min = prices[0];
        let max = 0 ;
        for(let j = 0; j < prices.length ; j++){
            min = Math.min(min, prices[j] - profits[j]);
            max = Math.max(max, prices[j] - min);
            
            profits[j] = max ; 
        }
    }
    
    return profits.pop();
};