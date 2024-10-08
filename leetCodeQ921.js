/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    const stack = [];
    let result = 0;
    for(let i = 0 ; i < s.length; i++){
        if(s[i] =='('){
            stack.push(s[i]);
        }else{
            if(stack.length > 0){
                stack.pop();
            }else{
                result++;
            }
        }
    }

    return stack.length + result ;
};
