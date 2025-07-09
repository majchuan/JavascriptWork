/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let left = 0 , right = 0 ;

    while(left < pushed.length){
        stack.push(pushed[left]);
        while(stack.length > 0 ){
            if(stack[stack.length -1] == popped[right]){
                stack.pop();
                right++;
            }else{
                break;
            }
        }
        left++
    }

    return stack.length == 0 
};