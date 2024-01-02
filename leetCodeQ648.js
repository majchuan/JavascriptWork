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