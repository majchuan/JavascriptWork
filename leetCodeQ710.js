/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
    this.hash_blacklist ={};
    this.totalNumber = n ;
    for(let i = 0 ; i< blacklist.length ; i++){
        this.hash_blacklist[blacklist[i]] = i;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    while(true){
        let index = Math.floor(Math.random() * this.totalNumber);
        if(this.hash_blacklist[index] == null){
            return index;
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */