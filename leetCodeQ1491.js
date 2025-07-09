/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let maxSalary = Number.MIN_SAFE_INTEGER;
    let minSalary = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(let s of salary){
        maxSalary = Math.max(s , maxSalary);
        minSalary = Math.min(s, minSalary);
        sum += s ;
    }

    return (sum - minSalary - maxSalary)/(salary.length -2);

};