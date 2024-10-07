/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];

    for(let i = 0 ; i < s.length ; i++){
        if(stack.length > 0 && (stack[stack.length-1].concat(s[i])== 'AB' 
        || stack[stack.length-1].concat(s[i]) == 'CD' )){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }

    return stack.length;
};