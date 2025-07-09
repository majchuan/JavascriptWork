
/**
 * @param number size 
 */
 var MovingAverage = function(size) {
    this.Averages = [];
    this.size = size;
};

/**
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.Averages.length < this.size){
        this.Averages.unshift(val);
    }else{
        this.Averages.pop();
        this.Averages.unshift(val);
    }
    const sum = this.Averages.reduce((x,y) => x+y,0);
    return sum / this.Averages.length;
};

let m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));