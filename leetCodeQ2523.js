/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    let primes = []
    for(let i=left; i<=right; i++){
        if(isPrime(i)) primes.push(i)
    }
    
    let maxDiff = Number.MAX_SAFE_INTEGER;
    let res = [-1, -1]
    
    for(let i=1; i<primes.length; i++){
        let diff = primes[i] - primes[i-1]
        if(diff<maxDiff){
            res = [primes[i-1], primes[i]]
            maxDiff = diff
        }
    }
    return res
};

const isPrime=(n)=> {
    if (n === 1) return false;
    if (n % 2 === 0) return n === 2;
    let max = Math.floor(Math.sqrt(n)) ;
    for(let i = 3; i <= max; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}