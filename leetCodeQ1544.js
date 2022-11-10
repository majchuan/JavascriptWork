/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    const stack =[];

    for(let i = 0 ; i < s.length; i++){
        let currChar = s[i].toString();
        while(stack.length > 0){
            let topChar = stack[stack.length-1];
            if
            (currChar.toUpperCase() == topChar.toUpperCase() &&((
                    currChar.toUpperCase() == currChar &&
                    topChar.toUpperCase() != topChar
                )||(
                    currChar.toUpperCase() != currChar && 
                    topChar.toUpperCase() == topChar
                ) ) )
            {
                stack.pop();
                currChar="";
            }else{
                break;
            }
        }

        if(currChar !=""){
            stack.push(currChar);
        }
    }

    return stack.join('');
};

console.log(makeGood("abBAcC"));


