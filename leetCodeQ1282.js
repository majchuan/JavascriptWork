/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const hash_group = {};

    for(let i =  0 ; i < groupSizes.length ; i++){
        hash_group[groupSizes[i]] ? hash_group[groupSizes[i]].push(i) : hash_group[groupSizes[i]] = [i];
    }

    const result = [];

    for(let key in hash_group){
        if(key >= hash_group[key].length){
            result.push(hash_group[key]);
        }else{
            let left = 0 ;
            while(left < hash_group[key].length){
                result.push(hash_group[key].slice(left, left + parseInt(key)));
                left += parseInt(key); 
            }
        }
    }

    return result;
};

const groupSizes =[2,2,1,1,1,1,1,1];

console.log(groupThePeople(groupSizes));