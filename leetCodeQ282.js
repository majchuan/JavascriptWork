/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
function addOperators(num, target) {
    const results = [];

    const backtrack=(partial, value, index, prevOperand, currentOperand)=>{
        if (index === num.length) {
            if (value === target && currentOperand === 0) {
                results.push(partial.slice(1)); // slice to remove the first dummy operator
            }
            return;
        }

        currentOperand = currentOperand * 10 + + num[index];
        const strOperand = currentOperand.toString();

        if (currentOperand !== 0) {
            backtrack(partial, value, index + 1, prevOperand, currentOperand);
        }

        backtrack(partial + '+' + strOperand, value + currentOperand, index + 1, currentOperand, 0);

        // Can't subtract or multiply without an operand
        if (partial.length > 0) {
            // Subtraction
            backtrack(partial + '-' + strOperand, value - currentOperand, index + 1, -currentOperand, 0);

            // Multiplication
            backtrack(partial + '*' + strOperand, value - prevOperand + (prevOperand * currentOperand), index + 1, prevOperand * currentOperand, 0);
        }
    }

    backtrack("", 0, 0, 0, 0);
    return results;
}

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperatorsDFS = function(num, target) {
    const res = []
    function dfs(index, cur, prev, path) {
        if (index === num.length) {
            if (cur === target) {
                res.push(path)
            }
            return
        }

        for (let i = index; i < num.length; i ++){
            if (num[index] === '0' && index !== i) {
                return
            }
            const val = +num.slice(index, i + 1)
            if (index === 0) {
                dfs(i + 1, 0 + val, val, path + val)
            } else {
                dfs(i + 1, cur + val, val, path + '+' + val)
                dfs(i + 1, cur - val, -val, path + '-' + val)
                dfs(i + 1, cur - prev + prev * val, prev * val, path + '*' + val)
            }
        }
    }
    dfs(0, 0, 0, '')
    return res
};