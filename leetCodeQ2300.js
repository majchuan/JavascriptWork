/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairsTwoPointers = function(spells, potions, success) {
    let result = [];
    let spellsWithIndex = spells.map((e,index) => [e,index]);
    spellsWithIndex.sort((x,y) => x[0] - y[0]);
    potions.sort((x,y) => x-y);

    let left = 0 ; right = potions.length -1;
    while(left < spellsWithIndex.length){
        let product =  spellsWithIndex[left][0] * potions[right] ;

        while(right >= 0 && product >= success){
            right-- ;
            product = spellsWithIndex[left][0] * potions[right];
        }
        result[spellsWithIndex[left][1]] = potions.length -right -1;
        left++;
    }

    return result;
};

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairsBinarySearch = function(spells, potions, success) {
    potions.sort((x,y) => x-y);

    const result =[];

    for(let s of spells){
        let left = 0 ;
        let right = potions.length -1 ;
        let index = potions.length ;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            let product = potions[mid] * s ; 
            if(product < success){
                left = mid+1;
            }else{
                index = mid;
                right = mid -1;
            }
        }

        result.push(potions.length - index);
    }

    return result;
};