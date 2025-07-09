/*
maze 
Input 1: a maze represented by a 2D array

0 0 1 0 0
0 0 0 0 0
0 0 0 1 0
1 1 0 1 1
0 0 0 0 0

Input 2: start coordinate (rowStart, colStart) = (0, 4)
Input 3: destination coordinate (rowDest, colDest) = (4, 4)

public class Solution {
    public boolean hasPath(int[][] maze, int[] start, int[] destination) {
        boolean[][] visited = new boolean[maze.length][maze[0].length];
        return reach(maze, start[0], start[1] , destination, visited);
    }
    private boolean reach(int[][] maze, int i, int j, int[] dest, boolean[][] visited) {
        if (i == dest[0] && j == dest[1]) {
            return true;
        }
        if (visited[i][j] == true) {
            return false;
        }
        visited[i][j] = true;
        int[][] dirs = new int[4][2];
        dirs[0] = new int[]{0, 1};
        dirs[1] = new int[]{1, 0};
        dirs[2] = new int[]{0, -1};
        dirs[3] = new int[]{-1, 0};
        for (int k = 0; k < dirs.length; k ++) {
            int x = i, y = j;
            while (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] == 0) {
                x = x + dirs[k][0];
                y = y + dirs[k][1];
            }
            x = x - dirs[k][0];
            y = y - dirs[k][1];
            if (!visited[x][y] && reach(maze, x, y, dest, visited)) {
                return true;
            }
        }
        return false;
    }
}
*/

// 0 represent not visisted
// 1 represent visisted 
const maze = (maze, start, destination) =>{
    visitedSpace = new Array(maze.length).fill(new Array(maze[0].length).fill(0));
    return isReachDestination(maze, start , destination ,visitedSpace);
}

const isReachDestination = (maze, start, destination, visitedSpace) =>{
    let x =start[0] , y = start[1];
    if(x == destination[0] && y == destination[1]){
        return true; 
    }
    if(visitedSpace[x][y] ==1){
        return false;
    }

    visitedSpace[x][y] = 1;
    //four directions [x,y] 
    const direction =[[0,1],[-1,0],[-1,0],[1,0]];

    for(let i =0 ; i < direction.length; i++){
        while (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] == 0) {
            x = x + direction[i][0];
            y = y + direction[i][1];
        }
        //step back one step.
        x = x - direction[i][0];
        y = y - direction[i][1];
        if (visitedSpace[x][y] == 0 && isReachDestination(maze, [x,y], destination, visitedSpace)) {
            return true;
        }
    }
    return false;
}

const mazeMatrix =[
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
];
const start=[0,4], destination=[4,4];

console.log(maze(mazeMatrix,start,destination));