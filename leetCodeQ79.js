/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board || !board[0]) return false;
    if (!word) return false;
    const m = board.length;
    const n = board[0].length;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    let r = false;
    
    const dfs = (i, j, curWord) => {
      curWord += board[i][j];
      if (curWord.length > word.length || r) return;
      if (curWord === word) r = true;
      
      const tmp = board[i][j];
      board[i][j] = '@';
      for (let k = 0; k < 4; k++) {
        const x = i + dx[k];
        const y = j + dy[k];
        if (0 <= x && x < m && 0 <= y && y < n && board[x][y] !== '@' && board[x][y] === word[curWord.length]) {
          dfs(x, y, curWord);
        }
      }
      board[i][j] = tmp;
    }
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === word[0]) {
          dfs(i, j, '');
        }
      }
    }
    
    return r;
  };

/*---------------------------------------------------------------------------------------*/
var existSlowFunction = function(board, word) {
    const directions =[1,2,3,4];
    let combineWord = "";
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[0].length; j++){
            if(board[i][j] == word[0]){
                let isExist = checkWord(board, word, combineWord, i, j, directions);
                if(isExist) return true;
            }
        }
    }
    return false;
};

const checkWord = (board,word, combineWord, m, n ,directions) =>{
    
    if(m < 0 || m >= board.length || n < 0 || n >= board[0].length){
        return false;
    }

    if(board[m][n] == "*"){
        return false;
    }
    
    if(combineWord.length > word.length){
        return false;
    }

    if(combineWord === word) {
        return true;
    }

    let temp = board[m][n];
    board[m][n] ="*";

    for(let i = 0 ; i < directions.length ; i++){
        switch(directions[i]){
            case 1:
                if(board[m][n] != "*" && board[m][n] == word[combineWord.length] && checkWord(board,word,currentWord+board[m][n], m-1 ,n, directions)){
                    return true;
                }
                break;
            case 2:
                if(board[m][n] != "*" && board[m][n] == word[combineWord.length] && checkWord(board,word,currentWord + board[m][n], m, n+1, directions)){
                    return true;
                }
                break;
            case 3:
                if(board[m][n] != "*" && board[m][n] == word[combineWord.length] && checkWord(board,word,currentWord + board[m][n], m+1, n, directions)){
                    return true;
                }
                break;
            case 4:
                if(board[m][n] != "*" && board[i][j] == word[combineWord.length] && checkWord(board,word,currentWord+board[m][n], m, n-1, directions)){
                    return true;
                }
                break;
        }
    }
    
    board[i][j] = temp;

    return false;
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 ="ABCB";
const board2 =[["a"]], word2 ="a";
const board3=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word3 ="SEE";
const board4 =[["E","D","C"],["F","A","B"],["G","H","I"]], word4="ABCDEFGHI" ;
console.log(exist(board4,word4));