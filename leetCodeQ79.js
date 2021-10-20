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
    const result =[];
    const directions =[1,2,3,4];
    checkWord(board,word,"",0,0,directions,result);
    if(result.length == 0) {
        return false
    }else{
        return result[0];
    }
};

const checkWord = (board,word, combineWord,m,n ,directions ,result) =>{
    
    if(m < 0 || m >= board.length || n < 0 || n >= board[0].length){
        return 
    }

    if(board[m][n] == "*"){
        return;
    }
    
    if(combineWord.length > word.length){
        return;
    }

    if(combineWord === word) {
        result.push(true);
        return ;
    }
    
    for(let i = m ; i < board.length ; i++){
        for(let j = n ; j <board[0].length ; j++){
            let currentWord = combineWord+ board[i][j];
            if(currentWord == word) {
                result.push(true);
                return ;
            }
            let temp = board[i][j];
            board[i][j] ="*";
            let dIndex = 0 ;
            while(dIndex < directions.length){
                switch(directions[dIndex]) {
                    case 1:
                        checkWord(board,word,currentWord, i-1 ,j, directions ,result);
                        break;
                    case 2:
                        checkWord(board,word,currentWord, i, j+1, directions, result);
                        break;
                    case 3:
                        checkWord(board,word,currentWord, i+1, j, directions, result);
                        break;
                    case 4:
                        checkWord(board,word,currentWord, i, j-1, directions , result);
                        break;
                }
                
                dIndex++;
            }
            board[i][j] = temp;
        }
    }
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 ="ABCB";
const board2 =[["a"]], word2 ="a";
const board3=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word3 ="SEE";
const board4 =[["E","D","C"],["F","A","B"],["G","H","I"]], word4="ABCDEFGHI" ;
console.log(exist(board4,word4));