/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    return dfs(path, [0,0] , new Set(), 0);
};

const dfs=(path, startPoint, visited, index) =>{
    let x = startPoint[0];
    let y = startPoint[1];

    let key = x.toString()+"|"+y.toString();

    if(visited.has(key)) return true; 

    visited.add(key);

    if(index >= path.length) return false;

    if(path[index] == 'N'){
        y += 1;
    }

    if(path[index] =='S'){
        y -= 1;
    }

    if(path[index] =='E'){
        x += 1;
    }

    if(path[index] =='W'){
        x -= 1;
    }

    return dfs(path, [x,y], visited, index+1);
}