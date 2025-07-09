/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const prize = new Map();
    prize.set(1,"Gold Medal");
    prize.set(2, "Silver Medal");
    prize.set(3, "Bronze Medal");

    const sortedScores = score.map((element, index) => [element,index]);
    sortedScores.sort((a,b) => b[0] - a[0]);

    for(let i = 0 ; i < sortedScores.length ; i++){
        if(prize.has(i + 1)){
            score[sortedScores[i][1]] = prize.get(i+1);
        }else{
            score[sortedScores[i][1]] = (i+1).toString();
        }
    }

    return score;
};