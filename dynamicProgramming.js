//recursive pattern
const fib = (n) =>{
    if(n <=1 ){
        return n;
    }

    return fib(n-1) + fib(n-2);
}


//dp use memoization top -> bottom.
const fibDP = (n) =>{
    const memo = [];
    const fibMemo =(n) =>{
        if(n <=1) return n ;
        if(memo[n]) return memo[n];

        memo[n] = fibMemo(n-1) + fibMemo(n-2);
        return memo[n];
    }

    return fibMemo(n);
}

//dp use tabulation, bottom -> top
const fibDPTabulation = (n) =>{
    const dp=[0,1];
    for(let i =2 ; i <=n ; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

//console.log(fibDPTabulation(6));

const assignHole=(mices,holes) => {
    const result = [];
    mices.sort();
    holes.sort();
    let max = 0 ;
    for(let i = 0; i < mices.length; i++){
        max = Math.max(max, Math.abs(mices[i] - holes[i]));
    }

    return max ;
}

const mices = [4,-4,2], holes=[4,0,5];
console.log(assignHole(mices, holes))