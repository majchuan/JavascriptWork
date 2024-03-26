/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    const set = new Set();
    for (const num of banned) {
        set.add(num);
    }

    let count = 0, sum = 0;
    for (let i = 1; i <= n; ++i) {
        if (!set.has(i) && sum + i <= maxSum) {
            count++;
            sum += i;
        }
    }
    return count;
};