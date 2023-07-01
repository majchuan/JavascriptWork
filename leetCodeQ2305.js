/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const distributes = new Array(k).fill(0);
    return dfs(0 , distributes, cookies, k, k);
};

const dfs=(i, distributes, cookies, k , zeroCount)=>{
    if(cookies.length - i < zeroCount){
        return Number.MAX_SAFE_INTEGER;
    }

    if(i == cookies.length){
        let unfairness = Number.MIN_SAFE_INTEGER;
        for(let distribute of distributes){
            unfairness = Math.max(unfairness, distribute);
        }
        return unfairness;
    }

    let result = Number.MAX_SAFE_INTEGER;
    for(let j = 0 ; j < k ; j++){
        zeroCount -= distributes[j] == 0 ? 1 : 0;
        distributes[j] += cookies[i];

        result = Math.min(result, dfs(i+1, distributes, cookies, k , zeroCount));

        distributes[j] -= cookies[i];
        zeroCount += distributes[j] == 0 ? 1 : 0;
    }

    return result;
}