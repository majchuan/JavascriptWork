/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {

    const stack = [];
    for(let i = 0; i< s.length ; i++){
        if(stack.length > 0 && stack[stack.length-1][0] == s[i]){
            stack[stack.length-1][1]++;
            if(stack[stack.length-1][1] == k){
                stack.pop();
            }
        }else{
            stack.push([s[i],1]);
        }
    }
    let result = "";
    for(let key of stack){
        for(let i = 0 ; i < parseInt(key[1]) ; i++){
            result +=key[0];
        }
    }
    return result;
    
};