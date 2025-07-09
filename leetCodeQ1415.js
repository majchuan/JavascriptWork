/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let currStr = '';
    const happyStrings = [];
    const letters = ['a','b','c'];
    dfs(letters,n,currStr, happyStrings);
    if(happyStrings.length < k) return "";

    happyStrings.sort((a,b) => a - b);
    return happyStrings[k-1];
};

const dfs = (letters,n, currStr, happyStrings) =>{
    if(currStr.length  == n){
        happyStrings.push(currStr);
        return;
    }

    for(let i = 0 ; i < letters.length; i++){
        if(currStr.length > 0 && currStr[currStr.length -1] == letters[i]) continue;
        dfs(letters,n , currStr+letters[i], happyStrings);
    }

}
