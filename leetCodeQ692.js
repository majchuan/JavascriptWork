/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const hash_words={};
    const hash_keys={};
    for(let w of words){
        hash_keys[w] ? hash_keys[w]++ : hash_keys[w]=1;
        hash_words[w] ? hash_words[w][1]++ : hash_words[w]=[w,1];
    }
    
    const sorted_keys = [...new Set(Object.values(hash_keys))];
    const sorted_words =Object.values(hash_words);
    
    const result = [];
    for(let key in sorted_keys){
        result.push(sorted_words.filter(x => x[1] == sorted_keys[key]));
    }
    for(let s of result){
        s.sort((x,y) => {
            if(x[0] < y[0]){
                return -1;
            }else{
                return 1;
            }
        });
    }
    
    result.sort((x,y) => y[0][1] - x[0][1]);
    let result1=[];
    result.map(x=> result1 = [...result1, ...x]);
        
    return result1.slice(0,k).map(x => x[0]);
};

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequentCleanCode = function(words, k) {
    const mappings = {}
    for(let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }
    
    const sorted = Object.keys(mappings).sort((a, b) => {
        if(mappings[a] === mappings[b]) {
            return a > b ? 1 : -1
        }
        
        return mappings[b] - mappings[a]
    })
    
    return sorted.slice(0, k)
};