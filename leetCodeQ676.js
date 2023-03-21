var MagicDictionary = function() {
    this.dic = {};
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(let w of dictionary){
        this.dic[w] ? this.dic[w]++ : this.dic[w] = 1 ;
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for(let key in this.dic){
        if(key != searchWord && key.length == searchWord.length){
             for(let i = 0 ; i < searchWord.length ; i++){
                let regexWord = searchWord.slice(0,i) + "."+searchWord.slice(i+1);
                //console.log(key, key.search(regexWord), regexWord);
                if(key.search(regexWord) >=0 ){
                    return true;
                }
            }
        }
    }

    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */