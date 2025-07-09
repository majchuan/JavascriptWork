/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max =  0 ;
    const stack = [];

    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == '('){
            stack.push(s[i]);
        }else if (s[i] == ')'){
            stack.pop();
        }

        max = Math.max(max, stack.length);
    }

    return max;

};