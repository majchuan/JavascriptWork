/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const result = [];
    for(let i = 0 ; i < prices.length-1; i++){
        let right = i + 1;
        while(right < prices.length-1 && prices[right] > prices[i]){
            right++;
        }
        if(prices[i] >= prices[right]){
            result.push(prices[i] - prices[right]);
        }else{
            result.push(prices[i]);
        }
    }
    result.push(prices[prices.length -1]);
    return result;
};

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPricesStack = function(prices) {
    let stack = [];
    
    for(let i =0; i < prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length-1]] >= prices[i]) {
          prices[stack.pop()] -= prices[i];
        }
        stack.push(i)
    }

    return prices;
};