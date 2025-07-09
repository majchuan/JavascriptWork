/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ')') {
            let str = [];
            while(stack[stack.length - 1] !== '(') {
                str.push(stack.pop());
            }
            stack.pop(); // remove '('
            stack = [...stack.concat(str)];
            continue;
        }
        stack.push(s[i]);
    }
    return stack.join("");
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseParenthesesSlowFunction = function(s) {
    const stack = [];
    let result ="";
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == '('){
            stack.push(result.length);
        }else if (s[i] ==')'){
            let start = stack.pop();
            result = reverse(result, start , result.length -1)
        }else{
            result += s[i];
        }
    }
    
    return result;
};

const reverse = (result, start , end) =>{
    const sb = result.split('');
    while(start < end){
        let temp = sb[start];
        sb[start] = sb[end];
        sb[end] = temp;
        start++;
        end--;
    }

    return sb.join('');
}
