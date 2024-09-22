/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = new Array(expression.length).fill().map(()=> new Array(expression.length).fill(null));
    return compute(expression, memo, 0 , expression.length -1);
};

const compute = (expression , memo , startIndex, endIndex) =>{

    if(memo[startIndex][endIndex] != null){
        return memo[startIndex][endIndex];
    }

    const result = [];

    //base case single digit
    if(startIndex == endIndex){
        result.push(expression[startIndex] - '0');
        return result;
    }

    //base case two-digit number
    if(endIndex - startIndex == 1 && Number.isInteger(parseInt(expression[startIndex]))){
        let tens = expression[startIndex] - '0';
        let ones = expression[endIndex] - '0';
        result.push(10 * tens + ones);
        return result;
    }
    //Recursie case : 
    for(let i = startIndex ; i <= endIndex ; i++){
        if(Number.isInteger(parseInt(expression[i]))){
            continue;
        }

        const leftResult = compute(expression, memo, startIndex, i - 1);
        const rightResult = compute(expression, memo, i+1 ,endIndex);
        console.log(leftResult);
        //combine result
        for(let left of leftResult){
            for(let right of rightResult){
                switch(expression[i]){
                    case '+':
                        result.push(left + right);
                        break;
                    case '-':
                        result.push(left - right);
                        break;
                    case '*':
                        result.push(left * right);
                        break;
                }
            }
        }
    }
    memo[startIndex][endIndex] = result;
    return result;
}

const expression = '2-1-1';
console.log(diffWaysToCompute(expression));
