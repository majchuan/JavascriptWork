/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const hash_p = {};
    const paras = paragraph.replace(/[!?',;.']/g,' ').split(' ');
    console.log(paras);
    for(const p of paras){
        let low_p = p.toLowerCase();
        if(low_p.length > 0){
            hash_p[low_p] ? hash_p[low_p][1]++ : hash_p[low_p]=[low_p,1];
        }
    }
    
    for(const ban of banned){
        if(hash_p[ban]){
            delete hash_p[ban];
        }
    }
    
    return Object.values(hash_p).sort((x,y) => y[1] -x[1])[0][0].trim();
    
};