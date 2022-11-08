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

const arr=["un","iq","ue"];
console.log(maxLength(arr));