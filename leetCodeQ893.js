/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    const groups = new Set();
    for(let w of words){
        groups.add(findSpecialStr(w));
    }

    return groups.size;
};

const findSpecialStr = (w) =>{
    const evenWords = w.split('').filter((e,i) => i % 2 == 0);
    const oddWords = w.split('').filter((e,i) => i % 2 == 1);

    evenWords.sort();
    oddWords.sort();

    return evenWords.join('') + oddWords.join('');
}