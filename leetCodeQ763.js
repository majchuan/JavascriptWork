/**
 * @param {string} s
 * @return {number[]}
 */
/*
*Two pointers, fast approach.
*/
var partitionLabels = function(s) {
    let hash_s = new Map();
    for(let i = 0 ; i < s.length; i++){
        hash_s.set(s[i],i);
    }


    let start = 0, end = 0 , i = 0 ;
    const result = [];

    while(i < s.length){
        end = Math.max(end, hash_s.get(s[i]));

        if(i == end){
            result.push(end - start + 1);
            start = end+1;
        }

        i++;
    }

    return result;
};

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabelsTwoHashmaps = function(s) {
    let hash_s = new Map();
    for(let i = 0 ; i < s.length; i++){
        if(hash_s.has(s[i])){
            hash_s.set(s[i],hash_s.get(s[i])+1);
        }else{
            hash_s.set(s[i],1);
        }
    }
    console.log(hash_s);
    const result =[];
    const partions = new Map();
    let lastIndex = 0 ;
    for(let i = 0 ; i<s.length; i++){
        if(partions.has(s[i])){
            partions.set(s[i],partions.get(s[i])-1);
        }else{
            partions.set(s[i], hash_s.get(s[i])-1);
        }

        let isKeyClean = true;
        for(let key of partions.keys()){
            if(partions.get(key) > 0){
                isKeyClean =false;
                break;
            }
        }

        if(isKeyClean){
            result.push(i-lastIndex+1);
            lastIndex = i+1;
            partions.clear();
        }
    }

    return result;
};

const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));