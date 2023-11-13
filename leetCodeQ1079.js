/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const result = {};
    const visited = new Set();
    return dfs(tiles, result, "", visited );
};

const dfs=(tiles, result, curr, visited ) =>{
    let sum = 0 ;
    if(curr.length > 0 && result[curr] == null){
        result[curr] = 1;
        sum++;
    }

    for(let i = 0 ; i < tiles.length ; i++){
        if(visited.has(i)) continue;
        visited.add(i);
        var temp = curr;
        curr += tiles[i];
        sum +=dfs(tiles,result, curr,visited);
        visited.delete(i);
        curr = temp; 
    }

    return sum;
}