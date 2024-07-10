/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let fullRounds = Math.floor(time /(n-1));
    let extraTime = time % (n-1);

    if(fullRounds % 2 == 0){
        return extraTime+1;
    }else{
        return n - extraTime;
    }
};