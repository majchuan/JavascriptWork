/**
 * @param {string} s
 * @return {string}
 */
/*smallest in lexicographical orders */
 var removeDuplicateLetters = function(s) {
    const hash_s ={};
    const stack =[];
    
    for(let c of s){
        hash_s[c] ? hash_s[c]++ : hash_s[c]=1;
    }
    
    for(let c of s){
        if(hash_s[c] > 0){
            hash_s[c]--;
        }
        
        if(stack.includes(c)){
            continue;
        }
        
        while(stack.length >0){
            let topChar = stack[stack.length-1];
            if(hash_s[topChar] > 0 && topChar > c ){ // topChar < c to find largest lexicographical order among all possible results.
                stack.pop();
            }else{
                break;
            }
        }
        
        stack.push(c);
    }
    
    return stack.join('');
};