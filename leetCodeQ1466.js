/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let roadNum = 0 ;
    let edges ={};
    let hash_conns ={};
    for(let i = 0 ; i < n; i++){
        edges[i] = [];
    }

    for(let conn of connections){
        hash_conns[conn[0]] ? hash_conns[conn[0]].push(conn[1]) : hash_conns[conn[0]] =[conn[1]];
        hash_conns[conn[1]] ? hash_conns[conn[1]].push(conn[0]) : hash_conns[conn[1]] =[conn[0]];
        edges[conn[0]].push(conn[1]);
    }
    console.log(hash_conns, edges);

    let visited = new Set();
    visited.add(0);
    roadNum = dfs(0, hash_conns, edges, visited, roadNum)

    console.log(roadNum);
    return roadNum;
};

const dfs=(num,hash_conns, edges,visited, roadNum)=>{
    let next = hash_conns[num];
    for(let val of next){
        if(visited.has(val)) continue;
        if(edges[val] == null) continue;
        if(edges[val].includes(num) == false){
            roadNum++;
        }
        visited.add(val);
        roadNum = dfs(val,hash_conns, edges, visited, roadNum);
    }

    return roadNum;

}

const n = 6 , connections = [[0,1],[1,3],[2,3],[4,0],[4,5]];
console.log(minReorder(n,connections));