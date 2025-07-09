
var NumberContainers = function() {
    this.hash_index ={};
    this.hash_number = {};

};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if(this.hash_index[index] == null){
        this.hash_index[index] = number;
    }
    const currNumber = this.hash_index[index];

    if(this.hash_number[number] == null){
        this.hash_number[number] = [];
    }

    if(currNumber != number){
       const currIndexs =  this.hash_number[currNumber];
       if(currIndexs != null) {
           const removeIndex = currIndexs.indexOf(index);
           this.hash_number[currNumber].splice(removeIndex,1);
        }
    }
    this.hash_index[index] = number;
    if(this.hash_number[number].includes(index) == false){
        this.hash_number[number].push(index);
    }

};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {

    if(this.hash_number[number]== null || this.hash_number[number].length == 0) return -1;
    return Math.min(...this.hash_number[number]);
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */