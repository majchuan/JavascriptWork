/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let neighbors = {};
    for(let i = 0 ; i < equations.length; i++){
        const currValue = values[i];
        let A = equations[i][0];
        let B = equations[i][1];
        neighbors[A] ? neighbors[A].push([B,currValue]) : neighbors[A] =[[B,currValue]];
        neighbors[B] ? neighbors[B].push([A, 1/currValue]) : neighbors[B] =[[A,1/currValue]]; 
    }
    
    let result = [];
    for (let query of queries) {
        result.push(evaluate(query, neighbors));
    }
    
    return result;
};

function evaluate(query, neighbors) {
    const [C, D] = query;
    if(neighbors[C] == null || neighbors[D] == null) return -1;
    if (C === D) return 1;
    
    let queue = neighbors[C].slice();
    let visited = new Set();
    
    while (queue.length > 0 ) {
        const [variable, value] = queue.shift();
        
        if (variable === D) return value;
        visited.add(variable);

        if(neighbors[variable] == null) return ;

        for(let [next, nextValue] of neighbors[variable]){
            if(visited.has(next)) continue;
            queue.push([next, nextValue * value]);
        }
    }
    
    return -1;
}

const equations =[["a","b"],["b","c"]];
const values =[2.0,3.0];
const queries =[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];

console.log(calcEquation(equations,values,queries));



