/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const visited = {};
    let result = dfs(word1, word2, word1.length -1 , word2.length -1, visited);
    return result;
};

const dfs = (word1, word2, i,j, visited)=>{
    if(i < 0 && j < 0){
        return 0;
    }

    let key = i.toString() + "|" + j.toString();

    if(visited[key]){
        return visited[key];
    }

    if(i < 0){
        visited[key] = 1 + dfs(word1, word2, i, j-1, visited);
        return visited[key];
    }

    if(j < 0){
        visited[key] = 1+ dfs(word1, word2, i-1, j ,visited);
        return visited[key];
    }

    if(word1[i] == word2[j]){
        visited[key] = dfs(word1, word2, i-1,j-1, visited);
    }else{
        visited[key] = Math.min(
            dfs(word1, word2, i, j-1,visited ) + 1, 
            dfs(word1, word2, i-1,j, visited ) + 1
            );
    }

    return visited[key];

}

const word1 ="leetcode", word2 ="etco";

console.log(minDistance(word1, word2));