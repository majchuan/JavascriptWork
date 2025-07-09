/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    const width = Math.abs(sx - fx);
    const height = Math.abs(sy - fy);

    if(width == 0 && height == 0 && t == 1) return false;

    return t >= Math.max(width, height);
};