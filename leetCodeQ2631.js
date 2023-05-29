/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    this.hash_arr = this.hash_arr == null ? this.hash_arr={} : this.hash_arr;
    for(let i = 0 ; i < this.length ; i++){
        const id = fn(this[i]);
        this.hash_arr[id] ? this.hash_arr[id].push(this[i]) : this.hash_arr[id]=[this[i]];
    }

    return this.hash_arr;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */