/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let result = convert(s);
    let ans = 0 ;
    for(let i = 0 ; i < k ; i++){
        ans = sum(result);
        result = ans.toString();
    }
    return ans;
};

const convert = (s) =>{
    let convertNum ="";
    for(let i = 0 ; i < s.length; i++){
        convertNum += (s[i].charCodeAt(0)-96) + "";
    }
    return convertNum;
}

const sum = (s) =>{
    return s.split('').reduce((a,b) => parseInt(a) + parseInt(b),0);
}