/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++){
        let lastPopChar = "";
        while(stack.length > 0 && stack[stack.length-1] == s[i].toString() ){
            lastPopChar = stack.pop();
        }

        if(lastPopChar != s[i].toString()){
            stack.push(s[i].toString());
        }
    }

    return stack.join('');
};