/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((x,y) => x -y);
    let maxSum = 0 ;
    for(let i = 0 ; i < satisfaction.length ; i++){
        maxSum = Math.max(maxSum, cal(i,satisfaction, 1));
    }

    return maxSum;
};

const cal=(startIndex, satisfaction, time) =>{
    let maxSum = 0;
    for(let i = startIndex ; i < satisfaction.length ; i++){
        maxSum += time * satisfaction[i];
        time++;
    }

    return maxSum;
}