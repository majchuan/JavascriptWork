/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    return dfs(s,0,"",[]);
};

const dfs = (s, index, curr, result) =>{

    
    if(curr.length == s.length){
        result.push(curr);
        return result;
    }
    
    for(let i = index ; i < s.length ; i++){
        if(isNaN(s[i])){
           let temp = curr.slice();
            if(s[i] != s[i].toUpperCase()){
                dfs(s, i+1, curr.concat(s[i]), result);
                dfs(s, i+1, temp.concat(s[i].toUpperCase()),result);
            }else{
                dfs(s, i+1, curr.concat(s[i]), result);
                dfs(s, i+1, temp.concat(s[i].toLowerCase()),result);
            }
        
        }else{
            dfs(s,i+1, curr.concat(s[i]), result);
        }
    }

    return result;
}