/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    for(let i = 0 ; i < s.length ; i++){
        if(stack.length == 0){
            stack.push(s[i]);
        }else{
            let combineStr = stack[stack.length-1] + s[i];
            if(combineStr =="()" || 
              combineStr == "{}" || combineStr =="[]"){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
    }
    
    if(stack.length == 0) {
        return true;
    }else{
        return false;
    }
};