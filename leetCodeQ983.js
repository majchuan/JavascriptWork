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

/*
*Dynamic Programming dp, top to bottom with memo. 
*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const visitedDays = new Array(days[days.length -1] +1).fill(-1);
    return dfs(days, costs, 1 , visitedDays);
};

const dfs=(days, costs, currDay, visitedDays)=>{
    if(currDay > days[days.length-1]){
        return 0 ;
    }

    if(days.includes(currDay) == false){
        return dfs(days, costs, currDay+1, visitedDays);
    }

    if(visitedDays[currDay] != -1){
        return visitedDays[currDay];
    }

    let day1 = costs[0] + dfs(days, costs, currDay+1, visitedDays);
    let day7 = costs[1] + dfs(days, costs, currDay+7, visitedDays);
    let day30 = costs[2] + dfs(days,costs, currDay+30, visitedDays);

    return visitedDays[currDay] = Math.min(day1, day7, day30);
}