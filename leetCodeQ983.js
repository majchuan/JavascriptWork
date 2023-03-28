/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
/*
*Dyanmic programming.
*Two array, one for days, one for costs, generally sepeaking, week and month pass will saving more money if you tour more days.  
*so there are three states, buy one day pass, buy one week day pass, and buy month pass.
*here I will use one dimention array dp with days length + 1 there. 
*dp[i] means the i day's minmum cost, so the state function will be dp[i] = days[i-1] +  min_cost
*here min_costs have three situation. 
*1.days[i-1] use day ticket 
*2.days[i-1] use week ticket,
*3.days[i-1] use month ticket.
*the dp[i] should be update by mini_cost, so we will have two loops, first one is we can start with day ticket price
*the inner loop will be used to update dp value with week ticket price, and month ticket price.
*if the day is during 7 days, we will use week pass to replace dp value
*if the day is during 30 days, we will use month pass to replace dp value.
*so the last value of dp will be min cost to all days tour.
*/
var mincostTickets = function(days, costs) {
    const dp = new Array(days.length+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for(let i = 1 ; i<= days.length ; i++){
        dp[i] = Math.min(dp[i], dp[i-1] + costs[0]);
        for(let j = 1 ; j <= i ; j++){
            if(days[j-1] + 7 > days[i-1] ){
                dp[i] = Math.min(dp[i], dp[j-1] + costs[1]);
            }

            if(days[j-1] + 30 > days[i-1]){
                dp[i] = Math.min(dp[i], dp[j-1] + costs[2]);
            }
        }
    }
    //console.log(dp);
    return dp[dp.length -1];

};