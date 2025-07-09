/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let i = 0 ; i < tokens.length; i++){
        if(tokens[i] != "+" && tokens[i] !="-" && tokens[i] != "*" && tokens[i] !="/"){
            stack.push(parseInt(tokens[i]));
        }else{
            let num1 = stack.pop();
            let num2 = stack.pop();
            switch(tokens[i]){
                case "+":
                    stack.push(num2 + num1);
                    break;
                case "-":
                    stack.push(num2 - num1);
                    break;
                case "*":
                    stack.push(num2 * num1);
                    break;
                case "/" :
                    stack.push((num2 / num1) > 0 ? Math.floor(num2/num1) : Math.ceil(num2/num1));
                    break;
            }
        }
    }

    return stack[0];
};