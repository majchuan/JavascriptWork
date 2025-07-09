
var StockSpanner = function() {
    this.stockSpan = [[-1,0]];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1 ; 
    while(this.stockSpan.length != 0 && this.stockSpan[this.stockSpan.length-1][0] <= price){
        span += this.stockSpan.pop()[1];
    }
    this.stockSpan.push([price,span]);
    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */