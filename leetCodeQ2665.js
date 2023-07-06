/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const originalVal = init;
    return {
        increment : () =>{
            return ++init;
        },
        decrement : () =>{
            return --init;
        },
        reset : () =>{
            init = originalVal;
            return init;
        }
    }
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());