/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    const m = image.length;
    const n = image[0].length;
    const oldColor = image[sr][sc];
    if(oldColor == newColor) return image;
    dfs(image, sr, sc, newColor, oldColor, m, n);
    return image;
};

const dfs=(image ,sr,sc,newColor,oldColor, m, n)=>{
    
    if(sr >= m || sr < 0 || sc >= n ||sc < 0){
        return;
    }
    //console.log(sr,sc,m,n);
    if(image[sr][sc] != oldColor){
        return; 
    }
    
    image[sr][sc] = newColor;
    
    //four direction
    dfs(image, sr-1,sc,newColor, oldColor,m,n);
    dfs(image, sr, sc-1, newColor, oldColor,m,n);
    dfs(image, sr+1, sc ,newColor, oldColor,m,n);
    dfs(image, sr, sc+1, newColor, oldColor,m,n);
}