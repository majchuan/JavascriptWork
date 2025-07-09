/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const m = isConnected.length;
    let result = 0 ;
    const visited = new Set();
    for(let i = 0 ; i < m ; i++){
        if(visited.has(i) == false){
            //dfs(isConnected, i, visited);
            bfs(isConnected, i, visited);
            result++;
        }
    }
    return result;
};

const dfs=(isConnected, i , visited)=>{
    visited.add(i);

    for(let j = 0 ; j < isConnected.length ; j++){
        if(isConnected[i][j] == 1 && visited.has(j) == false){
            dfs(isConnected, j , visited) ;
        }
    }
}

const bfs=(isConnected , i , visited) =>{
    const queue = [i];
    visited.add(i);
    let steps = 0 ;
    while(queue.length > 0){
        const currLength = queue.length;
        for(let j = 0 ; j < currLength; j++){
            const currCityI = queue.shift();
            for(let z = 0 ; z < isConnected.length ; z++){
                if(isConnected[currCityI][z] == 1 && visited.has(z)== false){
                    queue.push(z);
                    visited.add(z);
                }
            }
        }
    }
}