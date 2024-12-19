/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const n = arr.length; 
    const stack = [];

    for(let i = 0 ; i < n ; i++){
        if(stack.length == 0 || arr[i] > stack[stack.length -1]){
            stack.push(arr[i]);
        }else{
            const maxElement = stack[stack.length - 1];
            while(stack.length > 0 && arr[i] < stack[stack.length -1]){
                stack.pop();
            }
            stack.push(maxElement);
        }
    }

    return stack.length;
};
