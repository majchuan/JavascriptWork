
var WordDictionary = function() {
    this.dict ={};
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(this.dict[word.length] != null){
        this.dict[word.length].push(word);
    }else{
        this.dict[word.length] = [];
        this.dict[word.length].push(word);
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(this.dict[word.length] == null) return false;
    let ans = this.dict[word.length].find(x => checkWord(x,word));

    if(ans == true){
        return true;
    }else{
        return false;
    }
};

const checkWord =(w, word) =>{
    if(w.length != word.length) return false;
    
    let ans = w.search(word);
    if(ans >=0) return true;
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

