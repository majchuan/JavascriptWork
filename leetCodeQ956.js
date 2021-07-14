const isAlienSorted = (words, order) => {
    let isSorted = false ;
    let i =0;
    let j = i+1;
    while(j< words.length){
        if(words[i] == words[j]) return true;
        let compareLength = words[i].length > words[j].length ? words[j].length : words[i].length;
        for(let z = 0 ; z < compareLength ; z++){
            console.log(order.indexOf(words[i][z]), order.indexOf(words[j][z]));
            if(order.indexOf(words[i][z])< order.indexOf(words[j][z])){
                break;
            }
            if(order.indexOf(words[i][z])> order.indexOf(words[j][z])){
                return false;
            }
        }
        if(words[i].length > words[j].length){
            return false;
        }
        i++;
        j++;
    }
    return true;
};

const words =["app","apple"];
const order ="abcdefghijklmnopqrstuvwxyz";
console.log(isAlienSorted(words,order));