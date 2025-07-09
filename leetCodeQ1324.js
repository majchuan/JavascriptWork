/**
 * @param {string} s
 * @return {string[]}
 */
 var printVertically = function(s) {
    let arr = s.split(" ");
    let m = arr.length;
    let n = 0 ;
    for(let i = 0; i < arr.length; i++){
        n = Math.max(n, arr[i].length);
    }
    const result = new Array(n).fill("");

    for(let j = 0; j< n ; j++){
        let row = 0;
        for(let i = 0 ; i < m; i++){
            result[j] +=arr[row++][j] == undefined ? " " : arr[i][j] ;
        }
        result[j] = result[j].trimEnd();
    }
    return result;
};