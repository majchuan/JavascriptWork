/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    dfs(n,result,"",0,0);
    return result;
};

const dfs = (num, result ,current, left, right) =>{
    if(current.length == num*2){
        result.push(current);
        return;
    }

    if(left < n){
        dfs(num,result,current.concat("("), left+1, right);
    }

    if(left > right){
        dfs(num,result,current.concat(")"), left, right+1);
    }
}

const n=3;
console.log(generateParenthesis(n));