/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const hash_pair = {};
    const result = [];

    for(let pair of adjacentPairs){
        hash_pair[pair[0]] ? hash_pair[pair[0]].push(pair[1]) : hash_pair[pair[0]] = [pair[1]];
        hash_pair[pair[1]] ? hash_pair[pair[1]].push(pair[0]) : hash_pair[pair[1]] = [pair[0]];
    }
    let root = 0 ;
    for(let key in hash_pair){
        if(hash_pair[key].length == 1){
            root = key;
            break;
        }
    }


    dfs(root, Number.MAX_SAFE_INTEGER ,result, hash_pair, 0);

    return result;
};

const dfs=(node, prevNode, result, hash_pair, index)=>{
    result[index] = node;

    for(let neighbor of hash_pair[node]){
        if(neighbor != prevNode){
            dfs(neighbor, node, result, hash_pair, index+1);
        }
    }
}