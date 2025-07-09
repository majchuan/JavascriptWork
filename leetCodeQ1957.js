/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let stack = [];
    for(let i = 0 ; i < s.length; i++){
        if(stack.length == 0){
            stack.push(s[i]);
            continue;
        }

        if(stack[stack.length-1] == s[i]){
            let counter = 2 ;
            let lastIndex = stack.length - 1 ;
            while(counter > 0 && stack[lastIndex] == s[i]){
                counter--;
                lastIndex--;
            }

            if(counter != 0){
                stack.push(s[i]);
            }
        }else{
            stack.push(s[i]);
        }
    }

    return stack.join('');
};