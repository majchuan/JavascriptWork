/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function(pairs) {
    const hash_pair={};
    const edges ={};

    for(const [start ,end ] of pairs){
        hash_pair[start] ? hash_pair[start].push(end) : hash_pair[start] = [end];
        edges[start] ? edges[start]++ : edges[start] = 1;
        edges[end] ? edges[end]-- : edges[end] = -1 ;
    }

    console.log(edges);

    let start = pairs[0][0];
    const keys = Object.keys(edges);
    for(const k of keys){
        if(edges[k] == 1){
            start = k ;
            break;
        }
    }
    const result = [];
    dfs(hash_pair, start, result);

    return result.reverse();

};

const dfs=(hash_pair, start , result) =>{
    while(hash_pair[start] && hash_pair[start].length > 0){
        let end = hash_pair[start].pop();
        dfs(hash_pair, end , result);
        result.push([start , end]);
    }
}