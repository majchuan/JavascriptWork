/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS=[];
    const stackT=[];

    for(let i = 0 ; i < s.length; i++){
        if(s[i] != "#"){
            stackS.push(s[i]);
        }

        if(stackS.length > 0 && s[i] == "#"){
            stackS.pop();
        }
    }

     for(let i = 0 ; i < t.length; i++){
        if(t[i] != "#"){
            stackT.push(t[i]);
        }

        if(stackT.length > 0 && t[i] == "#"){
            stackT.pop();
        }
    }
    
    return stackS.join() == stackT.join();
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare1 = function(s, t) {
    return backspaceString(t) === backspaceString(s);
};

const backspaceString=(s)=>{
    const stack = [];
    for (const c of s) {
        if (c === '#') {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
}