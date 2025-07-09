var SmallestInfiniteSet = function() {
    this.stack=[];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.stack.length == 0){
        this.stack.push(1);
        return 1;
    }else{
        for(let i = 0 ; i < this.stack.length; i++){
            if(i+1 < this.stack[i]){
                this.stack.splice(i,0, i+1);
                return i+1;
            }
        }

        this.stack.push(this.stack[this.stack.length -1] + 1);
        return this.stack[this.stack.length -1];
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(this.stack.includes(num)){
        let index = this.stack.findIndex(x => x == num);
        this.stack.splice(index,1);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */