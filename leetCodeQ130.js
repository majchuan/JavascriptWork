/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Fist find all edge fields which it is marked "O" there, then use dfs function to find all connected edge(four directions) which field is marked "O"
 * and update its value to "&", otherwise return back up dfs caller. 
 * Second loop again the board, if the field is "O" , update it to "X", if the field is "&", it means it is edge field and its connected fields,
 * update its value back to "O";
 */
 var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n; j++){
            if(board[i][j] == "O"){
                if(i == 0 || i == m-1 || j == 0 || j == n -1){
                    if(board[i][j] == "O"){
                        dfs(i,j,board);
                    }
                }
            }
        }
    }
    //console.log(board);
    for(let i = 0; i <m ; i++){
        for(let j = 0; j<n ; j++){
            if(board[i][j] == "O"){
                board[i][j] = "X";
            }else if(board[i][j] =="&"){
                board[i][j]= "O";
            }
        }
    }
    
    
    return board;
};
/*
*DFS
*/
const dfs=(i,j,board) =>{
    if(i< 0 || i == board.length || j < 0 || j == board[0].length){
        return;
    }
    
    if(board[i][j] == "O"){
        board[i][j] = "&";
        //four directions
        dfs(i-1 ,j, board);
        dfs(i,   j+1, board);
        dfs(i,   j-1, board);
        dfs(i+1, j, board);
    }

    return;
}

/*
*BFS
*/

const solveBFS=(board) =>{
    const m = board.length;
    const n = board[0].length;
    const queue =[];
    for(let i = 0 ; i < m ; i++){
        for(let j = 0; j<n; j++){
            if(i == 0 || i == m -1 || j ==0 || j == n-1){
                if(board[i][j] == "O"){
                    queue.push([i,j]);
                }
            }
        }
    }

    while(queue.length > 0){
        let currLen = queue.length;
        for(let i = 0 ; i < currLen ;i++){
            const [currRow,currCol] = queue.shift();
            if(board[currRow,currCol] == "O"){
                board[currRow,currCol] = "*";
                //four directions
                if(currRow - 1 >  0  && board[currRow - 1][currCol] == "O"){
                    queue.push([currRow -1, currCol]);
                }
                if(currRow + 1 <  m  && board[currRow + 1][currCol] == "O"){
                    queue.push([currRow + 1, currCol]);
                }
                if(currCol -1 > 0 && board[currRow][currCol - 1] == "O"){
                    queue.push([currrow,currCol-1]);
                }
                if(currCol + 1 < n && board[currRow][currCol + 1] == "O"){
                    queue.push([currrow,currCol+1]);
                }
            }
        }
    }

    for(let i = 0; i< m ; i++){
        for(let j = 0; j<n ;j++){
            if(board[i][j] == "O"){
                board[i][j] == "X";
            }else if(board[i][j] == "*"){
                board[i][j]="O";
            }
        }
    }

    return board;
}

