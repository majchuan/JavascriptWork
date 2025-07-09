/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const arrival = [];
    for(let i = 0 ; i < dist.length ; i++){
        arrival[i] = Math.ceil(dist[i] / speed[i] );
    }

    arrival.sort((a,b) => a - b)

    let result = 0;

    for(let i = 0 ; i < arrival.length ; i++){
        if(arrival[i] <= i) break;
        result++;
    }

    return result;
};