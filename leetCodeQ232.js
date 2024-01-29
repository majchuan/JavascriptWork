
var MyQueue = function() {
    this.stack1=[];
    this.stack2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(x);

    while(this.stack2.length>0){
        this.stack1.push(this.stack2.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) return -1;
    const top = this.stack1.pop();
    return top;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     if (this.empty()) return -1;

    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
      return this.stack1.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const stack = new MyQueue();
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(4);
console.log(stack);