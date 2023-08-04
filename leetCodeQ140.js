/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = [];
    dfs(s, wordDict, result, []);
    return result;
};

const dfs=(s, dictionary ,result, curr)=>{
    if(s=="") {
        result.push(curr.slice().join(" "));
        return ;
    };

    for(let i = 0 ; i < s.length ; i++){
        let s1 = s.slice(0, i+1);
        let s2 = s.slice(i+1);
        if(dictionary.includes(s1)){
            curr.push(s1);
            dfs(s2, dictionary, result, curr);
            curr.pop();
        }
    }

}