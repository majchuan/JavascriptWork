/**
 * @param {string} s
 * @return {string}
 */
/*Same Question leetCodeQ316*/
 var smallestSubsequence = function(s) {
    const stack=[];
    const hash_s = {};
    for(let str of s){
        hash_s[str] ? hash_s[str]++ : hash_s[str] = 1 ;
    }
    for(let i = 0 ; i < s.length ; i++){
        if(hash_s[s[i]] > 0){
            hash_s[s[i]]--;
        }
        if(stack.includes(s[i])) continue; 

        while(stack.length > 0){
            if(stack[stack.length-1] > s[i] && hash_s[stack[stack.length-1]] > 0){
                stack.pop();
            }else{
                break;
            }
        }
        stack.push(s[i]);
    }

    return stack.join('');
};