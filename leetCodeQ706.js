
var MyHashMap = function() {
    this.hash = [];  
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  MyHashMap.prototype.put = function(key, value) {
      this.hash[key] = value;
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  MyHashMap.prototype.get = function(key) {
      if(this.hash[key]== null || this.hash[key] == undefined){
          return -1;
      }else{
          return this.hash[key];
      }
  };
  
  /** 
   * @param {number} key
   * @return {void}
   */
  MyHashMap.prototype.remove = function(key) {
      this.hash[key] = undefined;
  };
  
  /** 
   * Your MyHashMap object will be instantiated and called as such:
   * var obj = new MyHashMap()
   * obj.put(key,value)
   * var param_2 = obj.get(key)
   * obj.remove(key)
   */