/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.result=[];
    dfs(characters, this.result, 0, [], combinationLength);
    this.currPos = 0 ;
};

const dfs=(chars,result, index, curr, comLength)=>{
    if(comLength == curr.length){
        result.push(curr.join(''));
        return;
    }

    for(let i = index ; i < chars.length; i++){
        curr.push(chars[i]);
        dfs(chars, result, i + 1, curr, comLength);
        curr.pop(chars[i]);
    }

    return;
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    if(this.result.length > 0){
        let nextValue = this.result[this.currPos];
        this.currPos++;
        return nextValue;
    }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.currPos <this.result.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */