/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.tries = [] ; 
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.tries.push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const index = this.tries.indexOf(word);
    if(index < 0){
        return false;
    }else{
        return true;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    for(let i =0 ; i < this.tries.length; i++){
        if(this.tries[i].substring(0,prefix.length) == prefix){
            return true;
        }
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
 const trie = new Trie();
 console.log(trie.insert("apple"));
 console.log(trie.search("apple"));   // return True
 console.log(trie.search("app"));     // return False
 console.log(trie.startsWith("app")); // return True
 console.log(trie.insert("app"));
 console.log(trie.search("app"));     // return True