/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const hash_bombs = {};
    let n = bombs.length ;

    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            if(i == j) continue;

            let xi = bombs[i][0], yi=bombs[i][1], ri = bombs[i][2];
            let xj = bombs[j][0], yj=bombs[j][1];
            if( Math.pow(ri,2) >= Math.pow(xi - xj,2) + Math.pow(yi-yj,2)){
                hash_bombs[i] ? hash_bombs[i].push(j) : hash_bombs[i] = [j];
            }            
        }
    }
    let resultDFS = 0 ;
    let resultBFS =0;
    for(let i = 0 ; i < n ; i++){
        let countDFS = dfs(i, new Set(), hash_bombs);
        let countBFS = bfs(i, hash_bombs);
        resultDFS = Math.max(resultDFS, countDFS);
        resultBFS = Math.max(resultBFS, countBFS);
    }

    return result;

};

const dfs=(curr, visited, hash_bombs)=>{
    visited.add(curr);

    let count  = 1 ;
    const next = hash_bombs[curr];
    if(next == null) return count; 

    for(let i of next ){
        if(visited.has(i) == false){
            count += dfs(i, visited ,hash_bombs);
        }
    }
    return count;
}

const bfs=(curr, hash_bombs) =>{
    const queue = [curr];
    const visited = new Set();
    visited.add(curr);
    while(queue.length > 0){
        let currLength = queue.length;
        for(let i = 0 ; i < currLength; i++){
            const currBombs = hash_bombs[queue.shift()];
            if(currBombs == null) continue;
            for(let j of currBombs){
                if(visited.has(j) == false){
                    visited.add(j);
                    queue.push(j);
                }
            }
        }
    }
    
    return visited.size ;
}