/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const nextStateBoard = Array.from(Array(board.length), () => new Array(board[0].length));
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0; j < board[0].length ; j++){
            console.log(liveNations(i,j, board.length , board[0].length));
        }
    }
};


const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];

const liveNations = (x,y, h, w) =>{
    let lives = 0;
    for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, h - 1); i++) {
      for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, w - 1); j++) {
        lives += board[i][j] & 1;  // Get 1st bit
      }
    }
    lives -= board[x][y] & 1;  // subtract itself
    return lives;
}


console.log(gameOfLife(board));