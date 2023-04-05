/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((x,y) => y-x);
    let left = 0 ;
    let right = people.length -1 ;
    //const result = [];
    let count = 0 ;
    while(left <= right){
        let sumOfWeight = people[left] + people[right];
        if(sumOfWeight > limit){
            //result.push([people[left]]);
            left++;
        }

        if(sumOfWeight <= limit){
            //result.push([people[left], people[right]]);
            left++;
            right--;
        }
        count++;
    }

    //console.log(result);
    return count;
};