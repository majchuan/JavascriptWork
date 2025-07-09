/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const result = new Array(n).fill(0);

    let ballsToLeft = 0 ;
    let ballsToRight = 0;
    let moveToLeft = 0;
    let moveToRight = 0;
    for(let i = 0; i < n ; i++){
        result[i] += moveToLeft;
        ballsToLeft += parseInt(boxes[i]);
        moveToLeft += ballsToLeft;

        let j = n - 1 - i;
        result[j] += moveToRight;
        ballsToRight += parseInt(boxes[j]);
        moveToRight += ballsToRight;
    }

    return result;
};