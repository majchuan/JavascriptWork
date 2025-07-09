/**
 * @param {number} n
 * @return {number}
 */
/*
*Pattern, the number of cells added at each step follows the sequence: 4,8,12,16..., increasing by 4 every time.
*/
var coloredCells = function(n) {
    let numBlueCells = 1 ;
    let add = 4 ;
    n--;
    while( n> 0){
        numBlueCells += add ;
        add+=4;
        n--;
    }
    
    return numBlueCells;
};
