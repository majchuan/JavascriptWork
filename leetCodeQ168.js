/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    hash_column_numbers = {
        1 : "A",
        2 : "B",
        3 : "C",
        4 : "D",
        5 : "E",
        6 : "F",
        7 : "G",
        8 : "H",
        9 : "I",
        10 : "J",
        11 : "K",
        12 : "L",
        13 : "M",
        14 : "N",
        15 : "O",
        16 : "P",
        17 : "Q",
        18 : "R",
        19 : "S",
        20 : "T",
        21 : "U",
        22 : "V",
        23 : "W",
        24 : "X",
        25 : "Y",
        26 : "Z"
    };


    if(columnNumber <= 26) return hash_column_numbers[columnNumber];

    let result = dfs( columnNumber, hash_column_numbers);

    return result;
};

const dfs= (n, hash_column_numbers) =>{
    let result ="";
    if( n <= 26){
        return hash_column_numbers[n];
    }

    let last = n % 26 == 0 ? 26 : n % 26;
    let next = Math.floor((n - last) / 26);

    result = dfs(next, hash_column_numbers) + hash_column_numbers[last];

    return result;
}