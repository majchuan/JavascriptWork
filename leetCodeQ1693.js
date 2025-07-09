/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let result = 0 ;
    const stack = [];

    for(let i = 0 ; i < s.length; i++){

        if(s[i] == '['){
            stack.push(s[i]);
        }else{
            if(stack.length > 0){
                stack.pop();
            }else{
                result++;
            }
        }
    }

    return Math.floor((result+1)/2);
};
