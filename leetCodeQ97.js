/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length != s3.length) return false;
    const visited = {};
    return dfs(0,0,0,visited, s1, s2, s3);
};

const dfs=(i , j ,k , visited, s1, s2, s3) =>{
    if(k == s3.length) return true;

    let key = i.toString()+","+j.toString();
    if(visited[key] != null) return visited[key];

    let result = false ;

    if(i < s1.length && s1[i] == s3[k]){
        result =  dfs(i+1 ,j , k+1 ,visited, s1 ,s2 ,s3);
    }

    if(j < s2.length && s2[j] == s3[k]){
        result = result || dfs(i, j+1 , k+1, visited , s1, s2 ,s3);
    }

    visited[key] = result;

    return result;
}