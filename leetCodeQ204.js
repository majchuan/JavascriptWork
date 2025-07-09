/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    const isNotPrime = new Array(n).fill(false);
    if(n <= 2 ) return 0 ;
    let count = 0 ;

    for(let i = 2 ; i < n ; i++){
        if(isNotPrime[i]== false){
            count++;
            for(let j = 2 ; j * i < n ; j++){
                isNotPrime[j*i] = true; 
            }
        }
    }

    return count;
};


/**
 * @param {number} n
 * @return {number}
 */
 var countPrimesSlow = function(n) {
    if(n == 0 || n ==1 || n == 2) return 0 ;
    return dfs(n-1);
};

const dfs =(n) =>{
    if(n == 2) return 1 ;
    let result = 0 ;
    //console.log(n);
    for(let i = n-1 ; i > 1 ; i--){
        if(n % i == 0){
            result += dfs(n-1);
            return result;
        }
    }
    result++;
    result += dfs(n-1);
    return result;
}