/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
    let rindex = 0
    for(let i=0; i<number.length; i++){
        if(number[i] === digit){
            rindex = i
            if(digit < number[i+1]) break
        }
    }
    
    const res = number.substr(0,rindex)+number.substr(rindex+1)
    return res

};

/*
*Use stack to solve this issue.
*/
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigitByStack = function(number, digit) {
    const hash_n ={};
    const stack=[];
    let repeatNumber=0;
    
    for(let n of number){
        hash_n[n] ? hash_n[n]++ : hash_n[n] = 1 ;
    }
    if(hash_n[digit] ==1){
        return number.replace(digit,"");
    }
    
    let counter = 0 ;
    repeaterNumber = hash_n[digit];
    
    for(let n of number){
        if(n == digit){
            counter++;
        }
        
        while(stack.length> 0 && stack[stack.length-1] <=n ){
            if(stack[stack.length-1] < n){
                if(stack[stack.length -1] == digit && repeaterNumber - hash_n[digit] == 0 ){
                    hash_n[digit]--;
                    stack.pop();
                }else{
                    break;  
                }       
            }
            
            if(stack[stack.length-1] ==n){
                if(stack[stack.length -1] == digit && counter == hash_n[digit] && repeaterNumber - hash_n[digit] == 0){
                    hash_n[digit]--;
                    stack.pop();
                }else{
                    break;  
                }
            }
        }
        
        stack.push(n);
    }
    
    if(repeaterNumber - hash_n[digit] == 0){
        for(let i = stack.length-1 ; i >= 0 ; i--){
            if(stack[i] == digit){
                stack[i] ="";
                break;
            }
        }
    }

    return stack.join('');

};