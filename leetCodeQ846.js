/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    hand.sort((a, b) => a - b);
    const countMap = new Map();
    for (const num of hand) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (const num of hand) {
        if (countMap.get(num) > 0) {
            for (let i = 0; i < groupSize; i++) {
                const currentNum = num + i;
                if (!countMap.has(currentNum) || countMap.get(currentNum) === 0) {
                    return false;
                }
                countMap.set(currentNum, countMap.get(currentNum) - 1);
            }
        }
    }
    
    return true;
};


/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHandSlowApproach = function(hand, groupSize) {
    const hash_hands = new Map();

    if(hand.length % groupSize != 0) return false;

    for(let h of hand){
        hash_hands.set(h, (hash_hands.get(h) | 0) +1);
    }

    const handKey = [...hash_hands.keys()];
    handKey.sort((a,b) => a - b);

    while(hash_hands.size > 0){
        let size = groupSize;
        const result = [];
       
        while(size > 0){
            for(let key of handKey){
                if(hash_hands.get(key) != null){
                    if(size > 0){
                        if(result.length == 0 || (result.length > 0 
                        && result[result.length-1] + 1 == key) ){
                            result.push(key);
                            hash_hands.set(key, hash_hands.get(key) - 1);
                            size--;
                        }else {
                            return false;
                        }
                    }
                    if(hash_hands.get(key) == 0) {
                        hash_hands.delete(key);
                    }
                }
            }
        }

    }

    return true;
};