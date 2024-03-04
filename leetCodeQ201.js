/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shift = 0;

    // Find the common prefix in the binary representations of left and right
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }

    // Left shift the common prefix to get the final result
    return left << shift; 
};