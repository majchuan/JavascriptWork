/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    const result = num.toString().split('');

    console.log(result);
    for(let i = 0; i < result.length; i++){
        if(result[i] =='6'){
            result[i]='9'
            break;
        }
    }

    return parseInt(result.join(''));
};