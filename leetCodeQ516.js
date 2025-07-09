/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const memo = new Array(s.length);

    for(let i = 0 ; i < s.length ; i++){
        memo[i] = new Array(s.length).fill(0);
    }

    let max = dfs(s, 0 , s.length -1 , memo);
    //console.log(memo);

    return max;

};

const dfs=(s,left, right, memo )=>{
    if(memo[left][right] != 0){
        return memo[left][right];
    }

    if(left > right){
        return 0 ;
    }

    if(left == right){
        return 1;
    }

    if(s[left] == s[right]){
        memo[left][right] = dfs(s, left+1, right -1, memo) + 2 ;
    }else{
        memo[left][right] = Math.max(dfs(s, left+1 ,right, memo), dfs(s, left, right-1, memo));
    }

    return memo[left][right];
}

var longestPalindromeSubseqSlow = function(s) {
    const maxLength = Number.MIN_SAFE_INTEGER;
    return dfs(s, "", maxLength, 0);
};

const dfsSlow=(s,curr,maxLength,index)=>{
    //console.log(curr);
    if(checkPalindromic(curr)){
        maxLength = Math.max(maxLength, curr.length);
    }

    for(let i = index ; i < s.length ; i++){
        let temp = curr ;
        curr += s[i];
        maxLength = Math.max(maxLength, dfs(s, curr, maxLength, i+1));
        curr = temp;
    }

    return maxLength;
}

const checkPalindromicSlow = (s) =>{
    let left = 0 ,right = s.length -1;

    while(left < right){
        if(s[left] != s[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

const s = "euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew";
console.log(longestPalindromeSubseq(s));