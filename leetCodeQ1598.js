/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];
    for(let i = 0 ; i < logs.length ; i++){
        if(stack.length > 0 && logs[i] == "../"){
            stack.pop();
        }
        if(logs[i].match(/[a-z0-9]/)){
            stack.push(logs[i]);
        }
    }
    return stack.length;
};
