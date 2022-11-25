/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    const stack = [];
    s = s.replace(/ /g, ''); // remove white spaces
    let curentOperator = '+', digitsPattern = /[0-9]/;
    
    for (let i = 0; i < s.length; i++) {
        if (digitsPattern.test(s[i])) {
            // put the whole number into the stack
            if (digitsPattern.test(s[i - 1])) {
                stack[stack.length - 1] += s[i];
            } else {
                stack.push(curentOperator + s[i]);
            }
        } else if (s[i] == '+' || s[i] == '-') {
            curentOperator = s[i];
        } else if (s[i] == '(') {
            // put '+(' or '-(' into the stack
            stack.push(curentOperator + s[i]);
            curentOperator = '+';
        } else { // case s[i] == ')'
            let intermidiateResult = 0, temp = 0;
            
            while(temp != '-(' && temp != '+(') {
                intermidiateResult += parseInt(temp);
                temp = stack.pop();
            }
            
            stack.push(temp[0] == '+' ? intermidiateResult : -intermidiateResult);
        }
        
        //console.log(stack);
    }
    
    let output = 0;
    
    while(stack.length > 0) {
        output += parseInt(stack.pop());
    }
    
    return output;
};

const s = "- (3 + (4 + 5))" ;
const s1="(1+(4+5+2)-3)+(6+8)";
const s2 ="1 + 11";
console.log(calculate(s2));