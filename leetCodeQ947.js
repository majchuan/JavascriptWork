/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const hash_stone_rows = {};
    const hash_stone_cols = {};

    for(let stone of stones){
        hash_stone_rows[stone[0]] ? hash_stone_rows[stone[0]].push(stone[1]) 
        : hash_stone_rows[stone[0]] = [stone[1]];
        hash_stone_cols[stone[1]] ? hash_stone_cols[stone[1]].push(stone[0]) : 
        hash_stone_cols[stone[1]] = [stone[0]];
    }

    const visited = new Set();
    let connectedStones = 0 ;

    for(const stone of stones){
        const key = stone[0].toString() +"|" +stone[1].toString();
        if(visited.has(key)) continue;
        dfs(hash_stone_rows, hash_stone_cols, visited, stone[0], stone[1]);
        connectedStones++;
    }

    return stones.length - connectedStones;
};

const dfs=(hash_stone_rows, hash_stone_cols, visited, i ,j) =>{
    const key = i.toString() + "|" + j.toString();

    if(visited.has(key)) return;

    visited.add(key);

    const rows = hash_stone_rows[i];
    for(const col of rows){
        dfs(hash_stone_rows, hash_stone_cols, visited,i, col);
    }

    const cols = hash_stone_cols[j];
    for(const row of cols){
        dfs(hash_stone_rows, hash_stone_cols, visited, row, j);
    }
}
