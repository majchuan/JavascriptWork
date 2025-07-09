/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxValue = Math.max(...candies)
    const result = [];

    for(let i = 0 ; i < candies.length; i++){
        if(maxValue - candies[i] <= extraCandies){
            result.push(true);
        }else{
            result.push(false);
        }
    }

    return result;
};