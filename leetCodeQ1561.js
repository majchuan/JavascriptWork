/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let result = 0;
    piles.sort((a,b)=> b-a);

    let n = piles.length / 3 ;

    for(let i = 1 ; i < piles.length - n ; i+=2){
        result += piles[i];
    }

    return result;
};

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoinsSlowFunction = function(piles) {
    let result = 0;
    piles.sort((a,b)=> a - b);

    while(piles.length > 0 ){
        piles.pop();
        result += piles.pop();
        piles.shift();
    }

    return result;
};