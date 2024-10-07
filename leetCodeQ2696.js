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

/**
 * @param {string} s
 * @return {number}
 */
var minLength1 = function(s) {
    const stack = [];

    for(let i = 0 ; i < s.length ; i++){
        if(stack.length == 0) {
            stack.push(s[i]);
            continue;
        }
        while(stack.length > 0){
            if(stack[stack.length-1].concat(s[i]) == 'AB' || stack[stack.length-1].concat(s[i]) == 'CD'){
                stack.pop();
                break;
            }else{
                stack.push(s[i]);
                break;
            }
        }
    }

    return stack.length;
};