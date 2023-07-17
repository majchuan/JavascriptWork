/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let carry = 0;
    let i = num.length - 1;
    while (k != 0 || carry != 0 || i >= 0) {
        let lastDig = k % 10;
        k = Math.floor(k / 10);
        if (i < 0) {
            num.unshift(0);
            i = 0;
        }
        let dig = num[i] + lastDig + carry;
        num[i] = dig % 10;
        carry = Math.floor(dig / 10);
        i--;
    }

    if (carry !== 0) {
        num.unshift(carry);
    } 

    return num;
};