/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
 var rearrangeBarcodes = function(barcodes) {
    const hash_bar ={};
    const result = [];
    for(let i = 0 ; i < barcodes.length; i++){
        hash_bar[barcodes[i]] ? hash_bar[barcodes[i]]++: hash_bar[barcodes[i]] = 1 ;
    }

    const keys = Object.keys(hash_bar).sort((a,b) => {
        if(hash_bar[b] - hash_bar[a] == 0){
            return b-a;
        }
        return hash_bar[b] - hash_bar[a] ;
    });

    let i = 0 ;
    for(let key of keys){
        let value = hash_bar[key];
        while(value-- > 0){
            result[i] = key ;
            i += 2 ;
            if(i >= barcodes.length){
                i = 1;
            }
        }
    }

    return result;
};