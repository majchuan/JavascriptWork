/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const uniqueS = removeDuplicates(s);
    let n = uniqueS.length;
    const memo = new Array(n).fill().map(() => new Array(n).fill(0));
    return minimumTurns(0, n -1 , uniqueS, memo);

};
const removeDuplicates = (s) =>{
    let unique = "";
    let i = 0;
    while(i < s.length){
        let currentChar = s[i];
        unique += currentChar;
        while(i < s.length && s[i] == currentChar ){
            i++;
        }
    }

    return unique;
}

const minimumTurns = (start, end, uniqueS, memo) =>{
    if(start > end){
        return 0;
    }

    if(memo[start][end] != 0){
        return memo[start][end];
    }
    //initalize with worst case : print each character separately
    let minTurns = 1 + minimumTurns(start+1, end, uniqueS, memo);

    for(let i = start + 1 ; i <= end ; i++){
        if(uniqueS[i] == uniqueS[start]){
            let turnsWithMatch = minimumTurns(start, i -1 , uniqueS, memo) + minimumTurns(i+1, end, uniqueS ,memo);
            minTurns = Math.min(minTurns, turnsWithMatch);
        }
    }

    memo[start][end] = minTurns;
    return minTurns;
}