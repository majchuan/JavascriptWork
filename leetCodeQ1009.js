/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    const binary = n.toString(2);
    let complement = "";
    for(let i = 0; i < binary.length ; i++){
        complement += binary[i] == '0' ? '1' : '0'; 
    }

    return parseInt(complement,2);
};