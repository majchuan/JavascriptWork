/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2);
    let complement = "";
    for(let i = 0; i < binary.length ; i++){
        complement += binary[i] == '0' ? '1' : '0'; 
    }

    return parseInt(complement,2);
};