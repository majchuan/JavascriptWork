/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => b - a);
    let papers =1 ;
    let hindex = 0 ;
    let i = 0 ;
    while( i < citations.length){
        if(papers <= citations[i]) hindex = papers;
        i++;
        papers++;
    }

    return hindex; 
};