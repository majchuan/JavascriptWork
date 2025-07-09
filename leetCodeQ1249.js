/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    const stack = [];
    let i = 0;
    while(i < s.length){
        if(s[i] == "(" || s[i] ==")"){
            if(stack.length == 0){
                stack.push([s[i],i]);
            }else{
                if(stack[stack.length-1][0]+s[i] == "()"){
                    stack.pop();
                }else{
                    stack.push([s[i],i]);
                }
            }
        }
        i++;
    }
    let strArr = s.split('');
    for(let item of stack){
        strArr[item[1]] ='';
    }

    return strArr.join('');
};

const s ="lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s));
