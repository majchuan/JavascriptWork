/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0 , j = s.length -1 ;
    while(i < j){
        swap(s, i, j);
        i++;
        j--;
    }
};

const swap =(s, i, j) =>{
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp ;
}

const s = ["h","e","l","l","o"]
reverseString(s);
console.log(s);