/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const sentences = sentence.split(" ");
    for(let i = 0 ; i < sentences.length ; i++){
        for(let word of dictionary){
            if(sentences[i].startsWith(word)){
                sentences[i] = word;
            }
        }
    }

    return sentences.join(" ");
};

/*Fast function */
 
var Trie = function() {
    this.trie = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function(word) {
    let pointer = this.trie;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (pointer.has(char)) {
            pointer = pointer.get(char);
        } else {
            pointer.set(char, new Map());
            pointer = pointer.get(char);
        }
    }

    pointer.set('isEnd', true);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let pointer = this.trie;
    let word = '';

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];

        if (pointer.has(char)) {
            word += char;
            pointer = pointer.get(char);
            if (pointer.get('isEnd')) return word;
        } else {
            return prefix;
        }
    }

    return word;
};

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWordsFasterFunction = function(dictionary, sentence) {
    sentence = sentence.split(' ');
    const trie = new Trie();

    for (const word of dictionary) {
        trie.insert(word);
    }

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = trie.startsWith(sentence[i]);
    }

    return sentence.join(' ');
};