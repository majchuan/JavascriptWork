/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/*
*loop the num , and add the number into stack. if the newly number is smaller than the top element of stack, then remove all element bigger than this newly add number 
*in the stack, then push this newly number into stack. once this loop finish. we only select number into new array with current stack length - k.
*/
 var removeKdigits = function(num, k) {
    let stack = [];
    if(num.length == k) return "0";
    for(let i = 0 ; i < num.length; i++){
        if(stack.length == 0){
            stack.push(num[i]);
            continue;
        }
        
        if(stack.length > 0 && stack[stack.length-1] > num[i] && k > 0){
            while(stack[stack.length -1] > num[i] && k > 0){
                stack.pop();
                k--;
            }
        }
        
        stack.push(num[i]);
    }
    stack = stack.slice(0, stack.length -k);
    
    while(stack.length > 1 && stack[0] == 0){
        stack.shift();
    }
    return stack.join("");
};
