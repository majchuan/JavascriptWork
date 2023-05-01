/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const visited = new Set();
    const hash_str = new Map();
    let count = 0;
    for(let i = 0 ; i < strs.length ; i++){
        for(let j = 0 ; j < strs.length ; j++){
            if(findSimilar(strs[i], strs[j])){
                if(hash_str.has(i)){
                    hash_str.get(i).push(j);
                }else{
                    hash_str.set(i, [j]);
                }

                if(hash_str.has(j)){
                    hash_str.get(j).push(i);
                }else{
                    hash_str.set(j, [i]);
                }
            }

        }
    }

    for(let i = 0 ; i< strs.length ; i++){
        if(visited.has(i) == false){
            dfs(i, hash_str, visited);
            count++;
        }
    }

    return count;
};

const dfs=(i,hash_str, visited)=>{
    visited.add(i);
    if(hash_str.has(i) == false) return;

    for(let next of hash_str.get(i)){
        if(visited.has(next)) continue;
        visited.add(next);
        dfs(next, hash_str, visited);
    }

    return;
}
const findSimilar=( s1, s2 ) =>{
    let diff = 0 ;
    for(let i = 0 ; i < s1.length ; i++){
        if(s1[i] != s2[i]){
            diff++;
        }
    }

    return diff == 0 || diff ==2;
}
