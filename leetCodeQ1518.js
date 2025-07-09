/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let fullBottles = 0;
    let emptyBottles = 0 ;
    let count= numBottles;

    while(numBottles >= numExchange){
        fullBottles = Math.floor(numBottles / numExchange);
        emptyBottles = numBottles % numExchange;
        count += fullBottles;
        numBottles = fullBottles + emptyBottles;
    }

    return count;

};