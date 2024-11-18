/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    const result = new Array(n).fill(0);
    if(k == 0){
        return result;
    }

    if(k > 0){
        for(let i = 0 ; i < code.length; i++){
            let sum = 0 ;
            for(let j = 0 ; j < k ; j++){
                let position = (i + j + 1) % n;
                sum += code[position];
            }
            result[i] = sum;   
        }
        return result;
    }else{
        for(let i = 0; i < n ; i++){
            let sum = 0 ;
            for(let j = 0 ; j < Math.abs(k) ; j++){
                let position=(n + i - j - 1) % n;
                sum += code[position];
            }
            result[i] = sum;
        }
        return result;
    }
};