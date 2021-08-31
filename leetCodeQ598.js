/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minimum_x = Number.MAX_SAFE_INTEGER;
    let minimum_y = Number.MAX_SAFE_INTEGER ;

    for(let [x, y] of ops){
        if( minimum_x > x) {
            minimum_x = x ;
        }
        if(minimum_y > y){
            minimum_y = y;
        }
    }
    if(ops.length == 0){
        return m*n;
    }else{
        return minimum_x * minimum_y;
    }
};

const m = 18 , n= 3, ops = [[16,1],[14,3],[14,2],[4,1],[10,1],[11,1],[8,3],[16,2],[13,1],[8,3],[2,2],[9,1],[3,1],[2,2],[6,3]];
console.log(maxCount(m,n,ops));