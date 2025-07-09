/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    const stack = [];
    let maxPoints = 0;
    const maxNum = x > y ? x : y;
    const minNum = x > y ? y : x;
    const maxPattern = x > y ? "ab" : "ba";
    const minPattern = x > y ? "ba" : "ab";
    for(let i = 0 ; i < s.length ; i++){
        if(stack.length > 0 && stack[stack.length -1].concat(s[i])==maxPattern){
            maxPoints += maxNum;
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }
    const stack1 = [];
    for(let i = 0 ; i < stack.length ; i++){
        if(stack1.length > 0 && stack1[stack1.length -1].concat(stack[i])==minPattern){
            maxPoints += minNum;
            stack1.pop();
            continue;
        }

        stack1.push(stack[i]);
    }

    return maxPoints;
};