/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const n = s.length;
    const stack = [];
    let deleteCount = 0 ;

    for(let i = 0 ; i < s.length ; i++){
        if(stack.length > 0 && stack[stack.length-1] == 'b' && s[i] =='a'){
            stack.pop();
            deleteCount++;
        }else{
            stack.push(s[i]);
        }
    }

    return deleteCount;
};