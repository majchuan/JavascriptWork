/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValidFaster = function(s, locked) {
    if(s.length % 2 != 0) return false;

    let balance = 0 ;

    for(let i = 0 ; i < s.length ; i++){
        if(locked[i] == 0 || s[i] == "("){
            balance++;
        }else{
            balance--;
        }

        if(balance < 0) return false;
    }
    balance = 0;

    for(let i = s.length -1 ; i >= 0 ; i--){
        if(locked[i] == 0 || s[i] == ")"){
            balance++;
        }else{
            balance--;
        }
        if(balance < 0) return false;
    }

    return true;
};


/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValidTimeout = function(s, locked) {
    const sArr  = s.split("");
    if(s.length % 2 != 0) return false ;
    return dfs(sArr,0,locked);
};

const dfs=(s , index, locked) =>{
    if(index % 2 == 0){
        return checkParenthese(s);
    }

    if(locked[index] == 1){
        return dfs(s, index+1 , locked);
    }else{
        let s1= s.slice();
        s1[index] = s1[index] == "(" ? ")" :"(";
        return dfs(s1, index+1 , locked) || dfs(s , index+1 , locked);
    }
}

const checkParenthese = (s) =>{

    const stack = [];
    for(let i = 0 ; i < s.length ; i++){

        if(stack.length > 0 && stack[stack.length-1] + s[i] == "()"){
            stack.pop();
        }else{
            stack.push(s[i]);
        }        
    }
    return stack.length == 0;
}

const s = "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(", locked = "100011110110011011010111100111011101111110000101001101001111";

console.log(canBeValidTimeout(s,locked));