/**
 * @param {number} n
 * @return {number}
 */
/*
*bottom to up Dyanamic programming
*/
var climbStairs = function(n) {
    const fin = [1,1];
    for(let i = 2; i <= n ; i++){
        fin[i] = fin[i-1] + fin[i-2];
    }

    return fin[n];
};

const n = 10 ;
console.log(climbStairs(n));


/**
 * @param {number} n
 * @return {number}
 */
/*
*Top to bottom Dynamic programming
*/
var climbStairs = function(n) {
    const hash_n = new Map();
    return dfs(n, hash_n);
};

const dfs=(n, hash_n) =>{
    if(n == 0) return 0 ;
    if(n == 1) return 1 ;
    if(n == 2) return 2 ; 

    if(hash_n.has(n)) return hash_n.get(n);

    hash_n.set(n, dfs(n-1, hash_n) + dfs(n-2, hash_n));

    return hash_n.get(n);
}