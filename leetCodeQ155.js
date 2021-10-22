var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.min > val){
        this.min = val; 
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let lastVal = this.stack.pop();
    if(this.min == lastVal){
        let minVal = this.stack.length == 0 ? Number.MAX_SAFE_INTEGER : this.stack[0];
        for(let i = 1 ; i < this.stack.length; i++){
            minVal = Math.min(minVal, this.stack[i]);
        }
        this.min = minVal;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
obj.top();
obj.pop();
console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());
obj.pop();
obj.push(2147483647);
obj.top();
console.log(obj.getMin());
obj.push(-2147483648);
obj.top();
console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());

//["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
//[[],     [2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]

//[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,undefined,null,-2147483648,undefined,null,undefined]
//[null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647]