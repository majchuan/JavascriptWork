
var ProductOfNumbers = function() {
    this.productList = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num == 0){
        this.productList.splice(0,this.productList.length);
        return;
    }

    if(this.productList.length == 0){
        this.productList.push(num);
    }else{
        this.productList.push(this.productList[this.productList.length -1] * num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(this.productList.length < k) return 0;

    if(this.productList.length == k) return this.productList[this.productList.length-1];

    return this.productList[this.productList.length -1] / this.productList[this.productList.length - k - 1] ;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */