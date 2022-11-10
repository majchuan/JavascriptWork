/**
 * @param {string} s
 * @return {string}
 */
 var removeStars = function(s) {
    const stack =[];
    for(let i = 0 ; i < s.length ; i++){
        if(stack.length > 0 && s[i] =="*"){
            stack.pop();
        }

        if(s[i] != "*"){
            stack.push(s[i]);
        }
    }

    return stack.join('');
};