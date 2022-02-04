/**
* @param {Number} num
* @return {boolean}
*/

var isPerfectSquare = function(num){
    let left = 0;
    let right = num;
    if(num == 1) return true;
    
    while(left < right -1){
        let middle = Math.floor((left + right)/2);
        if(num == middle * middle) {
            return true;
        }

        if(num > middle * middle){
            left = middle;
        }

        if(num < middle * middle){
            right = middle;
        }
    }

    return false;
}

const num = 14;
console.log(isPerfectSquare(num));