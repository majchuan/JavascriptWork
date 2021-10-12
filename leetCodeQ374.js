/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guessNumber = (n) =>{
    let start = 1 , end = n;
    while(start <= end){
        let mid = Math.floor((start + end) /2);
        let guessResult = guess(mid);
        switch(guessResult){
            case 1:
                start = mid+1 ;
                break;
            case -1:
                end = mid-1 ;
                break;
            case 0:
                return mid;
        }
        
    }

    return undefined;
}

var guessNumberSlow = function(n) {
    
    const guessResult = guess(n);
    
    if(guessResult == 0 ){
        return n;
    }
    if(guessResult == 1){
        return guessNumber(n-1);
    }
    
    if(guessResult == -1){
        return guessNumber(n+1);
    }
};

const guess = (number) =>{
    const pick = 2
    if(number < pick){
        return 1;
    }

    if(number > pick){
        return -1;
    }
    if(number == pick){
        return 0;
    }
}

const n = 2;
console.log(guessNumber(n));