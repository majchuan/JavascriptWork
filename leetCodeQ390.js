/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let head = 1;
    let left = true; 
    let step = 1;
    let remain = n

    while(remain>1){
        if(left || remain%2==1){
            head += step
        }
        step *= 2
        left =! left
        remain = Math.floor(remain/2)
    }
    return
};

const n = 9 ;
console.log(lastRemaining(n));