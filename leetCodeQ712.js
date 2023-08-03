/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const hash_s = {};
    return dfs(s1,s2, s1.length -1 , s2.length -1, hash_s);
};

const dfs=(s1, s2 , i , j, hash_s) =>{
    if(i < 0 && j < 0){
        return 0 ;
    }
    let key = i.toString()+"|"+j.toString();

    if(hash_s[key]){
        return hash_s[key];
    }

    if(i < 0){
        hash_s[key] = s2.charCodeAt(j) + dfs(s1,s2, i, j-1, hash_s);
        return hash_s[key];
    }

    if(j < 0){
        hash_s[key] = s1.charCodeAt(i) + dfs(s1, s2, i-1, j, hash_s);
        return hash_s[key];
    }

    if(s1.charCodeAt(i) == s2.charCodeAt(j)){
        hash_s[key] = dfs(s1, s2 ,i-1, j-1, hash_s);
    }else{
        hash_s[key]= Math.min(s1.charCodeAt(i) + dfs(s1,s2,i-1,j, hash_s), 
        s2.charCodeAt(j) + dfs(s1,s2,i,j-1, hash_s), 
        s1.charCodeAt(i) + s2.charCodeAt(j) + dfs(s1,s2, i-1,j-1, hash_s));
    }

    return hash_s[key];
}