/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let sum = 0;
    happiness.sort((a,b) => b-a);

    for(let i = 0 ; i < k ; i++){
        if(happiness[i] > 0){
            sum += happiness[i] - (happiness[i] - i < 0 ? happiness[i] : i);
        }
    }

    return sum;
};