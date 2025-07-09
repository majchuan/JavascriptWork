/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    const dfs=(num) =>{
        if(num > n) return ;

        for(let i = 0 ; i <=9 ; i++){
            if(num * 10 + i > n ) return;
            result.push(num*10+i);
            dfs(num*10+i);
        }
    }

    for(let i = 1 ; i <= 9 ; i++){
        if(i > n) break;
        result.push(i);
        dfs(i);
    }

    return result;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrderSlowFunction = function(n) {
    const result = [];

    for(let i = 1 ; i <= n ; i++){
        result.push(i);
    }

    result.sort();

    return result;
};
