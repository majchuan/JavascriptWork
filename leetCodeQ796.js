/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const totalString = s.concat(s);
    if(s.length != goal.length) return false;
    return totalString.includes(goal) ;
};