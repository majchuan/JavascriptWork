
var MyHashSet = function() {
    this.hashSet = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hashSet[key] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.hashSet[key] =undefined;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hashSet[key] != undefined ;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */