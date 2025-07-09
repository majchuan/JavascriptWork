
var MapSum = function() {
    this.hashMapSum = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.hashMapSum[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    const keys = Object.keys(this.hashMapSum);
    let totalSum = 0 ;
    for(let key of keys){
        if(key.slice(0,prefix.length) == prefix){
            totalSum += this.hashMapSum[key];
        }
    }
    
    return totalSum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
 const mapSum = new MapSum();
 mapSum.insert("apple", 3);  
 mapSum.sum("ap");           // return 3 (apple = 3)
 mapSum.insert("app", 2);    
 mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)