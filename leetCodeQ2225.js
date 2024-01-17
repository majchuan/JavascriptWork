/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winners = {};
    const losers = {};
    const answer= [[],[]]; 
    for(let match of matches){
        winners[match[0]] ? winners[match[0]]++ : winners[match[0]] = 1 ;
        losers[match[1]] ? losers[match[1]]++ : losers[match[1]] = 1 ;
    }
    for(let winner in winners){
        if(losers[winner] == null){
            answer[0].push(winner);
        }
    }
    for(let loser in losers){
        if(losers[loser] == 1){
            answer[1].push(loser);
        }
    }
    answer[0].sort((a,b) => a-b);
    answer[1].sort((a,b) => a-b);

    return answer;
};
