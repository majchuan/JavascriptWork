/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    let n = amount.length;
    const graph = new Map();
    const bobPath = new Map();
    const visited = new Array(n).fill(false);
    let maxIncome = Number.MIN_SAFE_INTEGER;
    const dfsBobPath = (node ,time) =>{
        bobPath.set(node, time);
        visited[node]=true;

        if(node == 0){
            return true;
        }

        for(let adjacentNode of graph.get(node)){
            if(visited[adjacentNode] == false && dfsBobPath(adjacentNode, time+1)){
                return true;
            }
        }

        bobPath.delete(node);
        return false;
    }

    const dfsAlicePath = (node, time, income, amount) =>{
        visited[node] = true;
        if(bobPath.has(node) == false || time < bobPath.get(node)){
            income += amount[node];
        }else if(time == bobPath.get(node)){
            income += amount[node]/2;
        }

        if(graph.get(node).length == 1 && node != 0){
            maxIncome = Math.max(maxIncome, income);
        }

        for(let adjacentNode of graph.get(node)){
            if(visited[adjacentNode]==false){
                dfsAlicePath(adjacentNode, time+1, income, amount);
            }
        }
    }

    for(let edge of edges){
        const [key,value] = edge;
        if(graph.has(key) == false) graph.set(key, []);
        if(graph.has(value)== false) graph.set(value,[]);
        graph.get(key).push(value);
        graph.get(value).push(key);
    }

    dfsBobPath(bob, 0);
    visited.fill(false);
    dfsAlicePath(0,0,0,amount);

    return maxIncome;
};
