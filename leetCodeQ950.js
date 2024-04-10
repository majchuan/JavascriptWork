/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasingWithQueue = function(deck) {
    const queue = []; 
    const result = new Array(deck.length);
    deck.sort((a,b) => a - b);

    for(let i = 0; i < deck.length; i++){
        queue.push(i);
    }

    for(let i = 0 ; i < deck.length ; i++){
        result[queue.shift()]=deck[i];
        queue.push(queue.shift());
    }

    return result;
};

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasingTwoPointers = function(deck) {
    let length = deck.length;
    const result = new Array(deck.length).fill(0);
    let skip = false;
    let left = 0 ;
    let right = 0 ;
    deck.sort((a,b) => a - b);
    while(left < length){
        if(result[right] == 0){
            if(skip == false){
                result[right] = deck[left];
                left++;
            }
            skip = !skip;
        }

        right  = ( right + 1) % length;
    }

    return result;


};