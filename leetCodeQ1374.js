/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let str = '';
    if (n % 2 == 0) {
        str = "a".repeat(n-1);
        str += 'b';
    } else {
        for (let i = 0; i < n; i++) {
            str ="a".repeat(n)
        }
    }
    return str;
};
