/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    const hash_orders ={};
    for(let i= 0; i< order.length; i++){
        if(hash_orders[order[i]] == null){
            hash_orders[order[i]] = i ;
        }
    }

    let i = 0, j= i+1;
    while(j < words.length){
        let subLength = words[i].length > words[j].length ? words[j].length : words[i].length;
        if(words[i].substring(0,subLength) == words[j].substring(0, subLength)){
            if(word[i] > word[j]){
                return false;
            }else{
                return true;
            }
        }
        for(let t =0 ; t < subLength ; t++){
            if(hash_orders[words[i][t]] < hash_orders[words[j][t]]){
                break;
            }
            if(hash_orders[words[i][t]] > hash_orders[words[j][t]]){
                return false;
            }
        }

        i++;
        j++;
    }

    return true;
};
const words =["kuvp","q"], order ="ngxlkthsjuoqcpavbfdermiywz"
console.log(isAlienSorted(words, order));