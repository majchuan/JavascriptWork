/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    return dfs(n,k,0);
};

const dfs= (n, k, node) =>{
    if(n == 1 ) return node;

    let totalNodes = Math.pow(2, n-1);

    if(k > totalNodes /2 ){
        let nextNodeVal = node == 0 ? 1 : 0;
        return dfs(n-1, k - (totalNodes /2), nextNodeVal);
    } else{
        let nextNodeVal = node == 0 ? 0 : 1 ;
        return dfs(n-1, k , nextNodeVal); 
    }
}

console.log(kthGrammar(10, 9));
