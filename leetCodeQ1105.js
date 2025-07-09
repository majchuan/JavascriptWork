/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelvesMemo = function(books, shelfWidth) {
    const memo = new Array(books.length).fill().map(()=> new Array(shelfWidth+1).fill(0));
    return dfs(books, shelfWidth, memo, 0, shelfWidth, 0);
};

const dfs=(books, shelfWidth, memo, index, restShelfWidth, maxHeight)=>{
    const currBook = books[index];
    let currMaxHeight = Math.max(maxHeight, currBook[1]);

    if(index == books.length -1){
        //For the last book, store it in the current shelf if possible, otherwise start a new shelft with it.
        if(restShelfWidth >= currBook[0]) return currMaxHeight;
        return maxHeight + currBook[1];
    }

    if(memo[index][restShelfWidth] != 0){
        return memo[index][restShelfWidth];
    }

    //Calculate the height of the bookcase if we put the current book on the new shelf
    let optionHeightOfNewShelf = maxHeight + 
    dfs(books, shelfWidth, memo, index+1,shelfWidth - currBook[0], currBook[1]);

    if(restShelfWidth >= currBook[0]){
        //Calcualte height of the bookcase if we put the current book on the current shelf
        let optionHeightOfCurrentShelf = 
        dfs(books, shelfWidth, memo, index+1 , restShelfWidth - currBook[0], currMaxHeight);
        memo[index][restShelfWidth] = Math.min(optionHeightOfNewShelf, optionHeightOfCurrentShelf);
        return memo[index][restShelfWidth];
    }

    memo[index][restShelfWidth] = optionHeightOfNewShelf;
    return optionHeightOfNewShelf;
}