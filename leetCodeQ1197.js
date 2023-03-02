/*
In an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square [x, y].  It is guaranteed the answer exists.

Example 1:
Input: x = 2, y = 1
Output: 1
Explanation: [0, 0] → [2, 1]

Example 2:
Input: x = 5, y = 5
Output: 4
Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]

Constraints:
|x| + |y| <= 300

*/

/** 
*@param {number} x
*@param {number} y
*@return {number}
*/

var minKnightMovesBFS = function(x,y) {
    const directions =[[2,1],[1,2],[-1,2],[-2,1],[-2.-1],[-1,-2],[1,-2],[2,-1]];
    const queue =[[0,0]];
    const visited = new Set("0,0");
    if(x == 0 && y== 0) return 0;

    let step = 0;
    while(queue.length > 0){
        let length = queue.length;
        for(let i = 0; i < length ; i++){
            const [r,c] = queue.shift();
            const path = r.toString() + ","+ c.toString();
            for(let [rd,cd] of directions ){
                const row = rd + r ;
                const column =cd +c ;
                const currPath = row.toString() +","+ column.toString();
                if(visited.has(currPath)) continue;
    
                if(row == x && column ==y) return step+1;
    
                queue.push([row,column]);
                visited.add(currPath);
            }
        }
        step++;
    }

    return -1;
}

var minKnightMovesDFS = function(x,y) {
    const directions =[[2,1],[1,2],[-1,2],[-2,1],[-2.-1],[-1,-2],[1,-2],[2,-1]];
    const visited = new Set("0,0");
    if(x==0 && y ==0 ) return 0 ;
    return dfs(Math.abs(x),Math.abs(y),0,0,visited,0,directions);
}

const dfs=(targetX, targetY, currX, currY, visited, steps, directions)=>{

    let currSteps = Number.MAX_SAFE_INTEGER ; 

    if(currX > 300 || currY > 300){
        return Number.MAX_SAFE_INTEGER;
    }
    if(targetX == currX && targetY == currY){
        return steps;
    }
    for(let i = 0 ; i < directions.length ; i++){
        let row = currX + directions[i][0];
        let column = currY + directions[i][1];
        let currPath = row.toString() +","+column.toString();
        if(visited.has(currPath)) continue; 
        visited.add(currPath);
        currSteps =Math.min( currSteps, dfs(targetX,targetY,row, column, visited, steps + 1 , directions ) );
    }

    return currSteps;
}

const x = 2;
const y = 1;
console.log(minKnightMovesBFS(x,y));
console.log(minKnightMovesDFS(x,y));
