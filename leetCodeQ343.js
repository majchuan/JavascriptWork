/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n <= 3){
        return n-1;
    }
    const hash_n = new Map();
    return dfs(n, hash_n);
};

const dfs=(num, hash_n) =>{
    if(num <= 3 ) return num;

    if(hash_n.has(num)) return hash_n.get(num);

    let result = num;
    let n = Math.floor(num /2);
    for(let i = 2 ; i <= n ; i++){
        result = Math.max(result, i * dfs(num - i, hash_n));
    }

    hash_n.set(num, result);

    return result;
}