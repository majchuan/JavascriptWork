/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b) => a - b);

    let left = 0 ;
    let right = tokens.length -1;
    let scores = 0 ; 

    while(left <= right){
        if(tokens[left] <= power){
            scores++;
            power -= tokens[left];
            left++;
        }else if(left < right && scores >= 1){
            scores--;
            power += tokens[right];
            right--;
        }else{
            return scores;
        }

    }

    return scores; 
};