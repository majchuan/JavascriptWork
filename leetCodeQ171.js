/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = columnTitle.length;
    let number = 0;
    for(let i = 0; i < n ; i++){
        number += (columnTitle.charCodeAt(i) - charCodeBase) * Math.pow(26 , n - i -1);
    }

    return number;
};