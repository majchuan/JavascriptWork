/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
 var wordSubsets = (A, B) => {
    const dedupedB = Array.from(new Set(B))
    const mergedBCounts = dedupedB.map(word =>getWordCount(word)).reduce(
        (acc, curCounts) => {
        return acc.map(
            (maxCount, idx) => Math.max(maxCount, curCounts[idx])
            )
    });
    
    return A.filter(word => {
        return isSubset(mergedBCounts, getWordCount(word))
    })
}

const getWordCount = word => {
    const counts = new Array(26).fill(0)
    for (let char of word) {
        counts[char.charCodeAt(0)-97]++;
    }
    return counts
}

const isSubset = (subsetCount, wordCount) => {
    for (let i = 0; i < subsetCount.length; i++) {
        if (subsetCount[i] > wordCount[i]) return false
    }
    return true
}

const words1 =["amazon","apple","facebook","google","leetcode"] , words2=["e","o"];

const words11 =["acaaa","cbabb","ababc","aabbb","cbbbc"], words22=["ba","bb","cc"]
//console.log(wordSubsets(words11,words22));


/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
 var wordSubsets_1 = function(words1, words2) {
    let result =[];
    const hash_1 = hash_words1(words1);
    const hash_2 = hash_words2(words2);
    return findUniversalWord(hash_1, hash_2, words2.length);
};

const findUniversalWord = (hash_1, hash_2) =>{
    let result =[];
    for(let hash_1_key in hash_1){
        let isMatched = true;
        for(let hash_2_key in hash_2){
            if(hash_1[hash_1_key][hash_2_key] == null || hash_1[hash_1_key][hash_2_key] < hash_2[hash_2_key] ){
                isMatched = false;
            }
        }
        if(isMatched){
            result.push(hash_1_key);
        }
    }
    return result;
}

const hash_words2 =( words2) =>{
    const hash_words2 ={};
    const merge_hash_words ={};
    for(let item of words2){
        if(hash_words2[item] == null){
            const hash_words_subset ={};
            for(let s of item){
                hash_words_subset[s] ? hash_words_subset[s]++: hash_words_subset[s]= 1;
            }
            hash_words2[item] = hash_words_subset ;
        }
    }
    for(let item in hash_words2){
        for(let s in hash_words2[item]){
            if(merge_hash_words[s] == null){
                merge_hash_words[s] = hash_words2[item][s];
            }else{
                merge_hash_words[s] = Math.max(hash_words2[item][s], merge_hash_words[s]);
            }
        }
    }
    return merge_hash_words ;
}

const hash_words1 = (words1) =>{
    const hash_words1 = {};
    for(let item of words1){
        if(hash_words1[item] == null){
            const hash_words_subset ={};
            for(let s of item){
                hash_words_subset[s] ? hash_words_subset[s]++: hash_words_subset[s]= 1;
            }
            hash_words1[item] = hash_words_subset ;
        }
    }
    
    return hash_words1 ;
}
//console.log(hash_words1(words11));
console.log(wordSubsets_1(words1,words2));