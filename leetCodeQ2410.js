/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=> a - b);
    trainers.sort((a,b) => a - b);
    let left = 0 ;
    let right = 0 ;
    let matchCount = 0 ;

    while(left < players.length && right < trainers.length){
        if(players[left] <= trainers[right]){
            matchCount++;
            left++;
            right++;
        }else{
            right++;
        }
    }

    return matchCount;
};