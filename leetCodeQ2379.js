/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let minOperation = Number.MAX_SAFE_INTEGER;
    while(left + k <= blocks.length){
        let whiteNum = 0;
        for(let i = left ; i < left+k ; i++){
            if(blocks[i] == 'W'){
                whiteNum++;
            }
        }

        minOperation = Math.min(minOperation, whiteNum);

        left++;
    }

    return minOperation;
};