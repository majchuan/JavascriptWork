/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let counter = 0 ;
    const hash_words = {};
    for(let w of words){
        hash_words[w] ? hash_words[w]++ : hash_words[w]=1;
    }
    
    const word_keys = Object.keys(hash_words);
    for(let w of word_keys){
        let s1 = 0;
        let w1 = 0;
        while(s1 < s.length && w1 < w.length){
            if(w[w1] == s[s1]){
                s1++;
                w1++;
            }else{
                s1++;
            }
        }
        
        if(w1 == w.length){
            counter += hash_words[w];
        }
    }
    return counter;
};

const s="qlhxagxdqh" ,words = ["qlhxagxdq","qlhxagxdq","lhyiftwtut","yfzwraahab"];
console.log(numMatchingSubseq(s,words));
