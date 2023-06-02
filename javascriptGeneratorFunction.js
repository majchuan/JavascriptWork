/*
* Javascript Generator function 
* JavaScript generator functions are special types of functions that can control the execution flow within a function, 
* including the ability to pause and resume at specific points. This characteristic makes them ideal for generating potentially 
* infinite sequences like the Fibonacci sequence. By using the yield keyword, a generator function can produce a sequence of values over time, 
* instead of computing them all at once. It can thus generate an infinite data stream, creating each value only when needed. 
* This feature provides significant performance benefits and allows for the creation of infinite sequences without overloading memory resources.
*JavaScript Generator Functions
*Generator functions in JavaScript are special types of functions that can be paused and resumed, enabling them to yield multiple outputs on different invocations. 
*They are defined using the function* keyword, and they return a generator object when invoked.

*This generator object is special because it conforms to both the iterable and iterator protocols in JavaScript:

*The iterable protocol allows JavaScript objects to define or customize their iteration behavior. 
*An object is iterable if it implements the @@iterator method, meaning it has a property with a Symbol.iterator key.
*The iterator protocol is a protocol that defines a standard way to produce a sequence of values. 
*An object is an iterator when it implements a next() method.
*In other words, the generator object returned by a generator function is an iterator and can be used directly in a for...of loop and 
*other JavaScript constructs that expect an iterable.
*VThe yield keyword is used within the generator function to specify the values to be returned during its execution. 
*Each time yield is encountered, the function's execution is paused, and the yielded value is emitted. 
*The next invocation of the generator's next() method resumes the execution from where it was last paused.
*Maintaining State with JavaScript Generators
*One of the key features of JavaScript generator functions is their ability to maintain state between invocations. 
This allows you to create functions that generate a series of related values over multiple calls, such as a sequence of numbers or a sequence of Fibonacci numbers.

*When a generator function is invoked, it returns a generator object, but it doesn't execute any of the function's code immediately. 
*Instead, the function's code is executed on-demand, each time the generator's next() method is invoked. 
*This feature allows the generator to maintain its position in the code for subsequent calls, effectively preserving state between these calls.
*The next() Method in JavaScript Generators
*The next() method is a key part of the JavaScript generator function framework. When invoked on a generator object, 
*it resumes the execution of the function until the next yield statement is encountered. 
*The value yielded by the yield statement is returned as the value property of an object, 
*which also includes a done property indicating whether the generator has completed execution.

Here's an example demonstrating the use of the next() method:

function* simpleGenerator() {
  yield 1;
  yield 2;
  return 3;
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
*Each call to gen.next() resumes the execution of the simpleGenerator function, 
*returning an object that includes the yielded value and a flag indicating whether the function has completed its execution.
*/

/**
 * @return {Generator<number>}
 */
var fibGenerator_Using_Multiple_Yield_Statements = function*() {
    let  a = 0 , b =1 ;
    yield a;
    yield b;

    while(true){
        let c = a + b ;
        yield c;
        a=b;
        b=c;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator_Recursive_Generator_Function_for_Fibonacci_Sequencee = function*(a = 0, b=1) {
    yield a;

    yield* fibGenerator(b, a+b); 
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */