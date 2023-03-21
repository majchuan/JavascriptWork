/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;
    for(let i = 0 ; i< flowerbed.length ; i++ ){
        if(flowerbed[i-1] != 1 && flowerbed[i+1] != 1 && flowerbed[i] == 0){
            counter++;
            flowerbed[i] = 1;
        }
    }

    return counter >= n ;
};