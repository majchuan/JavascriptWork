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