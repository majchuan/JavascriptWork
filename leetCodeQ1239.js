/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    return dfs(arr, 0 ,"");
};

const dfs=(arr, index, str)=>{
    let maxNum = 0;
    
    if(isUniqueCharacters(str)){
        maxNum = Math.max(maxNum , str.length);
    }
    
    for(let i = index ; i < arr.length; i++){
        maxNum = Math.max(maxNum, dfs(arr, i+1,str+arr[i]));
    }
    
    return maxNum;
    
}

const isUniqueCharacters = (str)=>{

    const hash_str ={};
    
    for(let i = 0; i < str.length; i++){
        if(hash_str[str[i]] == 1){
            return false;
        }else{
            hash_str[str[i]] = 1 ;
        }
    }
    
    return true;
}

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLengthFastApproach = function(arr) {
    let res = 0;
    function solve(index, cur) {
        if(cur.length !== new Set(cur.split('')).size) {
            return;
        }
        res = Math.max(res, cur.length);
        for(let i = index; i < arr.length; i++) {
            solve(i + 1, cur + arr[i]);
        }
    }
    solve(0, '');
    return res;
};

const arr=["un","iq","ue"];
console.log(maxLength(arr));